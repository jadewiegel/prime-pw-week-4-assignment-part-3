console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const basket = [];

function addItem(item) {
    basket.push(item);
} //end addItem

addItem('butter');
addItem('milk');
console.log('Added item to list', basket);

function itemsList() {
    for (let i = 0; i < basket.length; i++) {
    console.log(basket [i]);
    }
}
itemsList();