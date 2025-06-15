
  // Select all navbar links
  const navbarLinks = document.querySelectorAll('.navbar a');

  navbarLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Remove .active from all links
      navbarLinks.forEach(l => l.classList.remove('active'));
      // Add .active only to the clicked link
      this.classList.add('active');
    });
  });

