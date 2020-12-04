export class Product{
  
    constructor(_id = "", name = "", price = 0, imgURL = "") {
        
        this._id = _id;
        this.name = name;
        this.price = price;
        this.imgURL = imgURL;

      }

    _id: String
    name: String
    price: Number
    imgURL: String

}