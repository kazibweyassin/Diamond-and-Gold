const testQuoteApi = async () => {
  const payload = {
    type: 'b2b-quote',
    company_name: 'Global Bullion Trading LLC',
    contact_name: 'Sarah Johnson',
    email: 'sarah@example.com',
    phone: '+1 (555) 123-4567',
    target_volume: '20kg+',
    delivery_destination: 'CIF-Dubai',
    kyc_status: 'ready',
  };

  console.log('Submitting quote payload to /api/contact...');
  const response = await fetch('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const text = await response.text();
  console.log('Status:', response.status);
  console.log('Body:', text);
};

testQuoteApi().catch((error) => {
  console.error('Request failed:', error);
  process.exit(1);
});
