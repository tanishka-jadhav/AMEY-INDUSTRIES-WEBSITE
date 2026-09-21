export const COMPANY_DETAILS = {
  name: "AMEY INDUSTRIES",
  legalName: "AMEY INDUSTRIES",
  owner: "Mr. Prasad Suresh Jadhav",
  phone: "",
  phoneRaw: "",
  whatsappNumber: "919850573181",
  email: "psj.smil@gmail.com",
  address: "Nashik, Maharashtra, India",
  fullAddress: "Nashik, Maharashtra, India",
  location: "Nashik, Maharashtra",
  city: "Nashik",
  state: "Maharashtra",
  country: "India",
  pincode: "422001",
  establishedYear: "2015",
  tagline: "Green Gym & Outdoor Fitness Equipment, Playground Solutions & Industrial Fabrication",
  heroHeadline: "Outdoor Fitness & Play Equipment. Engineered for Real Spaces.",
  heroSubheadline: "AMEY INDUSTRIES, Nashik provides robust outdoor green gym equipment, playground solutions, and custom industrial fabrication built for parks, residential societies, public institutions, and commercial projects.",
};

export function getGoogleMapsUrl(): string {
  const query = encodeURIComponent("Nashik Maharashtra India");
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultText = "Hello AMEY INDUSTRIES, I am interested in your outdoor fitness and playground equipment. Please share product catalog and quotation details.";
  const encoded = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encoded}`;
}

export function getPhoneUrl(): string {
  return getWhatsAppUrl();
}

export function getEmailUrl(subject?: string): string {
  const defaultSubject = "Enquiry - AMEY INDUSTRIES Website";
  return `mailto:${COMPANY_DETAILS.email}?subject=${encodeURIComponent(subject || defaultSubject)}`;
}
