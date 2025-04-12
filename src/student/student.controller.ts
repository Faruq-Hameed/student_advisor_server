import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateStudentDto } from './dto/createStudent.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}
    
    @Post()
    async create(@Body() createStudentDto: CreateStudentDto) {
        return this.studentService.create(createStudentDto);
    }
    
    @Get()
    async findAll() {
        return this.studentService.findAll();
    }
    
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.studentService.findOne(id);
    }
    
    // @Put(':id')
    // async update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    //     return this.studentService.update(id, updateStudentDto);
    // }
    
    // @Delete(':id')
    // async remove(@Param('id') id: string) {
    //     return this.studentService.remove(id);
    // }
}
