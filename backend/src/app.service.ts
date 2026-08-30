import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): object {
    this.logger.log('AppService ready');
    return { message: 'Hello from Buzz Test Backend' };
  }
}
