document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('scrollContainer');
  
    container.addEventListener('wheel', function (event) {
      if (event.deltaY !== 0) {
        // Прокручиваем контейнер горизонтально на основе направления прокрутки мыши
        container.scrollLeft += event.deltaY;
        // Предотвращаем стандартное поведение прокрутки страницы
        event.preventDefault();
      }
    });
  });
  