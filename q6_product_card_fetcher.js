"use strict";
// Q6 – E-Commerce Dashboard: Product Card Fetcher
// Fetch products from https://fakestoreapi.com/products and log Title, Price, Image URL

async function fetchProducts() {
  console.log('--- Q6 Product Card Fetcher ---');
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const products = await res.json();
    products.forEach(p => {
      console.log(`Product: ${p.title}`);
      console.log(`Price: $${p.price}`);
      console.log(`Image: ${p.image}\n`);
    });

    // Bonus: attempt to create DOM cards if running in a browser
    if (typeof document !== 'undefined') {
      const container = document.createElement('div');
      container.id = 'product-cards';
      products.forEach(p => {
        const card = document.createElement('div');
        card.style.border = '1px solid #ccc';
        card.style.padding = '8px';
        card.style.margin = '4px';
        const title = document.createElement('h4'); title.textContent = p.title;
        const price = document.createElement('p'); price.textContent = `$${p.price}`;
        const img = document.createElement('img'); img.src = p.image; img.style.width = '100px';
        card.appendChild(title); card.appendChild(price); card.appendChild(img);
        container.appendChild(card);
      });
      document.body.appendChild(container);
    }
  } catch (err) {
    console.log('Failed to load products. Please try again.', err && err.message);
  }
}

// Run fetchProducts if `fetch` is available; in Node 18+ fetch exists.
if (typeof fetch !== 'undefined') {
  fetchProducts();
} else {
  console.log('fetch not available in this environment. Run in browser or Node 18+.');
}
