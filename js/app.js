
//Declaracion de variables para conectar los botones
const btnMasVendidos = document.getElementById("btnMasVendidos");
const btnMenosVendidos = document.getElementById("btnMenosVendidos");
const btnStock = document.getElementById("btnStock");
const btnReset = document.getElementById("btnReset");


//Creación de el plano en SGV y la simulacion de los muebles
const plano = document.getElementById("plano");

for (const mueble of muebles) {

    const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );

    rect.setAttribute("id", mueble.id);
    rect.setAttribute("x", mueble.x);
    rect.setAttribute("y", mueble.y);
    rect.setAttribute("width", mueble.ancho);
    rect.setAttribute("height", mueble.alto);
    rect.setAttribute("fill", "#BDBDBD");
    rect.setAttribute("stroke", "#424242");
    rect.setAttribute("stroke-width", 2);
    rect.setAttribute("class", "mueble");

    // Agregamos el evento al rectángulo que acabamos de crear
    rect.addEventListener("click", function () {

        const producto = mueble.productos[0];

        document.getElementById("info").innerHTML = `
            <h2>${mueble.id}</h2>

            <p><b>Producto:</b> ${producto.nombre}</p>

            <p><b>Categoría:</b> ${producto.categoria}</p>

            <p><b>Ventas:</b> ${producto.ventas}</p>

            <p><b>Stock:</b> ${producto.stock}</p>
        `;

    });

    plano.appendChild(rect);

}

//Funcion que nos permite reutilizar las demás funciones.

function quitarResaltado() {

    const lista = document.querySelectorAll(".mueble");

    lista.forEach(mueble => {

        mueble.setAttribute("fill", "#BDBDBD");

    });
}

//Esta funcion nos pone en color verde a nuestro mueble cuando lo localiza.
function resaltarMueble(id) {

    const mueble = document.getElementById(id);

    mueble.setAttribute("fill", "#43A047");

}

//Muestra en la parte de abajo de la página la información del mueble.
function mostrarResultado(resultado) {

    document.getElementById("info").innerHTML = `

        <h2>${resultado.mueble.id}</h2>

        <p><b>Producto:</b> ${resultado.producto.nombre}</p>

        <p><b>Categoría:</b> ${resultado.producto.categoria}</p>

        <p><b>Ventas:</b> ${resultado.producto.ventas}</p>

        <p><b>Stock:</b> ${resultado.producto.stock}</p>

    `;

}

//Botón de los productos más vendidos
btnMasVendidos.addEventListener("click", () => {

    quitarResaltado();

    const resultado = obtenerProductoMasVendido();

    console.log(resultado);
    resaltarMueble(resultado.mueble.id);
    mostrarResultado(resultado);


});

//Funcion compara dos resultados 

function obtenerProductoMasVendido() {

    let productoMayor = null;
    let muebleMayor = null;

    for (const mueble of muebles) {

        for (const producto of mueble.productos) {

            if (
                productoMayor === null ||
                producto.ventas > productoMayor.ventas
            ) {

                productoMayor = producto;
                muebleMayor = mueble;

            }

        }

    }

    return {
        producto: productoMayor,
        mueble: muebleMayor
    };


}

//Funcion que nos permite buscar en nuestros muebles el menos vendido
function obtenerProductoMenosVendido() {

    let productoMenor = null;
    let muebleMenor = null;

    for (const mueble of muebles) {

        for (const producto of mueble.productos) {

            if (
                productoMenor === null ||
                producto.ventas < productoMenor.ventas
            ) {

                productoMenor = producto;
                muebleMenor = mueble;

            }

        }

    }

    return {
        producto: productoMenor,
        mueble: muebleMenor
    };

}

//Boton de menos vendidos
btnMenosVendidos.addEventListener("click", () => {

    quitarResaltado();

    const resultado = obtenerProductoMenosVendido();

    resaltarMueble(resultado.mueble.id);

    mostrarResultado(resultado);

});


//Busqueda de bajos stocks
function obtenerBajoStock() {

    const lista = [];

    for (const mueble of muebles) {

        for (const producto of mueble.productos) {

            if (producto.stock <= 20) {

                lista.push({

                    producto,

                    mueble

                });

            }

        }

    }

    return lista;

}

//Boton de stocks bajos
btnStock.addEventListener("click", () => {

    quitarResaltado();

    const lista = obtenerBajoStock();

    lista.forEach(item => {

        resaltarMueble(item.mueble.id);

    });

    let html = "<h2>⚠ Productos con bajo stock</h2>";

    lista.forEach(item => {

        html += `
            <hr>

            <h3>${item.mueble.id}</h3>

            <p>${item.producto.nombre}</p>

            <p>Stock: ${item.producto.stock}</p>
        `;

    });

    document.getElementById("info").innerHTML = html;

});

btnReset.addEventListener("click", () => {

    quitarResaltado();

    document.getElementById("info").innerHTML = `

        <h2>Información</h2>

        <p>Seleccione un mueble o un filtro.</p>

    `;

});