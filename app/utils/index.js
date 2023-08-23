import sendgrid from '@sendgrid/mail';
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function fetchGraphQL(query) {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      }
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function sendGridFormSubmission(data) {
  try {
    const sentEmail = await sendgrid.send({
      to: 'support@edgeperformance.io', // Your email where you'll receive emails
      from: 'support@edgeperformance.io', // your website email address here
      subject: 'Edge Andrew Website Email ',
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html lang="en">
            <head>
              <meta charset="utf-8">
            
              <title>The HTML5 Herald</title>
              <meta name="description" content="The HTML5 Herald">
              <meta name="author" content="SitePoint">
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
            
              <link rel="stylesheet" href="css/styles.css?v=1.0">
            
            </head>
            
            <body>
              <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                    </div>
                    <div class="container" style="margin-left: 20px;margin-right: 20px;">
                    <h3>You've got a new mail from ${data.name}, their email is: ✉️${data.email} </h3>
                    <span>with a phone number :  ${data.phone} </span>
                    <div style="font-size: 16px;">
                    <p>Message:</p>
                    <p>${data.message}</p>
                    <br>
                    </div>
                    </div>
            </body>
            </html>`,
    });
    return sentEmail;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export { sendGridFormSubmission, fetchGraphQL };
