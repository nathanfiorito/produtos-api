import { Livro } from './livro.model';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
    constructor(private livrosService: LivrosService){

    }

    @Get()
    async getAll(): Promise<Livro[]> {
        return this.livrosService.getAll();
    }

    @Get(':id')
    async getOne(@Param() params): Promise<Livro>{
        return this.livrosService.getOne(params.id);
    }

    @Post()
    async create(@Body() body: Livro){
        this.livrosService.create(body);
    }

    @Put()
    async update(@Body() body: Livro): Promise<[number, Livro[]]>{
        return this.livrosService.update(body);
    }

    @Delete(':id')
    async remove(@Param() params){
        this.livrosService.delete(params.id)
    }
}