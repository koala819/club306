// Configuration des webhooks HelloAsso
export const HELLO_ASSO_WEBHOOK_CONFIG = {
  // URL de votre webhook (à configurer dans HelloAsso)
  webhookUrl: process.env.NEXT_PUBLIC_CLIENT_URL
    ? `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/helloasso/webhook`
    : 'http://localhost:3000/api/helloasso/webhook',

  // Types d'événements supportés
  supportedEventTypes: ['Order', 'Payment'] as const,

  // Statuts de paiement valides
  validPaymentStatuses: ['succeeded', 'completed'] as const,

  // Timeout pour la validation (en minutes)
  validationTimeout: 45,
}

// Types TypeScript pour les webhooks
export interface HelloAssoWebhookPayload {
  eventType: 'Order' | 'Payment'
  data: {
    checkoutIntentId: string
    status: string
    order?: {
      id: string
      status: string
      amount: number
      currency: string
    }
    payment?: {
      id: string
      status: string
      amount: number
      currency: string
    }
  }
  metadata: Record<string, any>
  timestamp: string
}

// Interface pour la réponse de validation
export interface PaymentValidationResult {
  isValid: boolean
  checkoutIntentId: string
  userId?: string
  amount?: number
  currency?: string
  error?: string
}

// Fonction utilitaire pour valider un webhook
export function validateWebhook(payload: any): payload is HelloAssoWebhookPayload {
  return (
    payload &&
    typeof payload === 'object' &&
    HELLO_ASSO_WEBHOOK_CONFIG.supportedEventTypes.includes(payload.eventType) &&
    payload.data &&
    typeof payload.data.checkoutIntentId === 'string' &&
    typeof payload.data.status === 'string' &&
    payload.metadata &&
    typeof payload.metadata === 'object'
  )
}
