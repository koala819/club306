export function getCountryAlpha3Code(phone: any) {
  // console.log('phone', phone);
  const phonePrefixToCountryCode: Record<string, string> = {
    '33': 'FRA', // France
    '44': 'GBR', // Royaume-Uni
    '32': 'BEL', // Belgique
    '31': 'NLD', // Pays-Bas
    '41': 'CHE', // Suisse
    '39': 'ITA', // Italie
    '34': 'ESP', // Espagne
  };

  // Supprimer les caractères non numériques
  const numericPhone = phone.replace(/\D/g, '');

  // Extraire l'indicatif téléphonique (en supposant qu'il n'y a pas de "0" initial pour les indicatifs internationaux)
  const prefix = numericPhone.slice(0, 2);

  return phonePrefixToCountryCode[prefix] || 'Inconnu';
}
