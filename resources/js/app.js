"use strict";!function(){var l=!!~location.href.indexOf("localhost")?"http://localhost:9900":"https://jiah-lee.herokuapp.com";function e(e,t,n){var o="";if(n){var s=new Date;s.setTime(s.getTime()+24*n*60*60*1e3),o="; expires="+s.toUTCString()}document.cookie=e+"="+(t||"")+o+"; path=/"}var t={"/en":"en","/ko":"ko"}[location.pathname.replace(/\/$/,"")]||"en",n=(navigator.language||navigator.userLanguage).split("-")[0],o=function(e){var t=("; "+document.cookie).split("; "+e+"=");if(2==t.length)return t.pop().split(";").shift()}("lang");if(n&&!o)return e("lang",n,365),window.location="/"+n;if(e("lang",t,365),"/"===location.pathname&&"en"!==o)return window.location="/"+o;var i=function(e,t,n){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(n,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};i.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var n=this,o=200-100*Math.random();this.isDeleting&&(o/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,o=300):(o=this.period,this.isDeleting=!0),setTimeout(function(){n.tick()},o)},window.onload=function(){for(var e=document.getElementsByClassName("typewrite"),t=0;t<e.length;t++){var n=e[t].getAttribute("data-type"),o=e[t].getAttribute("data-period");n&&new i(e[t],JSON.parse(n),o)}var s=document.createElement("style");s.type="text/css",s.innerHTML=".typewrite > .wrap { border-right: 0.04em solid #fff; }",document.body.appendChild(s)};var s=document.querySelector("#js--nav-icon"),a=document.querySelector(".main-nav--box--triangle-shape"),r=document.querySelector(".main-nav");s.addEventListener("click",function(e){e.preventDefault(),r.classList.contains("open")?(a.classList.remove("open"),r.classList.remove("open"),this.src="resources/assets/svg/icon/nav-open.svg"):(a.classList.add("open"),r.classList.add("open"),this.src="resources/assets/svg/icon/nav-close.svg")},!1);var c=document.getElementById("nav-container"),u=document.getElementById("about"),d=document.getElementById("map"),m=u.offsetTop,p=d.offsetTop,h=!1,f=!1;function g(){var e;window.pageYOffset>m?c.classList.add("sticky"):c.classList.remove("sticky"),!f&&window.pageYOffset>p&&((e=document.createElement("script")).src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCwoUun1nhHQnZljKQmp4nEZP6-uw4L6xM",e.onload=function(){var e=document.getElementById("map"),t={montreal:{lat:45.5081804,lng:-73.57},seoul:{lat:37.5326,lng:127.024612}},n=new google.maps.Map(e,{center:t.seoul,zoom:11.5});new google.maps.Marker({map:n,position:t.seoul,title:"Seoul"})},document.body.appendChild(e),f=!0),!h&&window.pageYOffset>m&&(!function(){var e=document.getElementsByTagName("body")[0],t=document.createElement("script");t.async=!0;var n="IntersectionObserver"in window?"10.9.0":"8.8.0";t.src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/"+n+"/lazyload.min.js",window.lazyLoadOptions={},e.appendChild(t)}(),h=!0)}g();window.addEventListener("scroll",function(){clearTimeout(null),setTimeout(g,200)});var v=document.querySelector(".icon-media--linkedin"),y=document.getElementById("linkedin-outline"),w=document.getElementById("linkedin-inline"),b=document.querySelector(".icon-media--github"),E=document.getElementById("github-outline"),L=document.getElementById("github-inline");v.addEventListener("mouseover",function(){y.style.stroke="#0A278B",w.style.fill="#0A278B"},!1),v.addEventListener("mouseleave",function(){y.style.stroke="#0077B5",w.style.fill="#0077B5"},!1),b.addEventListener("mouseover",function(){E.style.stroke="#EF0320",L.style.fill="#EF0320"},!1),b.addEventListener("mouseleave",function(){E.style.stroke="#FB3C03",L.style.fill="#FB3C03"},!1);var k=document.querySelectorAll(".js--btn-to-sub"),S=document.querySelectorAll(".js--btn-to-main");function T(e){var t=this;e.preventDefault(),document.querySelector(".main--"+this.id).classList.add("fade"),document.querySelector(".sub--"+this.id).classList.add("open");[1,3,4,5].filter(function(e){return e!=t.id}).map(function(e){document.querySelector(".main--"+e).classList.remove("fade"),document.querySelector(".sub--"+e).classList.remove("open")})}function q(e){e.preventDefault(),document.querySelector(".main--"+(this.id-100)).classList.remove("fade"),document.querySelector(".sub--"+(this.id-100)).classList.remove("open")}k.forEach(function(e){return e.addEventListener("click",T,!1)}),S.forEach(function(e){return e.addEventListener("click",q,!1)});var B=document.getElementById("contact-form");B.onsubmit=function(e){e.preventDefault();var t,r,n={name:B.name.value,email:B.email.value,subject:B.subject.value,message:B.message.value};(t=n,r=JSON.stringify(t),new Promise(function(e,t){var n,o,s,i=l+"/api/contact",a=(n="POST",o=i,"withCredentials"in(s=new XMLHttpRequest)?s.open(n,o,!0):"undefined"!=typeof XDomainRequest?(s=new XDomainRequest).open(n,o):s=null,s);a&&(a.onload=function(){200<=this.status&&this.status<300?e(a.response):t(Error(a.statusText))},a.onerror=function(){t(Error("Network Error"))},a.setRequestHeader("Content-type","application/json"),a.send(r))})).then(B.innerHTML='<P class="contact-message">Hello '+B.name.value+", <br/>Your message has been sent.<br/> Thank you &#128420;</P>").then(B.reset()).catch(function(e){B.innerHTML='<P class="contact-message">I am sorry.<br/>Your message has NOT been sent.<br/> Please contact me via <a href="https://www.linkedin.com/in/jiah827/">Linkedin</a>.<br/>Thank you &#128420;</P>'})}}();
//# sourceMappingURL=maps/app.js.map
