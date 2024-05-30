let a= document.querySelectorAll(".grade");
let n= a.length;


let cal = document.querySelector(".calc");

let ans=document.querySelector(".result");

let cre = document.querySelectorAll(".Credit");

console.log(cre);


function calculate(){
    let sum=0;

    let i=0;

    while(i<n){
        sum+= "+"+a[i].value * cre[i].innerHTML ;
        i++;
    }

    let mainans= parseFloat(eval(sum)/21).toFixed(2);

    ans.innerHTML = mainans ;


}



