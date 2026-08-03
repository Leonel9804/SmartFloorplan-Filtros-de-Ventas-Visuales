Titulo: StoreMap Analytics

Descripción:
StoreMap Analytics es un prototipo interactivo desarrollado para demostrar una solución visual para la localización de productos dentro de una tienda.

La aplicación representa el plano de una tienda mediante SVG y permite resaltar automáticamente los muebles donde se encuentran productos que cumplen determinados criterios de negocio, como:

- Productos más vendidos.
- Productos menos vendidos.
- Productos con bajo stock.

La idea es facilitar la toma de decisiones y complementar la información proveniente de herramientas de análisis como Power BI mediante una representación visual e intuitiva.

Caracteristicas:

- Plano interactivo desarrollado con SVG.
- Generación dinámica de muebles mediante JavaScript.
- Asociación de productos a cada mueble.
- Panel de información dinámico.
- Resaltado automático de muebles según filtros.
- Filtro de productos más vendidos.
- Filtro de productos menos vendidos.
- Filtro de productos con bajo stock.
- Reinicio del plano.

Tecnologias:
- HTML5
- CSS3
- JavaScript (ES6)
- SVG
- Visual Studio Code

Arquitectura:
El proyecto está dividido en tres partes principales:

📂 data
- muebles.js
- productos.js

📂 js
- app.js

📂 css
- style.css

📄 index.html

Funcionamiento:

Cada mueble posee un identificador único.

Los productos se almacenan dentro del objeto correspondiente a cada mueble.

Los filtros recorren toda la estructura de datos para localizar los productos que cumplen una determinada condición y posteriormente resaltan el mueble correspondiente dentro del plano.

Objetivo:

Demostrar cómo una representación visual de la distribución física de una tienda puede complementar el análisis de datos para facilitar la localización de productos y apoyar la toma de decisiones operativas.