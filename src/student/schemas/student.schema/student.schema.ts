import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Document, Types } from 'mongoose';
import { Advisor } from 'src/advisor/schemas/advisor.schema/advisor.schema';
import { Course } from 'src/course/schemas/course.schema/course.schema';
import { Department } from 'src/department/schemas/department.schema/department.schema';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email?: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  level: number;

  @Prop({ type: Types.ObjectId, ref: 'Course' })
  course: Course; // the course of the student


  @Prop({ required: true, type: Types.ObjectId, ref: 'Department' })
  department: Department; // the department of the student

  @Prop({ required: true, type: Types.ObjectId, ref: 'Advisor' })
  tutor: Advisor; //the tutor of the course

  @Prop({ default: false })
  async comparePassword(candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
  }
}

export const StudentSchema = SchemaFactory.createForClass(Student);

// Apply the pre-save hook for password hashing
StudentSchema.pre('save', async function (this: StudentDocument) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});
