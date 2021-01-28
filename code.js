var number_player=document.getElementById('player');
var number_computer=document.getElementById("answer_computer");
var result=document.getElementById("result");
var mas=document.getElementById('write_number');
var score=document.getElementById("score");
var scorevalue=0;


function play(){
    number_computervalue=Math.ceil(Math.random()*10);
    var value_player=parseInt(number_player.value);

    score.innerHTML=scorevalue;
    
      if(value_player){
        mas.style.display="none";
        
        if(value_player==number_computervalue){
            number_computer.value=number_computervalue;
            result.innerHTML="you right"; 
            score.style.color="green";
         scorevalue++
         

         
            
        }
        else{
            
            number_computer.value=number_computervalue;
            result.innerHTML="you lost";
            
            
                

            
        }    
        
        

       }else{
        
        mas.style.display="block";
         }
              }

    

    

