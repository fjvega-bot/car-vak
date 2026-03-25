async function cargarAutos() {
  const res = await fetch('data.json');
  const autos = await res.json();
  mostrarAutos(autos);

  document.getElementById('busqueda').addEventListener('input', e => {
    const filtro = e.target.value.toLowerCase();
    const filtrados = autos.filter(a => a.nombre.toLowerCase().includes(filtro));
    mostrarAutos(filtrados);
  });
}

function mostrarAutos(autos) {
  const contenedor = document.getElementById('autos');
  contenedor.innerHTML = '';

  autos.forEach(auto => {
    contenedor.innerHTML += `
      <div class="card">
        <img src="${auto.imagen}" alt="${auto.nombre}">
        <div class="card-content">
          <h3>${auto.nombre}</h3>
          <p class="precio">${auto.precio}</p>
          <button>Ver más</button>
        </div>
      </div>
    `;
  });
}

cargarAutos();