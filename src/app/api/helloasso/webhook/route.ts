import { NextRequest, NextResponse } from 'next/server'
import { validateWebhook, PaymentValidationResult } from '@/src/lib/helloAsso/webhookConfig'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    console.log('Webhook HelloAsso reçu:', body)

    // Valider le format du webhook
    if (!validateWebhook(body)) {
      console.error('Format de webhook invalide:', body)
      return NextResponse.json({ error: 'Format de webhook invalide' }, { status: 400 })
    }

    // Vérifier que le statut est un succès
    if (body.data.status !== 'succeeded') {
      console.log('Paiement non réussi, statut:', body.data.status)
      return NextResponse.json({ message: 'Paiement non réussi' }, { status: 200 })
    }

    // Extraire les informations importantes
    const { checkoutIntentId, status } = body.data
    const { userId } = body.metadata

    console.log('Paiement validé via webhook:', {
      checkoutIntentId,
      status,
      userId,
      eventType: body.eventType,
      timestamp: new Date().toISOString()
    })

    // TODO: Mettre à jour votre base de données ici
    // Par exemple : marquer l'utilisateur comme membre actif
    // await updateMemberStatus(userId, 'active')

    // TODO: Envoyer un email de confirmation
    // await sendMembershipConfirmationEmail(userId)

    // TODO: Stocker la validation dans une base de données ou cache
    // await storePaymentValidation(checkoutIntentId, userId, status)

    // Retourner un succès à HelloAsso
    return NextResponse.json({
      success: true,
      message: 'Webhook traité avec succès',
      checkoutIntentId,
      userId,
      validatedAt: new Date().toISOString()
    })

  } catch (error) {
    console.error('Erreur lors du traitement du webhook:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}
