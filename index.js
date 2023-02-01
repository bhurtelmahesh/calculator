window.addEventListener(
  "load",()=> {

        function digiNum() {
            var dig = Number(kaitou>innerText);
            var round = math.round(dig * 1000000000) / 1000000000;
            kaitou.innerText = round;
        }
        function limit() {
            var leng = kaitou.innerText.length;
            if (leng > 12){
                kaitou.innerText = kaitou.innerText.substring(0,leng - 1);
            }
        }

      window.addEventListener("keydown", keydownevent, true);

           var kaitou = document.getElementById("kaitou");
           
        window.addEventListener(
            "keydown",
            keydownevent,
            true
        );  

function keydownevent(event){

    if (event.key == "0"){
         if(kaitou.innerText === "0"|| kaitou.innerText ==="+"||kaitou.innerText ==="-"||kaitou.innerText ==="*"||kaitou.innerText ==="/"){
            kaitou.innerText = 0;
        } else { 
            kaitou.innerText = kaitou.innerText + 0;
        }
        limit();
    }

 if(event.key === "1"){
    if(kaitou.innerText === "0"|| kaitou.innerText ==="+"||kaitou.innerText ==="-"||kaitou.innerText ==="*"||kaitou.innerText ==="/"){
        kaitou.innerText = 1

    }else{
        kaitou.innerText += 1;
    }
    limit()

 }

    if(event.key === "2")   {
         if(kaitou.innerText === "0"|| kaitou.innerText ==="+"||kaitou.innerText ==="-"||kaitou.innerText ==="*"||kaitou.innerText ==="/"){
            kaitou.innerText = 2;
        } else{
            kaitou.innerText = kaitou.innerText + 2;
        }
        limit();
    }  

    if(event.key === "3")   {
        if(kaitou.innerText === "0"|| kaitou.innerText ==="+"||kaitou.innerText ==="-"||kaitou.innerText ==="*"||kaitou.innerText ==="/"){
            kaitou.innerText = 3;
        } else{
       kaitou.innerText = kaitou.innerText + 3;
        }
        limit();
    }  

    if(event.key === "4")   {
        if(kaitou.innerText === "0"|| kaitou.innerText ==="+"||kaitou.innerText ==="-"||kaitou.innerText ==="*"||kaitou.innerText ==="/"){
            kaitou.innerText = 4;
        } else{
            kaitou.innerText = kaitou.innerText + 4;
        }
        limit();
     }  

    if(event.key === "5")   {
        if(kaitou.innerText === "0"|| kaitou.innerText ==="+"||kaitou.innerText ==="-"||kaitou.innerText ==="*"||kaitou.innerText ==="/"){
            kaitou.innerText = 5;
        } else{
            kaitou.innerText=kaitou.innerText + 5;
            }
        limit();    
}  

if(event.key === "6")   {
    if(kaitou.innerText === "0"|| kaitou.innerText ==="+"||kaitou.innerText ==="-"||kaitou.innerText ==="*"||kaitou.innerText ==="/"){
            kaitou.innerText = 6;
        } else{
            kaitou.innerText=kaitou.innerText + 6;
            }
        limit();    
}  

if(event.key === "7")   {
    if(kaitou.innerText === "0"|| kaitou.innerText ==="+"||kaitou.innerText ==="-"||kaitou.innerText ==="*"||kaitou.innerText ==="/"){
            kaitou.innerText = 7;
        } else{
            kaitou.innerText=kaitou.innerText + 7;
        }
        limit();
}  

if(event.key === "8")   {
    if(kaitou.innerText === "0"|| kaitou.innerText ==="+"||kaitou.innerText ==="-"||kaitou.innerText ==="*"||kaitou.innerText ==="/"){
            kaitou.innerText = 8;
        } else{
           kaitou.innerText=kaitou.innerText + 8;
        }
        limit();
 }  

 if(event.key === "9")   {
    if(kaitou.innerText === "0"|| kaitou.innerText ==="+"||kaitou.innerText ==="-"||kaitou.innerText ==="*"||kaitou.innerText ==="/"){
            kaitou.innerText = 9;
        } else{
            kaitou.innerText=kaitou.innerText + 9;
        }
        limit();
 }  

if (event.key === "+") {
   num1 = Number(kaitou.innerText);
   kaitou.innerText = "+";
   katei = "tasu";

}

if (event.key === "-") {
   num1 = Number(kaitou.innerText);
   kaitou.innerText = "-";
   katei = "hiku";

}

if (event.key === "*") {
   num1 = Number(kaitou.innerText);
   kaitou.innerText = "*";
   katei = "kakeru";

}

if (event.key === "/") {
   num1 = Number(kaitou.innerText);
   kaitou.innerText = "/";
   katei = "waru";

}    

if (event.key === "Enter")   {
if (katei === "tasu") {
    num2 = Number(kaitou.innerText);
    kaitou.innerText = num1 + num2;
    katei ="";
}
if (katei === "hiku") {
    num2 = Number(kaitou.innerText);
    kaitou.innerText = num1 - num2;
    katei ="";
}
if (katei === "kakeru") {
    num2 = Number(kaitou.innerText);
    kaitou.innerText = num1 * num2;
    katei ="";
}
if (katei === "waru") {
    num2 = Number(kaitou.innerText);
    if (num2 === 0){
        kaitou.innerHTML="ごめん！！<br>0で割ることはできません!";
        kaitou.style.fontSize = "2rem";
        kaitou.style.display = "flex";
        kaitou.style.justifyContent = "center";
        kaitou.style.alignItems = "center";
    }else{   
        kaitou.innerText = num1 / num2;
        digiNum();
    }
    katei ="";
    }
}

if (event.key === "Backspace") {
    num1 =0;
    num2 =0;
    katei ="";
    kaitou.innerText = "0";
    kaitou.style.justifyContent = "flex-end";
    kaitou.style.alignItems = "flex-end";
    kaitou.style.fontSize = "3rem";

}


if (event.key === "c"){
    kaitou.innerText = "0"
    kaitou.style.justifyContent = "flex-end";
    kaitou.style.alignItems = "flex-end";
    kaitou.style.fontSize = "3rem";

}
if (event.key === "d"){
    kaitou.innerText = kaitou.innerText.slice(0,-1)

}
}

var kaitou =document.getElementById("kaitou")
document.getElementById(
"button-1"
).onclick = function () {
if(kaitou.innerText === "0"|| kaitou.innerText ==="+"||kaitou.innerText ==="-"||kaitou.innerText ==="*"||kaitou.innerText ==="/"){
    kaitou.innerText = 1;
}else {
    kaitou.innerText= kaitou.innerText+ 1;
}
limit();
};

document.getElementById(
"button-2"
).onclick= function() {
if(kaitou.innerText === "0"|| kaitou.innerText ==="+"||kaitou.innerText ==="-"||kaitou.innerText ==="*"||kaitou.innerText ==="/"){
    kaitou.innerText= 2;
}else {
    kaitou.innerText= kaitou.innerText+ 2;
}
limit();
};

document.getElementById(
"button-3"
).onclick= function () {
if(kaitou.innerText === "0"|| kaitou.innerText ==="+"||kaitou.innerText ==="-"||kaitou.innerText ==="*"||kaitou.innerText ==="/"){
    kaitou.innerText = 3;
}else {
    kaitou.innerText= kaitou.innerText+ 3; 
}
limit();
}; 

document.getElementById(
"button-4"
).onclick= function () {
if(kaitou.innerText === "0"|| kaitou.innerText ==="+"||kaitou.innerText ==="-"||kaitou.innerText ==="*"||kaitou.innerText ==="/"){
    kaitou.innerText = 4;
}else {
    kaitou.innerText = kaitou.innerText+ 4; 
}
limit();
};

document.getElementById(
"button-5"
).onclick= function () {
if(kaitou.innerText === "0"|| kaitou.innerText ==="+"||kaitou.innerText ==="-"||kaitou.innerText ==="*"||kaitou.innerText ==="/"){
    kaitou.innerText = 5;
}else {
    kaitou.innerText= kaitou.innerText + 5; 
}
limit();
}; 

document.getElementById(
"button-6"
).onclick= function () {
if(kaitou.innerText === "0"|| kaitou.innerText ==="+"||kaitou.innerText ==="-"||kaitou.innerText ==="*"||kaitou.innerText ==="/"){
    kaitou.innerText = 6;
}else {
    kaitou.innerText = kaitou.innerText + 6; 
}
limit();
};

document.getElementById(
"button-7"
).onclick= function () {
if(kaitou.innerText === "0"|| kaitou.innerText ==="+"||kaitou.innerText ==="-"||kaitou.innerText ==="*"||kaitou.innerText ==="/"){
    kaitou.innerText = 7;
}else {
    kaitou.innerText = kaitou.innerText+ 7; 
}
limit();
}; 

document.getElementById(
"button-8"
).onclick= function () {
if(kaitou.innerText === "0"|| kaitou.innerText ==="+"||kaitou.innerText ==="-"||kaitou.innerText ==="*"||kaitou.innerText ==="/"){
    kaitou.innerText = 8;
}else {
    kaitou.innerText = kaitou.innerText + 8; 
}
limit();
}; 

document.getElementById(
"button-9"
).onclick= function () {
if(kaitou.innerText === "0"|| kaitou.innerText ==="+"||kaitou.innerText ==="-"||kaitou.innerText ==="*"||kaitou.innerText ==="/"){
    kaitou.innerText = 9;
}else {
    kaitou.innerText = kaitou.innerText + 9; 
}
limit();
}; 

document.getElementById(
"button-0"
).onclick= function () {
if(kaitou.innerText === "0"|| kaitou.innerText ==="+"||kaitou.innerText ==="-"||kaitou.innerText ==="*"||kaitou.innerText ==="/"){
    kaitou.innerText = 0;
}else {
    kaitou.innerText = kaitou.innerText + 0; 
}
limit();
}; 

document.getElementById(
"sakujyo"
).onclick = function (){
kaitou.innerText ="0";
};

var num1 = 0;
var num2 = 0;
var katei = 0;
document.getElementById(
"tasu"
).onclick = function () {
num1 = Number(kaitou.innerText);
katei = "tasu";
kaitou.innerText = "+"
}
document.getElementById(
"hiku"
).onclick = function () {
num1 = Number(kaitou.innerText);
katei = "hiku";
kaitou.innerText = "-"
}
document.getElementById(
"kakeru"
).onclick = function () {
num1 = Number(kaitou.innerText);
katei = "kakeru";
kaitou.innerText= "*"
}
document.getElementById(
"waru"
).onclick = function () {
num1 = Number(kaitou.innerText);
katei = "waru";
kaitou.innerText = "/"
}
document.getElementById("keisan"
).onclick = function() {
  
if  (katei === "tasu") {
    num2 = Number(kaitou.innerText);
    kaitou.innerText = num1 + num2;
}
if  (katei === "hiku") {
    num2 = Number(kaitou.innerText);
    kaitou.innerText = num1 - num2;
}
if  (katei === "kakeru") {
    num2 = Number(kaitou.innerText);
    kaitou.innerText = num1 * num2;
}
if  (katei === "waru") {
    num2 = Number(kaitou.innerText);
    if (num2 === 0){
        kaitou.innerHTML = "Oops...<br>Can not divide by zero!";
        kaitou.style.fontSize = "2rem";
        kaitou.style.display = "flex";
        kaitou.style.justifyContent = "center";
        kaitou.style.alignItems = "center";
    }else {
        kaitou.innerText = num1 / num2;
    }
}

document.getElementById(
    "sakujyo"
).onclick = function () {
    num1 = 0;
    num2 = 0;
    katei = "";
    kaitou.innerText = "0"
    kaitou.style.justifyContent = "flex-end";
    kaitou.style.alignItems = "flex-end";
    kaitou.style.fontSize = "3rem";
    
}
}
 

           



})    
