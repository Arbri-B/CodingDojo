function hide(element) {
    element.remove();
}



function preferedPet() {
    var animal = document.forms[0].pets.value;
    if (animal === "Any Pet") {
        alert("You are looking for " + animal);
    }
    else alert("You are looking for a " + animal);

}

var catPats = 3;
var countPepperPets = document.querySelector("#countPepper")

function petPepper() {
    catPats++;

    if (catPats === 1) {
        countPepperPets.innerText = catPats + " Petting";
    }
    else {
        countPepperPets.innerText = catPats + " Petting(s)";
    }
}

var dogPets = 5;
var countBrucePets = document.querySelector("#countBruce")

function petBruce(){
    dogPets++;

    if (dogPets ===1) {
        countBrucePets.innerText = dogPets + " Petting";
    }
    else{
        countBrucePets.innerText = dogPets + " Petting(s)"  ;  
    }
}

var dogoPets = 8;
var countOscarPets = document.querySelector("#countOscar")

function petOscar(){
    dogoPets++;

    if (dogPets ===1) {
        countOscarPets.innerText = dogoPets + " Petting";
    }
    else{
        countOscarPets.innerText = dogoPets + " Petting(s)"  ;  
    }
}

// Shtova footer sepse e kisha harruar te provimi tjeter

// var scrollToTopBtn = document.getElementsByClassName("footer-text")
// scrollToTopBtn.addEvenListener('click',scrollToTop);

// function scrollToTop(){
//     window.scrollTo({
//         top: 0;
//         behavior: 'smooth'
//     });
// }