document.addEventListener('keydown', function(event) {
    if (event.keyCode === 123) { 
      event.preventDefault();
      return false;
    }
});