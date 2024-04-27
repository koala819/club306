export function getCountryAlpha3Code(phone: any) {
  // console.log('phone', phone)
  const phonePrefixToCountryCode: Record<string, string> = {
    '33': 'FRA', // France
    '44': 'GBR', // Royaume-Uni
    '32': 'BEL', // Belgique
    '31': 'NLD', // Pays-Bas
    '41': 'CHE', // Suisse
    '39': 'ITA', // Italie
    '34': 'ESP', // Espagne
  }

  return phonePrefixToCountryCode[phone] || 'Inconnu'
}
