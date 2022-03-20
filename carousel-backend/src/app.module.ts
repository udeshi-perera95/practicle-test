import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarouselModule } from './carousel/carousel.module';

@Module({
  imports: [CarouselModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
