export type Review = {
  name: string;
  quote: string;
  source: "Google";
  tone: "positive" | "critical";
};

/**
 * Feedback supplied by the business. Displayed verbatim.
 * No star ratings or reviewer photos are shown because they were not supplied.
 * Ask the client to re-verify each review on the Google Business Profile before launch.
 */
export const reviews: Review[] = [
  {
    name: "Dipak Nile",
    quote: "Nice experience, staff is good experienced and and fixed my car AC work.",
    source: "Google",
    tone: "positive",
  },
  {
    name: "Monali Patil",
    quote: "Poor quality service unprofessional behaviour.",
    source: "Google",
    tone: "critical",
  },
  {
    name: "Sachin Hosmani",
    quote: "The owner is very trustworthy and makes sure customers are satisfied.",
    source: "Google",
    tone: "positive",
  },
];

export const brands = [
  "Maruti Suzuki",
  "Hyundai",
  "Tata Motors",
  "Mahindra",
  "Honda",
  "Toyota",
  "Kia",
  "Renault",
  "Volkswagen",
  "Skoda",
  "Nissan",
];
