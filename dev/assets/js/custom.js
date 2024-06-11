  $('select').niceSelect();

  $('#first-screen-slider').slick({
    dots:true,
    appendArrows: $('.first-screen-arrows'),
    responsive: [{
        breakpoint:1024,
        settings:{
        arrows:false,
        },
      }
    ]
  });
  


  $('.slider-template').slick({
    infinite: true,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint:1400,
        settings:{
        slidesToShow: 2,
        }
        },
      {
        breakpoint:1025,
        settings:{
        slidesToShow: 1,
        arrows:false,
        dots:true,
        }
      }
    ]
  });



  mobileOnlySlider(".slider-advantages", true, false, 1024);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
  const slider = $($slidername);
  const settings = {
    mobileFirst: true,
    dots: $dots,
    arrows: $arrows,
    responsive: [
      {
        breakpoint: $breakpoint,
        settings: "unslick"
      }
    ]
  };

  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
}



  
  
const hamburger = document.querySelector('.hamburger') 
const headerNav= document.querySelector('.header-nav')

const fileInput = document.querySelector('#calculation-file');
const fileName = document.querySelector('#file-name')
const calcWeight = document.querySelector('#calculation-weight')

const controledField = document.querySelectorAll('[type="checkbox"]')
const fileField = document.querySelectorAll('[type="file"]')
const formBtns = document.querySelectorAll('form .col button')


hamburger .addEventListener('click',function(){
    hamburger.classList.toggle('is-active')
    headerNav. classList.toggle('show') 
})


fileInput.addEventListener('change', function(){
  fileName.innerHTML = this.files[0].name; 
});


const addParentClass = (array, parent, className) =>{
  array.forEach(item =>{
    item.closest(parent).classList.add(className)
  })

}

addParentClass(formBtns, '.col', 'mobile-center')
addParentClass(controledField, '.input-wrapper', 'controled-wrapper')
addParentClass(controledField, '.col', 'controled-col')
addParentClass(fileField, '.input-wrapper', 'file-wrapper')


