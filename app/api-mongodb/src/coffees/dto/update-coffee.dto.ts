import { PartialType } from '@nestjs/swagger';
import { CreateCoffeeDto } from 'src/coffees/dto/create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
