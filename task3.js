var color = [];
color[0] = " red ";
color[1] = " green ";
color[2] = " blue ";
//document.write(color);
console.log(color);

color.unshift (prompt("Enter Color to be added at the begining",""));
//document.write("<br><br>"+color);
console.log(color);

color.push (prompt("Enter Color to be added at the end",""));
//document.write("<br><br>"+color);
console.log(color);

color.unshift ((prompt("Enter 1st Color at the begining","")),(prompt("Enter 2nd Color at the begining","")));
//color.splice(0,(prompt("Enter 2 Color to be added at the begining","","")));
console.log(color);

color.shift();
console.log(color);

color.pop();
console.log(color);

color.splice((prompt("At which index you want to add color","")),0,(prompt("Color name","")));
console.log(color);

color.splice((prompt("At which index you want to delete color","")),(prompt("How many colors to delete","")));
console.log(color);