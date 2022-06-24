

const calculadora = document.querySelector('.calculadora')

calculadora.onmousedown = function (event) {

  let shiftX = event.clientX - calculadora.getBoundingClientRect().left;
  let shiftY = event.clientY - calculadora.getBoundingClientRect().top;

  calculadora.style.position = 'absolute';
  calculadora.style.zIndex = 1000;
  document.body.append(calculadora);

  moveAt(event.pageX, event.pageY);

  // mueve la pelota a las coordenadas (pageX, pageY)
  // tomando la posición inicial en cuenta
  function moveAt(pageX, pageY) {
    calculadora.style.left = pageX - shiftX + 'px';
    calculadora.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // mueve la pelota con mousemove
  document.addEventListener('mousemove', onMouseMove);

  // suelta la pelota, elimina el manejador innecesario
  calculadora.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    calculadora.onmouseup = null;
  };

};

calculadora.ondragend = function() {
  return false;
};