const navHide = document.getElementsByClassName("nav-bar-hide");
const navMedia = document.getElementsByClassName("nav-bar-media");
const nav = document.getElementsByTagName("nav");
console.log($(document).width());

document.getElementById("toggle-btn").addEventListener("click", function() {
  if ($(document).width() <= 768) {
    $(navHide).toggleClass("nav-bar-media");
  } else {
    $(navHide).toggleClass("nav-bar");
  }
});

// ====== Hero Logo Fade Out =======

const logo = document.getElementsByClassName("logo");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  if (scrolled >= 80) {
    $(logo).addClass("hero-logo-hide");
  } else {
    $(logo).removeClass("hero-logo-hide");
  }
});

//========= Smooth Scrolling ==============
$('a[href^="#"]').on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;
    $(navHide).toggleClass("nav-bar");
    if ($(document).width() <= 768) {
      $(nav).removeClass("nav-bar");
      $(nav).toggleClass("nav-bar-media");
    }

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  } else if (this.hash == "") {
    window.location.reload();
  }
});

// ======== Menu Accordion =========

let type = document.querySelectorAll("button.menu-button");
let innerType = document.querySelectorAll("button.menu-button-inner");
let sectionText = document.getElementsByClassName("section-text");

for (let i = 0; i < type.length; i++) {
  type[i].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}

// let last;
// for (let i = 0; i < innerType.length; i++) {
//   innerType[i].onclick = function() {
//     if (last) {
//       last.classList.toggle("active-inner", false);
//       last.nextElementSibling.classList.toggle("show-inner", false);
//     }
//     this.classList.toggle("active-inner");
//     this.nextElementSibling.classList.toggle("show-inner");
//     last = this;
//   };
// }

for (let i = 0; i < innerType.length; i++) {
  innerType[i].onclick = function() {
    let setClasses = !this.classList.contains("active-inner");
    setClass(innerType, "active-inner", "remove");
    setClass(sectionText, "show-inner", "remove");

    if (setClasses) {
      this.classList.toggle("active-inner");
      this.nextElementSibling.classList.toggle("show-inner");
    }
  };
}

function setClass(els, className, fnName) {
  for (let i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
  }
}

// ======== map =========

// map js
var map;
function initMapYe() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 53.471946, lng: -2.291686 },
    zoom: 8
  });

  // Array of markers
  var markers = [
    {
      coords: { lat: 53.471946, lng: -2.291686 },
      content: "<h4>THE EXPEDITIONIST</h4>"
    }
  ];

  // Loop through markers
  for (var i = 0; i < markers.length; i++) {
    // Add marker
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map
      //icon:props.iconImage
    });

    // Check for customicon
    if (props.iconImage) {
      // Set icon image
      marker.setIcon(props.iconImage);
    }

    // Check content
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content
      });
    }

    marker.addListener("mouseover", function() {
      infoWindow.open(map, marker);
    });

    marker.addListener("mouseout", function() {
      infoWindow.close(map, marker);
    });

    marker.addListener("click", function() {
      map.setZoom(14);
      map.setCenter(marker.getPosition());
    });

    marker.addListener("dblclick", function() {
      map.setZoom(8);
      map.setCenter(marker.getPosition());
    });
  }
}

// ======== Text Fade Out At Top ========

// window.addEventListener("scroll", () => {
//   let textClass = document.getElementsByClassName("content-text");
//   const docViewTop = window.pageYOffset;

//   for (let i = 0; i < textClass.length; i++) {
//     let textTop = textClass[i].offsetTop - docViewTop;
//     console.log(textTop);
//     if (textTop <= 100) {
//       $(textClass).removeClass("show");
//       $(textClass).addClass("fade-out-text");
//     } else {
//       $(textClass).addClass("show");
//       $(textClass).removeClass("fade-out-text");
//     }
//   }
// });
