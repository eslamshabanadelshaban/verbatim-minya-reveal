export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  duration: number; // in seconds
  narration: string;
  content?: string[];
  tableHeaders?: string[];
  tableData?: string[][];
  swotData?: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
  type: 'cover' | 'agenda' | 'text' | 'table' | 'swot';
  background?: string;
}

export const slideData: Slide[] = [
  {
    id: 0,
    type: 'cover',
    title: 'Welcome to Minya: Lo2ta Store Launch',
    subtitle: 'A Revolutionary E-commerce Platform for Upper Egypt',
    duration: 40,
    narration: 'Welcome to Minya, a historic governorate in Upper Egypt along the Nile River. Today we present the comprehensive marketing plan for Lo2ta Store, an innovative e-commerce platform that will transform how small and medium businesses in Minya reach their customers.',
    background: 'minya-landmarks'
  },
  {
    id: 1,
    type: 'cover',
    title: 'Lo2ta Store: Everything for 100 EGP in Minya',
    subtitle: 'A Comprehensive For‑Profit E‑commerce Platform',
    duration: 40,
    narration: 'Lo2ta Store represents a revolutionary approach to e-commerce in Minya. With our fixed-price model of 100 EGP per item, we make online shopping simple, transparent, and accessible to every family in our community.',
    background: 'ecommerce-minya'
  },
  {
    id: 2,
    type: 'agenda',
    title: 'Lo2ta Store Marketing Plan 2025–2026',
    subtitle: 'Presentation Agenda',
    duration: 40,
    narration: 'Our comprehensive marketing plan covers ten essential areas: Executive Summary, Business Overview, Products and Services, SWOT Analysis, Market Analysis, Marketing Strategy, Financial Plan, Monitoring and Evaluation, Appendices, and our innovative Gorilla Marketing approach.',
    content: [
      'Executive Summary',
      'Business Overview',
      'Products & Services',
      'SWOT Analysis',
      'Market Analysis',
      'Marketing Strategy',
      'Financial Plan',
      'Monitoring & Evaluation',
      'Appendices',
      'Gorilla Marketing Cover'
    ]
  },
  {
    id: 3,
    type: 'text',
    title: 'Executive Summary',
    duration: 30,
    narration: 'Lo2ta Store is a for‑profit e‑commerce platform aggregating small and medium shops in Minya Governorate. Our fixed‑price model sources products at 90 EGP and sells at 100 EGP, ensuring a 10 EGP margin per item.',
    content: [
      'Lo2ta Store is a for‑profit e‑commerce platform aggregating small and medium shops in Minya Governorate. Our fixed‑price model sources products at 90 EGP and sells at 100 EGP, ensuring a 10 EGP margin per item.',
      'We plan to onboard 150 shops, achieve 30,000 transactions (AOV = 1.2 items), and reach 15,000 active users within the first year, targeting families, university students, and youth aged 19–35.'
    ]
  },
  {
    id: 4,
    type: 'text',
    title: 'Business Overview',
    duration: 30,
    narration: 'Our business overview covers company information including our structure as a Limited Liability Company based in Minya Governorate, our vision to transform every small shop into a thriving digital business, and our mission to provide a seamless platform.',
    content: [
      '2.1 Company Information:',
      'Business Name: Lo2ta Store',
      'Business Structure: Limited Liability Company',
      'Headquarters: Minya Governorate, Egypt',
      'Operation Start: October 2025',
      'Founders: Lo2ta Store Team',
      '',
      '2.2 Vision & Mission:',
      'Vision: To transform every small shop in Minya into a thriving digital business.',
      'Mission: To provide a seamless, secure platform that empowers vendors and offers customers reliable, affordable shopping.'
    ]
  },
  {
    id: 5,
    type: 'table',
    title: 'Products & Services',
    duration: 30,
    narration: 'Our product categories include food from restaurants and bakeries, clothing and accessories, household items, gifts and crafts, and simple cosmetics. All items follow our fixed-price model with consistent margins.',
    tableHeaders: ['Category', 'Cost Price', 'Sale Price', 'Margin', 'Monthly Demand Estimate (per store)', 'Description'],
    tableData: [
      ['Food (Restaurants, Bakery)', '90 EGP', '100 EGP', '10 EGP', '2,000', 'Prepared meals, bread, sweets'],
      ['Clothing & Accessories', '90 EGP', '100 EGP', '10 EGP', '1,500', 'Casual wear, jewelry'],
      ['Household Items', '90 EGP', '100 EGP', '10 EGP', '1,200', 'Kitchenware, décor'],
      ['Gifts & Crafts', '90 EGP', '100 EGP', '10 EGP', '800', 'Handmade souvenirs'],
      ['Simple Cosmetics', '90 EGP', '100 EGP', '10 EGP', '1,000', 'Lotions, balms, soaps']
    ]
  },
  {
    id: 6,
    type: 'swot',
    title: 'SWOT Analysis',
    duration: 30,
    narration: 'Our SWOT analysis reveals strong foundations with consistent margins and local knowledge, opportunities for expansion, and manageable challenges around vendor compliance and competition.',
    swotData: {
      strengths: [
        'Consistent 10 EGP margin per sale',
        'Deep local market knowledge',
        'Direct vendor integration'
      ],
      weaknesses: [
        'Limited to fixed‑price model',
        'Vendor compliance needed'
      ],
      opportunities: [
        'Scalable to other governorates after 30,000 transactions',
        'Add premium vendor features'
      ],
      threats: [
        'Competition from established marketplaces',
        'Rising logistics costs'
      ]
    }
  },
  {
    id: 7,
    type: 'text',
    title: 'Market Analysis',
    duration: 30,
    narration: 'Our target market includes families, university students, and youth aged 19–35 in Minya. Egypt\'s e‑commerce market is growing at 25% annually with mobile penetration exceeding 60% in Minya.',
    content: [
      '5.1 Target Market:',
      'Demographics: Families, university students, youth aged 19–35 in Minya with internet access.',
      '',
      '5.2 Market Trends:',
      'Egypt\'s e‑commerce market is growing at ~25% annually. Mobile penetration in Minya exceeds 60%.',
      '',
      '5.3 Competitive Landscape:',
      'Jumia: Robust logistics network, higher price variability, 2–3 days delivery',
      'Souq (Amazon.eg): Strong brand trust, complex fee structure, 1–2 days delivery',
      'Local Vendors: Personalized service, limited online reach, immediate delivery'
    ]
  },
  {
    id: 8,
    type: 'text',
    title: 'Marketing Strategy',
    duration: 30,
    narration: 'Our marketing strategy encompasses social media advertising, campus engagement, community events, and influencer collaborations, supported by fast delivery through our partnership with Tasleema.',
    content: [
      '6.1 Channels & Tactics:',
      '• Social Media Advertising (Facebook, Instagram, TikTok)',
      '• Campus Engagement & University Partnerships',
      '• Local Community Events & Fairs',
      '• Influencer Collaborations',
      '',
      '6.2 Operational Plan:',
      '1. Host meetings to introduce the platform and demonstrate its benefits.',
      '2. Create individual seller accounts and guide each vendor through setup.',
      '3. Conduct training sessions on product listing, order management, and dashboard use.',
      '4. Provide ongoing support via WhatsApp and phone.',
      '',
      'Fast Delivery Service:',
      '• Partnered with Tasleema (Minya‑based delivery company)',
      '• Delivery time: 10–20 minutes within city limits',
      '• Delivery fee: 10 EGP per order, paid directly to partner'
    ]
  },
  {
    id: 9,
    type: 'table',
    title: 'Financial Plan',
    duration: 30,
    narration: 'Our financial projections show steady growth from 500 units in October 2025 to 6,000 units by September 2026, with profits scaling from 5,000 EGP to 60,000 EGP monthly.',
    tableHeaders: ['Launch Month', 'Units Sold', 'Revenue (EGP)', 'Cost (EGP)', 'Profit (EGP)'],
    tableData: [
      ['Oct 2025', '500', '50,000', '45,000', '5,000'],
      ['Nov 2025', '1,000', '100,000', '90,000', '10,000'],
      ['Dec 2025', '1,500', '150,000', '135,000', '15,000'],
      ['Jan 2026', '2,000', '200,000', '180,000', '20,000'],
      ['Feb 2026', '2,500', '250,000', '225,000', '25,000'],
      ['Mar 2026', '3,000', '300,000', '270,000', '30,000'],
      ['Apr 2026', '3,500', '350,000', '315,000', '35,000'],
      ['May 2026', '4,000', '400,000', '360,000', '40,000'],
      ['Jun 2026', '4,500', '450,000', '405,000', '45,000'],
      ['Jul 2026', '5,000', '500,000', '450,000', '50,000'],
      ['Aug 2026', '5,500', '550,000', '495,000', '55,000'],
      ['Sep 2026', '6,000', '600,000', '540,000', '60,000']
    ]
  },
  {
    id: 10,
    type: 'table',
    title: 'Monitoring & Evaluation',
    duration: 30,
    narration: 'We will monitor key performance indicators including shop onboarding rates monthly, active users weekly, daily sales volume, and customer satisfaction quarterly.',
    tableHeaders: ['KPI', 'Frequency', 'Data Source'],
    tableData: [
      ['Shop Onboarding Rate', 'Monthly', 'Admin Dashboard'],
      ['Active Users', 'Weekly', 'Google Analytics'],
      ['Daily Sales Volume', 'Daily', 'Platform Reports'],
      ['Customer Satisfaction', 'Quarterly', 'Surveys']
    ]
  },
  {
    id: 11,
    type: 'text',
    title: 'Appendices',
    duration: 30,
    narration: 'Our appendices include vendor agreement templates and sample marketing creatives that will be provided to support our implementation strategy.',
    content: [
      'Appendix A: Vendor Agreement Template (to be provided)',
      'Appendix B: Sample Marketing Creatives (to be provided)'
    ]
  },
  {
    id: 12,
    type: 'cover',
    title: 'Gorilla Marketing',
    subtitle: 'Aggressive and Creative Marketing Tactics',
    duration: 30,
    narration: 'Now we move to our Gorilla Marketing section, which represents unconventional and bold marketing strategies designed to create maximum impact with minimal budget.',
    background: 'gorilla-marketing'
  },
  {
    id: 13,
    type: 'text',
    title: 'Gorilla Marketing Concept',
    duration: 30,
    narration: 'Gorilla marketing represents unconventional, creative, and bold marketing strategies that create maximum impact with minimal budget, focusing on guerrilla tactics that surprise and engage customers.',
    content: [
      'Gorilla marketing represents unconventional, creative, and bold marketing strategies that create maximum impact with minimal budget.',
      'It focuses on guerrilla tactics that surprise and engage customers through innovative approaches, street marketing, and viral campaigns that generate organic buzz and word-of-mouth promotion.'
    ]
  },
  {
    id: 14,
    type: 'cover',
    title: 'Digital Marketing Strategy',
    subtitle: 'Comprehensive Online Presence and Engagement',
    duration: 30,
    narration: 'Our digital marketing strategy encompasses comprehensive online presence across Facebook, Instagram, and our company website with targeted engagement tactics.',
    background: 'digital-marketing'
  },
  {
    id: 15,
    type: 'text',
    title: 'Digital Marketing Details',
    duration: 60,
    narration: 'Our digital marketing strategy covers three main platforms. Facebook strategy includes daily posts at peak hours, weekly boosted posts, and monthly live sessions. Instagram strategy features regular feed posts, daily stories, and influencer collaborations. Website strategy includes SEO-optimized content, email newsletters, and A/B testing.',
    content: [
      'Platforms: Facebook, Instagram, Company Website.',
      '',
      'Facebook Strategy:',
      '• Daily posts at peak hours (12:00 & 18:00) with engaging visuals and call-to-action buttons.',
      '• Weekly boosted posts targeting local audience demographics (Minya, ages 19–35).',
      '• Monthly Facebook Live Q&A sessions for customer engagement and product highlights.',
      '',
      'Instagram Strategy:',
      '• 3 feed posts per week: product showcases, behind-the-scenes, and user-generated content.',
      '• Daily Instagram Stories with polls, countdown stickers for upcoming promotions, and swipe-up links to store.',
      '• Collaborations with 2–3 local influencers per quarter for sponsored posts and story takeovers.',
      '',
      'Website Strategy:',
      '• SEO-optimized blog posts twice a week covering shopping tips, vendor stories, and industry news.',
      '• Email newsletters bi-weekly to subscribers featuring best-selling products and exclusive discounts.',
      '• Landing page A/B testing monthly for conversion rate optimization (headlines, images, calls-to-action).'
    ]
  },
  {
    id: 16,
    type: 'cover',
    title: 'Thank You for Your Attention',
    subtitle: 'Questions & Feedback',
    duration: 40,
    narration: 'Thank you for your attention during this comprehensive presentation of the Lo2ta Store Marketing Plan. We appreciate your time and are now ready to address any questions, concerns, or feedback you may have. Your insights and suggestions are valuable to us as we move forward with this exciting venture in Minya.',
    background: 'minya-skyline'
  }
];

export const totalSlides = slideData.length;
export const totalDuration = slideData.reduce((sum, slide) => sum + slide.duration, 0);