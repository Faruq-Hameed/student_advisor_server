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
    @IsOptional()
    department: string;
    
    @IsString()
    @IsOptional()
    course: string;

    @IsString()
    @IsOptional()
    advisor: string;
}