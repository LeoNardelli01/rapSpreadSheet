$(function(){
  //TYPED JS
  var options = {
    strings: ["","Comienza...", "&larr; &larr; &larr;", ""],
    typeSpeed: 75,
    showCursor: false,
    smartBackspace: true
  }
  var typed = new Typed(".typed", options);
  //FIn TYPED


  let player1 = localStorage.getItem('rap1');
  let player2 = localStorage.getItem('rap2');

  $("#nombre1").html(player1);
  $("#nombre2").html(player2);

  let totalTematicasP1;
  let totalPatronesP1;
  let tecnicasP1;
  let flowP1;
  let escenaP1;

  let totaTematicasP2;
  let totalPatronesP2;
  let tecnicasP2;
  let flowP2;
  let escenaP2;

  $("#volverMenu").click(function(e){
    var revisado = false;
    var r = confirm("Quieres continuar?\n no podras cambiarlos despues");


    if (!r) {
        e.preventDefault();

    } else {

      //variables del jugador 1
      var patron1p1 = parseInt($(".patron1p1").val()) + parseInt($(".vpatron1p1").val());
      var patron2p1 = parseInt($(".patron2p1").val()) + parseInt($(".vpatron2p1").val());
      var patron3p1 = parseInt($(".patron3p1").val()) + parseInt($(".vpatron3p1").val());
      var patron4p1 = parseInt($(".patron4p1").val()) + parseInt($(".vpatron4p1").val());


      totalPatronesP1 = patron1p1+patron2p1+patron3p1+patron4p1;
      //-------------------
      tecnicasp1 = parseInt($(".tecnicasp1").val()) + parseInt($(".vtecnicasp1").val());
      flowp1 = parseInt($(".flowp1").val()) + parseInt($(".vflowp1").val());
      escenap1 = parseInt($(".escenap1").val()) + parseInt($(".vescenap1").val());
      //-------------------
      totalTematicasP1 = totalPatronesP1+tecnicasp1+flowp1+escenap1;


      //variables del jugador 2

      var patron1p2 = parseInt($(".patron1p2").val()) + parseInt($(".vpatron1p2").val());
      var patron2p2 = parseInt($(".patron2p2").val()) + parseInt($(".vpatron2p2").val());
      var patron3p2 = parseInt($(".patron3p2").val()) + parseInt($(".vpatron3p2").val());
      var patron4p2 = parseInt($(".patron4p2").val()) + parseInt($(".vpatron4p2").val());

      totalPatronesP2 = patron1p2+patron2p2+patron3p2+patron4p2;
      //----
      tecnicasp2 = parseInt($(".tecnicasp2").val()) + parseInt($(".vtecnicasp1").val());
      flowp2 = parseInt($(".flowp2").val()) + parseInt($(".vflowp2").val());
      escenap2 = parseInt($(".escenap2").val()) + parseInt($(".vescenap2").val()) ;
      //-----
      totalTematicasP2 = totalPatronesP2+tecnicasp2+flowp2+escenap2;


        //---- Seteo de localStorage
        //variables jugador 2
        localStorage.setItem('te_totalPatronesP2', totalPatronesP2);
        localStorage.setItem('te_tecnicasp2', tecnicasp2);
        localStorage.setItem('te_flowp2', flowp2);
        localStorage.setItem('te_escenap2', escenap2);
        localStorage.setItem('te_totalTematicas2', totalTematicasP2);

        //variables jugador 1
        localStorage.setItem('te_totalPatronesP1', totalPatronesP1 );
        localStorage.setItem('te_tecnicasp1', tecnicasp1);
        localStorage.setItem('te_flowp1', flowp1);
        localStorage.setItem('te_escenap1', escenap1);
        localStorage.setItem('te_totalTematicas1', totalTematicasP1);

    }

  });
})
