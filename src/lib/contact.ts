/**
 * Central contact information. Update these values in one place
 * to reflect changes across the entire app (Pricing, Contact, Footer, etc.).
 */

/** Primary contact number (for tel: links and display) */
export const phonePrimary = "+919081234560";

/** Secondary contact number */
export const phoneSecondary = "+919265615544";

/** Both numbers as array for listing (e.g. Pricing call section, Contact page) */
export const phoneNumbers = [phonePrimary, phoneSecondary] as const;

/** Company email (for mailto: links and display) */
export const contactEmail = "info@shreeexpresscargo.com";

/** Company address (single line; used in Contact page and Footer) */
export const address = "123 Logistics Ave, Business District, City 12345";

/** Format for display: adds spaces for readability (e.g. +91 90812 34560) */
export function formatPhoneDisplay(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`;
  }
  return phone;
}
