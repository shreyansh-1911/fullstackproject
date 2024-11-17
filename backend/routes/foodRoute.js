import express from 'express'
import { addFood, listFood, removeFood } from "../controllers/FoodController.js";
import multer from "multer"

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Define routes
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

// Error handling middleware
foodRouter.use((err, req, res, next) => {
  if (err.code === 'LIMIT_UNEXPECTED_FILE') {
    return res.status(400).send({ message: 'Unexpected file type' });
  }
  return res.status(500).send({ message: 'Internal Server Error' });
});

export default foodRouter;