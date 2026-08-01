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