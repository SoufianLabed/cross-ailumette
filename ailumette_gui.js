$(document).ready(function(){

   
    let plateau = [
        [" "," "," ","|"," "," "," "],
        [" "," ","|","|","|"," "," "],
        [" ","|","|","|","|","|"," "],
        ["|","|","|","|","|","|","|"]
    ];

  


   

    $("#valide").on("click",  function(){
        let line = parseInt($("#line").val());
        let num = parseInt($("#num").val());
        tour(plateau,line,num)
    })
/*
    $("#valide").on("click",  function(){
        
        lineiA = Math.floor(Math.random() * 3) + 1;
        numiA = Math.floor(Math.random() * 6) + 1;

        console.log(lineiA);
        console.log(numiA)
        
    })*/

    function numberOnLine(line){
        let i = 0;
    
        let count = 0;

        //console.log("La ligne recu : "+line)
    
      
    
        while (i<line.length){
            if(line[i] == "|"){
                count++
            }
            i++
        }
        //console.log("nombre sur la ligne :"+count)
        return count
    }
    

 

    function endgame(plateau){
        let i = 0;
    
        let count = 0;
    
      
    
        while (i<plateau.length){
            
            let y = 0;
    
            while (y<plateau[i].length){
    
                if(plateau[i][y] == "|"){
                    count++
                }
                y++
    
            }
            
            i++
        }
        
        //console.log("nombre sur le plateau :"+count)
        
        if(count > 0){
            return false
        }
        return true 
    }
    

    function tour(plateau,line,num){
        
        index = line
        line = line-1

    

    if(!Number.isInteger(index) || parseInt(index,10)<1 || parseInt(index,10)>4 ){
        $("#info").append("veuillez indiquer une ligne cohérente et le nombre d'allumette svp")
        console.log("veuillez indiquer une ligne cohérente et le nombre d'allumette svp")
        return 
    }

    if(!num){
        $("#info").append("veuillez indiquer un nombre d'allumette")
        //console.log("veuillez indiquer un nombre d'allumette")
        return
    }

    let i = 0;
    
    if(numberOnLine(plateau[line])>=num){

        while(i<num){

            if(plateau[line][i] == "|" ){
                
                plateau[line][i] = " ";

            }else{
                num++
            }
            i++
        }
        console.log("Tableau après votre coup")
        afficheplateau(plateau)
        

        
        if(endgame(plateau)){
            
           

            //console.log("le joueur "+joueur+" a gagné")
            
        }

        //joueur++

        if(!endgame(plateau)){

        touriA(plateau)

        }else{
            console.log("vous avez perdu");
            $("#result").append("Vous avez perdu")
           
        }


    }else{
        console.log("pas assez d'allumette sur la ligne")  
    }


    }




    
function touriA(plateau){
    //console.log(" TEST : "+numberLine(plateau))
   
    let i = 0
    
    let lineiA = Math.floor(Math.random() * 3) + 1;
    let numiA = Math.floor(Math.random() * 7) + 1;

    
    

    console.log("la ligne envoyé : "+plateau[lineiA])
   
   
    let ok = false;
    
   

    while (ok == false){
        
        if(numberOnLine(plateau[lineiA])>=numiA){

            while(i<numiA){

               

                if(plateau[lineiA][i] == "|" ){
                    
                    plateau[lineiA][i] = " ";
    
                }else{
                    numiA++
                }
                i++
            }
            console.log("TABLEAU APRES COUP DE L'IA")
            
         ok = true             
        }else{
             

             lineiA = Math.floor(Math.random() * 3) + 1;
             numiA = Math.floor(Math.random() * 7) + 1;
        }

        

    }

    afficheplateau(plateau)

    if(endgame(plateau)){

        $("#result").append("Vous avez gagner")
        
        }
         
        


    
}






    function afficheplateau(plateau){

    

        let i = 0;
        let count = 0;
        while (i<plateau.length){
            
            let y = 0;
            //console.log(i)
            while(y<plateau[i].length){
             
                if(plateau[i][y] == "|"){
                    count++
                   
                    $(`div:eq(${(7*i+y)})`).css("background-color","#aaff00");
                    //console.log(i+1*y)

                }else{
                    $(`div:eq(${(7*i+y)})`).css("background-color","white");
                }

                y++
            }
            i++
        }
       
    }
    afficheplateau(plateau)



});