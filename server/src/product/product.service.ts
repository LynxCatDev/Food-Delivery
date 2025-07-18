import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProductDto } from './dto/product.dto';
import { generateSlug } from 'src/utils/generate-slug';
import { returnProductObject } from './return-product.object';
import { CategoryService } from 'src/category/category.service';
import { contains } from 'class-validator';

@Injectable()
export class ProductService {
  constructor(
    private prisma: PrismaService,
    private categoryService: CategoryService,
  ) {}

  async getAll(searchValue?: string) {
    if (searchValue) {
      return this.search(searchValue);
    }

    return this.prisma.product.findMany({
      select: returnProductObject,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async search(searchValue: string) {
    return this.prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: searchValue,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: searchValue,
              mode: 'insensitive',
            },
          },
        ],
      },
      select: returnProductObject,
    });
  }

  async bySlug(slug: string) {
    const product = await this.prisma.product.findUnique({
      where: {
        slug,
      },
      select: returnProductObject,
    });

    if (!product) throw new Error('Product not found');

    return product;
  }

  async byCategory(categorySlug: string) {
    const products = await this.prisma.product.findMany({
      where: {
        category: {
          slug: categorySlug,
        },
      },
      select: returnProductObject,
    });

    if (!products) throw new Error('Products not found');

    return products;
  }

  async create(dto: ProductDto) {
    const { name, image, description, price = 0, categoryId } = dto;
    return this.prisma.product.create({
      data: {
        name,
        description,
        image,
        slug: generateSlug(name),
        price,
        categoryId,
      },
    });
  }

  async update(id: string, dto: ProductDto) {
    const { name, description, price, categoryId, image } = dto;

    await this.categoryService.byId(categoryId);

    return this.prisma.product.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        image,
        slug: generateSlug(name),
        price,
        category: {
          connect: {
            id: categoryId,
          },
        },
      },
    });
  }

  async delete(id: string) {
    return this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
