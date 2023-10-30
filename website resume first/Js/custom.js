let My_Element_First = document.getElementById("My--Element--First");
// later, check if class "active" has been added to element
function checkIfActive() 
{

  if (My_Element_First.classList.contains("d-none","d-sm-none","d-md-none" , "Box--Data--Porfile--Info")) 
  {
    My_Element_First.classList.add("d-block" ,"d-sm-block" , "d-md-block","d-lg-block", "Box--Data--Porfile--Info--Add");
    My_Element_First.classList.remove("d-none","d-sm-none","d-md-none", "d-lg-none" , "Box--Data--Porfile--Info");
  } 
  else 
  {
    My_Element_First.classList.remove("d-block" ,"d-sm-block","d-md-block","d-lg-block");
    My_Element_First.classList.add("d-none","d-sm-none","d-md-none","d-lg-none");
  }

}

let MenuToggle = document.querySelector(".Box--Icon--Menu");

let Menu_Opne_Close = document.getElementById("Box--Menu--Pc");

MenuToggle.onclick = function()
{
  MenuToggle.classList.toggle("active");

  if(Menu_Opne_Close.classList.contains("Box--Menu--Pc"))
  {
    Menu_Opne_Close.classList.add("Box--Menu--Pc--Add");
    Menu_Opne_Close.classList.remove("Box--Menu--Pc");
  }
  else
  {
    Menu_Opne_Close.classList.remove("Box--Menu--Pc--Add");
    Menu_Opne_Close.classList.add("Box--Menu--Pc");
  }

}

function Open_Page(evt, PageName) 
{
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab

  let PageNames = document.querySelectorAll(".PageNames");

  for( i = 0 ; i < PageNames.length ; i++ )
  {

    PageNames[i].classList.remove("active");

  }
  document.getElementById(PageName).style.display = "block";
  // evt.currentTarget.className += " active";
  evt.currentTarget.className += " active";

}

var swiper = new Swiper(".My--Swiper--1", {
  spaceBetween: 25,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
      568: 
      {
        slidesPerView: 1,
      },
      768: 
      {
        slidesPerView: 1,
      },
      992: 
      {
        slidesPerView: 1,
      },
      1000: 
      {
        slidesPerView: 2,
      },
      1200: 
      {
        slidesPerView: 2,
      },
      1400: 
      {
        slidesPerView: 2,
      },
      1600: 
      {
        slidesPerView: 2,
      },

  },
});

var swiper2 = new Swiper(".My--Swiper--2", {
  spaceBetween: 25,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
      360: 
      {
        slidesPerView: 3,
      },
      568: 
      {
        slidesPerView: 3,
      },
      768: 
      {
        slidesPerView: 3,
      },
      992: 
      {
        slidesPerView: 3,
      },
      1000: 
      {
        slidesPerView: 3,
      },
      1200: 
      {
        slidesPerView: 4,
      },
      1400: 
      {
        slidesPerView: 4,
      },
      1600: 
      {
        slidesPerView: 4,
      },

  },
});

let Filter_Buttons = document.querySelectorAll(".Filter--Button");

let Filter_Cards = document.querySelectorAll(".Filterble--Cards");

for( let i = 0 ; i < Filter_Buttons.length ; i++ )
{

  Filter_Buttons[i].addEventListener("click" , function()
  {

    for( let j = 0 ; j < Filter_Buttons.length ; j++)
    {

      Filter_Buttons[j].classList.remove("active");

    }

    this.classList.add("active");

    let DataFilter = this.getAttribute("data-name");

    for( let k = 0 ; k < Filter_Cards.length ; k++ )
    {

      Filter_Cards[k].classList.remove("active");

      Filter_Cards[k].classList.add("Hide");


      if(Filter_Cards[k].getAttribute("data-name") == DataFilter || DataFilter == "All")
      {

        Filter_Cards[k].classList.remove("Hide");

        Filter_Cards[k].classList.add("active");

      }

    }


  })

}