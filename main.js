

var tl = gsap.timeline({
  defaults: {
    duration: 1
  }
})
var dotStep = $(".dots-nav");

function dotsfunc(para) {

    // hiding
    for (let i = 1; i <= dotStep.length; i++) {
        $("#Dots" + i).removeClass("dot-active");
    }

    for (let i = 1; i <= para; i++) {
        $("#Dots" + i).addClass("dot-active");
    }
}
function display_fun1() {
  tl.from(".left1", {
    y: 50,
    stagger: .2,
    opacity: 0
  })
  tl.from(".cwr-1", {
    y: 50,
    stagger: .2,
    opacity: 0,
  }, "-=1.8")
  gsap.from('.right6 img', {
    opacity: 0,
    duration: 1,
    y: 700
  });
  gsap.from('.bottom-img', {
    opacity: 0,
    duration: 1,
    y: 100
  });
  console.log("1");
  $(".container-1").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-6");
  $(".svg-bg").removeClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-7");
  $(".container-7").addClass("display-none");
  $(".container-6").addClass("display-none");
  $(".container-2").addClass("display-none");
  $(".container-3").addClass("display-none");
  $(".container-4").addClass("display-none");
  $(".container-5").addClass("display-none");

}

function display_fun2() {
  tl.from(".left1-1", {
    y: 50,
    stagger: .7,
    opacity: 0
  })
  tl.from(".cwr-2", {
    y: 50,
    stagger: .2,
    opacity: 0,
  }, "-=1.8")
  gsap.from('.right7-img1', {
    opacity: 0,
    duration: 1,
    y: -200
  });
  gsap.from('.c7-rp-img2', {
    opacity: 0,
    duration: 1,
    y: 200
  });
  console.log("1");
  $(".container-7").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-7");
  $(".svg-bg").removeClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-6");
  $(".container-6").addClass("display-none");
  $(".container-1").addClass("display-none");
  $(".container-2").addClass("display-none");
  $(".container-3").addClass("display-none");
  $(".container-4").addClass("display-none");
  $(".container-5").addClass("display-none");
}

function display_fun3() {
  tl.from(".left1-2", {
    y: 50,
    stagger: .7,
    opacity: 0
  })
  tl.from(".cwr-3", {
    y: 50,
    stagger: .2,
    opacity: 0,
  }, "-=1.8")
  gsap.from('.nasa-fitness-app-img2', {
    opacity: 0,
    duration: 1,
    y: -200
  });
  gsap.from('.nasa-fitness-app-img1', {
    opacity: 0,
    duration: 1,
    y: 200
  });
  console.log("1");
  $(".container-6").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-6");
  $(".svg-bg").removeClass("svg-bg-7");
  $(".container-7").addClass("display-none");
  $(".container-1").addClass("display-none");
  $(".container-2").addClass("display-none");
  $(".container-3").addClass("display-none");
  $(".container-4").addClass("display-none");
  $(".container-5").addClass("display-none");
}

function display_fun4() {
  tl.from(".left1-3", {
    y: 50,
    stagger: .7,
    opacity: 0
  })
  tl.from(".cwr-4", {
    y: 50,
    stagger: .2,
    opacity: 0,
  }, "-=1.8")
  gsap.from('.img-1', {
    opacity: 0,
    duration: 1,
    y: 200
  });
  gsap.from('.img-2', {
    opacity: 0,
    duration: 1,
    y: -500
  });
  gsap.from('.img-3', {
    opacity: 0,
    duration: 1,
    y: -100
  });
  gsap.from('.img-4', {
    opacity: 0,
    duration: 1,
    y: 100
  });
  gsap.from('.img-5', {
    opacity: 0,
    duration: 1,
    y: -100
  });
  console.log("1");
  $(".container-2").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-6");
  $(".svg-bg").removeClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-7")
  $(".container-7").addClass("display-none");
  $(".container-1").addClass("display-none");
  $(".container-6").addClass("display-none");
  $(".container-3").addClass("display-none");
  $(".container-4").addClass("display-none");
  $(".container-5").addClass("display-none");
}

function display_fun5() {
  tl.from(".left1-4", {
    y: 50,
    stagger: .5,
    opacity: 0
  })
  tl.from(".cwr-5", {
    y: 50,
    stagger: .2,
    opacity: 0,
  }, "-=1.8")
  gsap.from('.right3-img-1', {
    opacity: 0,
    duration: 1,
    x: 200
  });
  gsap.from('.right3-img-2', {
    opacity: 0,
    duration: 1,
    y: 200
  });
  gsap.from('.right3-img-3', {
    opacity: 0,
    duration: 1,
    y: -300
  });
  gsap.from('.right3-img-4', {
    opacity: 0,
    duration: 1,
    y: 300
  });
  gsap.from('.right3-img-5', {
    opacity: 0,
    duration: 1,
    y: -300
  });
  console.log("1");
  $(".container-3").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-6");
  $(".svg-bg").removeClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-7");
  $(".container-7").addClass("display-none");
  $(".container-1").addClass("display-none");
  $(".container-2").addClass("display-none");
  $(".container-6").addClass("display-none");
  $(".container-4").addClass("display-none");
  $(".container-5").addClass("display-none");
}

function display_fun6() {
  tl.from(".left1-5", {
    y: 50,
    stagger: .7,
    opacity: 0
  })
  tl.from(".cwr-6", {
    y: 50,
    stagger: .2,
    opacity: 0,
  }, "-=1.8")
  gsap.from('.right4-img', {
    opacity: 0,
    duration: 1,
    y: 700
  });
  console.log("1");
  $(".container-4").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-6");
  $(".svg-bg").removeClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-7");;
  $(".container-7").addClass("display-none");
  $(".container-1").addClass("display-none");
  $(".container-2").addClass("display-none");
  $(".container-3").addClass("display-none");
  $(".container-6").addClass("display-none");
  $(".container-5").addClass("display-none");
}

function display_fun7() {
  tl.from(".left1-6", {
    y: 50,
    stagger: .7,
    opacity: 0
  })
  tl.from(".cwr-7", {
    y: 50,
    stagger: .2,
    opacity: 0,
  }, "-=1.8")
  gsap.from('.bottom-img', {
    opacity: 0,
    duration: 1,
    y: 100
  });
  gsap.from('.right5-img1', {
    opacity: 0,
    duration: 1,
    y: -200
  });
  gsap.from('.right5-img2', {
    opacity: 0,
    duration: 1,
    y: 200
  });
  console.log("1");
  $(".container-5").removeClass("display-none");
  $(".svg-bg").addClass("svg-bg-5");
  $(".svg-bg").removeClass("svg-bg-2");
  $(".svg-bg").removeClass("svg-bg-3");
  $(".svg-bg").removeClass("svg-bg-4");
  $(".svg-bg").removeClass("svg-bg-6");
  $(".svg-bg").removeClass("svg-bg-1");
  $(".svg-bg").removeClass("svg-bg-7");;
  $(".container-7").addClass("display-none");
  $(".container-1").addClass("display-none");
  $(".container-2").addClass("display-none");
  $(".container-3").addClass("display-none");
  $(".container-4").addClass("display-none");
  $(".container-6").addClass("display-none");
}
$('.owl-carousel').owlCarousel( {

  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2500,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    }

    ,
    768: {
      items: 1,
      nav: false
    }

    ,
    1000: {
      items: 5,
      nav: true,
      loop: false
    }
  }
}

)