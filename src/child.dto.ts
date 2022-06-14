import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { BaseDTO } from './base.dto';

@Exclude()
export class ChildDTO extends BaseDTO<ChildDTO> {
  @ApiProperty()
  @Expose()
  name: string;
}
