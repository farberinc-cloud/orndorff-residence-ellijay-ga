// Simple image zoom for plan sheets
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.plan-page img');
  images.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function() {
      if (this.style.transform === 'scale(2)') {
        this.style.transform = 'scale(1)';
        this.style.cursor = 'zoom-in';
        this.style.zIndex = '1';
      } else {
        this.style.transform = 'scale(2)';
        this.style.cursor = 'zoom-out';
        this.style.zIndex = '10';
        this.style.transition = 'transform 0.3s ease';
      }
    });
    // Optional: wheel zoom
    img.addEventListener('wheel', function(e) {
      e.preventDefault();
      let scale = this.style.transform.match(/scale\(([^)]+)\)/);
      let current = scale ? parseFloat(scale[1]) : 1;
      if (e.deltaY < 0) {
        current = Math.min(current + 0.2, 4);
      } else {
        current = Math.max(current - 0.2, 1);
      }
      this.style.transform = `scale(${current})`;
      this.style.transition = 'transform 0.1s';
    });
  });
});
