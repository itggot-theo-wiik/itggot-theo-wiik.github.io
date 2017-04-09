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

// Loading bar
function move() {

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
