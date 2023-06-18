let mappings= {
  1:"I",
  4:"IV",
  5:"V",
  9:"IX",
  10:"X",
  40:"XL",
  50:"L",
  90:"XC",
  100:"C",
  400:"CD",
  500:"D",
  900:"CM",
  1000:"M"
}

function convertToRoman(num) {
    
   
    let numStr = num.toString();
    let map = Object.keys(mappings);
    let returnVal="";
    
     if(num == 0){
        return returnVal;
    }
if(map.includes(numStr)){

        returnVal = mappings[numStr]
    }
    
    if(num<4){
        let val="";
        for(let i=0;i<num;i++){
            val+=mappings[1];
        }
        returnVal = val;
    }
    //between 6 and 9
    if(num<9 && num>5){
              let val=mappings[5];
              let diff=num-5;
        for(let i=0;i<diff;i++){
            val+=mappings[1];
        }
        returnVal = val
    }
    //from 11 to 99
    if(num>10 && num<100 ){
       let arr = numStr.split("");
       let tens =Number( 10*arr[0]);
       let units = Number(arr[1]);
       
       let unitRomain = convertToRoman(units);
      
       if(map.includes(tens.toString())){
           returnVal = mappings[tens.toString()]+unitRomain;
        
       }else{
           if(num<50 ){
                     let val=mappings[10];
              let times = tens/10;
        for(let i=1;i<times;i++){
            val+=mappings[10];
        }
        returnVal = val+unitRomain;
           }else{
                let val=mappings[50];
                let diff = tens-50;
              let times = diff/10;
        for(let i=0;i<times;i++){
            val+=mappings[10];
        }
        returnVal = val+unitRomain;
           }
       }
    }
    //from 101 to 999
     if(num>100 && num<1000 ){
       let arr = numStr.split("");
           let hundreds = Number(100*arr[0]);
       let tens =Number( 10*arr[1]);
       let units = Number(arr[2]);
       
       let tenRoman = convertToRoman(tens)
       let unitRoman = convertToRoman(units);
       
      //onsole.log(tenRoman,unitRoman)
       if(map.includes(hundreds.toString())){
           returnVal = mappings[hundreds.toString()]+tenRoman+unitRoman;
       }else{
             if(num<500){
               let val=mappings[100];
              let times =hundreds/100;
                  for(let i=1;i<times;i++){
            val+=mappings[100];
       }
       console.log(val);
          returnVal = val+tenRoman+unitRoman;
     }else{
                 let val=mappings[500];
                let diff = hundreds-500;
              let times = diff/100;
        for(let i=0;i<times;i++){
            val+=mappings[100];
        }
        returnVal = val+tenRoman+unitRoman;
     }
     
       }
       //less than 500 
       
     
     }
    
  console.log(returnVal)
  
    
    
    
 return returnVal;
}

convertToRoman(400);