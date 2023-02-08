import { Body, Controller, Get, Post } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { SignUpModel } from './models/signup.model';

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

  @Post('signup')
  async signUp(@Body() signupModel: SignUpModel) {
    console.log('signupModel', signupModel);
    const user = await admin.auth().createUser({
      email: signupModel.email,
      password: signupModel.password,
    });
    return user;
  }
}
