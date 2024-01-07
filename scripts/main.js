$(document).ready(function() {

    //sticky menu
    $(".js-sticky-menu").waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });

    //active menu item
    $(function() {
        $('ul.main-nav li').on('click', function() {
            $(this).parent().find('li.active').removeClass('active');
            $(this).addClass('active');
        });
    });


    //mixitup(portfolio section)
    var mixer = mixitup('.container');



});


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

//active

// Get the current page's filename (e.g., "index.html")
var currentPage = window.location.pathname.split("/").pop();
console.log(currentPage)
    // Find the corresponding menu link and add the "active" class
var menuLinks = document.querySelectorAll('.main-nav li a');
for (var i = 0; i < menuLinks.length; i++) {
    console.log(menuLinks[i].getAttribute('href'))
    if (menuLinks[i].getAttribute('href') === currentPage) {
        menuLinks[i].classList.add('active');
    }
}

//sound
// JavaScript code to play the audio when the page is done loading
window.addEventListener('load', function() {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.play();
});

function downloadPDF() {
    const hiddenImg = document.getElementById('hiddenImage');
    hiddenImg.classList.add('show-img');

    const pdfContent = document.getElementById('pdfContent');
    pdfContent.classList.add('centered');

    html2pdf(pdfContent).then(() => {
        // PDF generation is complete
        window.location.reload();
    });
}


function openImageInNewTab() {
    const tigerImage = document.getElementById('tigerImage');
    const imageUrl = tigerImage.src;

    // Open the image in a new tab
    window.open(imageUrl, '_blank');
}