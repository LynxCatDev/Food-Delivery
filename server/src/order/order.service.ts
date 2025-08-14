import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { returnProductObject } from 'src/product/return-product.object';
import Stripe from 'stripe';
import { OrderDto } from './dto/order.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OrderService {
  private stripe: Stripe;

  constructor(
    private cfg: ConfigService,
    private prisma: PrismaService,
  ) {
    const key = this.cfg.get<string>('STRIPE_SECRET_KEY');
    if (!key) throw new Error('STRIPE_SECRET_KEY is not set');
    this.stripe = new Stripe(key);
  }

  getAll = async () => {
    return this.prisma.order.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        items: {
          include: {
            product: {
              select: returnProductObject,
            },
          },
        },
      },
    });
  };

  getByUserId = async (userId: string) => {
    return this.prisma.order.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        items: {
          include: {
            product: {
              select: returnProductObject,
            },
          },
        },
      },
    });
  };

  placeOrder = async (dto: OrderDto, userId: string) => {
    const total = dto.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );

    if (total < 1) {
      throw new Error('Amount must be at least 1 usd');
    }

    const order = await this.prisma.order.create({
      data: {
        items: {
          create: dto.items,
        },
        total,
        user: {
          connect: { id: userId },
        },
      },
    });

    const totalInCents = Math.round(total * 100);
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: totalInCents,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
      description: `Order by userId ${order.userId}`,
    });

    return { clientSecret: paymentIntent.client_secret };
  };
}
