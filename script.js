//Entrega Final Morales
let carrito = [];//[] significa array vacio
if (localStorage.getItem("carrito") != null) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}
let lista = document.getElementById("milista");

//llamada a renderizar
renderizarProductos();

function renderizarProductos() {
    for (const producto of productos) {
        lista.innerHTML += `<li class="col-sm-3 list-group-item">
            
            <img src=${producto.foto} width="260" height="200">
            <p> Marca: ${producto.marca}</p>
            <p> Modelo: ${producto.modelo}</p>
            <p><strong> $ ${producto.precio} </strong></p>
            <button class='btn btn-danger' id='btn${producto.id}'>Comprar</button>
        </li>`;
    }

    //eventos boton
    productos.forEach(producto => {
        //evento para cada boton
        document.getElementById(`btn${producto.id}`).addEventListener('click', function () {
            agregarAlCarrito(producto);
        });
    });

}
//funcion agregar al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.log(carrito);
    //agrego una fila nueva a la tabla "tablabody"
    document.getElementById("tablabody").innerHTML += `
    <tr>
      <td>${producto.marca}</td>
      <td>${producto.modelo}</td>
      <td>$ ${producto.precio}</td>
      <td> ${producto.total}</td>
      
    </tr>
    `;

    //SWEET ALERT
    Swal.fire(
        producto.marca + producto.modelo,
        'Ha sido agregado al carrito correctamente!',
        'success'
    );
    localStorage.setItem("Carrito", JSON.stringify(carrito));
}
//TOTAL CARRITO
function calcularTotalCarrito() {

    let total = 0;

    for (const producto of carrito) {

        total += producto.precio;

    }
}
//BOTON FINALIZAR COMPRA
let finalizar = document.getElementById("finalizar");
finalizar.onclick = () => {
    Swal.fire({
        title: 'Pedido confirmado!',
        text: 'Tu paquete está en proceso de preparación',
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs3.amazonaws.com%2Fs3.timetoast.com%2Fpublic%2Fuploads%2Fphotos%2F9533511%2Fu.jpg%3F1486565657&f=1&nofb=1',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Imagen carrito de compra',
    });
}


// //SPREAD
// const autos = ["Pagani", "Lamborghini,", "Ferrari"]
// const impresionValores = (...valores) => {
//     console.log(valores);
// }
// impresionValores("Pagani", "Lamborghini,", "Ferrari");


