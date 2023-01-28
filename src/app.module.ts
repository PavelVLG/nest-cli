import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SourceModule } from './source/source.module';
import { TopPageModule } from './top-page/top-page.module';
import { ReviewModule } from './review/review.module';
import { BotModule } from './bot/bot.module';

@Module({
  imports: [AuthModule, SourceModule, TopPageModule, ReviewModule, BotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
