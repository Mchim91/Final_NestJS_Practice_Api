import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get('/:userId?')
  getPost(@Param('userId') userId: string) {
    return this.postService.findAll(userId);
  }

  @ApiOperation({
    summary: 'Create a new blog post',
  })
  @ApiResponse({
    status: 201,
    description:
      'You get a 201 response if your post is correctly successfully',
  })
  @Post()
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }
}
