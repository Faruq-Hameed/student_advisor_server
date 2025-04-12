//create department dto
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateDepartmentDto {
    @IsString()
    @IsNotEmpty()
    details: string;

    @IsString()
    @IsNotEmpty()
    addedBy: string; // department head
}