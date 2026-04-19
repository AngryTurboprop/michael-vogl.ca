//Inject header on load
if (document.readyState === "loading") {
    //Detect if the site is local or on GitHub Pages
    let baseHref;
    if (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost") {
        baseHref = "http://127.0.0.1:5500/";
    } else if (window.location.hostname === "10.0.0.215"){
        baseHref = "http://10.0.0.215:5500/";
    } else if (window.location.hostname == "localhost:5500"){
        baseHref = "http://localhost:5500/";
    } else {
        baseHref = "https://michael-vogl.ca/";
    }

    document.head.insertAdjacentHTML("afterbegin", `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="${baseHref}">`);

    let siteVersion = 0;
    if (typeof siteConfig !== 'undefined')
    {
        siteVersion = siteConfig;
    }

    injectIndex(siteVersion);
}

if (document.readyState === "complete") {
    document.getElementById("personal-site-button").addEventListener("click", accessPersonalSite);
}

function injectIndex(version_index = 0)
{
    switch (version_index)
    {
        case 1: 
            break;
        case 2:
            injectHeader("/pages/templates/header_two.html");
            injectFooter("/pages/templates/footer_two.html");
            break;
        case 0:
        default:
            injectHeader();
            injectFooter();
            break;
    }
}

function accessPersonalSite()
{
    window.open("https://michaelscybersite.net/index.html", '_blank').focus();
}

function injectHeader(path = "/pages/templates/header.html")
{
    fetch(path)
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML("beforebegin", data);
    });
}

//Injects the overridden footer into the HMTL document
function injectFooter(path = "/pages/templates/footer.html")
{
    fetch(path)
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML("afterend", data);
    });
}