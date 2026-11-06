// Abre e fecha o menu no celular.
const botao = document.querySelector('.menu-botao');
const menu = document.querySelector('.menu');

function alternarMenu(aberto) {
  menu.classList.toggle('aberto', aberto);
  botao.setAttribute('aria-expanded', aberto);
}

botao.addEventListener('click', () => alternarMenu(!menu.classList.contains('aberto')));

document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape' && menu.classList.contains('aberto')) {
    alternarMenu(false);
    botao.focus();
  }
});

// Revela os blocos aos poucos ao rolar a página.
const semAnimacao = matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !semAnimacao) {
  const observador = new IntersectionObserver((itens) => {
    itens.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.remove('revelar');
        observador.unobserve(item.target);
      }
    });
  }, { rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.cartao, .entidade, .duas-colunas > *').forEach((bloco) => {
    bloco.classList.add('revelar');
    observador.observe(bloco);
  });
}
