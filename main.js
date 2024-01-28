require("dotenv").config();
let { SmartAPI } = require("smartapi-javascript");
let smart_api = new SmartAPI({
  api_key: process.env.ANGEL_ONE_API_KEY,
});
const totp = require("totp-generator");

console.log({ secret: process.env.ANGEL_ONE_TOTP_SECRET });

const token = totp(process.env.ANGEL_ONE_TOTP_SECRET);

smart_api
  .generateSession(
    process.env.ANGEL_ONE_USERNAME,
    process.env.ANGEL_ONE_PIN,
    token
  )
  .then((data) => {
    // return smart_api.getProfile();
    //place limit order to buy itc stock
    // return smart_api.placeOrder({
    //   variety: "AMO",
    //   tradingsymbol: "ITC-EQ",
    //   symboltoken: "1660",
    //   transactiontype: "BUY",
    //   exchange: "NSE",
    //   ordertype: "LIMIT",
    //   producttype: "DELIVERY",
    //   duration: "DAY",
    //   price: "459",
    //   quantity: "1",
    // });
    // return smart_api.getOrderBook();
    // return smart_api.cancelOrder({
    //   variety: "AMO",
    //   orderid: "",
    // });
  })
  .then((data) => {
    console.log("Response : ", data);
  })
  .catch((err) => {
    console.log("Error ", err);
  });

// get all tradeable instruments from angel one
// https://margincalculator.angelbroking.com/OpenAPI_File/files/OpenAPIScripMaster.json
