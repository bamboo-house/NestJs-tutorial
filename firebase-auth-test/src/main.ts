import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import { ConfigService } from '@nestjs/config';
import { initializeApp } from 'firebase/app';
import { FirebaseApp } from '@firebase/app';

export const firebaseApp: FirebaseApp = undefined;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  const adminConfig: ServiceAccount = {
    projectId: configService.get<string>('FIREBASE_PROJECT_ID'),
    privateKey: configService
      .get<string>('FIREBASE_PRIVATE_KEY')
      .replace(/\\n/g, '\n'),
    clientEmail: configService.get<string>('FIREBASE_CLIENT_EMAIL'),
  };

  const firebaseConfig = {
    apiKey: configService.get<string>('FIREBASE_API_KEY'),
  };

  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
  });

  await app.listen(3000);
}
bootstrap();
