import { Injectable } from '@nestjs/common';
import {
  Student,
  StudentDocument,
} from './schemas/student.schema/student.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/createStudent.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const createdStudent = new this.studentModel(createStudentDto);
    return createdStudent.save();
  }

  //async join department where department id is used
  async joinDepartment(studentId: string, departmentId: string): Promise<Student> {
    return this.studentModel
      .findByIdAndUpdate(
        studentId,
        { $set: { department: departmentId } },
        { new: true },
      )
      .populate('course')
      .populate('department')
      .exec();
  }

  //async join course where course id is used
  async joinCourse(studentId: string, courseId: string): Promise<Student> {
    return this.studentModel
      .findByIdAndUpdate(
        studentId,
        { $set: { course: courseId } },
        { new: true },
      )
      .populate('course')
      .populate('department')
      .exec();
  }

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().populate('course').populate('department').exec();
  }

  async findOne(id: string): Promise<Student> {
    return this.studentModel.findById(id).populate('course').populate('department').exec();
  }

//   async update(
//     id: string,
//     updateStudentDto: UpdateStudentDto,
//   ): Promise<Student> {
//     return this.studentModel
//       .findByIdAndUpdate(id, updateStudentDto, { new: true })
//       .exec();
//   }

//   async remove(id: string): Promise<Student> {
//     return this.studentModel.findByIdAndRemove(id).exec();
//   }
}
