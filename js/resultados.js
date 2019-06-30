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

    html2canvas(document.body, {
      onrendered (canvas) {
        var link = document.getElementById('download');;
        var image = canvas.toDataURL();
        link.href = image;
        link.download = player1 + '(' + totalP1 + ')' + ' vs ' + player2 + '(' + totalP2 + ')' + '.png';
  }
 });
    $("#nuevaBatalla").click(function(e){
      var r = confirm("Estas seguro?\n");

      if (r) {
        localStorage.clear();
      } else{
        e.preventDefault();
      }
    });
})
