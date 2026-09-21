export interface FAQItem {
  question: string;
  answer: string;
  category: "green-gym" | "playground" | "fabrication" | "general";
}

export const FAQS: FAQItem[] = [
  {
    question: "What is a green gym and how does it function?",
    answer: "A green gym is an outdoor exercise station equipped with weather-proof fitness units designed for public parks, housing societies, and institutions. It uses human body weight and lever resistance for exercise without electricity or complex electronics.",
    category: "green-gym"
  },
  {
    question: "Where can outdoor gym equipment be installed?",
    answer: "Our equipment is suitable for public municipal parks, residential housing societies, educational campuses, sports grounds, senior citizen gardens, health resorts, and corporate recreational grounds.",
    category: "green-gym"
  },
  {
    question: "Do you provide installation support for equipment?",
    answer: "Yes, AMEY INDUSTRIES offers installation guidance and support based on project scope and location. Equipment is manufactured with heavy base plates designed for deep concrete anchor fixing.",
    category: "general"
  },
  {
    question: "Can I request multiple outdoor gym and playground items together?",
    answer: "Yes, we handle complete project requirements comprising Green Gym setups, children playground units, and custom park benches or metal structures in a single consolidated quotation.",
    category: "general"
  },
  {
    question: "Do you undertake custom industrial fabrication work?",
    answer: "Yes, in addition to outdoor gym and play equipment, AMEY INDUSTRIES provides industrial fabrication services based on custom specifications, architectural metalwork, and structural frame requirements.",
    category: "fabrication"
  },
  {
    question: "How can I request a product quotation or catalogue?",
    answer: "You can click on 'Get a Quote' on our website, fill out our quick enquiry form, or send your requirements directly via WhatsApp.",
    category: "general"
  },
  {
    question: "Can I send my project drawings or photos on WhatsApp for discussion?",
    answer: "Yes, you can directly message us on WhatsApp with your site requirements, photos, or project quantities for fast discussion.",
    category: "general"
  }
];
