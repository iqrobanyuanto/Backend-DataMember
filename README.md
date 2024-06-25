# Startup Guideline
1. Clone atau Fork repository ini kedalam device anda
2. Buat database mysql dan beri nama `datamember`
3. run project dengan memasukan command pada terminal berupa `npm start`

> [!TIP]
> Gunakan address: `http://localhost:5000` untuk local backend
> 
> Gunakan address: `https://backend-datamember.azurewebsites.net` untuk production backend
>
> Penggunaan API Foto Profil Operation hanya bisa digunakan dengan address production backend

# Route Guideline
## Authentication Operation Route
**Http Method: `POST`**

Register New Admin Account: `/auth/registerAdmin`
> [!NOTE]
>
> **Register Admin Request Body**
> 
    {
      "username": string,
      "password": string
    }

Register New Member Account: `/auth/registerMember`
> [!NOTE]
>
> **Register Member Request Body**
> 
    {
      "namalengkap": string,
      "email": string,
      "username": string,
      "password": string
    }

Login For Admin: `/auth/loginAdmin`

Login For Member: `/auth/loginMember`

> [!NOTE]
>
> **Login Admin & Member Response**
> 
    {
      response: string,
      token: string
    }

Delete Member Account `/auth/deleteMember/{accountMemberId}`

> [!NOTE]
>
> **Delete Member Account Response**
> 
    {
      response: string,
    }

## Member Operation Route
**Http Method: `POST`**

Add Member Data: `/member/create`

> [!NOTE]
>
> Add Member data sudah dilakukan ketika mengutilisasi API registerMember
> 
> **Add Member Request Body**
> 
    {
      "status": string,
      "nama": string,
      "nip": int,
      "tempat_lahir": string,
      "tanggal_lahir": datetime,
      "jenis_kelamin": string,
      "agama": string,
      "golongan_darah": char,
      "nomor_hp": string,
      "alamat_asal": string,
      "universitas": string,
      "fakultas": string,
      "program_studi": string,
      "foto": string,
    }

**Http Method: `GET`**

Get All Member Data: `/member/get`

Get Member by id: `/member/get/{memberId}`
>[!TIP]
> Melakukan operasi yang berpotensi membutuhkan memberId, gunakan memberAccountId daripada id pada data member itu sendiri

> [!NOTE]
>
> **Get & Get All Member Response**
> 
    {
      "id": integer
      "status": string,
      "nama": string,
      "nip": int,
      "tempat_lahir": string,
      "tanggal_lahir": datetime,
      "jenis_kelamin": string,
      "agama": string,
      "golongan_darah": char,
      "nomor_hp": string,
      "alamat_asal": string,
      "universitas": string,
      "fakultas": string,
      "program_studi": string,
      "foto": string,
      "createdAt": datetime,
      "updatedAt": datetime,
      "memberAccoundId": int,
    }
            
**Http Method: `PUT`**

Update Member Data: `/member/update/{memberId}`

> [!NOTE]
> 
> **Update Member Request Body**
> 
    {
      "status": string,
      "nama": string,
      "nip": int,
      "tempat_lahir": string,
      "tanggal_lahir": datetime,
      "jenis_kelamin": string,
      "agama": string,
      "golongan_darah": char,
      "nomor_hp": string,
      "alamat_asal": string,
      "universitas": string,
      "fakultas": string,
      "program_studi": string,
      "foto": string,
    }

**Http Method: `DELETE`**

Delete Member Data: `/member/delete/{memberId}`

> [!NOTE]
>
> **Delete Member Response**
> 
> {response}

## Insert Log Operation Route
**Http Method: `POST`**

Add Insert Log: `/insert-log/create`

> [!NOTE]
>
> **Add Insert Log Request**
> 
    { 
    "nama": string,
    "email": string,
    "username": string,
    "tanggal_input": datetime
    }

**Http Method: `GET`**

Get All Insert Log: `/insert-log/get`
> [!NOTE]
>
> **Get All Insert Log Response**
> 
    { 
      "id": int
      "nama": string,
      "email": string,
      "username": string,
      "tanggal_input": datetime
      "createdAt": datetime,
      "updatedAt": datetime
    }

**Http Method: `DELETE`**

Delete All Insert Log: `/insert-log/delete`
> [!NOTE]
>
> **Delete All Insert Log Response**
>
> {response}

## Alur Pendidikan Operation Route
**Http Method: `POST`**

Add New Alur Pendidikan: `/alur-pendidikan/create/{memberId}/{rowRiwayat}`
> [!NOTE]
>
> **Add New Alur Pendidikan Request Body**
> 
    { 
      "riwayat_pendidikan": string,
      "riwayat_universitas": string,
    }

**Http Method: `PUT`**

Update Alur Pendidikan: `/alur-pendidikan/update/{memberId}/{rowRiwayat}`
> [!NOTE]
>
> **Update Alur Pendidikan Request Body**
> 
    { 
      "riwayat_pendidikan": string,
      "riwayat_universitas": string,
    }

**Http Method: `GET`**

Get All Alur Pendidikan For One Member: `/alur-pendidikan/getAll/{memberId}`
> [!NOTE]
>
> **Get All Alur Pendidikan For One Member Response**
> 
    { 
      "riwayat_pendidikan": string,
      "riwayat_universitas": string,
      "rowRiwayat": int,
      "memberId": int,
    }

**Http Method: `DELETE`**

Delete Alur Pendidikan: `/alur-pendidikan/delete/{memberId}/{rowRiwayat}`
> [!NOTE]
>
> **Delete Alur Pendidikan Response**
>
> {response}

## Foto Profil Operation Route
**Http Method: `POST`**
Update or Add New Foto Profil: `/foto-profil/updateImage/{memberId}`
> [!TIP]
> Jika ingin menggunakan method ini dengan mengaitkanya pada markup form dalam HTML tambahkan attribute berikut:
> - enctype = "multipart/form-data"
> 
> Dan beri nama markup input, dengan nama berikut:
> - name = "profileImage"
>
> Berikut Contoh Secara Keseluruhan:
> ```
>  <form action={Endpoint} method="post" enctype="multipart/form-data">
>  <input type="file" name="profileImage" />
>  </form>
>  ```

> [!NOTE]
>
> **Update or Add New Foto Profil form-data Request**
> 
    { 
      "profileImage": File
    }

> [!NOTE]
> **Update or Add New Foto Profil Response**
> 
    { 
      "Response": string,
      "imageUrl": string (Link foto)
    }

**Http Method: `GET`**
Get Link Foto Profil: `/foto-profil/getImage/{memberId}`
> [!NOTE]
>
> **Get Link Foto Profil Response**
> 
    { 
      "imageUrl": string (Link foto)
    }



