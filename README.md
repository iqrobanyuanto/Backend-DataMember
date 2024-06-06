# Startup Guideline
1. Clone atau Fork repository ini kedalam device anda
2. Buat database mysql dan beri nama `datamember`
3. run project dengan memasukan command pada terminal berupa `npm start`

> [!TIP]
> Gunakan address: http://localhost:3000 untuk mengakses backend operation

# Route Guideline
## Authentication Operation Route
**Http Method: `POST`**

Register New Admin Account: `/auth/registerAdmin`

Register New Member Account: `/auth/registerMember`

Login For Admin: `/auth/loginAdmin`

Login For Member: `/auth/loginMember`

## Member Operation Route
**Http Method: `POST`**

Add Member Data: `/member/create`

**Http Method: `GET`**

Get All Member Data: `/member/get`

Get Member by id: `/member/get/{id}`

**Http Method: `PUT`**

Update Member Data: `/member/update/{id}`

**Http Method: `DELETE`**

Delete Member Data: `/member/delete/{id}`

## Insert Log Operation Route
**Http Method: `POST`**

Add Insert Log: `/insert-log/create`

**Http Method: `GET`**

Get All Insert Log: `/insert-log/get`

**Http Method: `DELETE`**

Delete All Insert Log: `/insert-log/delete`


