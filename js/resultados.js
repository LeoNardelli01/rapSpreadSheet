$(function(){
    //--- Players---
    let player1 = localStorage.getItem('rap1');
    let player2 = localStorage.getItem('rap2');

    // variables EasyMode
    let em_totalPatronesP1 = localStorage.getItem('em_totalPatronesP1');
    let em_tecnicasp1 = localStorage.getItem('em_tecnicasp1');
    let em_flowp1 = localStorage.getItem('em_flowp1');
    let em_escenap1 = localStorage.getItem('em_escenap1');
    let em_totalP1 = localStorage.getItem('em_totalEasyMode1');

    let em_totalPatronesP2 = localStorage.getItem('em_totalPatronesP2');
    let em_tecnicasp2 = localStorage.getItem('em_tecnicasp2');
    let em_flowp2 = localStorage.getItem('em_flowp2');
    let em_escenap2 = localStorage.getItem('em_escenap2')
    let em_totalP2 = localStorage.getItem('em_totalEasyMode2');

    // variables HardMode
    let hm_totalPatronesP1 = localStorage.getItem('hm_totalPatronesP1');
    let hm_tecnicasp1 = localStorage.getItem('hm_tecnicasp1');
    let hm_flowp1 = localStorage.getItem('hm_flowp1');
    let hm_escenap1 = localStorage.getItem('hm_escenap1')
    let hm_totalP1 = localStorage.getItem('hm_totalHardMode1');

    let hm_totalPatronesP2 = localStorage.getItem('hm_totalPatronesP2');
    let hm_tecnicasp2 = localStorage.getItem('hm_tecnicasp2');
    let hm_flowp2 = localStorage.getItem('hm_flowp2');
    let hm_escenap2 = localStorage.getItem('hm_escenap2')
    let hm_totalP2 = localStorage.getItem('hm_totalHardMode2');

    //-----------------

    $("#player1").html(player1);
    $("#player2").html(player2);

    $("#em_resPatronesP1").html(em_totalPatronesP1);
    $("#em_resTecnicasP1").html(em_tecnicasp1);
    $("#em_resFlowP1").html(em_flowp1);
    $("#em_resEscenaP1").html(em_escenap1)
    $("#em_totalP1").html(em_totalP1);

    $("#em_resPatronesP2").html(em_totalPatronesP2);
    $("#em_resTecnicasP2").html(em_tecnicasp2);
    $("#em_resFlowP2").html(em_flowp2);
    $("#em_resEscenaP2").html(em_escenap2);
    $("#em_totalP2").html(em_totalP2);

    // -------- -------- ----------
    $("#hm_resPatronesP1").html(hm_totalPatronesP1);
    $("#hm_resTecnicasP1").html(hm_tecnicasp1);
    $("#hm_resFlowP1").html(hm_flowp1);
    $("#hm_resEscenaP1").html(hm_escenap1)
    $("#hm_totalP1").html(hm_totalP1);

    $("#hm_resPatronesP2").html(hm_totalPatronesP2);
    $("#hm_resTecnicasP2").html(hm_tecnicasp2);
    $("#hm_resFlowP2").html(hm_flowp2);
    $("#hm_resEscenaP2").html(hm_escenap2);
    $("#hm_totalP2").html(hm_totalP2);

    var resFinalesP1 = parseInt(em_totalP1) + parseInt(hm_totalP1);
    var resFinalesP2 = parseInt(em_totalP2) + parseInt(hm_totalP2);

    $("#resFinalP1").html(resFinalesP1);
    $("#resFinalP2").html(resFinalesP2);

    if (resFinalesP1 > resFinalesP2) {
      $("#ganador").html("GANO " + player1);
    } else if (resFinalesP2 > resFinalesP1) {
      $("#ganador").html("GANO " + player2);
    } else{
      var btn_replica = "<a id='replica' class='btn btn-danger btn-block' href='replica.html'>Empezar Replica</a>";
      $("#replica").append(btn_replica);
    }



    $("#nuevaBatalla").click(function(e){
      var r = confirm("¿Estás seguro?\n Esto no se podra deshacer");

      if (r) {
        localStorage.clear();
      } else{
        e.preventDefault();
      }
    });
})
