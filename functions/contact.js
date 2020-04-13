exports.handler = function(event, context, callback) {
  const params = JSON.parse(event.body) || {}

  let status = null
  let payload = null

  if (params.body && params.body === "error") {
    status = "error"
    payload = {
      message: "There was a problem sending your message. Please try again."
    }
  } else {
    status = "success"
    payload = {
      message: "Great job! You did some awesome work and we're proud of you."
    }
  }

  // your server-side functionality
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ status, payload, })
  });
};
