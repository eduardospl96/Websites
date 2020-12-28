$(document).ready(function () {

    // Gear Carousel
    $('#CamplyCarousel').carousel({
        interval: 5000
    });

    $('#carouselControl').click(function () {

        if ($('#carouselControl').hasClass('paused')) {
            $('#CamplyCarousel').carousel('cycle');
            $('#carouselControl').text('Pause');
        } else {
            $('#CamplyCarousel').carousel('pause');
            $('#carouselControl').text('Play');
        }

        $('#carouselControl').toggleClass('paused');
    });

});