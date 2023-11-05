var pri = document.querySelectorAll(".list li")
var totalprice=0
var parent = document.querySelector("#div9")
var btn1 = document.querySelector("#btn")
var lit= Object.get
pri.forEach( function(item) {
    

item.onclick = function(){
    totalprice +=  +( item.getAttribute("price"))
    btn1.style.display="block"
console.log(totalprice)
}
}
)
 btn1.onclick=function(){
prompt("price is :" + totalprice + "  "+"write your opinion")
parent.innerhtml += " totalprice is :"+totalprice
}

// var it =  document.getElementsByName("div1")
// it.onclick =  function(){
//     totalprice +=  +( item.getAttribute("price"))
//     btn1.style.display="block"
// console.log(totalprice)
// }
// function cod1(item){
//     totalprice += totalprice.getAttribute("price")
//     btn1.style.display="block"
// console.log(totalprice)
// }

// var l1 =document.getElementsByClassName("div1")
// l1.onclick = cod1()