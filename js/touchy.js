window.addEventListener("load",e=>{ // ensure everything is loaded so I get to manipulate HTML
  function classToggle(element,className) { // toggles if an element has a class or not
    element.classList.contains(className)?element.classList.remove(className):element.classList.add(className);
  }
  var navMenuBtn=document.querySelector('.navigation > .container > .menu'), // get references to HTML elements
  searchBtn=document.querySelector('.navigation > .container > .search'),
  searchBar=document.querySelector('.navigation > .container > .searchbar');
  navMenuBtn.addEventListener("click",e=>{ // toggle a class for the <body> element when the element is pressed
    classToggle(document.body,'showNavLinks');
    if (document.body.classList.contains('showSearch')) document.body.classList.remove('showSearch');
  },false);
  searchBtn.addEventListener("click",e=>{
    classToggle(document.body,'showSearch');
    if (document.body.classList.contains('showSearch')) searchBar.focus();
    if (document.body.classList.contains('showNavLinks')) document.body.classList.remove('showNavLinks');
  },false);
  document.addEventListener("touchstart",e=>{
    var elem=e.target,s=document.querySelectorAll('.hover');
    for (var e of s) e.classList.remove('hover');
    do elem.classList.add('hover');
    while ((elem=elem.parentNode)!==document.body) // is there supposed to be a semicolon here?
  },false);
},false);
