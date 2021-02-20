const readline = require('readline');
const process = require('process'); 
const { randomInt } = require('crypto');
const { Console } = require('console');
const { exec } = require('child_process');





if(process.argv[2] == "--gui"){

    exec('npm start', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}else{




function affichetableau(plateau){
    
    let i = 0; 
    console.log("*********")
    while (i<plateau.length){
        let y = 0;

        process.stdout.write("*");   
        while (y<plateau[i].length){
            
            process.stdout.write(plateau[i][y]);
            
            y++
        }
        process.stdout.write("*");  
    
        console.log("\n")
        i++
    }
    console.log("*********")
}


function tabconstruct(){
    
    let plateau = [
        [" "," "," ","|"," "," "," "],
        [" "," ","|","|","|"," "," "],
        [" ","|","|","|","|","|"," "],
        ["|","|","|","|","|","|","|"]
    ];

    


    
    return plateau

}



function touriA(plateau){
  
   
    let i = 0
    let lineiA = Math.floor(Math.random() * 3) + 1;
    let numiA = Math.floor(Math.random() * 7) + 1;
    let ok = false;
    
   
    let save2 = 0;
    while (ok == false){

         save2 = numiA;

        if(numberOnLine(plateau[lineiA])>=numiA){

            

            while(i<numiA){

               

                if(plateau[lineiA][i] == "|" ){
                    
                    plateau[lineiA][i] = " ";
    
                }else{
                    numiA++
                }
                i++
            }
            

            
            
         ok = true             
        }else{
             lineiA = Math.floor(Math.random() * 3) + 1;
             numiA = Math.floor(Math.random() * 7) + 1;
        }

        

    }

 
    console.log("AI removed "+save2+" match(es) from line "+(lineiA+1))
    affichetableau(plateau)
    
    

 


    if(endgame(plateau)){

        console.log("I lost.. snif.. but I’ll get you next time!!");
        

        }else{
            console.log("Your turn : ")
        }
         
        


    
}



function numberOnLine(line){
    let i = 0;

    let count = 0;

  

    while (i<line.length){
        if(line[i] == "|"){
            count++
        }
        i++
    }
    
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
    

    if(count > 0){
        return false
    }
    return true 
}




function tour(plateau,line,num){
    index = line
    line = line-1

    

    if(parseInt(index,10)<1 || parseInt(index,10)>4 ){
        console.log("Error: this line is out of range")
        return 
    }

    if(!Number.isInteger(index) || !Number.isInteger(num)){
        console.log("invalid input (positive number expected)")
        return 
    }

    if(num < 1){
        console.log("Error: you have to remove at least one match")
        return 
    }


    if(!num){
        console.log("please indicate a number of matches please")
        return
    }

    let i = 0;
    
    if(numberOnLine(plateau[line])>=num){

        let save = num

        while(i<num){

            if(plateau[line][i] == "|" ){
                
                plateau[line][i] = " ";

            }else{
                num++
            }
            i++
        }
        
        
        console.log("Your turn :")
        console.log("Line: "+(line+1))
        console.log("Match(es): "+save)
        console.log("Player removed "+save+" match(es) from line "+(line+1))

        affichetableau(plateau)
        
        console.log("IA turn... ")

      

        if(!endgame(plateau)){

        touriA(plateau)

        }else{
            console.log("You lost, too bad..");
            process.exit();
        }


    }else{
        console.log("not enough match")  
    }
   

   

    



}




let gplateau = tabconstruct()
affichetableau(gplateau)



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

    console.log("choose a line and a number of matches to remove")

    rl.on('line', (request) =>[
        
        tour(gplateau,parseInt(request[0], 10),parseInt(request[1], 10))
    
    ])



}

