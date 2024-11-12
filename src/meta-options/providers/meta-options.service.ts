import { Injectable } from '@nestjs/common';
import { CreatePostMetaOptionsDto } from '../dtos/create-post-meta-options.dto';
import { MetaOption } from '../meta-option.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MetaOptionsService {
  constructor(
    @InjectRepository(MetaOption)
    private readonly metOptionsRepo: Repository<MetaOption>,
  ) {}

  async create(createPostMetaOptionsDto: CreatePostMetaOptionsDto) {
    const metaOptions = this.metOptionsRepo.create(createPostMetaOptionsDto);
    const data = this.metOptionsRepo.save(metaOptions);

    return data;
  }
}
