fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    const navLinks = document.querySelectorAll('.nav_menu ul li a');
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href').split("/").pop(); 
      if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
        link.classList.add('active');
      }
    });
  })
  .catch(err => console.error("Header load failed:", err));

fetch("footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer").innerHTML = data)
  .catch(err => console.error("Footer load failed:", err));
