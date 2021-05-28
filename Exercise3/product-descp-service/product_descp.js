module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);


    //To DO: add the pattern functions and describe the logic inside the function
    function productURL(msg, response)
    {
      for (i=0; i<mockData.length; i++)
      {
        if (mockData[i].product_id == msg.productId)
        {
          response(null, {result: mockData[i].product_url});
        }
      }
      response(null, {result: ''});
    }

    function productName(msg, response)
    {
      for (i=0; i<mockData.length; i++)
      {
        if (mockData[i].product_id == msg.productId)
        {
          response(null, {result: mockData[i].product_name});
        }
      }
      response(null, {result: ''});
    }
}
