function bg_color() {
    var random_number = Math.random();

    if (random_number < 0.33) {
        bg_color_adder("cyan")
    } else if (0.33 < random_number && random_number < 0.66) {
        bg_color_adder("pink")
    } else {
        bg_color_adder("purple")
    }
}

function bg_color_adder(color) {
    element = document.querySelector("main");
    element.classList.add(color);
    element = document.querySelector("header");
    element.classList.add(color);
}

var drinks = ["Sprite", "Sprite Zero", "Powerking", "Zingo", "Zingo Passion", "Dr Pepper", "Mountain Dew Burk" , "Mountain Dew Flaska", "Trocadero Burk", "Trodacera Flaska", "Aloe Vera", "Vatten", "Eget val"];

function which_drink() {
    var random = Math.floor(Math.random() * (drinks.length + 1));
    // alert("Du fick drickan: " + drinks[random])
    $('.results').html(drinks[random]);
}