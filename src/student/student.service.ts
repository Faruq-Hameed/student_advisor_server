import { Injectable } from '@nestjs/common';
import { Student,StudentDocument } from './schemas/student.schema/student.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
    ) {}
    
    async create(createStudentDto: CreateStudentDto): Promise<Student> {
        const createdStudent = new this.studentModel(createStudentDto);
        return createdStudent.save();
    }
    
    async findAll(): Promise<Student[]> {
        return this.studentModel.find().exec();
    }
    
    async findOne(id: string): Promise<Student> {
        return this.studentModel.findById(id).exec();
    }
    
    async update(id: string, updateStudentDto: UpdateStudentDto): Promise<Student> {
        return this.studentModel.findByIdAndUpdate(id, updateStudentDto, { new: true }).exec();
    }
    
    async remove(id: string): Promise<Student> {
        return this.studentModel.findByIdAndRemove(id).exec();
    }
}
