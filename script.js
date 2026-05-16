// -------------------
// TEXTO
// -------------------

const texto = `

Hay visitas que no se anuncian.

No se sientan.
No tocan.

Solo esperan en un lugar.

Algunos miran el rostro.
Otros miran los pies.

Pero nadie mira desde donde debería.

Si ocupas su sitio,
entenderás la diferencia.

Si no…

nunca sabrás por qué unos se quedan
y otros regresan.

`;

let i = 0;

const simbolos = [
    ""
];

// -------------------
// ESCRITURA
// -------------------

function escribirTexto() {

    if (i < texto.length) {

        const contenedor =
            document.getElementById("storyText");

        let letra = texto.charAt(i);

        contenedor.innerHTML +=
            letra === "\n"
                ? "<br>"
                : letra;

        i++;

        let velocidad = 35;

        // pausas dramáticas
        if (
            letra === "." ||
            letra === ":" ||
            letra === "…"
        ) {

            velocidad = 250;

        }

        // pausas entre líneas
        if (letra === "\n") {

            velocidad = 70;

        }

        // mini congelamiento aleatorio
        if (Math.random() > 0.97) {

            velocidad = 180;

        }

        setTimeout(escribirTexto, velocidad);

    } else {

        setTimeout(() => {

            document.querySelector(".grid")
                .classList.add("showGrid");

        }, 500);

    }

}

window.addEventListener("load", escribirTexto);

// -------------------
// MENSAJES
// -------------------

const mensajes = [

    "mira abajo",
    "no es ahí",
    "los pies primero",
    "él observa",
    "no estás solo",

];

document.querySelectorAll(".grid img")
    .forEach(img => {

        img.addEventListener("mouseover", () => {

            img.title =
                mensajes[
                    Math.floor(
                        Math.random() *
                        mensajes.length
                    )
                ];

        });

    });

// -------------------
// PATRONES
// -------------------

const patrones = [

    // refresh 1
    [
        "DERECHA",
        "IZQUIERDA",
        "CABECERA",
        "COMPLETA",
        "PIES"
    ],

    // refresh 2
    [
        "PIES",
        "DERECHA",
        "IZQUIERDA",
        "CABECERA",
        "COMPLETA"
    ],

    // refresh 3
    [
        "CABECERA",
        "PIES",
        "DERECHA",
        "IZQUIERDA",
        "COMPLETA"
    ],

    // refresh 4 = correcto
    [
        "IZQUIERDA",
        "DERECHA",
        "CABECERA",
        "PIES",
        "COMPLETA"
    ]

];

let paso =
    localStorage.getItem("pasoPatron") || 0;

paso = parseInt(paso);

// límite
if (paso > 3) {

    paso = 3;

}

const patronActual =
    patrones[paso];

const imagenes =
    document.querySelectorAll(".grid img");

imagenes.forEach((img, index) => {

    img.src =
        `img/${patronActual[index]}_ACERTIJO.png`;

});

// guardar avance
if (paso < 3) {

    localStorage.setItem(
        "pasoPatron",
        paso + 1
    );

}

// -------------------
// ÁRBOL
// -------------------

if (paso >= 3) {

    setTimeout(() => {

        document.getElementById("tree")
            .classList.add("showTree");

    }, 1500);

}

// -------------------
// CLICK ÁRBOL
// -------------------

document.getElementById("tree")
    .addEventListener("click", () => {

        document.body.innerHTML = `

        <div style="
            color:#777;
            font-family:Courier New;
            text-align:center;
            margin-top:20%;
            font-size:22px;
            letter-spacing:3px;
        ">

            4.7417734165455405, -74.01299430445071

            <br><br>

            <span style="
                font-size:12px;
                opacity:0.4;
            ">
                BEDBOXPAPER
            </span>

        </div>

        `;

    });

// -------------------
// GLITCH GLOBAL
// -------------------

setInterval(() => {

    if (Math.random() > 0.95) {

        document.body.classList.add("glitch");

        setTimeout(() => {

            document.body.classList.remove("glitch");

        }, 60);

    }

}, 900);

// -------------------
// MENSAJES OCULTOS
// -------------------

console.log("NO ES DÓNDE ESTÁ.");
console.log("ES DESDE DÓNDE.");