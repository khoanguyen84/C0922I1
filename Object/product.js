function Product(id, photo, name, quantity, price) {
    this.id = id;
    this.photo = photo,
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.amount = quantity * price;
}

var products = [
    new Product(1, "https://i.pravatar.cc/150?img=3", "iPhone 6", 3, 5000000),
    new Product(2, "https://i.pravatar.cc/150?img=4", "iPhone 7", 4, 5500000),
    new Product(3, "https://i.pravatar.cc/150?img=5", "iPhone 8", 2, 6000000),
    new Product(4, "https://i.pravatar.cc/150?img=6", "iPhone 9", 6, 6500000)
]

function renderProduct() {
    let htmls = products.map(function (pdt) {
        return `
            <tr>
                <td>${pdt.id}</td>
                <td>
                    <img src="${pdt.photo}" alt="" />
                </td>
                <td>${pdt.name}</td>
                <td>${pdt.price}</td>
                <td>${pdt.quantity}</td>
                <td>${pdt.amount}</td>
            </tr>
        `
    })

    document.querySelector('#tbProduct').innerHTML = htmls.join("");
}

renderProduct();