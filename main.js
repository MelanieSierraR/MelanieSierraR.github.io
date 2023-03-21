let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web y escribo artículos sobre mis estudios como Ingeniera en Tecnologias del Software.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
