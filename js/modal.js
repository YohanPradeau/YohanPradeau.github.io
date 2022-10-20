///PROJECT
var MCUSYS = document.querySelectorAll(".MCUSYS")
for (i = 0; i < MCUSYS.length; i++) {
    MCUSYS[i].addEventListener('click', function () {
        trigger_modal_show("MCUSYS")
    });
}
var NETSYS = document.querySelectorAll(".NETSYS")
for (i = 0; i < NETSYS.length; i++) {
    NETSYS[i].addEventListener('click', function () {
        trigger_modal_show("NETSYS")
    });
}
var MOBISCORE = document.querySelectorAll(".MOBISCORE")
for (i = 0; i < MOBISCORE.length; i++) {
    MOBISCORE[i].addEventListener('click', function () {
        trigger_modal_show("MOBISCORE")
    });
}
var UPSACALENDAR = document.querySelectorAll(".UPSACALENDAR")
for (i = 0; i < UPSACALENDAR.length; i++) {
    UPSACALENDAR[i].addEventListener('click', function () {
        trigger_modal_show("UPSACALENDAR")
    });
}
var EPICERIE = document.querySelectorAll(".EPICERIE")
for (i = 0; i < EPICERIE.length; i++) {
    EPICERIE[i].addEventListener('click', function () {
        trigger_modal_show("EPICERIE")
    });
}

document.getElementById("modal-MCUSYS").onclick = function () { trigger_modal_hide("MCUSYS") };
document.getElementById("modal-NETSYS").onclick = function () { trigger_modal_hide("NETSYS") };
document.getElementById("modal-MOBISCORE").onclick = function () { trigger_modal_hide("MOBISCORE") };
document.getElementById("modal-UPSACALENDAR").onclick = function () { trigger_modal_hide("UPSACALENDAR") };
document.getElementById("modal-EPICERIE").onclick = function () { trigger_modal_hide("EPICERIE") };

//TECH
var JS = document.querySelectorAll(".JS")
for (i = 0; i < JS.length; i++) {
    JS[i].addEventListener('click', function () {
        trigger_modal_show("JS")
    });
}
var PHP = document.querySelectorAll(".PHP")
for (i = 0; i < PHP.length; i++) {
    PHP[i].addEventListener('click', function () {
        trigger_modal_show("PHP")
    });
}
var PY = document.querySelectorAll(".PY")
for (i = 0; i < PY.length; i++) {
    PY[i].addEventListener('click', function () {
        trigger_modal_show("PY")
    });
}
var WL = document.querySelectorAll(".WL")
for (i = 0; i < WL.length; i++) {
    WL[i].addEventListener('click', function () {
        trigger_modal_show("WL")
    });
}
var JAVA = document.querySelectorAll(".JAVA")
for (i = 0; i < JAVA.length; i++) {
    JAVA[i].addEventListener('click', function () {
        trigger_modal_show("JAVA")
    });
}
var CS = document.querySelectorAll(".CS")
for (i = 0; i < CS.length; i++) {
    CS[i].addEventListener('click', function () {
        trigger_modal_show("CS")
    });
}

document.getElementById("modal-JS").onclick = function () { trigger_modal_hide("JS") };
document.getElementById("modal-PHP").onclick = function () { trigger_modal_hide("PHP") };
document.getElementById("modal-PY").onclick = function () { trigger_modal_hide("PY") };
document.getElementById("modal-WL").onclick = function () { trigger_modal_hide("WL") };
document.getElementById("modal-JAVA").onclick = function () { trigger_modal_hide("JAVA") };
document.getElementById("modal-CS").onclick = function () { trigger_modal_hide("CS") };

//TRANS
var FORMATIONS = document.querySelectorAll(".FORMATIONS")
for (i = 0; i < FORMATIONS.length; i++) {
    FORMATIONS[i].addEventListener('click', function () {
        trigger_modal_show("FORMATIONS")
    });
}
var AS = document.querySelectorAll(".AS")
for (i = 0; i < AS.length; i++) {
    AS[i].addEventListener('click', function () {
        trigger_modal_show("AS")
    });
}
var VT = document.querySelectorAll(".VT")
for (i = 0; i < VT.length; i++) {
    VT[i].addEventListener('click', function () {
        trigger_modal_show("VT")
    });
}
var POLY = document.querySelectorAll(".POLY")
for (i = 0; i < POLY.length; i++) {
    POLY[i].addEventListener('click', function () {
        trigger_modal_show("POLY")
    });
}

document.getElementById("modal-FORMATIONS").onclick = function () { trigger_modal_hide("FORMATIONS") };
document.getElementById("modal-AS").onclick = function () { trigger_modal_hide("AS") };
document.getElementById("modal-VT").onclick = function () { trigger_modal_hide("VT") };
document.getElementById("modal-POLY").onclick = function () { trigger_modal_hide("POLY") };




//FONCTIONS
function trigger_modal_show(targetmodal) {
    //document.getElementById("modal-" + targetmodal).removeAttribute("class");
    document.getElementById("modal-" + targetmodal).classList.remove("out");
    document.getElementById("modal-" + targetmodal).classList.add('modal-container');
    document.getElementById("modal-" + targetmodal).classList.add('animation');
    document.body.classList.add('modal-active');
};

function trigger_modal_hide(targetmodal) {
    document.getElementById("modal-" + targetmodal).classList.add('out');
    document.body.classList.remove('modal-active');

    setTimeout(function () {
        document.getElementById("modal-" + targetmodal).classList.remove('animation')
    }, 500);
};