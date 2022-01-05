import * as express from "express";
const router = express.Router();
const axios = require("axios");
require("dotenv").config();
// Have to make this request every 60s
// For future reference, implement Caching strategy
const fetchCryptocurrency = async () => {
  const response: any = await axios({
    url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.CMC_API_KEY}&limit=10`,
    method: "GET",
  });
  return response;
};

router.get(
  "/index",
  async (req: express.Request, res: express.Response): Promise<any> => {
    try {
      const response = await fetchCryptocurrency();
      res.status(200).json(response);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  }
);

router.get("/ping", (req: express.Request, res: express.Response) => {
  res.status(200).json({ msg: "hello" });
});
module.exports = router;
