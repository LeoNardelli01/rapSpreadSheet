$(function(){
  let player1 = localStorage.getItem('rap1');
  let player2 = localStorage.getItem('rap2');

  $("#nombre1").html(player1);
  $("#nombre2").html(player2);

  if (!localStorage.getItem('totalEasyMode1') === null) {
    $("#easyMode").css('background-color', "rgba(17, 213, 78, 0.39)");
  }
})
