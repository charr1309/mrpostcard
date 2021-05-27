import express from "express";
import cards from '../db/queries/cards'


const router = express.Router();

router.get("/test", (req, res, next) => {
  res.json({ msg: "Hello World!" });
});



router.get("/cards/:code?", async (req, res, next) => {
    try{
        let {code} = req.params;
       
        let imageURL = await cards.getRealCards(code);
        
      res.status(200).json(imageURL);
    } catch (error) {
        next(error);
    }
});



export default router;
