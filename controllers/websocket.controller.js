const Product = require("./product.controller");

exports.handleWebSocket = (ws, wss) => {
  ws.on("message", async (message) => {
    const { event, data } = JSON.parse(message);

    if (event === "get_products") {
      const products = await Product.findAll();
      ws.send(JSON.stringify({ event: "products", data: products }));
    }

    if (event === "add_product") {
      const { name, description, price, stock } = data;
      const newProduct = await Product.create({
        name,
        description,
        price,
        stock,
      });

      // Broadcast to all clients
      wss.clients.forEach((client) => {
        if (client.readyState === ws.OPEN) {
          client.send(
            JSON.stringify({ event: "product_added", data: newProduct })
          );
        }
      });
    }
  });
};
