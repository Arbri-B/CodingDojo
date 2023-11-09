var pizza = {
    crustType:["deep dish", "hand tossed"],
    sauceType:["traditional", "marinara"],
    cheeses:["feta", "mozzarella"],
    toppings:["mushrooms", "olives", "onions", "pepperoni", "sausage"]
};

function pizzaOven(crust, sauce, cheese, topping){  
    pizza.crustType = crust;    
    pizza.sauceType = sauce;
    pizza.cheeses = cheese;
    pizza.toppings = topping;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni, sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella , feta"], ["mushrroms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("deep dish", "marinara", "mozzarella", ["pepperoni", "mushrooms"]);
console.log(pizza3);