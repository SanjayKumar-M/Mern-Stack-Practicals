import Express from "express";

const router = express.Router();


router.get('/about', (req, res) => {
  res.send('This is the About page');
});

export default router;