const sodaData = [
  { name: "Black Cherry", desc: "Cherry Vanilla", img: "https://halftimebeverage.com/media/catalog/product/cache/5a9ece781d558937ae51db0fc99c94f4/rdi/rdi/loverboy-black-cherry-vanilla-38289_1.png", color: "#f710aa" },
  { name: "Berry Bliss", desc: "Wild Strawberry Mix", img: "https://drinkloverboy.com/cdn/shop/files/strawberry-lemonade_1920x.png?v=1705975712", color: "#E91E63" },
  { name: "Blue Hues", desc: "Blueberry Lemon", img: "https://cdn.shopify.com/s/files/1/0469/9894/5945/files/Loverboy_Spritz_250mlSlimlineCan_Blueberry-FOP.png?v=1739381664", color: "#bd5df5" },
  { name: "Orange Blast", desc: "Orange Basil Dream", img: "https://cdn.shopify.com/s/files/1/0469/9894/5945/files/Loverboy-LIT-Non-Alc2.png?v=1710755794", color: "#FFC107" },
  { name: "Pina Hina", desc: "Pineapple Hibiscus", img: "https://cdn.shopify.com/s/files/1/0469/9894/5945/files/7c1e5a60a48701b8759b8724555618882ed0dfc0-1288x1600_900x1118.png?v=1684512288", color: "#bcce78" },
  { name: "Sparkling Peach", desc: "White Tea Peach Sparkling Hard Tea", img: "https://cdn.shopify.com/s/files/1/0469/9894/5945/files/Loverboy-LIT-Non-Alc2.png?v=1710755794", color: "#f17579" },
  { name: "Half n Half", desc: "Iced tea meets lemonade", img: "https://bevmo.com/cdn/shop/files/59ca8a9d-eb29-4dd5-b369-8cb7d64bce0f-padded.png?v=1719294057", color: "#4da9be" }
];

let currentIndex = 0;
const carousel = document.getElementById('carousel');

// Setup cans
sodaData.forEach((data, i) => {
  const div = document.createElement('div');
  div.className = 'can';
  div.innerHTML = `<img src="${data.img}" alt="${data.name}">`;
  div.onclick = () => { currentIndex = i; update(); };
  carousel.appendChild(div);
});

function update() {
  const cans = document.querySelectorAll('.can');
  const winW = window.innerWidth;
  
  // Dynamic horizontal spread based on screen size
  const xOffset = winW > 768 ? 450 : winW * 0.4;
  const zOffset = -300; // How far the side cans sit back

  cans.forEach((can, i) => {
    let relIndex = i - currentIndex;
    
    // Circular logic to find the shortest path
    if (relIndex > sodaData.length / 2) relIndex -= sodaData.length;
    if (relIndex < -sodaData.length / 2) relIndex += sodaData.length;

    can.classList.toggle('active', i === currentIndex);
    
    if (i === currentIndex) {
      // CENTER CAN
      can.style.transform = `translate3d(0, 0, 450px) rotateY(0deg)`;
      can.style.opacity = 1;
      can.style.filter = `blur(0px)`;
      can.style.zIndex = 100;
      
      // Update UI
      document.getElementById('flavorName').innerText = sodaData[i].name;
      document.getElementById('flavorDesc').innerText = sodaData[i].desc;
      document.getElementById('infoPanel').style.color = sodaData[i].color;
      document.body.style.background = `radial-gradient(circle at center, ${sodaData[i].color}80 0%, #ffffffc7 100%)`;
    } else if (Math.abs(relIndex) === 1 || Math.abs(relIndex) === sodaData.length - 1) {
      // SIDE CANS (The ones right next to center)
      const direction = relIndex > 0 ? 1 : -1;
      can.style.transform = `translate3d(${direction * xOffset}px, 0, ${zOffset}px) scale(0.75) rotateY(${direction * -15}deg)`;
      can.style.opacity = 0.7;
      can.style.filter = `blur(2px)`;
      can.style.zIndex = 10;
    } else {
      // HIDE OTHERS (Far away cans)
      can.style.transform = `translate3d(0, 0, -1000px) scale(0)`;
      can.style.opacity = 0;
      can.style.zIndex = 0;
    }
  });
}

function move(dir) {
  currentIndex = (currentIndex + dir + sodaData.length) % sodaData.length;
  update();
}

// Controls
window.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > 20) move(e.deltaY > 0 ? 1 : -1);
}, { passive: true });

// Touch support
let startX = 0;
window.addEventListener('touchstart', e => startX = e.touches[0].clientX);
window.addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) move(1);
  if (endX - startX > 50) move(-1);
});

update();
window.addEventListener('resize', update);