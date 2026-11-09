type BirthdayEmailParams = {
  firstName: string
  title: string
  greeting: string
  paragraphs: string[]
  signature: string
}

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')

/**
 * Gabarit d'anniversaire, aligné sur l'identité visuelle des autres mails
 * du club (logo, bandeau #00466a, bas de page club).
 */
const birthdayEmail = ({
  firstName,
  title,
  greeting,
  paragraphs,
  signature,
}: BirthdayEmailParams) => {
  const body = paragraphs
    .map(
      (line) =>
        `<p style="margin:0 0 16px 0;">${escapeHtml(line)}</p>`,
    )
    .join('')

  return `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f2f2f2;-webkit-text-size-adjust:none;text-size-adjust:none;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f2f2f2;">
      <tbody>
        <tr>
          <td align="center" style="padding:24px 12px;">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:8px;overflow:hidden;">
              <tbody>
                <tr>
                  <td align="center" style="padding:24px 24px 8px 24px;background-color:#ffffff;">
                    <a href="https://www.club306.fr" target="_blank" style="text-decoration:none;">
                      <img
                        alt="Club 306 - L'aventure Peugeot 306"
                        src="https://www.club306.fr/images/logoClub306.png"
                        width="180"
                        height="66"
                        style="display:block;border:0;outline:none;text-decoration:none;width:180px;max-width:180px;height:auto;"
                      >
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding:16px 24px 8px 24px;">
                    <h1 style="margin:0;color:#00466a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:28px;line-height:130%;font-weight:700;text-align:center;">
                      ${escapeHtml(title)}
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 32px 0 32px;color:#575757;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;line-height:160%;text-align:left;">
                    <p style="margin:0 0 16px 0;font-weight:600;color:#333333;">${escapeHtml(greeting)}</p>
                    ${body}
                    <p style="margin:24px 0 0 0;color:#333333;">${escapeHtml(signature)}</p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding:32px 24px 8px 24px;">
                    <a
                      href="https://www.club306.fr"
                      target="_blank"
                      style="display:inline-block;text-decoration:none;background-color:#00466a;color:#ffffff;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:15px;padding:12px 28px;border-radius:4px;"
                    >
                      Revoir le club
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding:24px;background-color:#ececec;color:#575757;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;line-height:160%;text-align:center;">
                    <p style="margin:0;">CLUB 306</p>
                    <p style="margin:4px 0 0 0;">12 allée Ledru Rollin, 93320 Les Pavillons-sous-Bois</p>
                    <p style="margin:12px 0 0 0;">
                      <a href="https://www.club306.fr" target="_blank" style="color:#00466a;text-decoration:none;">club306.fr</a>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`
}

export { birthdayEmail }
export type { BirthdayEmailParams }
