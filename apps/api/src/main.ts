import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { AppSetting } from './settings/app.setting';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  const appSetting = new AppSetting(app, configService);
  appSetting.initialize();

  const PORT = 3000;
  await app.listen(PORT).then(() => {
    Logger.log(`Server listening on http://localhost:${PORT}`);
  });
}
bootstrap();
