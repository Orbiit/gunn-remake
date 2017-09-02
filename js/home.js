window.addEventListener("load",e=>{
  var canvas=document.querySelector('.naturetransition'),
  c=canvas.getContext('2d'),
  backimg=document.querySelector('.natureback'),
  imagesel=document.querySelector('.imageselect'),
  tocontent=document.querySelector('.scrolldown'),
  images=[
    "https://images.unsplash.com/reserve/yapfjxRqy2d2rGRNc2yQ_zavrsnica-9-indie.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=e69698de60f5688845748eb6579cf59a",
    "https://images.unsplash.com/photo-1467173572719-f14b9fb86e5f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=ad26590bd0d6a0165892fb6485976020",
    "https://images.unsplash.com/37/IHLjdHdzSvi0rgUMMlSK_TE3_0286.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=c5ccdbe2d0d2fa436724e2366f32661c",
    "https://images.unsplash.com/reserve/m6rT4MYFQ7CT8j9m2AEC_JakeGivens%20-%20Sunset%20in%20the%20Park.JPG?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=4ab7d1b6931e19fa21a31b71ed3fbbcb"
  ], // https://source.unsplash.com/featured/1600x900/?nature
  DEFAULT_IMAGE=3,
  animating=false,
  currentimage=DEFAULT_IMAGE,
  animatingscroll=false,
  autochangeinterval;
  backimg.addEventListener("load",e=>{
    document.body.classList.remove('natureloading');
    document.body.classList.add('natureanimation');
    var t;
    if (t=document.querySelector('.imageselect li.active')) t.classList.remove('active');
    imagesel.children[currentimage].classList.add('active');
    animating=true;
    setTimeout(()=>{
      document.body.classList.remove('natureanimation');
      c.clearRect(0,0,canvas.width,canvas.height);
      c.drawImage(backimg,0,0);
      animating=false;
    },550);
  },false);
  c.fillStyle='#333';
  c.fillRect(0,0,canvas.width,canvas.height);
  var t=document.createDocumentFragment();
  for (var i=0;i<images.length;i++) {
    var s=document.createElement("li");
    s.dataset.src=i;
    t.appendChild(s);
  }
  imagesel.appendChild(t);
  backimg.src=images[currentimage];
  document.body.classList.add('natureloading');
  imagesel.addEventListener("click",e=>{
    if (!animating&&e.target.tagName==="LI") {
      currentimage=+e.target.dataset.src;
      backimg.src=images[currentimage];
      document.body.classList.add('natureloading');
      clearInterval(autochangeinterval);
      // autochangeinterval=setInterval(autoChange,10000);
    }
  },false);
  function autoChange() {
    if (!animating) {
      currentimage=(currentimage+1)%images.length;
      backimg.src=images[currentimage];
      document.body.classList.add('natureloading');
    }
  }
  // autochangeinterval=setInterval(autoChange,10000);
  tocontent.addEventListener("click",e=>{
    function scroll() {
      window.scrollBy(0,Math.ceil((window.innerHeight-(window.pageYOffset||document.documentElement.scrollTop))/5));
      if (animatingscroll) {
        if (Math.abs(window.innerHeight-(window.pageYOffset||document.documentElement.scrollTop))>1) window.requestAnimationFrame(scroll);
        else window.scrollTo(0,window.innerHeight);
      }
    }
    animatingscroll=true;
    window.requestAnimationFrame(scroll);
  },false);
  window.addEventListener("wheel",e=>{
    if (animatingscroll) animatingscroll=false;
  },false);
},false);
