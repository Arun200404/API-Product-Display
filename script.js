const loadAPI = () => {
    fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => getProducts(data))
        // .catch((error) => console.error('Error fetching products:', error));
}

const displayProduct = (prod) => {
    return `
    <div class="prod">
        <img src="${prod.image}" alt="${prod.title}">
        <h2>${prod.title}</h2>
        <h2>${prod.category}</h2>
        <h2 >${prod.description}</h2>
        <h2>$${prod.price}</h2>
        <h2>Rating: ${prod.rating.rate}</h2>
    </div>`;
}

const getProducts = (products) => {
    const displayUI = products.map((prod) => displayProduct(prod));

    const container = document.getElementById('products');

    container.innerHTML = displayUI.join("");
}

loadAPI();


