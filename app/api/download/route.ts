import { NextRequest, NextResponse } from 'next/server';
import jsPDF from 'jspdf';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const file = searchParams.get('file');

  if (!file) {
    return NextResponse.json({ error: 'No file specified' }, { status: 400 });
  }

  try {
    let pdfBuffer: Buffer;

    switch (file) {
      case 'Victoria_Gold_Spec_Sheet.pdf':
        pdfBuffer = generateSpecSheet();
        break;
      case 'Victoria_Gold_Pricing.pdf':
        pdfBuffer = generatePricingList();
        break;
      case 'Victoria_Gold_Compliance.pdf':
        pdfBuffer = generateComplianceGuide();
        break;
      default:
        return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    const pdfUint8Array = new Uint8Array(pdfBuffer);
    return new NextResponse(pdfUint8Array, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${file}"`,
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}

function generateSpecSheet(): Buffer {
  const doc = new jsPDF({ format: 'a4', orientation: 'portrait' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPos = 20;

  // Colors
  const goldColor = [251, 191, 36] as const; // #fbbf24
  const darkColor = [11, 17, 22] as const; // #0b1116
  const textColor = [226, 232, 240] as const; // Light text
  const darkText = [11, 17, 22] as const;

  // Header background
  doc.setFillColor(...darkColor);
  doc.rect(0, 0, pageWidth, 40, 'F');

  // Logo area
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(28);
  doc.setTextColor(...goldColor);
  doc.text('VG', 20, 25);

  // Company name
  doc.setFontSize(12);
  doc.text('VICTORIA GOLD', 40, 20);
  doc.setFontSize(9);
  doc.setTextColor(180, 180, 180);
  doc.text('Premium Certified Gold Supply', 40, 26);

  yPos = 50;

  // Title
  doc.setFontSize(20);
  doc.setTextColor(...darkText);
  doc.setFont('helvetica', 'bold');
  doc.text('PRODUCT SPECIFICATION SHEET', 20, yPos);
  yPos += 10;

  // Contact info bars
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.setFont('helvetica', 'normal');
  doc.text('Location: Kampala, Uganda • Congo', 20, yPos);
  yPos += 5;
  doc.text('Contact: info@victoriagold.ac.ug | +256 (0) 704 833 021', 20, yPos);
  yPos += 12;

  // Section: Product Forms
  doc.setFillColor(...goldColor);
  doc.rect(20, yPos - 5, pageWidth - 40, 7, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...darkColor);
  doc.text('PRODUCT FORMS & SPECIFICATIONS', 22, yPos);
  yPos += 15;

  // Product items
  const products = [
    {
      name: 'GOLD BARS',
      specs: ['Purity: 99.5% - 99.99%', 'Weight: 100g to 1kg', 'Form: Cast ingots', 'Certificate: Assay included'],
    },
    {
      name: 'GOLD COINS',
      specs: ['Purity: 99.99% (24 carat)', 'Weight: 10g, 25g, 50g', 'Finish: Polished', 'Packaging: Protective sleeve'],
    },
    {
      name: 'GOLD DUST',
      specs: ['Purity: 99%+', 'Size: 0.5mm - 2mm', 'Weight: 50g to 500g', 'Packaging: Sealed sachets'],
    },
  ];

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...goldColor);

  for (const product of products) {
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }

    doc.text(product.name, 22, yPos);
    yPos += 6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...darkText);

    for (const spec of product.specs) {
      doc.text(`• ${spec}`, 25, yPos);
      yPos += 5;
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...goldColor);
    yPos += 3;
  }

  yPos += 5;

  // Quality Assurance Section
  doc.setFillColor(...goldColor);
  doc.rect(20, yPos - 5, pageWidth - 40, 7, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...darkColor);
  doc.text('QUALITY ASSURANCE', 22, yPos);
  yPos += 12;

  const qualities = ['✓ Lab-verified purity (XRF testing)', '✓ Independent assay certificates', '✓ Custody chain documentation', '✓ Insurance covered during handling'];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...darkText);

  for (const quality of qualities) {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    doc.text(quality, 25, yPos);
    yPos += 5;
  }

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text('Victoria Gold | Premium Certified Gold from Uganda & Congo', 20, pageHeight - 10);
  doc.text('Document valid as of February 2026 | victoriagold.ac.ug', 20, pageHeight - 5);

  return Buffer.from(doc.output('arraybuffer'));
}

