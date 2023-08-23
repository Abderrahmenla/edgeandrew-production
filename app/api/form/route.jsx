import { sendGridFormSubmission } from '../../utils';

export async function POST(req) {
  try {
    const body = await req.json();
    // Get data from the form.
    const data = {
      name: body?.name,
      email: body?.email,
      phone: body?.phone,
      message: body?.message,
    };
    const response = await sendGridFormSubmission(data);

    return new Response(
      JSON.stringify({
        message: 'successfully sent the email',
        statusCode: response[0].statusCode,
      })
    );
  } catch (error) {
    console.log(error);
  }
}
