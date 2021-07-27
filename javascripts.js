function clk(val){
    document.getElementById("display").value=document.getElementById("display").value+val;
}
function clrdisp(){
    document.getElementById("display").value=""
}
function eql(){
    var text=document.getElementById("display").value;
    var result=eval(text);
    console.log(text);
    console.log(result);
    document.getElementById("display").value=result
}
 