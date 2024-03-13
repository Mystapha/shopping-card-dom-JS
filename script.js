//btn like
let heart= document.getElementsByClassName("like");
for(let i=0;i<heart.length;i++){
    let oneheart=heart[i];
    oneheart.addEventListener("click", function() {
        if(oneheart.firstChild.style.color =="black"){
       oneheart.firstChild.style.color="green";
          }
        else{
        oneheart.firstChild.style.color="black";
     }    
    })
}
//btn plus
let btnplus=document.getElementsByClassName("plus-btn");
for(let i=0;i<btnplus.length;i++){
    let plus=btnplus[i] ;
    plus.addEventListener("click",function(){
    plus.previousElementSibling.value++;
    total();
    total1();
    total2();
    total3();
    })
}
// btn minus
let btnmine=document.getElementsByClassName("minus-btn");
for (let i=0;i<btnmine.length;i++) {
    let minus=btnmine[i] ;
    minus.addEventListener("click",function(){
        if(minus.nextElementSibling.value>1){
    minus.nextElementSibling.value--;}
    total();total1();total2();total3();
    })}
    // btn dellete
    let delet = document.getElementsByClassName("delete");
    for( let i=0;i<delet.length;i++){
      let del=delet[i];
      del.addEventListener("click",function(){
    del.parentElement.remove();
    total();total1();total2();total3();
      })
    }
// total price 
let items =document.getElementsByClassName("Item");
let finalPrice = document.getElementById("finalPrice");
function total() {
    let s=0 ;
    for(let i=0;i<items.length;i++){
        let item=items[i];
        s=s+item.querySelector(".Quant").value*item.querySelector(".price").innerText;
    }
    return (finalPrice.value = s) ;
}
function total1(){
    let q1=document.getElementById("q1");
    let p1=document.getElementById("p1");
    p1.innerText=q1.value* 1379 ;
}

function total2(){
    let q2=document.getElementById("q2");
    let p2=document.getElementById("p2");
    p2.innerText=q2.value* 176;
}
function total3(){
    let q3=document.getElementById("q3");
    let p3=document.getElementById("p3");
    p3.innerText=q3.value* 249;
}
