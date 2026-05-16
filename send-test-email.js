// Direct Resend API Test - Using fetch (Node 18+)
const testDirectEmail = async () => {
  const resendApiKey = 're_TSA3tEw6_GLqbHM1jmL7fuHvyVjS8hBL1';
  const recipientEmail = 'diamondcapitalafrica@gmail.com';

  const emailPayload = {
    from: 'onboarding@resend.dev',
    to: recipientEmail,
    subject: 'Test Email - B2B Quote System Ready',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #1c160a; color: #faf7f0; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h1 style="margin: 0; font-size: 24px;">✅ Email System Working!</h1>
          <p style="margin: 10px 0 0 0; font-size: 14px;">Diamond Capital Africa B2B System</p>
        </div>

        <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e8e0d0;">
          <p style="color: #555; line-height: 1.6;">
            This test email confirms that the Resend email integration is working correctly.
          </p>

          <div style="background-color: #f5f0e6; padding: 15px; border-left: 4px solid #B58A0A; margin: 20px 0;">
            <h3 style="color: #B58A0A; margin-top: 0; margin-bottom: 10px;">System Status</h3>
            <ul style="color: #555; margin: 0; padding-left: 20px;">
              <li>✅ Resend API: Connected</li>
              <li>✅ Email Service: Active</li>
              <li>✅ B2B Quote Form: Ready</li>
              <li>✅ Customer notifications: Enabled</li>
            </ul>
          </div>

          <h3 style="color: #1c160a;">Next Steps</h3>
          <p style="color: #555; line-height: 1.6;">
            Customers can now submit B2B quote requests at /request-quote and you'll receive notifications at this email address.
          </p>

          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e8e0d0; color: #999; font-size: 12px;">
            <p>Sent: ${new Date().toISOString()}</p>
          </div>
        </div>
      </div>
    `,
  };

  console.log('📧 Sending test email via Resend...\n');

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
      console.log('✅ SUCCESS!\n');
      console.log('Email Details:');
      console.log('  • ID:', data.id);
      console.log('  • To:', recipientEmail);
      console.log('  • Subject:', emailPayload.subject);
      console.log('  • Sent:', new Date().toLocaleString());
      console.log('\n📨 Check diamondcapitalafrica@gmail.com now');
    } else {
      console.log('❌ Error:', data.message || 'Unknown error');
      console.log('Response:', JSON.stringify(data, null, 2));
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
};

testDirectEmail();
