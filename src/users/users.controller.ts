import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id?')
  @ApiOperation({
    summary: 'Fetches a list of registered users on the application',
  })
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully based on the query',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'The number of entries returned per query',
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description: 'The position of the page number you want the API to return',
  })
  getUser(
    @Param() getUserParamDto: GetUsersParamDto,
    @Query('limit') limit: number,
    @Query('page') page: number,
  ) {
    return this.usersService.findAll(getUserParamDto, limit, page);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  // Partially update
  @Patch()
  updateUser(@Body() patchUserDto: PatchUserDto) {}
}
