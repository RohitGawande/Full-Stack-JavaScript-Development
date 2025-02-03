class ShoppingCart {
    constructor() {
      this.cart = [];
    }
  
    // Add item to the cart
    addItem(itemName) {
      const item = availableItems.find(product => product.name === itemName);
      if (item) {
        this.cart.push(item);
        console.log(`Added ${itemName} to the cart.`);
      } else {
        console.log(`${itemName} is not available.`);
      }
    }
  
    // Calculate total cart price
    calculateTotal() {
      return this.cart.reduce((acc, item) => acc + item.price, 0);
    }
  
    // Filter available items by price
    filterAvailableItems(maxPrice) {
      return availableItems.filter(item => item.price <= maxPrice);
    }
  
    // Display cart items
    displayCart() {
      this.cart.forEach(item => console.log(`${item.name}: $${item.price}`));
      console.log(`Total Price: $${this.calculateTotal()}`);
    }
  }
  
  // Usage Example
  const myCart = new ShoppingCart();
  myCart.addItem("Phone");
  myCart.addItem("Laptop");
  myCart.displayCart();
  
  const affordableItems = myCart.filterAvailableItems(500);
  console.log("Items under $500:", affordableItems);
  