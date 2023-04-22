
const Cart = (cs) => {
    let total = 0;
    return (
        cs.map((item) => {
            total = total + item.price;
            return (`
        <div class="carts">
            <img src=${item.urlImage} alt="">
            <p class="name">${item.name}</p>
            <p class="price">${item.price}</p>

        </div>
            `
            )
        }).join("") + ` <div class="total">Tổng:${total}</div>`
    );
};