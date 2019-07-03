$(function(){
  //PLAYERS
  let player1 = localStorage.getItem('rap1');
  let player2 = localStorage.getItem('rap2');
  let terminados = 0;
  let totalEasyMode1 = localStorage.getItem('em_totalEasyMode1');
  let totalEasyMode2 = localStorage.getItem('em_totalEasyMode2');

  //btn easy mode verde o gris
if (localStorage.getItem('em_totalEasyMode1') === null) {
    $("#easyMode").css('background-color', 'rgba(145, 145, 145, 0.51)');//gris

  }else{
    $("#easyMode").css('background-color', "rgba(17, 213, 78, 0.39)");//verde
    $("#easyMode").css('box-shadow', '0px 0px 15px green');

    terminados += 1;
    localStorage.setItem('em_completado', terminados);
  }

  // btn hard mode verde o gris
  if (localStorage.getItem('hm_totalHardMode1') === null) {
    $("#hardMode").css('background-color', 'rgba(145, 145, 145, 0.51)');//gris

  }else{
    $("#hardMode").css('background-color', "rgba(17, 213, 78, 0.39)");//verde
    $("#hardMode").css('box-shadow', '0px 0px 15px green');

    terminados += 1;
    localStorage.setItem('hm_completado', terminados);
  }
  //aca hacer boton por boton gris o verde



  switch (terminados) {
    case 0:
      var options = {
        strings: ["<h4>Bienvenido a RAP SpreaDSheeT</h4>", "<h4>Formato FMS</h4>","<h4>Buena Suerte " + player1 + " y " + player2 + "" + "</h4>", "<h4>3...2...1... TIEMPO</h4>", "<h4></h4>" ],
        typeSpeed: 75
      }
      var typed = new Typed(".typed", options);
      //--- End Typed----
      $("#easyMode").removeClass("disabled");
      $("#nombre1").html(player1);
      $("#nombre2").html(player2);
      break;

      case 1:  // EASY MODE TERMINADO

      var options = {
        strings: ["<h4>Easy Mode Terminado</h4>", "<h4>" + localStorage.getItem('em_totalEasyMode1') + " Para " + player1 +"</h4>","<h4>" + localStorage.getItem('em_totalEasyMode2') + " Para " + player2 +"</h4>", "<h4>Preparate para el Hard Mode</h4>", "<h4></h4>" ],
        typeSpeed: 80
      }
      var typed = new Typed(".typed", options);
      //--- End Typed----
      $("#hardMode").removeClass("disabled");
      $("#nombre1").html(player1 + " " + totalEasyMode1);
      $("#nombre2").html(totalEasyMode2 + " " + player2);
      localStorage.setItem('hm_completado', terminados);

      break;

      case 2:  // HARD MODE TERMINADO
      var options = {
        strings: ["<h4>Hard Mode Terminado</h4>", "<h4>" + localStorage.getItem('hm_totalHardMode1') + " Para " + player1 +"</h4>","<h4>" + localStorage.getItem('hm_totalHardMode2') + " Para " + player2 +"</h4>", "<h4>Preparate para Temáticas</h4>", "<h4></h4>" ],
        typeSpeed: 80
      }
      var typed = new Typed(".typed", options);
      $("#tematicas").removeClass("disabled");
      localStorage.setItem('hm_completado', terminados);
      var easyMasHard1 = parseInt(localStorage.getItem('em_totalEasyMode1')) + parseInt(localStorage.getItem('hm_totalHardMode1'));
      var easyMasHard2 = parseInt(localStorage.getItem('em_totalEasyMode1')) + parseInt(localStorage.getItem('hm_totalHardMode2'));

      $("#nombre1").html(player1 + " " + easyMasHard1);
      $("#nombre2").html(easyMasHard2 + " " + player2);
      //activar termianr batalla
      $("#btn-terminarBatalla").removeClass("disabled");

      break;



  }


})
