# [Kamil Mysliwiec, Mark Pieszak] NestJS Fundamentals Course [ENG, 2020]

<br/>

## 02 Creating a REST API application

<br/>

### 005 Prerequisite Install Insomnia

https://insomnia.rest/download/

<br/>

### 006 Running NestJS in Development Mode

    $ npm run start:dev

<br/>

### 007 Creating a Basic Controller

<br/>

    $ cd app/api
    $ nest generate controller coffees

<br/>

```
$ curl \
    -H "Content-Type: application/json" \
    -X GET http://localhost:3000/coffees/flavors
```

<br/>

**returns**

```
This action returns all coffees
```

<br/>

### 008 Use Route Parameters

<br/>

```
$ curl \
    -H "Content-Type: application/json" \
    -X GET http://localhost:3000/coffees/123
```

<br/>

**returns**

```
This action return #123 coffee
```

<br/>

### 009 Handling Request Body Payload

<br/>

### 010 Response Status Codes

<br/>

### 011 Handling Update and Delete Requests

<br/>

### 012 Implement Pagination with Query Parameters

<br/>

```
$ curl \
    -H "Content-Type: application/json" \
    -X GET 'http://localhost:3000/coffees/flavors?limit=20&offset=10'
```

<br/>

**Returns:**

```
This action returns all coffees. Limit: 20, Offset: 10
```

<br/>

### 013 Creating a Basic Service

<br/>

    $ nest generate service coffees

<br/>

```
$ curl \
    -H "Content-Type: application/json" \
    -X GET http://localhost:3000/coffees/1 \
    | python3 -m json.tool
```

<br/>

**returns**

```
{
    "id": 1,
    "name": "Shipwreck Roast",
    "brand": "Buddy Brew",
    "flavors": [
        "chocolate",
        "vanilla"
    ]
}

```

<br/>

### 014 Send UserFriendly Error Messages

<br/>

```
$ curl \
    -H "Content-Type: application/json" \
    -X GET http://localhost:3000/coffees/2 \
    | python3 -m json.tool
```

**Returns:**

```
{
    "statusCode": 404,
    "message": "Coffee #2 not found",
    "error": "Not Found"
}
```

<br/>

### 015 Encompass BusinessDomain in Modules

    $ nest generate module coffees

<br/>

```
$ curl \
    -H "Content-Type: application/json" \
    -X GET http://localhost:3000/coffees/1 \
    | python3 -m json.tool
```

<br/>

**returns:**

```
{
    "id": 1,
    "name": "Shipwreck Roast",
    "brand": "Buddy Brew",
    "flavors": [
        "chocolate",
        "vanilla"
    ]
}

```

<br/>

### 016 Introduction to Data Transfer Objects

    $ nest generate class coffees/dto/create-coffee.dto --no-spec
    $ nest generate class coffees/dto/update-coffee.dto --no-spec

<br/>

### 017 Validate Input Data with Data Transfer Objects

    $ npm install class-validator class-transformer
    $ npm install @nestjs/mapped-types

<br/>

### 018 Handling Malicious Request Data

<br/>

### 19 Autotransform Payloads to DTO instances

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
