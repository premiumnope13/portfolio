
$("#edu").hide();
$("#prf").hide();
$("#skl").hide();
$("#exp").hide();
$("#cnt").hide();

$(document).ready(function(){
$("#profile").click(function(){
  
  
  window.scrollTo(0,document.body.scrollHeight);
     $("#edu").hide();
     $("#skl").hide();
     $("#exp").hide();
     $("#cnt").hide();
    $("#prf").show(10000);


  });

$("#education").click(function(){
    $("#prf").hide();
    $("#edu").show();
    $("#skl").hide();
    $("#exp").hide();
    $("#cnt").hide();
  });

  $("#skill").click(function(){
    $("#prf").hide();
    $("#edu").hide();
    $("#skl").show();
    $("#exp").hide();
    $("#cnt").hide();
  });

  $("#experience").click(function(){
    $("#prf").hide();
    $("#edu").hide();
    $("#skl").hide();
    $("#exp").show();
    $("#cnt").hide();
  });

  $("#contact").click(function(){
    $("#prf").hide();
    $("#edu").hide();
    $("#skl").hide();
    $("#exp").hide();
    $("#cnt").toggle(1500);
  });
});
