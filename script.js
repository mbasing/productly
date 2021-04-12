class Product {
    state = {
        products:[]
    }
    constructor(title, imageURL, price, description, stock){
        this.title = title;
        this.imageURL = imageURL;
        this.price = price;
        this.description = description;
        this.stock = stock;
    }
}

let product1 = new Product("Hp Spectre", "./assets/image_1.jpg",  2500, "Sleek & Powerful with a stealthy black aesthetic and ultra-thin design, the HP Spectre gaming laptop delivers the best performance", "27 items in stock");
let product2 = new Product("UCOM Dualshock Gamepad", "./assets/image_2.jpg",  120, "With super control, durability and thumb-controlled analog sticks, this user friendly and easy to install Ucom Dualshock Gamepad is ready for immediate gaming action.", "59 items in stock");
let product3 = new Product("Fularuishi", "./assets/image_3.jpg",  80, "This Backpack is made with water resistant light Oxford with smooth surface that is wear-resisting, anti-wrinkles and anti-vibration. Also has durable and and soft polyester lining", "40 items in stock");
let product4 = new Product("BM800 Microphone", "./assets/image_4.jpg",  85, "The ZINGYOU BM-800 features extremely quiet self-noise.Thus, it is perfectly suited for vocals and audio drama productions in high definition production and recordings", "15 items in stock");

let products = [product1, product2, product3, product4];

class ProductList extends Product{
    constructor(title, imageURL, price, description, stock){
        super(title, imageURL, price, description, stock);
    };

    render(){
        let app = document.querySelector('#root');
        let productList = document.createElement('ul');
        productList.className = "product__list";

        for (let prod of products){
            const prodEl =document.createElement('li');
            prodEl.className = "product-item";
            prodEl.innerHTML = 
            `<div>
                <img src = ${prod.imageURL} alt ="${prod.title}" />
                <div class = "product-item__content">
                <h2>${prod.title}</h2>
                <h3>\GH¢${prod.price}</h3>
                <p>${prod.stock}</p>
                <p>${prod.description}</p>
                <button>ADD TO CART</button>
                <button>DELETE</button>
                </div>
            </div>`;
            productList.append(prodEl);
        }
        app.append(productList)
    }
}

let productsLists = new ProductList();
productsLists.render();