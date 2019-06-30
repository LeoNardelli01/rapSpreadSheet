$(function(){
    //--- Player 1---
    let player1 = localStorage.getItem('rap1');
    let em_totalPatronesP1 = localStorage.getItem('em_totalPatronesP1');
    let em_tecnicasp1 = localStorage.getItem('em_tecnicasp1');
    let em_flowp1 = localStorage.getItem('em_flowp1');
    let em_escenap1 = localStorage.getItem('em_escenap1');
    let em_totalP1 = localStorage.getItem('em_totalEasyMode1');

    //--- Player 2 ---
    let player2 = localStorage.getItem('rap2');
    let em_totalPatronesP2 = localStorage.getItem('em_totalPatronesP2');
    let em_tecnicasp2 = localStorage.getItem('em_tecnicasp2');
    let em_flowp2 = localStorage.getItem('em_flowp2');
    let em_escenap2 = localStorage.getItem('em_escenap2')
    let em_totalP2 = localStorage.getItem('em_totalEasyMode2');

    $("#player1").html(player1)
    $("#resPatronesP1").html(em_totalPatronesP1);
    $("#resTecnicasP1").html(em_tecnicasp1);
    $("#resFlowP1").html(em_flowp1);
    $("#resEscenaP1").html(em_escenap1)
    //-----------------
    $("#totalP1").html(em_totalP1);


    $("#player2").html(player2);
    $("#resPatronesP2").html(em_totalPatronesP2);
    $("#resTecnicasP2").html(em_tecnicasp2);
    $("#resFlowP2").html(em_flowp2);
    $("#resEscenaP2").html(em_escenap2);
    //--------------
    $("#totalP2").html(em_totalP2);


    var sum_totales = parseInt(em_totalP1) + parseInt(em_totalP2);

    if (parseInt(em_totalP1) > parseInt(em_totalP2)) {
      $("#ganador").html("GANO " + player1);
    } else if (parseInt(em_totalP2) > parseInt(em_totalP1)) {
      $("#ganador").html("GANO " + player2);
    } else{
      $("#ganador").html("EMPATE!");
      var btn_replica = "<a id='replica' class='btn btn-warning btn-lg btn-block' href='replica.html'>IR A REPLICA</a>";
      $("#replica").append(btn_replica);
    }






//    html2canvas(document.body, {
//      onrendered (canvas) {
//        var link = document.getElementById('download');;
//        var image = canvas.toDataURL();
//        link.href = image;
//        link.download = player1 + ' vs ' + player2 + '.png';
//  }
//});


    $("#nuevaBatalla").click(function(e){
      var r = confirm("Estas seguro?\n");

      if (r) {
        localStorage.clear();
      } else{
        e.preventDefault();
      }
    });
})
