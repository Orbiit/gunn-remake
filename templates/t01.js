window.addEventListener("load",e=>{ // ensure everything is loaded so I get to manipulate HTML
  function classToggle(element,className) {
    // toggles if an element has a class or not
    element.classList.contains(className)?element.classList.remove(className):element.classList.add(className);
  }
  var navMenuBtn=document.querySelector('.navigation > .menu'), // get references to HTML elements
  searchBtn=document.querySelector('.navigation > .search');
  navMenuBtn.addEventListener("click",e=>{ // toggle a class for the <body> element when the element is pressed
    classToggle(document.body,'showNavLinks');
  },false);
  searchBtn.addEventListener("click",e=>{
    classToggle(document.body,'showSearch');
  },false);
},false);
