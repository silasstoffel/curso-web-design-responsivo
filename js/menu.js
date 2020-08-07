document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".menu-abrir").onclick = () => {
    document.documentElement.classList.add("menu-ativo");
  };

  document.querySelector(".menu-fechar").onclick = () => {
    document.documentElement.classList.remove("menu-ativo");
  };

  document.documentElement.onclick = (event) => {
    if (event.target === document.documentElement) {
      document.documentElement.classList.remove("menu-ativo");
    }
  };
});
