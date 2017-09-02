window.addEventListener("load",e=>{
  var navlinks=[
    {
      text:"Students",
      links:[
        {
          text:"Schoology",
          href:"https://pausd.schoology.com/home"
        }
      ]
    },{
      text:"Parents",
      href:"#"
    },{
      text:"Staff",
      href:"#"
    },{
      text:"Programs",
      href:"#"
    },{
      text:"Academics",
      href:"#"
    },{
      text:"School",
      href:"#"
    }
  ],
  footerlinks=[
    {
      heading:"The pain",
      links:[
        {
          text:"Somewhere",
          href:"#"
        },{
          text:"Anywhere",
          href:"#"
        }
      ]
    },{
      heading:"La Doloro",
      links:[
        {
          text:"Ie",
          href:"#"
        },{
          text:"Ie ajn",
          href:"#"
        }
      ]
    }
  ];
  var navbar=document.querySelector('.navigation .container ul'),
  footer=document.querySelector('.footer .container'),
  t=document.createDocumentFragment();
  for (var link of navlinks) {
    var li=document.createElement("li"),
    linkelem=document.createElement("a"),
    ul;
    if (link.href) linkelem.href=link.href;
    linkelem.appendChild(document.createTextNode(link.text));
    li.appendChild(linkelem);
    if (link.links) {
      ul=document.createElement("ul");
      for (var sublink of link.links) {
        var sli=document.createElement("li"),
        slinkelem=document.createElement("a");
        if (sublink.href) slinkelem.href=sublink.href;
        slinkelem.appendChild(document.createTextNode(sublink.text));
        sli.appendChild(slinkelem);
        ul.appendChild(sli);
      }
      li.appendChild(ul);
    }
    t.appendChild(li);
  }
  navbar.appendChild(t);
  t=document.createDocumentFragment();
  for (var section of footerlinks) {
    var div=document.createElement("div"),
    strong=document.createElement("strong");
    strong.appendChild(document.createTextNode(section.heading));
    div.appendChild(strong);
    for (var link of section.links) {
      var a=document.createElement("a");
      a.href=link.href;
      a.appendChild(document.createTextNode(link.text));
      div.appendChild(a);
    }
    t.appendChild(div);
  }
  footer.appendChild(t);
},false);
