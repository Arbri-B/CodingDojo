const popUpBox = document.querySelector("#rem1")

function remove(){
    rem1.remove();
};



function alert1(){
    alert("Loading weather report for Burbank!")
}

function alert2(){
    alert("Loading weather report for Chicago!")
}

function alert3(){
    alert("Loading weather report for Dallas!")
}

let temps = document.querySelectorAll(".temp")

function convert(element) {
    if (element.value == "Farenheit") {
        for (var i=0; i<temps.length; i++) {
            temps[i].innerText = ((parseInt(temps[i].innerText) - 32) * 5 / 9).toFixed(1);
            console.log(temps[i].innerText);
        }
    } else if (element.value == "Celcius") {
        for (var i=0; i<temps.length; i++) {
            temps[i].innerText = ((parseInt(temps[i].innerText) * 9 / 5) + 32).toFixed(1);
            
            console.log(temps[i].innerText);
        }
    }
}