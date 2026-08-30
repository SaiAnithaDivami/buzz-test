import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SwaggerModule.forRootAsync({
      useFactory: () =>
        new DocumentBuilder()
          .setTitle('Buzz Test API')
          .setDescription('NestJS backend API for Buzz Test')
          .setVersion('1.0.0')
          .build(),
      inject: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
