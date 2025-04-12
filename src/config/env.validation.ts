import { plainToInstance } from 'class-transformer'
import { IsEnum, IsNumber, IsString, validateSync } from 'class-validator';

enum Environment {
    Development = 'development',
    Production = 'production',
    Test = 'test',
}
class EnvironmentVariables { //expected data in environment variables
    @IsEnum(Environment)
    NODE_ENV: Environment;

    @IsString()
    DB_HOST: string;

    @IsNumber()
    DB_PORT: number;

    @IsString()
    DB_USERNAME: string;

    @IsString()
    DB_PASSWORD: string;

    @IsString()
    DB_NAME: string;

    @IsString()
    JWT_SECRET: string;

    @IsString()
    JWT_EXPIRES: string;
    
}

export function validate(config: Record<string, unknown>) {
    const validatedConfig = plainToInstance( // transform the config object into an instance of the EnvironmentVariables class
        EnvironmentVariables, // class-transformer will use this class to validate the config object
        config, // config object to be validated
        { enableImplicitConversion: true }, // enableImplicitConversion: true allows automatic conversion of types
    );

    const errors = validateSync(validatedConfig, { // validateSync is a synchronous function that validates the object
        skipMissingProperties: false // skipMissingProperties: false means that all properties are required
    });

    if (errors.length > 0) { // if there are any validation errors, throw an error
        throw new Error(errors.toString());
    }
    return validatedConfig; // return the validated config object
}