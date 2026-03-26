const ruta = window.location.pathname;

async function cargarAutos() {
  const res = await fetch('data.json');
  const autos = await res.json();

  let categoria = "";

  if (ruta.includes("sedanes")) categoria = "sedan";
  if (ruta.includes("hatchbacks")) categoria = "hatchback";
  if (ruta.includes("camionetas")) categoria = "camioneta";
  if (ruta.includes("motos")) categoria = "moto";
  if (ruta.includes("deportivos")) categoria = "deportivo";

  const filtrados = categoria
    ? autos.filter(a => a.categoria === categoria)
    : autos;

  mostrarAutos(filtrados);
}

function mostrarAutos(autos) {
  const contenedor = document.getElementById('autos');
  contenedor.innerHTML = '';

  autos.forEach(auto => {
    contenedor.innerHTML += `
      <div class="card">
        <img src="${auto.imagen}">
        <div class="card-content">
          <h3>${auto.nombre}</h3>
          <p class="precio">${auto.precio}</p>
          <button>Comprar</button>
        </div>
      </div>
    `;
  });
}

cargarAutos();
