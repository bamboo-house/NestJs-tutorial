import { Controller, Get } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Controller('auth')
export class AuthController {
  @Get()
  async sample() {
    const users = await admin.auth().listUsers();
    users.users.forEach((user) => {
      console.log(user.toJSON());
    });
    return users;
  }
}
