var count=0;
var start1=0;
function start(){
    document.getElementById("startpage").style.display="none"; 
    player1=document.getElementById("player1").value
    player2=document.getElementById("player2").value
    if(player1==""){
        start1++;

    }
 }
function reset(){
    document.getElementById("one1").innerHTML="";
    document.getElementById("two2").innerHTML="";
    document.getElementById("three3").innerHTML="";
    document.getElementById("four4").innerHTML="";
    document.getElementById("five5").innerHTML="";
    document.getElementById("six6").innerHTML="";
    document.getElementById("seven7").innerHTML="";
    document.getElementById("eight8").innerHTML="";
    document.getElementById("nine9").innerHTML="";

    var btn= document.getElementById("btn1");
    btn.disabled=false;
    var btn= document.getElementById("btn2");
    btn.disabled=false;
    var btn= document.getElementById("btn3");
    btn.disabled=false;
    var btn= document.getElementById("btn4");
    btn.disabled=false;
    var btn= document.getElementById("btn5");
    btn.disabled=false;
    var btn= document.getElementById("btn6");
    btn.disabled=false;
    var btn= document.getElementById("btn7");
    btn.disabled=false;
    var btn= document.getElementById("btn8");
    btn.disabled=false;
    var btn= document.getElementById("btn9");
    btn.disabled=false;

    document.getElementById("afterwin").style.display = "none";

}

function logic(){ 
    
    if(start1>0){
        player1=" X ";
    player2=" O ";
    }else{
        player1=document.getElementById("player1").value
    player2=document.getElementById("player2").value
    }
    
    player1=player1.toUpperCase();
    player2=player2.toUpperCase();
    document.getElementById("playera").innerHTML=player1;
    document.getElementById("playerb").innerHTML=player2;

    var one1 =document.getElementById("one1").innerText;
    var two2 =document.getElementById("two2").innerText;
    var three3 =document.getElementById("three3").innerText;
    var four4 =document.getElementById("four4").innerText;
    var five5 =document.getElementById("five5").innerText;
    var six6 =document.getElementById("six6").innerText;
    var seven7 =document.getElementById("seven7").innerText;
    var eight8 =document.getElementById("eight8").innerText;
    var nine9 =document.getElementById("nine9").innerText;
    var x="x"
    var o = "o"
    
    if(one1==two2&&one1==three3&&one1==x){
        document.getElementById("winner").innerHTML=player1;
        document.getElementById("afterwin").style.display = "flex";
    }else if(four4 ==five5  &&four4  ==six6  &&four4  == x){
        document.getElementById("winner").innerHTML=player1;
        document.getElementById("afterwin").style.display = "flex";
    }else if(seven7 ==eight8  &&seven7  ==nine9  &&seven7  ==x ){
        document.getElementById("winner").innerHTML=player1;
        document.getElementById("afterwin").style.display = "flex";
    }else if(one1 ==four4  &&one1  ==seven7  &&one1  == x){
        document.getElementById("winner").innerHTML=player1;
        document.getElementById("afterwin").style.display = "flex";
    }else if(two2 ==five5  &&two2  ==eight8  &&two2  ==x ){
        document.getElementById("winner").innerHTML=player1;
        document.getElementById("afterwin").style.display = "flex";
    }else if(three3 ==six6  &&three3  ==nine9  &&three3  ==x ){
        document.getElementById("winner").innerHTML=player1;
        document.getElementById("afterwin").style.display = "flex";
    }else if(one1 ==five5  &&one1  ==nine9  &&one1  ==x ){
        document.getElementById("winner").innerHTML=player1;
        document.getElementById("afterwin").style.display = "flex";
    }else if(three3 ==five5  &&three3  ==seven7  &&three3  ==x ){
        document.getElementById("winner").innerHTML=player1;
        document.getElementById("afterwin").style.display = "flex";
    }else if(one1==two2&&one1==three3&&one1==o){
        document.getElementById("winner").innerHTML=player2;
        document.getElementById("afterwin").style.display = "flex";
    }else if(four4 ==five5  &&four4  ==six6  &&four4  == o){
        document.getElementById("winner").innerHTML=player2;
        document.getElementById("afterwin").style.display = "flex";
    }else if(seven7 ==eight8  &&seven7  ==nine9  &&seven7  ==o ){
        document.getElementById("winner").innerHTML=player2;
        document.getElementById("afterwin").style.display = "flex";
    }else if(one1 ==four4  &&one1  ==seven7  &&one1  == o){
        document.getElementById("winner").innerHTML=player2;
        document.getElementById("afterwin").style.display = "flex";
    }else if(two2 ==five5  &&two2  ==eight8  &&two2  ==o ){
        document.getElementById("winner").innerHTML=player2;
        document.getElementById("afterwin").style.display = "flex";
    }else if(three3 ==six6  &&three3  ==nine9  &&three3  == o){
        document.getElementById("winner").innerHTML=player2;
        document.getElementById("afterwin").style.display = "flex";
    }else if(one1 ==five5  &&one1  ==nine9  &&one1  ==o ){
        document.getElementById("winner").innerHTML=player2;
        document.getElementById("afterwin").style.display = "flex";
    }else if(three3 ==five5  &&three3  ==seven7  &&three3  ==o ){
        document.getElementById("winner").innerHTML=player2;
        document.getElementById("afterwin").style.display = "flex";
    }
    button.disabled=true;
}
function one(){
    if(count%2==0){
        document.getElementById("one1").innerHTML="x";
    }else{
        document.getElementById("one1").innerHTML="o";
    }
    count++;
    var btn= document.getElementById("btn1");
    btn.disabled=true;
    var btn= document.getElementById("btn1").style.color="black";
    logic();
}

