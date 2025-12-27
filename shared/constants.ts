/**
 * Chalupa Oľga - Business Constants
 *
 * This file contains important business information and constants
 * for the Chalupa Oľga cottage rental website.
 */

export const COTTAGE_INFO = {
  name: "Chalupa Oľga",
  address: {
    street: "Biely Potok 677",
    district: "Šparengovci",
    postalCode: "013 06",
    city: "Terchová",
    country: "Slovakia",
    full: "Biely Potok 677, Šparengovci, 013 06 Terchová",
  },
  coordinates: {
    latitude: 49.26002,
    longitude: 19.07234,
  },
  contact: {
    phone: "+421 915 869 535",
    email: "info@chalupaolga.sk",
  },
  capacity: {
    beds: 20,
    rooms: 7,
  },
} as const;

// Google Maps embed URL with pin at exact location
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${COTTAGE_INFO.coordinates.latitude},${COTTAGE_INFO.coordinates.longitude}+(Chalupa+Oľga)&z=15&output=embed`;

// Direct Google Maps link for opening in new tab
export const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${COTTAGE_INFO.coordinates.latitude},${COTTAGE_INFO.coordinates.longitude}&query_place_id=Chalupa+Oľga`;
