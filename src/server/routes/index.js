import express from "express";
import cards from '../db/queries/cards'
import customers from '../db/queries/customers'


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
router.get("/cards/:code?", async (req, res, next) => {
  try{
      let {code} = req.params;
     
      let imageURL = await cards.getCalendarCards(code);
      
    res.status(200).json(imageURL);
  } catch (error) {
      next(error);
  }
});
router.get("/cards/:code?", async (req, res, next) => {
  try{
      let {code} = req.params;
     
      let imageURL = await cards.getHolidayCards(code);
      
    res.status(200).json(imageURL);
  } catch (error) {
      next(error);
  }
});
router.post("/insert", async (req,res,next) => {
  try{
    let response = await customers.insertCustomer(req.body)
    res.json(response); 
  }catch(error){
    next(error);
  }

  
  
});



export default router;
