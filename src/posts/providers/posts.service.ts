import { Body, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';

@Injectable()
export class PostsService {
  constructor(
    private readonly userService: UsersService,
    @InjectRepository(Post)
    private readonly postRepo: Repository<Post>,
    @InjectRepository(MetaOption)
    readonly metaOptionsRepo: Repository<MetaOption>,
  ) {}

  async create(@Body() createPostDto: CreatePostDto) {
    // Create metaOptions
    const metaOptions = createPostDto.metaOptions
      ? this.metaOptionsRepo.create(createPostDto.metaOptions)
      : null;

    if (metaOptions) {
      await this.metaOptionsRepo.save(metaOptions);
    }
    const post = this.postRepo.create(createPostDto);
    if (metaOptions) {
      post.metaOptions = metaOptions;
    }

    return await this.postRepo.save(post);
  }

  findAll(userId: string) {
    const user = this.userService.findOneById(userId);
    return [
      {
        user: user,
        title: 'Test Title',
        content: 'Test content',
      },
      {
        user: user,
        title: 'Test Title 2',
        content: 'Test content 2',
      },
    ];
  }
}
