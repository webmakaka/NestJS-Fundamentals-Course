import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from 'src/coffees/dto/create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
