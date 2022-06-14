import { ApiProperty } from '@nestjs/swagger';
import { Exclude, instanceToPlain, Expose } from 'class-transformer';

@Exclude()
export class BaseDTO<T> {
  constructor(data?: Partial<T>) {
    if (data) {
      Object.assign(this, data);
    }
  }

  @ApiProperty()
  @Expose()
  id: number;

  // Converts instance to JSON output
  toJSON() {
    return instanceToPlain(this, {
      exposeUnsetFields: false,
    });
  }
}
