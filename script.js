
$("#edu").hide();
$("#prf").hide();
$("#skl").hide();
$("#exp").hide();
$("#hby").hide();
$("#cnt").hide();


$(document).ready(function(){
$("#profile").click(function(){
  
  
  window.scrollTo(0,document.body.scrollHeight);
     $("#edu").hide();
     $("#skl").hide();
     $("#exp").hide();
     $("#cnt").hide();
     $("#hby").hide();
    $("#prf").show(10000);
    

  });

$("#education").click(function(){
    $("#prf").hide();
    $("#edu").show();
    $("#skl").hide();
    $("#exp").hide();
    $("#cnt").hide();
    $("#hby").hide();
  });

  $("#skill").click(function(){
    $("#prf").hide();
    $("#edu").hide();
    $("#skl").show();
    $("#exp").hide();
    $("#cnt").hide();
    $("#hby").hide();
  });

  $("#experience").click(function(){
    $("#prf").hide();
    $("#edu").hide();
    $("#skl").hide();
    $("#exp").show();
    $("#cnt").hide();
    $("#hby").hide();
  });

  $("#contact").click(function(){
    $("#prf").hide();
    $("#edu").hide();
    $("#skl").hide();
    $("#exp").hide();
    $("#hby").hide();
    $("#cnt").toggle(1500);
  });

  $("#hobbies").click(function(){
    $("#prf").hide();
    $("#edu").hide();
    $("#skl").hide();
    $("#exp").hide();
    $("#hby").show();
    $("#cnt").hide();
  });
});
