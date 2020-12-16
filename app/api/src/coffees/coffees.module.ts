import { Module } from '@nestjs/common';
import { CoffeesController } from 'src/coffees/coffees.controller';
import { CoffeesService } from 'src/coffees/coffees.service';

@Module({ controllers: [CoffeesController], providers: [CoffeesService] })
export class CoffeesModule {}
