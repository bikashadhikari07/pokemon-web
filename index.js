const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const text4 = document.getElementById('text4');
const btnget = document.getElementById('btnget');
const textmid =document.getElementById('textmid');
const gen =document.getElementsByClassName('gen');


text1.addEventListener('mouseover', function handleMouseOver() {
    text1.style.color = '#ebcc34';
  });


  text1.addEventListener('mouseout', function handleMouseOut() {
    text1.style.color = 'black';
  });


  text2.addEventListener('mouseover', function handleMouseOver() {
    text2.style.color = '#ebcc34';
  });


  text2.addEventListener('mouseout', function handleMouseOut() {
    text2.style.color = 'black';
  });


  text3.addEventListener('mouseover', function handleMouseOver() {
    text3.style.color = '#ebcc34';
  });


  text3.addEventListener('mouseout', function handleMouseOut() {
    text3.style.color = 'black';
  });


  text4.addEventListener('mouseover', function handleMouseOver() {
    text4.style.color = '#ebcc34';
  });


  text4.addEventListener('mouseout', function handleMouseOut() {
    text4.style.color = 'black';
  });



  btnget.addEventListener('mouseover', function handleMouseOver() {
    btnget.style.backgroundColor='#ebcc34'
    btnget.style.scale='1.5 1'
  });


  btnget.addEventListener('mouseout', function handleMouseOut() {
    btnget.style.backgroundColor='white'
    btnget.style.scale='1 1'
  });


  // textmid.addEventListener('mouseover', function handleMouseOver() {
  //   textmid.style.color = '#ebcc34';
  // });


  // textmid.addEventListener('mouseout', function handleMouseOut() {
  //   textmid.style.color = 'black';
  // });


  gen.addEventListener('mouseover', function handleMouseOver() {
    btnget.style.backgroundColor='#ebcc34'
    gen.style.scale='1.5 1'
  });


  gen.addEventListener('mouseout', function handleMouseOut() {
    gen.style.backgroundColor='white'
    gen.style.scale='1 1'
  });


   

  
