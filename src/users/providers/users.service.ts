import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    // check is the use exists with same email
    const existingUser = await this.usersRepo.findOne({
      where: { email: createUserDto.email },
    });
    // Handle exception
    if (!existingUser) {
      const user = this.usersRepo.create(createUserDto);
      const data = await this.usersRepo.save(user);

      return data;
    }
  }

  findAll(getUserParamDto: GetUsersParamDto, limit: number, page: number) {
    const isAuth = this.authService.isAuthenticated();
    console.log(isAuth);

    return [
      {
        firstName: 'John',
        email: 'john@doe.com',
      },
      {
        firstName: 'John',
        email: 'john@doe.com',
      },
    ];
  }

  findOneById(id: string) {
    return {
      id: 1234,
      firstName: 'John',
      email: 'john@doe.com',
    };
  }
}
