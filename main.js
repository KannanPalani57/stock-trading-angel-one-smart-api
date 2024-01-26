require("dotenv").config()
let { SmartAPI } = require('smartapi-javascript');
let smart_api = new SmartAPI({
	api_key: process.env.ANGEL_ONE_API_KEY, 
});

smart_api
	.generateSession(process.env.ANGEL_ONE_USERNAME, process.env.ANGEL_ONE_PIN, process.env.ANGEL_ONE_SECRET_TOTP)
	.then((data) => {
		// return smart_api.getProfile();


        //place limit order to buy itc stock 
        return smart_api.placeOrder({
		    "variety": "AMO",
		    "tradingsymbol": "ITC-EQ",
		    "symboltoken": "1660",
		    "transactiontype": "BUY",
		    "exchange": "NSE",
		    "ordertype": "LIMIT",
		    "producttype": "DELIVERY",
		    "duration": "DAY",
		    "price": "459",
		    "quantity": "1"
		})


    }).then(data => {
        console.log("Response : ", data)
    }).catch(err => {
        console.log("Error ", err)
    })


 
// get all tradeable instruments from angel one 
// https://margincalculator.angelbroking.com/OpenAPI_File/files/OpenAPIScripMaster.json    