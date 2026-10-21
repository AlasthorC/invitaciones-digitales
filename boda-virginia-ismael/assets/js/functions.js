  // Fecha objetivo: 6 de Diciembre a las 13:30 hrs
  // (El mes en JavaScript va de 0 a 11, por lo que Diciembre es 11)
  const fechaObjetivo = new Date(new Date().getFullYear(), 11, 6, 13, 30, 0).getTime();

  function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
      document.querySelector('.contador-contenedor').innerHTML = 
        '<p class="contador-titulo">¡Llegó el día de celebrar!</p>';
      return;
    }

    // Cálculos de tiempo
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Renderizar en HTML agregando cero inicial si es menor a 10
    document.getElementById('dias').innerText = dias < 10 ? '0' + dias : dias;
    document.getElementById('horas').innerText = horas < 10 ? '0' + horas : horas;
    document.getElementById('minutos').innerText = minutos < 10 ? '0' + minutos : minutos;
    document.getElementById('segundos').innerText = segundos < 10 ? '0' + segundos : segundos;
  }

  // Ejecutar inmediatamente y actualizar cada segundo
  actualizarContador();
  setInterval(actualizarContador, 1000);