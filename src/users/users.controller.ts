import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Put,
  Body,
  ParseIntPipe,
  Query,
  DefaultValuePipe,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  @Get(':id')
  getUser(
    @Param('id', new DefaultValuePipe(1), ParseIntPipe) id: number | undefined,
    @Query('limit') limit: any,
  ) {
    console.log(id);
    console.log(limit);
    return 'You sent a message';
  }

  @Post()
  createUser(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    console.log(createUserDto);

    return 'You sent a post to the request';
  }
}
