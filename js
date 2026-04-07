<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Automotora</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Automotora Premium</h1>
  </header>

  <nav>
    <button onclick="filtrarPorMarca('Toyota')">Toyota</button>
    <button onclick="filtrarPorMarca('Ford')">Ford</button>
    <button onclick="filtrarPorPrecio(20000)">Menos de $20.000</button>
    <button onclick="mostrarTodos()">Todos</button>
  </nav>

  <section id="cars-section" class="cars-section"></section>

  <script>
    // Datos de ejemplo
    const autos = [
      { marca: "Toyota", modelo: "Corolla", precio: 18000, imagen: "toyota.jpg" },
      { marca: "Ford", modelo: "Focus", precio: 22000, imagen: "ford.jpg" },
      { marca: "Toyota", modelo: "Hilux", precio: 35000, imagen: "hilux.jpg" },
      { marca: "Ford", modelo: "Mustang", precio: 55000, imagen: "mustang.jpg" }
    ];

    const carsSection = document.getElementById("cars-section");

    // Función para renderizar autos
    function mostrarAutos(lista) {
      carsSection.innerHTML = "";
      lista.forEach(auto => {
        const card = document.createElement("div");
        card.className = "car-card";
        card.innerHTML = `
          <img src="${auto.imagen}" alt="${auto.modelo}">
          <h3>${auto.marca} ${auto.modelo}</h3>
          <p>Precio: $${auto.precio}</p>
          <a href="#" class="btn">Cotizar</a>
        `;
        carsSection.appendChild(card);
      });
    }

    // Filtros
    function filtrarPorMarca(marca) {
      const filtrados = autos.filter(auto => auto.marca === marca);
      mostrarAutos(filtrados);
    }

    function filtrarPorPrecio(maxPrecio) {
      const filtrados = autos.filter(auto => auto.precio <= maxPrecio);
      mostrarAutos(filtrados);
    }

    function mostrarTodos() {
      mostrarAutos(autos);
    }

    // Inicialización
    mostrarTodos();
  </script>
</body>
</html>