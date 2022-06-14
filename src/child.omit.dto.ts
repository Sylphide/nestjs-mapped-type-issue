import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { ChildDTO } from './child.dto';

@Exclude()
export class ChildOmitDTO extends OmitType(ChildDTO, ['id']) {
  @ApiProperty()
  @Expose()
  label: string;
}
