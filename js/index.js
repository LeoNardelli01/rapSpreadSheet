
$(function(){


    var btnEmpezar = $("#empezar");

    btnEmpezar.click(function(e){

        var rapper1 = $("#r1").val();
        var rapper2 = $("#r2").val();

          if (rapper1 == "") {
            e.preventDefault();
            alert("El Rapero 1 necesita un nombre");
        } else if(rapper2 == ""){
            e.preventDefault();
            alert("El Rapero 2 necesita un nombre");
        } else{
          localStorage.setItem('rap1', rapper1);
          localStorage.setItem('rap2', rapper2);
        }
    });

  //TYPED JS
  var options = {
    strings: ["<h3>Puntúa tus batallas</h3>", "<h3>Conviértete en jurado</h3>","<h3>Juega con tus amigos</h3>", "<h3>¿Están Listos?</h3>" ],
    typeSpeed: 70
  }
  var typed = new Typed(".typed", options);


})
