var mobJson='{"productId":1001,"product":{"name":"Moto","series":"G5+","color":"NightSky"},"price":14900,"category":"Electronics","shippingDetails":{"shipmentNo":"1DEL009","company":"Intel Marketing","receivedOn":"2018-6-19"},"seller":{"name":"xyz Mobile","location":"New York","stock":17}}'
var p = JSON.parse(mobJson);
console.log(p.seller.name +" has shipped a "+p.product.name+" " +p.product.series+" worth "+p.price+" product ID "+p.productId)
