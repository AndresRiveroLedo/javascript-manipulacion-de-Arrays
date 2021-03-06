//AquÃ­ veremos algunos metodos mutables: push(), slice(),
const products = [
    { title: "Pizza", price: 121, id: "ð" },
    { title: "Burger", price: 121, id: "ð" },
    { title: "Hot cakes", price: 121, id: "ð¥" },
  ];

  const myProducts = [];
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));
  
  //buscamos un producto en products[] y lo aÃ±adimos a myProducts[]
  const productIndex = products.findIndex(item => item.id === 'ð');
  if (productIndex !== -1) {
      myProducts.push(products[productIndex]);
      products.splice(productIndex, 1); //borramos el elemento encontrado
  }
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));
  
  // Update: actualizar
  const productsV2 = [
      { title: "Pizza", price: 121, id: "ð" },
      { title: "Burger", price: 121, id: "ð" },
      { title: "Hot cakes", price: 121, id: "ð¥" },
    ];
  const update = {
      id: "ð¥",
      changes: {
          price: 200,
          description: 'delicioso'
      }
  }
  console.log(productsV2);
  console.log(update);

  const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
  productsV2[productIndexV2] = {
      ...productsV2[productIndexV2],
      ...update.changes,
  };
  console.log(productsV2);