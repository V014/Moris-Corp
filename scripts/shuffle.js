function shuffle_img(id) {
    let img = document.getElementById(id);
    let currentSrc = img.getAttribute('src').substring(img.getAttribute('src').indexOf('images/'));
    switch (currentSrc) {
        case "images/devices.gif":
            document.getElementById("img").src='images/line_chart.gif';
            break;

        case "images/line_chart.gif":
            document.getElementById("img").src='images/laptop_dashboard.gif';
            break;

        case "images/laptop_dashboard.gif":
            document.getElementById("img").src='images/web_infrastructure.gif';
            break;

        case "images/web_infrastructure.gif":
            document.getElementById("img").src='images/thought_works.gif';
            break;
    
        default:
            document.getElementById("img").src='images/devices.gif';
            break;
    }
}