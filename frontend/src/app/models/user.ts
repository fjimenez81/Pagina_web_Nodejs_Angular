export class User{
  
    constructor(_id = "", name = "", surname = "", address = "", city = "", email = "", password = "") {
        
        this._id = _id;
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.city = city;
        this.email = email;
        this.password = password;

      }
    
    _id: string
    name: string;
    surname: string;
    address: string;
    city: string;
    email: string;
    password: string;

}