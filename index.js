

 var x=document.getElementById("humburger");

 x.addEventListener("click",function(){
     var y =document.getElementById("mynav")
     if(y.style.display == "none"){
        y.style.display="block";
     }
     else{
        y.style.display="none"
     }
 })