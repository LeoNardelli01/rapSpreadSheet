$(function(){
  let player1 = localStorage.getItem('rap1');
  let player2 = localStorage.getItem('rap2');
  let em_totalP1 = localStorage.getItem('em_totalEasyMode1');
  let em_totalP2 = localStorage.getItem('em_totalEasyMode2');

  if (em_totalP1 === null) {
    $("#nombre1").html(player1);
  } else {
      $("#nombre1").html(player1 + "("+ em_totalP1+ ")");
  }
  if (em_totalP2 === null) {
    $("#nombre2").html(player2);
  } else {
    $("#nombre2").html(player2 + "("+ em_totalP2+")");
  }



  if (localStorage.getItem('em_totalEasyMode1') === null) {
    $("#easyMode").css('background-color', 'rgba(145, 145, 145, 0.51)');//gris

  }else{
    $("#easyMode").css('background-color', "rgba(17, 213, 78, 0.39)");//verde
    $("#easyMode").css('box-shadow', '0px 0px 15px green');
    $("#easyMode").addClass("disabled");
  }


})
