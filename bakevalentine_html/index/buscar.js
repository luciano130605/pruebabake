document.addEventListener("DOMContentLoaded", () => {
    const btnBuscar = document.getElementById("btn-buscar");
    const buscador = document.getElementById("Buscador");

    const paginas = {
        "budines": "../productos/budines/budines.html",
        "budin": "../productos/budines/budines.html",
        "torta": "../productos/tortas/tortas.html",
        "tortas": "../productos/tortas/tortas.html",
        "cookie": "../productos/cookie/cookies.html",
        "cookies": "../productos/cookie/cookies.html",
        "muffin": "../productos/muffins-y-cupcakes/muffins-y-cupcakes.html",
        "muffins": "../productos/muffins-y-cupcakes/muffins-y-cupcakes.html",
        "cupcake": "../productos/muffins-y-cupcakes/muffins-y-cupcakes.html",
        "cupcakes": "../productos/muffins-y-cupcakes/muffins-y-cupcakes.html",
        "alfajor": "../productos/alfajores/alfajores.html",
        "alfajores": "../productos/alfajores/alfajores.html",
        "pepa": "../productos/pepas-y-scones/pepas-y-scones.html",
        "pepas": "../productos/pepas-y-scones/pepas-y-scones.html",
        "scone": "../productos/pepas-y-scones/pepas-y-scones.html",
        "scones": "../productos/pepas-y-scones/pepas-y-scones.html",
        "postre": "../productos/postres/postres.html",
        "postres": "../productos/postres/postres.html",
        "box": "../productos/box/box.html"
    };

    btnBuscar.addEventListener("click", () => {
        const termino = buscador.value.trim().toLowerCase();
        if (!termino) {
            alert("Escribí algo para buscar");
            return;
        }

        // Buscar coincidencia parcial
        const pagina = Object.keys(paginas).find(key => termino.includes(key));

        if (pagina) {
            location.href = paginas[pagina];
        } else {
            alert("No se encontró lo que buscás");
        }
    });
    
    buscador.addEventListener("keyup", (e) => {
        if (e.key === "Enter") btnBuscar.click();
    });

});
