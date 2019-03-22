//hold data for counting clicks

var data = {
    totalRevs:360, 
    totalCurrent:0, 
    totalRPS: 0
  };
  
  //adds the timed interval in which effects of the button will accumulate
  
  setInterval(goGo,1000);
  
  function goGo() {
    data.totalRevs += data.totalRPS;
    data.totalCurrent += data.totalRPS;
    updateReport();
  }
  
  //updates the counter
  
  function updateReport() {
    $("#currentTotal").text(Math.floor(data.totalCurrent));
  }
  
  //add one for each click
  
  $("#flower").click(function (){
    data.totalRevs ++;
    data.totalCurrent ++;
    updateReport();
  })
  
  //adds additional points to be won by paying for buttons, multiplies cost after paying for each level by 1.15
  
  $(".button").click(function (){ 
    var addVal = $(this).data( "cost" );
    if ($(this).data( "cost" ) < data.totalCurrent ) {
      data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
      data.totalRPS += parseFloat($(this).data( "val" ));
      $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15)); 
      $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) ); 
    }
    updateReport();
  })