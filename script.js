const foodData = [
  {
    unhealthy: "Potato Chips",
    healthy: "Air-popped Popcorn",
    image: "https://www.tasteofhome.com/wp-content/uploads/2025/01/Air-Popped-Popcorn_EXPS_TOHD24_278504_ChristineMa_3.jpg"
  {
    unhealthy: "Soda",
    healthy: "Infused Sparkling Water",
    image: "https://images.unsplash.com/photo-1612198196792-6c60a2f69335"
  },
  {
    unhealthy: "Ice Cream",
    healthy: "Frozen Greek Yogurt",
    image: "https://images.unsplash.com/photo-1615193981175-43bb40b33808"
  },
  {
    unhealthy: "White Bread",
    healthy: "Whole Grain Bread",
    image: "https://images.unsplash.com/photo-1585238342027-b5f5b0a5742e"
  },
  {
    unhealthy: "Candy",
    healthy: "Fruit and Nut Mix",
    image: "https://images.unsplash.com/photo-1570197571499-230b5cce75f0"
  }
];

const grid = document.getElementById('food-grid');

foodData.forEach(item => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <img src="${item.image}" alt="${item.healthy}">
    <div class="card-content">
      <h3>${item.healthy}</h3>
      <p>Swap instead of <strong>${item.unhealthy}</strong></p>
    </div>
  `;

  grid.appendChild(card);
});
