# [Kamil Mysliwiec, Mark Pieszak] NestJS Fundamentals Course [ENG, 2020]

<br/>

## 06. Other Building Blocks by Example

<br/>

### 051. Introducing More Building Blocks

<br/>

![Application](/img/pic-m06-p01.png?raw=true)

<br/>

### 052. Understanding Binding Techniques

<br/>

### 053. Catch Exceptions with Filters

<br/>

    $ nest generate filter common/filters/http-exception

<br/>

```
$ curl \
    -H "Content-Type: application/json" \
    -X GET http://localhost:3000/coffees/-1 \
    | python3 -m json.tool
```

**returns:**

```
{
    "statusCode": 404,
    "message": "Coffee #-1 not found",
    "error": "Not Found",
    "timestamp": "2020-12-21T00:58:36.826Z"
}
```

<br/>

### 054. Protect Routes with Guards

<br/>

    $ nest generate guard common/guards/api-key

<br/>

Authorization key in .env

<br/>

```
$ curl \
    -H "Content-Type: application/json" \
    -X GET http://localhost:3000/coffees/ \
    -H "Authorization: 7d8HMUuVXOWIM" \
    | python3 -m json.tool
```

<br/>

### 055. Using Metadata to Build Generic Guards or Interceptors

<br/>

### 056. Add Pointcuts with Interceptors

<br/>

    $ nest generate interceptor common/interceptors/wrap-response

<br/>

```
$ curl \
    -H "Content-Type: application/json" \
    -X GET http://localhost:3000/coffees/1 \
    -H "Authorization: 7d8HMUuVXOWIM" \
    | python3 -m json.tool
```

**returns:**

```
{
    "data": {
        "id": 1,
        "name": "Coffee #1",
        "description": null,
        "brand": "Nesti",
        "recommendations": 0,
        "flavors": []
    }
}

```

<br/>

### 057. Handling Timeouts with Interceptors

<br/>

    $ nest generate interceptor common/interceptors/timeout

```
$ curl \
    -H "Content-Type: application/json" \
    -X GET http://localhost:3000/coffees \
    -H "Authorization: 7d8HMUuVXOWIM" \
    | python3 -m json.tool
```

```
{
    "statusCode": 408,
    "message": "Request Timeout",
    "timestamp": "2020-12-21T04:32:13.135Z"
}
```

<br/>

### 058. Creating Custom Pipes

<br/>

    $ nest generate pipe common/pipes/parse-int

```
$ curl \
    -H "Content-Type: application/json" \
    -X GET http://localhost:3000/coffees/abcd \
    -H "Authorization: 7d8HMUuVXOWIM" \
    | python3 -m json.tool
```

<br/>

```
{
    "statusCode": 400,
    "message": "Validation failed. \"NaN\" is not an integer!",
    "error": "Bad Request",
    "timestamp": "2020-12-21T04:49:06.138Z"
}
```

<br/>

### 059. Bonus Add Request Logging with Middleware

<br/>

    $ nest generate middleware common/middleware/logging

<br/>

????

My IDE do not know anything about common.module.ts

<br/>

### 060. Bonus Create Custom Param Decorators

```
$ curl \
    -H "Content-Type: application/json" \
    -X GET http://localhost:3000/coffees \
    -H "Authorization: 7d8HMUuVXOWIM" \
    | python3 -m json.tool
```

**server console:**

```
Before...
https
http
```

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
