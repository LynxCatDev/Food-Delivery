import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { returnCategoryObject } from './return-category.object';
import { CategoryDto } from './dto/category.dto';
import { generateSlug } from 'src/utils/generate-slug';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.category.findMany({
      select: returnCategoryObject,
    });
  }

  async byId(id: string) {
    const category = await this.prisma.category.findUnique({
      where: {
        id,
      },
      select: returnCategoryObject,
    });

    if (!category) throw new Error('Category not found');

    return category;
  }

  async bySlug(slug: string) {
    const category = await this.prisma.category.findUnique({
      where: {
        slug,
      },
      select: returnCategoryObject,
    });

    if (!category) throw new Error('Category not found');

    return category;
  }

  async create(dto: CategoryDto) {
    const { name, image } = dto;
    return this.prisma.category.create({
      data: {
        name,
        image,
        slug: generateSlug(name),
      },
    });
  }

  async update(id: string, dto: CategoryDto) {
    const { name, image } = dto;
    return this.prisma.category.update({
      where: {
        id,
      },
      data: {
        name,
        image,
        slug: generateSlug(name),
      },
    });
  }

  async delete(id: string) {
    return this.prisma.category.delete({
      where: {
        id,
      },
    });
  }
}
