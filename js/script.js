AOS.init({
  easing: 'ease-in-sine'
});

new simpleParallax(document.querySelector('#top-bg img:nth-child(1)'), { delay: .15 });
new simpleParallax(document.querySelector('#top-bg img:nth-child(2)'), { delay: .3 });
new simpleParallax(document.querySelector('#top-bg img:nth-child(3)'), { delay: .45 });

document.querySelector('nav button').addEventListener('click', ({ target }) => {
  target.parentElement.classList.toggle('open');
});

/*
document.addEventListener('scroll', function (e) {
  console.log(e);
});
*/
