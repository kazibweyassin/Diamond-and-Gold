// Test script for B2B quote form submission
// Run with: npx ts-node scripts/test-b2b-form.ts

const testB2BSubmission = async () => {
  const payload = {
    type: 'b2b-quote',
    company_name: 'Global Imports Ltd',
    contact_name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    target_volume: '20kg+ Institutional',
    delivery_destination: 'CIF Europe',
    kyc_status: 'Ready',
  };

  console.log('Testing B2B Quote Form Submission...');
  console.log('Payload:', JSON.stringify(payload, null, 2));
  console.log('');

  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    console.log('Response Status:', response.status);
    console.log('Response Body:', JSON.stringify(data, null, 2));
    console.log('');

    if (response.status === 200 && data.success) {
      console.log('✅ Test PASSED: Form submitted successfully');
      console.log('📧 Email should arrive at:', process.env.CONTACT_EMAIL);
      console.log('💾 Check Supabase b2b_quotes table for the record');
    } else {
      console.log('❌ Test FAILED:', data.error || 'Unknown error');
    }
  } catch (error) {
    console.error('❌ Error:', error);
  }
};

testB2BSubmission();
