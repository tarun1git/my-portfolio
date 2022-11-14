// -----------------skills-------------
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
// --------------responsive sidemenu---------------
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
// ---------------contactform send to googlesheet-------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbwU6A5IsTXactP4zF_8Tk-DcJRVCbS5rzbtWSbP31b8Mqeqvoqyh-bmw9-aGABJONfMHQ/exec'
const form = document.forms['submit-to-google-sheet']
const deliverymsg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            deliverymsg.innerHTML = "Thank You! Your Message has been sent"
            setTimeout(function () {
                deliverymsg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})