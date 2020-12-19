# [Kamil Mysliwiec, Mark Pieszak] NestJS Fundamentals Course [ENG, 2020]

<br/>

## 03. Add PostgreSQL with TypeORM

<br/>

### 020. Before we Get Started

<br/>

### 021. Prerequisite Install Docker

<br/>

### 022. Running PostgreSQL

    $ docker-compose up -d

<br/>

### 023. Introducing the TypeORM Module

    $ npm install @nestjs/typeorm typeorm pg

<br/>

### 024. Creating a TypeORM Entity

<br/>

### 025. Using Repository to Access Database

```
$ curl -d '{
    "name": "Coffee #1",
    "brand": "Nesti",
    "flavors": ["chocolate"]
}' \
-H "Content-Type: application/json" \
-X POST http://localhost:3000/coffees/ \
| python -m json.tool
```

<br/>

```
$ curl \
    -H "Content-Type: application/json" \
    -X GET http://localhost:3000/coffees \
    | python3 -m json.tool
```

<br/>

```
$ curl \
    -H "Content-Type: application/json" \
    -X GET http://localhost:3000/coffees/1 \
    | python3 -m json.tool
```

<br/>

### 026. Create a Relation between two Entities

    $ nest generate class coffees/entities/flavor.entity --no-spec

<br/>

### 027. Retrieve Entities with their Relations

<br/>

```
$ curl \
    -H "Content-Type: application/json" \
    -X GET http://localhost:3000/coffees \
    | python3 -m json.tool
```

**returns:**

```
[
    {
        "id": 2,
        "name": "Coffee #2",
        "brand": "Nesti",
        "flavors": []
    },
    {
        "id": 1,
        "name": "Coffee #1",
        "brand": "Nesti",
        "flavors": []
    }
]

```

<br/>

### 028. Using Cascading Inserts and Updates

```
$ curl -d '{
    "name": "Coffee #4",
    "brand": "Nesti",
    "flavors": ["caramel", "chocolate"]
}' \
-H "Content-Type: application/json" \
-X POST http://localhost:3000/coffees/ \
| python -m json.tool
```

<br/>

```
{
    "brand": "Nesti",
    "flavors": [
        {
            "id": 1,
            "name": "caramel"
        },
        {
            "id": 2,
            "name": "chocolate"
        }
    ],
    "id": 3,
    "name": "Coffee #4"
}
```

<br/>

```
$ curl \
    -H "Content-Type: application/json" \
    -X GET http://localhost:3000/coffees \
    | python3 -m json.tool
```

<br/>

```
[
    {
        "id": 3,
        "name": "Coffee #4",
        "brand": "Nesti",
        "flavors": [
            {
                "id": 1,
                "name": "caramel"
            },
            {
                "id": 2,
                "name": "chocolate"
            }
        ]
    },
    {
        "id": 2,
        "name": "Coffee #2",
        "brand": "Nesti",
        "flavors": []
    },
    {
        "id": 1,
        "name": "Coffee #1",
        "brand": "Nesti",
        "flavors": []
    }
]

```

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