function generatePricingList(): Buffer {
  const doc = new jsPDF({ format: 'a4', orientation: 'portrait' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPos = 20;

  const goldColor = [251, 191, 36] as const;
  const darkColor = [11, 17, 22] as const;
  const darkText = [11, 17, 22] as const;

  // Header
  doc.setFillColor(...darkColor);
  doc.rect(0, 0, pageWidth, 30, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(...goldColor);
  doc.text('VICTORIA GOLD', 20, 20);

  yPos = 45;

  // Title
  doc.setFontSize(18);
  doc.setTextColor(...darkText);
  doc.text('CURRENT PRICE LIST', 20, yPos);
  yPos += 8;

  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.setFont('helvetica', 'normal');
  doc.text('Date: February 4, 2026 | Currency: USD | Valid for 7 days', 20, yPos);
  yPos += 12;

  // Price Table
  const sections = [
    {
      title: 'GOLD BARS (99.5%+)',
      items: [
        ['1kg bars', '$63,500 per kg'],
        ['500g bars', '$63,700 per kg'],
        ['250g bars', '$64,000 per kg'],
        ['100g bars', '$64,200 per kg'],
      ],
    },
    {
      title: 'GOLD COINS (99.99%)',
      items: [
        ['1oz coins', '$2,150 each'],
        ['10oz coins', '$21,200 per set'],
        ['100oz set', '$210,000 per set'],
      ],
    },
    {
      title: 'GOLD DUST (99%+)',
      items: [
        ['Per ounce', '$1,980 - $2,050'],
        ['50g sachet', '$3,190 - $3,300'],
        ['500g bulk', '$31,200 - $32,300'],
      ],
    },
  ];

  for (const section of sections) {
    if (yPos > 240) {
      doc.addPage();
      yPos = 20;
    }

    // Section title
    doc.setFillColor(...goldColor);
    doc.rect(20, yPos - 4, pageWidth - 40, 6, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...darkColor);
    doc.text(section.title, 22, yPos);
    yPos += 10;

    // Items
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(...darkText);

    for (const [item, price] of section.items) {
      doc.text(item, 25, yPos);
      doc.setTextColor(...goldColor);
      doc.setFont('helvetica', 'bold');
      doc.text(price, pageWidth - 50, yPos);
      doc.setTextColor(...darkText);
      doc.setFont('helvetica', 'normal');
      yPos += 6;
    }

    yPos += 5;
  }

  // Volume Discounts
  if (yPos > 240) {
    doc.addPage();
    yPos = 20;
  }

  doc.setFillColor(...goldColor);
  doc.rect(20, yPos - 4, pageWidth - 40, 6, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...darkColor);
  doc.text('VOLUME DISCOUNTS', 22, yPos);
  yPos += 10;

  const discounts = [
    ['50kg - 100kg', '1% discount'],
    ['100kg - 500kg', '3% discount'],
    ['500kg - 1000kg', '5% discount'],
    ['1000kg+', 'Contact for rates'],
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...darkText);

  for (const [volume, discount] of discounts) {
    doc.text(volume, 25, yPos);
    doc.setTextColor(...goldColor);
    doc.setFont('helvetica', 'bold');
    doc.text(discount, pageWidth - 50, yPos);
    doc.setTextColor(...darkText);
    doc.setFont('helvetica', 'normal');
    yPos += 6;
  }

  // Contact section
  yPos += 10;
  doc.setFillColor(240, 240, 240);
  doc.rect(20, yPos - 4, pageWidth - 40, 20, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...darkColor);
  doc.text('CONTACT US FOR CURRENT PRICING', 22, yPos);
  yPos += 8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('Email: info@victoriagold.ac.ug', 25, yPos);
  yPos += 5;
  doc.text('WhatsApp: +256 704 833 021', 25, yPos);
  yPos += 5;
  doc.text('Phone: +256 (0) 704 833 021', 25, yPos);

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text('Prices subject to change. All orders require compliance verification.', 20, pageHeight - 10);

  return Buffer.from(doc.output('arraybuffer'));
}

function generateComplianceGuide(): Buffer {
  const doc = new jsPDF({ format: 'a4', orientation: 'portrait' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPos = 20;

  const goldColor = [251, 191, 36] as const;
  const darkColor = [11, 17, 22] as const;
  const darkText = [11, 17, 22] as const;

  // Header
  doc.setFillColor(...darkColor);
  doc.rect(0, 0, pageWidth, 30, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(...goldColor);
  doc.text('VICTORIA GOLD', 20, 20);

  yPos = 45;

  // Title
  doc.setFontSize(16);
  doc.setTextColor(...darkText);
  doc.text('COMPLIANCE & DOCUMENTATION GUIDE', 20, yPos);
  yPos += 12;

  // Compliance Framework
  doc.setFillColor(...goldColor);
  doc.rect(20, yPos - 4, pageWidth - 40, 6, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...darkColor);
  doc.text('COMPLIANCE FRAMEWORK', 22, yPos);
  yPos += 10;

  const frameworks = [
    '✓ Uganda Geological Survey regulations',
    '✓ Congo ICGLR compliance',
    '✓ UN OECD Due Diligence Guidance',
    '✓ Conflict Minerals Regulation (3TG)',
    '✓ EU Fair Supply Chain requirements',
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...darkText);

  for (const framework of frameworks) {
    doc.text(framework, 25, yPos);
    yPos += 5;
  }

  yPos += 8;

  // Documentation Package
  doc.setFillColor(...goldColor);
  doc.rect(20, yPos - 4, pageWidth - 40, 6, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...darkColor);
  doc.text('DOCUMENTATION PACKAGE INCLUDES', 22, yPos);
  yPos += 10;

  const docs = [
    { title: 'ORIGIN VERIFICATION', items: ['Mining licenses', 'Partner verification', 'Field inspections', 'Custody documentation'] },
    { title: 'ASSAY CERTIFICATION', items: ['XRF testing', 'Lab reports', 'Purity verification', 'Retest available'] },
    { title: 'EXPORT DOCUMENTATION', items: ['Export permits', 'Commercial invoices', 'Packing lists', 'Bills of lading'] },
  ];

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...goldColor);

  for (const docSection of docs) {
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }

    doc.text(docSection.title, 25, yPos);
    yPos += 6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...darkText);

    for (const item of docSection.items) {
      doc.text(`• ${item}`, 28, yPos);
      yPos += 4;
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...goldColor);
    yPos += 2;
  }

  yPos += 5;

  // Timeline
  if (yPos > 240) {
    doc.addPage();
    yPos = 20;
  }

  doc.setFillColor(...goldColor);
  doc.rect(20, yPos - 4, pageWidth - 40, 6, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...darkColor);
  doc.text('PROCESSING TIMELINE', 22, yPos);
  yPos += 10;

  const timelines = [
    ['Standard order', '7-10 business days'],
    ['Expedited order', '3-5 business days'],
    ['Custom forms', '2-3 weeks'],
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...darkText);

  for (const [process, time] of timelines) {
    doc.text(process, 25, yPos);
    doc.setTextColor(...goldColor);
    doc.setFont('helvetica', 'bold');
    doc.text(time, pageWidth - 50, yPos);
    doc.setTextColor(...darkText);
    doc.setFont('helvetica', 'normal');
    yPos += 6;
  }

  // Support section
  yPos += 10;
  doc.setFillColor(240, 240, 240);
  doc.rect(20, yPos - 4, pageWidth - 40, 15, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...darkColor);
  doc.text('COMPLIANCE SUPPORT', 22, yPos);
  yPos += 8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('compliance@victoriagold.ac.ug', 25, yPos);

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text('Full compliance support provided. All documentation digitally + paper copies.', 20, pageHeight - 10);

  return Buffer.from(doc.output('arraybuffer'));
}

