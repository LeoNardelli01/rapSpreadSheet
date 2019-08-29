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

    //variables LIBRE
    let li_totalPatronesP1 = localStorage.getItem('li_totalPatronesP1');
    let li_tecnicasp1 = localStorage.getItem('li_tecnicasp1');
    let li_flowp1 = localStorage.getItem('li_flowp1');
    let li_escenap1 = localStorage.getItem('li_escenap1')
    let li_totalP1 = localStorage.getItem('li_totalLibre1');

    let li_totalPatronesP2 = localStorage.getItem('li_totalPatronesP2');
    let li_tecnicasp2 = localStorage.getItem('li_tecnicasp2');
    let li_flowp2 = localStorage.getItem('li_flowp2');
    let li_escenap2 = localStorage.getItem('li_escenap2')
    let li_totalP2 = localStorage.getItem('li_totalLibre2');

    //variables Deluxe
    let de_totalPatronesP1 = localStorage.getItem('de_totalPatronesP1');
    let de_tecnicasp1 = localStorage.getItem('de_tecnicasp1');
    let de_flowp1 = localStorage.getItem('de_flowp1');
    let de_escenap1 = localStorage.getItem('de_escenap1')
    let de_totalP1 = localStorage.getItem('de_totalDeluxe1');

    let de_totalPatronesP2 = localStorage.getItem('de_totalPatronesP2');
    let de_tecnicasp2 = localStorage.getItem('de_tecnicasp2');
    let de_flowp2 = localStorage.getItem('de_flowp2');
    let de_escenap2 = localStorage.getItem('de_escenap2')
    let de_totalP2 = localStorage.getItem('de_totalDeluxe2');


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

    // -------- -------- ---------
    $("#li_resPatronesP1").html(li_totalPatronesP1);
    $("#li_resTecnicasP1").html(li_tecnicasp1);
    $("#li_resFlowP1").html(li_flowp1);
    $("#li_resEscenaP1").html(li_escenap1)
    $("#li_totalP1").html(li_totalP1);

    $("#li_resPatronesP2").html(li_totalPatronesP2);
    $("#li_resTecnicasP2").html(li_tecnicasp2);
    $("#li_resFlowP2").html(li_flowp2);
    $("#li_resEscenaP2").html(li_escenap2);
    $("#li_totalP2").html(li_totalP2);
    // ------------------------------
    $("#de_resPatronesP1").html(de_totalPatronesP1);
    $("#de_resTecnicasP1").html(de_tecnicasp1);
    $("#de_resFlowP1").html(de_flowp1);
    $("#de_resEscenaP1").html(de_escenap1)
    $("#de_totalP1").html(de_totalP1);

    $("#de_resPatronesP2").html(de_totalPatronesP2);
    $("#de_resTecnicasP2").html(de_tecnicasp2);
    $("#de_resFlowP2").html(de_flowp2);
    $("#de_resEscenaP2").html(de_escenap2);
    $("#de_totalP2").html(de_totalP2);



    var resFinalesP1 = parseInt(em_totalP1) + parseInt(hm_totalP1) + parseInt(te_totalP1) + parseInt(pe_totalP1) + parseInt(li_totalP1) + parseInt(de_totalP1);
    var resFinalesP2 = parseInt(em_totalP2) + parseInt(hm_totalP2) + parseInt(te_totalP2) + parseInt(pe_totalP2) + parseInt(li_totalP2) + parseInt(de_totalP2);

    $("#resFinalP1").html(resFinalesP1);
    $("#resFinalP2").html(resFinalesP2);


    function difTotales(num1, num2){
      if (num1 > num2) {
        return num1 - num2;
      }else{
        return num2 - num1;
      }
    }

    var difTotales = difTotales(resFinalesP1, resFinalesP2);


    if (difTotales <= 5) {

      //var btn_replica = "<a id='replica' class='btn' href='replica.html'>Empezar Replica</a>";
      /*
      activar este boton cuando pueda hacer lo de las replicas
      */
      var btn_replica = "<a id='gano' class='btn btn-lg' href='../index.html'>Nueva Batalla</a>";
      $("#replica").append(btn_replica);
      $("#ganador").html("REPLICA!");

    } else if(resFinalesP1 > resFinalesP2 ){
      var btn_ganoP1 = "<a id='gano' class='btn btn-lg' href='../index.html'>Nueva Batalla</a>";
      $("#gano").append(btn_ganoP1);

      $("#ganador").html("Ganó " + player1);
    } else {
        var btn_ganoP2 = "<a id='gano' class='btn btn-lg' href='../index.html'>Nueva Batalla</a>";
        $("#gano").append(btn_ganoP2);
        $("#ganador").html("Ganó " + player2);
    }


    // CHART.JS

    //aplico regla de 3 para sacar porcentajes en relacion al maximo
    var totalPatronesP1 = (parseInt(em_totalPatronesP1) + parseInt(hm_totalPatronesP1) + parseInt(te_totalPatronesP1) + parseInt(pe_totalPatronesP1) + parseInt(li_totalPatronesP1) + parseInt(de_totalPatronesP1)) * 100 / 208;
    var totalTecnicasP1 = (parseInt(em_tecnicasp1) + parseInt(hm_tecnicasp1) + parseInt(te_tecnicasp1) + parseInt(pe_tecnicasp1) + parseInt(li_tecnicasp1) + parseInt(de_tecnicasp1)) * 100 / 16;
    var totalFlowP1 = (parseInt(em_flowp1) + parseInt(hm_flowp1) + parseInt(te_flowp1) + parseInt(pe_flowp1) + parseInt(li_flowp1) + parseInt(de_flowp1)) * 100 / 16;
    var totalEscenaP1 = (parseInt(em_escenap1) + parseInt(hm_escenap1) + parseInt(te_escenap1) + parseInt(pe_escenap1) + parseInt(li_escenap1) + parseInt(de_escenap1)) * 100 / 16;


    var totalPatronesP2 = (parseInt(em_totalPatronesP2) + parseInt(hm_totalPatronesP2) + parseInt(te_totalPatronesP2) + parseInt(pe_totalPatronesP2) + parseInt(li_totalPatronesP2) + parseInt(de_totalPatronesP2)) * 100 / 208;
    var totalTecnicasP2 = (parseInt(em_tecnicasp2) + parseInt(hm_tecnicasp2) + parseInt(te_tecnicasp2) + parseInt(pe_tecnicasp2) + parseInt(li_tecnicasp2) + parseInt(de_tecnicasp2)) * 100 / 16;
    var totalFlowP2 = (parseInt(em_flowp2) + parseInt(hm_flowp2) + parseInt(te_flowp2) + parseInt(pe_flowp2) + parseInt(li_flowp2) + parseInt(de_flowp2)) * 100 / 16;
    var totalEscenaP2 = (parseInt(em_escenap2) + parseInt(hm_escenap2) + parseInt(te_escenap2) + parseInt(pe_escenap2) + parseInt(li_escenap2) + parseInt(de_escenap2)) * 100 / 16;

    var batallometro = (parseInt(resFinalesP1) + parseInt(resFinalesP2)) * 100 / 512;



    // chart BARRAS
    var chart1 = document.getElementById('chart1').getContext('2d');

    var chart1_bar = new Chart(chart1,{
        type:"bar",
        data: {
          labels:['Patrones', 'Técnica', 'Flow', 'P. Escena'],
          datasets: [
            {
            label: player1,
            data: [parseInt(totalPatronesP1), parseInt(totalTecnicasP1), parseInt(totalFlowP1), parseInt(totalEscenaP1) ],
            backgroundColor: 'rgba(0, 98, 255, 0.7)',
            borderColor: 'rgb(0, 98, 255)',
            borderWidth: 1
          },{
            label: player2,
            data: [parseInt(totalPatronesP2), parseInt(totalTecnicasP2), parseInt(totalFlowP2), parseInt(totalEscenaP2) ],
            backgroundColor: 'rgba(255, 0, 0, 0.7)',
            borderColor: 'rgb(255, 0, 0)',
            borderWidth: 1
          }
        ]},
        options: {
          layout: {
              padding: {
                  left: 0,
                  right: 10,
                  top: 10,
                  bottom: 10
              }
          },
          legend:{
            labels:{
              fontColor: 'white',
              fontFamily: 'Russo One',
              display: false
            }
          },
          scales: {
            xAxes: [{

              ticks: {
                fontColor: 'white',
                fontSize: 14,
                fontFamily: 'Russo One'
              }
            }],
            yAxes: [{
              display: false,
              ticks: {
                beginAtZero: true,
                min: 0,
                max: 100,
                fontSize: 18
              }
            }]
          }
        }

    });

    // chart LINE
    var chart2 = document.getElementById('chart2').getContext('2d');

    var chart2_line = new Chart(chart2,{
        type:"line",
        data: {
          labels:['Easy', 'Hard', 'Temat.', 'Person.', 'Libre', 'Deluxe'],
          datasets: [
            {
            label: player1,
            data: [(parseInt(em_totalP1) * 100 / 30).toFixed(2), (parseInt(hm_totalP1) * 100 /30).toFixed(2), (parseInt(te_totalP1) * 100 / 44).toFixed(2), (parseInt(pe_totalP1) * 100 / 36).toFixed(2), (parseInt(li_totalP1) * 100 / 66).toFixed(2), (parseInt(de_totalP1) * 100 / 50).toFixed(2) ],
            borderColor: 'rgb(0, 98, 255)',
            borderWidth: 2
          },{
            label: player2,
            data: [(parseInt(em_totalP2) * 100 / 30).toFixed(2), (parseInt(hm_totalP2) * 100 / 30).toFixed(2), (parseInt(te_totalP2) * 100 / 44).toFixed(2), (parseInt(pe_totalP2) * 100 / 36).toFixed(2), (parseInt(li_totalP2) * 100 / 66).toFixed(2), (parseInt(de_totalP2) * 100 /50).toFixed(2)],
            borderColor: 'rgb(255, 0, 0)',
            borderWidth: 2
          }
        ]},
        options: {
          layout: {
              padding: {
                  left: 5,
                  right: 5,
                  top: 10,
                  bottom: 10
              }
          },
          legend:{
            labels:{

              fontColor: 'white',
              fontFamily: 'Russo One',
              display: false
            }
          },
          scales: {
            xAxes: [{

              ticks: {
                fontColor: 'white',
                fontSize: 14,
                fontFamily: 'Russo One'
              }
            }],
            yAxes: [{
              display: false,
              ticks: {
                beginAtZero: true,
                min: 0,
                max: 100,
                fontSize: 18
              }
            }]
          }
        }

    });


    /*
    BATALLOMETRO
    */
    $("#player1Abajo").html(player1);
    $("#player2Abajo").html(player2);


    $(".progressBar").width(batallometro + "%");

    if (batallometro < 35 ) {
        $(".progressBar").html(batallometro.toFixed(2) + "% ");
    } else  if (batallometro > 35 && batallometro <= 40){
        $(".progressBar").html(batallometro.toFixed(2) + "% " + " Regular..");
    } else if (batallometro > 40 && batallometro <= 45){
        $(".progressBar").html(batallometro.toFixed(2) + "% " + " Buena! ");
    } else  if (batallometro > 45 && batallometro <= 50){
        $(".progressBar").html(batallometro.toFixed(2) + "% " + " Muy buena! ");
    } else  if (batallometro > 50 && batallometro <= 55){
        $(".progressBar").html(batallometro.toFixed(2) + "% " + " Excelente!! ");
    } else  if (batallometro > 55 && batallometro <= 60){
        $(".progressBar").html(batallometro.toFixed(2) + "% " + " Increible!!!");
    } else  if (batallometro > 60 && batallometro <= 70){
            $(".progressBar").html(batallometro.toFixed(2) + "% " + " WOW!!!!");
    } else if (batallometro > 70){
      $(".progressBar").html(batallometro.toFixed(2) + "% " + " Epica!!!!!");
    }

    $(".h6-batallometro").html((parseInt(resFinalesP1) + parseInt(resFinalesP2)) + " Pts totales (nivel de batalla)")

    //nueva batalla btn
    $("#gano").click(function(e){
      var r = confirm("Comenzar batalla\n ¿Estás seguro?");

      if (r) {
        localStorage.clear();

      } else{
        e.preventDefault();
      }
    });
})
