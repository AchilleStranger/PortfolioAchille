window.onload = () => {
  // Sélectionne les éléments textuels de la page
  const items = document.querySelectorAll("h1, h2, h3, p, span, .text");

  items.forEach(el => {
    const original = el.textContent.trim(); // stocke le texte original
    el.textContent = ""; // efface le texte pour démarrer l’animation

    let i = 0;

    function typeWriter() {
      if (i < original.length) {
        el.textContent += original.charAt(i); 
        i++;
        setTimeout(typeWriter, 60); // vitesse de l'effet
      }
    }

    typeWriter(); // lance l’animation sur l'élément
  });
  
};

