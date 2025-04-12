import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/createStudent.dto';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}
    @Post()
    async create(@Body() createCourseDto: CreateCourseDto) {
        return this.courseService.create(createCourseDto);
    }
    
    @Get()
    async findAll() {
        return this.courseService.findAll();
    }
    
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.courseService.findOne(id);
    }
}
