Swal.fire({
    title: "¡Bienvenido a Nixo Games!"
})

async function fetchProductos () {
    const response = await fetch("/json/data.json")
    return await response.json()
}

let cartProductos = []

fetchProductos().then(productos => {
    cartProductos = productos
    mostrarCatalogo()
})

const seccionProductos = document.querySelector('#seccion-productos')


/* const cartProductos = [];

const prod1 = new Producto ("1", "Among Us", 68, "Innersloth", 10, "A", "/img/among-us.jpg");
const prod2 = new Producto ("2", "PAYDAY 2", 150, "OVERKILL-a Starbreeze Studio", 10, "A", "/img/payday-2.jpg");
const prod3 = new Producto ("3", "Fallout 4", 800, "Bethesda Game Studios", 10, "A", "/img/fallout-4.jpg");
const prod4 = new Producto ("4", "Mafia: Edición Definitiva", 2560, "Hangar 13", 10, "A", "/img/mafia-edición-definitiva.jpg");
const prod5 = new Producto ("5", "Grand Theft Auto V", 314, "Rockstar North", 10, "A", "/img/grand-theft-auto-v.jpg");
const prod6 = new Producto ("6", "Dead by Daylight", 1000, "Behaviour Interactive Inc.", 10, "A", "/img/dead-by-daylight.jpg");

cartProductos.push(prod1, prod2, prod3, prod4, prod5, prod6); */

function mostrarCatalogo() {
    for (producto of cartProductos) {
        const { id, nombre, precio, desarrollador, cantidad, descripción, img } = producto // Destructuring
        const productoHTML =
        `<div class="card" style="width:18rem;">
        <img src="${img}" class="card-img-top" alt="">
            <div class="card-body">
                <h3 class="card-title">${nombre}</h3>
                <h4 class="card-text desarrollador">Desarrollador: ${desarrollador}</h4>
                <h5 class="card-text precio">Precio: $${precio}</h5>
                <p class="card-text cantidad">Cantidad: ${cantidad}</p>
                <h6 class="card-text descripción">Descripción: ${descripción}</h6>
                <button class="btn btn-primary" id="button${id}">Añadir al carrito</button>
            </div>
        </div>`
        
        seccionProductos.innerHTML += productoHTML
    }
}

mostrarCatalogo()

/* const showProducts = (producto) => {
    const contenedorProducto = document.getElementById("contenedor-producto");
    console.log(contenedorProducto)
    producto.forEach( producto => {
        const card = document.createElement("card");
        card.innerHTML += `<div class="card" style="width:18rem;">
                            <img src="${producto.img}" class="card-img-top" alt="">
                                <div class="card-body">
                                    <h3 class="card-title">${producto.nombre}</h3>
                                    <h4 class="card-text desarrollador">Desarrollador: ${producto.desarrollador}</h4>
                                    <h5 class="card-text precio">Precio: $${producto.precio}</h5>
                                    <p class="card-text cantidad">Cantidad: ${producto.cantidad}</p>
                                    <h6 class="card-text descripción">Descripción: ${producto.descripción}</h6>
                                    <button class="btn btn-primary" id="button${producto.id}">Añadir al carrito</button>
                                </div>
                            </div>`
        contenedorProducto.appendChild(card);

        const button = document.getElementById(`button${producto.id}`);
        button.addEventListener("click", () =>{
            cart(`${producto.id}`);
            alert(`Agregaste ${producto.nombre}`);
        })
    })
};
 */


        //producto.nombre === "Mafia: Edición Definitiva" ? console.log("El juego esta disponible") : console.log("El juego no esta disponible")



/* 
let contador = 0;

const parrafo = document.querySelector(".cantidad");

const botonsumar = document.getElementById("mas");

botonsumar.addEventListener("click", () => {

//APLICADO OPERADOR TERNARIO

    contador == 10 ? contador == 10 : contador++; parrafo.textContent = contador;

});

const botonrestar = document.getElementById("menos")

botonrestar.addEventListener("click", () => {

//APLICADO OPERADOR TERNARIO

    contador == 0 ? contador == 0 : contador--; parrafo.textContent = contador;

}); */

const bloque = document.querySelector(".card")

bloque.addEventListener("mouseenter", () => {
    bloque.style.backgroundColor = "red";
    console.log("mouseenter")
})

bloque.addEventListener("mouseleave", () => {
    bloque.style.backgroundColor = "white";
})

/* const baseDatosEnvio = JSON.stringify(baseDatos)

localStorage.setItem("Juegos", baseDatosEnvio)

const baseDatosRecibo = localStorage.getItem("Juegos")

//USO DE SPREAD DE ARRAYS

const juegosArray = JSON.parse(localStorage.getItem("Juegos"))
console.log(...juegosArray)

const boton = document.querySelector("#myBtn")

boton.addEventListener("click", () => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: false,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    Toast.fire({
        icon: 'success',
        title: '¡Añadido al carrito con exito!'
    })
})

const confirmar = document.querySelector("#cassss")

confirmar.addEventListener("click", () => {

Swal.fire({
    title: 'Good job!',
    text: 'You clicked the button!',
    icon: 'success',
    showConfirmButton: "cool"
})
})
const imagen = document.querySelector(".imagen")

imagen.addEventListener("mouseenter", () => {
    console.log("Hola")
}) */
const boton = document.querySelector("#myBtn")

boton.addEventListener("click", () => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: false,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    Toast.fire({
        icon: 'success',
        title: '¡Añadido al carrito con exito!'
    })
})
