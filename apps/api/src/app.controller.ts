import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('health-check')
  public async healthCheck(): Promise<string> {
    return 'alive';
  }
}
