import { Module } from '@nestjs/common';
import { AdvisorService } from './advisor.service';

@Module({
  providers: [AdvisorService]
})
export class AdvisorModule {}
