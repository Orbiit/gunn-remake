window.addEventListener("load",e=>{ // ensure everything is loaded so I get to manipulate HTML
  function classToggle(element,className) {
    // toggles if an element has a class or not
    element.classList.contains(className)?element.classList.remove(className):element.classList.add(className);
  }
  var navMenuBtn=document.querySelector('.navigation .menu'); // get references to HTML elements
  navMenuBtn.addEventListener("click",e=>{
    classToggle(document.body,'showNavLinks');
  },false);
},false);
