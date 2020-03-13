# REST API documentation

## Headers

- `Content-Type: Application/JSON`
- `Authentication`: A JWT token, provided to authenticated routes only (read below for more details)

## Routes with authentication

- Endpoints with authentication require a JWT token;
- JWT tokens are:
  - Provided by `POST /sessions` route;
  - Passed via the `Authentication` header as: `Bearer <jwt_token>`;
  - Valid for 7 days.

# Users endpoint

## Create an user

```
POST /users
```

#### Request body:

| Name     | Type   | Required | Description                  |
| -------- | ------ | -------- | ---------------------------- |
| email    | STRING | YES      | A valid e-mail address       |
| password | STRING | YES      | A 8 characters long password |

#### Response:

```json
201 CREATED
```

## Update an user (authenticated)

```
PUT /users
```

#### Request body:

| Name        | Type   | Required                          | Description                                         |
| ----------- | ------ | --------------------------------- | --------------------------------------------------- |
| newEmail    | STRING | YES if `newPassword` not provided | The email that will replace the current email       |
| newPassword | STRING | YES if `newEmail` not provided    | The password that will replace the current password |
| password    | STRING | YES                               | The user's current password                         |

#### Response:

```json
204 NO CONTENT
```

# Password recovery endpoint

## Send a password recovery code to user's email

```
POST /password_recovery
```

#### Request params:

| Name  | Type   | Required | Description           |
| ----- | ------ | -------- | --------------------- |
| email | STRING | YES      | User's e-mail address |

#### Response:

```json
204 NO CONTENT
```

## Reset password

```
PUT /password_recovery
```

#### Request params:

| Name  | Type   | Required | Description           |
| ----- | ------ | -------- | --------------------- |
| email | STRING | YES      | User's e-mail address |

#### Request body:

| Name     | Type   | Required | Description                      |
| -------- | ------ | -------- | -------------------------------- |
| token    | STRING | YES      | Recovery code received via email |
| password | STRING | YES      | New user's password              |

#### Response:

```json
204 NO CONTENT
```

# Sessions endpoint

## Create a session

```
POST /sessions
```

#### Request body:

| Name     | Type   | Required | Description              |
| -------- | ------ | -------- | ------------------------ |
| email    | STRING | YES      | Account's e-mail address |
| password | STRING | YES      | Account's password       |

#### Response:

```json
201 CREATED

{
  "token": "a super long JWT goes here"
}
```

# Accounts endpoint

## Create an account (authenticated)

```
POST /accounts
```

#### Request body:

| Name         | Type   | Required | Description                               |
| ------------ | ------ | -------- | ----------------------------------------- |
| label        | STRING | NO       | Account's label                           |
| service      | STRING | YES      | Service name which the account belongs to |
| username     | STRING | YES      | Account's username                        |
| password     | STRING | YES      | Account's password                        |
| twofa_secret | STRING | NO       | Account's 2FA secret                      |

#### Response:

```json
201 CREATED

{
  "id": 123,
  "updated_at": "2019-12-06 03:59:55.341+00"
}
```

## Get all user's accounts (authenticated)

```
GET /accounts
```

### Request query strings:

| Name | Type    | Required | Description                           |
| ---- | ------- | -------- | ------------------------------------- |
| page | INTEGER | YES      | Page (each page can contain 10 items) |

#### Response:

```json
200 OK

[
  {
    "id": 65,
    "label": "My Google account",
    "service": "google.com",
    "username": "mybeautifulemail@gmail.com",
    "password": "mysecretpassword",
    "twofa_secret": '8A62HAMD9A620SJ5',
    "created_at": "2020-02-06T03:59:55.341Z",
    "updated_at": "2020-02-06T03:59:55.341Z"
  }
]
```

## Get an account (authenticated)

```
GET /accounts
```

### Request params:

| Name | Type    | Required | Description |
| ---- | ------- | -------- | ----------- |
| id   | INTEGER | YES      | Account id  |

#### Response:

```json
200 OK

{
  "id": 65,
  "label": "My Google account",
  "service": "google.com",
  "username": "mybeautifulemail@gmail.com",
  "password": "mysecretpassword",
  "twofa_secret": "8A62HAMD9A620SJ5",
  "created_at": "2020-02-06T03:59:55.341Z",
  "updated_at": "2020-02-06T03:59:55.341Z"
}
```

## Update an account (authenticated)

```
PUT /accounts
```

### Request params:

| Name | Type    | Required                           | Description |
| ---- | ------- | ---------------------------------- | ----------- |
| id   | INTEGER | YES if the others weren't provided | Account id  |

#### Request body:

| Name         | Type   | Required                           | Description                               |
| ------------ | ------ | ---------------------------------- | ----------------------------------------- |
| label        | STRING | YES if the others weren't provided | Account's label                           |
| service      | STRING | YES if the others weren't provided | Service name which the account belongs to |
| username     | STRING | YES if the others weren't provided | Account's username                        |
| password     | STRING | YES if the others weren't provided | Account's password                        |
| twofa_secret | STRING | YES if the others weren't provided | Account's 2FA secret                      |

#### Response:

```json
204 NO CONTENT
```

## Delete an account (authenticated)

```
DELETE / accounts
```

### Request params:

| Name | Type    | Required | Description |
| ---- | ------- | -------- | ----------- |
| id   | INTEGER | YES      | Account id  |

#### Response:

```json
204 NO CONTENT
```
