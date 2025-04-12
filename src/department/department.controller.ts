import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/createDepartment.dto';

@Controller('departments')
export class DepartmentController {
    constructor(private readonly departmentService: DepartmentService) {}

    @Post()
    async create(@Body() createDepartmentDto: CreateDepartmentDto) {
        return this.departmentService.create(createDepartmentDto);
    }

    @Get()
    async findAll() {
        return this.departmentService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.departmentService.findOne(id);
    }
}
