# [NestJS Fundamentals Course] NestJS Fundamentals Course [ENG, 2020]

<br/>

Have an issue!
If you know how to solve, please write.

<br/>

    $ npm run test:watch -- coffees.service

<br/>

```
 FAIL  src/coffees/coffees.service.spec.ts
  ● Test suite failed to run

    TypeError: Right-hand side of 'instanceof' is not an object

      12 | export class CoffeesService {
      13 |   constructor(
    > 14 |     @InjectRepository(Coffee)
         |      ^
      15 |     private readonly coffeeRepository: Repository<Coffee>,
      16 |
      17 |     @InjectRepository(Flavor)

      at Object.getRepositoryToken (node_modules/@nestjs/typeorm/dist/common/typeorm.utils.js:17:27)
      at Object.<anonymous>.exports.InjectRepository (node_modules/@nestjs/typeorm/dist/common/typeorm.decorators.js:6:130)
      at Object.<anonymous> (src/coffees/coffees.service.ts:14:6)
      at Object.<anonymous> (src/coffees/coffees.service.spec.ts:3:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.868 s
Ran all test suites matching /coffees.service/i.

```

<br/>

### [Development Step By Step](./Development.md)

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
