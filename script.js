const buttons = document.querySelectorAll('.add-to-cart');
const listaCompras = document.getElementById('lista-compras');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    const name = product.querySelector('h2').innerText;
    const price = product.querySelector('.price').innerText;
    const image = product.querySelector('img').src;
    if (confirm(`¿Deseas añadir ${name} por ${price} al carrito?`)) {
      const listItem = listaCompras.querySelector(`li[data-producto="${name}"]`);
      if (listItem) {
        const quantity = parseInt(listItem.dataset.cantidad) + 1;
        listItem.dataset.cantidad = quantity;
        listItem.querySelector('.cantidad').innerText = quantity;
      } else {
        const newItem = document.createElement('li');
        newItem.dataset.producto = name;
        newItem.dataset.cantidad = 1;
        newItem.innerHTML = `
          <img src="${image}" alt="${name}" height="50" width="50">
          <span class="nombre">${name}</span>
          <span class="cantidad">1</span>
          <span class="precio">${price}</span>
        `;
        listaCompras.appendChild(newItem);
      }
    }
  });
});
