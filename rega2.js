var regex = /^\d{10}$/;
 var str = "Hello";

 console.log(str.match(regex));
 console.log("9876543210".match(regex));
 console.log("9876".match(regex));