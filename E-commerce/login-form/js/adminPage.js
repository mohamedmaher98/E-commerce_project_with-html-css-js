let notp = document.querySelector(".notp");
let des = document.querySelector(".des");
let price = document.querySelector(".price");
let img = "/images/tshirt.jpg"

let sub = document.querySelector(".submet");


let product = [];

if (localStorage.getItem("products")) {
    product = JSON.parse(localStorage.getItem("products"))

}


sub.onclick = function () {
    if (notp.value !== "" && des.value !== "" && price.value !== "") {

        addTaskToArray(notp.value, des.value, price.value, img);
        notp.value = "";
        des.value = "";
        price.value = "";
        img: img;

    }


}
let noth;

function addTaskToArray(name, desc, price, img) {

    noth = {
        id: Date.now(),
        notp: name,
        des: desc,
        pri: price,
        img: img,


    };

    product.push(noth);

    saveProducts(product);

    addProductsToPage(product);
}
function addProductsToPage(pros) {

    sub.innerHTML = "";

    pros.forEach((product) => {
        let div = document.createElement("div");
        div.className = "product";



        div.setAttribute("data-id", noth.id);
        div.appendChild(document.createTextNode(noth.notp));
        div.appendChild(document.createTextNode(noth.des));
        div.appendChild(document.createTextNode(noth.pri));


    });
}


function saveProducts(arr) {
    window.localStorage.setItem("products", JSON.stringify(arr))
}

function seeorder() {
    if (localStorage.getItem("ordercustomer")) {
        var x = localStorage.getItem("ordercustomer")

        var y = JSON.parse(x)

        let div = document.createElement("div")
        div.setAttribute("class", "pro-container")
        let div2 = document.createElement("div")
        div2.setAttribute("class", "pro")

        div.appendChild(div2)
        let img = document.createElement("img")
        img.setAttribute("src", y[0].src)
        img.setAttribute("width", 200)
        img.setAttribute("height", 200)

        div2.appendChild(img)

        let div3 = document.createElement("div")
        div3.setAttribute("class", "content")

        div.appendChild(div3)

        let sp = document.createElement("span")
        sp.setAttribute("id", "name")
        div3.appendChild(sp)
        sp.appendChild(document.createTextNode(y[0].name))
        sp.style.fontSize = 23
        let h4 = document.createElement("h4")
        h4.appendChild(document.createTextNode(y[0].price))
        sp.appendChild(h4)
        h4.style.fontWeight = "bold"
        h4.appendChild(document.createTextNode("  LE"))
        document.getElementById("ordercoustomerconfirmed").appendChild(div)
        console.log(div)
        let button = document.createElement("input")
        button.setAttribute("type", "button")
        button.setAttribute("value", "conform")
        button.setAttribute("onclick", "confirmorder()")
        button.style.marginRight = "20px"
        let button2 = document.createElement("input")
        button2.setAttribute("type", "button")
        button2.setAttribute("value", "no")
        button2.setAttribute("onclick", "notconfirmorder()")
        div3.appendChild(button)
        div3.appendChild(button2)




    }
    else {
        document.getElementById("ifnotorder").innerHTML = "<b> not order yet</b>"

    }
}
function confirmorder() {
    var pp = localStorage.getItem("ordercustomer")
    localStorage.setItem("confimedorder", pp)
    var oo = document.getElementById("ordercoustomerconfirmed")
    oo.remove();
    localStorage.removeItem("ordercustomer")

}
function notconfirmorder() {

    var oo = document.getElementById("ordercoustomerconfirmed")
    oo.remove();
    localStorage.removeItem("ordercustomer")
    localStorage.removeItem("confimedorder")


}
