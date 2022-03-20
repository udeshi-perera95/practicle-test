import { Controller, Get, Param } from '@nestjs/common';
import { CarouselService } from './carousel.service';

@Controller('carousel')
export class CarouselController {

    constructor(private _carouselService:CarouselService){}

    // call carousel service and view data
    @Get('slides/:count')
    viewCarousel(@Param('count')count:number){
        return this._carouselService.viewCarousel(count);
    }
}
