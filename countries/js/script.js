let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var searchValue = document.getElementById("searchInput").value;
  switch (searchValue.toLowerCase()) {
      case 'brunei' || 'bruneidarussalam':
        window.location.href = "brunei_darussalam.html";
        break;
      case 'hong kong' || 'hong kong sar':
        window.location.href = "hong_kong_sar.html";
        break;
      case 'ireland':
        window.location.href = "ireland.html";
      case 'kuwait':
        window.location.href = "kuwait.html";
        break;             
      case 'luxembourg':
        window.location.href = "luxembourg.html";
        break;            
      case 'macao' || 'macao sar':
        window.location.href = "macao_sar.html";
        break;    
      case 'norway':
        window.location.href = "norway.html";
        break;        
      case 'quatar':
        window.location.href = "quatar.html";
        break;        
      case 'singapore.html':
        window.location.href = "singapore.html";
        break;        
      case 'emirates' || 'united arab emirates':
        window.location.href = "united_arab_emirates.html";
        break;
      case 'bernard arnault' || 'arnault':
        window.location.href = "./../celebrities/bernard_arnault.html";
        break;
      case 'bill gates' || 'gates':
        window.location.href = "./../celebrities/bill_gates.html";
        break;
      case 'elon musk' || 'musk':
        window.location.href = "./../celebrities/elon_musk.html";
        break;
      case 'jeff_bezos' || 'bezos':
        window.location.href = "./../celebrities/jeff_bezos.html";
        break;
      case 'larry ellison' || 'ellison':
        window.location.href = "./../celebrities/larry_ellison.html";
        break
      case 'larry page' || 'page':
        window.location.href = "./../celebrities/larry_page.html";
        break;
      case 'mukesh_ambani' || 'ambani':
        window.location.href = "./../celebrities/mukesh_ambani.html";
        break
      case 'sergey brin' || 'brin':
        window.location.href = "./../celebrities/sergey_brin.html";
        break;
      case 'steve ballmer' || 'ballmer':
        window.location.href = "./../celebrities/steve_ballmer.html";
        break
      case 'warren buffett' || 'buffett':
        window.location.href = "./../celebrities/warren_buffett.html";
        break;
      default:
        alert(`Imposible de trouver ${searchValue}`)
        break;
    }
});