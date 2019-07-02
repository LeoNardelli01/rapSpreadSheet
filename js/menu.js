$(function(){
  //PLAYERS
  let player1 = localStorage.getItem('rap1');
  let player2 = localStorage.getItem('rap2');

  $("#nombre1").html(player1);
  $("#nombre2").html(player2);

  //TYPED JS
  var options = {
    strings: ["<h4>Bienvenido a RAP SprendSheet</h4>", "<h4>Formato FMS</h4>","<h4>Buena Suerte " + player1 + " y " + player2 + "" + "</h4>", "<h4>3...2...1... TIEMPO</h4>", "<h4></h4>" ],
    typeSpeed: 75
  }
  var typed = new Typed(".typed", options);
  //--- End Typed----

  //btn easy mode verde o gris
  if (localStorage.getItem('em_totalEasyMode1') === null) {
    $("#easyMode").css('background-color', 'rgba(145, 145, 145, 0.51)');//gris

  }else{
    $("#easyMode").css('background-color', "rgba(17, 213, 78, 0.39)");//verde
    $("#easyMode").css('box-shadow', '0px 0px 15px green');
    $("#easyMode").addClass("disabled");
  }

  // btn hard mode verde o gris
  if (localStorage.getItem('hm_totalHardMode1') === null) {
    $("#hardMode").css('background-color', 'rgba(145, 145, 145, 0.51)');//gris

  }else{
    $("#hardMode").css('background-color', "rgba(17, 213, 78, 0.39)");//verde
    $("#hardMode").css('box-shadow', '0px 0px 15px green');
    $("#hardMode").addClass("disabled");
  }


})
