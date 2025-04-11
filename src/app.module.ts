import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { DepartmentModule } from './department/department.module';
import { AdvisorModule } from './advisor/advisor.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [StudentModule, DepartmentModule, AdvisorModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
