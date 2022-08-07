import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello davamo!';
  }

  getEndpoint(): string {
    return 'aloha !!!';
  }
}
