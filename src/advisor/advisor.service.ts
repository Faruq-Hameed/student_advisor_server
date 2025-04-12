//advisor service
import { Injectable } from '@nestjs/common';
import {
  Advisor,
  AdvisorDocument,
} from './schemas/advisor.schema/advisor.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdvisorDto } from './dto/createAdvisor.dto';

@Injectable()
export class AdvisorService {
  constructor(
    @InjectModel(Advisor.name)
    private advisorModel: Model<AdvisorDocument>,
  ) {}

  async create(createAdvisorDto: CreateAdvisorDto): Promise<Advisor> {
    const createdAdvisor = new this.advisorModel(createAdvisorDto);
    return createdAdvisor.save();
  }

  async findAll(): Promise<Advisor[]> {
    return this.advisorModel.find().populate('department').exec();
  }

  async findOne(id: string): Promise<Advisor> {
    return this.advisorModel.findById(id).populate('department').exec();
  }
}
