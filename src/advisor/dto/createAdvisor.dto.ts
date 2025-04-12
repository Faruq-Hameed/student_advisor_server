//create advisor dto
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAdvisorDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    department: string;


}