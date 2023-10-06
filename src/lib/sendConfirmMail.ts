import { createTransport } from 'nodemailer';
export async function sendConfirmMail(identifier: string, url: string) {
  const email = process.env.MAIL_USER;
  const pass = process.env.MAIL_PWD;
  const host = process.env.MAIL_HOST;
  const port = process.env.MAIL_PORT;
  // const { identifier, url, provider } = params;
  // const { host } = new URL(url);
  // NOTE: You are not required to use `nodemailer`, use whatever you want.
  const transport = createTransport({
    host: host,
    port: parseInt(port!),
    secure: true,
    auth: {
      user: email,
      pass,
    },
    tls: { rejectUnauthorized: false },
  });
  const result = await transport.sendMail({
    to: identifier,
    from: process.env.MAIL_FROM,
    subject: `Demande de confirmation d\'email `,
    text: text({ url }),
    html: html({ url }),
  });
  const failed = result.rejected.concat(result.pending).filter(Boolean);
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(', ')}) could not be sent`);
  }
}

/**
 * Email HTML body
 * Insert invisible space into domains from being turned into a hyperlink by email
 * clients like Outlook and Apple mail, as this is confusing because it seems
 * like they are supposed to click on it to sign in.
 *
 * @note We don't add the email address to avoid needing to escape it, if you do, remember to sanitize it!
 */
function html(params: { url: string }) {
  const { url } = params;

  // const escapedHost = host.replace(/\./g, '&#8203;.');

  const brandColor = '#346df1';
  const color = {
    background: '#f9f9f9',
    text: '#444',
    mainBackground: '#fff',
    buttonBackground: brandColor,
    buttonBorder: brandColor,
    buttonText: '#fff',
  };

  return `
    <html>
    <head>
      <meta http-equiv="content-type" content="text/html; charset=">
      <style>.circle {
              width: 50px;
              height: 50px;
              border: 2px solid #797979;
              border-radius: 50%;
              background-color: white;
              display: flex;
              align-items: center;
              justify-content: center;
          }.tdLink {
              text-align: center;
              vertical-align: middle;
          }
        </style>
    </head>
    <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust:
      none;">
      <table class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;
        background-color: #FFFFFF;" width="100%" cellspacing="0" cellpadding="0" border="0">
        <tbody>
          <tr>
            <td>
              <table class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;
                background-color: #FFF;" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace:
                        0pt; color: #000000; width: 650px" width="650" cellspacing="0" cellpadding="0" border="0"
                        align="center">
                        <tbody>
                          <tr>
                            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight:
                              400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;
                              border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%"><br>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;
                background-color: #FFF;" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" role="presentation" style="background-color: rgb(236, 236, 236);
                        color: rgb(0, 0, 0); border-radius: 50px 50px 0px 0px;" width="650" height="72" cellspacing="0"
                        cellpadding="0" border="0" align="center">
                        <tbody>
                          <tr>
                            <td> <br>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;
                background-color: #FFF;" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" role="presentation" style="background-color: rgb(236, 236, 236);
                        color: rgb(0, 0, 0);" width="650" height="386" cellspacing="0" cellpadding="0" border="0"
                        align="center">
                        <tbody>
                          <tr>
                            <td class="column column-1" style="margin-top: 5px; background-image:
                              url(https://raw.githubusercontent.com/koala819/Unlimitd_front/develop/306_Header.jpg);
                              background-size: cover; background-position: center; background-color: rgb(236, 236, 236);
                              color: rgb(0, 0, 0); border-radius: 50px 50px 0px 0px;"><br>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;
                background-color: #FFF;" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                <tbody>
                  <tr>
                    <td>
                      <table style="background-color: rgb(236, 236, 236); color: rgb(0, 0, 0); " width="650" height="196"
                        cellspacing="0" cellpadding="0" border="0" align="center">
                        <tbody>
                          <tr>
                            <td>&nbsp;</td>
                          </tr>
                          <tr>
                            <td>
                              <table style="background-color: white; color: rgb(0, 0, 0); border-radius: 50px" width="550"
                                height="386" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tbody>
                                  <tr>
                                    <td style="padding-top: 5px" valign="top" align="center"> <a
                                        href="http://www.club306.fr" style="outline:none" tabindex="-1" target="_blank"
                                        moz-do-not-send="true"><img alt=""
                                          src="https://www.club306.fr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoClub306.3a02f592.png&amp;w=256&amp;q=75"
                                          style="display: block; max-width: 80%;" title="Logo CLub 306"
                                          moz-do-not-send="true" width="256" height="94" border="0"></a> </td>
                                  </tr>
                                  <tr>
                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:60px 50px
                                      20px;font-family:'Raleway',sans-serif;" valign="top" align="left">
                                      <div style="font-family: Helvetica,Arial,sans-serif; overflow:auto;line-height:2">
                                        <div style="margin:50px auto;width:70%;padding:20px 0">
                                          <div style="border-bottom:1px solid #eee"> <a href=""
                                              style="font-size:1.4em;color:
                                              #00466a;text-decoration:none;font-weight:600">Confirmation de ton email</a> </div>
                                          <p style="font-size:1.1em">Bonjour,</p>
                                          <p>Suivez le lien ci-dessous pour confirmer votre utilisateur</p>
                                          <h2 style="background: #00466a; margin: 0 auto; width: max-content; padding: 0 10px; border-radius: 4px;">
                                            <a href="${url}" target="_blank" style="text-decoration: none; color: white; font-weight: normal;">Lien</a>
                                          </h2>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;
                background-color: #fff;" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
              </table>
              <table style="background-color: rgb(236, 236, 236); color: rgb(0, 0, 0);" width="650" cellspacing="0"
                cellpadding="0" border="0" align="center">
                <tbody>
                  <tr>
                    <td style="width:100%;">
                      <div style="font-family: Helvetica,Arial,sans-serif;overflow:auto;line-height:2" align="center">
                        <p style="font-size:1.1em">Restons en contact ! <b>#club306</b></p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table style="background-color: rgb(236, 236, 236); color: rgb(0, 0, 0); text-align: center;" width="650"
                cellspacing="0" cellpadding="0" border="0" align="center">
                <tbody>
                  <tr>
                    <td>
                      <table width="400" align="center">
                        <tbody>
                          <tr align="center">
                            <td> <a href="https://www.instagram.com/club306officielfrance/" title="Instagram du club 306"
                                target="_blank">
                                <div class="circle"><svg style="color: rgb(121, 121, 121);"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    class="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0
                                      0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827
                                      0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923
                                      1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8
                                      16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0
                                      1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16
                                      10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0
                                      0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01
                                      10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166
                                      1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275
                                      1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275
                                      1.485a2.47 2.47 0 0
  1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478
                                      2.478 0 0 1-.92-.598 2.48 2.48 0 0
                                      1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233
  0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24
                                      1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0
                                      1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0
                                      0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                      fill="#797979"></path> </svg></div>
                              </a> <br>
                            </td>
                            <td> <a href="https://www.facebook.com/club306france" title="Facebook du club 306"
                                target="_blank">
                                <div class="circle"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"
                                    style="color: rgb(121, 121, 121);" width="32" height="32" fill="currentColor"
                                    viewBox="0 0 24 24" id="facebook"><path
  d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path></svg></div>
                              </a><br>
                            </td>
                            <td> <a href="https://club306.fr/" title="site web du club 306" target="_blank">
                                <div class="circle"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"
                                    style="color: rgb(121, 121, 121);" width="32" height="32" fill="currentColor"
                                    viewBox="0 0 24 24" id="dribbble"><path
  d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,2a7.94,7.94,0,0,1,5.51,2.22A24.93,24.93,0,0,1,12.68,8.4,29.07,29.07,0,0,0,9.81,4.31,7.94,7.94,0,0,1,12,4ZM7.89,5.15A27.16,27.16,0,0,1,10.7,9a25.11,25.11,0,0,1-6,.74H4.34A8,8,0,0,1,7.89,5.15ZM6,17.31A7.9,7.9,0,0,1,4,12c0-.1,0-.2,0-.29h.68a26.67,26.67,0,0,0,7-1c.32.61.62,1.24.91,1.89a14.3,14.3,0,0,0-4.29,2.41l-.3.24A21,21,0,0,0,6,17.31ZM12,20a7.92,7.92,0,0,1-4.47-1.37,17.92,17.92,0,0,1,1.56-1.58l.32-.27a12.63,12.63,0,0,1,4-2.27,32,32,0,0,1,1.4,5A8.08,8.08,0,0,1,12,20Zm4.63-1.49a34.87,34.87,0,0,0-1.28-4.46l.34,0a.25.25,0,0,1,.12,0h.11l.1,0,.48,0a9.43,9.43,0,0,1,3.09.53A7.94,7.94,0,0,1,16.63,18.51ZM16.5,12c-.21,0-.42,0-.62,0a1.56,1.56,0,0,0-.39,0,6.64,6.64,0,0,0-.81.1h-.1c-.29-.67-.59-1.32-.92-2a26.57,26.57,0,0,0,5.13-2.4A8,8,0,0,1,20,12c0,.17,0,.34,0,.51A11.48,11.48,0,0,0,16.5,12Z"></path></svg></div>
                              </a><br>
                            </td>
                            <td> <a href="mailto:contact@club306.fr" title="ecrire un mail au club 306">
                                <div class="circle">
                                  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="32"
                                    height="32">
                                    <image x="0px" y="0px" width="32" height="32"
  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAACAcAAAg2CAQAAAAoUeRyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfnBBcRFy9MbTj0AAB3L0lEQVR42uzdSZYbSZJAQbBeXrpPz15EMhkDBoe7DTqILHvRxWTA1RQfhuCv/7sBABTw+87/7dfuPxQARPXP7j8AANDI7+v/L0L878kMAKQnBwAAV61+k7/f0f9i2QCAsOQAAOCVfm/3R3n+NycWALCRHAAA3G7e8u/w+O9cKABgOjkAALrxxj+++z8jkQCAgeQAAKjLG/9a/NsJAAwkBwBADd769/Tz5y4QAHCIHAAAGXnzzyMCAQCHyAEAkIG3/5z3/dUjDwBwkwMAICZv/5lHHgDgJgcAQAze/rPP11efOADQhBwAAHsIAMQkDgA0IQcAwCoCAPl8ftVKAwClyAEAMI8AQCXuDQCUIgcAwFgSAD24NwCQnBwAAFcJAHT39xkQBgDSkAMA4AwJAO5xZwAgDTkAAI4TAeA4aQAgNDkAAJ6TAOA6XycACEcOAICfJACYRRgACEIOAIA/RABYSRgA2EoOAKA7EQB2EwYANpADAOhJBICIhAGAZeQAADoRASALYQBgMjkAgPpEAMjszxMsCwAMJQcAUJUIALW4LwAwlBwAQC0iANTnvgDAAHIAADXIANCPLABwgRwAQGYiAOBrBACnyAEAZCQDAPe4LwBwmBwAQCYyAHCELADwkhwAQHwiAHCOLADwkBwAQFwyADCGLADwgxwAQDwyADCHLADwHzkAgDhkAGCNj2kjCgCtyQEA7CcDADu4KwC0JgcAsI8MAEQgCwAtyQEArCcDABH5CgHQihwAwDoyABCfuwJAE3IAACsIAUA27goAxckBAMwkAwC5uSsAlCUHADCDDADU4q4AUI4cAMBYQgBQl7sCQCFyAABjyABAH+4KAAXIAQBcIwMAXYkCQGpyAABnCQEAvkAApCUHAPAuGQDgJ3cFgGTkAACOEwIAnhMFgDTkAACOEAIAjhMFgATkAACekQEAzhIFgNDkAADuEwIARhAFgKDkAAC+EwIARhMFgHDkAAD+EgIAZhIFgEDkAABkAICVRAEgBDkAoDchAGAPUQDYTA4A6EoIANhPFAC2kQMA+hECAGIRBYAN5ACAToQAgLhEAWApOQCgByEAIAdRAFhEDgCoTggAyOf3TRIAJpMDAOoSAgAyc08AmEoOAKhICACoQhQAJpEDAGoRAgAqEgWA4eQAgCqEAIDq/EYBYCA5ACA/IQCgD/cEgEHkAIDcpACAjkQB4DI5ACArIQCgO18eAC6QAwDyEQIA+MM9AeAkOQAgEyEAgHvcEwDeJgcA5CAEAPCcewLAW+QAgPikAACOck8AOEgOAIhMCADgfe4JAAfIAQAxCQEAXOOeAPCUHAAQjxQAwBjuCQAPyQEAkQgBAIznngBwhxwAEIMQAMBM7gkA38gBAPtJAQCs4Z4A8B85AGAnIQCA1SQB4Ha7yQEA+0gBAOziqwOAHACwgRAAQATuCUBrcgDAWlIAAJFIAtCWHACwihAAQEy+OgAtyQEAK0gBAETnngA0IwcAzCUEAJCHJACNyAEA80gBAOQjCUATcgDADEIAAJn5bQLQgBwAMJoUAEAN7glAaXIAwDhCAADVSAJQlhwAMIYUAEBVkgCUJAcAXCcFAFCd3yYA5cgBAFcIAQB04p4AFCIHAJwlBQDQkSQARcgBAGdIAQB0JglAAXIAwHuEAAC43SQBSE8OADhOCgCAzyQBSEwOADhGCgCAeyQBSEoOAHhFCACA5yQBSEgOAHhGCgCAYyQBSEYOAHhECgCA90gCkIgcAHCPFAAA50gCkIQcAPCdFAAA10gCkIAcAPCXEAAAo0gCEJwcAPBBCgCA0SQBCEwOAJACAGAeSQCCkgOA7qQAAJhNEoCA5ACgMykAAFaRBCAYOQDoSgoAgNUkAQhEDgD6EQIAYB9JAIKQA4BepAAA2E8SgADkAKAPKQAA4pAEYDM5AOhBCgCAeCQB2EgOAOqTAgAgLkkANpEDgNqkAACITxKADeQAoC4pAADykARgMTkAqEkKAIB8JAFY6H+7/wAAw/0WAwAgLac4LOJ2AFCLFQIAsnNHAJaQA4A6pAAAqEISgOnkAKAGKQAAqpEEYCo5AMhPCgCAqiQBmMavEgRy82sDAaA6Zz1M4XYAkJflAAB6cEcAJpADgJykAADoRRKAweQAIB8pAAB6kgRgIDkAyEUKAIDeJAEYxK8SBPLwawMBgNvNxwMwhNsBQA6OfQDgL3cE4DI5AIhPCgAAfpIE4BJfFgBi8wUBAOAxewKc5nYAEJcDHgB4xR0BOMntACAqMQAAOMZtQjjB7QAgIkc6APAetwTgTW4HANHo+wDAOXYIeIPbAUAkDnEA4Ap3BOAwOQCIQgoAAEaQBOAQXxYAIvAFAQBgJJsFvOR2ALCb4xoAGM8dAXjB7QBgLzEAAJjF/UN4Qg4A9nFEAwCz2TbgAV8WAPZwNAMAa/jaANzldgCwnlsBAMBadg/4we0AYC2HMQCwgzsC8I3bAcBKYgAAsI8bivCJHACs4gAGAPazj8C/fFkAWMHBCwBE4WsDcLvd3A4A5nMrAACIxnYCbgcAUzlqAYCY3BGgPbcDgHnEAAAgMncYaU0OAOZwvAIAGdhYaMuXBYDxHKsAQB6+NkBTbgcAo4kBAEA29hcacjsAGMlRCgDk5I4A7bgdAIzitwUAALnZZWjF7QBgBIcnAFCBOwI04nYAcJ0YAADUYbOhCbcDgGscmABANe4I0ILbAcB5flsAAFCVLYfy5ADgLIckAFCZDz4oTg4AznA8AgAd2HgozO8OAN7lWAQA+vB7BCjL7QDgPWIAANCN/YeS3A4AjnMUAgA9uSNAQW4HAMf4bQEAQG92IYqRA4AjHH8AAD4eoRQ5AHjFwQcA8Ie9iDLkAOA5Rx4AwGe2I4rwqwSBxxx2AAA/+cWClOB2AHCfrwgAADxmUyI9OQC4xwEHAPCcD09ITg4AvnO0AQAcY2siMb87APjMkQYA8A6/R4C03A4A/hIDAADeZ4ciJTkA+OArAgAAZ9mjSEgOAG43RxgAwDU+WiEdOQBweAEAjGCnIhU5ALpzbAEAjOJjFhKRA6AzBxYAwGj2K5KQA6AvRxUAwAy2LFL4Z/cfANjCIQUAMM/v2+32a/cfAp5zOwD68RUBAID5bFwEJwdANw4mAIA17F2E5ssC0IkjCQBgJV8aIDC3A6APMQAAYD07GEHJAdCD3xcAALCLPYyQ5ADowBEEALCTj2YIyO8OgOocPcAaOb4bayYC+/xOMilpQw6A2iy+wAh1Ftij/yWmJzCDIEAocgDUZZkF3mFF/ezZ34bpCpznXxogEDkAqrKuAo9YRK95/Pdn8gJHuCNAEHIAVGQhBf6wcq5072/bRAZ+EgQIQQ6Aeqye0JXlMiKJALjHlwYIQA6AWqyY0IlFMqufPznTGzpyR4DN5ACoxDoJtVkb6/r+szXPoQdBgK3kAKjD8gj1WBO7+vqTN9+hLkGAjeQAqMGqCFVYC/lJHIDK/BYBtpEDoAKrIeRmDeQd4gDU444AW8gBkJ1FEHKy+DHG51eSEwHyEgTYQA6A3Kx+kIlVj7ncG4DMBAGWkwMgL4seZGC5Y5e/rz3nBeTgtwiwmBwAWVnuIDLrHJH4QgHk4Y4AC8kBkJFlDiKywJGBOwMQnSDAMnIA5GOBg0gsbWTlzgBEJQiwiBwA2VjZIAKLGrW4MwCx+C0CLCEHQCaWNNjLakZ9wgBE4Y4A08kBkIfFDHaxkNHRn9e90wd2EQSYTA6AHCxjsJ4lDG439wVgJ0GAqeQAyMACBitZveA+9wVgPb9FgInkAIjP2gUrWLbgKPcFYC13BJhEDoDYLFowmxULznNfANYQBJhCDoDIrFcwj8UKxpEFYDZBgAnkAIjKSgVzWKdgHlkA5hEEGE4OgJgsUjCaJQrWkQVgBr9WkMHkAIjI+gTjWJxgH1kARnNHgIHkAIjGygRjWJcgDlkAxhEEGEYOgFgsSnCVJQnikgVgBEGAQeQAiMR6BFdYjiCLj6fVqQdnCQIMIQdAFJYiOMtKBDm5KwDnCQIMIAdADFYhOMMqBBXIAnCGf2eAy+QAiMACBO+x/kBFvkIA73JHgEvkANjN2gPvsPZAdaIAvEMQ4AI5APay7sAxlh3oxRcI4ChBgNPkANjJkgOvWXKgM3cF4DVBgJPkANjFagOvWG6AD6IAPCcIcIocAHtYaeAxKw1wjy8QwGP+nQFOkANgB4sM3GeRAV5zVwDuc0eAN8kBsJr1Be6xwADvEQXgJ0GAt8gBsJa1Bb6zuADniQLwlSDAG+QAWMm6Ap9ZWIAxRAH4SxDgMDkAVrGkwF8WFWA8UQA+CAIcJAfAGpYT+GBBAeYSBUAQ4CA5AFawlIAQAKwkCtCdIMABcgDMZxmhOwsJsIcoQGe/b05gXpADYC4rCL1ZQ4D9ft2cx3TljgBPyQEwk+WDvqwfQCTuCdCVIMATcgDMY+mgJ2sHEJUoQEeCAA/JATCHVYOOrBtABqIA3QgCPPC/3X8AKMmKQT+/rBpAKqYWndhNucvtABjPwKUXCzWQlXsC9OGGAHfIATCapYI+LBZABf7lAXoQBPhBDoCRLBN0YaEAanFPgA4EAb6RA2AcSwQ9WCWAqkQBqhME+EIOgFEsD9RnhQA68OUBKhME+EQOgDGsDVRneQA6cU+AugQB/iMHwHWWBWqzNABduSdATb9vTndut5scANdZE6jLqgDgngA1uSPA7Xb73+4/ACRnPaCqX9YEgP+YidRji8XtALjEGKUiKy/APb46QDVuCLQnB8BZFgIqshYAPOOrA9QiCDQnB8A5FgGqsQ4AHOWeAHUIAq353QFwhhWAWnwnFuBdJidV2GsbczsA3mdoUol1FuAsXx2gBjcE2pID4F0Ofapw9AOM4KsD5CcINCUHwDsc9lTh0AcYSRIgO0GgJTkAjnPMU4HDHmAOSYDcBIGG5AA4ygFPfo55gLn8NgEyEwTa8S8LwDEOdrLzO7ABVjFxycrG24zbAXCE0UhmllKA9Xx1gJzcEGhFDoBXHOVk5kgH2EcSICNBoBFfFoDnHOLk5bIqwH5mMfnYf9uQA+AZw5CsrJ8AcZjJZGMHbsKXBeAxg5CMrJwAEfniALn4ykALbgfAI45s8vH5E0BkpjSZ2IUbcDsA7jMAycaKCZDBx7S2Z5CBGwLlyQHwkyOabBzWALn46gA5CALF+bIAfOdwJhdXTwFyMr/JwGZcmhwAXxl5ZGKVBMjNHCc+23FhviwAnxl3ZGF9BKjCFweIzlcGynI7AP5yFJODz5IAqjHZic2WXJQcAH8Yc2RgYQSoynwnMptySb4sALebAUcOFkWA2nxtgMh8ZaAgtwPAwUsGbgUA9GDeE5eduRw5AAw2orMaAvRi7hOVvbkYOYDuDDVisxIC9GT+E5PduRQ5gN4MNCKzCgL05hwgIvtzIXIAnRlmxGUFBOB2cx4QkR26DDmAvgwyorL6AfCZc4Fo7NFF+IcG6ckIIyoLHwD3+EcIicU/O1iC2wF05DAlJp/+APCMUwIYSg6gHzGAiKQAAF5zWhCHnboAOYBuDC7isdwBcJxTgyjs1enJAfRiaBGNpQ6A9zk9iMFunZwcQCcGFrFY5gA4zxlCBPbr1OQA+jCsiEQKAOAqZwkR2LETkwPowqAiDusbAKM4U9jPnp2WHEAPhhRxWNsAGEsSYDe7dlJyAPX9NqAIw8IGwBzOF/ayb6ckB1Cd0UQUUgAAMzln2MvWnZAcQG3GEjFY0QBYwXnDTjbvdOQAKjOSiMBqBsBKTh32sX0nIwdQl3HEflIAAOs5fdjHBp7KP7v/ADCJUcRuVjEA9vl1sw0BL7gdQE2OP3YTAwDYzVnEDvbwROQAKjKE2MslTQBicCKxg108DTmAegwgdrJ4ARCLk4n17ONJyAFUY/iwj4ULgJicT6xmJ09BDqAWg4ddpAAAInNOsZq9PAE5gEoMHXaxYgEQn9OKtezm4ckB1GHgsIfPWwDIwpnFWvbz4P7Z/QeAIYwa9rBUAZDNr5vNiXV+25YiczuAChxp7OF4AyAnJxhwkwOoQAxgB9ctAcjMOcYqdvXA5ACyM2BYzwoFQAVOM9awr4clB5Cb4cJqUgAAdTjVWMPOHpQcQGYGC6tZmgCoxtnGCvb2kOQA8jJUWMsnKADU5IRjBbt7QHIAWRkorGRRAqA25xzz2d/DkQPIyTBhJSsSAPVJ39COHEBGYgDrWI4A6MOZx1y2+GDkAPIxRlhFCgCgG2cfc9nkQ5EDyMYIYRXrEAA9OQGZyTYfiBxALsYHa/hsBIDOnIPMZKMPQw4gE6ODFaxAAOCOADPZ6oOQA8jD2GAFyw8AfBDImcdmH4IcQBZGBvNZewDgKycjFCYHkIMYwHwWHgD4yfnIHPb7AOQAMjAsmM29AAB4xCnJHHb87eQA4jMomMuSAwCvOCuZwZ6/mRxAdIYEc1lvAOAI+ZwZ7PpbyQHEZkAwk8UGAN7h3GQ8+/5GcgCRGQ7MZKUBgHc5PaEQOYC4xADmcS8AAM5xhjKarX8bOYCojAXmscYAwBVOUsay+W8iBxCTkcAsPtMAgOucpoxl+99CDiAi44BZLC8AMIbAzljeAWwgBxCPUcAc1hYAGMvJCqnJAUQjBjCHhQUAxnO+Mo73AcvJAcRiCDCDewEAMItTlnG8F1hMDiASA4AZLCkAMJezllG8H1hKDiAODz/j+cQCAFZw3jKK9wQLyQFE4cFnPKsJAKwiwUM6cgAxiAGMZikBgNWcvYzgncEycgAReOQZzToCADs4gRnBu4NF5AD287gzlnsBALCPc5gRvENYQg5gN486Y1lBAGA3pzHXeZewgBzAXh5zRvJ5BADE4ESGBOQAdhIDGMniAQBxOJe5ynuF6eQA9vGAM457AQAQjdOZq7xfmEwOYBcPN+NYNgAgJmc013jPMJUcwB4ebMaxaABAXM5pCEsOYAcxgFFcQwSA6JzVXOGdw0RyAOt5pBnFegEAGcj3XOHdwzRyAKt5nBnDYgEAmTi3Oc87iEnkANbyKDOGlQIAsnF6c553EVPIAUA27gUAQE5OcAhFDmAlVY/rLBIAkJdznLO8k5hADmAdjzDXWSIAIDe3/DjLu4nh5ABW8fhylfUBAGpwonOOdxSDyQGs4dHlKosDANThXIcA5ABWEAO4ytIAALU42znD+4qh5ADm89ByjS8JAEBFznfO8N5iIDmA2TywXGNVAICqnPKc4f3FMHIAc3lYucaaAACVuQMIG8kBzCQGcIUFAQA6cN7zLu8yBpEDmMdjyhVWAwDowqnPu7zTGEIOYBaPKFdYCwCgEyc/bCAHMIcYwHm+JAAA/Tj9eY/3GwPIAczg4eQ8ywAA9GQH4D3ec1wmBwCRWAQAoC97AO8RBC76Z/cfgII8lpxjBQCA7n7d7JKwjNsBjGaAc44YAADcbnYC3uG9xyVyAGN5IDnHwQ8A/GEv4DjvPy6QAxjJw8gZ/iUBAOAruwHHeQ9ymhzAOB5EznDcAwA/2RBgOjmAUcQAznDUAwD32RI4yjuRk+QAxvAIcoZjHgB4zKbAUd6NnCIHMILHj/f5jQEAwCu2BZhIDuA6MYD3OdwBgCPsDBzjPckJcgCwnoMdADjK3sAxgsDb5ACu8tjxHl8SAADeY3fgGO9M3iQHcI1Hjvc4zgGA9/k4ASaQA7hCDOA9DnIA4Cx7BK95f/IWOYDzPGy8xyEOAFxhl+A171HeIAdwlgeNd7jiBwBcZ5+AgeQAzhEDeIejGwAYw1bBK96pHCYHcIZHjHc4tgGAcWwWvOLdykFyADCXIxsAGMt2AUPIAbxPbeM4xzUAMJ4Ng+e8YzlEDuBdHi2O8usDAYBZbBk8513LAXIA7/FYcZRDGgCYya4BF8kBvEMM4CgHNAAwm32DZ7x3eUkO4DgPFEc5nAGAFewcPOP9ywtyAEd5mDjKwQwArGLvgNPkAGAkvz4QAFjL7sFjPtJ8Sg7gGA8SRziOAYD1bCA85n3ME3IAR3iIOMJRDADsYQuBE+QAXhMDOMIxDADsYxPhEe9mHpIDeMXjwxGOYABgL9sIj3hH84AcwHMeHV7z6wMBgAhsJPAWOYBnxABec/ACAFHYS7jP+5q75ADgCocuABCJ3YT7BIE75AAe88jwigMXAIjGfgIHyQE8IgbwisMWAIjIjsI93t/8IAdwn4eFVxy0AEBU9hTu8R7nGzmAezwovOKQBQCA1OQAfhIDeM4/LAgARGdb4R7vdL6QA4D3OFwBgAzsLNwjCHwiB/CdB4RnHKwAQBb2FnhKDuArMYBnHKoAQCZ2F37yjuc/cgCfeTR4xoEKAGRjf+En73r+JQfwl8eCZxymAEBGdhh4QA7gDzGAZxykAEBW9hi+897ndrvJAcARDlEAIDO7DNwhB/BBH+ORXw5QACA9+wxfef9zkwP44GHgEUcnAFCDrYavvAeSA7h5EHjMsQkA1GGzgS/kAMQAHnFkAgBQV/t3QnIAcJ8YAABUY7/hq+ZBQA7orvkDwEMOSwCgIjsO/EcO6E0M4D4HJQBQlT2Hz1q/I5IDOmv90ucJhyQAUJldB263mxzQmRjAfQ5IAKA6+w5/NX5fJAcAnzkcAYAO7Dz81TYIyAFdtX3J85SDEQDowt5De3JAT2IA9zgUAQDoqOn7Izmgo6Yvdp76JQYAAM3YfmhODuhHDOAnhyEA0JEdiD9avkuSAwAHIQDQlT2IPxoGATmgm4Yvcl5wCAIAndmFaEsO6EUM4DsHIADQnX2ID+3eLckBnbR7efOSww8AwE5EU3JAH2IA3zn4AADgr2bvmeQA6EoMAAD4w2bEh1ZBQA7ootXLmgMceQAAn9mOaEcO6EEM4CvHHQDAdzYkbrdW753kgA4avaA5xFEHAHCPLYlW5ADoxjEHAPCITYlGH6fKAfW1eTFziCMOAACea/IeSg6orskLmYPEAACA5+xLtCEH1CYG8JnDDQDgNTsTTd5JyQGVtXgJc5iDDQDgGHsTLcgB0INDDQDgOLsTDT5clQPqavDy5TAHGgAA8IUcUJUYwF9iAADAu2xQlH9PJQfUVP6FyxscZQAAZ9iiKP6+Sg6A2hxjAABn2aQoTQ6oqHjD4g2OMACAK2xT3ZV+byUH1FP6BctbHF8AAMADckA1YgB/iAEAANfZqbor/A5LDoCaHFwAAGPYqyhKDqilcLniLQ4tAIBx7Fa9lX2XJQdUUvZlypscWAAAwAtyQB1iAB/EAACA0WxYvRV9ryUHQC2OKgCAGWxZvZUMAnJAFSVfnrzNMQUAMItNi2LkgBrEAG43RxQAAMxS8D2XHFBBwRcmJ4gBAABz2bcoRQ6AGhxOAADz2bk6K/cxrByQX7kXJSc4mAAA1rB3UYYckJ0YgEMJAABWKPbuSw4AAAA4zkcxFCEH5FasTnGKAwkAYC37V1+l3oHJAZmVeilyksMIAGA9OxgFyAF5iQE4iAAAYK1C78PkAMhLDAAA2MUmRnpyQFaFmhQnOYIAAHayjXVV5r2YHJBTmRcgpzl+AAB2s5F1VeT9mByQUZEXHxc4egAAgEvkAMhHDAAAiMFe1lWJj2jlgHxKvPC4wKEDABCH3Yy05IBsxIDuHDgAALBfgXdmcgBkIgYAAERjQyMpOSCXAgWKCxw1AAAR2dJ6Sv/uTA7IJP3LDQAAgBjkgDzEgO5UZwCAqGxqPSV/jyYHQA6OGACAyGxrpCMHZJG8O3GR4wUAIDobW0ep36fJATmkfpFxmaMFAAAYTA6A6MQAAIAc7G0dJf7oVg7IIPELjMscKgAAedjdSEQOiE8M6MyBAgAAsaV9xyYHQFxiAABANjY40pADoktbmgAAoCVBoJ+k79rkgNiSvqwYwkECAABMIwdEJgZ0JgYAAGRlk+sn5Xs3OQAicoQAAGRmmyMBOSCulH2JIRwfAACQS8L3b3JAVAlfTAwiBgAA5GenIzw5AGJxcAAA1GCv6ybdR7pyQEzpXkgM4tAAAACWkAMiEgMAACA/H/V0k+ydnBwAcTgwAABqsd8RmBwQT7KixDAOCwAAyC3Vuzk5IJpULx8GEgMAACqy5RGWHAAROCYAAKCCRB/wygGxJHrpMJAYAABQl12PoOSASMQAAACoRxDoJc37OjkAdnM8AAAAy8kBcaRpSAwlBgAA1Gfn6yXJezs5IIokLxgGczAAAPRg7yMcOQD2cSgAAACbyAExuBvQkRgAANCJ7a+TFO/w5IAIUrxUAAAAqEMOgD3UYQCAbmyAnST40FcO2C/By4ThHAUAAB3ZAgnkn91/gPbEgI4cAwC5nD+tTXyAvn5HPwXkAFgt+FAAKGtHgr/yv+m8gJp++UCQKOSAvYyCfix3ALNUO1Vf//c4UyAnQaCP4PcD5ICdjAEAeJfT86/Hfxeh108AYpADYCXrGcBx3vif9+jvzjkEMbgf0Efo+wFywD5GQD+BRwHAds7FFe79LTudAJqSA3ax9PRj3QL4yzkYx8+fhRML5nM/oI/A9wPkAFgj7BAAWMTim4dAACsIAmwnB+zh0QegPqddHd9/lvIAQAFywA7Wo36sTUAPTrguvv6knXJwjvsBXYT9uoAcAPMFffwBBrDK4u4AQFJywHoWp24sRUA1TjKe+/wKcQrCM+4HdBH0foAcAHOFfPABTrCycoavFQCEJQesZpkCIA+nFmO5NwDfuR/QRcj7AXLAWh72bgI+9AAvOa1YQRqAD4IA28gBMI/lBsjEOso+0gBQX8D7AXLAShatXsI97gB3OJuIRhqgH/cD2EQOWMdDDkAUziRykAYAJpIDYA5LCxCPCEBmf1+/zljqcT+gh3BfF5ADVvGA9xLsQQeacwZRizAAMIQcsIZFrBfLCRCBs4f6hAHqcD+gh2D3A+QAAKjFQklHwgD5CQIsJwes4MHuxRoC7OG0gdtNGABiC3U/QA6AsQI93kATMgDcJwyQjfsBLCYHzOeh7sS6AazjfIGj/jwtzmmAT+SA2SxrnVgygBWcLHCW+wJE535AB4G+LiAHAEAWlkQYxX0BADlgMotbJxYKYBanCcwiCxCN+wEdhLkfIAfM5FHuJMgjDZTiHIFVfI0AaEgOgBGsDsBYQgDs4r4Au7kf0EGQ+wFywDweYwDe5eyAKGQBoDw5AK6zKADXCQEQkyzAeu4HsIgcMItHuA/rAXCNEwMykAVYSRCoL8TXBeSAOTy+ALzirICMPp7cAGs8wFVyAFxjHQDeJwRAdu4KMJv7AfUFuB8gB8zg0e1j+yMMJOOEgFpkASAxOQDOc/QDxwkBUJmvEDCe+wFMJweM57EF4DPnAnThrgDwju1fF5ADRrP09eGoB15xJkBP7gowhvsBTCYHwDmOeOAZCxzgrgDwyub7AXLAWNa/LhzswCNOAuArdwU4z/0AppIDAGAMKxvwmCgAhCMHjGQR7MJRDnxl/gPH+AIB73I/oLqtXxeQA8bxoHbhAAf+MvuBM9wVAAKQAwDgDCEAuEoU4Aj3A6rbeD9ADhjFQ9qFIxsw84GRRAFgEzkA3uGohu6EAGAOUYDH3A9gEjlgDA9oD45o6MykB+YTBaCjbV8XkANGsCICVGbKA2uJAnznfgBTyAFwlEMZOrJ+AbuIAtDHpvsBcsB1VsUeHMbQjekORCAK8MH9ACaQAwDgOysXEMvvmyQADCcHXGVl7MEBDF2Y6kBU7gl0535AbVu+LiAHwGsOXujBmgXEJwoAw8gB11gdASowzYFcfHmgJ/cDGEwOuMLj2IPDFmozy4Gc3BOAWjZ8XUAOgOccslCXEADkJwr04n4AQ/1v9x8gMY9iBw5XqOq3KQ4UYqZBBcufY7cDAOjG0gxU5J5AD+4HMJAccJbHsAMHKlRjdgPV+SWDwGG+LHCOhbIDRynU4iot0IV5V5sdtbLFz67bAQDUZzEGuvHVAeAlOeAMa2UHjk+owcQGOvPVAeAJXxaAexycUIHrsgBmYUU21cqWPq9uB7zPQAWIz6wG+MstAeAOtwPgJ8cl5OaTMICffpuOhdhWK1v4nLod8C5DtD7jFTIzpQGecU8A+I8cAEANQgDAMZJABb+ce1znywLv8dDV53CEjFyABXiPuQlxLXs65YB3GJr1iQGQj5UW4BzzMzd7K5f5sgAAeVlkAa7xxQFozO2A4yyd9TkMIROfagGMYZ5mZXeta9Ez6XYA/GGgQh4WV4Cx3BKAhtwOOMrqCRCDT7EA4IOEwyVyAHwwTCEDKQAA6GDJxuPLAsdYP6sTAyA+kxgAYCC3AwCIz60AALjHh1pcIAccYQmtzhiFyKQAAKCfBfuPHPCaNbQ6MQDikgIAVrERZeUnx2l+dwAAMQkBAAATuR3winW0Oj0VInIrAACOss9WNX0bcjsAgFiEAACABdwOeM5SWp2WCrG4FQAA8MfkvUgOoDMxACKRAgDgHFstp/iywDMWU4A1zFsAgMXcDqAvFRVicCsAYD97UXZ+glVN3ZLcDnjMelqbkQkRmLQAAJu4HQDALmIAAIziwy7eJgc8YkmtzbiE3XxFAADgtYkbky8L3GdJBZjHjAUA2M7tADpyNwD2cSsAAOaw4/ImOeAeq2ptBiXsIgUAxGQ7gsim7U9yAABrSAEAMJeww1v87oCfLKy1GZKwg8kKABCMHEAvYgCsJwUAAATkywLfWVsBxvHbAgBgJR9+1TRpn5ID6MR4hLWkAACAsOSAr6yuAGO4FwCQhQ9MavHz5DA5gD6MRlhFCgAAGGnKbiUHfGZ9rUwMgFXMUgCABOQAAMZxLwAAdvMxGAfJAX9ZYSszFGE+KQAAYJYJe5YcAMAIUgAAROGjMA75Z/cfIAyLbGUGIsxlggLkZU+CttwOoD6HHMzkKwIAACsM37nkgA+WWYAzTE8AiMgHYhzgywJUZxTCLFIAAEBibgfcblZagHf5igAAxOZDsYoG719yALUZgzCDFAAAkJ4vC1hrKxMDYDwzE6AS2xI05nYAAMeJAQCQhdjDC3KA1bYuAxDG8vsCAAD2GrqNyQEAHCEFAACU0j0HWG/rcjcAxnEvAAAyshHzVPccAMBzUgAAQBwDN7PeOcCKW5cSCmOYkwCV2Zigtd45gKocbTCCewEAkJ29mCc65wBrLsBjZiQAQETDtrTOOYCqNFC4yr0AAKjCbsxDfXOAVRfgPvMRAKCBf3b/AWAw/ROukAIAAJroejvAwgvwk9kIAPX4uKyeQTub2wHUYtjBWVIAQDf2Jmiu5+0AS29VDjU4y1wEAGimZw4A4DMxAAAq86FZPUO2t45fFrD2VmXMwRlmIgBAS24HAHQmBgAANNUvB1h9q3I3AN7120QEgCbsytzRLwcAcLuJowDdeXsIuQ3Y5br97gDrb1UONHiHWQgA0J7bAVQgBsA7xAAA6MfGzA+9coAVGMAkBACo4PJW1+3LAlSkdMJRUgAAAP/qdDvAGgz0ZgoCQGc+ROMbtwPIzliDI6QAAD6zQQGNbgdYhYG+TEAAgHou7nh9cgA1KdvwmhgAANxudme+6fJlAcsw0JPpBwDAXW4HkJm+Cc+JAQAAPNAjB1iIgY7MPgDgKx+nVXNp3+vyZQEqMszgMSkAgMdsUcCtx+0ASzHQjbkHAMALHXIANana8IgYAAA8YovmP/VzgLW4JmMM7vtt6gEANHJh96ufAwD6kAIAADhIDiAjdwPgHjEAAHjNLs2/qucAyzHQhXkHwDHeDAK3261+DqAiRxh85zcGAAB0dXoPrJ0DrMdAB2YdAPAOH69xu92q5wAqMrzgKzEAAIAT/tn9B5jIigxUZ84BAHCS2wHk4m4A/CUGAADn2KprObkV1s0B1mSgNlMOgDO8DQT+VTcHUJHjC/4QAwAAuKTq7w6wKAN1mXAAAFzmdgB5uBsAt5sYAACMYLeu5dSGWDMHWJaBqsw3AACGqJkDqEi/BDEAAIBh5ACAHH6LAQDAQD5ua69iDrAwV2RY0Z3JBsAIdiqo6sS2WDEHAFQjBgAAMFi9HGBprkjHpjdzDQCYwZbdXL0cAFCLGAAAwATVcoC1uSLVkr78+kAAAI55e2+slgMA6pACAACYplYOsDpX5G4AXZloAIxmr+I7r4nWauUAgCrEAAAAppIDiE2vpCcxAACAd725Q1bKAdZnoAbTDABYxcdvjf2z+w8ATxhO9CMFAACwRJ3bAVZoID+TDACARerkAOpxN4BuxAAAZrJbAV9UyQGWaCA7cwwA2EEoquStjbJKDqAeY4lexAAAAJaqkQOs0UBuphgAAIvVyAHU424AnYgBAAAsJwcA7CUGAAB7+Siukjd2y392/1nX/ueShIFEF+YXAKvYr4Bv3A4A2EUMAABgm/w5wDpdj3ZND6YXABCFDbyl/DkAICMxAACArbLnAAt1PcokHZhdAADMcXjTzJ4DAPIRAwAA2E4OAFhLDABgPfcvecVrpKHcOcBSXY8xRHXmFgAAIeTOAQC5iAEAAASROQdYq+txN4DaTC0AAOY7uHVmzgEAmYgBAEBkPppr55/dfwD4jwFEXVIAAADB5L0dYLkGsjCvANjLhy7AHXlzANU4pqhKDAAAYK1DG2jWHGC9BnIwrQCALHxA10zWHEA1Rg81iQEAAASVMwdYsIEMzCoAAMLKmQMA4hMDAAAITA4gAl8VoB4xAADIx17eSsYcYMkGojOnAIjDGzzo6MA+mjEHUI0jimrEAAAAwsuXA6zZQGymFAAACeTLAVTjbgC1iAEAAKQgBwCMIwYAALn5sK6RbDnAql2NcUMlJhQAAFG83E2z5QCAqMQAACLy4QvwQK4cYNmuxvFEHeYTAACp5MoBADGJAQBAFT6ya0MOALhKDAAAIJ1MOcDCXY3uSA1mEwAAEb3YUzPlAIB4xAAAAFLKkwOs3NW4G0AFJhMAsdm4OMPrpok8OQAgGjEAAIC05AD2UBzJTwwAACCxLDnA2g3EYioBAJBalhwAEIkYAABAfE+31hw5wOJdja8KkJuZBADUZl9vIUcOAIhDDAAgC2/pgCfkANZzMJGZGAAAQAkZcoDlGwAAAIbKkAOoxd0AMpMnAQDI5Mn+Gj8HWL6BKMwjAKALH+I1ED8HAMQgBgAAUIgcwFoqI1mJAQBkY+8CnoqeAyzgQARmEQAAxUTPAdSiUZOTGAAAQDlyAMBzYgAA0JGP8qp4uM3GzgGWcGA3cwgAgJJi5wBq0RfJRwwAAKCoyDnAGg7sZQoBkJcPYoAXIucAanEkkY0YAABAYXIAAAAAP/lAr7i4OcDncsBOZhAAAKXFzQHUoiySixgAAEAVD3ZbOQDgOzEAAIDyouYAy3gt7gaQifkDAEADUXMAwB5iAAAV+DCGMbySSouZA6zjwB6mDwAATcTMAdSiKZKFGAAAQBtyAMAHMQAAgJrubroRc4CVvBZ3AwAAAMKJmAMA1hMiAQBoRQ4AEAMAqMXtTMbxairsn91/gB8s5bUYH2Rg7kA+c84X0wCARuLlAIC1rP8Q28qw/Oh/y5wAoCA5gJncDSA+Sz5EE/Hs+PlnMjsASC9aDnC4AiuZORBBxADw7p/ZNAEgtt8/z9toOQAA6CBjAjj+3yMOAJX8MtWqipUDvMxqqbbqUY+ZA6t1ORk+/3eaNKzX5UkDLoqVAwDWsaLDKr3fmvz9rzd1AAhFDgB6spbDfL0zwE/CAAChRMoBjsZaLIFEZt7APOb/a8IAAAFEygEAa1i/YQYZ4AxhAIBt5ADmsBQC9GHmj/Dnb1EWAOLxbwvU8OOfGoyTA7zAgDVMGxhFBphBFuAqTyZwUJwcALCCBRtG8HZjvl83EwuAqeQAZrAmEpXVGq4x31cysQCYKkoOcOAB85k0cJ4QAADFRMkBAEBMQgAAlCQHMJ7FkZjcDYB3mecAUNj/dv8BbrebJR2Yz5yB9/wSAyAlTy5zeGWV5HYAoxkVRCQGwHHmOADU9PvrKS8HAPWJAXCMEBCJyQXAZBFygOMOAPYSAgCgnQg5gEoslMQjOcJzJjcAtCQHALWJAfCYEAAAje3/lwWs6sA8Jgw84l8OgIo818zj1VWQ2wGMZEgQixgA95nWAIAcAACNCAFZyJkATLc7BzjsgFnMF/hKCgAAPtn/uwOow6JJJGIAfOY3BQAA33bkvbcDrOvAHKYL/CUEAAB37P6yAHVYNwHiMZsBgAfkAKAedwNACICOPPfM9cuOVY0cAFTjoAJvCQCAl3bmACt7JVZPojBZ6M48rsAkA2ABtwMAoAopAAA4TA4AKvGJGn1JAQDAW/637X/Z0l6JJZQYzBX6MocBgDftywEAY4kBdPVLDABusiBwzKed2ZcFACAv6z8AcNKu2wE+xavEMkoEpgr9uBVQlXkGROXcKcbtAKACyzPdWMgAgIvkACA/MYBepAAAYIA9XxawuldiLQVYydQFAIZwOwDITmCkDykAeMR8AN4mBwC5iQF0YdUHAIbakQMs75VYT9nLPKEHs7YTcw2ARXb9Q4MAwDFiAAAwgRwA5OUzNOr7JQYAEIhTqYL/duj1OcD6XolxwE6mCfWZsgDANH6VIABEJAUAx5kYwAlyAJCTuwFUZrEHAKZb/WUBC3wl1lX2MUuozHTtzHQDYBm3A4B8rMvUJQUAAIv4lwUAIAoxAABYZu3tAJ/oVWJpZReThJpMVQBgKbcDgFzEAGoSA4DzTBDgFDkAAPb6ZZUHIA1nViFyAOcYA+zhbgD1mKcAwBYrc4A1HrjGFKEa9wL4ypQDYIV/zxu3AwBgDykAANhIDuAMKyw7+NSMWkxSAGCrdf/QoEUeuMIMoRIpABjHRAFOcjsAANayugMAAay7HQBwnrsBVCEFAABBrLodYJWvxDLLaiYIVZifPGPWAbCULwsAwBpiAAAQiBwAROfzMir4JQYAUIQTrQw5gHd5/FlLDKACkxMACGdNDrDOA9CXGADMY8IAp/mXBYDIxESys6gDAEH5sgDvsdiykhhAdmYmx5l4ACy2Igc43gDoSAwAAGL6fbu5HQDEJSWSmxgAAITmdwfwDsst64gBZGZaAgDhzb8dYKUHoBcxAFjFvAEu8GUBICIhkbws5wBACnIAEI8YQF5iAACQhBzAcZZcgOfMSc6SQYFMnHdFzP5Vgg434F3mBjlZjQCAVNwOAGIRA8hJDAAAkpEDOMqqC/CICQnsYPYAl8zNAT7lA95japCRhRwASMjtAAC4QgwAAFKSA4A43A0gHzGAEUw/ADaY/S8LUIWFl/msw2RjMgIAic28HWC1B6AuMQAASM2XBYAYBERyEQOA3cwh4CI5gCMcN8wmBpCLqQgApDcvB1juAahJDAAAsvvtdgAQgXxIJmIAo5mBAGwhBwDAcWIAAFCEHMBrll/m8rkYeZiHAHC7ORGLmJUDrPfAMaYFeVh9gDhMJOAytwMA4AirNwBQihzAKxZgZnI3gCzMQgCgGDkAAF4RAwCAcubkAJ/3AUeYFeQgBjCTSQjAJm4HALtYgclBDAAASpIDeM4aDPRmCgIRmU3AAP9M+P/pEz/gNZOC+KzbAEBhbgcAwD1iAABQmhwA7OBuAAAAbCUH8IzPxoCuzD/WEEcB2GZ8DnCsAa+YE0QnBgAA5bkdAKwmBhCdGAAANCAH8JiFGOjI7AOiM6eAIeQAYC13A4jNkg0ANDE6B1j0AchLDAAA2nA7AFhJMiQyMYDVzEQANpIDeMRaDPRi6gHAcc7NAuQAYB2fgxGXpQYAaGZsDrDqA4+ZEMQlBgB5mFjAIG4HANCd1RoAaEgO4D7LMaO5G0BU5h0A0JIcAEBnYgD7yKQAbDUyBzjUgEfMB2ISAwCArn67HQBAV2IAANCYHMA9VmTGcjcAAMawpQHDyAEA9GSlBgBaG5cDfPoH3Gc6EJEYAAA053YAMJcYQERiAADQnhzAT9ZkoDZTjgjEUgA2kwOAmay7xCMGAADcxuUAKz8AGYgBQGZmGDCQ2wHAPEIh0VikAQD+JQfwnWUZAACgPDkAmMXdAKKROwEA/jMmB1j6AYhODCASuxMA27kdAMxh1SUWMQAA4As5gK8szEBFZhtQgVkGDCUHADO4GwAAAKGNyAHWfgAi83kaAMAPbgcA44mERCIGAADcIQfwmaUZqMZcIyLRFIAA5ABgNGsucYgBAAAPXM8BFn8AAABIxu0AYCyJkDjcDQAqMdOAweQAAGqyOAMAPCEH8JfVmevcDSAKEw0A4Ck5AIB6xAAAgBeu5gCfBAJ/mQgAr5mVAITgdgAA1bgbAADwkhzAH9ZnrvJ5FzGYZkBFZhswnBwAQCUWZgCAQ67lAJ8FAn+YBwAAkIjbAQDU4W4AAMBBcgAwgrsBRCAGkIF5CUAQcgAfLNFAduYYAMAbruQAdRv4YBoAwEyCJzCB2wEAVGBVBgB4ixwAXOVuAPuJAQAAb5IDuN0s0gAAAM3IAcA17gawn6RJHmYmAGGczwGOMwAiEAMAAE5wOwC4QhhkNzEAqM+kA6aQAwAAAKAdOQDFmfPcDWA38wsA4KSzOcCbAAB2EwMAAE5zOwA4SxYEAIC05AAAcnI3gHxkVAACkQOAcyy17CUGAF2Yd8AkcgCOGAAAgHbO5QCfCgKwk5AJAHCR2wHAGaIgO4kBAACXyQEAAADQjhwAvM/dAHZyN4CszE4AIvklB3RnrQZyMbWAXkw9YJozOUDbht7MAAAASM/tAADy8CkZAMAgcgDwHncD2EcMAAAYRg4AAACAduSA3nzSxrvcDWAfE4vczE8Agnk/BzjMAAAAIDm3AwDIwN0AoCOzD5hIDgCOczuIXSzEAACDyQEAAADQjhzQmU/beI+7AexiWgEADPduDvB2AIC1xAAqsEEBEI7bAcAxVlkAAChEDgAgMncDgL5MQGAqOQAAAADakQP60pt5h68KsIdJBQAwyXs5wBsCANYRAwAApnE7AHhNCgQAgGLkAABicjeAOkRVAAKSAwAAIB5RFJhMDgBe8akWO1iDAQCmeicHeEtQiUUbAACgMbcDgOeEQHaQLAEAJpMDAIhGDAAAmE4OAJ5xNwDgKpMUgJDkAABicTcAwCwkPqmzADmgJwcMAABAa8dzgPoD/XjuWU+uBABYwu0AAAAA6OWXHAA85m4A67kbAACwiBwAADCPtApAUHIAAFG4GwDwwTwEFjiaA5TtShwwHOGpZzWzCQBgIbcDAAAAoB05ALjH3QBWczcAAGApOQAAAADakQMA2M/dAACAxeQA4CdfFQAYwzzlDIkUWOJYDnCUVeKAAaIxlwAAlnM7AAAAANqRA4Dv3AdiLXcDAAA2kAMAAACgHTkA+MrdANZyNwAAYAs5AABgDoEVgMCO5ABHWSU+hwMiMZMAvjMZgUXcDgA+k/8AAHjFzliCHADALj4BAwDY4dftJgcAAABAQ3IA8JdrX6zkbgAAwEZyAADADBIrAKG9zgGOMujC085K7gYA3GM6Asu4HdCLAwYAAICbHADADuIkAMBmcgDwwVcFAACgETkAgNXcDQAA2E4OAAAAgHZe5QDXh6EHzzrruBtAD+YqZ5iQwEJuBwAAAEA7ckAnejMAAAC3200OAG43V1pZSZgEAAhBDgAAAOA4HyVl9+/HM3IAAOu4GwAAEMTzHKD6QAeedIDRTFbOkEyBpdwOAGAViy4AQBhyAAAAALQjB/ThUznuc6GVVUwhAIBA5AAAAABoRw4AAACAduQA6M1XBVjFVwXoxGzlDHMSWOxZDnCUAQAAQEluBwAwn8+8AACCkQOgM3eAAACgKTmgC5/MAfuYQABQhw+UsvtvM5MDAAAAoB05APpSdgFmMF05wz0qYDk5AIC5rLgAAAE9zgHKNgAAABTldgB0JfmxhrsBAAAhyQEAAADQjhwAAAAA7cgBPbisy3e+KsAapg8AQFByAADAOHIrZ4inwAZyAACzWG8BAMJ6lAOUbajMEw4AwBn2yOw+fVzjdgAAAAC0IwcAMIevCgAABCYHAAAAQDtyAPTjG1+s4G4APZmwnGFiAlvIAQAAANCOHNCB4gwAAMAX93OAi25Ql+ebFWRIAIDg3A4AAACAduQAAAAAjnDPtBQ5AHoxwlnBVwXoyozlDDMTWOfLxJEDAAAAoB05AAAAANqRAwAYy7VXAIAE5ID6LOb85VutAADA7Xa7nwO8YQDgLAkSACAFtwMAAGAXERXYRg6APtz8AZjJlAUgFTkAgHF8ygUAdcmexcgBAAAAUN+3D27kAAAAAGhHDoAuXO5iPl8VAABIQw4AAIA9ZFRgIzkAAOA6d7AASOZnDnCY1aI5A6uYNwAAibgdAD0IfQAAwCdyAAAAAK/4eKkcOQCAEXxVAAAgsh/bmhwAAAA7CKnAVnIAdOBqF8Bc5iwA6cgBAAAA0I4cAMB1LrwCACQjB0B9rrACAADffM8B3jYAAADwlXeKBbkdAMBVvioAABDbnX1NDqjNig4AEJM9DdhMDoDqXOwCmM2kBSAhOQCAa3y+BQCQkBwAAAAA7cgBAAAA0I4cALX5Piuz+aoAANRnpyxJDgAAgNXEVGC7rzlA8wEAeI/9CYDo7iZItwMAAACgHTkAKvOJFbO57AoAkJQcAAAAAO3IAQAAANCOHFCZS7wAABHZ0sjFF1CLkgMAOMs6C5ZkANKSA6AuKyoAAPDgIxw5AAAAANqRAwA4x1cFAAAS+5wDXCwGAACAFtwOgKoEPgCIye0qcrFVliUHAAAAQDtyAABn+GwLbjefmQEQ38OtTQ4AAACAduQAAAAAaEcOgJpcXwUAAJ6QAwB4n98cAHCWCUouPmQqTA6oy1EDAADAA3IAAMA5PjMDIDE5ACqyoAIAAE9vjcsBALzLl5EAANL7mwN8mggAAABNuB0AAACruF9FLj40Lk0OAAAAgHbkAKhHxWUun2zBB9MWgNTkAAAAAKjo6cc4cgAAAAC0IwcAAADwky9FFScHAAAAQDtyAFSj4jKXXyQIcJ4ZCgQiBwAAvE98BSC6FwlSDgAAAIB25AAAAABoRw4A4DjfegWALnwpqrw/OcCPuhore1eeZQAA4AC3AwAA3iW+coaPa4BQ5AAAAACo5mWClAMAAACgHTkAgKNccwWALnwpqgE5ACoxtgEAgEPkAACA94ivABQgBwAAwHy+cAWsdGDmyAEAAADQjhwAAADAZ74U1YIcAMAxrrnCB0syACXIAVCHBRUAADhIDgAAAIB25AAAAJjNF67IxJ3T/A7NHDkAAAAA2vnIAeoPAM/5XAs+2JoAKMLtAAAAAGhHDoAqfF4FAAAcJgcAAADwhw+Z8jv4JU85AADgKEsy5/j9K0BAcgAAAAC0IwcA8JrPtQAAipEDAAAA+OBLUY3IAVCDwQ0wn1kLQHyHb3XKATW51gsAAMATcgAAAMzkgxogJDkAAAAA2pEDAHjF51pwu/nNAUAHJl0rcgAAAADU8MbHOHIAAAAAtCMHQAWudQEAAG+RAwAAXhNegfpMumbkAAAAmMevYwXWeWvi/O+mAQEAAEAzbgcA8JzPtcCHJwAUJAcAAAAgfLYjBwAAAEA7cgDkp+QCAABvfsVTDgAAeE525Ty/fwUISw4AAADoTvhsSA4AAACAduQAAIBnfGIGQAZvfzlJDgDgGd96BQAoSQ4AAADozT2oluQAyM7wBoCo3LACApMDAAAeE10BKEoOAAAAgNxO3EaSAwAAADpzD6opOQAA4BErMgBlyQEAAADQjhwAAAAz+HcFgFVOzRs5AIDHrLL05qsCQAdmXVtyAORmfAMAACfIAQAAANCOHAAAcI/7V0AHZl0FJ7/eKQcAAABAO3IAAACM55exAsHJAQAAANCOHAAA8JNv0wIdmHUVnL6LJAcAAABAO3IAAAAAtCMHQGaudzGXX4NFX+Yr0IFZ15wcAAAAowmqwBoXps3/FCEAgC9sRwA04HYAAAAAtCMHAAAA9OMmVHtyAADAZxZkALK49HtK5AAAAABoRw4AAADoxk0o5AAAgE8syIzgnxkEEpADAAAAIJ+L6VEOgLx8ggUAAJwkBwAA/CG0Aj2YdtzkAAAAAGhIDgAAAIBsLv/SUjkAAOCDy7OM4d8VIDrTjtvtJgcA8Ih1FgCgMDkAAOB282kZAJkM+OBGDgAAAOhD/ORfcgAAAAC0IwcAAPi0DIB25AAAAIAuxM8ahvzKZzkAAMB6zDj+XRYgCTkAAAAA2pEDICufZAEA8B4bJJ/IAQBAd9ZjADIZ9KUkOQAAAADakQMAgN7cDQC6MO/4Qg4AAACALIb9+yVyAAAAjOKfGQTSkAMAgM5cnQW6MO/4Rg4AAACAduQAAKAvn5UBkMvAryTJAQAAANXJn/wgBwAAAEA7cgAA0JXPygDIZei/XiIHAADAGP6ZQaKSP7lDDgAAerIcA9CaHAAAAADxDb6BJAdATj7TArjGHAX6MPG4Sw4AAACAduQAAKAfn5QB0J4cAAAAUJcAWsXwf7tEDqjJIw8AAMATcgAA0I1szhzDP7mDAUw8HpIDAAAAILYJwVEOAAB68UkZANzkAAAAgKoEUJ6QAwCATqzGAOQz5XeTyAEAAADQjhwAAPThbgDQiZnHU3IAAAAAxDXpnzGVAwCALnxOxkyT1nU4zczjBTkAAAAA2pEDAIAefE4GQEbT7h7JAQAAANVIoLwkBwAAHViMAeCL//mlJwAAAKVIoHVMfMfudgAAUJ/FGAC+kQMAAACgHTkAAKjO3QCgF1Ovjqlf7pcDAADgKr+PC0hHDgAAavMpGdCLqcdBcgAAAADEM/nekRwAAFTmUzIAuEsOqMryA1xljgBAPs5vDpMDAIC6rMUAZDX9V5TKAQAAADWIoLxBDgAAqrIWA8BDcgAAAADEMv2rAnIAAFCVuwGss2BthwPMPd4iBwAAAEA7cgBkpPwCvGJSAt2Ye5UsuXMkBwAAAEA7cgAAUI/PyIBuzD3eJgcAAABAHIt+PakcAABU4zMyoBtzjxPkAAAesVqQk1cuABwgBwAAAEAUi74qIAcAALW4GwD0Y/JxihwAAAAA7cgBAEAdPiFjh2UXe+Euk6+WhRNFDqjLWAAAAOABOQAAqEIKB/ox+WpZettIDgAAarASA8Ab5ADIyHcUAQAQQrnkfzdvLAB4xJJBHl6tAGS3+L252wEAAADQjhwAAOTnbgDQkdnHJXIAAAAA7Lb8a/xyAACQnc/HgI7MPi6SAwCA3CzEAOS34Vf8ywEAAADZSKFcJgcA8Ixlg+i8RgHgFDkAAMhLDGC/DRd8wfQrZ8skkQMqMyQAAAC4Sw4AALISvoGeTD+GkAMAAABgn01fOpIDAHjOJxBE5bUJ9GT6MYgcAABkZB0GoIZtv5BUDgAAAMhCDGUYOQAAyMc6DAAXyQEAQDZiANCV+VfPtq8KyAEAAADQ0EcO2NgjAAjPJxHE4hUJdGX+1bP1vbjbAQBAJpZhABhCDqjNygQAADXY7RlMDgAA8rAMA1DH5q/tywEAvOYtGDF4JQJ9mYAMJwcAAADAatt/pb8cAADk4JMxoC8TkAnkAAAgA6sw0JcJyBRyAAAAnLX9si+QVIDpIQcAcITPJdjLKxDoywRkEjkAAIjOKgxALQHuBsgBkFWIAQIAwGSCKNPIAdUZHwBk5ywDoJYgH+3JAQAc4y0Ze3jlAZ2ZgUz0JwcEqRMAAJ9YhAFgErcDAAAAIpJEawrzYbwcAMBRlhJW85oDgGnkAAAgJjEA6M0UrCnM3QA5AACIyRoM9GYKMp0cAAAAACsEuhsgBwDwDp9UsIrXGtCbKcgCcgAAEI01GACmkwPqs1IBkIuTC+jOHKwq1FcF5AAA3mNBAYC5nLUsIgcAAJFYgwGoKdjdADkA8go3TgAGEAOA7sxBlvmbA7y1AOAIawrzeHUBUFXAd9xuBwAAAMQgi7KQHAAAxGAJBrozB1lKDgDgXZYVZvC6AqCugF8VkAN6sGABEJ2zCsAkZDE5AADYzQoMQGUh7wbIAQCc4c0bAIzlbGU5OQAA2MsKDGASVhb0boAcAADsZQUGgC3kAADO8BaOMbySAMzC2sLeDZADILPAowXgEAswAGzzOQd4awHAcd7IcZXXEMDtZhrWFvpdttsBPRgxAETjbAK43UxDNpIDAAAAYLzQdwPkAADO83kG53n1ANxupiFbyQEAwGrWX4DbzTRkMzkAgPOsMZzhdQNAB8G/KiAHAABriQEAH8xDNpMDALjCKsN7vGIAPpiH1YW/GyAHQG4JhgzAJ5ZfAAhDDujCAgbMYr5wlNcKwB8mYnUpPrb7mgNS/JEBAAASEwMIwe0AAK6y1HCE1wk1eWUDPyX5oF0OAADm85YJ4A8TkSDkAACus9jwnFcIwB8mYn1J7gbIAQDAbFZfgD9MRAKRAwAYwXrDI14bAHSS5m6AHNCJdaymROMGaMnpA/CXmUgocgAAY1hx+MmrAuAvM7GDVB/WyQEAwBwWXwAI7HsOSNUyAAjFmz8+83oA+MxU7CDZ+2m3AwCA8ay9AJ+ZigQkBwAwjmWHD14JAJ+Zij0kuxsgBwAAo1l7ASABOaAT61lN6SokxZk0eA0AfGUu9pBwK5cDABjL0tObnz/AV+YiYckBAMAoll468rrnGa+PLhLeDZADABjP6tOVnzwAJPIzB6SsGgDAZmIAwHcmYxdJ30W7HQDAeNaffvzMAb4zGQlODujFSKopaY2kOPOmFz9vgO9Mxj7SbuP/7P4DAACpWXgBICW3AwCYw5vEHvycAe4xHftIezdADgBgHqtQfX7GAPeYjqQgBwAwj3WoNj9fgHtMx04S3w2QAwCAc6y7APeYjp2kjgH3c0Dy/ySeMp5q8tQSl6lTlZ8s/OV5AFJyOwCAuazJFfmpAtxnPnaS/iM5/9AgAPAOqy7AIyYkqbgdAMBslqNK/DQBHjEhe0l/N0AOAGAFC1IVfpIAj5iQpCMHQA0F6iTFWZIq8FMEgA8ltm85oB/LHLCH6ZOdnyDAY2YkCckBAKxiVcrrt58ePOUJ6c4roJsSdwMe5YAi/3EAwADWXIBnTEmScjsAgHUsTBn5qQE8Y0r2U+bjczkAgJUsTdn4iQE8Y0r2UyYGyAFQR6HBRHEWpzz8xgCA50xJUpMDOjK2gL1MoRz8nACeMyc7KvURnBwAwHoWqPj8jOA9nhkgHTkAgB0szpH5kgDAayZlR6XuBjzOAcX+MwEIxxoVlZ8MwGtmJQW4HQB1yHhkY5WKx70AgCPMyp7KbdtyAAD7WKdi8fMAOMK0pAg5oCcjDIjCPIrDzwKu8Qx14SfdVbm7AXIAALtZqyLwJQGAY0zLrgrGADkAaik5pmjAarWbnwDAMeYlpcgBAOxnvdrHvQCAo8zLvop+6PY4BxT9DwYgJCvWHv7eYSRPVG1+vpTjdkBXxhkQjU+pV/M3DnCcidlZ2Y/K5QAA4rBsrSIFALzDzOysbAyQA6CawuOKJixcK/hbBniHqUlRcgAAsVi65nIvAGbyfFXkp9pb6Q/b5AAAovGGdR5/swDvMTcp7FkOKN1BMNqA0Myo8WQWgHeZm90Vf0/sdgBUU3xo0Yg3ryP52wR4n8nZXfm9Wg4AIC6L2AhSAKzkeavDz5Ly/tn9BwCAJ37fGrT5iSyzAOeYnzTYP9wOACA6K9lZ/uYAzjE/aUEO6MyYq6pByaQd193f5+8MdvHs5ednSJON+nkOaPFXAEAKlrPjpACA80xQ2rwT9rsDAMjC7xE4whoLcIUpSiO+LABAJj73fsbfDsTgSczLz47brdGHD3IAVNRmhNGUN733+FsBuMocpRlfFujtt7eNQFK+OPCX9RVgBNOUD432CzkAgKwkAcsrROUjl2xMU/5o9ey++rJAq78MANLpfEW+8387wEimKU25HQA1/XKw0Ui/WwKeb4BxzFT+6rVP+FWCAJTQ55PyPv+lkJsnNQs/Kf5qFgPcDsA324A6Pla6ulPNygowmslKa3IAALVUjALWVcjIhy7xma581vCJlQOgKr89gN6q/D4BzzHAHOYrHMgB3lIAkNOf8ytnFnD6Qn7uB8RlxvJdy6fV7QAcVEB12b4+YEkFmMuc5bs8W8JQcgDU5W4PfBb/roAnFmAF0xb+JQcA0Eu8LGAxhbrcwozGxOWets+pHABAT39Xwj1LgJUUYDWTl3vaxoBjOcCFYwAq+3zKzV0JnKfQj/sBcZjB8I3bATimKhPz4F3fn5mr89EzCBCDecx9rd8JyQEA8Jj1EbjKBy/7meU80vzp/N/uPwAAAJTmzehe/v7hATkAamtePAGA5sQAHmu/KcsB3G7GJADATHatPX77m+eJ9jHgaA7wFwUAAGQiBcALbgdAdXIeAOznrela7gXwih35JgcAAAC1SAG8Igbcbjc5AAAAVvAWdQ33AuAwOYAPxmZl6icARGDfms/fMUfYjv91NAf4CwMAAOJyL4BjvLf9j9sBAACwhrer8/i7hbfJAdCBBgoAMXjTOoN7ARxnL/5EDuAPQxQAYD4712j+RjlODPjin91/AACAJj6vod7AwAieJN4hBnxz/HaAvzrIzBMMAFF4CzuGrwjARb4sAACwgjDLX97GXufvkHeZwj/IAfxlqAIArGHvusK9AN4nBtwhB0AXRiDATqYw33lDe44UAMPIAQAAs4kB3ONt7fv8nXGOKXzXOznAXyEAAIzjze073AvgLO9kH3A7gM+M2NoMQoA9zF8es30dIwVwnhn8kBwAADCTRZTnvM19RQqASeQAAID1RAL+8mb3MSmAq0zbJ+QA6MQ4BFjN5OUIb3nvkQK4zgx+6r0c4C+zPkMXAMaxO3GUHewrKQAWcDsAAAD28/b3DymAUSTZF+QA6MVQBFjHzOU93gb7O2AkM/ilf3b/AQAASrKIcsbvtq8cGYCxuj5Jb3E7gO+M4uqMRgCIrOMu5k4AbPFuDvBGAgDgNTsT5/V6c9zrv5ZVzOBD3A4AABjtyCJqWeWZDm+Rf0sBTGK+HiQHQD8GJADEV/utcu3/Ovay6x7mVwnyU99fYQMAIzhHGeX3rd7rSQaAMN7PAb88wgAAD1V788ZudZKAdxGsUONpWcTtAOhI1gOYxSLKDNmTgL2DVTI/JxvIAdzj6wIAALHkTAJCACvle0I2kwOgJ/cDAGZ4bxU1i3nXxysmw1ser23Wy/BkBCMHAACMYRVljdj3BIQASONMDlCyAQBgpz/7eJws4B0Ce8V5FhJxO4D7/PaA+oQ9gLGcnOyw++sDtgliMIFPkQMAAK6zirLT3zfla16JIgCxmMAnyQHQl/sBAKNYRYliVhiwM0BB53KANxEAANfZqZjn3mvrSCLwmiQbQfY0twN4xG8P6MAaCjCCE5MsnPvUYwJf8L/dfwAAgNSsogC7mMCXyAEAAADkIwZcJAfwmOtkHRiiANeYowAkdTYHOPoAAK5vRHYqgHPMz8vcDoDuDFKAs0xQgF1M4AHkAAAAADIRA4aQA3jGbw/owTgFOMP0BNjD/B3kfA7wIwAA+rIJAexh/g7jdgAAwLtGLqMWWwC2kAN4ztcFerCKAgCQgb11IDkAAOA9llGAPczfoa7kAD8KqMPzDHCUiQmwh/k7mNsBvOLrAgDwl2UUYA/zdzg5APhgwALsYgIDvGJSTiAHAAAcZR0FoIxrOcCRCJV4ogGeMycB9jB/p3A7gNf89gAAsIwC7GL+TiIHAH8ZtQB7mL8Aj5iQ08gBAACvWUcBdjB9J7qaA/xwevB1gT480wD3mI4AO5i+U7kdAADwnHUUYAfTdzI5APjK2AX4as1cNH0BWEwO4BhfFwAAANaRSae7ngP8kKAaTzXAX2YiwA6m7wJuBwAAPGIdBdjB9F1CDuAoXxfoxAAGuN1WT0OzF+CDebiIHAAAcI91FGAH03eZETnAjwvq8VwDALCeLXQhtwMAAH6ykAKsZ/YuJQdwnN8e0IthDHS2ZwaavEBvpuBicgAAwFcWUoD1zN7lxuQAPzioyJMN9GT6AdCC2wG8w9cFAGAmKQLoyvzbQA4AHjOWgX5MPoD1zN4t5AAAgD8spADrmb2bjMoBfoBd+LpAN55toBMzD2A9s3cbtwOA5wxooIsY8y7GnwJgFVNvIzkAAMBCCrCD2bvVuBzgB9mFrwv04+kG6jPpANYzezdzOwAAIBLrMdCDabedHAC8ZlgDtZlyAKuZvAHIAbzP1wUAqMRKCrCayRvCyBzgRwp1eb6BqiLOt4h/JoBxTLkg3A4AjjG2gYrMNoDVTN4w5ADO8HUBACqwkgKsZvIGMjYH+NFCZZ5woJbIUy3ynw3gPNMtFLcDOMf9AABys5ICrGbyBiMHAMcZ4QAAnGOTDEcOAN5hjAM1xJ9m8f+EAO8w1QIanQP8kPvwdQEAsrKvAKxl7obkdgDwHsMcyC7LHMvy5wR4xTwLSg4AADqxlAKsZe6GNT4H+GH34esCXXnKgbxMMIC1zN3A3A4A3mesAzllm17Z/rwA35ljockBAEAPllKAtczd4OQArvB1gb4MdyCbnHMr558a4HYzwRKYkQP82KEDTzqQiZkFsJa5m4DbAQBAdZZSgLXM3RTkAK7xdYHOjHmA+cxaIB+TK4k5OcCPH3rwrAMZmFUAK5m6abgdwFXuBwAQWf61NP9/AdCJmZWIHABcYeADsZlSACuZuqnIAcA1hj4QlwkFsJKpm8ysHOCF0ImvCwAQUZ1tpM5/CVCZWZWO2wHAVUY/EJHZBLDOL1M3IzkAuM74B6KpNpeq/fcAtZhRSc3LAV4Snfi6AACR2EIA1jFz03I7ABjBMQDEUXMi1fyvAvIznRKTAxjD/QAcBUAMphHAOmZuajNzgJcG9OKZB/arPIkq/7cBOZlLybkdAABUYTEFWMfMTU8OYBRfF8ChAOxVfwbV/y8E8jCRCpibA7xEoBtPPbCL+QOwjplbwj+7/wAAAJdZTAFWMXHL8GUBxvF1AW43BwSwQ5/J0+e/FIjKHCpkdg7wYoF+PPfAWqYOwCombiluBzCS+wF8cFAA63SbON3+e4FITKBi5AAAIC+rKcAqJm45cgAwg+MCWKHnrOn5Xw3sZvYUND8HeNn04usC/OHZB2brO2f6/pcDe/wyd2pyOwCYxbEBzGTGAKxh3pYlBzCa+wH85fAAZuk+X7r/9wPrmDeFrcgBXkAAwDgurQKsYt6W5nYAMJMjBBjNXPng7wGYz6QpTg5gPF8X4DPHCDCSmQKwhptYDazJAV5I0JkJAIxinnzmbwOYx4Rpwe0AZnA/gK8cKMAIZgnAGuZtE3IAAJCB5fQnfyfADGZLG6tygJcU9GYGANeYIvf5ewHG8hsDWnE7gDl8XYDvHC3AeSYIwAqmbTNyALCKAwY4x/R4xt8OMIp50s66HODF1Y37AfxkDgDvMzkAVjBtG3I7AFjJQQO8w3dYj/B3BFxl2jYlBzCP+wHc47ABjjIvjvI3BVxhhrS1Mgd4mQEAR9kbAFYwbRtzOwBYzaEDvGZSvMffF3CGLwk0Jwcwk68LcJ+DB3jOlACYz6xtb20O8IIDPpgGwGMmxBn+1oD3mBq4HcBk7gfwiCMIuMfF1fP8zQFHmbXcbjc5ANjHMQR8Zy4AzGfW8q/VOcBLrx/3A3jMRAA+MxOu8jcIvGZS8B+3A4CdHEjAH+bBCP4WgWd8SYAv1ucAL0DgMzMBuN3MAoD5TFq+cTuA+XxdgOccTdCdT6tG8ncJ3Gc68IMcAOzneILOTIDR/I0C38mu3LUjB3gp9uN+AAD32QoAZjNpecDtACACxxT05Nmfw98r8Id7ATwhB7CG+wG84qiCfjz38/i7BW43s4AX9uQAL0vgJ5MBOvF51Wz+fgFzgBfcDmAV9wN4zaEFXXjaAeYSXTlADgAicXBBB570Nfw9Q1+efw7ZlQO8QIH7TAeozedVK/m7ho7MWQ5zO4B1fF2AYxxhUJfnezV/49CNp543yAFAPA4yqMmzDTCTewG8aV8O8FLtyP0AjjIhoB7P9R7+3qELTztv+2f3HwDgrl83AQnqsKTu9Ms0hfJMWU7Z+WUBL9qOLCS8w5SAGjzLu/kJQG2ecU7yuwOAyBxvkJ1vssbgpwBVmbJcIAewmvsBvMcRB5l5ggFmMmW5ZG8O8PIFXjMpICtPbyR+GlCNewFc5nYA67kfwLscdpCPNTUePxGoxBPNAHIAkIEjD3LxzMbk5wI1CK4MsjsHeCH35H4A7zMtIA/Pa1x+NpCdFMBAu3MAwFEOP8jAohqdnw9k5glmqP05wEu6J/cDOMO8gOg8pRn4KUFOcivD7c8BAMc5CCEuz2ceflKQj+eWCeQAIBvHIUTkyczFzwsykVuZJEIO8OLuydcFOM/UgFgsqgCzmLBMFCEHALzLwQhxeB5z8nODDDypTCUHsI/7AVzheIQIfGqVmZ8dxGbCMl2MHOCFDrzPIQm7eQaz8xOEqGw5LBEjB9CV+wFc5aiEXayqNfgpQkSeTBaJkgO85IFzTA/YwZNXh58lxCK2slCUHEBX7gdwnUMT1rKqVuPnCVGYrywmBwD5OTphHc9bRX6qsJ8UwAZxcoCXf1fuBzCCIxRW8KTV5ScLe3kG2SJODgC4xkEKc3nGavPzhV2kVraJlAM8Bl25H8AopgjMYlntwM8Y1jNd2eqf3X8AgIF+3QQmGM2q2ocZCiuZrmwX6XYAfVk9GMnhCiN5orrxE4cV3AoghFg5wEMBjGCWwBjW1Z781GEus5UwYuUA+nI/gLEctHCdp6gvP3uYx/NFINFygMcDGMU8gfMkte78/GEGs5VgouUA+nI/gPEcunCGJ4fbTRCA0cxWApIDgNocvfAO6yp/eS3AKGYrQcXLAR6VvtwPYA5TBY7ytPCVtzBwneeIwOLlADoTBJjDQQyveU64z+sCzjNZCS5iDvDQAOOZLPCYhZVnvDrgDJOVBCLmADpzP4B5HMtwjyeD17xG4D0mK0nIAUAnDmf4yjPBMV4pcJQUQCIxc4BHqDP3A5jLIQ1/eBp4h9cLvOY5IZmYOQBgJkc1WFk5w6sGHjNXSShqDvAwdeZ+APM5sunM65/zvHbgHnOVpP7Z/QcA2OTXTXyiHwsrV5md8JmpSmpRbwd4tHqzZrCKSUMnPr1iFK8kuN1MVQpwOwDozedc9GBlZSyzk+5MVUqIezuA3qwYrORIpzafXzGH1xVdmaqUETkHeMyAVRzsVOW1zUxeXfRjqlKKLwsQ1W/DlsVcfaUaU5T5TE76MFMpKPLtAA8dsJrmTxVey6zjtUZ9ZipFxc4B9ObTBvZw4JOdtZXVvOaozOubwqLnAA9fb4IAezj4ycurl1288qjnl5lKdX53AMA9vg9LPpZW9jI3qcREpQU5gNj8QkF2stqSh1lJDOYm+ZmnNBL9ywIeSGAv1wSJz6uUWLweycs8pRm3A4jO/QD282kXUZmPxGRqko95SksZcsAvBwqwneWWaKyuxGZqkod5SlsZcgDduR9AFJZbojAVycFHOkRnmtJcjhzgMAGikATYy+pKLmYmcZmnkCQH0J37AcRivWUPk5CczEyiMU3hX3IAOQgCRGO9ZSUTkOzMTGIwTeGLLDnA1wWAeKy3rGB5pQozk53MUrgjSw4A9wOIyXrLPKYe9ZiZrGeWwkN5coD7AUBU1lvGs75Sl5nJOmYpPJUnB4D7AURmvWUUk44OzExmM0vhgEw5wP0ABAFi+3h9mlScZ8bRiSTAHCYpHJYpBwBkYMHlDOsrPZmYjGSSwpty5QD3A3A/gBzcE+A4U43uJAGuMkfhpFw5ACATKy7PWWDhD/OSc8xRuEQOIBv3A8jFPQHuMcfgJ/OSd5ijMEC2HODrAkBGPvfiDwssPGde8pwpCgNlywHgfgBZ+dyrO5MLjjIvuccUheHy5QD3AxAEyMyS25GJBWe4J8AHMxSmyZcDAPITBbqwxMI1pmVvZihMljEHuB+A+wHU4JOvukwoGEkU6MYMhUUy5gCAOv6sPNbcKiyxMIuEWp8JCovlzAHuB+B+ANX47Cs7EwlWMCtrMkFhk5w5AG43QYCKLLr5mEOwnntVVZigsFnWHOB+AFCXKJCBJRb2My2zMkEhiKw5AG439wOozadfMZk6EI0okIX5CeHkzQHuBwA9yAIxWGMhNrMyKtMTAsubA+B2cz+ATnz+tYcZA7mYlTGYnZBC5hzgfgC3myBAN39f7ybgTOYK5OauwB5mJySTOQcAdGbZHc8iC9WYlCuYnZBW7hzgfgC3m/sBdOe+wFUmCNRnUo5mckIJuXMAfBAE4Haz7r7DzICuTMrzTE4oRw4AqMe6e49FFvjMpHzN3ITisucAXxfgg/sBcN/nJ6PfvDQXgCN6T8rPTE1oJnsOgD8EAXjl6zNSceU1BYCr6k/Kx/+1QDv5c4D7AQBnfF8C881SaywwW/5J+fi/BaBADoA/3A+AK+49P1EWX882EEPkSfn4TwjwQIUc4H4AwByv1srr09fiCmQ3f1Ie+V8BOKFCDoA/3A+AtTxxAK+YlEBY/9v9BxjCmOUPN0UAAAAOqJEDAAAAgDdUyQHuB/CH+wEAAAAvVckB8JcgAAAA8EKdHOB+AAAAABxUJwfAX+4HAAAAPFUpB7gfwF+CAAAAwBOVcgAAAABwSK0c4H4Af7kfAAAA8FCtHACfCQIAAAAPVMsB7gcAAADAS9VyAHzmfgAAAMBd9XKA+wF8JggAAADcUS8HAAAAAC9UzAHuB/CZ+wEAAAA/VMwB8JUgAAAA8E3NHOB+AAAAADxRMwfAV+4HAAAAfFE1B7gfwFeCAAAAwCdVc4AgwHeCAAAAwH/q5gAAAADggco5wP0AvnI/AAAA4F+VcwB8JwgAAADcbrfqOcD9AAAAALijdg6A79wPAAAAuNXPAe4H8J0gAAAAUD4HAAAAAD/UzwHuB/Cd+wEAAEB79XMA/CQIAAAAzXXIAe4H8JMgAAAAtNYhBwAAAABf9MgB7gfwk/sBAABAYz1yANwjCAAAAG11yQHuB3CPIAAAADTVJQcIAgAAAPCfPjkA7nE/AAAAaKlTDnA/gHsEAQAAoKFOOQDuEwQAAIB2euUA9wMAAADg1i0HwH3uBwAAAM10ywHuB3CfIAAAALTSLQfAI4IAAADQSL8c4H4AAAAA7fXLAYIAj7gfAAAAtNExB8AjggAAANBEzxzgfgCPCAIAAEALPXMAAAAAtNY1B7gfwCPuBwAAAA10zQHwmCAAAACU1zcHuB/AY4IAAABQXN8cAM8IAgAAQGmdc4D7AQAAADTVOQcIAjzjfgAAAFBY7xwAzwgCAABAWd1zgPsBPCMIAAAARXXPAQAAANCQHOB+AM+4HwAAAJQkBwgCPCcIAAAABckB8IogAAAAlCMH3G7uB/CKIAAAABQjB8ARggAAAFCKHPDB/QAAAAAakQPgGPcDAACAQuSAP9wP4BVBAAAAKEMO+EsQ4BVBAAAAKEIOgHcIAgAAQAlywGfuB/CaIAAAABQgBwAAAEA7csBX7gfwmvsBAABAenLAd4IArwkCAABAcnIAnCEIAAAAqckBP7kfwBGCAAAAkJgccI8gwBGCAAAAkJYcAAAAAO3IAfe5H8AR7gcAAABJyQFwhSAAAACkJAc84n4AxwgCAABAQnLAY4IAxwgCAABAOnIAXCcIAAAAycgBz7gfwFGCAAAAkIocAGMIAgAAQCJywHPuB3CcIAAAAKQhB7wiCAAAAFCOHADjuB8AAAAkIQe85n4AxwkCAABACnLAEYIAxwkCAABAAnIAjCYIAAAA4ckBx7gfwDsEAQAAIDg54ChBgHcIAgAAQGhyAMwhCAAAAIHJAce5H8B7BAEAACAsOeAdggDvEQQAAICg5ACYSRAAAABCkgPe434A7xIEAACAgOQAAAAAaEcOeJf7AbzL/QAAACAcOeB9ggDvEgQAAIBg5ABYQRAAAABCkQPOcD+A9wkCAABAIHLAOYIA7xMEAACAMOQAWEcQAAAAgpADznI/gDMEAQAAIAQ54DxBgDMEAQAAIAA5AFYTBAAAgO3kgCvcD+AcQQAAANhMDrhGEOAcQQAAANhKDoA9BAEAAGAjOeAq9wM4SxAAAAC2kQOuEwQ4SxAAAAA2kQNgJ0EAAADYQg4Ywf0AzhMEAACADeSAMQQBzhMEAACA5eSAUQQBzhMEAACAxeQAiEAQAAAAlpIDxnE/gCsEAQAAYCE5YCRBgCsEAQAAYBk5AOIQBAAAgEXkgLHcD+AaQQAAAFhCDhhNEOAaQQAAAFhADoBoBAEAAGA6OWA89wO4ShAAAAAmkwNmEAS4ShAAAACmkgPmEAS46rckAAAAzCMHQFyCAAAAMIkcMIv7AYwgCAAAAFPIAfMIAowgCAAAABPIARCdIAAAAAwnB8zkfgBjCAIAAMBgcsBcggBjCAIAAMBQcsBsggBjCAIAAMBAcgBkIQgAAADDyAHzuR/AKIIAAAAwiBywgiDAKIIAAAAwhBywhiDAKL8lAQAA4Do5APIRBAAAgIvkgFXcD2AkQQAAALhEDlhHEGAkQQAAALhADoCsBAEAAOA0OWAl9wMYSxAAAABOkgPWEgQYSxAAAABOkQNWEwQYyz88CAAAnCAHQH6CAAAA8CY5YD33AxhPEAAAAN4iB+wgCDCeIAAAALxBDthDEGA8QQAAADhMDoA6BAEAAOAgOWAX9wOYwb8zAAAAHCIH7CMIMIcgAAAAvCQH7CQIMIcgAAAAvCAH7CUIMIcgAAAAPCUHQE2CAAAA8IQcsJv7Aczi1woCAAAPyQH7CQLMIwgAAAB3yQERCALMIwgAAAB3yAFQnSAAAAD8IAfE4H4AM/ktAgAAwDdyQBSCAHMJAgAAwCdyQByCAHMJAgAAwH/kgEgEAeYSBAAAgH/JAdCJ3yIAAADcbjc5IBr3A5hPEAAAAOSAcAQB5hMEAACgPTkgHkGA+QQBAABoTg6ISBBgPr9FAAAAWpMDoC9BAAAA2pIDYnI/gDUEAQAAaEoOiEoQYA1fGgAAgJbkgLgEAVYRBAAAoB05IDJBgFUEAQAAaEYOAG43XxoAAIBm5IDY3A9gJUEAAADakAOiEwRYSRAAAIAm5ID4BAFW8qUBAABoQQ7IQBBgLUEAAADKkwNyEARYSxAAAIDi5ADgHl8aAACA0uSALNwPYD1BAAAAypID8hAEWM8dAQAAKEoOyEQQYAdBAAAACpIDchEE2EEQAACAcuSAbAQBdvClAQAAKEYOAI4RBAAAoBA5IB/3A9jFHQEAAChDDshIEGAfQQAAAEqQA3ISBNjHHQEAAChADshKEGAnQQAAAJKTA/ISBNhJEAAAgNTkgMwEAXbypQEAAEhMDgDOEwQAACApOSA39wPYzR0BAABISQ7IThBgP0EAAADSkQPyEwTYzx0BAABIRg6oQBAgAkEAAAASkQNqEASIwB0BAABIQw6oQhAgBkEAAABSkAPqEASIwR0BAABIQA4AxpMEAAAgODmgEvcDiEQQAACAwOSAWgQBInFHAAAAwpIDqhEEiEUQAACAkOSAegQBYnFHAAAAApIDKhIEiEYQAACAYOSAmgQBonFHAAAAQpEDqhIEiEcSAACAMOSAugQBIhIEAAAgBDmgMkGAiNwRAACAAOQAYD1JAAAANpMDanM/gLgEAQAA2EgOqE4QIC53BAAAYBs5oD5BgMgkAQAA2EIO6EAQIDZBAAAAlpMDehAEiM0dAQAAWEwO6EIQIDpJAAAAFpID+hAEiE8QAACAReSATgQB4nNHAAAAlpADehEEyEASAACA6eSAbgQBcpAEAABgKjmgH0GALCQBAACYRg7oSBAgD0EAAACmkAN6EgTIwx0BAACYQA7oShAgE0kAAAAGkwP6EgTIRRIAAICB5AAgD0kAAAAGkQM6cz+AjAQBAAAYQA7oTRAgI3cEAIjG2QQkJAd0JwiQk7ULgCj+nElOJiAZOQBBgKwkAQB2cxYBickBCAJkZg0DYBdnEJCcHMDtJgiQm3UMgNXunz3OIyAVOYAPgsD/t3cn2XEjSQAFU/3q7HVt9UKPxUE5AIkYfDA7ARciPPDlAZKbJADAKmYOUIQcwAdBgOwczwCYzawBCpED+CQIkJ9jGgCzmDFAMXIAXwkCVOC4BsBoR2eLCQQkIgfwnSBADZIAAKOYKUBR/+z+AQjnl5FHEb9vAhcAVzgTAaXZDuBvXqCow//oAPCedyeIuQOkIQdwjyBAJZIAAOeYHEALcgD3CQLU4mAHwDEmBtCGHMAjggDVOOAB8MzvQZPCtAGSkAN4TBCgHkkAgHvMB6AhOYBnBAEqcuQD4CtzAWjKHxrkOX92kJr8EUIArPUDzdkO4BWvTFTlf4MAOps5BcwXIAXbAbxmQ4C6/vzbFr0AenGyAbjJARwjCFCbqwMAXTjRAPzHZQGO8apEda4OAFS38klvpgAJ2A7gqF83o43qbAkA1OQEA3CH7QDO8KJEfbYEAGrxXAd4wHYA5/iKAB34wCBABXvPLL/NESA62wGcZbTRhf9PAsjLMxzgJdsBnGdDgD58TQAgG6cUgIPkAN4hCNCJqwMAOTidAJzisgDv8WpEN9ZOASKL+JSO9xMBfGM7gHfZEKAfVwcA4nEeAXiTHMD7BAE6cnUAIArnEIBLXBbgCq9EdBVxKRWgkxzP4Qw/I9CY7QCusSFAX/YEAHZw8gAYRA7gKkGA3nxPAGAVJw6AoeQArhME6M6eAMBceU8av00HIC45gBEEAbAnADCDEwbANHIAYwgCcLvZEwAYydkCYCo5gFF+3Yxt+MOeAMA1ThQAC8gBjGRHAD7YEwB4R72ThK8HAGHJAYwlCMBXogDAUU4QAIvJAYwmCMBPLg8APOPkALCFHMB4ggD8zZ4AwN96nBhcFwCCkgOYQRCA+0QBgD+cFAC2kwOYQxCAx1weAPpyPgAIQw5gFkEAnrEnAHTT+VzgugAQkhzAPIIAvCIKAB04DwCEJAcw06+bIwC8JgoAVTkFAAQmBzCbHQE4RhQAKjH9AcKTA5hPEIDjRAEgNzP/Pl8PAAKSA1hBEIBzRAEgH7MeIBk5gDUEAThPFAAyMOEBkpIDWEUQgPeIAkBUJvsZrgsA4cgBrCMIwPtEASAO8xygBDmAlfzhQbhGFAD2MsUBCpEDWM2OAFwlCgCrmd0juC4ABCMHsJ4gACN8/B45XALzmNgAhckB7CAIwDh2BYAZTGqA8uQA9hAEYCxRABjDfAZoQw5gF0EAxnOBAHiXqbyCrwcAocgB7OPvDMAsdgWAo0xigLbkAPayIwDz2BUAHjN/AdqTA9hNEIDZ7AoAn0zdvVwXAAKRA9hPEIAV7ApAb2YtAD/IAUQgCMA6sgD0YsIC8IAcQAyCAKzmCgFUZqoC8JIcQBT+zgDsYFcAajFJ4/P1ACAMOYBI7AjALrIAZGZ6AvAGOYBYBAHYSxaATMxMAC6QA4hGEIAIZAGIy5zMznUBIAg5gHh8RQDi+PxddHiF3cxGAIaSA4jJjgBEY18A9jAPAZhEDiAqQQBikgVgBTOwNtcFgBDkAOISBCAy1whgPHMPgIXkACITBCAD+wJwhUkHwCZyALH5rCDkYV8AjjPbANhODiA+OwKQjTAA95hmfPL1ACAAOYAMBAHIShgAEwyAoOQAchAEIDthgE7MLAASkAPIwlcEoIqvv8nSAHWYUZzjugCwnRxAJnYEoBo7A+RmKgGQmBxALoIAVGVngBxMIQDKkAPIxqUBqE8aIBIzh1lcFwA2kwPIyI4A9PH9t93RmRXMGABakAPISRCAnuwNMIeZAkBDcgBZCQLQnb0B3meCAIAcQGK+IgB8+vk0kAf4yrQgJl8PALaSA8jNjgBwnzzQm9kAAC/JAWQnCABHyAN1mQIA8BY5gPxcGgDOu/fUkAji87SnGtcFgI3kAGqwIwBcJxFE4qkOAJPJAVQhCAAzPHqyyASjeHYDwCZyAHW4NACs8+xpIxV858kMz7guAGwjB1CLHQFgv9fPoSqHf09cAEhMDqAaQQCI78pzamxK8MQEgLbkAOpxaQCozPMNABjif7t/AJiiyiIuAFCdyAdsIgdQlSAAAADwkMsC1OXSAABAQv/u/gGgCdsB1GZHAACIzn9fAFvIAVQnCAAAAPxFDqC+X5IAAADAd3IAPQgCAEBcrgsAG8gBdGFHAAAA4D9yAJ0IAgAAALfbTQ6gG0EAAADgJgfQj0sDAEA8vh4ALCcH0JEgAAAANCcH0JMdAQAAoDU5gL4EAQAgDtcFgMXkADoTBAAAgKbkAHpzaQAAAGhJDgBBAACIwHUBYCk5AOwIAAAA7cgB8IcgAAAANCIHwAc7AgAAQBtyAHwlCAAA+/h6ALCQHADfCQIAAEADcgD85NIAAABQnhwA9wgCAMAOrgsAy8gBcJ8dAQAAoDA5AB4TBAAAgKLkAHjGjgAAsJbrAsAicgC8IggAAADlyAHwmh0BAACgGDkAjhEEAACAQuQAOMqOAACwgq8HAEvIAXCGIAAAAJQgB8A5dgQAAIAC5AA4TxIAAGZyXQBYQA6A9wgCAABAYnIAvMuOAAAAkJYcAFcIAgDADK4LANPJAXCNHQEAACAhOQCuEwQAAIBk5AAYwY4AAACQihwAo0gCAMA4vh4ATCYHwEiCAAAAkIIcAGPZEQAAABKQA2A8QQAAuM51AWAqOQBmsCMAAACEJgfALJIAAAAQlhwAMwkCAMD7XBcAJpIDYC47AgAAQEByAMwnCQAAAMHIAbCGIAAAAAQiB8AqdgQAgLN8PQCYRg6AlSQBAAAgBDkAVhMEAACA7eQAWM+OAABwlOsCwCRyAOwhCQAAABvJAbCPIAAAAGwiB8BOdgQAgFdcFwCmkANgN0kAAABYTg6ACCQBAABgKTkAohAEAACAZeQAiMOOAABwj68HABPIARCLJAAAACwgB0A8kgAAADCZHAAxCQIAwCfXBYDh5ACIyo4AAAAwjRwAkUkCAADAFHIARCcJAACuCwDDyQGQgSQAAAAMJQdAFoIAAAAwjBwAedgRAAAABpEDIBdJAAC68vUAYCg5APKRBAAAgIvkAMhJEgAAAC6QAyAvSQAAenFdABhIDoDcJAEAAOANcgDkJwkAAAAnyQFQgyAAAB24LgAMIwdAFXYEAACAw+QAqEQSAIDaTHpgmH92/wDAYL9uFgkBoCIpABhKDoCKJAEAqEQIACaQA6AqSQAAKpACgEnkAKhMEgCAzKQAYCI5AKqTBAAgIykAmEwOgA4kAQDIQwgAlpADoAtJAADikwKAZeQA6EQSAIC4pABgKTkAupEEACAaIQDYQA6AjiQBAIhCCgA2kQOgK0kAAHaTAoCN5ADoTBIAgD2EAGA7OQC6kwQAYC0pAAhBDgA+jiWiAADMJQQAgcgBwAd7AgAwjxQABCMHAF9JAgAwnhQABCQHAD9JAgAwihAAhCUHAPdIAgBwlRQAhCYHAI9IAgDwHiEASEAOAJ7xNwcA4BwpAEhCDgBesycAAK8JAUAqcgBwjCQAAI9JAUA6cgBwnCQAAD8JAUBScgBwjiQAAB+kACAxOQA4zwcGAehOCADSkwOAd9kTAKAnKQAoQQ4ArpAEAOhECAAKkQOAq1wdAKADKQAoRg4AxrAnAEBVQgBQkhwAjCMJAFCLEAAUJgcAY7k6AEANUgBQnBwAzGBPAIC8hACgBTkAmEUSACAbIQBoRA4AZnJ1AIAspACgGTkAmM+eAACRCQFAS3IAsIY9AQDiEQKAxuQAYCV7AgDEIAQA7ckBwGr2BADYSwoAuMkBwC72BABYTwgA+I8cAOxjTwCAVYQAgB/kAGA3ewIAzCQEANwlBwAR2BMAYDwhAOAJOQCIQxQAYAwhAOAlOQCIxuUBAK6QAgAOkQOAiOwJAHCeEABwghwAxGVPAIBjhACA0+QAIDZ7AgA8IwQAvEkOADIQBQD4SQgAuEQOAPIQBQC43YQAgCHkACAbXxQA6EsIABhGDgAysicA0IsMADCcHADkJQoA1CcEAEwiBwDZiQIANQkBAFPJAUANogBAHUIAwAJyAFCJKACQmxAAsIwcANQjCgBkIwMALCcHAFWJAgAZCAEAm8gBQG2iAEBUQgDAVnIA0IEoABCHDAAQghwA9CEKAOwlBAAEIgcA3YgCAKvJAAAByQFAT6IAwApCAEBYcgDQmSgAMIcMABCeHADwcWiVBQCuEwIAkpADAD7YFQB4nwwAkIwcAPCdKABwhgwAkJQcAHCPCwQArwgBAKnJAQDP2BUA+EkGAChBDgB4TRQAkAEAipEDAI5ygQDoSQYAKEkOADjLrgDQgwwAUJocAPAeuwJAVTIAQAtyAMA1sgBQhQwA0IocADCGKwRAVjIAQEtyAMBIdgWAPGQAgNbkAIAZZAEgKhEAgNvtJgcAzCULAFHIAAB8IwcArCALAHuIAAA8IAcArCQLAGvIAAC8IAcA7CALADOIAAAcJgcA7CQLANeJAAC8QQ4AiODzMC8MAMeIAABcIgcAxGJfAHhGBABgEDkAICZZAPgkAgAwnBwAEJtrBNCXCADARHIAQBbCAPQgAgCwhBwAkI+LBFCNBADAcnIAQF72BSAzCQCAreQAgAqEAchCBAAgCDkAoBZhAOKRAAAISA4AqOrrC4g0AGsJAACEJwcAdGBnAOaTAABIRQ4A6MXOAIwjAACQmBwA0Jc0AGcJAACUIQcAcLtJA/CIAABAUXIAAD9JA3Tm9R+AJuQAAJ75/mokDlCP138AmpIDADjO3gD5ef0HgNvtJgcA8K6fL1XyABF5+QeAB+QAAMZwrYDdvPoDwAlyAAAz2B1gLq/+AHCRHADACn+/vAkEHOPFHwCmkAMA2OPeS55E0JeXfgBYTA4AIA6JoDov/QAQhhwAQGyPXiBlgoi87gNAGnIAADk9fvEUCmbwog8AxcgBAFRz5MVVMvB6DwDNyQEAdPTuy/C+jOD1HQAY6v/BwoFwXnsFeQAAAABJRU5ErkJggg=="></image></svg>
                                </div>
                                <br>
                              </a> </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table style="background-color: rgb(236, 236, 236); color: rgb(0, 0, 0);" width="650" cellspacing="0"
                cellpadding="0" border="0" align="center">
                <tbody>
                  <tr>
                    <td style="width:100%;">
                      <div style="font-family: Helvetica,Arial,sans-serif" align="center">
                        <p style="font-size:1.1em">CLUB 306</p>
                        <p style="font-size:1.1em">12 allée Ledru Rollin 93320 les Pavillons sous Bois</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table style="background-color: rgb(236, 236, 236); color: rgb(0, 0, 0);" width="650" cellspacing="0"
                cellpadding="0" border="0" align="center">
                <tbody>
                  <tr>
                    <td> <br>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row-content stack" role="presentation" style="background-color: rgb(236, 236, 236); color:
                rgb(0, 0, 0); border-radius: 0px 0px 50px 50px;" width="650" height="72" cellspacing="0" cellpadding="0"
                border="0" align="center">
                <tbody>
                  <tr>
                    <td> <br>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- End -->
    </body>
  </html>
  `;
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
function text({ url }: { url: string }) {
  return `Sign in to ${url}\n\n`;
}
