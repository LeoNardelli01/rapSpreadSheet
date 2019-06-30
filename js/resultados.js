$(function(){
    let totalP1 = localStorage.getItem('em_totalEasyMode1');
    let player1 = localStorage.getItem('rap1');

    let totalP2 = localStorage.getItem('em_totalEasyMode2');
    let player2 = localStorage.getItem('rap2');

    console.log(totalP1);

    $("#player1").html(player1)
    $("#res1").html(totalP1);

    $("#player2").html(player2);
    $("#res2").html(totalP2)
    
    $("#nuevaBatalla").click(function(e){
      var r = confirm("Estas seguro?\n");

      if (r) {
        localStorage.clear();
      } else{
        e.preventDefault();
      }
    });
})
