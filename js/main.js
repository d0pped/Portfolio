$(function () {
    const progressBox = $(".progress-bar")
    const progress0st = $(".animation").offset().top - 600;
    let isAni=false;
    $(window).scroll(function () {
        if ($(window).scrollTop() >= progress0st && !isAni ) {
            progressAni();
        }
    })
function progressAni(){
        progressBox.each(function () {
            let $this = $(this),
                progressBar = $this.find(".bar"),
                progressText = $this.find(".rate"),
                progressRate = progressText.attr("data-rate");
            progressBar.animate({ width: progressRate + "%" }, 2500);

            let text = function () {
                $({ rate: 0 }).animate(
                    { rate: progressRate },
                    {
                        duration: 2000,
                        progress: function () {
                            let now = this.rate;
                            progressText.text(Math.floor(now) + '%');
                        },
                        complete:function(){
                            isAni=true
                        progressBox.addClass()
                    }
                    })
            };
            text();
        });
    }
});

$(document).ready(function() {
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });
    
    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 300);
    })
});