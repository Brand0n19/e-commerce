const images = ['../../images/Loobook.png','../../images/7.jpg','../../images/8.jpg','../../images/9.jpg'];
const section = document.getElementById('carousel-hero');
let currentIndex = 0;

function loadImage(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error(`Error loading image: ${url}`));
      image.src = url;
    });
  }
  
  async function changeBackground() {
    const nextIndex = (currentIndex + 1) % images.length;
    try {
      const nextImage = await loadImage(images[nextIndex]);
      console.log('Next Image Loaded:', images[nextIndex]);
      section.style.backgroundImage = `url(${images[nextIndex]})`;
      currentIndex = nextIndex;
    } catch (error) {
      console.error(error.message);

    }
  }

setInterval(changeBackground, 5000);
export default changeBackground;

