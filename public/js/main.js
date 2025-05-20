fetch('/products')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('product-list');
    data.forEach(product => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${product.name}</h3>
        <img src="${product.image}" width="100"/>
        <p>${product.price.toLocaleString()} VND</p>
      `;
      list.appendChild(div);
    });
  });
div.innerHTML = `
  <h3>${product.name}</h3>
  <img src="${product.image}" width="100"/>
  <p>${product.price.toLocaleString()} VND</p>
  <button onclick='addToCart(${JSON.stringify(product)})'>Thêm vào giỏ</button>
`;

window.addToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Đã thêm vào giỏ!');
};
