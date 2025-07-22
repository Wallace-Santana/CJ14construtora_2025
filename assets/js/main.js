document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("visible");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (event) {

    event.preventDefault();

  
    const seuNumeroWhatsapp = "5571993302174";


    const nome = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const mensagem = document.querySelector('textarea[name="message"]').value;

    
    const textoMensagem = `Olá! Tudo bem?.

*Meu nome é:* ${nome}
*O meu email é :* ${email}
*Tenho interesse em:* ${mensagem}
`;

    const mensagemCodificada = encodeURIComponent(textoMensagem);

    
    const whatsappURL = `https://wa.me/${seuNumeroWhatsapp}?text=${mensagemCodificada}`;

   
    window.open(whatsappURL, "_blank");
  });
});
