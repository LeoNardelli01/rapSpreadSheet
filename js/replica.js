$(function(){
  $("#volverMenu").click(function(e){
    var r = confirm("¿Estás seguro?\n Esto no se podra deshacer");

    if (r) {
      localStorage.clear();
    } else{
      e.preventDefault();
    }
  });

});
