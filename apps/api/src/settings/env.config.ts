import { plainToInstance } from 'class-transformer';
import { IsEnum, IsString, validateSync } from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

export class EnvVariables {
  @IsEnum(Environment) NODE_ENV: Environment;
  // @IsString() DATABASE_URL: string;
  @IsString() JWT_SECRET: string;
}

export function configValidate(config: Record<string, unknown>): EnvVariables {
  const validatedConfig = plainToInstance(EnvVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, { skipMissingProperties: false });
  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
