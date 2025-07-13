export interface Slide {
  id: number;
  title: string;
  duration: number; // in seconds
  content: any;
  type: 'cover' | 'content' | 'table' | 'separator';
}

export const slideData: Slide[] = [
  {
    id: 0,
    title: "Welcome to Minya",
    duration: 40,
    type: 'cover',
    content: {
      title: "Welcome to Minya",
      subtitle: "An introduction to our beautiful governorate and the Lo2ta Store vision",
      description: "Minya, the pearl of Upper Egypt, situated along the majestic Nile River with rich historical heritage and vibrant local commerce."
    }
  },
  {
    id: 1,
    title: "Lo2ta Store Marketing Plan 2025–2026",
    duration: 40,
    type: 'content',
    content: {
      title: "Lo2ta Store Marketing Plan 2025–2026",
      subtitle: "A Comprehensive For‑Profit E‑commerce Platform",
      agenda: [
        "Executive Summary",
        "Business Overview", 
        "Products & Services",
        "SWOT Analysis",
        "Market Analysis",
        "Marketing Strategy",
        "Financial Plan",
        "Monitoring & Evaluation",
        "Appendices",
        "Gorilla Marketing Cover"
      ]
    }
  },
  {
    id: 2,
    title: "Executive Summary",
    duration: 30,
    type: 'content',
    content: {
      title: "Executive Summary",
      text: "Lo2ta Store is a for‑profit e‑commerce platform aggregating small and medium shops in Minya Governorate. Our fixed‑price model sources products at 90 EGP and sells at 100 EGP, ensuring a 10 EGP margin per item. We plan to onboard 150 shops, achieve 30,000 transactions (AOV = 1.2 items), and reach 15,000 active users within the first year, targeting families, university students, and youth aged 19–35."
    }
  },
  {
    id: 3,
    title: "Business Overview",
    duration: 30,
    type: 'content',
    content: {
      title: "Business Overview",
      sections: [
        {
          subtitle: "2.1 Company Information",
          items: [
            "Business Name: Lo2ta Store",
            "Business Structure: Limited Liability Company",
            "Headquarters: Minya Governorate, Egypt",
            "Operation Start: October 2025",
            "Founders: Lo2ta Store Team"
          ]
        },
        {
          subtitle: "2.2 Vision & Mission",
          items: [
            "Vision: To transform every small shop in Minya into a thriving digital business.",
            "Mission: To provide a seamless, secure platform that empowers vendors and offers customers reliable, affordable shopping."
          ]
        }
      ]
    }
  },
  {
    id: 4,
    title: "Products & Services",
    duration: 30,
    type: 'table',
    content: {
      title: "Products & Services",
      headers: ["Category", "Cost Price", "Sale Price", "Margin", "Monthly Demand Estimate (per store)", "Description"],
      rows: [
        ["Food (Restaurants, Bakery)", "90 EGP", "100 EGP", "10 EGP", "2,000", "Prepared meals, bread, sweets"],
        ["Clothing & Accessories", "90 EGP", "100 EGP", "10 EGP", "1,500", "Casual wear, jewelry"],
        ["Household Items", "90 EGP", "100 EGP", "10 EGP", "1,200", "Kitchenware, décor"],
        ["Gifts & Crafts", "90 EGP", "100 EGP", "10 EGP", "800", "Handmade souvenirs"],
        ["Simple Cosmetics", "90 EGP", "100 EGP", "10 EGP", "1,000", "Lotions, balms, soaps"]
      ]
    }
  },
  {
    id: 5,
    title: "SWOT Analysis",
    duration: 30,
    type: 'content',
    content: {
      title: "SWOT Analysis",
      swot: {
        strengths: [
          "Consistent 10 EGP margin per sale",
          "Deep local market knowledge",
          "Direct vendor integration"
        ],
        weaknesses: [
          "Limited to fixed‑price model",
          "Vendor compliance needed"
        ],
        opportunities: [
          "Scalable to other governorates after 30,000 transactions",
          "Add premium vendor features"
        ],
        threats: [
          "Competition from established marketplaces",
          "Rising logistics costs"
        ]
      }
    }
  },
  {
    id: 6,
    title: "Market Analysis",
    duration: 30,
    type: 'content',
    content: {
      title: "Market Analysis",
      sections: [
        {
          subtitle: "5.1 Target Market",
          text: "Demographics: Families, university students, youth aged 19–35 in Minya with internet access."
        },
        {
          subtitle: "5.2 Market Trends", 
          text: "Egypt's e‑commerce market is growing at ~25% annually. Mobile penetration in Minya exceeds 60%."
        },
        {
          subtitle: "5.3 Competitive Landscape",
          table: {
            headers: ["Competitor", "Strengths", "Weaknesses", "Delivery Speed"],
            rows: [
              ["Jumia", "Robust logistics network", "Higher price variability", "2–3 days"],
              ["Souq (Amazon.eg)", "Strong brand trust", "Complex fee structure", "1–2 days"],
              ["Local Vendors (Offline)", "Personalized service", "Limited online reach", "Immediate (onsite)"]
            ]
          }
        }
      ]
    }
  },
  {
    id: 7,
    title: "Marketing Strategy",
    duration: 30,
    type: 'content',
    content: {
      title: "Marketing Strategy",
      sections: [
        {
          subtitle: "6.1 Channels & Tactics",
          items: [
            "Social Media Advertising (Facebook, Instagram, TikTok)",
            "Campus Engagement & University Partnerships",
            "Local Community Events & Fairs",
            "Influencer Collaborations"
          ]
        },
        {
          subtitle: "6.2 Operational Plan",
          items: [
            "Host meetings to introduce the platform and demonstrate its benefits.",
            "Create individual seller accounts and guide each vendor through setup.",
            "Conduct training sessions on product listing, order management, and dashboard use.",
            "Provide ongoing support via WhatsApp and phone."
          ]
        },
        {
          subtitle: "Fast Delivery Service:",
          items: [
            "Partnered with Tasleema (Minya‑based delivery company).",
            "Delivery time: 10–20 minutes within city limits.",
            "Delivery fee: 10 EGP per order, paid directly to partner."
          ]
        }
      ]
    }
  },
  {
    id: 8,
    title: "Financial Plan",
    duration: 30,
    type: 'table',
    content: {
      title: "Financial Plan",
      headers: ["Launch Month", "Units Sold", "Revenue (EGP)", "Cost (EGP)", "Profit (EGP)"],
      rows: [
        ["Oct 2025", "500", "50,000", "45,000", "5,000"],
        ["Nov 2025", "1,000", "100,000", "90,000", "10,000"],
        ["Dec 2025", "1,500", "150,000", "135,000", "15,000"],
        ["Jan 2026", "2,000", "200,000", "180,000", "20,000"],
        ["Feb 2026", "2,500", "250,000", "225,000", "25,000"],
        ["Mar 2026", "3,000", "300,000", "270,000", "30,000"],
        ["Apr 2026", "3,500", "350,000", "315,000", "35,000"],
        ["May 2026", "4,000", "400,000", "360,000", "40,000"],
        ["Jun 2026", "4,500", "450,000", "405,000", "45,000"],
        ["Jul 2026", "5,000", "500,000", "450,000", "50,000"],
        ["Aug 2026", "5,500", "550,000", "495,000", "55,000"],
        ["Sep 2026", "6,000", "600,000", "540,000", "60,000"]
      ]
    }
  },
  {
    id: 9,
    title: "Monitoring & Evaluation",
    duration: 30,
    type: 'table',
    content: {
      title: "Monitoring & Evaluation",
      headers: ["KPI", "Frequency", "Data Source"],
      rows: [
        ["Shop Onboarding Rate", "Monthly", "Admin Dashboard"],
        ["Active Users", "Weekly", "Google Analytics"],
        ["Daily Sales Volume", "Daily", "Platform Reports"],
        ["Customer Satisfaction", "Quarterly", "Surveys"]
      ]
    }
  },
  {
    id: 10,
    title: "Appendices",
    duration: 30,
    type: 'content',
    content: {
      title: "Appendices",
      items: [
        "Appendix A: Vendor Agreement Template (to be provided)",
        "Appendix B: Sample Marketing Creatives (to be provided)"
      ]
    }
  },
  {
    id: 11,
    title: "Gorilla Marketing",
    duration: 30,
    type: 'separator',
    content: {
      title: "Gorilla Marketing",
      subtitle: "Aggressive and Creative Marketing Tactics"
    }
  },
  {
    id: 12,
    title: "Gorilla Marketing Concept",
    duration: 30,
    type: 'content',
    content: {
      title: "Gorilla Marketing Concept",
      text: "Gorilla marketing represents unconventional, creative, and bold marketing strategies that create maximum impact with minimal budget. It focuses on guerrilla tactics that surprise and engage customers through innovative approaches, street marketing, and viral campaigns that generate organic buzz and word-of-mouth promotion."
    }
  },
  {
    id: 13,
    title: "Digital Marketing Strategy",
    duration: 30,
    type: 'separator',
    content: {
      title: "Digital Marketing Strategy", 
      subtitle: "Comprehensive Online Presence and Engagement"
    }
  },
  {
    id: 14,
    title: "Digital Marketing Details",
    duration: 60,
    type: 'content',
    content: {
      title: "Digital Marketing Details",
      platforms: [
        {
          name: "Facebook Strategy",
          tactics: [
            "Daily posts at peak hours (12:00 & 18:00) with engaging visuals and call-to-action buttons.",
            "Weekly boosted posts targeting local audience demographics (Minya, ages 19–35).",
            "Monthly Facebook Live Q&A sessions for customer engagement and product highlights."
          ]
        },
        {
          name: "Instagram Strategy", 
          tactics: [
            "3 feed posts per week: product showcases, behind-the-scenes, and user-generated content.",
            "Daily Instagram Stories with polls, countdown stickers for upcoming promotions, and swipe-up links to store.",
            "Collaborations with 2–3 local influencers per quarter for sponsored posts and story takeovers."
          ]
        },
        {
          name: "Website Strategy",
          tactics: [
            "SEO-optimized blog posts twice a week covering shopping tips, vendor stories, and industry news.",
            "Email newsletters bi-weekly to subscribers featuring best-selling products and exclusive discounts.",
            "Landing page A/B testing monthly for conversion rate optimization (headlines, images, calls-to-action)."
          ]
        }
      ]
    }
  },
  {
    id: 15,
    title: "Thank You & Q&A",
    duration: 40,
    type: 'content',
    content: {
      title: "Thank You for Your Attention",
      subtitle: "Questions & Feedback",
      text: "We appreciate your time and attention during this presentation. We are now ready to address any questions, concerns, or feedback you may have regarding the Lo2ta Store Marketing Plan. Your insights and suggestions are valuable to us as we move forward with this exciting venture."
    }
  }
];

export const totalSlides = slideData.length;
export const totalDuration = slideData.reduce((sum, slide) => sum + slide.duration, 0);