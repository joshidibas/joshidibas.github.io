$(document).ready(function() {
    AOS.init({
        duration: 1200,
    });


    var rainforest;
    var cards;
    var me = 0;
    var car;
    var zoo;
    var helm = 0;
    var mainHelm;
    var vle = 0;
    var mainVle;
    var slider = 0;
    var allContainers = 0;
    var checkallProjBtn;
    var checkMeContainer = 0;
    var checkHContainer = 0;

    if (screen.width < 1000) {
        $(".touch-to-flip").show();

    }
    /* Menu */
    $(window).scroll(function() {
    if ($(this).scrollTop() > 80){  
        $('header').addClass("sticky");
        $('header h1').addClass("sticky");
        $('.logo').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
        $('header h1').removeClass("sticky");
         $('.logo').removeClass("sticky");
    }
});
    $(".logo").click(function() {
    $("html, body").animate({
                    scrollTop: 0
            }, "slow");
    });
    var x = $('#myTopnav');

    function mobileMenu() {

         if (!$('li, ul').is(':animated')) {

        if (x.is(':not(.responsive)')) {
            $(x).addClass("responsive");
            $(".responsive li").show(1000);
            $('.bars').addClass('animate');
        } else {
            $(".responsive li").not(':first').hide(1000);
            setTimeout(function() {
                $(x).removeClass("responsive");
            }, 1000);
            $('.bars').removeClass('animate');
        }
         }
    }


    $('.iconMenu').click(function() {
        mobileMenu();
    });

    $(".about").click(function() {
        if (!$('div').is(':animated')) {
            if (me === 0) {
                if (screen.width > 1000) {
                changeTitle('About me');
                }
                $(this).addClass("active");
                $(".home").removeClass("active");
                $(".projects").removeClass("active");
                
                removeMainContainers();
                $(".container").hide("slow");
                $(".main").delay(1500).hide("slow");
                
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
                                
                if (screen.width < 1000) {

                    $(".aboutLi").prependTo(".menu");
                    if (x.hasClass('responsive')) {
                        mobileMenu();
                    }
                }
       
                $(".containerMe").delay(500).show(2000);
                removeMainContainers();
                me = 1;
                $('#cv').attr('data-aos', 'flip-down');
                setTimeout(function() {
                    $("#typed").typed({
                        // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
                        stringsElement: $('#typed-strings'),
                        typeSpeed: -15,
                        backDelay: 500,
                        loop: false,
                        contentType: 'html', // or text
                        // defaults to false for infinite loop
                        loopCount: false,
                        callback: function() {
                            foo();
                        },
                        resetCallback: function() {
                            newTyped();
                        }
                    });
                    $('.other-skills').attr('data-aos', 'fade-up');
                }, 3000);
                
                sliderFunction();



            }
        }

    });


    function newTyped() { /* A new typed object */ }


    function foo() {
    }

    $(".home").click(function() {
        $("html, body").animate({
                scrollTop: 0
            }, 1000);
        $(this).addClass("active");
        $(".about").removeClass("active");
        $(".projects").removeClass("active");
        backHome();
        if (x.hasClass('responsive')) {
            $('li').on('click', function() {
                $(this).parent().prepend(this);
            });
            mobileMenu();
        }


    });

    $(".projects").click(function() {

        removeMainContainers();
            $("html, body").animate({
        scrollTop: 0
    }, "slow");
    if (screen.width > 1000) {
        changeTitle('Projects');
    }
        $(".main").show("slow");
        $("#small-helmdon").appendTo(".main:first");
        $(".container:not(#me)").show("fold");
        $("#me").show().hide("fold");
        vle = 0;
        helm = 0;

        if (checkMeContainer === 0) {
            $("#me").show().hide("fold");
            checkMeContainer = 1;
        }

        $(this).addClass("active");
        $(".home").removeClass("active");
        $(".about").removeClass("active");
        if (screen.width < 1000) {
            $(".projectsLi").prependTo(".menu");
            if (x.hasClass('responsive')) {
                mobileMenu();
            }
        }

    });

//Change Title 
    function changeTitle(title){
        $('header h1').addClass("sticky");  
           setTimeout(function () { 
           $('header h1').text(title);
           $('header h1').removeClass("sticky");
        }, 600);

    }
   
    $("#rainforest-button").click(function() {
        if (!$('.container').is(':animated')) {

            $(".container").hide("slow");
            $(".main").delay(1500).hide("slow");
            removeMainContainers();
            allContainers = 1;
            
            changeTitle('Rainforest Online Shop');
            
            $(".containerRainforest").delay(500).slideDown(2000,
                function() {
                    $('.allProjButton').css('cursor', 'pointer');
                });
            $('.allProjButton').delay(500).show("slow");
            
            checkallProjBtn = 1;
            rainforest = 1;

            if (screen.width < 1000) {

                $(".projectsLi").prependTo(".menu");
                if (x.hasClass('responsive')) {
                    mobileMenu();
                }
            }
            $('.projects').addClass("active");
            $(".home").removeClass("active");
            $(".about").removeClass("active");
        }
    });
    $("#blackjack-button").click(function() {
        if (!$('.container').is(':animated')) {

            $(".container").hide("slow");
            $(".main").delay(1500).hide("slow");
            removeMainContainers();
            allContainers = 1;
            changeTitle('Blackjack Game');
            $(".containerCards").delay(500).slideDown(2000,
                function() {
                    $('.allProjButton').css('cursor', 'pointer');
                });
            $('.allProjButton').delay(500).slideDown(1000);

            checkallProjBtn = 1;
            cards = 1;

            if (screen.width < 1000) {

                $(".projectsLi").prependTo(".menu");
                if (x.hasClass('responsive')) {
                    mobileMenu();
                }
            }
            $('.projects').addClass("active");
            $(".home").removeClass("active");
            $(".about").removeClass("active");
        }
    });

    $("#carcrash-button").click(function() {
        if (!$('.container').is(':animated')) {

            $(".container").hide("slow");
            $(".main").delay(1500).hide("slow");
            removeMainContainers();
            allContainers = 1;
            changeTitle('CCarCrash - Car Race Application');
            $(".containerCar").delay(500).slideDown(2000,
                function() {
                    $('.allProjButton').css('cursor', 'pointer');
                });
            $('.allProjButton').delay(500).slideDown(1000);

            checkallProjBtn = 1;
            car = 1;

            if (screen.width < 1000) {

                $(".projectsLi").prependTo(".menu");
                if (x.hasClass('responsive')) {
                    mobileMenu();
                }
            }
            $('.projects').addClass("active");
            $(".home").removeClass("active");
            $(".about").removeClass("active");
        }
    });
    $("#zoo-button").click(function() {
        if (!$('.container').is(':animated')) {

            $(".container").hide("slow");
            $(".main").delay(1500).hide("slow");
            removeMainContainers();
            allContainers = 1;
             changeTitle('Claybrook Zoo - Group Project -');
            $(".containerZoo").delay(500).slideDown(2000,
                function() {
                    $('.allProjButton').css('cursor', 'pointer');
                });
            $('.allProjButton').delay(500).slideDown(1000);

            checkallProjBtn = 1;
            zoo = 1;

            if (screen.width < 1000) {

                $(".projectsLi").prependTo(".menu");
                if (x.hasClass('responsive')) {
                    mobileMenu();
                }
            }
            $('.projects').addClass("active");
            $(".home").removeClass("active");
            $(".about").removeClass("active");
        }
    });
    $("#helmdon-button").click(function() {
        if (!$('.container').is(':animated')) {

            $(".container").hide("slow");
            $(".main").delay(1500).hide("slow");
            removeMainContainers();
            changeTitle('Helmdon Parish Council');
            allContainers = 1;
            $(".containerHelmdon").delay(500).slideDown(2000,
                function() {
                    $('.allProjButton').css('cursor', 'pointer');
                });
            $('.allProjButton').delay(500).slideDown(1000);

            checkallProjBtn = 1;
            mainHelm = 1;

            if (screen.width < 1000) {

                $(".projectsLi").prependTo(".menu");
                if (x.hasClass('responsive')) {
                    mobileMenu();
                }
            }
            $('.projects').addClass("active");
            $(".home").removeClass("active");
            $(".about").removeClass("active");
        }
    });
    $("#vle-button").click(function() {
        if (!$('.container').is(':animated')) {

            $(".container").hide("slow");
            $(".main").delay(1500).hide("slow");
            removeMainContainers();
            changeTitle('Virtual Learning Environment')
            allContainers = 1;
            $(".containerVLE").delay(500).slideDown(2000,
                function() {
                    $('.allProjButton').css('cursor', 'pointer');
                });
            $('.allProjButton').delay(500).slideDown(1000);

            checkallProjBtn = 1;
            mainVle = 1;

            if (screen.width < 1000) {

                $(".projectsLi").prependTo(".menu");
                if (x.hasClass('responsive')) {
                    mobileMenu();
                }
            }
            $('.projects').addClass("active");
            $(".home").removeClass("active");
            $(".about").removeClass("active");
        }
    });
    //Back home
    $('.allProjButton').click(function() {

        if (!$('div').is(':animated')) {

            removeMainContainers();

            changeTitle('Projects');
            $(".main").show("slow");
            $("#small-helmdon").appendTo(".main:first");
            $(".container:not(#me)").show(2000);
            $("#me").show().hide("fold");
            vle = 0;
            helm = 0;
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
            checkallProjBtn = 0;

        }
    });

    function backHome() {


        if (!$('div').is(':animated')) {

            $('.allProjButton').css('cursor', 'default');
            removeMainContainers();
            changeTitle('DIBAS\'S PORTFOLIO');
            if (vle === 0 && helm === 0) {
                $(".main").show("slow");
                $(".container:not(#small-helmdon,#vle)").slideDown(2000);
                $("#vle, #small-helmdon").hide("fold");
            } else {
                $("#vle, #small-helmdon").hide("fold");
                $("#me").slideDown(1000);

            }
            allContainers = 0;
            $(".home").addClass("active");
            $(".about").removeClass("active");
            $(".projects").removeClass("active");



            if (screen.width < 1000) {

                $(".homeLi").prependTo(".menu");
                if (x.hasClass('responsive')) {
                    mobileMenu();
                }
            }
            if (checkMeContainer === 0) {
                $(".containerM").toggle("fold");
                checkMeContainer = 1;
            }

            return false;
        }
    }

    function removeMainContainers() {

        if (checkallProjBtn == 1) {
            $(".allProjButton").hide("fold");
            checkallProjBtn = 0;
        }

        if (me == 1) {
            $(".containerMe").hide(2000);
            me = 0;
            slider = 0;
            $(".control").empty();
            $("#typed").empty();
            $('.other-skills').removeAttr('data-aos');
            $("#typed").typed('reset');
        }

        if (rainforest == 1) {
            $(".containerRainforest").hide(2000);
            rainforest = 0;
        }

        if (cards == 1) {
            $(".containerCards").hide(2000);
            cards = 0;

        }

        if (car == 1) {
            $(".containerCar").hide(2000);
            car = 0;

        }
        if (zoo == 1) {
            $(".containerZoo").hide(2000);
            zoo = 0;
        }
        if (mainHelm == 1) {
            $(".containerHelmdon").hide(2000);
            mainHelm = 0;

        }
        if (mainVle == 1) {
            $(".containerVLE").hide(2000);
            mainVle = 0;

        }

    }


    /* Slider
     * roundSlider v1.3 | (c) 2015-2016, Soundar
     * MIT license | http://roundsliderui.com/licence.html
     */


    function sliderFunction() {
        if (slider === 0) {
            $(".control").append('<div id="htmlSlider"></div>');
            $(".control").append('<div id="cssSlider"></div>');
            $(".control").append('<div id="javascriptSlider"></div>');
            $(".control").append('<div id="phpSlider"></div>');
            $(".control").append('<div id="databaseSlider"></div>');
            setTimeout(function() {
                    slider = 1;

                    $("#htmlSlider").roundSlider({
                        startAngle: -90,
                        readOnly: true,
                        radius: 80,
                        width: 14,
                        handleSize: "+8",
                        handleShape: "dot",
                        sliderType: "min-range",
                        value: 90
                    });
                    $("#cssSlider").roundSlider({
                        startAngle: -90,
                        readOnly: true,
                        radius: 80,
                        width: 14,
                        handleSize: "+8",
                        handleShape: "dot",
                        sliderType: "min-range",
                        value: 85
                    });
                    $("#javascriptSlider").roundSlider({
                        startAngle: -90,
                        readOnly: true,
                        radius: 80,
                        width: 14,
                        handleSize: "+8",
                        handleShape: "dot",
                        sliderType: "min-range",
                        value: 75
                    });
                    $("#phpSlider").roundSlider({
                        startAngle: -90,
                        readOnly: true,
                        radius: 80,
                        width: 14,
                        handleSize: "+8",
                        handleShape: "dot",
                        sliderType: "min-range",
                        value: 70
                    });
                    $("#databaseSlider").roundSlider({
                        startAngle: -90,
                        readOnly: true,
                        radius: 80,
                        width: 14,
                        handleSize: "+8",
                        handleShape: "dot",
                        sliderType: "min-range",
                        value: 75
                    });
                
            }, 3000);



        }
    }

    function sliderTypeChanged(e) {
        $("#type").roundSlider({
            sliderType: e.value
        });
    }

    function sliderhtmlSliderChanged(e) {
        var options = {
            circlehtmlSlider: e.value
        };
        if (e.value == "pie") options["startAngle"] = 0;
        else if (e.value == "custom-quarter" || e.value == "custom-half") options["startAngle"] = 45;
        $("#htmlSlider").roundSlider(options);

    }

   
    var timeout;
    //about me small container
    $("#me").hover(
        function() {
            timeout = setTimeout(function() {
                $('#me .back p:nth-child(3)').show(2000);
            }, 1000);
            timeout = setTimeout(function() {
                $('#myList').show(1000);
                $('.rolldown-list li').each(function() {
                    var delay = ($(this).index() / 1) + 's';
                    $(this).css({
                        webkitAnimationDelay: delay,
                        mozAnimationDelay: delay,
                        animationDelay: delay
                    });
                });
            }, 3000);
            timeout = setTimeout(function() {
                $('#me h3').show(1000);
            }, 8000);
        },
        function() {
            $('#me .back p:nth-child(3)').hide();
            $('#myList').hide();
            $('#me h3').hide();
            clearTimeout(timeout);
            delay = null;
        });

       
    //rainforest-no-bar
    var $imgRainforest = $('#progressBar-rainforest');
    $("#small-rainforest").hover(
        function() {
            timeout = setTimeout(function() {
                progressBar(75, $($imgRainforest));
                $imgRainforest.show();
            }, 500);
        },
        function() {
            $imgRainforest.hide();
            progressBar(0, $($imgRainforest));
            clearTimeout(timeout);
        });


    //carcrash-no-bar
    var $imgCarCrash = $('#progressBar-car');
    $("#small-carcrash").hover(
        function() {
            timeout = setTimeout(function() {
                progressBar(55, $($imgCarCrash));
                $imgCarCrash.show();
            }, 500);
        },
        function() {
            $imgCarCrash.hide();
            progressBar(0, $($imgCarCrash));
            clearTimeout(timeout);
        });

    //blackjack-no-bar
    var $imgBlackjack = $('#progressBar-blackjack');
    $("#small-blackjack").hover(
        function() {
            timeout = setTimeout(function() {
                progressBar(60, $($imgBlackjack));
                $imgBlackjack.show();
            }, 500);
        },
        function() {
            $imgBlackjack.hide();
            progressBar(0, $($imgBlackjack));
            clearTimeout(timeout);
        });

    var $imgZoo = $('#progressBar-zoo');
    $("#small-zoo").hover(
        function() {
            timeout = setTimeout(function() {
                progressBar(40, $($imgZoo));
                $imgZoo.show();
            }, 500);
        },
        function() {
            $imgZoo.hide();
            progressBar(0, $($imgZoo));
            clearTimeout(timeout);
        });

    if (screen.width > 1000) {
        $("#format a:first").fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            iframe: {
                preload: false
            }
        });
    }
    //Prevent scrolling on a tag
    $('#cv a').click(function(e) {
        var x = window.pageXOffset,
            y = window.pageYOffset;
        $(window).one('scroll', function() {
            window.scrollTo(x, y);
        });
    });

    $(".rainforest-gallery")
        .attr('rel', 'gallery')
        .fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',

            padding: 0,
            beforeLoad: function() {
                this.title = $(this.element).attr('caption');
            }
        });
    $(".blackjack-gallery")
        .attr('rel', 'gallery')
        .fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',

            padding: 0,
            beforeLoad: function() {
                this.title = $(this.element).attr('caption');
            }
        });

    $(".carcrash-gallery")
        .attr('rel', 'gallery')
        .fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',

            padding: 0,
            beforeLoad: function() {
                this.title = $(this.element).attr('caption');
            }
        });
    $(".zoo-gallery")
        .attr('rel', 'gallery')
        .fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',

            padding: 0,
            beforeLoad: function() {
                this.title = $(this.element).attr('caption');
            }
        });

    $(".helmdon-gallery")
        .attr('rel', 'gallery')
        .fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',

            padding: 0,
            beforeLoad: function() {
                this.title = $(this.element).attr('caption');
            }
        });

    $(".vle-gallery")
        .attr('rel', 'gallery')
        .fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',

            padding: 0,
            beforeLoad: function() {
                this.title = $(this.element).attr('caption');
            }
        });


    $(function() {
        $('.popup').svgpopup({
            stepX: 10,
            stepY: 8,
            figure: 'triangle',
            fill: '#111',
            speed: 1.2,
            opacity: 0.8,
        });
    }());
    
    var str;
    if (screen.width > 1000) {
    $(".contact").click(function() {
        str = $( "header h1" ).text();
        changeTitle('Contact');
    });    
    
        $(".contact-box").hover(
        function() {
        $(".svg-popup-close").click(function() {
        changeTitle(str);
        });
    
        });

    }
});

