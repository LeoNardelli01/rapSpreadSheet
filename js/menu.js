$(function(){
  //PLAYERS
  let player1 = localStorage.getItem('rap1');
  let player2 = localStorage.getItem('rap2');
  let terminados = 0;
  let resFinalesP1 = 0;
  let resFinalesP2 = 0;

        //btn easy mode verde o gris
        if (localStorage.getItem('em_totalEasyMode1') === null) {
            $("#easyMode").css('background-color', 'rgba(145, 145, 145, 0.51)');//gris

          }else{
            $("#easyMode").css('background-color', "rgba(17, 213, 78, 0.39)");//verde
            $("#easyMode").css('box-shadow', '0px 0px 15px green');
            resFinalesP1 += parseInt(localStorage.getItem('em_totalEasyMode1'));
            resFinalesP2 += parseInt(localStorage.getItem('em_totalEasyMode2'));

            terminados += 1;
          }

          // btn hard mode verde o gris
          if (localStorage.getItem('hm_totalHardMode1') === null) {
            $("#hardMode").css('background-color', 'rgba(145, 145, 145, 0.51)');//gris

          }else{
            $("#hardMode").css('background-color', "rgba(17, 213, 78, 0.39)");//verde
            $("#hardMode").css('box-shadow', '0px 0px 15px green');
            resFinalesP1 += parseInt(localStorage.getItem('hm_totalHardMode1'));
            resFinalesP2 += parseInt(localStorage.getItem('hm_totalHardMode2'));

            terminados += 1;
          }
          //aca hacer boton por boton gris o verde



  switch (terminados) {
    case 0:      //ARRANCA EL MENU
      var options = {
        strings: ["<h4>Bienvenido a RAP SpreaDSheeT</h4>", "<h4>Formato FMS</h4>","<h4>Buena Suerte " + player1 + " y " + player2 + "" + "</h4>", "<h4>3...2...1... TIEMPO</h4>", "<h4></h4>" ],
        typeSpeed: 70
      }
      var typed = new Typed(".typed", options);

      $("#easyMode").removeClass("disabled");
      $("#nombre1").html(player1);
      $("#nombre2").html(player2);

      break;

      case 1:  // EASY MODE TERMINADO

      var options = {
        strings: ["<h4>Easy Mode Terminado</h4>", "<h4>" + localStorage.getItem('em_totalEasyMode1') + " Pts Para " + player1 +"</h4>","<h4>" + localStorage.getItem('em_totalEasyMode2') + " Pts Para " + player2 +"</h4>", "<h4>Preparate para el Hard Mode</h4>", "<h4></h4>" ],
        typeSpeed: 70
      }
      var typed = new Typed(".typed", options);


      $("#hardMode").removeClass("disabled");
      $("#nombre1").html(player1);
      $("#resP1").html(resFinalesP1)
      $("#nombre2").html(player2);
      $("#resP2").html(resFinalesP2);
      break;

      case 2:  // HARD MODE TERMINADO
      var options = {
        strings: ["<h4>Hard Mode Terminado</h4>", "<h4>" + localStorage.getItem('hm_totalHardMode1') + " Pts Para " + player1 +"</h4>","<h4>" + localStorage.getItem('hm_totalHardMode2') + " Pts Para " + player2 +"</h4>", "<h4>Preparate para Temáticas</h4>", "<h4></h4>" ],
        typeSpeed: 70
      }
      var typed = new Typed(".typed", options);
      $("#tematicas").removeClass("disabled");

      $("#nombre1").html(player1);
      $("#resP1").html(resFinalesP1);
      $("#nombre2").html(player2);
      $("#resP2").html(resFinalesP2);
      //activar termianr batalla
      $("#btn-terminarBatalla").removeClass("disabled");

      break;

  }//fin switch


})
