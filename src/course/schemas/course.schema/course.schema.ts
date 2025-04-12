import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Document, Types } from 'mongoose';
import { Advisor } from 'src/advisor/schemas/advisor.schema/advisor.schema';

export type CourseDocument = Course & Document;

@Schema()
export class Course {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  code: string;

  @Prop({ required: true, Types: Types.ObjectId, ref: 'Advisor' })
  tutor: Advisor; //the tutor of the course
}

export const CourseSchema = SchemaFactory.createForClass(Course);
