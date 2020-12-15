# [Kamil Mysliwiec, Mark Pieszak] NestJS Fundamentals Course [ENG, 2020]

<br/>

# Development Step By Step

<br/>

## 01 Getting Started

<br/>

    $ npm install -g @nestjs/cli

<br/>

    $ nest --version
    7.5.3

<br/>

    $ nest new api
    $ cd api
    $ npm run start

<br/>

    // Add a new line after every curl request
    $ vi ~/.curlrc

<br/>
add
<br/>

```
-w "\n"
```

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

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>

```

```
