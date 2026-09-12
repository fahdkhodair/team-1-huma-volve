const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const connectDB = require("./config/db");
const aiRoutes = require("./routes/aiRoutes");
const projectMemberRoutes = require("./routes/projectmember");
const projectRoutes = require("./routes/project");
const errorMiddleware = require("./middleware/errorMiddleware");
const swaggerDocument = swaggerJsDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Huma Volve API",
      version: "1.0.0",
      description: "API documentation for Huma Volve"
    }
  },
  apis: ["./src/routes/*.js"]
});
const app = express();
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running"
  });
});

// AI Routes
app.use("/api/ai", aiRoutes);

// Project Member Routes
app.use("/api/projects", projectMemberRoutes);

// Project Routes
app.use("/api/projects", projectRoutes);

// Global Error Middleware
app.use(errorMiddleware);

module.exports = app;