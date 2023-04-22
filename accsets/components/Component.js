const Products = (ps) => {
    return ps.map((item) =>{
        return `
        <div class="product" onclick="addProduct(${item.id})">
            <div>
                <img src=${item.urlImage} alt="">
            </div >

            <div class="inf-food">
            <h4 >${item.name}</h4>
            <p>Giá bán: ${item.price}.000đ</p>
            </div>
           
        </div>
        `
    }).join("");
};