$(document).ready(function() {
  var red = $("#red").val();
  var green = $("#green").val();
  var blue = $("#blue").val();
  var alpha = $("#alpha").val();
  
  $("#Redit").attr('value', red);
  
  $("body").css('background-color', "rgba(" + red + ", " + green + ", " + blue + ", 0.9");
    
  $("#r").html("red " + "(" + red + ")");
  $("#g").html("green " + "(" + green + ")");
  $("#b").html("blue " + "(" + blue + ")");
  $("#a").html("alpha " + "(0." + alpha + ")");
  
  $("#result").html("rgba(" + red + ", " + green + ", " + blue + ", 0." + alpha + ")");
})

function colorize() {
  var red = $("#red").val();
  var green = $("#green").val();
  var blue = $("#blue").val();
  var alpha = $("#alpha").val();
  
  var color = red + ", " + green + ", " + blue + " , 0." + alpha;
  
  $("body").css('background-color', "rgba(" + color + ")");
  
  $("#r").html("red " + "(" + red + ")");
  $("#g").html("green " + "(" + green + ")");
  $("#b").html("blue " + "(" + blue + ")");
  $("#a").html("alpha " + "(0." + alpha + ")");
  
  $("#result").html("rgba(" + red + ", " + green + ", " + blue + ", 0." + alpha + ")");
  
   if(alpha == 10) {
     var color = red + ", " + green + ", " + blue;
     $("body").css('background-color', "rgba(" + color + ", 1)");
     
     $("#a").html("alpha (1)");
    
      $("#result").html("rgb(" + red + ", " + green + ", " + blue + ")");
   }
  
  if(alpha == 0) {
    $("#a").html('alpha(0)');
    $("#result").html("rgb(" + red + ", " + green + ", " + blue + ", 0)");
  }
}

$(".prop, #result").css('background-color', 'none').css('opacity', '0.6');