//define functions here
function getIt(){
  $("p").on("click", function(){
    window.alert("Hey!");
});
}

function frameIt(){
  $("img").on('load', function(){
    $("img").addClass("tasty");
  });
}

function pressIt(){
  $(document).on('keyDown', function(key) {
    if (key.which == 71) {
      alert ('G was pressed');
    }
  }
}


$(document).ready(function(){

// call functions here

});
