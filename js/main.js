/* 
Objetivo: Generación de cards dinámicas de productos con bootstrap
y ver lógica de agregado a un carrito de compras. Añadir el proyecto a un repo de Git
y ver comandos básicos de git.
*/
let contenido = $('#content');

let cart = [];

console.log(contenido)

function renderCard(producto){
    let content = `
    <div class="card" style="width: 18rem;">
        <img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text">${producto.title}</p>
        <p class="card-text">${producto.precio}</p>
        <button id=${producto.id}>Add to cart</button>
        </div>
    </div>`
    contenido.append(content)
}

for (const producto of productos) {
    renderCard(producto)
}

let botones = document.querySelectorAll("button");
for (const boton of botones) {
    boton.addEventListener('click', (evento)=>{
        console.log(evento.target.id)
        let productoAgregar = productos.find(producto => producto.id === evento.target.id)
        cart.push(productoAgregar);
        console.log(cart);
    })
}