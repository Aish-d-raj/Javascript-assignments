var regex = /^([0-9]{2})?[0-9]{2}\-(3[01]|[12][0-9]|0?[1-9])\-(1[0-2]|0?[1-9])$/
 var str = "xyz";

 console.log(str.match(regex));
 console.log("1999-02-08".match(regex));
 console.log("2020-12-09".match(regex));

 