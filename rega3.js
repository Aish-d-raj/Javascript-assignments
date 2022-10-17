var regex = /^\w+([\.-]?\w+)*@\w+(\.\w{2,3})+$/;
 var str = "xyz@gmail.com";

 console.log(str.match(regex));
 console.log("xyz.com".match(regex));
 console.log("9abc12".match(regex));