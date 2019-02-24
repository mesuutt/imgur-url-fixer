var images = document.getElementsByTagName('img');
var regex = /imgur\.com\/([A-Za-z0-9]+)/;

for (i=0; i < images.length; i++) {
    var url = images[i].src;
    if (regex.test(url)) {
        images[i].src = "https://proxy.duckduckgo.com/iu/?u=" + url;
    }
}
