function contarCaracteres() {
    const texto = document.getElementById('texto').value;
    const contador = document.getElementById('contador');
    contador.textContent = texto.length;
}
