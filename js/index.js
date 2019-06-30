
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

    Barba.pjax.start();
})
