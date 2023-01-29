AOS.init({
  offset: 100,
  anchorPlacement: 'center-center',
});

new simpleParallax(document.querySelector('#top-bg img:nth-child(1)'), { delay: .15 });
new simpleParallax(document.querySelector('#top-bg img:nth-child(2)'), { delay: .3 });
new simpleParallax(document.querySelector('#top-bg img:nth-child(3)'), { delay: .45 });
new simpleParallax(document.querySelectorAll('img.parallax'), { delay: 1, scale: 2 });

document.querySelector('nav button').addEventListener('click', ({ target }) => {
  target.parentElement.classList.toggle('open');
});
