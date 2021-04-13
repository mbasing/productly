let app = document.querySelector('#root');
let shoppingCart = document.createElement('div');
shoppingCart.className = "cart";
app.append(shoppingCart)

let cartLogo = document.createElement('div');
cartLogo.setAttribute('id', "logo");
shoppingCart.append(cartLogo);

cartLogo.innerHTML = `<img src="./assets/logo.svg" alt="logo" />`

let viewCart = document.createElement('div');
viewCart.setAttribute("id", "viewcart");
shoppingCart.append(viewCart);
viewCart.innerHTML = `<i class="fas fa-cart-plus" id="cart"></i><span id="card">0</span>`;

// ===========================================================================================

const addProductToCart=()=>{
    let cartCount = document.querySelector('#card');
    let parsedCartCount = parseInt(cartCount.innerHTML);
    parsedCartCount = parsedCartCount + 1;
    // console.log(parsedCartCount);
    cartCount.innerHTML = parsedCartCount
}

const removeProductToCart=()=>{
    let cartCount = document.querySelector('#card');
    let parsedCartCount = parseInt(cartCount.innerHTML);
    if (parsedCartCount === 0){
        alert(`Your cart is currently empty`)
        return;
    }
    parsedCartCount = parsedCartCount - 1;
    // console.log(parsedCartCount);
    cartCount.innerHTML = parsedCartCount
}

// const reduceCart = ()=>{

// }

class Product {
    constructor(id, title, imageURL, price, description, stock){
        this.id = id,
        this.title = title;
        this.imageURL = imageURL;
        this.price = price;
        this.description = description;
        this.stock = stock;
    }
}

let product1 = new Product("1", "Hp Spectre", "./assets/image_1.jpg",  2500, "Sleek & Powerful with a stealthy black aesthetic and ultra-thin design, the HP Spectre gaming laptop delivers the best performance among similarly priced laptops", `<span id = "1">${27}</span> items in stock`);
let product2 = new Product("2", "UCOM Dualshock Gamepad", "./assets/image_2.jpg",  120, "With super control, durability and thumb-controlled analog sticks, this user friendly and easy to install Ucom Dualshock Gamepad is ready for gaming action.", `<span id = "2">${59}</span> items in stock`);
let product3 = new Product("3", "Fularuishi", "./assets/image_3.jpg",  80, "This Backpack is made with water resistant light Oxford with smooth surface that is wear-resisting, anti-wrinkles and anti-vibration. Also has durable polyester lining", `<span id = "3">${40}</span> items in stock`);
let product4 = new Product("4", "BM800 Microphone", "./assets/image_4.jpg",  85, "The ZINGYOU BM-800 features extremely quiet self-noise.Thus, it is perfectly suited for vocals and audio drama productions in high definition production and recordings", `<span id = "4">${15}</span> items in stock`);

let products = [product1, product2, product3, product4];
let deleteProduct = document.querySelector("delete_product");

class ProductList extends Product{
    constructor(title, imageURL, price, description, stock){
        super(title, imageURL, price, description, stock);
    };

    deleteProduct(prod){
        console.log(prod)

        const prodTitle = prod.children[2].children[0].innerText;
        console.log(prodTitle)
            products.map(product=>{
                if(product.title === prodTitle){
                    products.splice(prodTitle,1);
                    console.log(products);
                    return;
                }
                // let index = products.indexOf(product);
                // products.splice(index, 1)
            })

            let productsList = document.querySelector('.product__list');

            productsList.innerHTML = ``;

            productsList.append(this.render());
    }

    render(){
        let productList = document.createElement('ul');
        productList.className = "product__list";
        
        for (let prod of products){
            const prodEl = document.createElement('li');
            console.log(prodEl)
            prodEl.className = "product-item";
            prodEl.innerHTML = 
            `<div>
                <i class="far fa-trash-alt delete_product"></i>
                <img src = ${prod.imageURL} alt ="${prod.title}" />
                <div class = "product-item__content">
                <h2>${prod.title}</h2>
                <h3>\GH¢${prod.price}</h3>
                <p>${prod.stock}</p>
                <p>${prod.description}</p>
                <button type = "button" id = 'addToCart'>ADD TO CART</button>
                <button type = "button" id = 'removeFromCart'>REMOVE FROM CART</button>
                </div>
            </div>`;

            // let productId = document.querySelector('#1');
            // addToCart.addEventListener('click', )





            productList.append(prodEl);
        }
        app.append(productList)
        const itemlog = app.querySelectorAll('.delete_product');
        console.log(itemlog)
        for(const item of itemlog){
            item.addEventListener('click',(e)=>{
            const proId = e.target.parentNode;
            
                this.deleteProduct(proId)
            })
        }
        // app.querySelectorAll('.delete_product').addEventListener('click',()=>{
        //     this.deleteProduct();
        // });
        return productList;
    }
}

let productsLists = new ProductList();
productsLists.render();

// productList.render();


let addToCart = document.querySelectorAll('#addToCart');
for (let cart of addToCart){
    cart.addEventListener('click', addProductToCart);
}

let removeFromCart = document.querySelectorAll('#removeFromCart');
for (let cart of removeFromCart){
    cart.addEventListener('click', removeProductToCart);
}



