const express = require('express');
const app = express();

class Fruit {
  constructor(id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}
const fruits = [
  new Fruit(1, 'Apple', 'Red'),
  new Fruit(2, 'Banana', 'Yellow'),
  new Fruit(3, 'Orange', 'Orange'),
  new Fruit(4, 'Grape', 'Purple'),
  new Fruit(5, 'Kiwi', 'Green')
];

app.get('/fruits', (req, res) => {
  sortedFruits = fruits.sort((a, b) => {
    if (a.color.toUpperCase() < b.color.toUpperCase()) return -1;
    if (a.color.toUpperCase() > b.color.toUpperCase()) return 1;
    return 0;
  });
  res.json(sortedFruits);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

