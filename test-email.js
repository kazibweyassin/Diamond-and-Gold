// Test B2B Quote Email Submission
const testB2BEmail = async () => {
  const payload = {
    type: 'b2b-quote',
    company_name: 'Global Imports Ltd',
    contact_name: 'Sarah Johnson',
    email: 'sarah@example.com',
    phone: '+1-555-0199',
    target_volume: '20kg+ Institutional',
    delivery_destination: 'CIF Europe',
    kyc_status: 'Ready',
  };

  console.log('🧪 Testing B2B Quote Email Submission\n');
  console.log('📤 Sending payload to /api/contact:');
  console.log(JSON.stringify(payload, null, 2));
  console.log('\n---\n');

  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    console.log(`✅ Response Status: ${response.status}`);
    console.log(`📨 Response Body:`);
    console.log(JSON.stringify(data, null, 2));

    if (response.status === 200 && data.success) {
      console.log('\n✅ SUCCESS! B2B quote form submitted.');
      console.log(`📧 Email should arrive at: diamondcapitalafrica@gmail.com`);
      console.log(`👤 From: ${payload.contact_name} (${payload.email})`);
      console.log(`🏢 Company: ${payload.company_name}`);
      console.log(`📊 Target Volume: ${payload.target_volume}`);
    } else {
      console.log(`\n❌ FAILED: ${data.error}`);
    }
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    console.log('Make sure the dev server is running: npm run dev');
  }
};

testB2BEmail();
