document.getElementById('siguiente').addEventListener('click', function() {
    // Validar que todos los campos del formulario inicial estén llenos
    const pais = document.getElementById('pais').value;
    const ciudad = document.getElementById('ciudad').value;
    const suelo = document.getElementById('suelo').value;
    const pisos = document.getElementById('pisos').value;
    const area = document.getElementById('area').value;

    if (!pais || !ciudad || !suelo || !pisos || !area) {
        alert('Por favor, completa todos los campos del formulario inicial.');
        return;
    }

    // Mostrar el formulario siguiente y ocultar el formulario inicial
    document.getElementById('formulario-inicial').style.display = 'none';
    document.getElementById('formulario-siguiente').style.display = 'block';
});

document.getElementById('calcular-costo').addEventListener('click', function() {
    // Obtener los valores ingresados
    const metraje = parseFloat(document.getElementById('area').value);
    const material = document.getElementById('material').value;
    const trabajadores = parseFloat(document.getElementById('trabajadores').value);
    const tiempo = parseFloat(document.getElementById('tiempo').value);
    const estado = document.getElementById('terminados').value;

    // Validar que todos los campos del segundo formulario estén llenos
    if (!trabajadores || !tiempo || !material || !estado) {
        alert('Por favor, completa todos los campos del segundo formulario.');
        return;
    }

    // Definir el costo por metro cuadrado dependiendo del material
    let costoMaterialPorM2;
    if (material === 'ladrillo') {
        costoMaterialPorM2 = 200000; // Costo de ladrillo
    } else if (material === 'madera') {
        costoMaterialPorM2 = 300000; // Costo de madera
    } else {
        alert('Selecciona un material válido.');
        return;
    }

    // Cálculos
    const costoManoObra = 600000 * metraje;
    const costoMateriales = costoMaterialPorM2 * metraje;
    const costoTotal = costoMateriales + costoManoObra;

    // Mostrar el resultado
    document.getElementById('costo-total').textContent = `$${costoTotal.toLocaleString()}`;
});
