"use strict"
const id0=  document.getElementById("id0")
const id1 = document.getElementById("id1")
const id2 = document.getElementById("id2")
const id3= document.getElementById("id3")
const id4= document.getElementById("id4")
let id5= document.getElementById("id5")
const id6 = document.getElementById("id6")
const id7 = document.getElementById("id7")
const id8 = document.getElementById("id8")
const id9 = document.getElementById("id9")
const id10 = document.getElementById("id10")


id1.addEventListener("keyup", () => {
    let value1 = parseFloat(id1.value) || 0;
    let value2 = parseFloat(id2.value) || 0;
    let value3 = parseFloat(id3.value) || 0;
    let value4 = parseFloat(id4.value) || 0;
    id5.value = value1  
});

id2.addEventListener("keyup", () => {
    let value1 = parseFloat(id1.value) || 0;
    let value2 = parseFloat(id2.value) || 0;
    let value3 = parseFloat(id3.value) || 0;
    let value4 = parseFloat(id4.value) || 0;

    id5.value = value1 + value2 + value3 + value4;
});

id3.addEventListener("keyup", () => {
    let value1 = parseFloat(id1.value) || 0;
    let value2 = parseFloat(id2.value) || 0;
    let value3 = parseFloat(id3.value) || 0;
    let value4 = parseFloat(id4.value) || 0;

    id5.value = value1 + value2 + value3 + value4;
});

id4.addEventListener("keyup", () => {
    let value1 = parseFloat(id1.value) || 0;
    let value2 = parseFloat(id2.value) || 0;
    let value3 = parseFloat(id3.value) || 0;
    let value4 = parseFloat(id4.value) || 0;

    id5.value = value1 + value2 + value3 - value4;
});


id8.onclick =_=>{ 
    let i =0
  
    let tet = (id0.value&&id1.value&&id2.value&&id3.value&&id4.value&&id6.value)
    if(tet.length!=0 ){
        if ((id9.value).length>0 && (isNaN( id6.value))) {


            id7.innerHTML += `:<hr><br>
    
       
               <span>Title:\u00A0${id0.value}</span>\u00A0
               <span>Price:\u00A0${id1.value}</span>\u00A0
       
       
            <span>Taxes:\u00A0${id2.value}</span>\u00A0
       
            <span>Ads:\u00A0${id3.value}</span>\u00A0
            <span>Discount:\u00A0${id4.value}</span>\u00A0
            <span>Total:\u00A0${id5.value}</span>\u00A0
       
            <span>Category:\u00A0${id6.value}</span>\u00A0
            <br>`.repeat(parseInt(id9.value))
}         else if(isNaN( id6.value)) {
    
        id7.innerHTML += `:<hr><br>
    
    
            <span>Title:\u00A0${id0.value}</span>\u00A0
            <span>Price:\u00A0${id1.value}</span>\u00A0
    
    
         <span>Taxes:\u00A0${id2.value}</span>\u00A0
    
         <span>Ads:\u00A0${id3.value}</span>\u00A0
         <span>Discount:\u00A0${id4.value}</span>\u00A0
         <span>Total:\u00A0${id5.value}</span>\u00A0
    
         <span>Category:\u00A0${id6.value}</span>\u00A0
      
         <br>`
        
        }
    }
    else{
        alert("you have to fill the blanks")
   }
   return(id7.value)
}
