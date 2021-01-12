var array1=[3,'a','a','a',2,3,'a',3,'a',2,4,9,3];

for (var a=0; a<array1.length; a++){

    for (var b=a+1; b<array1.length; b++){
        
        if (array1[a]===array1[b])
               
        {console.log(array1.splice(b,1));}
    }
}   
console.log(array1);
