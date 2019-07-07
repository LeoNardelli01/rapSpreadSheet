$(function(){
    //--- Players---
    let player1 = localStorage.getItem('rap1').toUpperCase();
    let player2 = localStorage.getItem('rap2').toUpperCase();

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

    // variables tematicas
    let te_totalPatronesP1 = localStorage.getItem('te_totalPatronesP1');
    let te_tecnicasp1 = localStorage.getItem('te_tecnicasp1');
    let te_flowp1 = localStorage.getItem('te_flowp1');
    let te_escenap1 = localStorage.getItem('te_escenap1')
    let te_totalP1 = localStorage.getItem('te_totalTematicas1');

    let te_totalPatronesP2 = localStorage.getItem('te_totalPatronesP2');
    let te_tecnicasp2 = localStorage.getItem('te_tecnicasp2');
    let te_flowp2 = localStorage.getItem('te_flowp2');
    let te_escenap2 = localStorage.getItem('te_escenap2')
    let te_totalP2 = localStorage.getItem('te_totalTematicas2');

    // variables personajes
    let pe_totalPatronesP1 = localStorage.getItem('pe_totalPatronesP1');
    let pe_tecnicasp1 = localStorage.getItem('pe_tecnicasp1');
    let pe_flowp1 = localStorage.getItem('pe_flowp1');
    let pe_escenap1 = localStorage.getItem('pe_escenap1')
    let pe_totalP1 = localStorage.getItem('pe_totalPersonajes1');

    let pe_totalPatronesP2 = localStorage.getItem('pe_totalPatronesP2');
    let pe_tecnicasp2 = localStorage.getItem('pe_tecnicasp2');
    let pe_flowp2 = localStorage.getItem('pe_flowp2');
    let pe_escenap2 = localStorage.getItem('pe_escenap2')
    let pe_totalP2 = localStorage.getItem('pe_totalPersonajes2');


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

    // -------- -------- ----------
    $("#te_resPatronesP1").html(te_totalPatronesP1);
    $("#te_resTecnicasP1").html(te_tecnicasp1);
    $("#te_resFlowP1").html(te_flowp1);
    $("#te_resEscenaP1").html(te_escenap1)
    $("#te_totalP1").html(te_totalP1);

    $("#te_resPatronesP2").html(te_totalPatronesP2);
    $("#te_resTecnicasP2").html(te_tecnicasp2);
    $("#te_resFlowP2").html(te_flowp2);
    $("#te_resEscenaP2").html(te_escenap2);
    $("#te_totalP2").html(te_totalP2);

    // -------- -------- ----------
    $("#pe_resPatronesP1").html(pe_totalPatronesP1);
    $("#pe_resTecnicasP1").html(pe_tecnicasp1);
    $("#pe_resFlowP1").html(pe_flowp1);
    $("#pe_resEscenaP1").html(pe_escenap1)
    $("#pe_totalP1").html(pe_totalP1);

    $("#pe_resPatronesP2").html(pe_totalPatronesP2);
    $("#pe_resTecnicasP2").html(pe_tecnicasp2);
    $("#pe_resFlowP2").html(pe_flowp2);
    $("#pe_resEscenaP2").html(pe_escenap2);
    $("#pe_totalP2").html(pe_totalP2);


    var resFinalesP1 = parseInt(em_totalP1) + parseInt(hm_totalP1) + parseInt(te_totalP1) + parseInt(pe_totalP1);
    var resFinalesP2 = parseInt(em_totalP2) + parseInt(hm_totalP2) + parseInt(te_totalP2) + parseInt(pe_totalP2);

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

    // CHART.JS

    //aplico regla de 3 para sacar porcentajes en relacion al maximo
    var totalPatronesP1 = (parseInt(em_totalPatronesP1) + parseInt(hm_totalPatronesP1) + parseInt(te_totalPatronesP1) + parseInt(pe_totalPatronesP1)) * 100 / 202;
    var totalTecnicasP1 = (parseInt(em_tecnicasp1) + parseInt(hm_tecnicasp1) + parseInt(te_tecnicasp1) + parseInt(pe_tecnicasp1)) * 100 / 16;
    var totalFlowP1 = (parseInt(em_flowp1) + parseInt(hm_flowp1) + parseInt(te_flowp1) + parseInt(pe_flowp1)) * 100 / 16;
    var totalEscenaP1 = (parseInt(em_escenap1) + parseInt(hm_escenap1) + parseInt(te_escenap1) + parseInt(pe_escenap1)) * 100 / 16;


    var totalPatronesP2 = (parseInt(em_totalPatronesP2) + parseInt(hm_totalPatronesP2) + parseInt(te_totalPatronesP2) + parseInt(pe_totalPatronesP2)) * 100 / 202;
    var totalTecnicasP2 = (parseInt(em_tecnicasp2) + parseInt(hm_tecnicasp2) + parseInt(te_tecnicasp2) + parseInt(pe_tecnicasp2)) * 100 / 16;
    var totalFlowP2 = (parseInt(em_flowp2) + parseInt(hm_flowp2) + parseInt(te_flowp2) + parseInt(pe_flowp2)) * 100 / 16;
    var totalEscenaP2 = (parseInt(em_escenap2) + parseInt(hm_escenap2) + parseInt(te_escenap2) + parseInt(pe_escenap2)) * 100 / 16;

    var batallometro = (parseInt(resFinalesP1) + parseInt(resFinalesP2)) * 100 / 500;


    var chart1 = document.getElementById('chart1').getContext('2d');

    var chart1_bar = new Chart(chart1,{
        type:"bar",
        data: {
          labels:['Patrones', 'Técnica', 'Flow', 'P. Escena'],
          datasets: [
            {
            label: player1,
            data: [parseInt(totalPatronesP1), parseInt(totalTecnicasP1), parseInt(totalFlowP1), parseInt(totalEscenaP1) ],
            backgroundColor: 'rgba(0, 98, 255, 0.5)',
            borderColor: 'rgb(0, 98, 255)',
            borderWidth: 2
          },{
            label: player2,
            data: [parseInt(totalPatronesP2), parseInt(totalTecnicasP2), parseInt(totalFlowP2), parseInt(totalEscenaP2) ],
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            borderColor: 'rgb(255, 0, 0)',
            borderWidth: 2
          }
        ]},
        options: {
          legend:{
            labels:{
              fontColor: 'white',
              fontFamily: 'Russo One'
            }
          },
          scales: {

            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true,
                min: 0,
                max: 100,
                fontSize: 20
              }
            }]
          }
        }

    });
    /*
    BATALLOMETRO
    */
    $(".progressBar").width(batallometro + "%");
    $(".progressBar").html(batallometro + "%")

    //nueva batalla btn
    $("#nuevaBatalla").click(function(e){
      var r = confirm("¿Estás seguro?\n Esto no se podra deshacer");

      if (r) {
        localStorage.clear();
      } else{
        e.preventDefault();
      }
    });
})
