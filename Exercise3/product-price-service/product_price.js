module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
    this.add('role:Product,cmd:getProductPrice', productPrice)

    //To DO: add the pattern functions and describe the logic inside the function
    function productPrice(msg, response)
    {
      for (i=0; i<mockData.length; i++)
      {
        if (mockData[i].product_id == msg.productId)
        {
          response(null, {result: mockData[i].product_price});
        }
      }
      response(null, {result: 0.0});
    }
}
