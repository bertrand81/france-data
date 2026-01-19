import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  /*
  getHello(): string {
    return 'Hello World depuis le backend!';
  }
    */
    

 
  getHello() {
    return { message: 'Hello World depuis le backend!' };
  }
    

}
