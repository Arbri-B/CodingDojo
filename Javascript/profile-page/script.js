

function changeName(){
    var text1 = document.querySelector("#name1")
    var input1 = document.createElement("input");
    input1.type = "text";

    input1.addEventListener("blur",function(){
        text1.textContent = input1.value;
    });
    text1.textContent = "";
    text1.appendChild(input1);
    input1.focus();
}

let firstItem = document.querySelector("#li-first")
let badge1 = document.querySelector("#badge1")
let badge2 = document.querySelector("#badge2")

function remove1(element){
    firstItem.remove();
}

function change1(element){
    badge1.innerText = parseInt(badge1.innerText) -1;
    badge2.innerText = parseInt(badge2.innerText) +1;

}

function change2(element){
    badge1.innerText = parseInt(badge1.innerText) -1;
}

var secondtItem = document.querySelector("#li-second")

function remove2(element){
    secondtItem.remove();

}