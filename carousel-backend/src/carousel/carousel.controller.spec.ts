import { Test, TestingModule } from '@nestjs/testing';
import { CarouselController } from './carousel.controller';

describe('CarouselController', () => {
  let controller: CarouselController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarouselController],
    }).compile();

    controller = module.get<CarouselController>(CarouselController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
