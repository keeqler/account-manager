# REST API documentation

# Endpoints with authentication

- Endpoints with authentication require a JWT token;
- JWT tokens are provided by `/sessions` endpoint;
- JWT tokens must be passed via the `Authentication` header;
- JWT tokens must be formed like so: `Bearer <jwt_token>`;
- JWT tokens will be valid for 7 days.

# Users endpoint

## Create an user

```
POST /users
```

### Request body:

| Name     | Type   | Required | Description                   |
| -------- | ------ | -------- | ----------------------------- |
| email    | STRING | YES      | A valid e-mail address.       |
| password | STRING | YES      | A 8 characters long password. |

### Response:

```
201 CREATED
```

## Update an user (authenticated)

```
PUT /users
```

### Request body:

| Name        | Type   | Required                              | Description                                         |
| ----------- | ------ | ------------------------------------- | --------------------------------------------------- |
| newEmail    | STRING | YES if `newPassword` wasn't provided. | The email that will replace the current email       |
| newPassword | STRING | YES if `newEmail` wasn't provided.    | The password that will replace the current password |
| password    | STRING | YES                                   | The user's current password                         |
