const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3010;

let taxRate = 5;
let discountPercentage = 10;
let loyaltyRate = 2;

//EP: 1
function calulateReturn(boughtAt, marketPrice, quantity) {
  return (marketPrice - boughtAt) * quantity;
}
app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseInt(req.query.quantity);
  res.send(calulateReturn(boughtAt, marketPrice, quantity).toString());
});

//EP: 2
function calulateTotalReturn(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}
app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  res.send(calulateTotalReturn(stock1, stock2, stock3, stock4).toString());
});

//EP: 3
function calulateReturnPercentage(boughtAt, returns) {
  return (returns / boughtAt) * 100;
}
app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  res.send(calulateReturnPercentage(boughtAt, returns).toString());
});

//EP: 4
function calulateTotalReturnPercentage(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}
app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  res.send(
    calulateTotalReturnPercentage(stock1, stock2, stock3, stock4).toString()
  );
});

//EP: 5
function stockStatus(returnPercentage) {
  if (returnPercentage > 0) return 'profit';
  return 'loss';
}
app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  res.send(stockStatus(returnPercentage).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
