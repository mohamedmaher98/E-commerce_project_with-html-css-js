const mainImg = document.getElementById("mainImg");
const smallImg= document.getElementsByClassName("smImg");


smallImg[0].addEventListener('click', ()=> {
    mainImg.src= smallImg[0].src;
});

smallImg[1].addEventListener('click', ()=> {
    mainImg.src= smallImg[1].src;
})

smallImg[2].addEventListener('click', ()=> {
    mainImg.src= smallImg[2].src;
})

smallImg[3].addEventListener('click', ()=> {
    mainImg.src= smallImg[3].src;
})

var ordercustomer=[];
var order;
function addtocart(){
    alert("succes order plz wait to admain confirm")
   
  
    order={
        id:1,
        src:"/images/tshirt.jpg",
        price:140,
        name:"t-sirt"
    }
  
    ordercustomer.push(order);
localStorage.setItem("ordercustomer",JSON.stringify(ordercustomer))
}

