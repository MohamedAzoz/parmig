// function lft(x){
//     x.classlist.add("lft");
// }
// function cent(x){
//     x.classlist.add("cent");
// }
// function rit(x){
//     x.classlist.add("rit");
// }


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >=200 &&
      rect.right >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  window.addEventListener('scroll', function() {
    var iconsl = document.querySelectorAll('.disl');
    
    iconsl.forEach(function(icon) {
      if (isInViewport(icon)) {
        icon.classList.add("showl");
      }
    });
  });

function isright(e) {
    const rect = e.getBoundingClientRect();
    return (
      rect.top >=200 &&
      rect.right >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  window.addEventListener('scroll', function() {
    var iconsr = document.querySelectorAll('.disr');
    
    iconsr.forEach(function(icon) {
      if (isright(icon)) {
        icon.classList.add('showr');
      }
    });
  });
function iscent(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >=200 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  window.addEventListener('scroll', function() {
    var iconsc = document.querySelectorAll('.disc');
    
    iconsc.forEach(function(icon) {
      if (iscent(icon)) {
        icon.classList.add('showc');
      }
    });
  });
  