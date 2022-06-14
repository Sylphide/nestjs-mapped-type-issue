import { ChildDTO } from './child.dto';
import { BaseDTO } from './base.dto';
import { Controller, Get } from '@nestjs/common';
import { ChildOmitDTO } from './child.omit.dto';

@Controller()
export class AppController {
  @Get()
  getHello() {
    const baseDTO = new BaseDTO({ id: 1 });
    console.log(baseDTO.toJSON); // Defined
    const childDTO = new ChildDTO({ name: 'test', id: 2 });
    console.log(childDTO.toJSON); // Defined
    const childOmitDTO = new ChildOmitDTO({ name: 'test', label: 'test' }); // Constructor doesn't aknowledge (data?: Partial<T>) as defined in BaseDTO
    console.log(childOmitDTO.toJSON); // Undefined
  }
}
