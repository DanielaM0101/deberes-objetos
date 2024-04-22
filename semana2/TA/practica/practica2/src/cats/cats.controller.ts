import { Controller, Get, HttpCode, Post, Param, Body, Delete } from '@nestjs/common';
import { CreateCatDto } from './dto/cat dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }
    @Post()
    async create(@Body()CreateCatDto: CreateCatDto){
    this.catsService.create(CreateCatDto);
}

@Get()
async findAll(): Promise < Cat[] > {
    return this.catsService.findAll();
}
}







/*
@Controller('cats')
export class CatsController {
    @Post()

    creates (): string {
        return 'This action adds a new cat';
    }


@Get()
@HttpCode(418)
findAll(): string {
    return 'This action returns all cats '
}
 
@Get (':id')
findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
}
@Post()
async create (@Body() CreateCatDto: CreateCatDto){
    return 'This action adds a new cat'
}


@Delete(':id')
remove(@Param('id') id: string) {
  return `This action removes cat #${id}`;
}

}*/