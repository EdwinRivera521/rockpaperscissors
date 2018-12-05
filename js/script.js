// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$(function () {
   // now we are ready!
   $("#shoot").click(function(){
      var computerChoice = "";
      var x = Math.random();
      var UC= $("#input").val();
      if (x <= 0.33){
         computerChoice="rock";
      }
      else if(x <= 0.67) {
         computerChoice="paper";
      }
      else {
         computerChoice="scissors";
      }
      
      var result = "";
      
      if(UC==computerChoice){
         result = "TIE";
      }
      else if(UC=="rock"&&computerChoice=="paper"){
         result="LOSER";
      }
      else if(UC=="paper"&&computerChoice=="scissors"){
         result="LOSER";
      }
      else if(UC=="scissors"&&computerChoice=="rock"){
         result="LOSER";
      }
      else if(UC=="rock"&&computerChoice=="scissors"){
         result="YOU WIN";
      }
      else if(UC=="scissors"&&computerChoice=="scissors"){
         result="YOU WIN";
      }
      else if(UC=="paper"&&computerChoice=="rock"){
         result="YOU WIN";
      }
      else{
         alert("ERROR");
      }
      
      
      
      
       $("#userChoice").text(UC);
       $("#computerChoice").text(computerChoice);
       $("#result").text(result);
   });
    
});
