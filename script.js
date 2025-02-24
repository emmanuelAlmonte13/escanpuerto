document.getElementById('escaneoBtn').addEventListener('click', function() {
    const ip = document.getElementById('ip').value;
    const puertos = document.getElementById('puertos').value.split(',').map(puerto => puerto.trim());
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';
  
    if (!ip || puertos.length === 0) {
      alert('Por favor, ingresa una IP y puertos para escanear.');
      return;
    }
  
    puertos.forEach(puerto => {
      // Intentamos hacer una petición HTTP a ese puerto
      fetch(`http://${ip}:${puerto}`)
        .then(response => {
          if (response.ok) {
            resultadosDiv.innerHTML += `<p>Puerto ${puerto} abierto</p>`;
          } else {
            resultadosDiv.innerHTML += `<p>Puerto ${puerto} cerrado</p>`;
          }
        })
        .catch(error => {
          resultadosDiv.innerHTML += `<p>Puerto ${puerto} inaccesible o cerrado</p>`;
        });
    });
  });
  