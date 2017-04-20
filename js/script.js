// Toggla skuggan
function toggle_shadow() {
    element = document.querySelector(".nav_main");
    element.classList.toggle("nav_shadow_is_visible");
}

// Toggla osynliga leave
function toggle_leave() {
    element = document.querySelector(".nav_leave");
    element.classList.toggle("nav_is_visible");
}

// Animera Hamburgar menyn
$(document).ready(function() {
    $("#burger").click(function() {
        $("nav").animate({
            left: '0px'
        });
    });
});

$(document).ready(function() {
    $(".nav_leave").click(function() {
        $("nav").animate({
            left: '-304px'
        });
    });
});

// Klocka
function daty() {
    var d = new Date();
    document.getElementById("date").innerHTML = d.toDateString();
}

// För introt
i = 1

function hider_js() {
    console.log(i)
    var current = document.querySelector("#intro-" + i.toString());
    console.log(current)
    i = i + 1;
    current.classList.toggle("hider");
    // element.classList.toggle("hider")
    //element = document.querySelector(".intro")
    //element = document.querySelector(".intro")
    //current = element.clssList[1]

}

check = 1

// Loading bar
function move() {

if (check == 1) {
    check = check + 1
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 25);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
        if (width == 100) {
            element = document.querySelector(".button_scanned");
            element.classList.add("display_button");
        }
    }
  }
}

// Trade
function trade_add(element, clicked_id) {
    element.classList.toggle("hider");
    // console.log(clicked_id);
    var current = document.querySelector("#" + clicked_id.toString() + "in_box");
    // console.log(current)
    current.classList.toggle("visible");
}

function trade_remove(element, clicked_id) {
    // console.log(element)
    element.classList.remove("visible");
    var current = document.querySelector("#" + clicked_id.replace('in_box', ''));
    // console.log("temp is")
    // console.log(current)
    current.classList.toggle("hider");
}
