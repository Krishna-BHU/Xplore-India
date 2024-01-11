$(function () {
    // Handle filter button click
    $('#portfolio-flters li').on('click', function () {
        $('#portfolio-flters li').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $('.portfolio-item').hide();
        $(filterValue).show();
    });

    // Testimonials carousel
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });














});