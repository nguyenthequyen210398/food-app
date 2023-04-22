window.onload = function(){
    handleHome();
}

let listProduct = [
   {
       id:1,
       name:"Bánh mì bò nướng",
       urlImage: "https://daotaobeptruong.vn/wp-content/uploads/2022/01/banh-mi-nhan-thit-bo-nuong.jpg",
       price: 20
   },
   {
       id:2,
       name:"Bánh mì thịt xiên",
       urlImage: "https://cdn.tgdd.vn/Files/2021/09/06/1380704/bua-sang-dinh-duong-voi-banh-mi-kep-thit-xien-thom-ngon-nong-hoi-202109062223104695.jpg",
       price: 20
   },
   {
       id:3,
       name:"Chân gà hấp sả ớt",
       urlImage: "https://image.cooky.vn/recipe/g2/13591/s640/recipe13591-635717775782708507.jpg",
       price: 20
   },

   {
       id:4,
       name:"Mì xào bò",
       urlImage: "https://nghebep.com/wp-content/uploads/2017/10/mon-mi-xao-bo.jpg",
       price: 60
   },

   {
       id:5,
       name:"Trứng cút lộn sốt me",
       urlImage: "https://cdn.tgdd.vn/Files/2020/07/24/1273398/cach-lam-cut-lon-xao-me-chua-ngot-thom-ngon-don-gian-tai-nha-202208301350363574.jpeg",
       price: 80
   },
   {
       id:6,
       name:"Bún thịt nướng",
       urlImage: "https://cdn.tgdd.vn/Files/2017/03/24/964440/cach-lam-bun-thit-nuong-ngon-7_760x450.jpg",
       price: 50
   },
   {
       id:7,
       name:"Gà tần thuốc bắc",
       urlImage: "https://natraphar.com/wp-content/uploads/2020/12/ga-ham-thuoc-bac.jpg",
       price: 40
   },
   {
       id:8,
       name:"Bạch tuộc xào sa tế",
       urlImage: "https://thegioiamthuc.com/wp-content/uploads/2018/11/bach-tuoc-xao-600x449.jpg",
       price: 40
   },
   {
       id:9,
       name:"Ghẹ hấp bia",
       urlImage: "https://thegioiamthuc.com/wp-content/uploads/2019/05/ghe-hap-600x402.jpg",
       price: 20
   },
   {
       id:10,
       name:"Ngao hấp thái",
       urlImage: "https://cdn.netspace.edu.vn/images/2022/04/08/cach-lam-ngheu-hap-thai-ngon-sot-hap-thai-don-gian-de-lam-800.jpg",
       price: 85
   },
   {
       id:11,
       name:"Thịt bò khô tỏi",
       urlImage: "https://image.vtcnews.vn/upload/2023/01/10/cach-lam-bo-kho-09150126.jpg",
       price: 85
   },
];

let listCart = [];



const handleHome = () => {
   Header("Trang chủ");
   
   const home = document.getElementsByClassName("home")[0];
   home.classList.add("active");

   const cart = document.getElementsByClassName("cart")[0];
   cart.classList.remove("active");
   const messenger = document.getElementsByClassName("messenger")[0];
   messenger.classList.remove("active");
   const account = document.getElementsByClassName("account")[0];
   account.classList.remove("active");

   const products = document.getElementById("products");
   products.innerHTML = Products(listProduct);

}

const addProduct = (id) => {
    console.log(id);
    const product = listProduct.find((item) => item.id === id);
    console.log(product);
    listCart.push(product)
}



const handleCart = () => {
    Header("Giỏ hàng");

   const cart = document.getElementsByClassName("cart")[0];
   cart.classList.add("active");

   const home = document.getElementsByClassName("home")[0];
   home.classList.remove("active");
   const messenger = document.getElementsByClassName("messenger")[0];
   messenger.classList.remove("active");
   const account = document.getElementsByClassName("account")[0];
   account.classList.remove("active");

   const products = document.getElementById("products");
   products.innerHTML = "";

   const carts = document.getElementById("carts");
   carts.innerHTML = Cart(listCart);

   
   
}

const handMessenger = () => {
    Header("Tin nhắn");

   const messenger = document.getElementsByClassName("messenger")[0];
   messenger.classList.add("active");

   const cart = document.getElementsByClassName("cart")[0];
   cart.classList.remove("active");
   const home = document.getElementsByClassName("home")[0];
   home.classList.remove("active");
   const account = document.getElementsByClassName("account")[0];
   account.classList.remove("active");

   const products = document.getElementById("products");
   products.innerHTML = "";
   
}

const handleAccount = () => {
    Header("Tài khoản");

   const account = document.getElementsByClassName("account")[0];
   account.classList.add("active");

   const cart = document.getElementsByClassName("cart")[0];
   cart.classList.remove("active");
   const messenger = document.getElementsByClassName("messenger")[0];
   messenger.classList.remove("active");
   const home = document.getElementsByClassName("home")[0];
   home.classList.remove("active");

   const products = document.getElementById("products");
   products.innerHTML = "";
   
}

