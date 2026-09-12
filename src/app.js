const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const aiRoutes = require("./routes/aiRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

const errorMiddleware = require("./middleware/errorMiddleware");

const swaggerDocument = YAML.load("./swagger.yaml");

const app = express();

app.use(cors());
app.use(express.json());

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
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);
// Global Error Middleware
app.use(errorMiddleware);

module.exports = app;