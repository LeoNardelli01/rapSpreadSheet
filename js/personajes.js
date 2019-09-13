$(function(){
  //TYPED JS
  var options = {
    strings: ["Modalidad 4x4","&#9745; Si usa el Personaje","Comienza...", "&larr; &larr; &larr;", ""],
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

  let totalPatronesP1;
  let tecnicasP1;
  let flowP1;
  let escenaP1;
  let totalPersonajes1;
  let checkTotal1 = 0;

  let totalPatronesP2;
  let tecnicasP2;
  let flowP2;
  let escenaP2;
  let totalPersonajes2;
  let checkTotal2 = 0;


  $("#volverMenu").click(function(e){
    var revisado = false;
    var r = confirm("Quieres continuar?\n no podras cambiarlos despues");


    if (!r) {
        e.preventDefault();

    } else {

      //checkbox P1
      if ($("#checkPatron1p1").is(':checked') ) {
        checkTotal1 +=1;
      }
      if ($("#checkPatron2p1").is(':checked') ) {
        checkTotal1 +=1;
      }
      if ($("#checkPatron3p1").is(':checked') ) {
        checkTotal1 +=1;
      }
      if ($("#checkPatron4p1").is(':checked') ) {
        checkTotal1 +=1;
      }
      if ($("#checkPatron5p1").is(':checked') ) {
        checkTotal1 +=1;
      }
      if ($("#checkPatron6p1").is(':checked') ) {
        checkTotal1 +=1;
      }

      //checkbox P2
      if ($("#checkPatron1p2").is(':checked') ) {
        checkTotal2 +=1;
      }
      if ($("#checkPatron2p2").is(':checked') ) {
        checkTotal2 +=1;
      }
      if ($("#checkPatron3p2").is(':checked') ) {
        checkTotal2 +=1;
      }
      if ($("#checkPatron4p2").is(':checked') ) {
        checkTotal2 +=1;
      }
      if ($("#checkPatron5p2").is(':checked') ) {
        checkTotal2 +=1;
      }
      if ($("#checkPatron6p2").is(':checked') ) {
        checkTotal2 +=1;
      }



      //variables del jugador 1
      var patron1p1 = parseInt($(".patron1p1").val());
      var patron2p1 = parseInt($(".patron2p1").val());
      var patron3p1 = parseInt($(".patron3p1").val());
      var patron4p1 = parseInt($(".patron4p1").val());
      var patron5p1 = parseInt($(".patron5p1").val());
      var patron6p1 = parseInt($(".patron6p1").val());

      totalPatronesP1 = patron1p1+patron2p1+patron3p1+patron4p1+patron5p1+patron6p1+checkTotal1;
      //-------------------
      tecnicasp1 = parseInt($(".tecnicasp1").val());
      flowp1 = parseInt($(".flowp1").val());
      escenap1 = parseInt($(".escenap1").val());
      //-------------------
      totalPersonajes1 = totalPatronesP1+tecnicasp1+flowp1+escenap1;


      //variables del jugador 2

      var patron1p2 = parseInt($(".patron1p2").val());
      var patron2p2 = parseInt($(".patron2p2").val());
      var patron3p2 = parseInt($(".patron3p2").val());
      var patron4p2 = parseInt($(".patron4p2").val());
      var patron5p2 = parseInt($(".patron5p2").val());
      var patron6p2 = parseInt($(".patron6p2").val());

      totalPatronesP2 = patron1p2+patron2p2+patron3p2+patron4p2+patron5p2+patron6p2+checkTotal2;
      //----
      tecnicasp2 = parseInt($(".tecnicasp2").val());
      flowp2 = parseInt($(".flowp2").val());
      escenap2 = parseInt($(".escenap2").val());
      //-----
      totalPersonajes2 = totalPatronesP2+tecnicasp2+flowp2+escenap2;


        //---- Seteo de localStorage
        //variables jugador 2
        localStorage.setItem('pe_totalPatronesP2', totalPatronesP2);
        localStorage.setItem('pe_tecnicasp2', tecnicasp2);
        localStorage.setItem('pe_flowp2', flowp2);
        localStorage.setItem('pe_escenap2', escenap2);
        localStorage.setItem('pe_totalPersonajes2', totalPersonajes2);

        //variables jugador 1
        localStorage.setItem('pe_totalPatronesP1', totalPatronesP1 );
        localStorage.setItem('pe_tecnicasp1', tecnicasp1);
        localStorage.setItem('pe_flowp1', flowp1);
        localStorage.setItem('pe_escenap1', escenap1);
        localStorage.setItem('pe_totalPersonajes1', totalPersonajes1);

    }

  });
})
