let shoppingItems = ["milk","eggs","bread"];
// let listElement = document.getElementById("shopping-list-items");

// shoppingItems.forEach((item)=> {
//     console.log(item);
//     let itemElement = document.createElement("li");
//     itemElement.innerText = item;
//     listElement.appendChild(itemElement);
// });

function updateItems(){
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";
    shoppingItems.forEach((item)=> {
        let itemElement = document.createElement("li");
        itemElement.innerText = item;
        listElement.appendChild(itemElement);
    });
}

updateItems();

function addItem() {
    let item = document.getElementById("new-item-text").value;
    shoppingItems.push(item);
    console.log(shoppingItems);
    updateItems();
    item= "";
}

function clearItem() {
    shoppingItems.length=0;
    updateItems()
}

