import { Module } from '@nestjs/common';
import { AdvisorService } from './advisor.service';
import { AdvisorController } from './advisor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Advisor, AdvisorSchema } from './schemas/advisor.schema/advisor.schema';

@Module({
      imports: [MongooseModule.forFeature([{ name: Advisor.name, schema: AdvisorSchema }])],
  
  providers: [AdvisorService],
  controllers: [AdvisorController],
})
export class AdvisorModule {}
