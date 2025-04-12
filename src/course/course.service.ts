import { Injectable } from '@nestjs/common';
import {
  Course,
  CourseDocument,
} from './schemas/course.schema/course.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCourseDto } from './dto/createStudent.dto';

@Injectable()
export class CourseService {
    constructor(
        @InjectModel(Course.name)
        private courseModel: Model<CourseDocument>,
    ) {}
    
    async create(createCourseDto: CreateCourseDto): Promise<Course> {
        const createdCourse = new this.courseModel(createCourseDto);
        return createdCourse.save();
    }
    
    async findAll(): Promise<Course[]> {
        return this.courseModel
        .find()
        .populate('tutor')
        .exec();
    }
    
    async findOne(id: string): Promise<Course> {
        return this.courseModel
        .findById(id)
        .populate('tutor')
        .exec();
    }
}
