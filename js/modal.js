///PROJECT
document.getElementById("MCUSYS").onclick = function () { trigger_modal_show("MCUSYS") };
document.getElementById("NETSYS").onclick = function () { trigger_modal_show("NETSYS") };
document.getElementById("VSTT").onclick = function () { trigger_modal_show("VSTT") };
document.getElementById("CHECKEAT").onclick = function () { trigger_modal_show("CHECKEAT") };
document.getElementById("UPSACALENDAR").onclick = function () { trigger_modal_show("UPSACALENDAR") };

document.getElementById("modal-MCUSYS").onclick = function () { trigger_modal_hide("MCUSYS") };
document.getElementById("modal-NETSYS").onclick = function () { trigger_modal_hide("NETSYS") };
document.getElementById("modal-VSTT").onclick = function () { trigger_modal_hide("VSTT") };
document.getElementById("modal-CHECKEAT").onclick = function () { trigger_modal_hide("CHECKEAT") };
document.getElementById("modal-UPSACALENDAR").onclick = function () { trigger_modal_hide("UPSACALENDAR") };

//TECH
document.getElementById("JS").onclick = function () { trigger_modal_show("JS") };
document.getElementById("PHP").onclick = function () { trigger_modal_show("PHP") };
document.getElementById("PY").onclick = function () { trigger_modal_show("PY") };
document.getElementById("WL").onclick = function () { trigger_modal_show("WL") };
document.getElementById("JAVA").onclick = function () { trigger_modal_show("JAVA") };
document.getElementById("CS").onclick = function () { trigger_modal_show("CS") };

document.getElementById("modal-JS").onclick = function () { trigger_modal_hide("JS") };
document.getElementById("modal-PHP").onclick = function () { trigger_modal_hide("PHP") };
document.getElementById("modal-PY").onclick = function () { trigger_modal_hide("PY") };
document.getElementById("modal-WL").onclick = function () { trigger_modal_hide("WL") };
document.getElementById("modal-JAVA").onclick = function () { trigger_modal_hide("JAVA") };
document.getElementById("modal-CS").onclick = function () { trigger_modal_hide("CS") };

//TRANS
document.getElementById("FORMATIONS").onclick = function () { trigger_modal_show("FORMATIONS") };
document.getElementById("AS").onclick = function () { trigger_modal_show("AS") };
document.getElementById("VT").onclick = function () { trigger_modal_show("VT") };
document.getElementById("POLY").onclick = function () { trigger_modal_show("POLY") };

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