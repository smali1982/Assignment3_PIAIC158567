var nameArray = [];
nameArray[0]=(prompt("Enter First Student Name",""));
nameArray[1]=(prompt("Enter First Student Name",""));
nameArray[2]=(prompt("Enter First Student Name",""));

var numArray = [];
numArray[0]=(prompt("Enter First Student Numbers",""));
numArray[1]=(prompt("Enter First Student Numbers",""));
numArray[2]=(prompt("Enter First Student Numbers",""));

var totMarks = [];

totMarks[0] = (numArray[0]/500*100);
totMarks[1] = (numArray[1]/500*100);
totMarks[2] = (numArray[2]/500*100);

document.write("Score of "+ nameArray[0]+ " is "+numArray[0]+". Percentage: "+totMarks[0]+"%");
document.write("<br>Score of "+ nameArray[1]+ " is "+numArray[1]+". Percentage: "+totMarks[1]+"%");
document.write("<br>Score of "+ nameArray[2]+ " is "+numArray[2]+". Percentage: "+totMarks[2]+"%");
