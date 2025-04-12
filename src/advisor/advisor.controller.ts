import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateAdvisorDto } from './dto/createAdvisor.dto';
import { AdvisorService } from './advisor.service';

@Controller('advisor')
export class AdvisorController {
    constructor(private readonly advisorService: AdvisorService) {}
    @Post()
    async create(@Body() createAdvisorDto: CreateAdvisorDto) {
        return this.advisorService.create(createAdvisorDto);
    }
    
    @Get()
    async findAll() {
        return this.advisorService.findAll();
    }
    
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.advisorService.findOne(id);
    }
}
