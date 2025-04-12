import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Document, Types } from 'mongoose';
import { Department } from 'src/department/schemas/department.schema/department.schema';

export type AdvisorDocument = Advisor & Document;

@Schema()
export class Advisor {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;
  
  @Prop({ required: true, type: Types.ObjectId, ref: 'Department' })
  department: Department; // the department of the student


  @Prop({ default: false })
  async comparePassword(candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
  }
}

export const AdvisorSchema = SchemaFactory.createForClass(Advisor);

// Apply the pre-save hook for password hashing
AdvisorSchema.pre('save', async function (this: AdvisorDocument) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});
