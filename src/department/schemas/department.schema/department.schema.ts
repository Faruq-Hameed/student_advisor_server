import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Document, Types } from 'mongoose';
import { Advisor } from 'src/advisor/schemas/advisor.schema/advisor.schema';

export type DepartmentDocument = Department & Document;

@Schema()
export class Department {
  @Prop({ required: true })
  details: string;

  @Prop({ required: true })
  information: string;

}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
