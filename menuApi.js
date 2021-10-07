const express = require('express')
const app = express();
const { menu } = require('./menu')

app
  .get('/', (req, res) => {
    const names = menu.map( (item) => item.title)
    res.json({ Items: names, Categories: [...new Set(menu.map( (item) => item.category))] , message: 'Found'})
  })
  .get('/api/id/:id', (req, res) => {
    const singleItem = menu.find( (item) => item.id == req.params.id)
    if(!singleItem){
      return res.status(404).json({results: [], message: 'Not Found'})
    }
    res.json({results: [singleItem], message: 'Found'})
  })
  .get('/api/query', (req, res) => {
    const { category, dir } = req.query;
    let sortedItems = [...menu];
    if(category){
      sortedItems = sortedItems.filter( (item) => item.category === category)
    }
    if(dir === 'asc') sortedItems.sort( (a, b) => a.price - b.price)
    if(dir === 'dec') sortedItems.sort( (a, b) => b.price - a.price)

    if(sortedItems.length < 1) return res.status(404).json({results: [], message: 'Not Found'})
    res.json({ results: sortedItems, message: 'Found'})
  })
  .all('*', (req, res) => {
    res.status(404).send('<h1> Error 404 </h1>')
  })
  .listen(3000, () => {
    console.log('Server is listening on port 3000');
  })