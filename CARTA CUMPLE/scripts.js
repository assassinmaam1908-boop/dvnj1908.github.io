document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'F12') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
  }
});

function createSunflower() {
  const container = document.getElementById('sunflower-container');
  const sunflower = document.createElement('div');
  sunflower.classList.add('sunflower');

  const size = Math.random() * 20 + 50; // Tamaño entre 50px y 70px
  sunflower.style.width = size + 'px';
  sunflower.style.height = size + 'px';

  sunflower.style.left = Math.random() * window.innerWidth + 'px';
  sunflower.style.top = Math.random() * window.innerHeight + 'px';
  
  // Animaciones aleatorias para que no todos sean iguales
  sunflower.style.animationDuration = 
    (Math.random() * 8 + 15) + 's, ' + // Flotar
    (Math.random() * 4 + 6) + 's, ' +   // Mecer
    (Math.random() * 30 + 20) + 's';    // Girar

  // Diferentes tonos de pétalos
  const petalColors = ["#FFD93B", "#FFC107", "#FFEB3B"];
  const chosenColor = petalColors[Math.floor(Math.random() * petalColors.length)];

  sunflower.innerHTML = `
    <svg viewBox="0 0 100 100" width="${size}" height="${size}">
      <defs>
        <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#4B2E14"/>
          <stop offset="100%" stop-color="#6B4F1D"/>
        </radialGradient>
        <radialGradient id="petalGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${chosenColor}" />
          <stop offset="100%" stop-color="#FFA000" />
        </radialGradient>
      </defs>

      <!-- Pétalos -->
      ${Array.from({ length: 20 }).map((_, i) => `
        <ellipse 
          cx="50" 
          cy="15" 
          rx="6" 
          ry="20" 
          fill="url(#petalGradient)" 
          stroke="#E0A800" 
          stroke-width="0.8"
          transform="rotate(${i * (360/20)} 50 50)"
          opacity="0.9"
        />
      `).join('')}

      <!-- Centro -->
      <circle cx="50" cy="50" r="14" fill="url(#centerGradient)" stroke="#3E2723" stroke-width="2"/>
    </svg>
  `;

  sunflower.addEventListener('click', () => {
    sunflower.classList.add('bounce');
    setTimeout(() => sunflower.classList.remove('bounce'), 600);
  });

  container.appendChild(sunflower);

  setTimeout(() => {
    sunflower.remove();
  }, 25000); // Viven 25 segundos
}

setInterval(createSunflower, 700); // Nuevo girasol cada 0.7s
