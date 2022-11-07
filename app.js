var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tab) {
    for (tabLink of tablinks) {
        tabLink.classList.remove("active-link");
    }
    for (tabContent of tabcontents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tab).classList.add("active-tab");
}