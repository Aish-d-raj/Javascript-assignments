const arr = [80, 77, 88, 95, 68];
var sum = 0;
for (var i=0; i<arr.length;i++) {

    sum += arr[i];
}
var avg = sum / arr.length;
console.log(avg);

if(avg<60){
    console.log("Grade : F");
}
else if(avg>60 && avg<70){
    console.log("Grade : D");
}
else if(avg>70 && avg<80) {
    console.log("Grade : C ");
}
else if(avg>80 && avg<90){
    console.log("Grade : B");
}
else{
    console.log("Grade : A ");
}