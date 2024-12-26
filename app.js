const express = require("express");
const http = require("http");
const { WebSocketServer } = require("ws");
const bodyParser = require("body-parser");

const app = express();
const server = http.createServer(app);

// Middleware
app.use(bodyParser.json());

// REST API
app.use("/api", productRoutes);

// WebSocket
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("WebSocket client connected");
  websocketController.handleWebSocket(ws, wss);

  ws.on("close", () => {
    console.log("WebSocket client disconnected");
  });
});

// Start server
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
