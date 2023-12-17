//user name and password
localStorage.setItem("email","ahmed@gmail.com")
localStorage.setItem("password","123")

function saveData(){
   var emailregex = new RegExp(/^[a-z\-]+@([a-z]+\.)+[a-z]{2,}$/gm)
            
           

   let fName , lName, password, email;

    fName = document.getElementById("fName").value;
    lName = document.getElementById("lName",lName).value;
    password= document.getElementById("password").value;
    email= document.getElementById("email").value;
    var y=emailregex.test(email)
    if(fName==""){
       alert("enter the fristname")
    }
    else if(lName==""){
       alert("enter the lastname")
    }
    else if(!email){
       alert("invaled email")
    }
    else if(password.length<=8){
       alert("password shoud be more than 8 char")

    }

    let user_records= new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
   if(user_records.some((v)=>{

       return v.email==email

   })){
       alert("Dublicate Data ");
   }
   else{
       user_records.push({
           "fname":fName,
           "lName":lName,
           "password":password,
           "email":email
       })
       localStorage.setItem("users",JSON.stringify(user_records));

   
}
}

function loginValidation(){

   let  password, email;

    password= document.getElementById("loginPassword").value;
    email= document.getElementById("loginEmail").value;

    let user_records= new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
   if(user_records.some((v)=>{

       return v.email==email && v.password==password

   })){
       window.location.replace("/Html/index.html")
   }
   else if(email=="ahmed@gmail.com"&&password=="2222101010" ){
       window.location.replace("/html/adminpage.html")

   }
   else{
      alert("Login Faild")

   

}
}



// register and login page 
var a =document.getElementById("loginBtn");
var b =document.getElementById("registerBtn");
var x =document.getElementById("login");
var y =document.getElementById("resgister");


function login(){
   x.style.left="4px";
   y.style.right="-520px";
   a.className +=" white-btn";
   b.className ="btn";
   x.style.opacity=1;
   y.style.opacity=0;
}

function register(){
   x.style.left="-510px";
   y.style.right="5px";
   a.className ="btn";
   b.className +=" white-btn";
   x.style.opacity=0;
   y.style.opacity=1;
}