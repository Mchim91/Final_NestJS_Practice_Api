import { Injectable } from '@nestjs/common';
import { CreateTagDto } from '../dtos/create-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Tag } from '../tag.entity';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagsRepo: Repository<Tag>,
  ) {}

  async createTag(createTagDto: CreateTagDto) {
    const tag = this.tagsRepo.create(createTagDto);
    const data = this.tagsRepo.save(tag);

    return data;
  }

  async findMultipleTags(tags: number[]) {
    const results = await this.tagsRepo.find({
      where: {
        id: In(tags),
      },
    });

    return results;
  }

  async delete(id: number) {
    await this.tagsRepo.delete(id);

    return {
      deleted: true,
      id,
    };
  }

  async softRemove(id: number) {
    await this.tagsRepo.softDelete(id);

    return {
      softDeleted: true,
      id,
    };
  }
}
