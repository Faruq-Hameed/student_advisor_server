import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { DepartmentModule } from './department/department.module';
import { AdvisorModule } from './advisor/advisor.module';
import { CourseModule } from './course/course.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import {validate} from './config/env.validation'; // Import the validate function for environment variable validation

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the configuration available globally
      envFilePath: '.env', // Path to the .env file
      ignoreEnvFile: false, // Whether to ignore the .env file
      validate,
      // validate(config) {
      //   // Custom validation logic can be added here
      //   // For example, you can check if certain environment variables are set
      //   const { MONGODB_URI, PORT, JWT_SECRET, JWT_EXPIRATION_TIME, JWT_ISSUER } = config;
      //   if (!MONGODB_URI) {
      //     throw new Error('MONGODB_URI is not defined');
      //   }
      //   if (!JWT_SECRET) {
      //     throw new Error('JWT_SECRET is not defined');
      //   }
      //   return config; // Return the validated config
      // },
      // validationSchema: Joi.object({
      //   MONGODB_URI: Joi.string().required(), // Validating the MONGODB_URI environment variable
      //   PORT: Joi.number().default(3000), // Validating the PORT environment variable
      //   JWT_SECRET: Joi.string().required(), // Validating the JWT_SECRET environment variable
      //   JWT_EXPIRATION_TIME: Joi.string().default('1h'), // Validating the JWT_EXPIRATION_TIME environment variable
      //   JWT_ISSUER: Joi.string().default('myapp'), // Validating the JWT_ISSUER environment variable
      // })
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
  // Importing the modules for students, departments, advisors, and courses
    StudentModule, DepartmentModule, AdvisorModule, CourseModule 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
