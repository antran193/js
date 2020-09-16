function dropIt() {
    toggleClass(document.getElementById('navigation-dropdown'), "hide");
}

function foldIt() {
    toggleClass(document.getElementById('navigation-dropdown'), "hide");
}

function setHeight() {
    var el = document.getElementById('navigation-dropdown');
    el.style.height = el.clientHeight + "px";
}

var toggleClass = function (el, className) {
    if (el) {
        if (el.className.indexOf(className) != -1) {
            el.className = el.className.replace(className, '');
        } else {
            el.className += ' ' + className;
        }
    }
};

setHeight();