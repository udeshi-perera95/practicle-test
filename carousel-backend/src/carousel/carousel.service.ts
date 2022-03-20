import { Injectable } from '@nestjs/common';
import { data } from './data/mockData';

@Injectable()
export class CarouselService {
   
    // get no of slides and view data
     viewCarousel(count:number){
        let data1 = data.slice(0,count);
        console.log(data1)
        return data1;
    }
}