//Scroll to top bug
$(window).on('load', function() {
      $('body').addClass('loaded');
    // Intro
    (new Image()).src = "images/plane.gif";
    setTimeout(function() {
        $("#intro-typed").typed({
            // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
            stringsElement: $('#strings'),
            typeSpeed: 100,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function() {
                foo();
            },
            resetCallback: function() {
                newTyped();
            }
        });

    }, 4000);

    function newTyped() { /* A new typed object */ }

    function foo() {
    }


    setTimeout(
        function() {
            $('.appendTo').hide("scale");
            $('.planeGif').append('<img src="images/plane.gif" width="100%">').hide().show("scale");
        }, 14500);

    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    //When loaded
    $(".container:not(#small-helmdon,#vle)").slideDown(2000);

   
   if($("#dialog").is(":visible")) {
        $(".mailsent").delay(1500).show(1000);
    setTimeout(
        function() {
            $(".mailsent").css('-webkit-animation', 'mailsent-movement2 3.5s normal ease-in-out');
            $(".mailsent .envelope").css('-webkit-animation', 'mailsent-rotation2 3.5s normal ease-in-out');
        }, 4200);
    setTimeout(
        function() {
            $('.fa-envelope').css('margin-left', '425px');
            if (screen.width < 1000) {
                $('.fa-envelope').css('margin-left', '130px');
            }
        }, 7700);

    setTimeout(
        function() {
            $('#dialog h1').show(1000);
            $('#dialog h3').delay(1100).show(1000);
        }, 8500);
        }


});
