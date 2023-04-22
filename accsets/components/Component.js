const Products = (ps) => {
    return ps.map((item) =>{
        return `
        <div class="product" onclick="addProduct(${item.id})">
            <div>
                <img src=${item.urlImage} alt="">
            </div>
            <div>${item.name}</div>
        </div>
        `
    }).join("");
};