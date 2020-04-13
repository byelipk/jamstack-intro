exports.handler = function(event, context, callback) {
  console.log("Event", event)
  console.log("Context", context)

  // your server-side functionality
  callback(null, {
    statusCode: 200,
    body: "Hello, World! How are you doing?"
  });
};