AOS.init({ once: true, duration: 700, offset: 80 });
  // Back to Top Button
  const backToTop = document.getElementById('backToTop');
  window.onscroll = function() {
    if (window.scrollY > 300) { backToTop.style.display = 'block'; }
    else { backToTop.style.display = 'none'; }
  };
  backToTop.onclick = () => window.scrollTo({top:0,behavior:'smooth'});