//create student dto
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    title: string;


    @IsString()
    @IsNotEmpty()
    description: string;


    @IsString()
    @IsNotEmpty()
    code: string;

    @IsString()
    @IsNotEmpty()
    tutor: string;
}