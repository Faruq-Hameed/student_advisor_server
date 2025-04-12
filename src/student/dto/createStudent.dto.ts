//CreateStudentDto
import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStudentDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;
    
    @IsString()
    department: string;
    
    @IsString()
    course: string;

    @IsString()
    level: string;

    @IsString()
    advisor: string;
}