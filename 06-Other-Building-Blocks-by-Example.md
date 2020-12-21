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

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
