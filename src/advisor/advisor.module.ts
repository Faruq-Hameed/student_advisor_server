import { Module } from '@nestjs/common';
import { AdvisorService } from './advisor.service';
import { AdvisorController } from './advisor.controller';

@Module({
  providers: [AdvisorService],
  controllers: [AdvisorController],
})
export class AdvisorModule {}