function two(){
    if(count%2==0){
        document.getElementById("two2").innerHTML="x";
    }else{
        document.getElementById("two2").innerHTML="o";
    }
    count++;
    var btn= document.getElementById("btn2");
    btn.disabled=true;
    var btn= document.getElementById("btn2").style.color="black";
    logic();

}

function three(){
    if(count%2==0){
        document.getElementById("three3").innerHTML="x";
    }else{
        document.getElementById("three3").innerHTML="o";
    }
    count++;
    var btn= document.getElementById("btn3");
    btn.disabled=true;
    var btn= document.getElementById("btn3").style.color="black";
    logic();
}

function four(){
    if(count%2==0){
        document.getElementById("four4").innerHTML="x";
    }else{
        document.getElementById("four4").innerHTML="o";
    }
    count++;
    var btn= document.getElementById("btn4");
    btn.disabled=true;
    var btn= document.getElementById("btn4").style.color="black";
    logic();
}

function five(){
    if(count%2==0){
        document.getElementById("five5").innerHTML="x";
    }else{
        document.getElementById("five5").innerHTML="o";
    }
    count++;
    var btn= document.getElementById("btn5");
    btn.disabled=true;
    var btn= document.getElementById("btn5").style.color="black";
    logic();
}

function six(){
    if(count%2==0){
        document.getElementById("six6").innerHTML="x";
    }else{
        document.getElementById("six6").innerHTML="o";
    }
    count++;
    var btn= document.getElementById("btn6");
    btn.disabled=true;
    var btn= document.getElementById("btn6").style.color="black";
    logic();
}

function seven(){
    if(count%2==0){
        document.getElementById("seven7").innerHTML="x";
    }else{
        document.getElementById("seven7").innerHTML="o";
    }
    count++;
    var btn= document.getElementById("btn7");
    btn.disabled=true;
    var btn= document.getElementById("btn7").style.color="black";
    logic();
}

function eight(){
    if(count%2==0){
        document.getElementById("eight8").innerHTML="x";
    }else{
        document.getElementById("eight8").innerHTML="o";
    }
    count++;
    var btn= document.getElementById("btn8");
    btn.disabled=true;
    var btn= document.getElementById("btn8").style.color="black";
    logic();
}

function nine(){
    if(count%2==0){
        document.getElementById("nine9").innerHTML="x";
    }else{
        document.getElementById("nine9").innerHTML="o";
    }
    count++;
    var btn= document.getElementById("btn9");
    btn.disabled=true;
    var btn= document.getElementById("btn9").style.color="black";
    logic();
}
