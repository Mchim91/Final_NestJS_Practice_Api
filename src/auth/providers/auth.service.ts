import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  login(email: string, password: string, id: string) {
    // check user exist in database
    const user = this.usersService.findOneById('1234');
    // login
    // token
    return 'SAMPLE_TOKEN';
  }

  isAuthenticated() {
    return true;
  }
}
