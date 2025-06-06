import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Department, DepartmentSchema } from './schemas/department.schema/department.schema';

@Module({
        imports: [MongooseModule.forFeature([{ name: Department.name, schema: DepartmentSchema }])],
  
  providers: [DepartmentService],
  controllers: [DepartmentController],
})
export class DepartmentModule {}
