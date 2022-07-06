var videos = [
    "video/background-video-0.mp4",
    "video/background-video-1.mp4"
]

//header videos switch
var headerSection = document.querySelector("#header-wrapper");
var video = $("#header-wrapper video");

function toggleVideo1() {
    video.attr("src", videos[0]).animate({ opacity: 1 }, 1000).hide().fadeIn("slow");
    video[0].load();
    video[0].play();
    if (headerSection.classList.contains("video2")) {
        headerSection.classList.remove("video2");
        headerSection.classList.add("video1");
    }
}

function toggleVideo2() {
    video.attr("src", videos[1]).animate({ opacity: 1 }, 1000).hide().fadeIn("slow");
    video[0].load();
    video[0].play();
    if (headerSection.classList.contains("video1")) {
        headerSection.classList.remove("video1");
        headerSection.classList.add("video2");
    }
}

var i = 0;
setInterval(function () {
    if (i === 0) {
        i++;
        toggleVideo2();
    } else {
        i--;
        toggleVideo1();
    }
}, 7000);
// $(".load-wrapp").css({ display: "none" });
$(document).ready(function () {
    setTimeout(function (){
        $(".preloader").fadeOut(1000);
        new WOW().init();
        // //mobile menu toggle
        var menu = document.querySelector(".menu-toggle");

        function mobileMenuToggle() {
            $(".nav-content ul").toggleClass("__toggle", 300, "easeOutSine");
            $(".menu-toggle").toggleClass("bars-active");
        }
        function removeMenu() {
            $(".nav-content ul").removeClass("__toggle", 300, "easeOutSine");
            $(".menu-toggle").removeClass("bars-active")
        }

        menu.addEventListener("click", function (e) {
            e.stopPropagation();
            mobileMenuToggle();
        });

        document.onclick = function () {
            removeMenu();
        }


        // //add class fixed when user scroll
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            var div = $('.navbar-wrapper').offset().top; // get top offset of your div
            if (scroll >= div) {
                // need transition in css class to work
                $(".navbar-wrapper").animate({ top: 0 }, 1);
            } else {
                $(".navbar-wrapper").animate({ top: "-100px" }, 1);
                // setTimeout(function () {
                //     $(".navbar-wrapper").removeClass("fixed")
                // }, 10000)
            }
        });


        // //add active class in navbar menu when clicked
        // var navPort = document.querySelectorAll(".nav-content ul li a");

        // for (var i = 0; i < navPort.length; i++) {
        //     // remember you cannot pass "i" inside function;
        //     document.querySelectorAll(".nav-content ul li a")[i].addEventListener("click", function () {
        //         for (var i = 0; i < navPort.length; i++) {
        //             document.querySelectorAll(".nav-content ul li a")[i].classList.remove("__active");
        //             // document.querySelectorAll(".nav-content ul li a")[i].classList.add("notransition");
        //         }
        //         this.classList.add("__active");
        //     });
        // }

        //add active class in navbar menu when scrolled

        const sections = document.querySelectorAll("section");
        const anchors = document.querySelectorAll(".nav-content ul li a");

        window.addEventListener("scroll", function () {
            $(".pButton.active").trigger('click');

            let current = "";
            //get the top of every sections
            // note: pageYOffset gets the number of pixels the document is currently scrolled
            // how much we scrolled
            sections.forEach(function (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const sectionName = section.getAttribute("id");
                // console.log(pageYOffset);
                // console.log(`${sectionName} = ${sectionTop} => ${sectionHeight}`);
                // (pageYOffset >= (sectionTop - sectionHeight / 3))
                if (pageYOffset >= (sectionTop - sectionHeight / 8)) {
                    current = sectionName;
                }
            })
            anchors.forEach(function (anchorTag) {
                anchorTag.classList.remove("__active");
                if (anchorTag.classList.contains(current)) {
                    anchorTag.classList.add("__active");
                }
            });
        });



        /* with arrow function for each*/
        // sections.forEach(section =>{
        //     const sectionTop = section.offsetTop;
        //     const sectionHeight = section.clientHeight;
        //     const sectionName = section.getAttribute("id");
        //     // console.log(pageYOffset);
        //     // console.log(`${sectionName} = ${sectionTop} => ${sectionHeight}`);
        //     if(pageYOffset >= (sectionTop - sectionHeight / 3)){
        //         current  = sectionName;
        //     }
        // });

        //skill section 
        var skillBars = document.querySelectorAll(".skill-bar");

        skillBars.forEach(function (skillBars) {
            var percent = skillBars.querySelector(".bar-percent").innerHTML;
            skillBars.querySelector(".skill-bar-fill").style.width = percent;
        });

        $(".projectGallery").isotope({
            itemSelector: ".projectGallery .item",
            percentPosition: true,
            masonry: {
                // use element for option
                columnWidth: '.projectGallery .item'
            },
            transitionDuration: '0.6s'
        })

        //Gallery Section

        //function for filtering gallery
        var projectButtons = document.querySelectorAll(".projectButtons .pButton");
        projectButtons.forEach(buttons => {
            buttons.addEventListener("click", function () {

                projectButtons.forEach(btn => {
                    btn.classList.remove("active");
                });
                this.classList.add("active");
                var selector = $(this).attr("data-filter");
                $(".projectGallery").isotope({
                    filter: selector
                });
            });
        });

        // function for showing and closing iframe
        var iframe = document.querySelector(".iframe-container iframe");
        function showIframe(src) {
            iframe.setAttribute("src", src);
            $(".iframe-container").fadeIn(1000);
            document.querySelector("body").style.overflow = "hidden";
            $(".load-wrapp").fadeIn();
        }
        function closeIframe() {
            iframe.setAttribute("src", "");
            $(".iframe-container").fadeOut(1000);
            document.querySelector("body").style.overflow = "auto";
        }
        iframe.onload = function () {
            $(".load-wrapp").css({ display: "none" });
        }
   
        var galleryItemButtons = document.querySelectorAll(".item .text-content button");
        var closeIFRAME = document.querySelector(".iframe-container button");

        galleryItemButtons.forEach(function (itemButtons) {
            itemButtons.addEventListener("click", function () {
                showIframe(this.getAttribute("data-src"));
            });
        });



        closeIFRAME.addEventListener("click", function () {
            closeIframe();
        });
    },1000)
});
