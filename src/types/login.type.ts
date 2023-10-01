export interface ILogin {
  email: string;
  password: string;
}
export interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  isAdmin: boolean;
  token: string;
  createAt: any;
  city: string;
  district: string;
  ward: string;
  address: string;
  image: string;
  disable: boolean;
  address_shop: {
    city: string;
    district: string;
    ward: string;
    address: string;
    phone: string;
  };
}

/**
 * {
    "_id": "6501b84d23bc4d20af58b186",
    "name": "Anh Tuấn7",
    "email": "tuandgtl7@gmail.com",
    "phone": "0357648599",
    "isAdmin": false,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDFiODRkMjNiYzRkMjBhZjU4YjE4NiIsImlhdCI6MTY5NjE3MTY1OSwiZXhwIjoxNjk2MjU4MDU5fQ.0mM4yJKn85mR-poXJXULDSzU5HVCVdAL1OC9y2jrUDg",
    "createdAt": "2023-09-13T13:25:33.853Z",
    "city": "Thành phố Hồ Chí Minh",
    "district": "Quận Gò Vấp",
    "ward": "Phường 14",
    "address": "532 Nguyễn Thái Sơn",
    "image": "https://res.cloudinary.com/dt0iazjvh/image/upload/v1694668830/baloshopAvatar/tbhoupgqburmnmglz99x.jpg",
    "disable": false,
    "address_shop": {
        "city": "Thành phố Hồ Chí Minh",
        "district": "Quận Gò Vấp",
        "ward": "Phường 05",
        "address": "thôn 7 đường quang trung",
        "phone": "0912345678"
    }
}
 * 
 */
