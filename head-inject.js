//Inject header on load
if (document.readyState === "loading") {
    injectHeader();
    injectFooter()
}

function injectHeader()
{
    fetch("/pages/templates/header.html")
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML("afterbegin", data);
    });
}

//Injects the overridden footer into the HMTL document
function injectFooter()
{
    fetch("/pages/templates/footer.html")
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML("beforeend", data);
    });
}