$(function(){
  //TYPED JS
  var options = {
    strings: ["A Capela 4x4..","3 patrones cada uno..","Luego libre 4x4..","Comienza","&rarr; &rarr; &rarr;", ""],
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


  let totalDeluxe1;
  let totalPatronesP1;
  let tecnicasP1;
  let flowP1;
  let escenaP1;

  let totaDeluxe2;
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
      var patron1p1 = parseInt($(".patron1p1").val());
      var patron2p1 = parseInt($(".patron2p1").val());
      var patron3p1 = parseInt($(".patron3p1").val());

      var patron4p1 = parseInt($(".patron4p1").val());
      var patron5p1 = parseInt($(".patron5p1").val());
      var patron6p1 = parseInt($(".patron6p1").val());
      var patron7p1 = parseInt($(".patron7p1").val());
      var patron8p1 = parseInt($(".patron8p1").val());
      var patron9p1 = parseInt($(".patron9p1").val());
      var patron10p1 = parseInt($(".patron10p1").val());
      var patron11p1 = parseInt($(".patron11p1").val());

      totalPatronesP1 = patron1p1 + patron2p1 + patron3p1 + patron4p1 + patron5p1 + patron6p1 + patron7p1 + patron8p1 + patron9p1 + patron10p1 + patron11p1;

      //-------------------
      tecnicasp1 = parseInt($(".tecnicasp1").val());
      flowp1 = parseInt($(".flowp1").val());
      escenap1 = parseInt($(".escenap1").val());
      //-------------------
      totalDeluxe1 = totalPatronesP1+tecnicasp1+flowp1+escenap1;


      //variables del jugador 2

      var patron1p2 = parseInt($(".patron1p2").val());
      var patron2p2 = parseInt($(".patron2p2").val());
      var patron3p2 = parseInt($(".patron3p2").val());

      var patron4p2 = parseInt($(".patron4p2").val());
      var patron5p2 = parseInt($(".patron5p2").val());
      var patron6p2 = parseInt($(".patron6p2").val());
      var patron7p2 = parseInt($(".patron7p2").val());
      var patron8p2 = parseInt($(".patron8p2").val());
      var patron9p2 = parseInt($(".patron9p2").val());
      var patron10p2 = parseInt($(".patron10p2").val());
      var patron11p2 = parseInt($(".patron11p2").val());

      totalPatronesP2 = patron1p2 + patron2p2 + patron3p2 + patron4p2 + patron5p2 + patron6p2 + patron7p2 + patron8p2 + patron9p2 + patron10p2 + patron11p2;


      //----
      tecnicasp2 = parseInt($(".tecnicasp2").val());
      flowp2 = parseInt($(".flowp2").val());
      escenap2 = parseInt($(".escenap2").val());
      //-----
      totalDeluxe2 = totalPatronesP2+tecnicasp2+flowp2+escenap2;


        //---- Seteo de localStorage
        //variables jugador 2
        localStorage.setItem('de_totalPatronesP2', totalPatronesP2);
        localStorage.setItem('de_tecnicasp2', tecnicasp2);
        localStorage.setItem('de_flowp2', flowp2);
        localStorage.setItem('de_escenap2', escenap2);
        localStorage.setItem('de_totalDeluxe2', totalDeluxe2);

        //variables jugador 1
        localStorage.setItem('de_totalPatronesP1', totalPatronesP1 );
        localStorage.setItem('de_tecnicasp1', tecnicasp1);
        localStorage.setItem('de_flowp1', flowp1);
        localStorage.setItem('de_escenap1', escenap1);
        localStorage.setItem('de_totalDeluxe1', totalDeluxe1);


    }

  });
})
