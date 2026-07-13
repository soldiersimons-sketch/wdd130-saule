const button=document.querySelector('.menu-btn');const nav=document.querySelector('.nav');
if(button&&nav){button.addEventListener('click',()=>{nav.classList.toggle('open');button.setAttribute('aria-expanded',nav.classList.contains('open'))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
