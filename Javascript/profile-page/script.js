var text1 = document.querySelector("#name1")

function changeName(element){
    text1.innerText = "Any name";
    console.log(text1.innerText);
}

var firstItem = document.querySelector("#li-first")

function remove1(element){
    firstItem.remove();

}

var secondtItem = document.querySelector("#li-second")

function remove2(element){
    secondtItem.remove();

}