import { Body, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { PatchPostDto } from '../dtos/patch-post.dto';

@Injectable()
export class PostsService {
  constructor(
    private readonly userService: UsersService,
    private readonly tagsService: TagsService,
    @InjectRepository(Post)
    private readonly postRepo: Repository<Post>,
    @InjectRepository(MetaOption)
    readonly metaOptionsRepo: Repository<MetaOption>,
  ) {}

  async create(@Body() createPostDto: CreatePostDto) {
    // Find author from database based on authorId
    const author = await this.userService.findOneById(createPostDto.authorId);
    // Find tags
    const tags = await this.tagsService.findMultipleTags(createPostDto.tags);

    // Create Post
    const post = this.postRepo.create({
      ...createPostDto,
      author: author,
      tags: tags,
    });
    // Save Post
    return await this.postRepo.save(post);
  }

  async findAll() {
    const post = await this.postRepo.find({
      relations: {
        metaOptions: true,
        author: true,
        tags: true,
      },
    });
    return post;
  }

  async update(patchPostDto: PatchPostDto) {
    // Find new tags
    let tags = await this.tagsService.findMultipleTags(patchPostDto.tags);

    // Update the post
    let post = await this.postRepo.findOneBy({
      id: patchPostDto.id,
    });

    // Update the tags
    post.tags = tags;

    return await this.postRepo.save(post);
  }

  async delete(id: number) {
    await this.postRepo.delete(id);

    return { deleted: true, id };
  }
}
