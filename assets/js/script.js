// JavaScript code for sticky header
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrollPosition = window.scrollY;
  var headerHeight = header.offsetHeight;

  if (scrollPosition > headerHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the sticky header
    const target = document.querySelector(this.getAttribute('href'));
    const targetPosition = target.offsetTop - headerHeight; // Adjust the target position by subtracting the header height

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.addEventListener("DOMContentLoaded", function () {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});

// window.addEventListener('DOMContentLoaded', () => {
//     const filterButtons = document.querySelectorAll('#filter li');
//     const projectCards = document.querySelectorAll('.card');
  
//     // Filter projects when a filter button is clicked
//     filterButtons.forEach(button => {
//       button.addEventListener('click', () => {
//         const filter = button.dataset.filter;
  
//         // Remove 'active' class from all buttons
//         filterButtons.forEach(btn => btn.classList.remove('active'));
  
//         // Add 'active' class to the clicked button
//         button.classList.add('active');
  
//         // Show/hide project cards based on the filter
//         projectCards.forEach(card => {
//           if (filter === 'all' || card.classList.contains(filter)) {
//             card.style.display = 'block';
//           } else {
//             card.style.display = 'none';
//           }
//         });
//       });
//     })});