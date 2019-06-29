$(function(){
  let player1 = localStorage.getItem('rap1');
  let player2 = localStorage.getItem('rap2');

  $("#rap1").html(player1);
  $("#rap2").html(player2);

  let totalP1;
  let totalPatronesP1;
  let tecnicasP1;
  let flowP1;
  let escenaP1;

  let totalP2;
  let totalPatronesP2;
  let tecnicasP2;
  let flowP2;
  let escenaP2;

  $("#volverMenu").click(function(e){
    //variables del jugador 1

    var patron1p1 = parseInt($(".patron1p1").val());
    var patron2p1 = parseInt($(".patron2p1").val());
    var patron3p1 = parseInt($(".patron3p1").val());
    var patron4p1 = parseInt($(".patron4p1").val());
    var patron5p1 = parseInt($(".patron5p1").val());
    var patron6p1 = parseInt($(".patron6p1").val());

    totalPatronesP1 = patron1p1+patron2p1+patron3p1+patron4p1+patron5p1+patron6p1;
    tecnicasp1 = parseInt($(".tecnicasp1").val());
    flowp1 = parseInt($(".flowp1").val());
    escenap1 = parseInt($(".escenap1").val());

    //variables del jugador 2

    var patron1p2 = parseInt($(".patron1p2").val());
    var patron2p2 = parseInt($(".patron2p2").val());
    var patron3p2 = parseInt($(".patron3p2").val());
    var patron4p2 = parseInt($(".patron4p2").val());
    var patron5p2 = parseInt($(".patron5p2").val());
    var patron6p2 = parseInt($(".patron6p2").val());

    totalPatronesP2 = patron1p2+patron2p2+patron3p2+patron4p2+patron5p2+patron6p2;
    tecnicasp2 = parseInt($(".tecnicasp2").val());
    flowp2 = parseInt($(".flowp2").val());
    escenap2 = parseInt($(".escenap2").val());
    totalP1 = totalPatronesP1+tecnicasp1+flowp1+escenap1;

    localStorage.setItem('totalPatronesP1', totalPatronesP1 );
    localStorage.setItem('tecnicasp1', tecnicasp1);
    localStorage.setItem('flowp1', flowp1);
    localStorage.setItem('escenap2', escenap1);
    localStorage.setItem('totalP1', totalP1);








  });





})
