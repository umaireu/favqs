import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { QuotesModule } from './quotes/quotes.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './quotes/quote.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const host = configService.getOrThrow<string>('DATABASE_HOST');
        const database = configService.getOrThrow<string>('DATABASE_NAME');

        return {
          type: 'mongodb',
          url: `mongodb://${host}:27017/${database}`,
          entities: [Quote],
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
    QuotesModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {}
