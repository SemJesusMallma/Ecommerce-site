document.addEventListener('DOMContentLoaded', () => {
    initProductDetails();
});

function initProductDetails() {
    const productId = getProductIdFromUrl();
    const productDetailsContainer = document.getElementById('product__details');

    // Obtener información del producto según el productId
    const productDetails = getProductDetailsById(productId);

    // Actualizar el contenido del contenedor con la información del producto
    updateProductDetails(productDetails);
}

function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function getProductDetailsById(productId) {
    // Aquí puedes tener un objeto, una base de datos, o llamar a una API para obtener la información del producto
    const products = {
        '1': { name: 'Polo Negro Hombre', price: 'S/24', image: 'build/img/poloN.jpg', description: 'Polo Negro de Algodón para Hombre' },
        '2': { name: 'Polo Blanco Hombre', price: 'S/24', image: 'build/img/poloB.jpg', description: 'Polo Blanco de Algodón para Hombre' },
        '3': { name: 'Polo Vino Hombre', price: 'S/24', image: 'build/img/poloV.jpg', description: 'Polo Color Vino de Algodón para Hombre' },
        '4': { name: 'Polo Rojo Hombre', price: 'S/24', image: 'build/img/poloR.jpg', description: 'Polo Rojo de Algodón para Hombre' },
        '5': { name: 'Polo Azul Hombre', price: 'S/24', image: 'build/img/poloA.jpg', description: 'Polo Azul de Algodón para Hombre' },
        '6': { name: 'Polo Rosa Mujer', price: 'S/27', image: 'build/img/poloMR.jpg', description: 'Polo Manga Corta Color Rosa para Mujer con Estanpado' },
        '7': { name: 'Polo Negro Mujer', price: 'S/27', image: 'build/img/poloMN.jpg', description: 'Polo Manga Corta Color Negro para Mujer con Estamapdo' },
        '8': { name: 'Polo Beige Mujer', price: 'S/27', image: 'build/img/poloMB.jpg', description: 'Polo Manga Corta Color Beige para Mujer con Estampado' },
        '9': { name: 'Polera Beige Hombre', price: 'S/72', image: 'build/img/poleraBeige.jpg', description: 'Polera para Hombre Color Beige con Estampado' },
        '10': { name: 'Polera Blanco Hombre', price: 'S/72', image: 'build/img/poleraBlanco.jpg', description: 'Polera para Hombre Color Blanco con Estampado' },
        '11': { name: 'Polera Negra Hombre', price: 'S/72', image: 'build/img/poleraNegro.jpg', description: 'Polera para Hombre Color Negro con Estampado' },
        '12': { name: 'Pantalón Jean Hombre', price: 'S/90', image: 'build/img/jeansPantsV.jpg', description: 'Pantalón Jean para Hombre Color Azul' },
        '13': { name: 'Pantalón Jean Mujer', price: 'S/90', image: 'build/img/jeansPantsM.jpg', description: 'Pantalón Jean Modelo Baggy para Mujer Color Azul Noche' },
    };

    return products[productId];
}

function updateProductDetails(productDetails) {
    // Actualizar la imagen
    const poloImage = document.querySelector('.polo__image');
    poloImage.src = productDetails.image;
    poloImage.alt = productDetails.name;

    // Actualizar el nombre
    const productName = document.querySelector('.content__text h3');
    productName.textContent = productDetails.name;

    const productDescription = document.querySelector('.content__text p');
    productDescription.textContent = productDetails.description;

    const productPrice = document.querySelector('.product__price');
    productPrice.textContent = productDetails.price;
}

function redirectToProductos() {
    window.location.href = 'productos.html';
}