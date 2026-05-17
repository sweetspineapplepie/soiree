export type SchemaType = 'WebSite' | 'Organization' | 'Product' | 'FAQPage' | 'BreadcrumbList';

export function generateSchema(type: SchemaType, data: any) {
  let schema: any = {
    '@context': 'https://schema.org',
    '@type': type
  };

  if (type === 'Organization') {
    schema = {
      ...schema,
      name: 'SOIRÉE Studio',
      url: 'https://soiree-studio.com',
      logo: 'https://soiree-studio.com/assets/logo.png', // Placeholder
      description: 'Objects of Daily Significance.'
    };
  }

  if (type === 'WebSite') {
    schema = {
      ...schema,
      name: 'SOIRÉE — SUTTON No.01',
      url: 'https://soiree-studio.com',
    };
  }

  if (type === 'Product') {
    schema = {
      ...schema,
      name: data?.name || 'SUTTON No.01',
      image: data?.image || 'https://soiree-studio.com/images/hero/hero-main-desktop.jpg',
      description: data?.description || 'A structured utility work bag designed for your everyday. Limited to 500 pieces.',
      brand: {
        '@type': 'Brand',
        name: 'SOIRÉE'
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/PreOrder',
        price: data?.price || '295.00',
        priceCurrency: 'USD'
      }
    };
  }

  if (type === 'FAQPage') {
    if (data && data.faqs) {
      schema = {
        ...schema,
        mainEntity: data.faqs.map((faq: any) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      };
    } else {
      schema = {
        ...schema,
        mainEntity: [{
          '@type': 'Question',
          name: 'What materials are used in SUTTON No.01?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Premium full-grain leather and structured canvas.'
          }
        }]
      };
    }
  }

  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}
