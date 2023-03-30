/**
 * START: Follow the instructions below.
 */

// The objects in the `countries` array use strings as the values of the
// `currency` properties.
// Complete this numeric enum so that it can be used instead of strings.
// Hint: Use the string values in the `currency` properties as the enum members.

enum Currency {
  Euro,
  Dollar,
}

// Update the type for the `currency` property in this interface to use
// the `Currency` enum.

interface Country {
  name: string;
  currency: Currency;
}

// Replace the string values for the `currency` properties below with

const countries: Country[] = [
  {
    name: "France",
    currency: 0,
  },
  {
    name: "United States of America",
    currency: 1,
  },
  {
    name: "Italy",
    currency: 0,
  },
  {
    name: "New Zealand",
    currency: 1,
  },
];

// Create a string enum named `LanguageStatus`. Use it to replace the
// string values for the `status` properties in the objects below.
enum LanguageStatus {
    primary,
    secondary
}


const countryLanguages = [
  { language: "Spanish", status: 0 },
  { language: "English", status: 1 },
];

// ----

export {};
