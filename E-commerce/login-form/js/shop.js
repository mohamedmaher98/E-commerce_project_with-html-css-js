 function gatdata() {
            if (localStorage.getItem("products")) {
                var x = localStorage.getItem("products")
            
                var y = JSON.parse(x)
                console.log(y.length)

                for(let i =0; i<=y.length;i++){
                let div = document.createElement("div")
                div.setAttribute("class", "pro-container")

                let div2 = document.createElement("div")
                div2.setAttribute("class", "pro")

                div.appendChild(div2)

                let img = document.createElement("img")
                img.setAttribute("src", y[i].img)
                img.setAttribute("width", 200)
                img.setAttribute("height", 200)

                div2.appendChild(img)

                let div3 = document.createElement("div")
                div3.setAttribute("class", "content")

                div.appendChild(div3)

                let sp = document.createElement("span")
                sp.setAttribute("id", "name")
                div3.appendChild(sp)
                sp.appendChild(document.createTextNode(y[i].notp))
                sp.style.fontSize=23
                let h5=document.createElement("h5")
                

                h5.appendChild(document.createTextNode(y[i].des))
                sp.appendChild(h5)
                h5.style.fontSize=16
              
                let h4=document.createElement("h4")

                h4.appendChild(document.createTextNode(y[i].pri))
                sp.appendChild(h4)
                h4.style.fontWeight= "bold"
                h4.appendChild(document.createTextNode("  LE"))

                let icon = document.createElement("img")
                div3.appendChild(icon)
                icon.setAttribute("src", "/images/heart.jpg")
                icon.setAttribute("onclick","save()")
                icon.setAttribute("width", 40)
                icon.setAttribute("height", 40)


                let icon2 = document.createElement("img")
                div3.appendChild(icon2)
                icon2.setAttribute("src", "/images/cart.jpg")
                icon2.setAttribute("onclick","cartt()")
                icon2.setAttribute("width", 40)
                icon2.setAttribute("height", 40)
           
                

        
                document.getElementById("product").appendChild(div)
                console.log(div)
            }
                //for(let i=0 ; i<=y.)
            

                //      let div =document.createElement("div");
                // div.className="product";    



                //    div.setAttribute("data-id",y[0].id);
                //    var div2= document.createElement("div");
                //     div.appendChild(div2)
                //     div2.setAttribute("class","pro-container");

                //     div.appendChild(document.createElement(y[0].notp));
                //     div.appendChild(document.createTextNode(y[0].des));
                //     div.appendChild(document.createTextNode(y[0].pri));
                //     console.log(div)
                //     document.getElementById("product").appendChild(div)

                /*
        
                <div class="product" id=>
                    
                    
                    </div>
        
                */
            }

        }

        

let notp = document.getElementById('name').innerHTML;
let des = document.getElementById('des').innerHTML;
let price = document.getElementById('price').innerHTML
let img ="/images/tshirt.jpg"
var id ;
var x=0;



let wish=[];
   if(localStorage.getItem("wishs")){
       wish = JSON.parse(localStorage.getItem("wishs"))

  }


  function save(){


        addTaskToArray(id,notp,des,price,img);
        id=x;
        notp.value="";
        des.value="";
        price.value="";
        img:img;
    
x++;

}
let noth;

function addTaskToArray(id,name,desc,price,img){

 noth={
    id: x,
    notp:name,
    des:desc,
    pri:price,
    img:img,


};

wish.push(noth);

saveProducts(wish);

addProductsToPage(wish);
}
function addProductsToPage(pros){

  

    pros.forEach((product) => {
        let div =document.createElement("div");
        div.className="wish";



        div.setAttribute("data-id",noth.id);
        div.appendChild(document.createTextNode(noth.notp));
        div.appendChild(document.createTextNode(noth.des));
        div.appendChild(document.createTextNode(noth.pri));


    });
}


function saveProducts(arr){
window.localStorage.setItem("wishs", JSON.stringify(arr))


}






let name = document.getElementById('name').innerHTML;
let desi = document.getElementById('des').innerHTML;
let pricee = document.getElementById('price').innerHTML
let imgg ="/images/tshirt.jpg"
var id ;
var x=0;



let cart=[];
  if(localStorage.getItem("carts")){
     wish = JSON.parse(localStorage.getItem("carts"))

  }


  function cartt(){


        addTaskToArray(id,notp,des,price,img);
        id=x;
        notp.value="";
        des.value="";
        price.value="";
        img:img;
    
x++;

}
let arr;

function addTaskToArray(id,name,desc,price,img){

 arr={
    id: x,
    notp:name,
    des:desc,
    pri:price,
    img:img,


};

cart.push(arr);

saveProducts(cart);

addProductsToPage(cart);
}
function addProductsToPage(pros){

  

    pros.forEach((cart) => {
        let div =document.createElement("div");
        div.className="cart";



        div.setAttribute("data-id",arr.id);
        div.appendChild(document.createTextNode(arr.notp));
        div.appendChild(document.createTextNode(arr.des));
        div.appendChild(document.createTextNode(arr.pri));


    });
}


function saveProducts(arr){
window.localStorage.setItem("carts", JSON.stringify(arr))


}



        



