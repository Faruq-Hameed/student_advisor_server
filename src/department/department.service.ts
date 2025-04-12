import { Injectable } from '@nestjs/common';
import {
  Department,
  DepartmentDocument,
} from './schemas/department.schema/department.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDepartmentDto } from './dto/createDepartment.dto';

@Injectable()
export class DepartmentService {
    constructor(
        @InjectModel(Department.name)
        private departmentModel: Model<DepartmentDocument>,
    ) {}
    
    async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
        const createdDepartment = new this.departmentModel(createDepartmentDto);
        return createdDepartment.save();
    }
    
    async findAll(): Promise<Department[]> {
        return this.departmentModel
        .find()
        .populate('addedBy')
        .exec();
    }
    
    async findOne(id: string): Promise<Department> {
        return this.departmentModel
        .findById(id)
        .populate('addedBy')
        .exec();
    }
}
