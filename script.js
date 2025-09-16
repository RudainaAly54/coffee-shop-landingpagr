document.addEventListener('DOMContentLoaded', () => {
  const mainBtn = document.querySelector('#main_btn');
  mainBtn.addEventListener('click', () =>{
    window.location.href = '#products';
  });

const hearts = document.querySelectorAll(".wishlist");
hearts.forEach(heart => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("liked"); 
  });
});


  const orderBtn = document.querySelectorAll('.order_btn');
  orderBtn.forEach(order => {
    order.addEventListener('click', () => {
    order.textContent = '✔ Added!';
      order.disabled = true;
      setTimeout(() => {
        order.textContent = 'Order Now';
        order.disabled = false;
      }, 1500);
    });
  });

  const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
    const msg = document.createElement('p');
    msg.textContent = 'Thanks for your subscribe';
   form.appendChild(msg);
    form.reset();
});
});