'use strict';

module.exports.hello = (event, context, callback) => {
  if (event.body !== null)
  {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        text: 'Go Serverless v1.0! Your function executed successfully!',
        attachments: [
          {
            title: "Event",
            text: event
          },
          {
            title: "Context",
            text: context
          }
        ]
      }),
    };

    callback(null, response);
  } else {
    callback(null, "No body specified");
  };
};
