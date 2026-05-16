// Direct Resend API Test
import fetch from 'node-fetch';

const testDirectEmail = async () => {
  const resendApiKey = 're_TSA3tEw6_GLqbHM1jmL7fuHvyVjS8hBL1';
  const recipientEmail = 'diamondcapitalafrica@gmail.com';

  const emailPayload = {
    from: 'noreply@diamondcapitalafrica.com',
    to: recipientEmail,
    subject: 'Test Email from Diamond Capital Africa - B2B Quote System',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fdfbf7;">
        <div style="background-color: #1c160a; color: #faf7f0; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h1 style="margin: 0; font-size: 24px;">Test Email - B2B Quote System</h1>
          <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">Diamond Capital Africa</p>
        </div>

        <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e8e0d0;">
          <h2 style="color: #1c160a; margin-top: 0;">✅ Email System Working!</h2>
          
          <p style="color: #555; line-height: 1.6;">
            This is a test email to verify that the Resend email integration is working correctly for the B2B quote system.
          </p>

          <div style="background-color: #f5f0e6; padding: 15px; border-left: 4px solid #B58A0A; margin: 20px 0; border-radius: 4px;">
            <h3 style="color: #B58A0A; margin-top: 0;">Test Details</h3>
            <ul style="color: #555; margin: 10px 0; padding-left: 20px;">
              <li><strong>API:</strong> Resend Email Service</li>
              <li><strong>From:</strong> noreply@diamondcapitalafrica.com</li>
              <li><strong>To:</strong> diamondcapitalafrica@gmail.com</li>
              <li><strong>Status:</strong> ✅ Successfully Sent</li>
              <li><strong>Timestamp:</strong> ${new Date().toISOString()}</li>
            </ul>
          </div>

          <h3 style="color: #1c160a; margin-top: 30px;">What This Means</h3>
          <p style="color: #555; line-height: 1.6;">
            Your B2B quote form will now successfully send email notifications when customers submit quote requests from the /request-quote page.
          </p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e8e0d0; color: #999; font-size: 12px;">
            <p style="margin: 0;">Diamond Capital Africa • Kampala, Uganda</p>
            <p style="margin: 5px 0 0 0;">Institutional Gold Trading & Compliance Documentation</p>
          </div>
        </div>
      </div>
    `,
  };

  console.log('📧 Sending test email via Resend API...\n');
  console.log(`To: ${recipientEmail}`);
  console.log(`Subject: ${emailPayload.subject}\n`);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    const data = await response.json();

    if (response.ok && data.id) {
      console.log('✅ SUCCESS! Email sent successfully\n');
      console.log(`Email ID: ${data.id}`);
      console.log(`Recipient: ${recipientEmail}`);
      console.log(`Sent at: ${new Date().toLocaleString()}\n`);
      console.log('📨 Check diamondcapitalafrica@gmail.com in 1-2 seconds');
      process.exit(0);
    } else {
      console.log('❌ FAILED to send email\n');
      console.log('Response:', JSON.stringify(data, null, 2));
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    process.exit(1);
  }
};

testDirectEmail();
