function getdata() {
    if (localStorage.getItem("carts")) {
        console.log("aaaaaaaaaaaaaaaaaaaaaa")
        var x = localStorage.getItem("carts")
    
        var y = JSON.parse(x)
        console.log(y.length)

        for(let i =0; i<=y.length;i++){
        let div = document.createElement("div")
        div.setAttribute("class", "pro-container")

        let div2 = document.createElement("div")
        div2.setAttribute("class", "pro")

        div.appendChild(div2)

        let img = document.createElement("img")
        img.setAttribute("src", y[0].img)
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
        icon2.setAttribute("width", 40)
        icon2.setAttribute("height", 40)
   
        


        document.getElementById("product").appendChild(div)
        console.log(div)
    }
    
    }

}
