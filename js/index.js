$(document).ready(() => {

  const url = "easylearnapi.000webhostapp.com/api/v1/fetchtutorial";

  // Populate search list of course
  $.getJSON(url, function (data) {
      console.log(data)
    $.each(data.data.data, function (key, entry) {
      $.each(data, function (key, val) {
        // append data to dropdown div
      });
    });
  });

  //   search function
  function searchFilter() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByClassName("result");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }


  window.onscroll = function () {
    myFunction();
  };

  // Get the header
  var header = document.getElementById("myHeader");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  //change navbar height function
  var open = false;
  var navbar = document.getElementsByClassName("navbar");
  toggler.addEventListener("click", function () {
    open = !open;
    console.log(logo);
    if (open) {
      navbar.classList.add("nav-full");
    } else {
      navbar.classList.remove("nav-toggler-alt");
    }
  });
});
