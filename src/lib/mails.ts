const addNewCar = (
  firstName: string,
  lastName: string,
  color: string,
  immatriculation: string,
  finition: string,
  model: string,
  mine: string,
) => {
  return `<!DOCTYPE html>
  <html>
    <head>
      <!--[if gte mso 9]>
                          <xml>
                            <o:OfficeDocumentSettings>
                              <o:AllowPNG/>
                              <o:PixelsPerInch>96</o:PixelsPerInch>
                            </o:OfficeDocumentSettings>
                          </xml>
                          <![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
      <title></title>
      <style type="text/css">
                                @media only screen and (min-width: 620px) {
                            .u-row {
                              width: 600px !important;
                            }
                            .u-row .u-col {
                              vertical-align: top;
                            }
                          
                            .u-row .u-col-100 {
                              width: 600px !important;
                            }
                          
                          }
                          
                          @media (max-width: 620px) {
                            .u-row-container {
                              max-width: 100% !important;
                              padding-left: 0px !important;
                              padding-right: 0px !important;
                            }
                            .u-row .u-col {
                              min-width: 320px !important;
                              max-width: 100% !important;
                              display: block !important;
                            }
                            .u-row {
                              width: 100% !important;
                            }
                            .u-col {
                              width: 100% !important;
                            }
                            .u-col > div {
                              margin: 0 auto;
                            }
                          }
                          body {
                            margin: 0;
                            padding: 0;
                          }
                          
                          table,
                          tr,
                          td {
                            vertical-align: top;
                            border-collapse: collapse;
                          }
                          
                          p {
                            margin: 0;
                          }
                          
                          .ie-container table,
                          .mso-container table {
                            table-layout: fixed;
                          }
                          
                          * {
                            line-height: inherit;
                          }
                          
                          a[x-apple-data-detectors='true'] {
                            color: inherit !important;
                            text-decoration: none !important;
                          }
                          
                          table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_2 .v-src-width { width: auto !important; } #u_content_image_2 .v-src-max-width { max-width: 35% !important; } #u_content_menu_1 .v-padding { padding: 5px 15px !important; } #u_content_text_5 .v-container-padding-padding { padding: 52px 10px 56px !important; } #u_content_heading_3 .v-container-padding-padding { padding: 20px 15px 0px 10px !important; } #u_content_heading_5 .v-font-size { font-size: 22px !important; } #u_content_image_5 .v-src-width { width: auto !important; } #u_content_image_5 .v-src-max-width { max-width: 90% !important; } #u_content_text_4 .v-container-padding-padding { padding: 30px 15px 10px !important; } #u_content_image_1 .v-container-padding-padding { padding: 20px 10px !important; } #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 65% !important; } #u_content_heading_7 .v-font-size { font-size: 22px !important; } #u_content_heading_9 .v-font-size { font-size: 17px !important; } #u_content_button_1 .v-size-width { width: 53% !important; } #u_content_text_3 .v-container-padding-padding { padding: 10px 20px 30px !important; } }
                              </style>
      <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Lobster+Two:400,700&amp;display=swap" rel="stylesheet"
        type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&amp;display=swap" rel="stylesheet"
        type="text/css">
      <!--<![endif]-->
    </head>
    <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color:
      #e7e7e7;color: #000000">
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace:
        0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color:
        #e7e7e7;width:100%" cellspacing="0" cellpadding="0">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap:
                  break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                  <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color:
                    transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #516874;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display:
                      table-cell;vertical-align: top;">
                      <div style="background-color: #516874;height: 100%;width: 100% !important;border-radius:
                        0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid
                          transparent;border-left: 0px solid transparent;border-right: 0px solid
                          transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px;
                          -moz-border-radius: 0px;"><!--<![endif]-->
                          <table id="u_content_image_2" style="font-family:arial,helvetica,sans-serif;"
                            role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px
                                  10px;font-family:arial,helvetica,sans-serif;" align="left">
                                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tbody>
                                      <tr>
                                        <td style="padding-right: 0px;padding-left: 0px;" align="center"> <img
                                            src="https://www.club306.fr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoClub306.3a02f592.png&amp;w=256&amp;q=75"
                                            alt="Club 306 Logo" title="Club 306 Logo" style="outline:
                                            none;text-decoration: none;-ms-interpolation-mode: bicubic;clear:
                                            both;display: inline-block !important;border: none;height: auto;float:
                                            none;width: 25%;max-width: 145px;" class="v-src-width v-src-max-width"
                                            width="145" border="0" align="middle"> </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!--></div>
                        <!--<![endif]--> </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                </div>
              </div>
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap:
                  break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                  <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-image:
                    url('images/image-6.png');background-repeat: no-repeat;background-position: center
                    top;background-color: transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-image: url('images/image-6.png');background-repeat: no-repeat;background-position: center top;background-color: transparent;"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display:
                      table-cell;vertical-align: top;">
                      <div style="height: 100%;width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid
                          transparent;border-left: 0px solid transparent;border-right: 0px solid
                          transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                          <!--[if (!mso)&(!IE)]><!--></div>
                        <!--<![endif]--> </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                </div>
              </div>
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap:
                  break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                  <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color:
                    transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #516874;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display:
                      table-cell;vertical-align: top;">
                      <div style="background-color: #516874;height: 100%;width: 100% !important;border-radius:
                        0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid
                          transparent;border-left: 0px solid transparent;border-right: 0px solid
                          transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px;
                          -moz-border-radius: 0px;"><!--<![endif]-->
                          <table id="u_content_heading_7" style="font-family:arial,helvetica,sans-serif;"
                            role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px
                                  0px;font-family:arial,helvetica,sans-serif;" align="left">
                                  <h1 class="v-font-size" style="margin: 0px; color: #ffffff; line-height: 140%;
                                    text-align: center; word-wrap: break-word; font-family: arial
                                    black,AvenirNext-Heavy,avant garde,arial; font-size: 26px; "><strong>${firstName}
                                      ${lastName}</strong></h1>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table id="u_content_heading_9" style="font-family:arial,helvetica,sans-serif;"
                            role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px
                                  0px;font-family:arial,helvetica,sans-serif;" align="left">
                                  <h1 class="v-font-size" style="margin: 0px; color: #ffffff; line-height: 140%;
                                    text-align: center; word-wrap: break-word; font-family: 'Montserrat',sans-serif;
                                    font-size: 20px; ">a créé une nouvelle 306</h1>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <p><br>
                                  </p>
                                </td>
                                <td valign="top"><br>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%"
                            cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px
                                  20px;font-family:arial,helvetica,sans-serif;" align="center"><b><font color="#ffffff">Immatriculation</font></b></td>
                                <td valign="top" align="center"><font color="#ffffff">${immatriculation}</font></td>
                              </tr>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px
                                  20px;font-family:arial,helvetica,sans-serif;" align="center"><b><font color="#ffffff">Mine</font></b></td>
                                <td valign="top" align="center"><font color="#ffffff">${mine}</font></td>
                              </tr>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px
                                  20px;font-family:arial,helvetica,sans-serif;" align="center"><b><font color="#ffffff">Couleur</font></b></td>
                                <td valign="top" align="center"><font color="#ffffff">${color}</font></td>
                              </tr>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px
                                  20px;font-family:arial,helvetica,sans-serif;" align="center"><b><font color="#ffffff">Finition</font></b></td>
                                <td valign="top" align="center"><font color="#ffffff">${finition}</font></td>
                              </tr>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px
                                  20px;font-family:arial,helvetica,sans-serif;" align="center"><b><font color="#ffffff">Modèle</font></b></td>
                                <td valign="top" align="center"><font color="#ffffff">${model}</font></td>
                              </tr>
                            </tbody>
                          </table>
                          <table id="u_content_button_1" style="font-family:arial,helvetica,sans-serif;"
                            role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px
                                  30px;font-family:arial,helvetica,sans-serif;" align="left">
                                  <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
                                  <div align="center">
                                    <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.unlayer.com" style="height:38px; v-text-anchor:middle; width:173px;" arcsize="13%"  stroke="f" fillcolor="#00c1ed"><w:anchorlock/><center style="color:#FFFFFF;font-family:arial,helvetica,sans-serif;"><![endif]-->
                                    <!--[if mso]></center></v:roundrect><![endif]--> </div>
                                  <br>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%"
                            cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                                  align="left">
                                  <table style="border-collapse: collapse;table-layout: fixed;border-spacing:
                                    0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px
                                    solid #555555;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%" width="100%"
                                    height="0px" cellspacing="0" cellpadding="0" border="0" align="center">
                                    <tbody>
                                      <tr style="vertical-align: top">
                                        <td style="word-break: break-word;border-collapse: collapse
                                          !important;vertical-align: top;font-size: 0px;line-height:
                                          0px;mso-line-height-rule: exactly;-ms-text-size-adjust:
                                          100%;-webkit-text-size-adjust: 100%"> <span></span> <br>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!--></div>
                        <!--<![endif]--> </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                </div>
              </div>
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap:
                  break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                  <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color:
                    transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #516874;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display:
                      table-cell;vertical-align: top;">
                      <div style="background-color: #516874;height: 100%;width: 100% !important;border-radius:
                        0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid
                          transparent;border-left: 0px solid transparent;border-right: 0px solid
                          transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px;
                          -moz-border-radius: 0px;"><!--<![endif]-->
                          <table style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%"
                            cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px
                                  10px;font-family:arial,helvetica,sans-serif;" align="left">
                                  <div align="center">
                                    <div style="display: table; max-width:167px;">
                                      <!--[if (mso)|(IE)]><table width="167" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:147px;"><tr><![endif]-->
                                      <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                      <table style="width: 48px !important;height: 48px !important;display:
                                        inline-block;border-collapse: collapse;table-layout: fixed;border-spacing:
                                        0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right:
                                        5px" width="48" height="48" cellspacing="0" cellpadding="0" border="0"
                                        align="left">
                                        <tbody>
                                          <tr style="vertical-align: top">
                                            <td style="word-break: break-word;border-collapse: collapse
                                              !important;vertical-align: top" valign="middle" align="left"> <a
                                                href="https://www.facebook.com/club306france" title="Facebook du club 306"
                                                target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px"
                                                  height="48px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1
                                                    0 24 5Z"></path><path fill="#fff"
  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path></svg>
                                              </a> <br>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if (mso)|(IE)]></td><![endif]-->
                                      <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                      <table style="width: 48px !important;height: 48px !important;display:
                                        inline-block;border-collapse: collapse;table-layout: fixed;border-spacing:
                                        0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right:
                                        5px" width="48" height="48" cellspacing="0" cellpadding="0" border="0"
                                        align="left">
                                        <tbody>
                                          <tr style="vertical-align: top">
                                            <td style="word-break: break-word;border-collapse: collapse
                                              !important;vertical-align: top" valign="middle" align="left"> <a
                                                href="https://www.instagram.com/club306officielfrance/" title="Instagram
                                                du club 306" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px"
                                                  height="48px"><path fill="#304ffe"
                                                    d="M41.67,13.48c-0.4,0.26-0.97,0.5-1.21,0.77c-0.09,0.09-0.14,0.19-0.12,0.29v1.03l-0.3,1.01l-0.3,1l-0.33,1.1
  l-0.68,2.25l-0.66,2.22l-0.5,1.67c0,0.26-0.01,0.52-0.03,0.77c-0.07,0.96-0.27,1.88-0.59,2.74c-0.19,0.53-0.42,1.04-0.7,1.52
  c-0.1,0.19-0.22,0.38-0.34,0.56c-0.4,0.63-0.88,1.21-1.41,1.72c-0.41,0.41-0.86,0.79-1.35,1.11c0,0,0,0-0.01,0
  c-0.08,0.07-0.17,0.13-0.27,0.18c-0.31,0.21-0.64,0.39-0.98,0.55c-0.23,0.12-0.46,0.22-0.7,0.31c-0.05,0.03-0.11,0.05-0.16,0.07
  c-0.57,0.27-1.23,0.45-1.89,0.54c-0.04,0.01-0.07,0.01-0.11,0.02c-0.4,0.07-0.79,0.13-1.19,0.16c-0.18,0.02-0.37,0.03-0.55,0.03
  l-0.71-0.04l-3.42-0.18c0-0.01-0.01,0-0.01,0l-1.72-0.09c-0.13,0-0.27,0-0.4-0.01c-0.54-0.02-1.06-0.08-1.58-0.19
                                                    c-0.01,0-0.01,0-0.01,0c-0.95-0.18-1.86-0.5-2.71-0.93c-0.47-0.24-0.93-0.51-1.36-0.82c-0.18-0.13-0.35-0.27-0.52-0.42
  c-0.48-0.4-0.91-0.83-1.31-1.27c-0.06-0.06-0.11-0.12-0.16-0.18c-0.06-0.06-0.12-0.13-0.17-0.19c-0.38-0.48-0.7-0.97-0.96-1.49
  c-0.24-0.46-0.43-0.95-0.58-1.49c-0.06-0.19-0.11-0.37-0.15-0.57c-0.01-0.01-0.02-0.03-0.02-0.05c-0.1-0.41-0.19-0.84-0.24-1.27
  c-0.06-0.33-0.09-0.66-0.09-1c-0.02-0.13-0.02-0.27-0.02-0.4l1.91-2.95l1.87-2.88l0.85-1.31l0.77-1.18l0.26-0.41v-1.03
  c0.02-0.23,0.03-0.47,0.02-0.69c-0.01-0.7-0.15-1.38-0.38-2.03c-0.22-0.69-0.53-1.34-0.85-1.94c-0.38-0.69-0.78-1.31-1.11-1.87
  C14,7.4,13.66,6.73,13.75,6.26C14.47,6.09,15.23,6,16,6h16c4.18,0,7.78,2.6,9.27,6.26C41.43,12.65,41.57,13.06,41.67,13.48z"></path><path
                                                    fill="#4928f4"
                                                    d="M42,16v0.27l-1.38,0.8l-0.88,0.51l-0.97,0.56l-1.94,1.13l-1.9,1.1l-1.94,1.12l-0.77,0.45
  c0,0.48-0.12,0.92-0.34,1.32c-0.31,0.58-0.83,1.06-1.49,1.47c-0.67,0.41-1.49,0.74-2.41,0.98c0,0,0-0.01-0.01,0
                                                    c-3.56,0.92-8.42,0.5-10.78-1.26c-0.66-0.49-1.12-1.09-1.32-1.78c-0.06-0.23-0.09-0.48-0.09-0.73v-7.19
  c0.01-0.15-0.09-0.3-0.27-0.45c-0.54-0.43-1.81-0.84-3.23-1.25c-1.11-0.31-2.3-0.62-3.3-0.92c-0.79-0.24-1.46-0.48-1.86-0.71
  c0.18-0.35,0.39-0.7,0.61-1.03c1.4-2.05,3.54-3.56,6.02-4.13C14.47,6.09,15.23,6,16,6h10.8c5.37,0.94,10.32,3.13,14.47,6.26
  c0.16,0.39,0.3,0.8,0.4,1.22c0.18,0.66,0.29,1.34,0.32,2.05C42,15.68,42,15.84,42,16z"></path><path fill="#6200ea"
                                                    d="M42,16v4.41l-0.22,0.68l-0.75,2.33l-0.78,2.4l-0.41,1.28l-0.38,1.19l-0.37,1.13l-0.36,1.12l-0.19,0.59
  l-0.25,0.78c0,0.76-0.02,1.43-0.07,2c-0.01,0.06-0.02,0.12-0.02,0.18c-0.06,0.53-0.14,0.98-0.27,1.36
  c-0.01,0.06-0.03,0.12-0.05,0.17c-0.26,0.72-0.65,1.18-1.23,1.48c-0.14,0.08-0.3,0.14-0.47,0.2c-0.53,0.18-1.2,0.27-2.02,0.32
  c-0.6,0.04-1.29,0.05-2.07,0.05H31.4l-1.19-0.05L30,37.61l-2.17-0.09l-2.2-0.09l-7.25-0.3l-1.88-0.08h-0.26
  c-0.78-0.01-1.45-0.06-2.03-0.14c-0.84-0.13-1.49-0.35-1.98-0.68c-0.7-0.45-1.11-1.11-1.35-2.03c-0.06-0.22-0.11-0.45-0.14-0.7
  c-0.1-0.58-0.15-1.25-0.18-2c0-0.15,0-0.3-0.01-0.46c-0.01-0.01,0-0.01,0-0.01v-0.58c-0.01-0.29-0.01-0.59-0.01-0.9l0.05-1.61
  l0.03-1.15l0.04-1.34v-0.19l0.07-2.46l0.07-2.46l0.07-2.31l0.06-2.27l0.02-0.6c0-0.31-1.05-0.49-2.22-0.64
                                                    c-0.93-0.12-1.95-0.23-2.56-0.37c0.05-0.23,0.1-0.46,0.16-0.68c0.18-0.72,0.45-1.4,0.79-2.05c0.18-0.35,0.39-0.7,0.61-1.03
  c2.16-0.95,4.41-1.69,6.76-2.17c2.06-0.43,4.21-0.66,6.43-0.66c7.36,0,14.16,2.49,19.54,6.69c0.52,0.4,1.03,0.83,1.53,1.28
                                                    C42,15.68,42,15.84,42,16z"></path><path fill="#673ab7"
                                                    d="M42,18.37v4.54l-0.55,1.06l-1.05,2.05l-0.56,1.08l-0.51,0.99l-0.22,0.43c0,0.31,0,0.61-0.02,0.9
  c0,0.43-0.02,0.84-0.05,1.22c-0.04,0.45-0.1,0.86-0.16,1.24c-0.15,0.79-0.36,1.47-0.66,2.03c-0.04,0.07-0.08,0.14-0.12,0.2
  c-0.11,0.18-0.24,0.35-0.38,0.51c-0.18,0.22-0.38,0.41-0.61,0.57c-0.34,0.26-0.74,0.47-1.2,0.63c-0.57,0.21-1.23,0.35-2.01,0.43
  c-0.51,0.05-1.07,0.08-1.68,0.08l-0.42,0.02l-2.08,0.12h-0.01L27.5,36.6l-2.25,0.13l-3.1,0.18l-3.77,0.22l-0.55,0.03
                                                    c-0.51,0-0.99-0.03-1.45-0.09c-0.05-0.01-0.09-0.02-0.14-0.02c-0.68-0.11-1.3-0.29-1.86-0.54c-0.68-0.3-1.27-0.7-1.77-1.18
  c-0.44-0.43-0.82-0.92-1.13-1.47c-0.07-0.13-0.14-0.25-0.2-0.39c-0.3-0.59-0.54-1.25-0.72-1.97c-0.03-0.12-0.06-0.25-0.08-0.38
  c-0.06-0.23-0.11-0.47-0.14-0.72c-0.11-0.64-0.17-1.32-0.2-2.03v-0.01c-0.01-0.29-0.02-0.57-0.02-0.87l-0.49-1.17l-0.07-0.18
  L9.5,25.99L8.75,24.2l-0.12-0.29l-0.72-1.73l-0.8-1.93c0,0,0,0-0.01,0L6.29,18.3L6,17.59V16c0-0.63,0.06-1.25,0.17-1.85
                                                    c0.05-0.23,0.1-0.46,0.16-0.68c0.85-0.49,1.74-0.94,2.65-1.34c2.08-0.93,4.31-1.62,6.62-2.04c1.72-0.31,3.51-0.48,5.32-0.48
  c7.31,0,13.94,2.65,19.12,6.97c0.2,0.16,0.39,0.32,0.58,0.49C41.09,17.48,41.55,17.91,42,18.37z"></path><path
                                                    fill="#8e24aa"
                                                    d="M42,21.35v5.14l-0.57,1.19l-1.08,2.25l-0.01,0.03c0,0.43-0.02,0.82-0.05,1.17c-0.1,1.15-0.38,1.88-0.84,2.33
  c-0.33,0.34-0.74,0.53-1.25,0.63c-0.03,0.01-0.07,0.01-0.1,0.02c-0.16,0.03-0.33,0.05-0.51,0.05c-0.62,0.06-1.35,0.02-2.19-0.04
  c-0.09,0-0.19-0.01-0.29-0.02c-0.61-0.04-1.26-0.08-1.98-0.11c-0.39-0.01-0.8-0.02-1.22-0.02h-0.02l-1.01,0.08h-0.01l-2.27,0.16
  l-2.59,0.2l-0.38,0.03l-3.03,0.22l-1.57,0.12l-1.55,0.11c-0.27,0-0.53,0-0.79-0.01c0,0-0.01-0.01-0.01,0
  c-1.13-0.02-2.14-0.09-3.04-0.26c-0.83-0.14-1.56-0.36-2.18-0.69c-0.64-0.31-1.17-0.75-1.6-1.31c-0.41-0.55-0.71-1.24-0.9-2.07
  c0-0.01,0-0.01,0-0.01c-0.14-0.67-0.22-1.45-0.22-2.33l-0.15-0.27L9.7,26.35l-0.13-0.22L9.5,25.99l-0.93-1.65l-0.46-0.83
  l-0.58-1.03l-1-1.79L6,19.75v-3.68c0.88-0.58,1.79-1.09,2.73-1.55c1.14-0.58,2.32-1.07,3.55-1.47c1.34-0.44,2.74-0.79,4.17-1.02
  c1.45-0.24,2.94-0.36,4.47-0.36c6.8,0,13.04,2.43,17.85,6.47c0.22,0.17,0.43,0.36,0.64,0.54c0.84,0.75,1.64,1.56,2.37,2.41
                                                    C41.86,21.18,41.94,21.26,42,21.35z"></path><path fill="#c2185b"
                                                    d="M42,24.71v7.23c-0.24-0.14-0.57-0.31-0.98-0.49c-0.22-0.11-0.47-0.22-0.73-0.32
  c-0.38-0.17-0.79-0.33-1.25-0.49c-0.1-0.04-0.2-0.07-0.31-0.1c-0.18-0.07-0.37-0.13-0.56-0.19c-0.59-0.18-1.24-0.35-1.92-0.5
  c-0.26-0.05-0.53-0.1-0.8-0.14c-0.87-0.15-1.8-0.24-2.77-0.25c-0.08-0.01-0.17-0.01-0.25-0.01l-2.57,0.02l-3.5,0.02h-0.01
                                                    l-7.49,0.06c-2.38,0-3.84,0.57-4.72,0.8c0,0-0.01,0-0.01,0.01c-0.93,0.24-1.22,0.09-1.3-1.54c-0.02-0.45-0.03-1.03-0.03-1.74
  l-0.56-0.43l-0.98-0.74l-0.6-0.46l-0.12-0.09L8.88,24.1l-0.25-0.19l-0.52-0.4l-0.96-0.72L6,21.91v-3.4
                                                    c0.1-0.08,0.19-0.15,0.29-0.21c1.45-1,3-1.85,4.64-2.54c1.46-0.62,3-1.11,4.58-1.46c0.43-0.09,0.87-0.18,1.32-0.24
  c1.33-0.23,2.7-0.34,4.09-0.34c6.01,0,11.53,2.09,15.91,5.55c0.66,0.52,1.3,1.07,1.9,1.66c0.82,0.78,1.59,1.61,2.3,2.49
                                                    c0.14,0.18,0.28,0.36,0.42,0.55C41.64,24.21,41.82,24.46,42,24.71z"></path><path
                                                    fill="#d81b60"
                                                    d="M42,28.72V32c0,0.65-0.06,1.29-0.18,1.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.22,0.05-0.47,0.05-0.75,0.01
  c-0.63-0.11-1.37-0.44-2.17-0.87c-0.04-0.01-0.08-0.03-0.11-0.05c-0.25-0.13-0.51-0.27-0.77-0.43c-0.53-0.29-1.09-0.61-1.65-0.91
  c-0.12-0.06-0.24-0.12-0.35-0.18c-0.64-0.33-1.3-0.63-1.96-0.86c0,0,0,0-0.01,0c-0.14-0.05-0.29-0.1-0.44-0.14
  c-0.57-0.16-1.15-0.26-1.71-0.26l-1.1-0.32l-4.87-1.41c0,0,0,0-0.01,0l-2.99-0.87h-0.01l-1.3-0.38c-3.76,0-6.07,1.6-7.19,0.99
  c-0.44-0.23-0.7-0.81-0.79-1.95c-0.03-0.32-0.04-0.68-0.04-1.1l-1.17-0.57l-0.05-0.02h-0.01l-0.84-0.42L9.7,26.35l-0.07-0.03
  l-0.17-0.09L7.5,25.28L6,24.55v-3.43c0.17-0.15,0.35-0.29,0.53-0.43c0.19-0.15,0.38-0.29,0.57-0.44c0.01,0,0.01,0,0.01,0
                                                    c1.18-0.85,2.43-1.6,3.76-2.22c1.55-0.74,3.2-1.31,4.91-1.68c0.25-0.06,0.51-0.12,0.77-0.16c1.42-0.27,2.88-0.41,4.37-0.41
  c5.27,0,10.11,1.71,14.01,4.59c1.13,0.84,2.18,1.77,3.14,2.78c0.79,0.83,1.52,1.73,2.18,2.67c0.05,0.07,0.1,0.14,0.15,0.2
                                                    c0.37,0.54,0.71,1.09,1.03,1.66C41.64,28.02,41.82,28.37,42,28.72z"></path><path
                                                    fill="#f50057"
                                                    d="M41.82,33.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.19,0.37-0.4,0.72-0.63,1.06c-0.14,0.21-0.29,0.41-0.44,0.6
  c-0.36-0.14-0.89-0.34-1.54-0.56c0,0,0,0,0-0.01c-0.49-0.17-1.05-0.35-1.65-0.52c-0.17-0.05-0.34-0.1-0.52-0.15
  c-0.71-0.19-1.45-0.36-2.17-0.46c-0.6-0.1-1.19-0.16-1.74-0.16l-0.46-0.13h-0.01l-2.42-0.7l-1.49-0.43l-1.66-0.48h-0.01l-0.54-0.15
  l-6.53-1.88l-1.88-0.54l-1.4-0.33l-2.28-0.54l-0.28-0.07c0,0,0,0-0.01,0l-2.29-0.53c0-0.01,0-0.01,0-0.01l-0.41-0.09l-0.21-0.05
  l-1.67-0.39l-0.19-0.05l-1.42-1.17L6,27.9v-4.08c0.37-0.36,0.75-0.7,1.15-1.03c0.12-0.11,0.25-0.21,0.38-0.31
                                                    c0.12-0.1,0.25-0.2,0.38-0.3c0.91-0.69,1.87-1.31,2.89-1.84c1.3-0.7,2.68-1.26,4.13-1.66c0.28-0.09,0.56-0.17,0.85-0.23
  c1.64-0.41,3.36-0.62,5.14-0.62c4.47,0,8.63,1.35,12.07,3.66c1.71,1.15,3.25,2.53,4.55,4.1c0.66,0.79,1.26,1.62,1.79,2.5
  c0.05,0.07,0.09,0.13,0.13,0.2c0.32,0.53,0.62,1.08,0.89,1.64c0.25,0.5,0.47,1,0.67,1.52C41.34,32.25,41.6,33.07,41.82,33.91z"></path><path
                                                    fill="#ff1744"
                                                    d="M40.28,37.59c-0.14,0.21-0.29,0.41-0.44,0.6c-0.44,0.55-0.92,1.05-1.46,1.49c-0.47,0.39-0.97,0.74-1.5,1.04
  c-0.2-0.05-0.4-0.11-0.61-0.19c-0.66-0.23-1.35-0.61-1.99-1.01c-0.96-0.61-1.79-1.27-2.16-1.57c-0.14-0.12-0.21-0.18-0.21-0.18
  l-1.7-0.15L30,37.6l-2.2-0.19l-2.28-0.2l-3.37-0.3l-5.34-0.47l-0.02-0.01l-1.88-0.91l-1.9-0.92l-1.53-0.74l-0.33-0.16l-0.41-0.2
  l-1.42-0.69L7.43,31.9l-0.59-0.29L6,31.35v-4.47c0.47-0.56,0.97-1.09,1.5-1.6c0.34-0.32,0.7-0.64,1.07-0.94
                                                    c0.06-0.05,0.12-0.1,0.18-0.14c0.04-0.05,0.09-0.08,0.13-0.1c0.59-0.48,1.21-0.91,1.85-1.3c0.74-0.47,1.52-0.89,2.33-1.24
  c0.87-0.39,1.78-0.72,2.72-0.97c1.63-0.46,3.36-0.7,5.14-0.7c4.08,0,7.85,1.24,10.96,3.37c1.99,1.36,3.71,3.08,5.07,5.07
                                                    c0.45,0.64,0.85,1.32,1.22,2.02c0.13,0.26,0.26,0.52,0.37,0.78c0.12,0.25,0.23,0.5,0.34,0.75c0.21,0.52,0.4,1.04,0.57,1.58
                                                    c0.32,1,0.56,2.02,0.71,3.08C40.21,36.89,40.25,37.24,40.28,37.59z"></path><path
                                                    fill="#ff5722"
                                                    d="M38.39,39.42c0,0.08,0,0.17-0.01,0.26c-0.47,0.39-0.97,0.74-1.5,1.04c-0.22,0.12-0.44,0.24-0.67,0.34
  c-0.23,0.11-0.46,0.21-0.7,0.3c-0.34-0.18-0.8-0.4-1.29-0.61c-0.69-0.31-1.44-0.59-2.02-0.68c-0.14-0.03-0.27-0.04-0.39-0.04
  l-1.64-0.21h-0.02l-2.04-0.27l-2.06-0.27l-0.96-0.12l-7.56-0.98c-0.49,0-1.01-0.03-1.55-0.1c-0.66-0.06-1.35-0.16-2.04-0.3
                                                    c-0.68-0.12-1.37-0.28-2.03-0.45c-0.69-0.16-1.37-0.35-2-0.53c-0.73-0.22-1.41-0.43-1.98-0.62c-0.47-0.15-0.87-0.29-1.18-0.4
  c-0.18-0.43-0.33-0.88-0.44-1.34C6.1,33.66,6,32.84,6,32v-1.67c0.32-0.53,0.67-1.05,1.06-1.54c0.71-0.94,1.52-1.8,2.4-2.56
                                                    c0.03-0.04,0.07-0.07,0.1-0.09l0.01-0.01c0.31-0.28,0.63-0.53,0.97-0.77c0.04-0.04,0.08-0.07,0.12-0.1
  c0.16-0.12,0.33-0.24,0.51-0.35c1.43-0.97,3.01-1.73,4.7-2.24c1.6-0.48,3.29-0.73,5.05-0.73c3.49,0,6.75,1.03,9.47,2.79
                                                    c2.01,1.29,3.74,2.99,5.06,4.98c0.16,0.23,0.31,0.46,0.46,0.7c0.69,1.17,1.26,2.43,1.68,3.75c0.05,0.15,0.09,0.3,0.13,0.46
  c0.08,0.27,0.15,0.55,0.21,0.83c0.02,0.07,0.04,0.14,0.06,0.22c0.14,0.63,0.24,1.29,0.31,1.95c0,0.01,0,0.01,0,0.01
                                                    C38.36,38.22,38.39,38.82,38.39,39.42z"></path><path fill="#ff6f00"
                                                    d="M36.33,39.42c0,0.35-0.02,0.73-0.06,1.11c-0.02,0.18-0.04,0.36-0.06,0.53c-0.23,0.11-0.46,0.21-0.7,0.3
  c-0.45,0.17-0.91,0.31-1.38,0.41c-0.32,0.07-0.65,0.13-0.98,0.16h-0.01c-0.31-0.19-0.67-0.42-1.04-0.68
  c-0.67-0.47-1.37-1-1.93-1.43c-0.01-0.01-0.01-0.01-0.02-0.02c-0.59-0.45-1.01-0.79-1.01-0.79l-1.06,0.04l-2.04,0.07l-0.95,0.04
  l-3.82,0.14l-3.23,0.12c-0.21,0.01-0.46,0.01-0.77,0h-0.01c-0.42-0.01-0.92-0.04-1.47-0.09c-0.64-0.05-1.34-0.11-2.05-0.18
  c-0.69-0.08-1.39-0.16-2.06-0.24c-0.74-0.08-1.44-0.17-2.04-0.25c-0.47-0.06-0.88-0.11-1.21-0.15c-0.28-0.32-0.53-0.65-0.77-1.01
  c-0.36-0.54-0.67-1.11-0.91-1.72c-0.18-0.43-0.33-0.88-0.44-1.34c0.29-0.89,0.67-1.73,1.12-2.54c0.36-0.66,0.78-1.29,1.24-1.89
  c0.45-0.59,0.94-1.14,1.47-1.64v-0.01c0.15-0.15,0.3-0.29,0.45-0.42c0.28-0.26,0.57-0.5,0.87-0.73h0.01
                                                    c0.01-0.02,0.02-0.02,0.03-0.03c0.24-0.19,0.49-0.36,0.74-0.53c1.48-1.01,3.15-1.76,4.95-2.2c1.19-0.29,2.44-0.45,3.73-0.45
  c2.54,0,4.94,0.61,7.05,1.71h0.01c1.81,0.93,3.41,2.21,4.7,3.75c0.71,0.82,1.32,1.72,1.82,2.67c0.35,0.64,0.65,1.31,0.9,1.99
  c0.02,0.06,0.04,0.11,0.06,0.16c0.17,0.5,0.32,1.02,0.45,1.54c0.09,0.37,0.16,0.75,0.22,1.13c0.02,0.12,0.04,0.23,0.05,0.35
                                                    C36.28,37.99,36.33,38.7,36.33,39.42z"></path><path fill="#ff9800"
                                                    d="M34.28,39.42v0.1c0,0.34-0.03,0.77-0.06,1.23c-0.03,0.34-0.06,0.69-0.09,1.02c-0.32,0.07-0.65,0.13-0.98,0.16
  h-0.01C32.76,41.98,32.39,42,32,42h-1.75l-0.38-0.11l-1.97-0.6l-2-0.6l-4.63-1.39l-2-0.6c0,0-0.83,0.33-2,0.72h-0.01
  c-0.45,0.15-0.94,0.31-1.46,0.47c-0.65,0.19-1.34,0.38-2.02,0.53c-0.7,0.16-1.39,0.28-2.01,0.33c-0.19,0.02-0.38,0.03-0.55,0.03
  c-0.56-0.31-1.1-0.68-1.59-1.09c-0.43-0.36-0.83-0.75-1.2-1.18c-0.28-0.32-0.53-0.65-0.77-1.01c0.07-0.45,0.15-0.89,0.27-1.32
  c0.3-1.19,0.77-2.33,1.39-3.37c0.34-0.59,0.72-1.16,1.16-1.69c0.01-0.03,0.04-0.06,0.07-0.08c-0.01-0.01,0-0.01,0-0.01
                                                    c0.13-0.17,0.27-0.33,0.41-0.48c0-0.01,0-0.01,0-0.01c0.41-0.44,0.83-0.86,1.29-1.25c0.16-0.13,0.31-0.26,0.48-0.39
  c0.03-0.03,0.06-0.05,0.1-0.08c2.25-1.72,5.06-2.76,8.09-2.76c3.44,0,6.57,1.29,8.94,3.41c1.14,1.03,2.11,2.26,2.84,3.63
                                                    c0.06,0.1,0.12,0.21,0.17,0.32c0.09,0.18,0.18,0.37,0.26,0.57c0.33,0.72,0.59,1.48,0.77,2.26c0.02,0.08,0.04,0.16,0.06,0.24
                                                    c0.08,0.37,0.15,0.75,0.2,1.13C34.24,38.21,34.28,38.81,34.28,39.42z"></path><path
                                                    fill="#ffc107"
                                                    d="M32.22,39.42c0,0.2-0.01,0.42-0.02,0.65c-0.02,0.37-0.05,0.77-0.1,1.18c-0.02,0.25-0.06,0.5-0.1,0.75h-5.48
  l-1.06-0.17l-4.14-0.66l-0.59-0.09l-1.35-0.22c-0.59,0-1.87,0.26-3.22,0.51c-0.71,0.13-1.43,0.27-2.08,0.36
  c-0.08,0.01-0.16,0.02-0.23,0.03h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.2-0.09-0.4-0.19-0.6-0.3c-0.56-0.31-1.1-0.68-1.59-1.09
  c-0.01-0.12-0.02-0.22-0.02-0.27c0-0.26,0.01-0.51,0.03-0.76c0.04-0.64,0.13-1.26,0.27-1.86c0.22-0.91,0.54-1.79,0.97-2.6
                                                    c0.08-0.17,0.17-0.34,0.27-0.5c0.04-0.08,0.09-0.15,0.13-0.23c0.18-0.29,0.38-0.57,0.58-0.85c0.42-0.55,0.89-1.07,1.39-1.54
  c0.01,0,0.01,0,0.01,0c0.04-0.04,0.08-0.08,0.12-0.11c0.05-0.04,0.09-0.09,0.14-0.12c0.2-0.18,0.4-0.34,0.61-0.49
                                                    c0-0.01,0.01-0.01,0.01-0.01c1.89-1.41,4.23-2.24,6.78-2.24c1.98,0,3.82,0.5,5.43,1.38h0.01c1.38,0.76,2.58,1.79,3.53,3.03
  c0.37,0.48,0.7,0.99,0.98,1.53h0.01c0.05,0.1,0.1,0.2,0.15,0.3c0.3,0.59,0.54,1.21,0.72,1.85h0.01c0.01,0.05,0.03,0.1,0.04,0.15
  c0.12,0.43,0.22,0.87,0.29,1.32c0.01,0.09,0.02,0.19,0.03,0.28C32.19,38.43,32.22,38.92,32.22,39.42z"></path><path
                                                    fill="#ffd54f"
                                                    d="M30.17,39.31c0,0.16,0,0.33-0.02,0.49v0.01c0,0.01,0,0.01,0,0.01c-0.02,0.72-0.12,1.43-0.28,2.07
  c0,0.04-0.01,0.07-0.03,0.11h-4.67l-3.85-0.83l-0.51-0.11l-0.08,0.02l-4.27,0.88L16.27,42H16c-0.64,0-1.27-0.06-1.88-0.18
                                                    c-0.09-0.02-0.18-0.04-0.27-0.06h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.02-0.11-0.04-0.22-0.05-0.33
  c-0.07-0.43-0.1-0.88-0.1-1.33c0-0.17,0-0.34,0.01-0.51c0.03-0.54,0.11-1.07,0.23-1.58c0.08-0.38,0.19-0.75,0.32-1.1
                                                    c0.11-0.31,0.24-0.61,0.38-0.9c0.12-0.25,0.26-0.49,0.4-0.73c0.14-0.23,0.29-0.45,0.45-0.67c0.4-0.55,0.87-1.06,1.39-1.51
  c0.3-0.26,0.63-0.51,0.97-0.73c1.46-0.96,3.21-1.52,5.1-1.52c0.37,0,0.73,0.02,1.08,0.07h0.02c1.07,0.12,2.07,0.42,2.99,0.87
  c0.01,0,0.01,0,0.01,0c1.45,0.71,2.68,1.78,3.58,3.1c0.15,0.22,0.3,0.46,0.43,0.7c0.11,0.19,0.21,0.39,0.3,0.59
                                                    c0.14,0.31,0.27,0.64,0.38,0.97h0.01c0.11,0.37,0.21,0.74,0.28,1.13v0.01C30.11,38.16,30.17,38.73,30.17,39.31z"></path><path
                                                    fill="#ffe082"
                                                    d="M28.11,39.52v0.03c0,0.59-0.07,1.17-0.21,1.74c-0.05,0.24-0.12,0.48-0.21,0.71h-4.48l-2.29-0.63L18.63,42H16
  c-0.64,0-1.27-0.06-1.88-0.18c-0.02-0.03-0.03-0.06-0.04-0.09c-0.14-0.43-0.25-0.86-0.3-1.31c-0.04-0.29-0.06-0.59-0.06-0.9
  c0-0.12,0-0.25,0.02-0.37c0.01-0.47,0.08-0.93,0.2-1.37c0.06-0.3,0.15-0.59,0.27-0.87c0.04-0.14,0.1-0.27,0.17-0.4
                                                    c0.15-0.34,0.33-0.67,0.53-0.99c0.22-0.32,0.46-0.62,0.73-0.9c0.32-0.36,0.68-0.69,1.09-0.96c0.7-0.51,1.5-0.89,2.37-1.1
  c0.58-0.16,1.19-0.24,1.82-0.24c2,0,3.79,0.8,5.09,2.09c0.05,0.05,0.11,0.11,0.16,0.18h0.01c0.14,0.15,0.27,0.3,0.4,0.47
                                                    c0.37,0.47,0.68,0.98,0.92,1.54c0.12,0.26,0.22,0.53,0.3,0.81c0.01,0.04,0.02,0.07,0.03,0.11c0.14,0.49,0.23,1,0.25,1.53
                                                    C28.1,39.2,28.11,39.36,28.11,39.52z"></path><path fill="#ffecb3"
                                                    d="M26.06,39.52c0,0.41-0.05,0.8-0.16,1.17c-0.1,0.4-0.25,0.78-0.44,1.14c-0.03,0.06-0.1,0.17-0.1,0.17h-8.88
  c-0.01-0.01-0.02-0.03-0.02-0.04c-0.12-0.19-0.22-0.38-0.3-0.59c-0.2-0.46-0.32-0.96-0.36-1.48c-0.02-0.12-0.02-0.25-0.02-0.37
  c0-0.06,0-0.13,0.01-0.19c0.01-0.44,0.07-0.86,0.19-1.25c0.1-0.36,0.23-0.69,0.4-1.01c0,0,0.01-0.01,0.01-0.02
  c0.12-0.21,0.25-0.42,0.4-0.62c0.49-0.66,1.14-1.2,1.89-1.55c0.01,0,0.01,0,0.01,0c0.24-0.12,0.49-0.22,0.75-0.29c0,0,0,0,0.01,0
  c0.46-0.14,0.96-0.21,1.47-0.21c0.59,0,1.16,0.09,1.68,0.28c0.19,0.05,0.37,0.13,0.55,0.22c0,0,0,0,0.01,0
                                                    c0.86,0.41,1.59,1.05,2.09,1.85c0.1,0.15,0.19,0.31,0.27,0.48c0.04,0.07,0.08,0.15,0.11,0.22c0.23,0.52,0.37,1.09,0.41,1.69
                                                    c0.01,0.05,0.01,0.1,0.01,0.16C26.06,39.36,26.06,39.44,26.06,39.52z"></path><g><path
                                                      fill="none" stroke="#fff" stroke-linecap="round"
                                                      stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"
                                                      d="M30,11H18c-3.9,0-7,3.1-7,7v12c0,3.9,3.1,7,7,7h12c3.9,0,7-3.1,7-7V18C37,14.1,33.9,11,30,11z"></path><circle
                                                      cx="31" cy="16" r="1" fill="#fff"></circle></g><g><circle cx="24"
                                                      cy="24" r="6" fill="none" stroke="#fff" stroke-linecap="round"
                                                      stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></circle></g></svg>
                                              </a> <br>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if (mso)|(IE)]></td><![endif]-->
                                      <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                      <table style="width: 48px !important;height: 48px !important;display:
                                        inline-block;border-collapse: collapse;table-layout: fixed;border-spacing:
                                        0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right:
                                        5px" width="32" height="32" cellspacing="0" cellpadding="0" border="0"
                                        align="left">
                                        <tbody>
                                          <tr style="vertical-align: top">
                                            <td style="word-break: break-word;border-collapse: collapse
                                              !important;vertical-align: top" valign="middle" align="left"> <a
                                                href="https://club306.fr/" title="site web du club 306" target="_blank">
                                                <!--?xml version="1.0" encoding="iso-8859-1"?-->
                                                <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                                                <svg height="48px" width="48px" version="1.1" id="Layer_1"
                                                  xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                                  viewBox="0 0 392.533 392.533" xml:space="preserve">
                                                  <path style="fill:#FFC10D;"
                                                    d="M359.822,147.329H32.711c-6.012,0-10.925,4.848-10.925,10.925v75.96
                                                    c0,6.012,4.848,10.925,10.925,10.925h327.111c6.012,0,10.925-4.848,10.925-10.925v-75.96
                                                    C370.747,152.242,365.834,147.329,359.822,147.329z"></path>
                                                  <g>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M104.404,125.543c2.521-13.446,5.689-26.117,9.438-37.818c-15.903-2.004-31.806-4.59-47.774-7.628
                                                      c-11.895,13.382-21.786,28.574-29.285,45.446H104.404z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M185.341,92.768c-16.485-0.259-32.84-1.164-49.196-2.651c-3.685,10.796-6.982,22.691-9.503,35.362
                                                      h58.828V92.703h-0.129V92.768z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M85.463,61.608c12.024,2.069,24.113,3.814,36.267,5.172c6.206-14.287,13.317-26.57,21.269-36.655
                                                      C121.859,36.913,102.4,47.644,85.463,61.608z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M185.341,23.79c-15.127,5.301-29.349,21.463-40.663,45.253c13.511,1.099,27.022,1.681,40.663,1.939
                                                      V23.79z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M278.691,87.79c3.814,11.636,6.853,24.242,9.438,37.818h67.62
                                                      c-7.499-16.873-17.39-32.065-29.285-45.446C310.562,83.265,294.659,85.851,278.691,87.79z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M307.071,61.608c-16.937-13.899-36.396-24.63-57.471-31.354
                                                      c7.952,10.02,15.063,22.303,21.269,36.655C282.958,65.358,295.046,63.677,307.071,61.608z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M256.388,90.182c-16.356,1.487-32.84,2.392-49.196,2.651v32.776h58.828
                                                      C263.434,112.873,260.202,100.978,256.388,90.182z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M207.192,70.982c13.511-0.259,27.152-0.84,40.663-1.939c-11.313-23.725-25.471-39.952-40.663-45.253
                                                      V70.982z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M288.129,266.99c-2.521,13.447-5.689,26.117-9.438,37.818c15.903,2.004,31.806,4.59,47.774,7.628
  c11.895-13.382,21.786-28.574,29.285-45.446L288.129,266.99L288.129,266.99z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M207.192,368.743c15.127-5.301,29.349-21.463,40.663-45.253
                                                      c-13.511-1.099-27.022-1.681-40.663-1.939V368.743z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M207.192,299.766c16.485,0.259,32.84,1.164,49.196,2.65c3.685-10.796,6.982-22.691,9.503-35.362
                                                      h-58.828v32.776h0.129V299.766z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M307.071,330.925c-12.024-2.069-24.113-3.814-36.267-5.172
                                                      c-6.206,14.287-13.317,26.57-21.269,36.655C270.675,355.62,290.133,344.889,307.071,330.925z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M185.341,321.552c-13.511,0.259-27.152,0.84-40.663,1.939
                                                      c11.313,23.725,25.471,39.952,40.663,45.253V321.552z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M36.848,266.99c7.499,16.873,17.39,32.065,29.285,45.447c15.838-3.103,31.741-5.689,47.774-7.628
                                                      c-3.814-11.636-6.853-24.242-9.438-37.689h-67.62V266.99z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M136.145,302.352c16.356-1.487,32.84-2.392,49.196-2.65v-32.776h-58.828
                                                      C129.099,279.661,132.331,291.556,136.145,302.352z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M121.729,325.754c-12.024,1.422-24.178,3.103-36.267,5.172
                                                      c16.937,13.899,36.396,24.63,57.471,31.354C134.982,352.388,127.806,340.04,121.729,325.754z"></path>
                                                  </g>
                                                  <g>
                                                    <path style="fill:#194F82;"
                                                      d="M383.03,135.305C355.62,53.204,279.855,0,196.267,0C112.42,0,37.236,53.139,9.826,134.917
  C3.814,140.865,0,149.139,0,158.255v75.96c0,8.792,3.556,16.873,9.244,22.82c29.608,82.812,103.046,135.499,187.022,135.499
  c83.846,0,159.741-53.85,186.44-134.917c6.012-5.947,9.826-14.222,9.826-23.337v-75.96
                                                      C392.533,149.269,388.913,141.188,383.03,135.305z
                                                      M355.685,125.543h-67.62c-2.521-13.446-5.689-26.117-9.438-37.818
                                                      c15.903-2.004,31.806-4.59,47.774-7.628C338.295,93.479,348.25,108.735,355.685,125.543z
                                                      M307.071,61.608
  c-12.024,2.069-24.113,3.814-36.267,5.172c-6.077-14.287-13.317-26.57-21.269-36.655C270.675,36.913,290.133,47.644,307.071,61.608
                                                      z
                                                      M207.192,23.79c15.127,5.301,29.349,21.463,40.663,45.253c-13.511,1.099-27.152,1.681-40.663,1.939V23.79z
                                                      M207.063,92.768h0.065
                                                      c16.485-0.259,32.84-1.164,49.196-2.651c3.685,10.796,6.982,22.691,9.503,35.362h-58.828V92.768H207.063z
                                                      M185.341,23.79v47.192
                                                      c-13.511-0.259-27.152-0.84-40.663-1.939C155.992,45.253,170.214,29.156,185.341,23.79z
                                                      M185.277,92.768v32.776h-58.699
                                                      c2.521-12.671,5.818-24.566,9.503-35.362C152.436,91.669,168.921,92.574,185.277,92.768z
                                                      M142.933,30.125
  c-7.952,10.02-15.063,22.303-21.269,36.655c-12.024-1.422-24.178-3.103-36.267-5.172C102.4,47.644,121.859,36.913,142.933,30.125z
  M66.133,80.097c15.838,3.103,31.741,5.689,47.774,7.628c-3.814,11.636-6.853,24.242-9.438,37.818h-67.62
                                                      C44.283,108.735,54.238,93.479,66.133,80.097z
                                                      M36.848,266.99h67.62c2.521,13.447,5.689,26.117,9.438,37.689
                                                      c-15.903,2.004-31.806,4.59-47.774,7.628C54.238,299.055,44.283,283.798,36.848,266.99z
                                                      M85.463,330.925
  c12.024-2.069,24.113-3.814,36.267-5.172c6.206,14.287,13.317,26.57,21.269,36.655C121.859,355.62,102.4,344.889,85.463,330.925z
  M185.341,368.743c-15.127-5.301-29.349-21.463-40.663-45.253c13.511-1.099,27.152-1.681,40.663-1.939V368.743z
                                                      M185.471,299.766
                                                      h-0.065c-16.485,0.259-32.84,1.164-49.196,2.65c-3.685-10.796-6.982-22.691-9.503-35.362h58.828v32.711H185.471z
                                                      M207.192,368.743
                                                      v-47.192c13.511,0.259,27.152,0.84,40.663,1.939C236.541,347.281,222.319,363.378,207.192,368.743z
                                                      M207.257,299.766V266.99h58.699
                                                      c-2.521,12.671-5.818,24.566-9.503,35.362C240.097,300.865,223.612,299.96,207.257,299.766z
                                                      M249.6,362.408
  c7.952-10.02,15.063-22.303,21.269-36.655c12.024,1.422,24.178,3.103,36.267,5.172C290.133,344.889,270.675,355.62,249.6,362.408z
  M326.4,312.436c-15.838-3.103-31.741-5.689-47.774-7.628c3.814-11.636,6.853-24.242,9.438-37.818h67.62
                                                      C348.25,283.798,338.295,299.055,326.4,312.436z
                                                      M359.822,245.204H32.711c-6.012,0-10.925-4.848-10.925-10.925v-75.96
                                                      c0-6.012,4.848-10.925,10.925-10.925h327.111c6.012,0,10.925,4.848,10.925,10.925v75.96h0.065
                                                      C370.747,240.291,365.899,245.204,359.822,245.204z"></path>
                                                    <polygon style="fill:#194F82;" points="120.76,202.085 109.899,168.21
                                                      94.836,168.21 83.911,202.085 72.986,168.21 56.889,168.21
                                                      75.895,224.259 92.057,224.259 102.4,193.745 112.679,224.259
                                                      128.905,224.259 147.911,168.21 131.685,168.21 "></polygon>
                                                    <polygon style="fill:#194F82;" points="214.562,202.15 203.701,168.275
                                                      188.638,168.275 177.713,202.15 166.853,168.275 150.691,168.275
                                                      169.697,224.259 185.859,224.259 196.267,193.81 206.481,224.323
                                                      222.707,224.323 241.713,168.275 225.487,168.275 "></polygon>
                                                    <polygon style="fill:#194F82;" points="308.493,202.085 297.568,168.21
                                                      282.505,168.21 271.58,202.085 260.719,168.21 244.558,168.21
                                                      263.564,224.259 279.725,224.259 290.069,193.745 300.347,224.259
                                                      316.574,224.259 335.58,168.21 319.354,168.21 "></polygon> </g>
                                                  <g>
                                                    <path style="fill:#56ACE0;"
                                                      d="M270.675,326.141c0.129-0.065,0.323-0.259,0.453-0.323c-0.065,0-0.259,0-0.323,0
                                                      C270.739,325.947,270.739,326.012,270.675,326.141z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M121.406,325.754c0.129,0.065,0.323,0.259,0.453,0.323c-0.065-0.129-0.065-0.259-0.129-0.388
                                                      C121.6,325.754,121.471,325.754,121.406,325.754z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M271.127,66.78c-0.129-0.065-0.323-0.259-0.453-0.323c0.065,0.129,0.065,0.259,0.129,0.388
                                                      C270.933,66.78,271.063,66.78,271.127,66.78z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M121.859,66.392c-0.129,0.065-0.323,0.259-0.453,0.323c0.065,0,0.259,0,0.323,0
                                                      C121.794,66.586,121.794,66.521,121.859,66.392z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M70.723,266.99c7.24,14.933,16.743,28.38,28.057,39.887c5.042-0.776,10.02-1.552,15.127-2.133
                                                      c-3.814-11.636-6.853-24.242-9.438-37.689H70.723V266.99z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M70.723,266.99L70.723,266.99L70.723,266.99z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M185.277,266.99h-58.699c2.521,12.671,5.818,24.566,9.503,35.362
                                                      c16.356-1.487,32.84-2.392,49.196-2.65V266.99z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M288.129,267.055v-0.065c-2.521,13.447-5.689,26.117-9.438,37.818
                                                      c5.042,0.646,10.02,1.422,15.127,2.133c11.313-11.507,20.816-24.954,28.057-39.887H288.129z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M144.743,69.107c13.511,1.099,27.152,1.681,40.663,1.939V44.154
                                                      c-10.279,0.84-20.234,2.844-29.802,5.947C151.725,55.725,148.04,61.996,144.743,69.107z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M207.192,348.444c10.279-0.84,20.234-2.844,29.802-5.947c3.814-5.624,7.499-11.895,10.796-19.006
                                                      c-13.511-1.099-27.152-1.681-40.663-1.939v26.893H207.192z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M207.192,299.766c16.485,0.259,32.84,1.164,49.196,2.65c3.814-10.796,6.982-22.691,9.568-35.362
                                                      h-58.828v32.711H207.192z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M207.257,92.768v32.776h58.699c-2.521-12.671-5.818-24.566-9.503-35.362
                                                      C240.097,91.669,223.612,92.574,207.257,92.768z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M236.994,50.036c-9.568-3.103-19.523-5.107-29.802-5.947v26.893
                                                      c13.511-0.259,27.152-0.84,40.663-1.939C244.493,62.061,240.808,55.725,236.994,50.036z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M155.539,342.497c9.568,3.103,19.523,5.107,29.802,5.947v-26.893
                                                      c-13.576,0.259-27.152,0.84-40.663,1.939C148.04,330.473,151.79,336.808,155.539,342.497z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M321.81,125.608v-0.065c-7.24-14.933-16.743-28.38-28.057-39.887
                                                      c-5.042,0.776-10.02,1.552-15.127,2.133c3.814,11.636,6.853,24.242,9.438,37.818H321.81z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M104.404,125.543c2.521-13.446,5.689-26.117,9.438-37.818c-5.042-0.646-10.02-1.422-15.127-2.133
  c-11.313,11.507-20.816,24.954-28.057,39.887h33.745C104.404,125.479,104.404,125.543,104.404,125.543z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M126.578,125.543h58.828V92.768c-16.485-0.259-32.84-1.164-49.196-2.651
                                                      C132.331,100.978,129.099,112.873,126.578,125.543z"></path> </g> </svg>
                                              </a> </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if (mso)|(IE)]></td><![endif]-->
                                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table id="u_content_text_3" style="font-family:arial,helvetica,sans-serif;" role="presentation"
                            width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px
                                  30px;font-family:arial,helvetica,sans-serif;" align="left">
                                  <div class="v-font-size" style="color: #ffffff; line-height: 140%; text-align: center;
                                    word-wrap: break-word;">
                                    <p style="font-size: 14px; line-height: 140%;">Club 306</p>
                                    <p style="font-size: 14px; line-height: 140%;">12 allée Ledru Rollin</p>
                                    <p style="font-size: 14px; line-height: 140%;">93320 Les Pavillons sous Bois</p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!--></div>
                        <!--<![endif]--> </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                </div>
              </div>
              <!--[if (mso)|(IE)]></td></tr></table><![endif]--> </td>
          </tr>
        </tbody>
      </table>
      <!--[if mso]></div><![endif]-->
      <!--[if IE]></div><![endif]-->
    </body>
  </html>
`
}

const confirMail = (firstName: string, lastName: string, token: string) => {
  return `<!DOCTYPE html>
  <html>
    <head>
  
      <meta http-equiv="content-type" content="text/html; charset=UTF-8">
      <title></title>
    </head>
    <body>
      <p> </p>
      <table class="nl-container" role="presentation"
  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;
        background-color: #FFFFFF;" width="100%" cellspacing="0"
        cellpadding="0" border="0">
        <tbody>
          <tr>
            <td>
              <table class="row row-1" role="presentation"
  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;
                background-color: #FFF;" width="100%" cellspacing="0"
                cellpadding="0" border="0" align="center">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" role="presentation"
  style="mso-table-lspace: 0pt; mso-table-rspace:
                        0pt; color: #000000; width: 650px" width="650"
                        cellspacing="0" cellpadding="0" border="0"
                        align="center">
                        <tbody>
                          <tr>
                            <td class="column column-1"
  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight:
                              400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;
                              border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                              width="100%"><br>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-2" role="presentation"
  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;
                background-color: #FFF;" width="100%" cellspacing="0"
                cellpadding="0" border="0" align="center">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" role="presentation"
  style="background-color: rgb(236, 236, 236);
                        color: rgb(0, 0, 0); border-radius: 50px 50px 0px 0px;"
                        width="650" height="72" cellspacing="0"
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
              <table class="row row-2" role="presentation"
  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;
                background-color: #FFF;" width="100%" cellspacing="0"
                cellpadding="0" border="0" align="center">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" role="presentation"
  style="background-color: rgb(236, 236, 236);
                        color: rgb(0, 0, 0);" width="650" height="386"
                        cellspacing="0" cellpadding="0" border="0"
                        align="center">
                        <tbody>
                          <tr>
                            <td class="column column-1"
  style="margin-top: 5px; background-image:
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
              <table class="row row-2" role="presentation"
  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;
                background-color: #FFF;" width="100%" cellspacing="0"
                cellpadding="0" border="0" align="center">
                <tbody>
                  <tr>
                    <td>
                      <table
  style="background-color: rgb(236, 236, 236); color: rgb(0, 0, 0); "
                        width="650" height="196" cellspacing="0"
                        cellpadding="0" border="0" align="center">
                        <tbody>
                          <tr>
                            <td>&nbsp;</td>
                          </tr>
                          <tr>
                            <td>
                              <table
  style="background-color: white; color: rgb(0, 0, 0); border-radius: 50px"
                                width="550" height="386" cellspacing="0"
                                cellpadding="0" border="0" align="center">
                                <tbody>
                                  <tr>
                                    <td style="padding-top: 5px"
                                      valign="top" align="center"> <a
                                        href="http://www.club306.fr"
                                        style="outline:none" tabindex="-1"
                                        target="_blank"
                                        moz-do-not-send="true"><img alt=""
  src="https://www.club306.fr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoClub306.3a02f592.png&amp;w=256&amp;q=75"
  style="display: block; max-width: 80%;" title="Logo CLub 306"
                                          moz-do-not-send="true"
                                          width="256" height="94"
                                          border="0"></a> </td>
                                  </tr>
                                  <tr>
                                    <td
  style="overflow-wrap:break-word;word-break:break-word;padding:60px 50px
                                      20px;font-family:'Raleway',sans-serif;"
                                      valign="top" align="left">
                                      <div
  style="font-family: Helvetica,Arial,sans-serif; overflow:auto;line-height:2">
                                        <div
  style="margin:50px auto;width:70%;padding:20px 0">
                                          <div
  style="border-bottom:1px solid #eee"> <a href=""
  style="font-size:1.4em;color:
                                              #00466a;text-decoration:none;font-weight:600">Vérification
                                              de votre adresse e-mail</a>
                                          </div>
                                          <p style="font-size:1.1em">Bonjour ${firstName} ${lastName},</p>
                                          <p>Nous sommes ravis de vous
                                            accueillir parmi nous ! Avant
                                            de commencer à utiliser les
                                            services du Club 306, nous
                                            avons besoin de vérifier que
                                            cette adresse e-mail vous
                                            appartient.</p>
                                          <p>Veuillez cliquer sur le lien
                                            ci-dessous pour valider votre
                                            adresse e-mail :</p>
                                          <p align="center">&nbsp;<a
  href="${process.env.CLIENT_URL}/verify-email?token=${token}"
                                              title="lien verif email"
  style="background: #00466a;margin: 0 auto;width: max-content;padding: 0
                                            10px;color: #fff;border-radius: 4px;"
                                              target="_blank">Lien</a></p>
                                          <p>Si vous n'avez pas créé de
                                            compte sur Club 306, veuillez
                                            ignorer ce message.</p>
                                          <p>Si vous avez des questions ou
                                            besoin d'aide, n'hésitez pas à
                                            nous contacter à
                                            webmaster@club306.fr.</p>
                                          <p>Merci de nous avoir rejoint,</p>
                                          <p>Club 306</p>
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
              <table class="row row-3" role="presentation"
  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;
                background-color: #fff;" width="100%" cellspacing="0"
                cellpadding="0" border="0" align="center">
              </table>
              <table
  style="background-color: rgb(236, 236, 236); color: rgb(0, 0, 0);"
                width="650" cellspacing="0" cellpadding="0" border="0"
                align="center">
                <tbody>
                  <tr>
                    <td style="width:100%;">
                      <div
  style="font-family: Helvetica,Arial,sans-serif;overflow:auto;line-height:2"
                        align="center">
                        <p style="font-size:1.1em">Restons en contact ! <b>#club306</b></p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
  style="background-color: rgb(236, 236, 236); color: rgb(0, 0, 0); text-align: center;"
                width="650" cellspacing="0" cellpadding="0" border="0"
                align="center">
                <tbody>
                  <tr>
                    <td>
                      <table width="400" align="center">
                        <tbody>
                          <tr align="center">
                            <td> <a
  href="https://www.instagram.com/club306officielfrance/"
                                title="Instagram du club 306"
                                target="_blank">
                                <div class="circle"><svg
                                    style="color: rgb(121, 121, 121);"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24"
                                    fill="currentColor"
                                    class="bi bi-instagram"
                                    viewBox="0 0 16 16">
                                    <path
  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0
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
                            <td> <a
  href="https://www.facebook.com/club306france"
                                title="Facebook du club 306"
                                target="_blank">
                                <div class="circle"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-name="Layer 1"
                                    style="color: rgb(121, 121, 121);"
                                    width="32" height="32"
                                    fill="currentColor"
                                    viewBox="0 0 24 24" id="facebook"><path
  d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path></svg></div>
                              </a><br>
                            </td>
                            <td> <a href="https://club306.fr/"
                                title="site web du club 306"
                                target="_blank">
                                <div class="circle"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-name="Layer 1"
                                    style="color: rgb(121, 121, 121);"
                                    width="32" height="32"
                                    fill="currentColor"
                                    viewBox="0 0 24 24" id="dribbble"><path
  d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,2a7.94,7.94,0,0,1,5.51,2.22A24.93,24.93,0,0,1,12.68,8.4,29.07,29.07,0,0,0,9.81,4.31,7.94,7.94,0,0,1,12,4ZM7.89,5.15A27.16,27.16,0,0,1,10.7,9a25.11,25.11,0,0,1-6,.74H4.34A8,8,0,0,1,7.89,5.15ZM6,17.31A7.9,7.9,0,0,1,4,12c0-.1,0-.2,0-.29h.68a26.67,26.67,0,0,0,7-1c.32.61.62,1.24.91,1.89a14.3,14.3,0,0,0-4.29,2.41l-.3.24A21,21,0,0,0,6,17.31ZM12,20a7.92,7.92,0,0,1-4.47-1.37,17.92,17.92,0,0,1,1.56-1.58l.32-.27a12.63,12.63,0,0,1,4-2.27,32,32,0,0,1,1.4,5A8.08,8.08,0,0,1,12,20Zm4.63-1.49a34.87,34.87,0,0,0-1.28-4.46l.34,0a.25.25,0,0,1,.12,0h.11l.1,0,.48,0a9.43,9.43,0,0,1,3.09.53A7.94,7.94,0,0,1,16.63,18.51ZM16.5,12c-.21,0-.42,0-.62,0a1.56,1.56,0,0,0-.39,0,6.64,6.64,0,0,0-.81.1h-.1c-.29-.67-.59-1.32-.92-2a26.57,26.57,0,0,0,5.13-2.4A8,8,0,0,1,20,12c0,.17,0,.34,0,.51A11.48,11.48,0,0,0,16.5,12Z"></path></svg></div>
                              </a><br>
                            </td>
                            <td> <a href="mailto:contact@club306.fr"
                                title="ecrire un mail au club 306">
                                <div class="circle">
                                  <svg xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink"
                                    width="32" height="32">
                                    <image x="0px" y="0px" width="32"
                                      height="32"
  xlink:href="data:img/png;base64,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"></image></svg>
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
              <table
  style="background-color: rgb(236, 236, 236); color: rgb(0, 0, 0);"
                width="650" cellspacing="0" cellpadding="0" border="0"
                align="center">
                <tbody>
                  <tr>
                    <td style="width:100%;">
                      <div style="font-family: Helvetica,Arial,sans-serif"
                        align="center">
                        <p style="font-size:1.1em">CLUB 306</p>
                        <p style="font-size:1.1em">12 allée Ledru Rollin
                          93320 les Pavillons sous Bois</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
  style="background-color: rgb(236, 236, 236); color: rgb(0, 0, 0);"
                width="650" cellspacing="0" cellpadding="0" border="0"
                align="center">
                <tbody>
                  <tr>
                    <td> <br>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row-content stack" role="presentation"
  style="background-color: rgb(236, 236, 236); color:
                rgb(0, 0, 0); border-radius: 0px 0px 50px 50px;"
                width="650" height="72" cellspacing="0" cellpadding="0"
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
      <p>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
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
          }</style></p>
    </body>
  </html>
  `
}

const mailContact = (firstName: string, message: string) => {
  return `<!DOCTYPE html>
<html>
  <head>
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <title></title>
    <style type="text/css">
      @media only screen and (min-width: 620px) {
        .u-row {
          width: 600px !important;
        }
        .u-row .u-col {
          vertical-align: top;
        }

        .u-row .u-col-25p83 {
          width: 154.98px !important;
        }

        .u-row .u-col-74p17 {
          width: 445.02px !important;
        }

        .u-row .u-col-100 {
          width: 600px !important;
        }
      }

      @media (max-width: 620px) {
        .u-row-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }
        .u-row .u-col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }
        .u-row {
          width: 100% !important;
        }
        .u-col {
          width: 100% !important;
        }
        .u-col > div {
          margin: 0 auto;
        }
      }
      body {
        margin: 0;
        padding: 0;
      }

      table,
      tr,
      td {
        vertical-align: top;
        border-collapse: collapse;
      }

      p {
        margin: 0;
      }

      .ie-container table,
      .mso-container table {
        table-layout: fixed;
      }

      * {
        line-height: inherit;
      }

      a[x-apple-data-detectors='true'] {
        color: inherit !important;
        text-decoration: none !important;
      }

      table,
      td {
        color: #000000;
      }
      #u_body a {
        color: #0000ee;
        text-decoration: underline;
      }
      @media (max-width: 480px) {
        #u_content_image_2 .v-container-padding-padding {
          padding: 30px 10px 0px !important;
        }
        #u_content_image_2 .v-src-width {
          width: auto !important;
        }
        #u_content_image_2 .v-src-max-width {
          max-width: 38% !important;
        }
        #u_content_menu_1 .v-container-padding-padding {
          padding: 15px 10px !important;
        }
        #u_content_menu_1 .v-padding {
          padding: 5px 7px !important;
        }
        #u_column_4 .v-col-padding {
          padding: 20px 0px !important;
        }
        #u_content_text_1 .v-container-padding-padding {
          padding: 10px 20px 20px !important;
        }
        #u_content_text_1 .v-text-align {
          text-align: center !important;
        }
        #u_content_button_1 .v-container-padding-padding {
          padding: 10px !important;
        }
        #u_content_button_1 .v-size-width {
          width: 50% !important;
        }
      }
    </style>
    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Raleway:400,700&amp;display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
  </head>
  <body
    class="clean-body u_body"
    style="
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      background-color: #ffffff;
      color: #000000;
    "
  >
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table
      id="u_body"
      style="
        border-collapse: collapse;
        table-layout: fixed;
        border-spacing: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        vertical-align: top;
        min-width: 320px;
        margin: 0 auto;
        background-color: #ffffff;
        width: 100%;
      "
      cellspacing="0"
      cellpadding="0"
    >
      <tbody>
        <tr style="vertical-align: top">
          <td
            style="
              word-break: break-word;
              border-collapse: collapse !important;
              vertical-align: top;
            "
          >
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->
            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-padding" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                      background-color: #ceedfc;
                    "
                  >
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        class="v-col-padding"
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        "
                      >
                        <!--<![endif]-->
                        <table
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 0px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <table
                                  width="100%"
                                  cellspacing="0"
                                  cellpadding="0"
                                  border="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        class="v-text-align"
                                        style="
                                          padding-right: 0px;
                                          padding-left: 0px;
                                        "
                                        align="center"
                                      >
                                        <img
                                          src="https://www.club306.fr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoClub306.3a02f592.png&amp;w=256&amp;q=75"
                                          alt="Illustration"
                                          title="Illustration"
                                          style="max-width: 600px"
                                          class="v-src-width v-src-max-width"
                                          moz-do-not-send="true"
                                          width="300"
                                          height="94"
                                          border="0"
                                          align="middle"
                                        />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div
              class="u-row-container"
              style="
                padding: 0px;
                background-image: url('images/image-5.png');
                background-repeat: no-repeat;
                background-position: center top;
                background-color: transparent;
              "
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-image: url('images/image-5.png');background-repeat: no-repeat;background-position: center top;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-padding" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                  <div
                    id="u_column_4"
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="
                        height: 100%;
                        width: 100% !important;
                        border-radius: 0px;
                        -webkit-border-radius: 0px;
                        -moz-border-radius: 0px;
                      "
                    >
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        class="v-col-padding"
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <table
                          id="u_content_text_1"
                          style="font-family: 'Raleway', sans-serif"
                          role="presentation"
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 60px 50px 20px;
                                  font-family: 'Raleway', sans-serif;
                                "
                                align="left"
                              >
                                <div
                                  class="v-text-align"
                                  style="
                                    line-height: 160%;
                                    text-align: justify;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 160%">
                                    <span
                                      style="
                                        font-size: 18px;
                                        line-height: 28.8px;
                                      "
                                      ><strong
                                        >${firstName} a écrit au club
                                        306 !</strong
                                      ></span
                                    >
                                  </p>
                                  <p style="font-size: 14px; line-height: 160%">
                                    ${message}
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent"
            >
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-padding" style="background-color: #ceedfc;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                    "
                  >
                    <div
                      style="
                        background-color: #ceedfc;
                        height: 100%;
                        width: 100% !important;
                        border-radius: 0px;
                        -webkit-border-radius: 0px;
                        -moz-border-radius: 0px;
                      "
                    >
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        class="v-col-padding"
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <table
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 30px 10px 10px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left"
                              >
                                <div align="center">
                                  <div style="display: table; max-width: 167px">
                                    <!--[if (mso)|(IE)]><table width="167" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:147px;"><tr><![endif]-->
                                    <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                    <table
                                      style="
                                        width: 48px !important;
                                        height: 48px !important;
                                        display: inline-block;
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 5px;
                                      "
                                      width="48"
                                      height="48"
                                      cellspacing="0"
                                      cellpadding="0"
                                      border="0"
                                      align="left"
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            "
                                            valign="middle"
                                            align="left"
                                          >
                                            <a
                                              href="https://www.facebook.com/club306france"
                                              title="Facebook du club 306"
                                              target="_blank"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 48 48"
                                                width="48px"
                                                height="48px"
                                              >
                                                <path
                                                  fill="#039be5"
                                                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1
                                                                  0 24 5Z"
                                                ></path>
                                                <path
                                                  fill="#fff"
                                                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                                                ></path>
                                              </svg>
                                            </a>
                                            <br />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->
                                    <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                    <table
                                      style="
                                        width: 48px !important;
                                        height: 48px !important;
                                        display: inline-block;
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 5px;
                                      "
                                      width="48"
                                      height="48"
                                      cellspacing="0"
                                      cellpadding="0"
                                      border="0"
                                      align="left"
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            "
                                            valign="middle"
                                            align="left"
                                          >
                                            <a
                                              href="https://www.instagram.com/club306officielfrance/"
                                              title="Instagram
                                                              du club 306"
                                              target="_blank"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 48 48"
                                                width="48px"
                                                height="48px"
                                              >
                                                <path
                                                  fill="#304ffe"
                                                  d="M41.67,13.48c-0.4,0.26-0.97,0.5-1.21,0.77c-0.09,0.09-0.14,0.19-0.12,0.29v1.03l-0.3,1.01l-0.3,1l-0.33,1.1l-0.68,2.25l-0.66,2.22l-0.5,1.67c0,0.26-0.01,0.52-0.03,0.77c-0.07,0.96-0.27,1.88-0.59,2.74c-0.19,0.53-0.42,1.04-0.7,1.52c-0.1,0.19-0.22,0.38-0.34,0.56c-0.4,0.63-0.88,1.21-1.41,1.72c-0.41,0.41-0.86,0.79-1.35,1.11c0,0,0,0-0.01,0c-0.08,0.07-0.17,0.13-0.27,0.18c-0.31,0.21-0.64,0.39-0.98,0.55c-0.23,0.12-0.46,0.22-0.7,0.31c-0.05,0.03-0.11,0.05-0.16,0.07c-0.57,0.27-1.23,0.45-1.89,0.54c-0.04,0.01-0.07,0.01-0.11,0.02c-0.4,0.07-0.79,0.13-1.19,0.16c-0.18,0.02-0.37,0.03-0.55,0.03l-0.71-0.04l-3.42-0.18c0-0.01-0.01,0-0.01,0l-1.72-0.09c-0.13,0-0.27,0-0.4-0.01c-0.54-0.02-1.06-0.08-1.58-0.19
                c-0.01,0-0.01,0-0.01,0c-0.95-0.18-1.86-0.5-2.71-0.93c-0.47-0.24-0.93-0.51-1.36-0.82c-0.18-0.13-0.35-0.27-0.52-0.42
                c-0.48-0.4-0.91-0.83-1.31-1.27c-0.06-0.06-0.11-0.12-0.16-0.18c-0.06-0.06-0.12-0.13-0.17-0.19c-0.38-0.48-0.7-0.97-0.96-1.49
                c-0.24-0.46-0.43-0.95-0.58-1.49c-0.06-0.19-0.11-0.37-0.15-0.57c-0.01-0.01-0.02-0.03-0.02-0.05c-0.1-0.41-0.19-0.84-0.24-1.27
                c-0.06-0.33-0.09-0.66-0.09-1c-0.02-0.13-0.02-0.27-0.02-0.4l1.91-2.95l1.87-2.88l0.85-1.31l0.77-1.18l0.26-0.41v-1.03
                c0.02-0.23,0.03-0.47,0.02-0.69c-0.01-0.7-0.15-1.38-0.38-2.03c-0.22-0.69-0.53-1.34-0.85-1.94c-0.38-0.69-0.78-1.31-1.11-1.87
                C14,7.4,13.66,6.73,13.75,6.26C14.47,6.09,15.23,6,16,6h16c4.18,0,7.78,2.6,9.27,6.26C41.43,12.65,41.57,13.06,41.67,13.48z"
                                                ></path>
                                                <path
                                                  fill="#4928f4"
                                                  d="M42,16v0.27l-1.38,0.8l-0.88,0.51l-0.97,0.56l-1.94,1.13l-1.9,1.1l-1.94,1.12l-0.77,0.45c0,0.48-0.12,0.92-0.34,1.32c-0.31,0.58-0.83,1.06-1.49,1.47c-0.67,0.41-1.49,0.74-2.41,0.98c0,0,0-0.01-0.01,0c-3.56,0.92-8.42,0.5-10.78-1.26c-0.66-0.49-1.12-1.09-1.32-1.78c-0.06-0.23-0.09-0.48-0.09-0.73v-7.19c0.01-0.15-0.09-0.3-0.27-0.45c-0.54-0.43-1.81-0.84-3.23-1.25c-1.11-0.31-2.3-0.62-3.3-0.92c-0.79-0.24-1.46-0.48-1.86-0.71c0.18-0.35,0.39-0.7,0.61-1.03c1.4-2.05,3.54-3.56,6.02-4.13C14.47,6.09,15.23,6,16,6h10.8c5.37,0.94,10.32,3.13,14.47,6.26c0.16,0.39,0.3,0.8,0.4,1.22c0.18,0.66,0.29,1.34,0.32,2.05C42,15.68,42,15.84,42,16z"
                                                ></path>
                                                <path
                                                  fill="#6200ea"
                                                  d="M42,16v4.41l-0.22,0.68l-0.75,2.33l-0.78,2.4l-0.41,1.28l-0.38,1.19l-0.37,1.13l-0.36,1.12l-0.19,0.59l-0.25,0.78c0,0.76-0.02,1.43-0.07,2c-0.01,0.06-0.02,0.12-0.02,0.18c-0.06,0.53-0.14,0.98-0.27,1.36c-0.01,0.06-0.03,0.12-0.05,0.17c-0.26,0.72-0.65,1.18-1.23,1.48c-0.14,0.08-0.3,0.14-0.47,0.2c-0.53,0.18-1.2,0.27-2.02,0.32c-0.6,0.04-1.29,0.05-2.07,0.05H31.4l-1.19-0.05L30,37.61l-2.17-0.09l-2.2-0.09l-7.25-0.3l-1.88-0.08h-0.26c-0.78-0.01-1.45-0.06-2.03-0.14c-0.84-0.13-1.49-0.35-1.98-0.68c-0.7-0.45-1.11-1.11-1.35-2.03c-0.06-0.22-0.11-0.45-0.14-0.7c-0.1-0.58-0.15-1.25-0.18-2c0-0.15,0-0.3-0.01-0.46c-0.01-0.01,0-0.01,0-0.01v-0.58c-0.01-0.29-0.01-0.59-0.01-0.9l0.05-1.61
                l0.03-1.15l0.04-1.34v-0.19l0.07-2.46l0.07-2.46l0.07-2.31l0.06-2.27l0.02-0.6c0-0.31-1.05-0.49-2.22-0.64
                c-0.93-0.12-1.95-0.23-2.56-0.37c0.05-0.23,0.1-0.46,0.16-0.68c0.18-0.72,0.45-1.4,0.79-2.05c0.18-0.35,0.39-0.7,0.61-1.03
                c2.16-0.95,4.41-1.69,6.76-2.17c2.06-0.43,4.21-0.66,6.43-0.66c7.36,0,14.16,2.49,19.54,6.69c0.52,0.4,1.03,0.83,1.53,1.28
                                                                  C42,15.68,42,15.84,42,16z"
                                                ></path>
                                                <path
                                                  fill="#673ab7"
                                                  d="M42,18.37v4.54l-0.55,1.06l-1.05,2.05l-0.56,1.08l-0.51,0.99l-0.22,0.43c0,0.31,0,0.61-0.02,0.9c0,0.43-0.02,0.84-0.05,1.22c-0.04,0.45-0.1,0.86-0.16,1.24c-0.15,0.79-0.36,1.47-0.66,2.03c-0.04,0.07-0.08,0.14-0.12,0.2c-0.11,0.18-0.24,0.35-0.38,0.51c-0.18,0.22-0.38,0.41-0.61,0.57c-0.34,0.26-0.74,0.47-1.2,0.63c-0.57,0.21-1.23,0.35-2.01,0.43c-0.51,0.05-1.07,0.08-1.68,0.08l-0.42,0.02l-2.08,0.12h-0.01L27.5,36.6l-2.25,0.13l-3.1,0.18l-3.77,0.22l-0.55,0.03c-0.51,0-0.99-0.03-1.45-0.09c-0.05-0.01-0.09-0.02-0.14-0.02c-0.68-0.11-1.3-0.29-1.86-0.54c-0.68-0.3-1.27-0.7-1.77-1.18c-0.44-0.43-0.82-0.92-1.13-1.47c-0.07-0.13-0.14-0.25-0.2-0.39c-0.3-0.59-0.54-1.25-0.72-1.97c-0.03-0.12-0.06-0.25-0.08-0.38
                c-0.06-0.23-0.11-0.47-0.14-0.72c-0.11-0.64-0.17-1.32-0.2-2.03v-0.01c-0.01-0.29-0.02-0.57-0.02-0.87l-0.49-1.17l-0.07-0.18
                L9.5,25.99L8.75,24.2l-0.12-0.29l-0.72-1.73l-0.8-1.93c0,0,0,0-0.01,0L6.29,18.3L6,17.59V16c0-0.63,0.06-1.25,0.17-1.85
                c0.05-0.23,0.1-0.46,0.16-0.68c0.85-0.49,1.74-0.94,2.65-1.34c2.08-0.93,4.31-1.62,6.62-2.04c1.72-0.31,3.51-0.48,5.32-0.48
                c7.31,0,13.94,2.65,19.12,6.97c0.2,0.16,0.39,0.32,0.58,0.49C41.09,17.48,41.55,17.91,42,18.37z"
                                                ></path>
                                                <path
                                                  fill="#8e24aa"
                                                  d="M42,21.35v5.14l-0.57,1.19l-1.08,2.25l-0.01,0.03c0,0.43-0.02,0.82-0.05,1.17c-0.1,1.15-0.38,1.88-0.84,2.33c-0.33,0.34-0.74,0.53-1.25,0.63c-0.03,0.01-0.07,0.01-0.1,0.02c-0.16,0.03-0.33,0.05-0.51,0.05c-0.62,0.06-1.35,0.02-2.19-0.04c-0.09,0-0.19-0.01-0.29-0.02c-0.61-0.04-1.26-0.08-1.98-0.11c-0.39-0.01-0.8-0.02-1.22-0.02h-0.02l-1.01,0.08h-0.01l-2.27,0.16l-2.59,0.2l-0.38,0.03l-3.03,0.22l-1.57,0.12l-1.55,0.11c-0.27,0-0.53,0-0.79-0.01c0,0-0.01-0.01-0.01,0c-1.13-0.02-2.14-0.09-3.04-0.26c-0.83-0.14-1.56-0.36-2.18-0.69c-0.64-0.31-1.17-0.75-1.6-1.31c-0.41-0.55-0.71-1.24-0.9-2.07c0-0.01,0-0.01,0-0.01c-0.14-0.67-0.22-1.45-0.22-2.33l-0.15-0.27L9.7,26.35l-0.13-0.22L9.5,25.99l-0.93-1.65l-0.46-0.83
                l-0.58-1.03l-1-1.79L6,19.75v-3.68c0.88-0.58,1.79-1.09,2.73-1.55c1.14-0.58,2.32-1.07,3.55-1.47c1.34-0.44,2.74-0.79,4.17-1.02
                c1.45-0.24,2.94-0.36,4.47-0.36c6.8,0,13.04,2.43,17.85,6.47c0.22,0.17,0.43,0.36,0.64,0.54c0.84,0.75,1.64,1.56,2.37,2.41
                                                                  C41.86,21.18,41.94,21.26,42,21.35z"
                                                ></path>
                                                <path
                                                  fill="#c2185b"
                                                  d="M42,24.71v7.23c-0.24-0.14-0.57-0.31-0.98-0.49c-0.22-0.11-0.47-0.22-0.73-0.32c-0.38-0.17-0.79-0.33-1.25-0.49c-0.1-0.04-0.2-0.07-0.31-0.1c-0.18-0.07-0.37-0.13-0.56-0.19c-0.59-0.18-1.24-0.35-1.92-0.5c-0.26-0.05-0.53-0.1-0.8-0.14c-0.87-0.15-1.8-0.24-2.77-0.25c-0.08-0.01-0.17-0.01-0.25-0.01l-2.57,0.02l-3.5,0.02h-0.01l-7.49,0.06c-2.38,0-3.84,0.57-4.72,0.8c0,0-0.01,0-0.01,0.01c-0.93,0.24-1.22,0.09-1.3-1.54c-0.02-0.45-0.03-1.03-0.03-1.74l-0.56-0.43l-0.98-0.74l-0.6-0.46l-0.12-0.09L8.88,24.1l-0.25-0.19l-0.52-0.4l-0.96-0.72L6,21.91v-3.4c0.1-0.08,0.19-0.15,0.29-0.21c1.45-1,3-1.85,4.64-2.54c1.46-0.62,3-1.11,4.58-1.46c0.43-0.09,0.87-0.18,1.32-0.24
                c1.33-0.23,2.7-0.34,4.09-0.34c6.01,0,11.53,2.09,15.91,5.55c0.66,0.52,1.3,1.07,1.9,1.66c0.82,0.78,1.59,1.61,2.3,2.49
                                                                  c0.14,0.18,0.28,0.36,0.42,0.55C41.64,24.21,41.82,24.46,42,24.71z"
                                                ></path>
                                                <path
                                                  fill="#d81b60"
                                                  d="M42,28.72V32c0,0.65-0.06,1.29-0.18,1.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.22,0.05-0.47,0.05-0.75,0.01c-0.63-0.11-1.37-0.44-2.17-0.87c-0.04-0.01-0.08-0.03-0.11-0.05c-0.25-0.13-0.51-0.27-0.77-0.43c-0.53-0.29-1.09-0.61-1.65-0.91c-0.12-0.06-0.24-0.12-0.35-0.18c-0.64-0.33-1.3-0.63-1.96-0.86c0,0,0,0-0.01,0c-0.14-0.05-0.29-0.1-0.44-0.14c-0.57-0.16-1.15-0.26-1.71-0.26l-1.1-0.32l-4.87-1.41c0,0,0,0-0.01,0l-2.99-0.87h-0.01l-1.3-0.38c-3.76,0-6.07,1.6-7.19,0.99c-0.44-0.23-0.7-0.81-0.79-1.95c-0.03-0.32-0.04-0.68-0.04-1.1l-1.17-0.57l-0.05-0.02h-0.01l-0.84-0.42L9.7,26.35l-0.07-0.03l-0.17-0.09L7.5,25.28L6,24.55v-3.43c0.17-0.15,0.35-0.29,0.53-0.43c0.19-0.15,0.38-0.29,0.57-0.44c0.01,0,0.01,0,0.01,0
                c1.18-0.85,2.43-1.6,3.76-2.22c1.55-0.74,3.2-1.31,4.91-1.68c0.25-0.06,0.51-0.12,0.77-0.16c1.42-0.27,2.88-0.41,4.37-0.41
                c5.27,0,10.11,1.71,14.01,4.59c1.13,0.84,2.18,1.77,3.14,2.78c0.79,0.83,1.52,1.73,2.18,2.67c0.05,0.07,0.1,0.14,0.15,0.2
                                                                  c0.37,0.54,0.71,1.09,1.03,1.66C41.64,28.02,41.82,28.37,42,28.72z"
                                                ></path>
                                                <path
                                                  fill="#f50057"
                                                  d="M41.82,33.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.19,0.37-0.4,0.72-0.63,1.06c-0.14,0.21-0.29,0.41-0.44,0.6c-0.36-0.14-0.89-0.34-1.54-0.56c0,0,0,0,0-0.01c-0.49-0.17-1.05-0.35-1.65-0.52c-0.17-0.05-0.34-0.1-0.52-0.15c-0.71-0.19-1.45-0.36-2.17-0.46c-0.6-0.1-1.19-0.16-1.74-0.16l-0.46-0.13h-0.01l-2.42-0.7l-1.49-0.43l-1.66-0.48h-0.01l-0.54-0.15l-6.53-1.88l-1.88-0.54l-1.4-0.33l-2.28-0.54l-0.28-0.07c0,0,0,0-0.01,0l-2.29-0.53c0-0.01,0-0.01,0-0.01l-0.41-0.09l-0.21-0.05l-1.67-0.39l-0.19-0.05l-1.42-1.17L6,27.9v-4.08c0.37-0.36,0.75-0.7,1.15-1.03c0.12-0.11,0.25-0.21,0.38-0.31c0.12-0.1,0.25-0.2,0.38-0.3c0.91-0.69,1.87-1.31,2.89-1.84c1.3-0.7,2.68-1.26,4.13-1.66c0.28-0.09,0.56-0.17,0.85-0.23
                c1.64-0.41,3.36-0.62,5.14-0.62c4.47,0,8.63,1.35,12.07,3.66c1.71,1.15,3.25,2.53,4.55,4.1c0.66,0.79,1.26,1.62,1.79,2.5
                c0.05,0.07,0.09,0.13,0.13,0.2c0.32,0.53,0.62,1.08,0.89,1.64c0.25,0.5,0.47,1,0.67,1.52C41.34,32.25,41.6,33.07,41.82,33.91z"
                                                ></path>
                                                <path
                                                  fill="#ff1744"
                                                  d="M40.28,37.59c-0.14,0.21-0.29,0.41-0.44,0.6c-0.44,0.55-0.92,1.05-1.46,1.49c-0.47,0.39-0.97,0.74-1.5,1.04c-0.2-0.05-0.4-0.11-0.61-0.19c-0.66-0.23-1.35-0.61-1.99-1.01c-0.96-0.61-1.79-1.27-2.16-1.57c-0.14-0.12-0.21-0.18-0.21-0.18l-1.7-0.15L30,37.6l-2.2-0.19l-2.28-0.2l-3.37-0.3l-5.34-0.47l-0.02-0.01l-1.88-0.91l-1.9-0.92l-1.53-0.74l-0.33-0.16l-0.41-0.2l-1.42-0.69L7.43,31.9l-0.59-0.29L6,31.35v-4.47c0.47-0.56,0.97-1.09,1.5-1.6c0.34-0.32,0.7-0.64,1.07-0.94c0.06-0.05,0.12-0.1,0.18-0.14c0.04-0.05,0.09-0.08,0.13-0.1c0.59-0.48,1.21-0.91,1.85-1.3c0.74-0.47,1.52-0.89,2.33-1.24c0.87-0.39,1.78-0.72,2.72-0.97c1.63-0.46,3.36-0.7,5.14-0.7c4.08,0,7.85,1.24,10.96,3.37c1.99,1.36,3.71,3.08,5.07,5.07
                c0.45,0.64,0.85,1.32,1.22,2.02c0.13,0.26,0.26,0.52,0.37,0.78c0.12,0.25,0.23,0.5,0.34,0.75c0.21,0.52,0.4,1.04,0.57,1.58
                                                                  c0.32,1,0.56,2.02,0.71,3.08C40.21,36.89,40.25,37.24,40.28,37.59z"
                                                ></path>
                                                <path
                                                  fill="#ff5722"
                                                  d="M38.39,39.42c0,0.08,0,0.17-0.01,0.26c-0.47,0.39-0.97,0.74-1.5,1.04c-0.22,0.12-0.44,0.24-0.67,0.34c-0.23,0.11-0.46,0.21-0.7,0.3c-0.34-0.18-0.8-0.4-1.29-0.61c-0.69-0.31-1.44-0.59-2.02-0.68c-0.14-0.03-0.27-0.04-0.39-0.04l-1.64-0.21h-0.02l-2.04-0.27l-2.06-0.27l-0.96-0.12l-7.56-0.98c-0.49,0-1.01-0.03-1.55-0.1c-0.66-0.06-1.35-0.16-2.04-0.3c-0.68-0.12-1.37-0.28-2.03-0.45c-0.69-0.16-1.37-0.35-2-0.53c-0.73-0.22-1.41-0.43-1.98-0.62c-0.47-0.15-0.87-0.29-1.18-0.4c-0.18-0.43-0.33-0.88-0.44-1.34C6.1,33.66,6,32.84,6,32v-1.67c0.32-0.53,0.67-1.05,1.06-1.54c0.71-0.94,1.52-1.8,2.4-2.56c0.03-0.04,0.07-0.07,0.1-0.09l0.01-0.01c0.31-0.28,0.63-0.53,0.97-0.77c0.04-0.04,0.08-0.07,0.12-0.1
                c0.16-0.12,0.33-0.24,0.51-0.35c1.43-0.97,3.01-1.73,4.7-2.24c1.6-0.48,3.29-0.73,5.05-0.73c3.49,0,6.75,1.03,9.47,2.79
                c2.01,1.29,3.74,2.99,5.06,4.98c0.16,0.23,0.31,0.46,0.46,0.7c0.69,1.17,1.26,2.43,1.68,3.75c0.05,0.15,0.09,0.3,0.13,0.46
                c0.08,0.27,0.15,0.55,0.21,0.83c0.02,0.07,0.04,0.14,0.06,0.22c0.14,0.63,0.24,1.29,0.31,1.95c0,0.01,0,0.01,0,0.01
                                                                  C38.36,38.22,38.39,38.82,38.39,39.42z"
                                                ></path>
                                                <path
                                                  fill="#ff6f00"
                                                  d="M36.33,39.42c0,0.35-0.02,0.73-0.06,1.11c-0.02,0.18-0.04,0.36-0.06,0.53c-0.23,0.11-0.46,0.21-0.7,0.3c-0.45,0.17-0.91,0.31-1.38,0.41c-0.32,0.07-0.65,0.13-0.98,0.16h-0.01c-0.31-0.19-0.67-0.42-1.04-0.68c-0.67-0.47-1.37-1-1.93-1.43c-0.01-0.01-0.01-0.01-0.02-0.02c-0.59-0.45-1.01-0.79-1.01-0.79l-1.06,0.04l-2.04,0.07l-0.95,0.04l-3.82,0.14l-3.23,0.12c-0.21,0.01-0.46,0.01-0.77,0h-0.01c-0.42-0.01-0.92-0.04-1.47-0.09c-0.64-0.05-1.34-0.11-2.05-0.18c-0.69-0.08-1.39-0.16-2.06-0.24c-0.74-0.08-1.44-0.17-2.04-0.25c-0.47-0.06-0.88-0.11-1.21-0.15c-0.28-0.32-0.53-0.65-0.77-1.01c-0.36-0.54-0.67-1.11-0.91-1.72c-0.18-0.43-0.33-0.88-0.44-1.34c0.29-0.89,0.67-1.73,1.12-2.54c0.36-0.66,0.78-1.29,1.24-1.89
                c0.45-0.59,0.94-1.14,1.47-1.64v-0.01c0.15-0.15,0.3-0.29,0.45-0.42c0.28-0.26,0.57-0.5,0.87-0.73h0.01
                c0.01-0.02,0.02-0.02,0.03-0.03c0.24-0.19,0.49-0.36,0.74-0.53c1.48-1.01,3.15-1.76,4.95-2.2c1.19-0.29,2.44-0.45,3.73-0.45
                c2.54,0,4.94,0.61,7.05,1.71h0.01c1.81,0.93,3.41,2.21,4.7,3.75c0.71,0.82,1.32,1.72,1.82,2.67c0.35,0.64,0.65,1.31,0.9,1.99
                c0.02,0.06,0.04,0.11,0.06,0.16c0.17,0.5,0.32,1.02,0.45,1.54c0.09,0.37,0.16,0.75,0.22,1.13c0.02,0.12,0.04,0.23,0.05,0.35
                                                                  C36.28,37.99,36.33,38.7,36.33,39.42z"
                                                ></path>
                                                <path
                                                  fill="#ff9800"
                                                  d="M34.28,39.42v0.1c0,0.34-0.03,0.77-0.06,1.23c-0.03,0.34-0.06,0.69-0.09,1.02c-0.32,0.07-0.65,0.13-0.98,0.16h-0.01C32.76,41.98,32.39,42,32,42h-1.75l-0.38-0.11l-1.97-0.6l-2-0.6l-4.63-1.39l-2-0.6c0,0-0.83,0.33-2,0.72h-0.01c-0.45,0.15-0.94,0.31-1.46,0.47c-0.65,0.19-1.34,0.38-2.02,0.53c-0.7,0.16-1.39,0.28-2.01,0.33c-0.19,0.02-0.38,0.03-0.55,0.03c-0.56-0.31-1.1-0.68-1.59-1.09c-0.43-0.36-0.83-0.75-1.2-1.18c-0.28-0.32-0.53-0.65-0.77-1.01c0.07-0.45,0.15-0.89,0.27-1.32c0.3-1.19,0.77-2.33,1.39-3.37c0.34-0.59,0.72-1.16,1.16-1.69c0.01-0.03,0.04-0.06,0.07-0.08c-0.01-0.01,0-0.01,0-0.01c0.13-0.17,0.27-0.33,0.41-0.48c0-0.01,0-0.01,0-0.01c0.41-0.44,0.83-0.86,1.29-1.25c0.16-0.13,0.31-0.26,0.48-0.39
                c0.03-0.03,0.06-0.05,0.1-0.08c2.25-1.72,5.06-2.76,8.09-2.76c3.44,0,6.57,1.29,8.94,3.41c1.14,1.03,2.11,2.26,2.84,3.63
                c0.06,0.1,0.12,0.21,0.17,0.32c0.09,0.18,0.18,0.37,0.26,0.57c0.33,0.72,0.59,1.48,0.77,2.26c0.02,0.08,0.04,0.16,0.06,0.24
                                                                  c0.08,0.37,0.15,0.75,0.2,1.13C34.24,38.21,34.28,38.81,34.28,39.42z"
                                                ></path>
                                                <path
                                                  fill="#ffc107"
                                                  d="M32.22,39.42c0,0.2-0.01,0.42-0.02,0.65c-0.02,0.37-0.05,0.77-0.1,1.18c-0.02,0.25-0.06,0.5-0.1,0.75h-5.48l-1.06-0.17l-4.14-0.66l-0.59-0.09l-1.35-0.22c-0.59,0-1.87,0.26-3.22,0.51c-0.71,0.13-1.43,0.27-2.08,0.36c-0.08,0.01-0.16,0.02-0.23,0.03h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.2-0.09-0.4-0.19-0.6-0.3c-0.56-0.31-1.1-0.68-1.59-1.09c-0.01-0.12-0.02-0.22-0.02-0.27c0-0.26,0.01-0.51,0.03-0.76c0.04-0.64,0.13-1.26,0.27-1.86c0.22-0.91,0.54-1.79,0.97-2.6c0.08-0.17,0.17-0.34,0.27-0.5c0.04-0.08,0.09-0.15,0.13-0.23c0.18-0.29,0.38-0.57,0.58-0.85c0.42-0.55,0.89-1.07,1.39-1.54c0.01,0,0.01,0,0.01,0c0.04-0.04,0.08-0.08,0.12-0.11c0.05-0.04,0.09-0.09,0.14-0.12c0.2-0.18,0.4-0.34,0.61-0.49
                c0-0.01,0.01-0.01,0.01-0.01c1.89-1.41,4.23-2.24,6.78-2.24c1.98,0,3.82,0.5,5.43,1.38h0.01c1.38,0.76,2.58,1.79,3.53,3.03
                c0.37,0.48,0.7,0.99,0.98,1.53h0.01c0.05,0.1,0.1,0.2,0.15,0.3c0.3,0.59,0.54,1.21,0.72,1.85h0.01c0.01,0.05,0.03,0.1,0.04,0.15
                c0.12,0.43,0.22,0.87,0.29,1.32c0.01,0.09,0.02,0.19,0.03,0.28C32.19,38.43,32.22,38.92,32.22,39.42z"
                                                ></path>
                                                <path
                                                  fill="#ffd54f"
                                                  d="M30.17,39.31c0,0.16,0,0.33-0.02,0.49v0.01c0,0.01,0,0.01,0,0.01c-0.02,0.72-0.12,1.43-0.28,2.07c0,0.04-0.01,0.07-0.03,0.11h-4.67l-3.85-0.83l-0.51-0.11l-0.08,0.02l-4.27,0.88L16.27,42H16c-0.64,0-1.27-0.06-1.88-0.18c-0.09-0.02-0.18-0.04-0.27-0.06h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.02-0.11-0.04-0.22-0.05-0.33c-0.07-0.43-0.1-0.88-0.1-1.33c0-0.17,0-0.34,0.01-0.51c0.03-0.54,0.11-1.07,0.23-1.58c0.08-0.38,0.19-0.75,0.32-1.1c0.11-0.31,0.24-0.61,0.38-0.9c0.12-0.25,0.26-0.49,0.4-0.73c0.14-0.23,0.29-0.45,0.45-0.67c0.4-0.55,0.87-1.06,1.39-1.51c0.3-0.26,0.63-0.51,0.97-0.73c1.46-0.96,3.21-1.52,5.1-1.52c0.37,0,0.73,0.02,1.08,0.07h0.02c1.07,0.12,2.07,0.42,2.99,0.87
                c0.01,0,0.01,0,0.01,0c1.45,0.71,2.68,1.78,3.58,3.1c0.15,0.22,0.3,0.46,0.43,0.7c0.11,0.19,0.21,0.39,0.3,0.59
                c0.14,0.31,0.27,0.64,0.38,0.97h0.01c0.11,0.37,0.21,0.74,0.28,1.13v0.01C30.11,38.16,30.17,38.73,30.17,39.31z"
                                                ></path>
                                                <path
                                                  fill="#ffe082"
                                                  d="M28.11,39.52v0.03c0,0.59-0.07,1.17-0.21,1.74c-0.05,0.24-0.12,0.48-0.21,0.71h-4.48l-2.29-0.63L18.63,42H16c-0.64,0-1.27-0.06-1.88-0.18c-0.02-0.03-0.03-0.06-0.04-0.09c-0.14-0.43-0.25-0.86-0.3-1.31c-0.04-0.29-0.06-0.59-0.06-0.9c0-0.12,0-0.25,0.02-0.37c0.01-0.47,0.08-0.93,0.2-1.37c0.06-0.3,0.15-0.59,0.27-0.87c0.04-0.14,0.1-0.27,0.17-0.4c0.15-0.34,0.33-0.67,0.53-0.99c0.22-0.32,0.46-0.62,0.73-0.9c0.32-0.36,0.68-0.69,1.09-0.96c0.7-0.51,1.5-0.89,2.37-1.1c0.58-0.16,1.19-0.24,1.82-0.24c2,0,3.79,0.8,5.09,2.09c0.05,0.05,0.11,0.11,0.16,0.18h0.01c0.14,0.15,0.27,0.3,0.4,0.47c0.37,0.47,0.68,0.98,0.92,1.54c0.12,0.26,0.22,0.53,0.3,0.81c0.01,0.04,0.02,0.07,0.03,0.11c0.14,0.49,0.23,1,0.25,1.53
                                                                  C28.1,39.2,28.11,39.36,28.11,39.52z"
                                                ></path>
                                                <path
                                                  fill="#ffecb3"
                                                  d="M26.06,39.52c0,0.41-0.05,0.8-0.16,1.17c-0.1,0.4-0.25,0.78-0.44,1.14c-0.03,0.06-0.1,0.17-0.1,0.17h-8.88c-0.01-0.01-0.02-0.03-0.02-0.04c-0.12-0.19-0.22-0.38-0.3-0.59c-0.2-0.46-0.32-0.96-0.36-1.48c-0.02-0.12-0.02-0.25-0.02-0.37c0-0.06,0-0.13,0.01-0.19c0.01-0.44,0.07-0.86,0.19-1.25c0.1-0.36,0.23-0.69,0.4-1.01c0,0,0.01-0.01,0.01-0.02c0.12-0.21,0.25-0.42,0.4-0.62c0.49-0.66,1.14-1.2,1.89-1.55c0.01,0,0.01,0,0.01,0c0.24-0.12,0.49-0.22,0.75-0.29c0,0,0,0,0.01,0c0.46-0.14,0.96-0.21,1.47-0.21c0.59,0,1.16,0.09,1.68,0.28c0.19,0.05,0.37,0.13,0.55,0.22c0,0,0,0,0.01,0c0.86,0.41,1.59,1.05,2.09,1.85c0.1,0.15,0.19,0.31,0.27,0.48c0.04,0.07,0.08,0.15,0.11,0.22c0.23,0.52,0.37,1.09,0.41,1.69
                                                                  c0.01,0.05,0.01,0.1,0.01,0.16C26.06,39.36,26.06,39.44,26.06,39.52z"
                                                ></path>
                                                <g>
                                                  <path
                                                    fill="none"
                                                    stroke="#fff"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="2"
                                                    d="M30,11H18c-3.9,0-7,3.1-7,7v12c0,3.9,3.1,7,7,7h12c3.9,0,7-3.1,7-7V18C37,14.1,33.9,11,30,11z"
                                                  ></path>
                                                  <circle
                                                    cx="31"
                                                    cy="16"
                                                    r="1"
                                                    fill="#fff"
                                                  ></circle>
                                                </g>
                                                <g>
                                                  <circle
                                                    cx="24"
                                                    cy="24"
                                                    r="6"
                                                    fill="none"
                                                    stroke="#fff"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="2"
                                                  ></circle>
                                                </g>
                                              </svg>
                                            </a>
                                            <br />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->
                                    <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                    <table
                                      style="
                                        width: 48px !important;
                                        height: 48px !important;
                                        display: inline-block;
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 5px;
                                      "
                                      width="32"
                                      height="32"
                                      cellspacing="0"
                                      cellpadding="0"
                                      border="0"
                                      align="left"
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            "
                                            valign="middle"
                                            align="left"
                                          >
                                            <a
                                              href="https://club306.fr/"
                                              title="site web du club 306"
                                              target="_blank"
                                            >
                                              <!--?xml version="1.0" encoding="iso-8859-1"?-->
                                              <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                                              <svg
                                                height="48px"
                                                width="48px"
                                                version="1.1"
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 392.533 392.533"
                                                xml:space="preserve"
                                              >
                                                <path
                                                  style="fill: #ffc10d"
                                                  d="M359.822,147.329H32.711c-6.012,0-10.925,4.848-10.925,10.925v75.96
                c0,6.012,4.848,10.925,10.925,10.925h327.111c6.012,0,10.925-4.848,10.925-10.925v-75.96
                                                                  C370.747,152.242,365.834,147.329,359.822,147.329z"
                                                ></path>
                                                <g>
                                                  <path
                                                    style="fill: #ffffff"
                                                    d="M104.404,125.543c2.521-13.446,5.689-26.117,9.438-37.818c-15.903-2.004-31.806-4.59-47.774-7.628
                                                                    c-11.895,13.382-21.786,28.574-29.285,45.446H104.404z"
                                                  ></path>
                                                  <path
                                                    style="fill: #ffffff"
                                                    d="M185.341,92.768c-16.485-0.259-32.84-1.164-49.196-2.651c-3.685,10.796-6.982,22.691-9.503,35.362
                                                                    h58.828V92.703h-0.129V92.768z"
                                                  ></path>
                                                  <path
                                                    style="fill: #ffffff"
                                                    d="M85.463,61.608c12.024,2.069,24.113,3.814,36.267,5.172c6.206-14.287,13.317-26.57,21.269-36.655
                                                                    C121.859,36.913,102.4,47.644,85.463,61.608z"
                                                  ></path>
                                                  <path
                                                    style="fill: #ffffff"
                                                    d="M185.341,23.79c-15.127,5.301-29.349,21.463-40.663,45.253c13.511,1.099,27.022,1.681,40.663,1.939
                                                                    V23.79z"
                                                  ></path>
                                                  <path
                                                    style="fill: #ffffff"
                                                    d="M278.691,87.79c3.814,11.636,6.853,24.242,9.438,37.818h67.62
                c-7.499-16.873-17.39-32.065-29.285-45.446C310.562,83.265,294.659,85.851,278.691,87.79z"
                                                  ></path>
                                                  <path
                                                    style="fill: #ffffff"
                                                    d="M307.071,61.608c-16.937-13.899-36.396-24.63-57.471-31.354
                c7.952,10.02,15.063,22.303,21.269,36.655C282.958,65.358,295.046,63.677,307.071,61.608z"
                                                  ></path>
                                                  <path
                                                    style="fill: #ffffff"
                                                    d="M256.388,90.182c-16.356,1.487-32.84,2.392-49.196,2.651v32.776h58.828
                                                                    C263.434,112.873,260.202,100.978,256.388,90.182z"
                                                  ></path>
                                                  <path
                                                    style="fill: #ffffff"
                                                    d="M207.192,70.982c13.511-0.259,27.152-0.84,40.663-1.939c-11.313-23.725-25.471-39.952-40.663-45.253
                                                                    V70.982z"
                                                  ></path>
                                                  <path
                                                    style="fill: #ffffff"
                                                    d="M288.129,266.99c-2.521,13.447-5.689,26.117-9.438,37.818c15.903,2.004,31.806,4.59,47.774,7.628
                c11.895-13.382,21.786-28.574,29.285-45.446L288.129,266.99L288.129,266.99z"
                                                  ></path>
                                                  <path
                                                    style="fill: #ffffff"
                                                    d="M207.192,368.743c15.127-5.301,29.349-21.463,40.663-45.253
                                                                    c-13.511-1.099-27.022-1.681-40.663-1.939V368.743z"
                                                  ></path>
                                                  <path
                                                    style="fill: #ffffff"
                                                    d="M207.192,299.766c16.485,0.259,32.84,1.164,49.196,2.65c3.685-10.796,6.982-22.691,9.503-35.362
                                                                    h-58.828v32.776h0.129V299.766z"
                                                  ></path>
                                                  <path
                                                    style="fill: #ffffff"
                                                    d="M307.071,330.925c-12.024-2.069-24.113-3.814-36.267-5.172
                c-6.206,14.287-13.317,26.57-21.269,36.655C270.675,355.62,290.133,344.889,307.071,330.925z"
                                                  ></path>
                                                  <path
                                                    style="fill: #ffffff"
                                                    d="M185.341,321.552c-13.511,0.259-27.152,0.84-40.663,1.939
                                                                    c11.313,23.725,25.471,39.952,40.663,45.253V321.552z"
                                                  ></path>
                                                  <path
                                                    style="fill: #ffffff"
                                                    d="M36.848,266.99c7.499,16.873,17.39,32.065,29.285,45.447c15.838-3.103,31.741-5.689,47.774-7.628
                                                                    c-3.814-11.636-6.853-24.242-9.438-37.689h-67.62V266.99z"
                                                  ></path>
                                                  <path
                                                    style="fill: #ffffff"
                                                    d="M136.145,302.352c16.356-1.487,32.84-2.392,49.196-2.65v-32.776h-58.828
                                                                    C129.099,279.661,132.331,291.556,136.145,302.352z"
                                                  ></path>
                                                  <path
                                                    style="fill: #ffffff"
                                                    d="M121.729,325.754c-12.024,1.422-24.178,3.103-36.267,5.172
                c16.937,13.899,36.396,24.63,57.471,31.354C134.982,352.388,127.806,340.04,121.729,325.754z"
                                                  ></path>
                                                </g>
                                                <g>
                                                  <path
                                                    style="fill: #194f82"
                                                    d="M383.03,135.305C355.62,53.204,279.855,0,196.267,0C112.42,0,37.236,53.139,9.826,134.917
                C3.814,140.865,0,149.139,0,158.255v75.96c0,8.792,3.556,16.873,9.244,22.82c29.608,82.812,103.046,135.499,187.022,135.499
                c83.846,0,159.741-53.85,186.44-134.917c6.012-5.947,9.826-14.222,9.826-23.337v-75.96
                                                                    C392.533,149.269,388.913,141.188,383.03,135.305z
                                                                    M355.685,125.543h-67.62c-2.521-13.446-5.689-26.117-9.438-37.818
                c15.903-2.004,31.806-4.59,47.774-7.628C338.295,93.479,348.25,108.735,355.685,125.543z M307.071,61.608
                c-12.024,2.069-24.113,3.814-36.267,5.172c-6.077-14.287-13.317-26.57-21.269-36.655C270.675,36.913,290.133,47.644,307.071,61.608
                                                                    z
                M207.192,23.79c15.127,5.301,29.349,21.463,40.663,45.253c-13.511,1.099-27.152,1.681-40.663,1.939V23.79z
                                                                    M207.063,92.768h0.065
                c16.485-0.259,32.84-1.164,49.196-2.651c3.685,10.796,6.982,22.691,9.503,35.362h-58.828V92.768H207.063z
                                                                    M185.341,23.79v47.192
                c-13.511-0.259-27.152-0.84-40.663-1.939C155.992,45.253,170.214,29.156,185.341,23.79z M185.277,92.768v32.776h-58.699
                c2.521-12.671,5.818-24.566,9.503-35.362C152.436,91.669,168.921,92.574,185.277,92.768z M142.933,30.125
                c-7.952,10.02-15.063,22.303-21.269,36.655c-12.024-1.422-24.178-3.103-36.267-5.172C102.4,47.644,121.859,36.913,142.933,30.125z
                M66.133,80.097c15.838,3.103,31.741,5.689,47.774,7.628c-3.814,11.636-6.853,24.242-9.438,37.818h-67.62
                                                                    C44.283,108.735,54.238,93.479,66.133,80.097z
                                                                    M36.848,266.99h67.62c2.521,13.447,5.689,26.117,9.438,37.689
                c-15.903,2.004-31.806,4.59-47.774,7.628C54.238,299.055,44.283,283.798,36.848,266.99z M85.463,330.925
                c12.024-2.069,24.113-3.814,36.267-5.172c6.206,14.287,13.317,26.57,21.269,36.655C121.859,355.62,102.4,344.889,85.463,330.925z
                M185.341,368.743c-15.127-5.301-29.349-21.463-40.663-45.253c13.511-1.099,27.152-1.681,40.663-1.939V368.743z
                                                                    M185.471,299.766
                h-0.065c-16.485,0.259-32.84,1.164-49.196,2.65c-3.685-10.796-6.982-22.691-9.503-35.362h58.828v32.711H185.471z
                                                                    M207.192,368.743
                v-47.192c13.511,0.259,27.152,0.84,40.663,1.939C236.541,347.281,222.319,363.378,207.192,368.743z
                                                                    M207.257,299.766V266.99h58.699
                c-2.521,12.671-5.818,24.566-9.503,35.362C240.097,300.865,223.612,299.96,207.257,299.766z M249.6,362.408
                c7.952-10.02,15.063-22.303,21.269-36.655c12.024,1.422,24.178,3.103,36.267,5.172C290.133,344.889,270.675,355.62,249.6,362.408z
                M326.4,312.436c-15.838-3.103-31.741-5.689-47.774-7.628c3.814-11.636,6.853-24.242,9.438-37.818h67.62
                                                                    C348.25,283.798,338.295,299.055,326.4,312.436z
                                                                    M359.822,245.204H32.711c-6.012,0-10.925-4.848-10.925-10.925v-75.96
                c0-6.012,4.848-10.925,10.925-10.925h327.111c6.012,0,10.925,4.848,10.925,10.925v75.96h0.065
                                                                    C370.747,240.291,365.899,245.204,359.822,245.204z"
                                                  ></path>
                                                  <polygon
                                                    style="fill: #194f82"
                                                    points="120.76,202.085 109.899,168.21
                                                                    94.836,168.21 83.911,202.085 72.986,168.21 56.889,168.21
                                                                    75.895,224.259 92.057,224.259 102.4,193.745 112.679,224.259
                                                                    128.905,224.259 147.911,168.21 131.685,168.21 "
                                                  ></polygon>
                                                  <polygon
                                                    style="fill: #194f82"
                                                    points="214.562,202.15 203.701,168.275
                                                                    188.638,168.275 177.713,202.15 166.853,168.275 150.691,168.275
                                                                    169.697,224.259 185.859,224.259 196.267,193.81 206.481,224.323
                                                                    222.707,224.323 241.713,168.275 225.487,168.275 "
                                                  ></polygon>
                                                  <polygon
                                                    style="fill: #194f82"
                                                    points="308.493,202.085 297.568,168.21
                                                                    282.505,168.21 271.58,202.085 260.719,168.21 244.558,168.21
                                                                    263.564,224.259 279.725,224.259 290.069,193.745 300.347,224.259
                                                                    316.574,224.259 335.58,168.21 319.354,168.21 "
                                                  ></polygon>
                                                </g>
                                                <g>
                                                  <path
                                                    style="fill: #56ace0"
                                                    d="M270.675,326.141c0.129-0.065,0.323-0.259,0.453-0.323c-0.065,0-0.259,0-0.323,0
                                                                    C270.739,325.947,270.739,326.012,270.675,326.141z"
                                                  ></path>
                                                  <path
                                                    style="fill: #56ace0"
                                                    d="M121.406,325.754c0.129,0.065,0.323,0.259,0.453,0.323c-0.065-0.129-0.065-0.259-0.129-0.388
                                                                    C121.6,325.754,121.471,325.754,121.406,325.754z"
                                                  ></path>
                                                  <path
                                                    style="fill: #56ace0"
                                                    d="M271.127,66.78c-0.129-0.065-0.323-0.259-0.453-0.323c0.065,0.129,0.065,0.259,0.129,0.388
                                                                    C270.933,66.78,271.063,66.78,271.127,66.78z"
                                                  ></path>
                                                  <path
                                                    style="fill: #56ace0"
                                                    d="M121.859,66.392c-0.129,0.065-0.323,0.259-0.453,0.323c0.065,0,0.259,0,0.323,0
                                                                    C121.794,66.586,121.794,66.521,121.859,66.392z"
                                                  ></path>
                                                  <path
                                                    style="fill: #56ace0"
                                                    d="M70.723,266.99c7.24,14.933,16.743,28.38,28.057,39.887c5.042-0.776,10.02-1.552,15.127-2.133
                                                                    c-3.814-11.636-6.853-24.242-9.438-37.689H70.723V266.99z"
                                                  ></path>
                                                  <path
                                                    style="fill: #56ace0"
                                                    d="M70.723,266.99L70.723,266.99L70.723,266.99z"
                                                  ></path>
                                                  <path
                                                    style="fill: #56ace0"
                                                    d="M185.277,266.99h-58.699c2.521,12.671,5.818,24.566,9.503,35.362
                                                                    c16.356-1.487,32.84-2.392,49.196-2.65V266.99z"
                                                  ></path>
                                                  <path
                                                    style="fill: #56ace0"
                                                    d="M288.129,267.055v-0.065c-2.521,13.447-5.689,26.117-9.438,37.818
                c5.042,0.646,10.02,1.422,15.127,2.133c11.313-11.507,20.816-24.954,28.057-39.887H288.129z"
                                                  ></path>
                                                  <path
                                                    style="fill: #56ace0"
                                                    d="M144.743,69.107c13.511,1.099,27.152,1.681,40.663,1.939V44.154
                c-10.279,0.84-20.234,2.844-29.802,5.947C151.725,55.725,148.04,61.996,144.743,69.107z"
                                                  ></path>
                                                  <path
                                                    style="fill: #56ace0"
                                                    d="M207.192,348.444c10.279-0.84,20.234-2.844,29.802-5.947c3.814-5.624,7.499-11.895,10.796-19.006
                                                                    c-13.511-1.099-27.152-1.681-40.663-1.939v26.893H207.192z"
                                                  ></path>
                                                  <path
                                                    style="fill: #56ace0"
                                                    d="M207.192,299.766c16.485,0.259,32.84,1.164,49.196,2.65c3.814-10.796,6.982-22.691,9.568-35.362
                                                                    h-58.828v32.711H207.192z"
                                                  ></path>
                                                  <path
                                                    style="fill: #56ace0"
                                                    d="M207.257,92.768v32.776h58.699c-2.521-12.671-5.818-24.566-9.503-35.362
                                                                    C240.097,91.669,223.612,92.574,207.257,92.768z"
                                                  ></path>
                                                  <path
                                                    style="fill: #56ace0"
                                                    d="M236.994,50.036c-9.568-3.103-19.523-5.107-29.802-5.947v26.893
                c13.511-0.259,27.152-0.84,40.663-1.939C244.493,62.061,240.808,55.725,236.994,50.036z"
                                                  ></path>
                                                  <path
                                                    style="fill: #56ace0"
                                                    d="M155.539,342.497c9.568,3.103,19.523,5.107,29.802,5.947v-26.893
                c-13.576,0.259-27.152,0.84-40.663,1.939C148.04,330.473,151.79,336.808,155.539,342.497z"
                                                  ></path>
                                                  <path
                                                    style="fill: #56ace0"
                                                    d="M321.81,125.608v-0.065c-7.24-14.933-16.743-28.38-28.057-39.887
                c-5.042,0.776-10.02,1.552-15.127,2.133c3.814,11.636,6.853,24.242,9.438,37.818H321.81z"
                                                  ></path>
                                                  <path
                                                    style="fill: #56ace0"
                                                    d="M104.404,125.543c2.521-13.446,5.689-26.117,9.438-37.818c-5.042-0.646-10.02-1.422-15.127-2.133
                c-11.313,11.507-20.816,24.954-28.057,39.887h33.745C104.404,125.479,104.404,125.543,104.404,125.543z"
                                                  ></path>
                                                  <path
                                                    style="fill: #56ace0"
                                                    d="M126.578,125.543h58.828V92.768c-16.485-0.259-32.84-1.164-49.196-2.651
                                                                    C132.331,100.978,129.099,112.873,126.578,125.543z"
                                                  ></path>
                                                </g>
                                              </svg>
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->
                                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          id="u_content_text_3"
                          style="font-family: Raleway"
                          role="presentation"
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px 10px 30px;
                                  font-family: Raleway;
                                "
                                align="left"
                              >
                                <div
                                  class="v-font-size"
                                  style="
                                    line-height: 140%;
                                    text-align: center;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="font-size: 14px; line-height: 140%">
                                    Club 306
                                  </p>
                                  <p style="font-size: 14px; line-height: 140%">
                                    12 allée Ledru Rollin
                                  </p>
                                  <p style="font-size: 14px; line-height: 140%">
                                    93320 Les Pavillons sous Bois
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
  </body>
</html>
`
}

const memberSignUpEvent = (
  email: string,
  firstName: string,
  lastName: string,
  event: string,
) => {
  return `<!DOCTYPE html>
  <html>
  
  <head>
      <!--[if gte mso 9]>
                          <xml>
                            <o:OfficeDocumentSettings>
                              <o:AllowPNG/>
                              <o:PixelsPerInch>96</o:PixelsPerInch>
                            </o:OfficeDocumentSettings>
                          </xml>
                          <![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
      <title></title>
      <style type="text/css">
          @media only screen and (min-width: 620px) {
                                    .u-row {
                                      width: 600px !important;
                                    }
                                    .u-row .u-col {
                                      vertical-align: top;
                                    }
                                  
                                    .u-row .u-col-100 {
                                      width: 600px !important;
                                    }
                                  
                                  }
                                  
                                  @media (max-width: 620px) {
                                    .u-row-container {
                                      max-width: 100% !important;
                                      padding-left: 0px !important;
                                      padding-right: 0px !important;
                                    }
                                    .u-row .u-col {
                                      min-width: 320px !important;
                                      max-width: 100% !important;
                                      display: block !important;
                                    }
                                    .u-row {
                                      width: 100% !important;
                                    }
                                    .u-col {
                                      width: 100% !important;
                                    }
                                    .u-col > div {
                                      margin: 0 auto;
                                    }
                                  }
                                  body {
                                    margin: 0;
                                    padding: 0;
                                  }
                                  
                                  table,
                                  tr,
                                  td {
                                    vertical-align: top;
                                    border-collapse: collapse;
                                  }
                                  
                                  p {
                                    margin: 0;
                                  }
                                  
                                  .ie-container table,
                                  .mso-container table {
                                    table-layout: fixed;
                                  }
                                  
                                  * {
                                    line-height: inherit;
                                  }
                                  
                                  a[x-apple-data-detectors='true'] {
                                    color: inherit !important;
                                    text-decoration: none !important;
                                  }
                                  
                                  table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_2 .v-src-width { width: auto !important; } #u_content_image_2 .v-src-max-width { max-width: 35% !important; } #u_content_menu_1 .v-padding { padding: 5px 15px !important; } #u_content_text_5 .v-container-padding-padding { padding: 52px 10px 56px !important; } #u_content_heading_3 .v-container-padding-padding { padding: 20px 15px 0px 10px !important; } #u_content_heading_5 .v-font-size { font-size: 22px !important; } #u_content_image_5 .v-src-width { width: auto !important; } #u_content_image_5 .v-src-max-width { max-width: 90% !important; } #u_content_text_4 .v-container-padding-padding { padding: 30px 15px 10px !important; } #u_content_image_1 .v-container-padding-padding { padding: 20px 10px !important; } #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 65% !important; } #u_content_heading_7 .v-font-size { font-size: 22px !important; } #u_content_heading_9 .v-font-size { font-size: 17px !important; } #u_content_button_1 .v-size-width { width: 53% !important; } #u_content_text_3 .v-container-padding-padding { padding: 10px 20px 30px !important; } }
      </style>
      <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Lobster+Two:400,700&amp;display=swap" rel="stylesheet" type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&amp;display=swap" rel="stylesheet" type="text/css">
      <!--<![endif]-->
  </head>
  
  <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color:
                  #e7e7e7;color: #000000">
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace:
                    0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color:
                    #e7e7e7;width:100%" cellspacing="0" cellpadding="0">
          <tbody>
              <tr style="vertical-align: top">
                  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
                      <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap:
                              break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                              <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color:
                                transparent;">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #516874;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                                  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display:
                                  table-cell;vertical-align: top;">
                                      <div style="background-color: #516874;height: 100%;width: 100% !important;border-radius:
                                    0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid
                                      transparent;border-left: 0px solid transparent;border-right: 0px solid
                                      transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px;
                                      -moz-border-radius: 0px;"><!--<![endif]-->
                                              <table id="u_content_image_2" style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px
                                              10px;font-family:arial,helvetica,sans-serif;" align="left">
                                                              <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                                  <tbody>
                                                                      <tr>
                                                                          <td style="padding-right: 0px;padding-left: 0px;" align="center"> <img src="https://www.club306.fr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoClub306.3a02f592.png&amp;w=256&amp;q=75" alt="Club 306 Logo" title="Club 306 Logo" style="outline:
                                                        none;text-decoration: none;-ms-interpolation-mode: bicubic;clear:
                                                        both;display: inline-block !important;border: none;height: auto;float:
                                                        none;width: 25%;max-width: 145px;" class="v-src-width v-src-max-width" width="145" border="0" align="middle"> </td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div>
                                          <!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                              </div>
                          </div>
                      </div>
                      <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap:
                              break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                              <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-image:
                                url('images/image-6.png');background-repeat: no-repeat;background-position: center
                                top;background-color: transparent;">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-image: url('images/image-6.png');background-repeat: no-repeat;background-position: center top;background-color: transparent;"><![endif]-->
                                  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display:
                                  table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid
                                      transparent;border-left: 0px solid transparent;border-right: 0px solid
                                      transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div>
                                          <!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                              </div>
                          </div>
                      </div>
                      <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap:
                              break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                              <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color:
                                transparent;">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #516874;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                                  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display:
                                  table-cell;vertical-align: top;">
                                      <div style="background-color: #516874;height: 100%;width: 100% !important;border-radius:
                                    0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid
                                      transparent;border-left: 0px solid transparent;border-right: 0px solid
                                      transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px;
                                      -moz-border-radius: 0px;"><!--<![endif]-->
                                              <table id="u_content_heading_7" style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px
                                              0px;font-family:arial,helvetica,sans-serif;" align="left">
                                                              <h1 class="v-font-size" style="margin: 0px; color: #ffffff; line-height: 140%;
                                                text-align: center; word-wrap: break-word; font-family: arial
                                                black,AvenirNext-Heavy,avant garde,arial; font-size: 26px; "><strong>Bonjour Anto,</strong></h1>
                                                              <h1 class="v-font-size" style="margin: 0px; color: #ffffff; line-height: 140%;
                                                text-align: center; word-wrap: break-word; font-family: arial
                                                black,AvenirNext-Heavy,avant garde,arial; font-size: 26px; "><br></h1>
                                                              <h1 class="v-font-size" style="margin: 0px; color: #ffffff; line-height: 140%;
                                                text-align: center; word-wrap: break-word; font-family: arial
                                                black,AvenirNext-Heavy,avant garde,arial; font-size: 26px; "><strong>Le membre ${firstName} ${lastName}</strong></h1>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                              <table id="u_content_heading_9" style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px
                                              0px;font-family:arial,helvetica,sans-serif;" align="left">
                                                              <h1 class="v-font-size" style="margin: 0px; color: #ffffff; line-height: 140%;
                                                text-align: center; word-wrap: break-word; font-family: 'Montserrat',sans-serif;
                                                font-size: 20px; ">avec l'email ${email} vient de s'inscire à l'event : <br>${event}<br></h1>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                              <table style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px
                                              20px;font-family:arial,helvetica,sans-serif;" align="left"> <br>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                              <table id="u_content_button_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px
                                              30px;font-family:arial,helvetica,sans-serif;" align="left">
                                                              <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
                                                              <div align="center">
                                                                  <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.unlayer.com" style="height:38px; v-text-anchor:middle; width:173px;" arcsize="13%"  stroke="f" fillcolor="#00c1ed"><w:anchorlock/><center style="color:#FFFFFF;font-family:arial,helvetica,sans-serif;"><![endif]-->
                                                                  <!--[if mso]></center></v:roundrect><![endif]-->
                                                              </div>
                                                              <br>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                              <table style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                                                              <table style="border-collapse: collapse;table-layout: fixed;border-spacing:
                                                0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px
                                                solid #555555;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%" width="100%" height="0px" cellspacing="0" cellpadding="0" border="0" align="center">
                                                                  <tbody>
                                                                      <tr style="vertical-align: top">
                                                                          <td style="word-break: break-word;border-collapse: collapse
                                                      !important;vertical-align: top;font-size: 0px;line-height:
                                                      0px;mso-line-height-rule: exactly;-ms-text-size-adjust:
                                                      100%;-webkit-text-size-adjust: 100%"> <span></span> <br></td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div>
                                          <!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                              </div>
                          </div>
                      </div>
                      <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap:
                              break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                              <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color:
                                transparent;">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #516874;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                                  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display:
                                  table-cell;vertical-align: top;">
                                      <div style="background-color: #516874;height: 100%;width: 100% !important;border-radius:
                                    0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid
                                      transparent;border-left: 0px solid transparent;border-right: 0px solid
                                      transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px;
                                      -moz-border-radius: 0px;"><!--<![endif]-->
                                              <table style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px
                                              10px;font-family:arial,helvetica,sans-serif;" align="left">
                                                              <div align="center">
                                                                  <div style="display: table; max-width:167px;">
                                                                      <!--[if (mso)|(IE)]><table width="167" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:147px;"><tr><![endif]-->
                                                                      <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                                                      <table style="width: 48px !important;height: 48px !important;display:
                                                    inline-block;border-collapse: collapse;table-layout: fixed;border-spacing:
                                                    0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right:
                                                    5px" width="48" height="48" cellspacing="0" cellpadding="0" border="0" align="left">
                                                                          <tbody>
                                                                              <tr style="vertical-align: top">
                                                                                  <td style="word-break: break-word;border-collapse: collapse
                                                          !important;vertical-align: top" valign="middle" align="left"> <a href="https://www.facebook.com/club306france" title="Facebook du club 306" target="_blank">
                                                                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                                                                                              <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1
                                                                0 24 5Z"></path>
                                                                                              <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                                                                                          </svg>
                                                                                      </a> <br>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                      <!--[if (mso)|(IE)]></td><![endif]-->
                                                                      <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                                                      <table style="width: 48px !important;height: 48px !important;display:
                                                    inline-block;border-collapse: collapse;table-layout: fixed;border-spacing:
                                                    0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right:
                                                    5px" width="48" height="48" cellspacing="0" cellpadding="0" border="0" align="left">
                                                                          <tbody>
                                                                              <tr style="vertical-align: top">
                                                                                  <td style="word-break: break-word;border-collapse: collapse
                                                          !important;vertical-align: top" valign="middle" align="left"> <a href="https://www.instagram.com/club306officielfrance/" title="Instagram
                                                            du club 306" target="_blank">
                                                                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                                                                                              <path fill="#304ffe" d="M41.67,13.48c-0.4,0.26-0.97,0.5-1.21,0.77c-0.09,0.09-0.14,0.19-0.12,0.29v1.03l-0.3,1.01l-0.3,1l-0.33,1.1
              l-0.68,2.25l-0.66,2.22l-0.5,1.67c0,0.26-0.01,0.52-0.03,0.77c-0.07,0.96-0.27,1.88-0.59,2.74c-0.19,0.53-0.42,1.04-0.7,1.52
              c-0.1,0.19-0.22,0.38-0.34,0.56c-0.4,0.63-0.88,1.21-1.41,1.72c-0.41,0.41-0.86,0.79-1.35,1.11c0,0,0,0-0.01,0
              c-0.08,0.07-0.17,0.13-0.27,0.18c-0.31,0.21-0.64,0.39-0.98,0.55c-0.23,0.12-0.46,0.22-0.7,0.31c-0.05,0.03-0.11,0.05-0.16,0.07
              c-0.57,0.27-1.23,0.45-1.89,0.54c-0.04,0.01-0.07,0.01-0.11,0.02c-0.4,0.07-0.79,0.13-1.19,0.16c-0.18,0.02-0.37,0.03-0.55,0.03
              l-0.71-0.04l-3.42-0.18c0-0.01-0.01,0-0.01,0l-1.72-0.09c-0.13,0-0.27,0-0.4-0.01c-0.54-0.02-1.06-0.08-1.58-0.19
                                                                c-0.01,0-0.01,0-0.01,0c-0.95-0.18-1.86-0.5-2.71-0.93c-0.47-0.24-0.93-0.51-1.36-0.82c-0.18-0.13-0.35-0.27-0.52-0.42
              c-0.48-0.4-0.91-0.83-1.31-1.27c-0.06-0.06-0.11-0.12-0.16-0.18c-0.06-0.06-0.12-0.13-0.17-0.19c-0.38-0.48-0.7-0.97-0.96-1.49
              c-0.24-0.46-0.43-0.95-0.58-1.49c-0.06-0.19-0.11-0.37-0.15-0.57c-0.01-0.01-0.02-0.03-0.02-0.05c-0.1-0.41-0.19-0.84-0.24-1.27
              c-0.06-0.33-0.09-0.66-0.09-1c-0.02-0.13-0.02-0.27-0.02-0.4l1.91-2.95l1.87-2.88l0.85-1.31l0.77-1.18l0.26-0.41v-1.03
              c0.02-0.23,0.03-0.47,0.02-0.69c-0.01-0.7-0.15-1.38-0.38-2.03c-0.22-0.69-0.53-1.34-0.85-1.94c-0.38-0.69-0.78-1.31-1.11-1.87
              C14,7.4,13.66,6.73,13.75,6.26C14.47,6.09,15.23,6,16,6h16c4.18,0,7.78,2.6,9.27,6.26C41.43,12.65,41.57,13.06,41.67,13.48z"></path>
                                                                                              <path fill="#4928f4" d="M42,16v0.27l-1.38,0.8l-0.88,0.51l-0.97,0.56l-1.94,1.13l-1.9,1.1l-1.94,1.12l-0.77,0.45
              c0,0.48-0.12,0.92-0.34,1.32c-0.31,0.58-0.83,1.06-1.49,1.47c-0.67,0.41-1.49,0.74-2.41,0.98c0,0,0-0.01-0.01,0
                                                                c-3.56,0.92-8.42,0.5-10.78-1.26c-0.66-0.49-1.12-1.09-1.32-1.78c-0.06-0.23-0.09-0.48-0.09-0.73v-7.19
              c0.01-0.15-0.09-0.3-0.27-0.45c-0.54-0.43-1.81-0.84-3.23-1.25c-1.11-0.31-2.3-0.62-3.3-0.92c-0.79-0.24-1.46-0.48-1.86-0.71
              c0.18-0.35,0.39-0.7,0.61-1.03c1.4-2.05,3.54-3.56,6.02-4.13C14.47,6.09,15.23,6,16,6h10.8c5.37,0.94,10.32,3.13,14.47,6.26
              c0.16,0.39,0.3,0.8,0.4,1.22c0.18,0.66,0.29,1.34,0.32,2.05C42,15.68,42,15.84,42,16z"></path>
                                                                                              <path fill="#6200ea" d="M42,16v4.41l-0.22,0.68l-0.75,2.33l-0.78,2.4l-0.41,1.28l-0.38,1.19l-0.37,1.13l-0.36,1.12l-0.19,0.59
              l-0.25,0.78c0,0.76-0.02,1.43-0.07,2c-0.01,0.06-0.02,0.12-0.02,0.18c-0.06,0.53-0.14,0.98-0.27,1.36
              c-0.01,0.06-0.03,0.12-0.05,0.17c-0.26,0.72-0.65,1.18-1.23,1.48c-0.14,0.08-0.3,0.14-0.47,0.2c-0.53,0.18-1.2,0.27-2.02,0.32
              c-0.6,0.04-1.29,0.05-2.07,0.05H31.4l-1.19-0.05L30,37.61l-2.17-0.09l-2.2-0.09l-7.25-0.3l-1.88-0.08h-0.26
              c-0.78-0.01-1.45-0.06-2.03-0.14c-0.84-0.13-1.49-0.35-1.98-0.68c-0.7-0.45-1.11-1.11-1.35-2.03c-0.06-0.22-0.11-0.45-0.14-0.7
              c-0.1-0.58-0.15-1.25-0.18-2c0-0.15,0-0.3-0.01-0.46c-0.01-0.01,0-0.01,0-0.01v-0.58c-0.01-0.29-0.01-0.59-0.01-0.9l0.05-1.61
              l0.03-1.15l0.04-1.34v-0.19l0.07-2.46l0.07-2.46l0.07-2.31l0.06-2.27l0.02-0.6c0-0.31-1.05-0.49-2.22-0.64
                                                                c-0.93-0.12-1.95-0.23-2.56-0.37c0.05-0.23,0.1-0.46,0.16-0.68c0.18-0.72,0.45-1.4,0.79-2.05c0.18-0.35,0.39-0.7,0.61-1.03
              c2.16-0.95,4.41-1.69,6.76-2.17c2.06-0.43,4.21-0.66,6.43-0.66c7.36,0,14.16,2.49,19.54,6.69c0.52,0.4,1.03,0.83,1.53,1.28
                                                                C42,15.68,42,15.84,42,16z"></path>
                                                                                              <path fill="#673ab7" d="M42,18.37v4.54l-0.55,1.06l-1.05,2.05l-0.56,1.08l-0.51,0.99l-0.22,0.43c0,0.31,0,0.61-0.02,0.9
              c0,0.43-0.02,0.84-0.05,1.22c-0.04,0.45-0.1,0.86-0.16,1.24c-0.15,0.79-0.36,1.47-0.66,2.03c-0.04,0.07-0.08,0.14-0.12,0.2
              c-0.11,0.18-0.24,0.35-0.38,0.51c-0.18,0.22-0.38,0.41-0.61,0.57c-0.34,0.26-0.74,0.47-1.2,0.63c-0.57,0.21-1.23,0.35-2.01,0.43
              c-0.51,0.05-1.07,0.08-1.68,0.08l-0.42,0.02l-2.08,0.12h-0.01L27.5,36.6l-2.25,0.13l-3.1,0.18l-3.77,0.22l-0.55,0.03
                                                                c-0.51,0-0.99-0.03-1.45-0.09c-0.05-0.01-0.09-0.02-0.14-0.02c-0.68-0.11-1.3-0.29-1.86-0.54c-0.68-0.3-1.27-0.7-1.77-1.18
              c-0.44-0.43-0.82-0.92-1.13-1.47c-0.07-0.13-0.14-0.25-0.2-0.39c-0.3-0.59-0.54-1.25-0.72-1.97c-0.03-0.12-0.06-0.25-0.08-0.38
              c-0.06-0.23-0.11-0.47-0.14-0.72c-0.11-0.64-0.17-1.32-0.2-2.03v-0.01c-0.01-0.29-0.02-0.57-0.02-0.87l-0.49-1.17l-0.07-0.18
              L9.5,25.99L8.75,24.2l-0.12-0.29l-0.72-1.73l-0.8-1.93c0,0,0,0-0.01,0L6.29,18.3L6,17.59V16c0-0.63,0.06-1.25,0.17-1.85
                                                                c0.05-0.23,0.1-0.46,0.16-0.68c0.85-0.49,1.74-0.94,2.65-1.34c2.08-0.93,4.31-1.62,6.62-2.04c1.72-0.31,3.51-0.48,5.32-0.48
              c7.31,0,13.94,2.65,19.12,6.97c0.2,0.16,0.39,0.32,0.58,0.49C41.09,17.48,41.55,17.91,42,18.37z"></path>
                                                                                              <path fill="#8e24aa" d="M42,21.35v5.14l-0.57,1.19l-1.08,2.25l-0.01,0.03c0,0.43-0.02,0.82-0.05,1.17c-0.1,1.15-0.38,1.88-0.84,2.33
              c-0.33,0.34-0.74,0.53-1.25,0.63c-0.03,0.01-0.07,0.01-0.1,0.02c-0.16,0.03-0.33,0.05-0.51,0.05c-0.62,0.06-1.35,0.02-2.19-0.04
              c-0.09,0-0.19-0.01-0.29-0.02c-0.61-0.04-1.26-0.08-1.98-0.11c-0.39-0.01-0.8-0.02-1.22-0.02h-0.02l-1.01,0.08h-0.01l-2.27,0.16
              l-2.59,0.2l-0.38,0.03l-3.03,0.22l-1.57,0.12l-1.55,0.11c-0.27,0-0.53,0-0.79-0.01c0,0-0.01-0.01-0.01,0
              c-1.13-0.02-2.14-0.09-3.04-0.26c-0.83-0.14-1.56-0.36-2.18-0.69c-0.64-0.31-1.17-0.75-1.6-1.31c-0.41-0.55-0.71-1.24-0.9-2.07
              c0-0.01,0-0.01,0-0.01c-0.14-0.67-0.22-1.45-0.22-2.33l-0.15-0.27L9.7,26.35l-0.13-0.22L9.5,25.99l-0.93-1.65l-0.46-0.83
              l-0.58-1.03l-1-1.79L6,19.75v-3.68c0.88-0.58,1.79-1.09,2.73-1.55c1.14-0.58,2.32-1.07,3.55-1.47c1.34-0.44,2.74-0.79,4.17-1.02
              c1.45-0.24,2.94-0.36,4.47-0.36c6.8,0,13.04,2.43,17.85,6.47c0.22,0.17,0.43,0.36,0.64,0.54c0.84,0.75,1.64,1.56,2.37,2.41
                                                                C41.86,21.18,41.94,21.26,42,21.35z"></path>
                                                                                              <path fill="#c2185b" d="M42,24.71v7.23c-0.24-0.14-0.57-0.31-0.98-0.49c-0.22-0.11-0.47-0.22-0.73-0.32
              c-0.38-0.17-0.79-0.33-1.25-0.49c-0.1-0.04-0.2-0.07-0.31-0.1c-0.18-0.07-0.37-0.13-0.56-0.19c-0.59-0.18-1.24-0.35-1.92-0.5
              c-0.26-0.05-0.53-0.1-0.8-0.14c-0.87-0.15-1.8-0.24-2.77-0.25c-0.08-0.01-0.17-0.01-0.25-0.01l-2.57,0.02l-3.5,0.02h-0.01
                                                                l-7.49,0.06c-2.38,0-3.84,0.57-4.72,0.8c0,0-0.01,0-0.01,0.01c-0.93,0.24-1.22,0.09-1.3-1.54c-0.02-0.45-0.03-1.03-0.03-1.74
              l-0.56-0.43l-0.98-0.74l-0.6-0.46l-0.12-0.09L8.88,24.1l-0.25-0.19l-0.52-0.4l-0.96-0.72L6,21.91v-3.4
                                                                c0.1-0.08,0.19-0.15,0.29-0.21c1.45-1,3-1.85,4.64-2.54c1.46-0.62,3-1.11,4.58-1.46c0.43-0.09,0.87-0.18,1.32-0.24
              c1.33-0.23,2.7-0.34,4.09-0.34c6.01,0,11.53,2.09,15.91,5.55c0.66,0.52,1.3,1.07,1.9,1.66c0.82,0.78,1.59,1.61,2.3,2.49
                                                                c0.14,0.18,0.28,0.36,0.42,0.55C41.64,24.21,41.82,24.46,42,24.71z"></path>
                                                                                              <path fill="#d81b60" d="M42,28.72V32c0,0.65-0.06,1.29-0.18,1.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.22,0.05-0.47,0.05-0.75,0.01
              c-0.63-0.11-1.37-0.44-2.17-0.87c-0.04-0.01-0.08-0.03-0.11-0.05c-0.25-0.13-0.51-0.27-0.77-0.43c-0.53-0.29-1.09-0.61-1.65-0.91
              c-0.12-0.06-0.24-0.12-0.35-0.18c-0.64-0.33-1.3-0.63-1.96-0.86c0,0,0,0-0.01,0c-0.14-0.05-0.29-0.1-0.44-0.14
              c-0.57-0.16-1.15-0.26-1.71-0.26l-1.1-0.32l-4.87-1.41c0,0,0,0-0.01,0l-2.99-0.87h-0.01l-1.3-0.38c-3.76,0-6.07,1.6-7.19,0.99
              c-0.44-0.23-0.7-0.81-0.79-1.95c-0.03-0.32-0.04-0.68-0.04-1.1l-1.17-0.57l-0.05-0.02h-0.01l-0.84-0.42L9.7,26.35l-0.07-0.03
              l-0.17-0.09L7.5,25.28L6,24.55v-3.43c0.17-0.15,0.35-0.29,0.53-0.43c0.19-0.15,0.38-0.29,0.57-0.44c0.01,0,0.01,0,0.01,0
                                                                c1.18-0.85,2.43-1.6,3.76-2.22c1.55-0.74,3.2-1.31,4.91-1.68c0.25-0.06,0.51-0.12,0.77-0.16c1.42-0.27,2.88-0.41,4.37-0.41
              c5.27,0,10.11,1.71,14.01,4.59c1.13,0.84,2.18,1.77,3.14,2.78c0.79,0.83,1.52,1.73,2.18,2.67c0.05,0.07,0.1,0.14,0.15,0.2
                                                                c0.37,0.54,0.71,1.09,1.03,1.66C41.64,28.02,41.82,28.37,42,28.72z"></path>
                                                                                              <path fill="#f50057" d="M41.82,33.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.19,0.37-0.4,0.72-0.63,1.06c-0.14,0.21-0.29,0.41-0.44,0.6
              c-0.36-0.14-0.89-0.34-1.54-0.56c0,0,0,0,0-0.01c-0.49-0.17-1.05-0.35-1.65-0.52c-0.17-0.05-0.34-0.1-0.52-0.15
              c-0.71-0.19-1.45-0.36-2.17-0.46c-0.6-0.1-1.19-0.16-1.74-0.16l-0.46-0.13h-0.01l-2.42-0.7l-1.49-0.43l-1.66-0.48h-0.01l-0.54-0.15
              l-6.53-1.88l-1.88-0.54l-1.4-0.33l-2.28-0.54l-0.28-0.07c0,0,0,0-0.01,0l-2.29-0.53c0-0.01,0-0.01,0-0.01l-0.41-0.09l-0.21-0.05
              l-1.67-0.39l-0.19-0.05l-1.42-1.17L6,27.9v-4.08c0.37-0.36,0.75-0.7,1.15-1.03c0.12-0.11,0.25-0.21,0.38-0.31
                                                                c0.12-0.1,0.25-0.2,0.38-0.3c0.91-0.69,1.87-1.31,2.89-1.84c1.3-0.7,2.68-1.26,4.13-1.66c0.28-0.09,0.56-0.17,0.85-0.23
              c1.64-0.41,3.36-0.62,5.14-0.62c4.47,0,8.63,1.35,12.07,3.66c1.71,1.15,3.25,2.53,4.55,4.1c0.66,0.79,1.26,1.62,1.79,2.5
              c0.05,0.07,0.09,0.13,0.13,0.2c0.32,0.53,0.62,1.08,0.89,1.64c0.25,0.5,0.47,1,0.67,1.52C41.34,32.25,41.6,33.07,41.82,33.91z"></path>
                                                                                              <path fill="#ff1744" d="M40.28,37.59c-0.14,0.21-0.29,0.41-0.44,0.6c-0.44,0.55-0.92,1.05-1.46,1.49c-0.47,0.39-0.97,0.74-1.5,1.04
              c-0.2-0.05-0.4-0.11-0.61-0.19c-0.66-0.23-1.35-0.61-1.99-1.01c-0.96-0.61-1.79-1.27-2.16-1.57c-0.14-0.12-0.21-0.18-0.21-0.18
              l-1.7-0.15L30,37.6l-2.2-0.19l-2.28-0.2l-3.37-0.3l-5.34-0.47l-0.02-0.01l-1.88-0.91l-1.9-0.92l-1.53-0.74l-0.33-0.16l-0.41-0.2
              l-1.42-0.69L7.43,31.9l-0.59-0.29L6,31.35v-4.47c0.47-0.56,0.97-1.09,1.5-1.6c0.34-0.32,0.7-0.64,1.07-0.94
                                                                c0.06-0.05,0.12-0.1,0.18-0.14c0.04-0.05,0.09-0.08,0.13-0.1c0.59-0.48,1.21-0.91,1.85-1.3c0.74-0.47,1.52-0.89,2.33-1.24
              c0.87-0.39,1.78-0.72,2.72-0.97c1.63-0.46,3.36-0.7,5.14-0.7c4.08,0,7.85,1.24,10.96,3.37c1.99,1.36,3.71,3.08,5.07,5.07
                                                                c0.45,0.64,0.85,1.32,1.22,2.02c0.13,0.26,0.26,0.52,0.37,0.78c0.12,0.25,0.23,0.5,0.34,0.75c0.21,0.52,0.4,1.04,0.57,1.58
                                                                c0.32,1,0.56,2.02,0.71,3.08C40.21,36.89,40.25,37.24,40.28,37.59z"></path>
                                                                                              <path fill="#ff5722" d="M38.39,39.42c0,0.08,0,0.17-0.01,0.26c-0.47,0.39-0.97,0.74-1.5,1.04c-0.22,0.12-0.44,0.24-0.67,0.34
              c-0.23,0.11-0.46,0.21-0.7,0.3c-0.34-0.18-0.8-0.4-1.29-0.61c-0.69-0.31-1.44-0.59-2.02-0.68c-0.14-0.03-0.27-0.04-0.39-0.04
              l-1.64-0.21h-0.02l-2.04-0.27l-2.06-0.27l-0.96-0.12l-7.56-0.98c-0.49,0-1.01-0.03-1.55-0.1c-0.66-0.06-1.35-0.16-2.04-0.3
                                                                c-0.68-0.12-1.37-0.28-2.03-0.45c-0.69-0.16-1.37-0.35-2-0.53c-0.73-0.22-1.41-0.43-1.98-0.62c-0.47-0.15-0.87-0.29-1.18-0.4
              c-0.18-0.43-0.33-0.88-0.44-1.34C6.1,33.66,6,32.84,6,32v-1.67c0.32-0.53,0.67-1.05,1.06-1.54c0.71-0.94,1.52-1.8,2.4-2.56
                                                                c0.03-0.04,0.07-0.07,0.1-0.09l0.01-0.01c0.31-0.28,0.63-0.53,0.97-0.77c0.04-0.04,0.08-0.07,0.12-0.1
              c0.16-0.12,0.33-0.24,0.51-0.35c1.43-0.97,3.01-1.73,4.7-2.24c1.6-0.48,3.29-0.73,5.05-0.73c3.49,0,6.75,1.03,9.47,2.79
                                                                c2.01,1.29,3.74,2.99,5.06,4.98c0.16,0.23,0.31,0.46,0.46,0.7c0.69,1.17,1.26,2.43,1.68,3.75c0.05,0.15,0.09,0.3,0.13,0.46
              c0.08,0.27,0.15,0.55,0.21,0.83c0.02,0.07,0.04,0.14,0.06,0.22c0.14,0.63,0.24,1.29,0.31,1.95c0,0.01,0,0.01,0,0.01
                                                                C38.36,38.22,38.39,38.82,38.39,39.42z"></path>
                                                                                              <path fill="#ff6f00" d="M36.33,39.42c0,0.35-0.02,0.73-0.06,1.11c-0.02,0.18-0.04,0.36-0.06,0.53c-0.23,0.11-0.46,0.21-0.7,0.3
              c-0.45,0.17-0.91,0.31-1.38,0.41c-0.32,0.07-0.65,0.13-0.98,0.16h-0.01c-0.31-0.19-0.67-0.42-1.04-0.68
              c-0.67-0.47-1.37-1-1.93-1.43c-0.01-0.01-0.01-0.01-0.02-0.02c-0.59-0.45-1.01-0.79-1.01-0.79l-1.06,0.04l-2.04,0.07l-0.95,0.04
              l-3.82,0.14l-3.23,0.12c-0.21,0.01-0.46,0.01-0.77,0h-0.01c-0.42-0.01-0.92-0.04-1.47-0.09c-0.64-0.05-1.34-0.11-2.05-0.18
              c-0.69-0.08-1.39-0.16-2.06-0.24c-0.74-0.08-1.44-0.17-2.04-0.25c-0.47-0.06-0.88-0.11-1.21-0.15c-0.28-0.32-0.53-0.65-0.77-1.01
              c-0.36-0.54-0.67-1.11-0.91-1.72c-0.18-0.43-0.33-0.88-0.44-1.34c0.29-0.89,0.67-1.73,1.12-2.54c0.36-0.66,0.78-1.29,1.24-1.89
              c0.45-0.59,0.94-1.14,1.47-1.64v-0.01c0.15-0.15,0.3-0.29,0.45-0.42c0.28-0.26,0.57-0.5,0.87-0.73h0.01
                                                                c0.01-0.02,0.02-0.02,0.03-0.03c0.24-0.19,0.49-0.36,0.74-0.53c1.48-1.01,3.15-1.76,4.95-2.2c1.19-0.29,2.44-0.45,3.73-0.45
              c2.54,0,4.94,0.61,7.05,1.71h0.01c1.81,0.93,3.41,2.21,4.7,3.75c0.71,0.82,1.32,1.72,1.82,2.67c0.35,0.64,0.65,1.31,0.9,1.99
              c0.02,0.06,0.04,0.11,0.06,0.16c0.17,0.5,0.32,1.02,0.45,1.54c0.09,0.37,0.16,0.75,0.22,1.13c0.02,0.12,0.04,0.23,0.05,0.35
                                                                C36.28,37.99,36.33,38.7,36.33,39.42z"></path>
                                                                                              <path fill="#ff9800" d="M34.28,39.42v0.1c0,0.34-0.03,0.77-0.06,1.23c-0.03,0.34-0.06,0.69-0.09,1.02c-0.32,0.07-0.65,0.13-0.98,0.16
              h-0.01C32.76,41.98,32.39,42,32,42h-1.75l-0.38-0.11l-1.97-0.6l-2-0.6l-4.63-1.39l-2-0.6c0,0-0.83,0.33-2,0.72h-0.01
              c-0.45,0.15-0.94,0.31-1.46,0.47c-0.65,0.19-1.34,0.38-2.02,0.53c-0.7,0.16-1.39,0.28-2.01,0.33c-0.19,0.02-0.38,0.03-0.55,0.03
              c-0.56-0.31-1.1-0.68-1.59-1.09c-0.43-0.36-0.83-0.75-1.2-1.18c-0.28-0.32-0.53-0.65-0.77-1.01c0.07-0.45,0.15-0.89,0.27-1.32
              c0.3-1.19,0.77-2.33,1.39-3.37c0.34-0.59,0.72-1.16,1.16-1.69c0.01-0.03,0.04-0.06,0.07-0.08c-0.01-0.01,0-0.01,0-0.01
                                                                c0.13-0.17,0.27-0.33,0.41-0.48c0-0.01,0-0.01,0-0.01c0.41-0.44,0.83-0.86,1.29-1.25c0.16-0.13,0.31-0.26,0.48-0.39
              c0.03-0.03,0.06-0.05,0.1-0.08c2.25-1.72,5.06-2.76,8.09-2.76c3.44,0,6.57,1.29,8.94,3.41c1.14,1.03,2.11,2.26,2.84,3.63
                                                                c0.06,0.1,0.12,0.21,0.17,0.32c0.09,0.18,0.18,0.37,0.26,0.57c0.33,0.72,0.59,1.48,0.77,2.26c0.02,0.08,0.04,0.16,0.06,0.24
                                                                c0.08,0.37,0.15,0.75,0.2,1.13C34.24,38.21,34.28,38.81,34.28,39.42z"></path>
                                                                                              <path fill="#ffc107" d="M32.22,39.42c0,0.2-0.01,0.42-0.02,0.65c-0.02,0.37-0.05,0.77-0.1,1.18c-0.02,0.25-0.06,0.5-0.1,0.75h-5.48
              l-1.06-0.17l-4.14-0.66l-0.59-0.09l-1.35-0.22c-0.59,0-1.87,0.26-3.22,0.51c-0.71,0.13-1.43,0.27-2.08,0.36
              c-0.08,0.01-0.16,0.02-0.23,0.03h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.2-0.09-0.4-0.19-0.6-0.3c-0.56-0.31-1.1-0.68-1.59-1.09
              c-0.01-0.12-0.02-0.22-0.02-0.27c0-0.26,0.01-0.51,0.03-0.76c0.04-0.64,0.13-1.26,0.27-1.86c0.22-0.91,0.54-1.79,0.97-2.6
                                                                c0.08-0.17,0.17-0.34,0.27-0.5c0.04-0.08,0.09-0.15,0.13-0.23c0.18-0.29,0.38-0.57,0.58-0.85c0.42-0.55,0.89-1.07,1.39-1.54
              c0.01,0,0.01,0,0.01,0c0.04-0.04,0.08-0.08,0.12-0.11c0.05-0.04,0.09-0.09,0.14-0.12c0.2-0.18,0.4-0.34,0.61-0.49
                                                                c0-0.01,0.01-0.01,0.01-0.01c1.89-1.41,4.23-2.24,6.78-2.24c1.98,0,3.82,0.5,5.43,1.38h0.01c1.38,0.76,2.58,1.79,3.53,3.03
              c0.37,0.48,0.7,0.99,0.98,1.53h0.01c0.05,0.1,0.1,0.2,0.15,0.3c0.3,0.59,0.54,1.21,0.72,1.85h0.01c0.01,0.05,0.03,0.1,0.04,0.15
              c0.12,0.43,0.22,0.87,0.29,1.32c0.01,0.09,0.02,0.19,0.03,0.28C32.19,38.43,32.22,38.92,32.22,39.42z"></path>
                                                                                              <path fill="#ffd54f" d="M30.17,39.31c0,0.16,0,0.33-0.02,0.49v0.01c0,0.01,0,0.01,0,0.01c-0.02,0.72-0.12,1.43-0.28,2.07
              c0,0.04-0.01,0.07-0.03,0.11h-4.67l-3.85-0.83l-0.51-0.11l-0.08,0.02l-4.27,0.88L16.27,42H16c-0.64,0-1.27-0.06-1.88-0.18
                                                                c-0.09-0.02-0.18-0.04-0.27-0.06h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.02-0.11-0.04-0.22-0.05-0.33
              c-0.07-0.43-0.1-0.88-0.1-1.33c0-0.17,0-0.34,0.01-0.51c0.03-0.54,0.11-1.07,0.23-1.58c0.08-0.38,0.19-0.75,0.32-1.1
                                                                c0.11-0.31,0.24-0.61,0.38-0.9c0.12-0.25,0.26-0.49,0.4-0.73c0.14-0.23,0.29-0.45,0.45-0.67c0.4-0.55,0.87-1.06,1.39-1.51
              c0.3-0.26,0.63-0.51,0.97-0.73c1.46-0.96,3.21-1.52,5.1-1.52c0.37,0,0.73,0.02,1.08,0.07h0.02c1.07,0.12,2.07,0.42,2.99,0.87
              c0.01,0,0.01,0,0.01,0c1.45,0.71,2.68,1.78,3.58,3.1c0.15,0.22,0.3,0.46,0.43,0.7c0.11,0.19,0.21,0.39,0.3,0.59
                                                                c0.14,0.31,0.27,0.64,0.38,0.97h0.01c0.11,0.37,0.21,0.74,0.28,1.13v0.01C30.11,38.16,30.17,38.73,30.17,39.31z"></path>
                                                                                              <path fill="#ffe082" d="M28.11,39.52v0.03c0,0.59-0.07,1.17-0.21,1.74c-0.05,0.24-0.12,0.48-0.21,0.71h-4.48l-2.29-0.63L18.63,42H16
              c-0.64,0-1.27-0.06-1.88-0.18c-0.02-0.03-0.03-0.06-0.04-0.09c-0.14-0.43-0.25-0.86-0.3-1.31c-0.04-0.29-0.06-0.59-0.06-0.9
              c0-0.12,0-0.25,0.02-0.37c0.01-0.47,0.08-0.93,0.2-1.37c0.06-0.3,0.15-0.59,0.27-0.87c0.04-0.14,0.1-0.27,0.17-0.4
                                                                c0.15-0.34,0.33-0.67,0.53-0.99c0.22-0.32,0.46-0.62,0.73-0.9c0.32-0.36,0.68-0.69,1.09-0.96c0.7-0.51,1.5-0.89,2.37-1.1
              c0.58-0.16,1.19-0.24,1.82-0.24c2,0,3.79,0.8,5.09,2.09c0.05,0.05,0.11,0.11,0.16,0.18h0.01c0.14,0.15,0.27,0.3,0.4,0.47
                                                                c0.37,0.47,0.68,0.98,0.92,1.54c0.12,0.26,0.22,0.53,0.3,0.81c0.01,0.04,0.02,0.07,0.03,0.11c0.14,0.49,0.23,1,0.25,1.53
                                                                C28.1,39.2,28.11,39.36,28.11,39.52z"></path>
                                                                                              <path fill="#ffecb3" d="M26.06,39.52c0,0.41-0.05,0.8-0.16,1.17c-0.1,0.4-0.25,0.78-0.44,1.14c-0.03,0.06-0.1,0.17-0.1,0.17h-8.88
              c-0.01-0.01-0.02-0.03-0.02-0.04c-0.12-0.19-0.22-0.38-0.3-0.59c-0.2-0.46-0.32-0.96-0.36-1.48c-0.02-0.12-0.02-0.25-0.02-0.37
              c0-0.06,0-0.13,0.01-0.19c0.01-0.44,0.07-0.86,0.19-1.25c0.1-0.36,0.23-0.69,0.4-1.01c0,0,0.01-0.01,0.01-0.02
              c0.12-0.21,0.25-0.42,0.4-0.62c0.49-0.66,1.14-1.2,1.89-1.55c0.01,0,0.01,0,0.01,0c0.24-0.12,0.49-0.22,0.75-0.29c0,0,0,0,0.01,0
              c0.46-0.14,0.96-0.21,1.47-0.21c0.59,0,1.16,0.09,1.68,0.28c0.19,0.05,0.37,0.13,0.55,0.22c0,0,0,0,0.01,0
                                                                c0.86,0.41,1.59,1.05,2.09,1.85c0.1,0.15,0.19,0.31,0.27,0.48c0.04,0.07,0.08,0.15,0.11,0.22c0.23,0.52,0.37,1.09,0.41,1.69
                                                                c0.01,0.05,0.01,0.1,0.01,0.16C26.06,39.36,26.06,39.44,26.06,39.52z"></path>
                                                                                              <g>
                                                                                                  <path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M30,11H18c-3.9,0-7,3.1-7,7v12c0,3.9,3.1,7,7,7h12c3.9,0,7-3.1,7-7V18C37,14.1,33.9,11,30,11z"></path>
                                                                                                  <circle cx="31" cy="16" r="1" fill="#fff"></circle>
                                                                                              </g>
                                                                                              <g>
                                                                                                  <circle cx="24" cy="24" r="6" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></circle>
                                                                                              </g>
                                                                                          </svg>
                                                                                      </a> <br>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                      <!--[if (mso)|(IE)]></td><![endif]-->
                                                                      <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                                                      <table style="width: 48px !important;height: 48px !important;display:
                                                    inline-block;border-collapse: collapse;table-layout: fixed;border-spacing:
                                                    0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right:
                                                    5px" width="32" height="32" cellspacing="0" cellpadding="0" border="0" align="left">
                                                                          <tbody>
                                                                              <tr style="vertical-align: top">
                                                                                  <td style="word-break: break-word;border-collapse: collapse
                                                          !important;vertical-align: top" valign="middle" align="left"> <a href="https://club306.fr/" title="site web du club 306" target="_blank">
                                                                                          <!--?xml version="1.0" encoding="iso-8859-1"?-->
                                                                                          <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                                                                                          <svg height="48px" width="48px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 392.533 392.533" xml:space="preserve">
                                                                                              <path style="fill:#FFC10D;" d="M359.822,147.329H32.711c-6.012,0-10.925,4.848-10.925,10.925v75.96
                                                                c0,6.012,4.848,10.925,10.925,10.925h327.111c6.012,0,10.925-4.848,10.925-10.925v-75.96
                                                                C370.747,152.242,365.834,147.329,359.822,147.329z"></path>
                                                                                              <g>
                                                                                                  <path style="fill:#FFFFFF;" d="M104.404,125.543c2.521-13.446,5.689-26.117,9.438-37.818c-15.903-2.004-31.806-4.59-47.774-7.628
                                                                  c-11.895,13.382-21.786,28.574-29.285,45.446H104.404z"></path>
                                                                                                  <path style="fill:#FFFFFF;" d="M185.341,92.768c-16.485-0.259-32.84-1.164-49.196-2.651c-3.685,10.796-6.982,22.691-9.503,35.362
                                                                  h58.828V92.703h-0.129V92.768z"></path>
                                                                                                  <path style="fill:#FFFFFF;" d="M85.463,61.608c12.024,2.069,24.113,3.814,36.267,5.172c6.206-14.287,13.317-26.57,21.269-36.655
                                                                  C121.859,36.913,102.4,47.644,85.463,61.608z"></path>
                                                                                                  <path style="fill:#FFFFFF;" d="M185.341,23.79c-15.127,5.301-29.349,21.463-40.663,45.253c13.511,1.099,27.022,1.681,40.663,1.939
                                                                  V23.79z"></path>
                                                                                                  <path style="fill:#FFFFFF;" d="M278.691,87.79c3.814,11.636,6.853,24.242,9.438,37.818h67.62
                                                                  c-7.499-16.873-17.39-32.065-29.285-45.446C310.562,83.265,294.659,85.851,278.691,87.79z"></path>
                                                                                                  <path style="fill:#FFFFFF;" d="M307.071,61.608c-16.937-13.899-36.396-24.63-57.471-31.354
                                                                  c7.952,10.02,15.063,22.303,21.269,36.655C282.958,65.358,295.046,63.677,307.071,61.608z"></path>
                                                                                                  <path style="fill:#FFFFFF;" d="M256.388,90.182c-16.356,1.487-32.84,2.392-49.196,2.651v32.776h58.828
                                                                  C263.434,112.873,260.202,100.978,256.388,90.182z"></path>
                                                                                                  <path style="fill:#FFFFFF;" d="M207.192,70.982c13.511-0.259,27.152-0.84,40.663-1.939c-11.313-23.725-25.471-39.952-40.663-45.253
                                                                  V70.982z"></path>
                                                                                                  <path style="fill:#FFFFFF;" d="M288.129,266.99c-2.521,13.447-5.689,26.117-9.438,37.818c15.903,2.004,31.806,4.59,47.774,7.628
              c11.895-13.382,21.786-28.574,29.285-45.446L288.129,266.99L288.129,266.99z"></path>
                                                                                                  <path style="fill:#FFFFFF;" d="M207.192,368.743c15.127-5.301,29.349-21.463,40.663-45.253
                                                                  c-13.511-1.099-27.022-1.681-40.663-1.939V368.743z"></path>
                                                                                                  <path style="fill:#FFFFFF;" d="M207.192,299.766c16.485,0.259,32.84,1.164,49.196,2.65c3.685-10.796,6.982-22.691,9.503-35.362
                                                                  h-58.828v32.776h0.129V299.766z"></path>
                                                                                                  <path style="fill:#FFFFFF;" d="M307.071,330.925c-12.024-2.069-24.113-3.814-36.267-5.172
                                                                  c-6.206,14.287-13.317,26.57-21.269,36.655C270.675,355.62,290.133,344.889,307.071,330.925z"></path>
                                                                                                  <path style="fill:#FFFFFF;" d="M185.341,321.552c-13.511,0.259-27.152,0.84-40.663,1.939
                                                                  c11.313,23.725,25.471,39.952,40.663,45.253V321.552z"></path>
                                                                                                  <path style="fill:#FFFFFF;" d="M36.848,266.99c7.499,16.873,17.39,32.065,29.285,45.447c15.838-3.103,31.741-5.689,47.774-7.628
                                                                  c-3.814-11.636-6.853-24.242-9.438-37.689h-67.62V266.99z"></path>
                                                                                                  <path style="fill:#FFFFFF;" d="M136.145,302.352c16.356-1.487,32.84-2.392,49.196-2.65v-32.776h-58.828
                                                                  C129.099,279.661,132.331,291.556,136.145,302.352z"></path>
                                                                                                  <path style="fill:#FFFFFF;" d="M121.729,325.754c-12.024,1.422-24.178,3.103-36.267,5.172
                                                                  c16.937,13.899,36.396,24.63,57.471,31.354C134.982,352.388,127.806,340.04,121.729,325.754z"></path>
                                                                                              </g>
                                                                                              <g>
                                                                                                  <path style="fill:#194F82;" d="M383.03,135.305C355.62,53.204,279.855,0,196.267,0C112.42,0,37.236,53.139,9.826,134.917
              C3.814,140.865,0,149.139,0,158.255v75.96c0,8.792,3.556,16.873,9.244,22.82c29.608,82.812,103.046,135.499,187.022,135.499
              c83.846,0,159.741-53.85,186.44-134.917c6.012-5.947,9.826-14.222,9.826-23.337v-75.96
                                                                  C392.533,149.269,388.913,141.188,383.03,135.305z
                                                                  M355.685,125.543h-67.62c-2.521-13.446-5.689-26.117-9.438-37.818
                                                                  c15.903-2.004,31.806-4.59,47.774-7.628C338.295,93.479,348.25,108.735,355.685,125.543z
                                                                  M307.071,61.608
              c-12.024,2.069-24.113,3.814-36.267,5.172c-6.077-14.287-13.317-26.57-21.269-36.655C270.675,36.913,290.133,47.644,307.071,61.608
                                                                  z
                                                                  M207.192,23.79c15.127,5.301,29.349,21.463,40.663,45.253c-13.511,1.099-27.152,1.681-40.663,1.939V23.79z
                                                                  M207.063,92.768h0.065
                                                                  c16.485-0.259,32.84-1.164,49.196-2.651c3.685,10.796,6.982,22.691,9.503,35.362h-58.828V92.768H207.063z
                                                                  M185.341,23.79v47.192
                                                                  c-13.511-0.259-27.152-0.84-40.663-1.939C155.992,45.253,170.214,29.156,185.341,23.79z
                                                                  M185.277,92.768v32.776h-58.699
                                                                  c2.521-12.671,5.818-24.566,9.503-35.362C152.436,91.669,168.921,92.574,185.277,92.768z
                                                                  M142.933,30.125
              c-7.952,10.02-15.063,22.303-21.269,36.655c-12.024-1.422-24.178-3.103-36.267-5.172C102.4,47.644,121.859,36.913,142.933,30.125z
              M66.133,80.097c15.838,3.103,31.741,5.689,47.774,7.628c-3.814,11.636-6.853,24.242-9.438,37.818h-67.62
                                                                  C44.283,108.735,54.238,93.479,66.133,80.097z
                                                                  M36.848,266.99h67.62c2.521,13.447,5.689,26.117,9.438,37.689
                                                                  c-15.903,2.004-31.806,4.59-47.774,7.628C54.238,299.055,44.283,283.798,36.848,266.99z
                                                                  M85.463,330.925
              c12.024-2.069,24.113-3.814,36.267-5.172c6.206,14.287,13.317,26.57,21.269,36.655C121.859,355.62,102.4,344.889,85.463,330.925z
              M185.341,368.743c-15.127-5.301-29.349-21.463-40.663-45.253c13.511-1.099,27.152-1.681,40.663-1.939V368.743z
                                                                  M185.471,299.766
                                                                  h-0.065c-16.485,0.259-32.84,1.164-49.196,2.65c-3.685-10.796-6.982-22.691-9.503-35.362h58.828v32.711H185.471z
                                                                  M207.192,368.743
                                                                  v-47.192c13.511,0.259,27.152,0.84,40.663,1.939C236.541,347.281,222.319,363.378,207.192,368.743z
                                                                  M207.257,299.766V266.99h58.699
                                                                  c-2.521,12.671-5.818,24.566-9.503,35.362C240.097,300.865,223.612,299.96,207.257,299.766z
                                                                  M249.6,362.408
              c7.952-10.02,15.063-22.303,21.269-36.655c12.024,1.422,24.178,3.103,36.267,5.172C290.133,344.889,270.675,355.62,249.6,362.408z
              M326.4,312.436c-15.838-3.103-31.741-5.689-47.774-7.628c3.814-11.636,6.853-24.242,9.438-37.818h67.62
                                                                  C348.25,283.798,338.295,299.055,326.4,312.436z
                                                                  M359.822,245.204H32.711c-6.012,0-10.925-4.848-10.925-10.925v-75.96
                                                                  c0-6.012,4.848-10.925,10.925-10.925h327.111c6.012,0,10.925,4.848,10.925,10.925v75.96h0.065
                                                                  C370.747,240.291,365.899,245.204,359.822,245.204z"></path>
                                                                                                  <polygon style="fill:#194F82;" points="120.76,202.085 109.899,168.21
                                                                  94.836,168.21 83.911,202.085 72.986,168.21 56.889,168.21
                                                                  75.895,224.259 92.057,224.259 102.4,193.745 112.679,224.259
                                                                  128.905,224.259 147.911,168.21 131.685,168.21 "></polygon>
                                                                                                  <polygon style="fill:#194F82;" points="214.562,202.15 203.701,168.275
                                                                  188.638,168.275 177.713,202.15 166.853,168.275 150.691,168.275
                                                                  169.697,224.259 185.859,224.259 196.267,193.81 206.481,224.323
                                                                  222.707,224.323 241.713,168.275 225.487,168.275 "></polygon>
                                                                                                  <polygon style="fill:#194F82;" points="308.493,202.085 297.568,168.21
                                                                  282.505,168.21 271.58,202.085 260.719,168.21 244.558,168.21
                                                                  263.564,224.259 279.725,224.259 290.069,193.745 300.347,224.259
                                                                  316.574,224.259 335.58,168.21 319.354,168.21 "></polygon>
                                                                                              </g>
                                                                                              <g>
                                                                                                  <path style="fill:#56ACE0;" d="M270.675,326.141c0.129-0.065,0.323-0.259,0.453-0.323c-0.065,0-0.259,0-0.323,0
                                                                  C270.739,325.947,270.739,326.012,270.675,326.141z"></path>
                                                                                                  <path style="fill:#56ACE0;" d="M121.406,325.754c0.129,0.065,0.323,0.259,0.453,0.323c-0.065-0.129-0.065-0.259-0.129-0.388
                                                                  C121.6,325.754,121.471,325.754,121.406,325.754z"></path>
                                                                                                  <path style="fill:#56ACE0;" d="M271.127,66.78c-0.129-0.065-0.323-0.259-0.453-0.323c0.065,0.129,0.065,0.259,0.129,0.388
                                                                  C270.933,66.78,271.063,66.78,271.127,66.78z"></path>
                                                                                                  <path style="fill:#56ACE0;" d="M121.859,66.392c-0.129,0.065-0.323,0.259-0.453,0.323c0.065,0,0.259,0,0.323,0
                                                                  C121.794,66.586,121.794,66.521,121.859,66.392z"></path>
                                                                                                  <path style="fill:#56ACE0;" d="M70.723,266.99c7.24,14.933,16.743,28.38,28.057,39.887c5.042-0.776,10.02-1.552,15.127-2.133
                                                                  c-3.814-11.636-6.853-24.242-9.438-37.689H70.723V266.99z"></path>
                                                                                                  <path style="fill:#56ACE0;" d="M70.723,266.99L70.723,266.99L70.723,266.99z"></path>
                                                                                                  <path style="fill:#56ACE0;" d="M185.277,266.99h-58.699c2.521,12.671,5.818,24.566,9.503,35.362
                                                                  c16.356-1.487,32.84-2.392,49.196-2.65V266.99z"></path>
                                                                                                  <path style="fill:#56ACE0;" d="M288.129,267.055v-0.065c-2.521,13.447-5.689,26.117-9.438,37.818
                                                                  c5.042,0.646,10.02,1.422,15.127,2.133c11.313-11.507,20.816-24.954,28.057-39.887H288.129z"></path>
                                                                                                  <path style="fill:#56ACE0;" d="M144.743,69.107c13.511,1.099,27.152,1.681,40.663,1.939V44.154
                                                                  c-10.279,0.84-20.234,2.844-29.802,5.947C151.725,55.725,148.04,61.996,144.743,69.107z"></path>
                                                                                                  <path style="fill:#56ACE0;" d="M207.192,348.444c10.279-0.84,20.234-2.844,29.802-5.947c3.814-5.624,7.499-11.895,10.796-19.006
                                                                  c-13.511-1.099-27.152-1.681-40.663-1.939v26.893H207.192z"></path>
                                                                                                  <path style="fill:#56ACE0;" d="M207.192,299.766c16.485,0.259,32.84,1.164,49.196,2.65c3.814-10.796,6.982-22.691,9.568-35.362
                                                                  h-58.828v32.711H207.192z"></path>
                                                                                                  <path style="fill:#56ACE0;" d="M207.257,92.768v32.776h58.699c-2.521-12.671-5.818-24.566-9.503-35.362
                                                                  C240.097,91.669,223.612,92.574,207.257,92.768z"></path>
                                                                                                  <path style="fill:#56ACE0;" d="M236.994,50.036c-9.568-3.103-19.523-5.107-29.802-5.947v26.893
                                                                  c13.511-0.259,27.152-0.84,40.663-1.939C244.493,62.061,240.808,55.725,236.994,50.036z"></path>
                                                                                                  <path style="fill:#56ACE0;" d="M155.539,342.497c9.568,3.103,19.523,5.107,29.802,5.947v-26.893
                                                                  c-13.576,0.259-27.152,0.84-40.663,1.939C148.04,330.473,151.79,336.808,155.539,342.497z"></path>
                                                                                                  <path style="fill:#56ACE0;" d="M321.81,125.608v-0.065c-7.24-14.933-16.743-28.38-28.057-39.887
                                                                  c-5.042,0.776-10.02,1.552-15.127,2.133c3.814,11.636,6.853,24.242,9.438,37.818H321.81z"></path>
                                                                                                  <path style="fill:#56ACE0;" d="M104.404,125.543c2.521-13.446,5.689-26.117,9.438-37.818c-5.042-0.646-10.02-1.422-15.127-2.133
              c-11.313,11.507-20.816,24.954-28.057,39.887h33.745C104.404,125.479,104.404,125.543,104.404,125.543z"></path>
                                                                                                  <path style="fill:#56ACE0;" d="M126.578,125.543h58.828V92.768c-16.485-0.259-32.84-1.164-49.196-2.651
                                                                  C132.331,100.978,129.099,112.873,126.578,125.543z"></path>
                                                                                              </g>
                                                                                          </svg>
                                                                                      </a> </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                      <!--[if (mso)|(IE)]></td><![endif]-->
                                                                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                                                  </div>
                                                              </div>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                              <table id="u_content_text_3" style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px
                                              30px;font-family:arial,helvetica,sans-serif;" align="left">
                                                              <div class="v-font-size" style="color: #ffffff; line-height: 140%; text-align: center;
                                                word-wrap: break-word;">
                                                                  <p style="font-size: 14px; line-height: 140%;">Club 306</p>
                                                                  <p style="font-size: 14px; line-height: 140%;">12 allée Ledru Rollin</p>
                                                                  <p style="font-size: 14px; line-height: 140%;">93320 Les Pavillons sous Bois</p>
                                                              </div>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div>
                                          <!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                              </div>
                          </div>
                      </div>
                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  </td>
              </tr>
          </tbody>
      </table>
      <!--[if mso]></div><![endif]-->
      <!--[if IE]></div><![endif]-->
  
  
  </body>
  
  </html>`
}

const newsLetter = (email: string) => {
  return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
  <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
    <title></title>
    
      <style type="text/css">
        @media only screen and (min-width: 520px) {
    .u-row {
      width: 500px !important;
    }
    .u-row .u-col {
      vertical-align: top;
    }
  
    .u-row .u-col-100 {
      width: 500px !important;
    }
  
  }
  
  @media (max-width: 520px) {
    .u-row-container {
      max-width: 100% !important;
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
    .u-row .u-col {
      min-width: 320px !important;
      max-width: 100% !important;
      display: block !important;
    }
    .u-row {
      width: 100% !important;
    }
    .u-col {
      width: 100% !important;
    }
    .u-col > div {
      margin: 0 auto;
    }
  }
  body {
    margin: 0;
    padding: 0;
  }
  
  table,
  tr,
  td {
    vertical-align: top;
    border-collapse: collapse;
  }
  
  p {
    margin: 0;
  }
  
  .ie-container table,
  .mso-container table {
    table-layout: fixed;
  }
  
  * {
    line-height: inherit;
  }
  
  a[x-apple-data-detectors='true'] {
    color: inherit !important;
    text-decoration: none !important;
  }
  
  table, td { color: #000000; } </style>
    
    
  
  </head>
  
  <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #3598db;color: #000000">
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #3598db;width:100%" cellpadding="0" cellspacing="0">
    <tbody>
    <tr style="vertical-align: top">
      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #3598db;"><![endif]-->
      
    
    
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
    <div style="height: 100%;width: 100% !important;">
    <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
    
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div style="font-size: 18px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
      <p style="line-height: 140%;">Formulaire de contact</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
      <tbody>
        <tr style="vertical-align: top">
          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <span>&#160;</span>
          </td>
        </tr>
      </tbody>
    </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
      
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
      <tbody>
        <tr style="vertical-align: top">
          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <span>&#160;</span>
          </td>
        </tr>
      </tbody>
    </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="right">
            
                
            
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div style="font-size: 14px; line-height: 140%; text-align: right; word-wrap: break-word;">
      <p style="line-height: 140%;">${email}</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
    </div>
    
  
  
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      </td>
    </tr>
    </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
  </body>
  </html>  
  `
}

const recordDb = (firstName: string, lastName: string) => {
  return `<!DOCTYPE html>
            <html>
              <head>
                <!--[if gte mso 9]>
                        <xml>
                          <o:OfficeDocumentSettings>
                            <o:AllowPNG/>
                            <o:PixelsPerInch>96</o:PixelsPerInch>
                          </o:OfficeDocumentSettings>
                        </xml>
                        <![endif]-->
                <meta http-equiv="Content-Type" content="text/html; charset=">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="x-apple-disable-message-reformatting">
                <!--[if !mso]><!-->
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <!--<![endif]-->
                <title></title>
                <style type="text/css">
                              @media only screen and (min-width: 620px) {
                          .u-row {
                            width: 600px !important;
                          }
                          .u-row .u-col {
                            vertical-align: top;
                          }
                        
                          .u-row .u-col-100 {
                            width: 600px !important;
                          }
                        
                        }
                        
                        @media (max-width: 620px) {
                          .u-row-container {
                            max-width: 100% !important;
                            padding-left: 0px !important;
                            padding-right: 0px !important;
                          }
                          .u-row .u-col {
                            min-width: 320px !important;
                            max-width: 100% !important;
                            display: block !important;
                          }
                          .u-row {
                            width: 100% !important;
                          }
                          .u-col {
                            width: 100% !important;
                          }
                          .u-col > div {
                            margin: 0 auto;
                          }
                        }
                        body {
                          margin: 0;
                          padding: 0;
                        }
                        
                        table,
                        tr,
                        td {
                          vertical-align: top;
                          border-collapse: collapse;
                        }
                        
                        p {
                          margin: 0;
                        }
                        
                        .ie-container table,
                        .mso-container table {
                          table-layout: fixed;
                        }
                        
                        * {
                          line-height: inherit;
                        }
                        
                        a[x-apple-data-detectors='true'] {
                          color: inherit !important;
                          text-decoration: none !important;
                        }
                        
                        table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_2 .v-src-width { width: auto !important; } #u_content_image_2 .v-src-max-width { max-width: 35% !important; } #u_content_menu_1 .v-padding { padding: 5px 15px !important; } #u_content_text_5 .v-container-padding-padding { padding: 52px 10px 56px !important; } #u_content_heading_3 .v-container-padding-padding { padding: 20px 15px 0px 10px !important; } #u_content_heading_5 .v-font-size { font-size: 22px !important; } #u_content_image_5 .v-src-width { width: auto !important; } #u_content_image_5 .v-src-max-width { max-width: 90% !important; } #u_content_text_4 .v-container-padding-padding { padding: 30px 15px 10px !important; } #u_content_image_1 .v-container-padding-padding { padding: 20px 10px !important; } #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 65% !important; } #u_content_heading_7 .v-font-size { font-size: 22px !important; } #u_content_heading_9 .v-font-size { font-size: 17px !important; } #u_content_button_1 .v-size-width { width: 53% !important; } #u_content_text_3 .v-container-padding-padding { padding: 10px 20px 30px !important; } }
                            </style>
                <!--[if !mso]><!-->
                <link href="https://fonts.googleapis.com/css?family=Lobster+Two:400,700&amp;display=swap" rel="stylesheet"
                  type="text/css">
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&amp;display=swap" rel="stylesheet"
                  type="text/css">
                <!--<![endif]-->
              </head>
              <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color:
                #e7e7e7;color: #000000">
                <!--[if IE]><div class="ie-container"><![endif]-->
                <!--[if mso]><div class="mso-container"><![endif]-->
                <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace:
                  0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color:
                  #e7e7e7;width:100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr style="vertical-align: top">
                      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap:
                            break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color:
                              transparent;">
                              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                              <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #516874;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display:
                                table-cell;vertical-align: top;">
                                <div style="background-color: #516874;height: 100%;width: 100% !important;border-radius:
                                  0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                  <!--[if (!mso)&(!IE)]><!-->
                                  <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid
                                    transparent;border-left: 0px solid transparent;border-right: 0px solid
                                    transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px;
                                    -moz-border-radius: 0px;"><!--<![endif]-->
                                    <table id="u_content_image_2" style="font-family:arial,helvetica,sans-serif;"
                                      role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td class="v-container-padding-padding"
                                            style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px
                                            10px;font-family:arial,helvetica,sans-serif;" align="left">
                                            <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                              <tbody>
                                                <tr>
                                                  <td style="padding-right: 0px;padding-left: 0px;" align="center"> <img
                                                      src="https://www.club306.fr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoClub306.3a02f592.png&amp;w=256&amp;q=75"
                                                      alt="Club 306 Logo" title="Club 306 Logo" style="outline:
                                                      none;text-decoration: none;-ms-interpolation-mode: bicubic;clear:
                                                      both;display: inline-block !important;border: none;height: auto;float:
                                                      none;width: 25%;max-width: 145px;" class="v-src-width v-src-max-width"
                                                      width="145" border="0" align="middle"> </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (!mso)&(!IE)]><!--></div>
                                  <!--<![endif]--> </div>
                              </div>
                              <!--[if (mso)|(IE)]></td><![endif]-->
                              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                          </div>
                        </div>
                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap:
                            break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-image:
                              url('images/image-6.png');background-repeat: no-repeat;background-position: center
                              top;background-color: transparent;">
                              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-image: url('images/image-6.png');background-repeat: no-repeat;background-position: center top;background-color: transparent;"><![endif]-->
                              <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display:
                                table-cell;vertical-align: top;">
                                <div style="height: 100%;width: 100% !important;">
                                  <!--[if (!mso)&(!IE)]><!-->
                                  <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid
                                    transparent;border-left: 0px solid transparent;border-right: 0px solid
                                    transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                                    <!--[if (!mso)&(!IE)]><!--></div>
                                  <!--<![endif]--> </div>
                              </div>
                              <!--[if (mso)|(IE)]></td><![endif]-->
                              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                          </div>
                        </div>
                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap:
                            break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color:
                              transparent;">
                              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                              <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #516874;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display:
                                table-cell;vertical-align: top;">
                                <div style="background-color: #516874;height: 100%;width: 100% !important;border-radius:
                                  0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                  <!--[if (!mso)&(!IE)]><!-->
                                  <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid
                                    transparent;border-left: 0px solid transparent;border-right: 0px solid
                                    transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px;
                                    -moz-border-radius: 0px;"><!--<![endif]-->
                                    <table id="u_content_heading_7" style="font-family:arial,helvetica,sans-serif;"
                                      role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td class="v-container-padding-padding"
                                            style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px
                                            0px;font-family:arial,helvetica,sans-serif;" align="left">
                                            <h1 class="v-font-size" style="margin: 0px; color: #ffffff; line-height: 140%;
                                              text-align: center; word-wrap: break-word; font-family: arial
                                              black,AvenirNext-Heavy,avant garde,arial; font-size: 26px; "><strong>${firstName} ${lastName}</strong></h1>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table id="u_content_heading_9" style="font-family:arial,helvetica,sans-serif;"
                                      role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td class="v-container-padding-padding"
                                            style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px
                                            0px;font-family:arial,helvetica,sans-serif;" align="left">
                                            <h1 class="v-font-size" style="margin: 0px; color: #ffffff; line-height: 140%;
                                              text-align: center; word-wrap: break-word; font-family: 'Montserrat',sans-serif;
                                              font-size: 20px; ">Est un nouveau membre du club 306</h1>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%"
                                      cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td class="v-container-padding-padding"
                                            style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px
                                            20px;font-family:arial,helvetica,sans-serif;" align="left"> <br>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table id="u_content_button_1" style="font-family:arial,helvetica,sans-serif;"
                                      role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td class="v-container-padding-padding"
                                            style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px
                                            30px;font-family:arial,helvetica,sans-serif;" align="left">
                                            <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
                                            <div align="center">
                                              <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.unlayer.com" style="height:38px; v-text-anchor:middle; width:173px;" arcsize="13%"  stroke="f" fillcolor="#00c1ed"><w:anchorlock/><center style="color:#FFFFFF;font-family:arial,helvetica,sans-serif;"><![endif]-->
                                              <!--[if mso]></center></v:roundrect><![endif]--> </div>
                                            <br>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%"
                                      cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td class="v-container-padding-padding"
                                            style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                                            align="left">
                                            <table style="border-collapse: collapse;table-layout: fixed;border-spacing:
                                              0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px
                                              solid #555555;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%" width="100%"
                                              height="0px" cellspacing="0" cellpadding="0" border="0" align="center">
                                              <tbody>
                                                <tr style="vertical-align: top">
                                                  <td style="word-break: break-word;border-collapse: collapse
                                                    !important;vertical-align: top;font-size: 0px;line-height:
                                                    0px;mso-line-height-rule: exactly;-ms-text-size-adjust:
                                                    100%;-webkit-text-size-adjust: 100%"> <span></span> </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (!mso)&(!IE)]><!--></div>
                                  <!--<![endif]--> </div>
                              </div>
                              <!--[if (mso)|(IE)]></td><![endif]-->
                              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                          </div>
                        </div>
                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap:
                            break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color:
                              transparent;">
                              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                              <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #516874;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display:
                                table-cell;vertical-align: top;">
                                <div style="background-color: #516874;height: 100%;width: 100% !important;border-radius:
                                  0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                  <!--[if (!mso)&(!IE)]><!-->
                                  <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid
                                    transparent;border-left: 0px solid transparent;border-right: 0px solid
                                    transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px;
                                    -moz-border-radius: 0px;"><!--<![endif]-->
                                    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%"
                                      cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td class="v-container-padding-padding"
                                            style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px
                                            10px;font-family:arial,helvetica,sans-serif;" align="left">
                                            <div align="center">
                                              <div style="display: table; max-width:167px;">
                                                <!--[if (mso)|(IE)]><table width="167" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:147px;"><tr><![endif]-->
                                                <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                                <table style="width: 48px !important;height: 48px !important;display:
                                                  inline-block;border-collapse: collapse;table-layout: fixed;border-spacing:
                                                  0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right:
                                                  5px" width="48" height="48" cellspacing="0" cellpadding="0" border="0"
                                                  align="left">
                                                  <tbody>
                                                    <tr style="vertical-align: top">
                                                      <td style="word-break: break-word;border-collapse: collapse
                                                        !important;vertical-align: top" valign="middle" align="left"> <a
                                                          href="https://www.facebook.com/club306france" title="Facebook du club 306"
                                                          target="_blank">
                                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px"
                                                            height="48px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1
                                                              0 24 5Z"></path><path fill="#fff"
            d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path></svg>
                                                        </a> <br>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <!--[if (mso)|(IE)]></td><![endif]-->
                                                <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                                <table style="width: 48px !important;height: 48px !important;display:
                                                  inline-block;border-collapse: collapse;table-layout: fixed;border-spacing:
                                                  0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right:
                                                  5px" width="48" height="48" cellspacing="0" cellpadding="0" border="0"
                                                  align="left">
                                                  <tbody>
                                                    <tr style="vertical-align: top">
                                                      <td style="word-break: break-word;border-collapse: collapse
                                                        !important;vertical-align: top" valign="middle" align="left"> <a
                                                          href="https://www.instagram.com/club306officielfrance/" title="Instagram
                                                          du club 306" target="_blank">
                                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px"
                                                            height="48px"><path fill="#304ffe"
                                                              d="M41.67,13.48c-0.4,0.26-0.97,0.5-1.21,0.77c-0.09,0.09-0.14,0.19-0.12,0.29v1.03l-0.3,1.01l-0.3,1l-0.33,1.1
            l-0.68,2.25l-0.66,2.22l-0.5,1.67c0,0.26-0.01,0.52-0.03,0.77c-0.07,0.96-0.27,1.88-0.59,2.74c-0.19,0.53-0.42,1.04-0.7,1.52
            c-0.1,0.19-0.22,0.38-0.34,0.56c-0.4,0.63-0.88,1.21-1.41,1.72c-0.41,0.41-0.86,0.79-1.35,1.11c0,0,0,0-0.01,0
            c-0.08,0.07-0.17,0.13-0.27,0.18c-0.31,0.21-0.64,0.39-0.98,0.55c-0.23,0.12-0.46,0.22-0.7,0.31c-0.05,0.03-0.11,0.05-0.16,0.07
            c-0.57,0.27-1.23,0.45-1.89,0.54c-0.04,0.01-0.07,0.01-0.11,0.02c-0.4,0.07-0.79,0.13-1.19,0.16c-0.18,0.02-0.37,0.03-0.55,0.03
            l-0.71-0.04l-3.42-0.18c0-0.01-0.01,0-0.01,0l-1.72-0.09c-0.13,0-0.27,0-0.4-0.01c-0.54-0.02-1.06-0.08-1.58-0.19
                                                              c-0.01,0-0.01,0-0.01,0c-0.95-0.18-1.86-0.5-2.71-0.93c-0.47-0.24-0.93-0.51-1.36-0.82c-0.18-0.13-0.35-0.27-0.52-0.42
            c-0.48-0.4-0.91-0.83-1.31-1.27c-0.06-0.06-0.11-0.12-0.16-0.18c-0.06-0.06-0.12-0.13-0.17-0.19c-0.38-0.48-0.7-0.97-0.96-1.49
            c-0.24-0.46-0.43-0.95-0.58-1.49c-0.06-0.19-0.11-0.37-0.15-0.57c-0.01-0.01-0.02-0.03-0.02-0.05c-0.1-0.41-0.19-0.84-0.24-1.27
            c-0.06-0.33-0.09-0.66-0.09-1c-0.02-0.13-0.02-0.27-0.02-0.4l1.91-2.95l1.87-2.88l0.85-1.31l0.77-1.18l0.26-0.41v-1.03
            c0.02-0.23,0.03-0.47,0.02-0.69c-0.01-0.7-0.15-1.38-0.38-2.03c-0.22-0.69-0.53-1.34-0.85-1.94c-0.38-0.69-0.78-1.31-1.11-1.87
            C14,7.4,13.66,6.73,13.75,6.26C14.47,6.09,15.23,6,16,6h16c4.18,0,7.78,2.6,9.27,6.26C41.43,12.65,41.57,13.06,41.67,13.48z"></path><path
                                                              fill="#4928f4"
                                                              d="M42,16v0.27l-1.38,0.8l-0.88,0.51l-0.97,0.56l-1.94,1.13l-1.9,1.1l-1.94,1.12l-0.77,0.45
            c0,0.48-0.12,0.92-0.34,1.32c-0.31,0.58-0.83,1.06-1.49,1.47c-0.67,0.41-1.49,0.74-2.41,0.98c0,0,0-0.01-0.01,0
                                                              c-3.56,0.92-8.42,0.5-10.78-1.26c-0.66-0.49-1.12-1.09-1.32-1.78c-0.06-0.23-0.09-0.48-0.09-0.73v-7.19
            c0.01-0.15-0.09-0.3-0.27-0.45c-0.54-0.43-1.81-0.84-3.23-1.25c-1.11-0.31-2.3-0.62-3.3-0.92c-0.79-0.24-1.46-0.48-1.86-0.71
            c0.18-0.35,0.39-0.7,0.61-1.03c1.4-2.05,3.54-3.56,6.02-4.13C14.47,6.09,15.23,6,16,6h10.8c5.37,0.94,10.32,3.13,14.47,6.26
            c0.16,0.39,0.3,0.8,0.4,1.22c0.18,0.66,0.29,1.34,0.32,2.05C42,15.68,42,15.84,42,16z"></path><path fill="#6200ea"
                                                              d="M42,16v4.41l-0.22,0.68l-0.75,2.33l-0.78,2.4l-0.41,1.28l-0.38,1.19l-0.37,1.13l-0.36,1.12l-0.19,0.59
            l-0.25,0.78c0,0.76-0.02,1.43-0.07,2c-0.01,0.06-0.02,0.12-0.02,0.18c-0.06,0.53-0.14,0.98-0.27,1.36
            c-0.01,0.06-0.03,0.12-0.05,0.17c-0.26,0.72-0.65,1.18-1.23,1.48c-0.14,0.08-0.3,0.14-0.47,0.2c-0.53,0.18-1.2,0.27-2.02,0.32
            c-0.6,0.04-1.29,0.05-2.07,0.05H31.4l-1.19-0.05L30,37.61l-2.17-0.09l-2.2-0.09l-7.25-0.3l-1.88-0.08h-0.26
            c-0.78-0.01-1.45-0.06-2.03-0.14c-0.84-0.13-1.49-0.35-1.98-0.68c-0.7-0.45-1.11-1.11-1.35-2.03c-0.06-0.22-0.11-0.45-0.14-0.7
            c-0.1-0.58-0.15-1.25-0.18-2c0-0.15,0-0.3-0.01-0.46c-0.01-0.01,0-0.01,0-0.01v-0.58c-0.01-0.29-0.01-0.59-0.01-0.9l0.05-1.61
            l0.03-1.15l0.04-1.34v-0.19l0.07-2.46l0.07-2.46l0.07-2.31l0.06-2.27l0.02-0.6c0-0.31-1.05-0.49-2.22-0.64
                                                              c-0.93-0.12-1.95-0.23-2.56-0.37c0.05-0.23,0.1-0.46,0.16-0.68c0.18-0.72,0.45-1.4,0.79-2.05c0.18-0.35,0.39-0.7,0.61-1.03
            c2.16-0.95,4.41-1.69,6.76-2.17c2.06-0.43,4.21-0.66,6.43-0.66c7.36,0,14.16,2.49,19.54,6.69c0.52,0.4,1.03,0.83,1.53,1.28
                                                              C42,15.68,42,15.84,42,16z"></path><path fill="#673ab7"
                                                              d="M42,18.37v4.54l-0.55,1.06l-1.05,2.05l-0.56,1.08l-0.51,0.99l-0.22,0.43c0,0.31,0,0.61-0.02,0.9
            c0,0.43-0.02,0.84-0.05,1.22c-0.04,0.45-0.1,0.86-0.16,1.24c-0.15,0.79-0.36,1.47-0.66,2.03c-0.04,0.07-0.08,0.14-0.12,0.2
            c-0.11,0.18-0.24,0.35-0.38,0.51c-0.18,0.22-0.38,0.41-0.61,0.57c-0.34,0.26-0.74,0.47-1.2,0.63c-0.57,0.21-1.23,0.35-2.01,0.43
            c-0.51,0.05-1.07,0.08-1.68,0.08l-0.42,0.02l-2.08,0.12h-0.01L27.5,36.6l-2.25,0.13l-3.1,0.18l-3.77,0.22l-0.55,0.03
                                                              c-0.51,0-0.99-0.03-1.45-0.09c-0.05-0.01-0.09-0.02-0.14-0.02c-0.68-0.11-1.3-0.29-1.86-0.54c-0.68-0.3-1.27-0.7-1.77-1.18
            c-0.44-0.43-0.82-0.92-1.13-1.47c-0.07-0.13-0.14-0.25-0.2-0.39c-0.3-0.59-0.54-1.25-0.72-1.97c-0.03-0.12-0.06-0.25-0.08-0.38
            c-0.06-0.23-0.11-0.47-0.14-0.72c-0.11-0.64-0.17-1.32-0.2-2.03v-0.01c-0.01-0.29-0.02-0.57-0.02-0.87l-0.49-1.17l-0.07-0.18
            L9.5,25.99L8.75,24.2l-0.12-0.29l-0.72-1.73l-0.8-1.93c0,0,0,0-0.01,0L6.29,18.3L6,17.59V16c0-0.63,0.06-1.25,0.17-1.85
                                                              c0.05-0.23,0.1-0.46,0.16-0.68c0.85-0.49,1.74-0.94,2.65-1.34c2.08-0.93,4.31-1.62,6.62-2.04c1.72-0.31,3.51-0.48,5.32-0.48
            c7.31,0,13.94,2.65,19.12,6.97c0.2,0.16,0.39,0.32,0.58,0.49C41.09,17.48,41.55,17.91,42,18.37z"></path><path
                                                              fill="#8e24aa"
                                                              d="M42,21.35v5.14l-0.57,1.19l-1.08,2.25l-0.01,0.03c0,0.43-0.02,0.82-0.05,1.17c-0.1,1.15-0.38,1.88-0.84,2.33
            c-0.33,0.34-0.74,0.53-1.25,0.63c-0.03,0.01-0.07,0.01-0.1,0.02c-0.16,0.03-0.33,0.05-0.51,0.05c-0.62,0.06-1.35,0.02-2.19-0.04
            c-0.09,0-0.19-0.01-0.29-0.02c-0.61-0.04-1.26-0.08-1.98-0.11c-0.39-0.01-0.8-0.02-1.22-0.02h-0.02l-1.01,0.08h-0.01l-2.27,0.16
            l-2.59,0.2l-0.38,0.03l-3.03,0.22l-1.57,0.12l-1.55,0.11c-0.27,0-0.53,0-0.79-0.01c0,0-0.01-0.01-0.01,0
            c-1.13-0.02-2.14-0.09-3.04-0.26c-0.83-0.14-1.56-0.36-2.18-0.69c-0.64-0.31-1.17-0.75-1.6-1.31c-0.41-0.55-0.71-1.24-0.9-2.07
            c0-0.01,0-0.01,0-0.01c-0.14-0.67-0.22-1.45-0.22-2.33l-0.15-0.27L9.7,26.35l-0.13-0.22L9.5,25.99l-0.93-1.65l-0.46-0.83
            l-0.58-1.03l-1-1.79L6,19.75v-3.68c0.88-0.58,1.79-1.09,2.73-1.55c1.14-0.58,2.32-1.07,3.55-1.47c1.34-0.44,2.74-0.79,4.17-1.02
            c1.45-0.24,2.94-0.36,4.47-0.36c6.8,0,13.04,2.43,17.85,6.47c0.22,0.17,0.43,0.36,0.64,0.54c0.84,0.75,1.64,1.56,2.37,2.41
                                                              C41.86,21.18,41.94,21.26,42,21.35z"></path><path fill="#c2185b"
                                                              d="M42,24.71v7.23c-0.24-0.14-0.57-0.31-0.98-0.49c-0.22-0.11-0.47-0.22-0.73-0.32
            c-0.38-0.17-0.79-0.33-1.25-0.49c-0.1-0.04-0.2-0.07-0.31-0.1c-0.18-0.07-0.37-0.13-0.56-0.19c-0.59-0.18-1.24-0.35-1.92-0.5
            c-0.26-0.05-0.53-0.1-0.8-0.14c-0.87-0.15-1.8-0.24-2.77-0.25c-0.08-0.01-0.17-0.01-0.25-0.01l-2.57,0.02l-3.5,0.02h-0.01
                                                              l-7.49,0.06c-2.38,0-3.84,0.57-4.72,0.8c0,0-0.01,0-0.01,0.01c-0.93,0.24-1.22,0.09-1.3-1.54c-0.02-0.45-0.03-1.03-0.03-1.74
            l-0.56-0.43l-0.98-0.74l-0.6-0.46l-0.12-0.09L8.88,24.1l-0.25-0.19l-0.52-0.4l-0.96-0.72L6,21.91v-3.4
                                                              c0.1-0.08,0.19-0.15,0.29-0.21c1.45-1,3-1.85,4.64-2.54c1.46-0.62,3-1.11,4.58-1.46c0.43-0.09,0.87-0.18,1.32-0.24
            c1.33-0.23,2.7-0.34,4.09-0.34c6.01,0,11.53,2.09,15.91,5.55c0.66,0.52,1.3,1.07,1.9,1.66c0.82,0.78,1.59,1.61,2.3,2.49
                                                              c0.14,0.18,0.28,0.36,0.42,0.55C41.64,24.21,41.82,24.46,42,24.71z"></path><path
                                                              fill="#d81b60"
                                                              d="M42,28.72V32c0,0.65-0.06,1.29-0.18,1.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.22,0.05-0.47,0.05-0.75,0.01
            c-0.63-0.11-1.37-0.44-2.17-0.87c-0.04-0.01-0.08-0.03-0.11-0.05c-0.25-0.13-0.51-0.27-0.77-0.43c-0.53-0.29-1.09-0.61-1.65-0.91
            c-0.12-0.06-0.24-0.12-0.35-0.18c-0.64-0.33-1.3-0.63-1.96-0.86c0,0,0,0-0.01,0c-0.14-0.05-0.29-0.1-0.44-0.14
            c-0.57-0.16-1.15-0.26-1.71-0.26l-1.1-0.32l-4.87-1.41c0,0,0,0-0.01,0l-2.99-0.87h-0.01l-1.3-0.38c-3.76,0-6.07,1.6-7.19,0.99
            c-0.44-0.23-0.7-0.81-0.79-1.95c-0.03-0.32-0.04-0.68-0.04-1.1l-1.17-0.57l-0.05-0.02h-0.01l-0.84-0.42L9.7,26.35l-0.07-0.03
            l-0.17-0.09L7.5,25.28L6,24.55v-3.43c0.17-0.15,0.35-0.29,0.53-0.43c0.19-0.15,0.38-0.29,0.57-0.44c0.01,0,0.01,0,0.01,0
                                                              c1.18-0.85,2.43-1.6,3.76-2.22c1.55-0.74,3.2-1.31,4.91-1.68c0.25-0.06,0.51-0.12,0.77-0.16c1.42-0.27,2.88-0.41,4.37-0.41
            c5.27,0,10.11,1.71,14.01,4.59c1.13,0.84,2.18,1.77,3.14,2.78c0.79,0.83,1.52,1.73,2.18,2.67c0.05,0.07,0.1,0.14,0.15,0.2
                                                              c0.37,0.54,0.71,1.09,1.03,1.66C41.64,28.02,41.82,28.37,42,28.72z"></path><path
                                                              fill="#f50057"
                                                              d="M41.82,33.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.19,0.37-0.4,0.72-0.63,1.06c-0.14,0.21-0.29,0.41-0.44,0.6
            c-0.36-0.14-0.89-0.34-1.54-0.56c0,0,0,0,0-0.01c-0.49-0.17-1.05-0.35-1.65-0.52c-0.17-0.05-0.34-0.1-0.52-0.15
            c-0.71-0.19-1.45-0.36-2.17-0.46c-0.6-0.1-1.19-0.16-1.74-0.16l-0.46-0.13h-0.01l-2.42-0.7l-1.49-0.43l-1.66-0.48h-0.01l-0.54-0.15
            l-6.53-1.88l-1.88-0.54l-1.4-0.33l-2.28-0.54l-0.28-0.07c0,0,0,0-0.01,0l-2.29-0.53c0-0.01,0-0.01,0-0.01l-0.41-0.09l-0.21-0.05
            l-1.67-0.39l-0.19-0.05l-1.42-1.17L6,27.9v-4.08c0.37-0.36,0.75-0.7,1.15-1.03c0.12-0.11,0.25-0.21,0.38-0.31
                                                              c0.12-0.1,0.25-0.2,0.38-0.3c0.91-0.69,1.87-1.31,2.89-1.84c1.3-0.7,2.68-1.26,4.13-1.66c0.28-0.09,0.56-0.17,0.85-0.23
            c1.64-0.41,3.36-0.62,5.14-0.62c4.47,0,8.63,1.35,12.07,3.66c1.71,1.15,3.25,2.53,4.55,4.1c0.66,0.79,1.26,1.62,1.79,2.5
            c0.05,0.07,0.09,0.13,0.13,0.2c0.32,0.53,0.62,1.08,0.89,1.64c0.25,0.5,0.47,1,0.67,1.52C41.34,32.25,41.6,33.07,41.82,33.91z"></path><path
                                                              fill="#ff1744"
                                                              d="M40.28,37.59c-0.14,0.21-0.29,0.41-0.44,0.6c-0.44,0.55-0.92,1.05-1.46,1.49c-0.47,0.39-0.97,0.74-1.5,1.04
            c-0.2-0.05-0.4-0.11-0.61-0.19c-0.66-0.23-1.35-0.61-1.99-1.01c-0.96-0.61-1.79-1.27-2.16-1.57c-0.14-0.12-0.21-0.18-0.21-0.18
            l-1.7-0.15L30,37.6l-2.2-0.19l-2.28-0.2l-3.37-0.3l-5.34-0.47l-0.02-0.01l-1.88-0.91l-1.9-0.92l-1.53-0.74l-0.33-0.16l-0.41-0.2
            l-1.42-0.69L7.43,31.9l-0.59-0.29L6,31.35v-4.47c0.47-0.56,0.97-1.09,1.5-1.6c0.34-0.32,0.7-0.64,1.07-0.94
                                                              c0.06-0.05,0.12-0.1,0.18-0.14c0.04-0.05,0.09-0.08,0.13-0.1c0.59-0.48,1.21-0.91,1.85-1.3c0.74-0.47,1.52-0.89,2.33-1.24
            c0.87-0.39,1.78-0.72,2.72-0.97c1.63-0.46,3.36-0.7,5.14-0.7c4.08,0,7.85,1.24,10.96,3.37c1.99,1.36,3.71,3.08,5.07,5.07
                                                              c0.45,0.64,0.85,1.32,1.22,2.02c0.13,0.26,0.26,0.52,0.37,0.78c0.12,0.25,0.23,0.5,0.34,0.75c0.21,0.52,0.4,1.04,0.57,1.58
                                                              c0.32,1,0.56,2.02,0.71,3.08C40.21,36.89,40.25,37.24,40.28,37.59z"></path><path
                                                              fill="#ff5722"
                                                              d="M38.39,39.42c0,0.08,0,0.17-0.01,0.26c-0.47,0.39-0.97,0.74-1.5,1.04c-0.22,0.12-0.44,0.24-0.67,0.34
            c-0.23,0.11-0.46,0.21-0.7,0.3c-0.34-0.18-0.8-0.4-1.29-0.61c-0.69-0.31-1.44-0.59-2.02-0.68c-0.14-0.03-0.27-0.04-0.39-0.04
            l-1.64-0.21h-0.02l-2.04-0.27l-2.06-0.27l-0.96-0.12l-7.56-0.98c-0.49,0-1.01-0.03-1.55-0.1c-0.66-0.06-1.35-0.16-2.04-0.3
                                                              c-0.68-0.12-1.37-0.28-2.03-0.45c-0.69-0.16-1.37-0.35-2-0.53c-0.73-0.22-1.41-0.43-1.98-0.62c-0.47-0.15-0.87-0.29-1.18-0.4
            c-0.18-0.43-0.33-0.88-0.44-1.34C6.1,33.66,6,32.84,6,32v-1.67c0.32-0.53,0.67-1.05,1.06-1.54c0.71-0.94,1.52-1.8,2.4-2.56
                                                              c0.03-0.04,0.07-0.07,0.1-0.09l0.01-0.01c0.31-0.28,0.63-0.53,0.97-0.77c0.04-0.04,0.08-0.07,0.12-0.1
            c0.16-0.12,0.33-0.24,0.51-0.35c1.43-0.97,3.01-1.73,4.7-2.24c1.6-0.48,3.29-0.73,5.05-0.73c3.49,0,6.75,1.03,9.47,2.79
                                                              c2.01,1.29,3.74,2.99,5.06,4.98c0.16,0.23,0.31,0.46,0.46,0.7c0.69,1.17,1.26,2.43,1.68,3.75c0.05,0.15,0.09,0.3,0.13,0.46
            c0.08,0.27,0.15,0.55,0.21,0.83c0.02,0.07,0.04,0.14,0.06,0.22c0.14,0.63,0.24,1.29,0.31,1.95c0,0.01,0,0.01,0,0.01
                                                              C38.36,38.22,38.39,38.82,38.39,39.42z"></path><path fill="#ff6f00"
                                                              d="M36.33,39.42c0,0.35-0.02,0.73-0.06,1.11c-0.02,0.18-0.04,0.36-0.06,0.53c-0.23,0.11-0.46,0.21-0.7,0.3
            c-0.45,0.17-0.91,0.31-1.38,0.41c-0.32,0.07-0.65,0.13-0.98,0.16h-0.01c-0.31-0.19-0.67-0.42-1.04-0.68
            c-0.67-0.47-1.37-1-1.93-1.43c-0.01-0.01-0.01-0.01-0.02-0.02c-0.59-0.45-1.01-0.79-1.01-0.79l-1.06,0.04l-2.04,0.07l-0.95,0.04
            l-3.82,0.14l-3.23,0.12c-0.21,0.01-0.46,0.01-0.77,0h-0.01c-0.42-0.01-0.92-0.04-1.47-0.09c-0.64-0.05-1.34-0.11-2.05-0.18
            c-0.69-0.08-1.39-0.16-2.06-0.24c-0.74-0.08-1.44-0.17-2.04-0.25c-0.47-0.06-0.88-0.11-1.21-0.15c-0.28-0.32-0.53-0.65-0.77-1.01
            c-0.36-0.54-0.67-1.11-0.91-1.72c-0.18-0.43-0.33-0.88-0.44-1.34c0.29-0.89,0.67-1.73,1.12-2.54c0.36-0.66,0.78-1.29,1.24-1.89
            c0.45-0.59,0.94-1.14,1.47-1.64v-0.01c0.15-0.15,0.3-0.29,0.45-0.42c0.28-0.26,0.57-0.5,0.87-0.73h0.01
                                                              c0.01-0.02,0.02-0.02,0.03-0.03c0.24-0.19,0.49-0.36,0.74-0.53c1.48-1.01,3.15-1.76,4.95-2.2c1.19-0.29,2.44-0.45,3.73-0.45
            c2.54,0,4.94,0.61,7.05,1.71h0.01c1.81,0.93,3.41,2.21,4.7,3.75c0.71,0.82,1.32,1.72,1.82,2.67c0.35,0.64,0.65,1.31,0.9,1.99
            c0.02,0.06,0.04,0.11,0.06,0.16c0.17,0.5,0.32,1.02,0.45,1.54c0.09,0.37,0.16,0.75,0.22,1.13c0.02,0.12,0.04,0.23,0.05,0.35
                                                              C36.28,37.99,36.33,38.7,36.33,39.42z"></path><path fill="#ff9800"
                                                              d="M34.28,39.42v0.1c0,0.34-0.03,0.77-0.06,1.23c-0.03,0.34-0.06,0.69-0.09,1.02c-0.32,0.07-0.65,0.13-0.98,0.16
            h-0.01C32.76,41.98,32.39,42,32,42h-1.75l-0.38-0.11l-1.97-0.6l-2-0.6l-4.63-1.39l-2-0.6c0,0-0.83,0.33-2,0.72h-0.01
            c-0.45,0.15-0.94,0.31-1.46,0.47c-0.65,0.19-1.34,0.38-2.02,0.53c-0.7,0.16-1.39,0.28-2.01,0.33c-0.19,0.02-0.38,0.03-0.55,0.03
            c-0.56-0.31-1.1-0.68-1.59-1.09c-0.43-0.36-0.83-0.75-1.2-1.18c-0.28-0.32-0.53-0.65-0.77-1.01c0.07-0.45,0.15-0.89,0.27-1.32
            c0.3-1.19,0.77-2.33,1.39-3.37c0.34-0.59,0.72-1.16,1.16-1.69c0.01-0.03,0.04-0.06,0.07-0.08c-0.01-0.01,0-0.01,0-0.01
                                                              c0.13-0.17,0.27-0.33,0.41-0.48c0-0.01,0-0.01,0-0.01c0.41-0.44,0.83-0.86,1.29-1.25c0.16-0.13,0.31-0.26,0.48-0.39
            c0.03-0.03,0.06-0.05,0.1-0.08c2.25-1.72,5.06-2.76,8.09-2.76c3.44,0,6.57,1.29,8.94,3.41c1.14,1.03,2.11,2.26,2.84,3.63
                                                              c0.06,0.1,0.12,0.21,0.17,0.32c0.09,0.18,0.18,0.37,0.26,0.57c0.33,0.72,0.59,1.48,0.77,2.26c0.02,0.08,0.04,0.16,0.06,0.24
                                                              c0.08,0.37,0.15,0.75,0.2,1.13C34.24,38.21,34.28,38.81,34.28,39.42z"></path><path
                                                              fill="#ffc107"
                                                              d="M32.22,39.42c0,0.2-0.01,0.42-0.02,0.65c-0.02,0.37-0.05,0.77-0.1,1.18c-0.02,0.25-0.06,0.5-0.1,0.75h-5.48
            l-1.06-0.17l-4.14-0.66l-0.59-0.09l-1.35-0.22c-0.59,0-1.87,0.26-3.22,0.51c-0.71,0.13-1.43,0.27-2.08,0.36
            c-0.08,0.01-0.16,0.02-0.23,0.03h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.2-0.09-0.4-0.19-0.6-0.3c-0.56-0.31-1.1-0.68-1.59-1.09
            c-0.01-0.12-0.02-0.22-0.02-0.27c0-0.26,0.01-0.51,0.03-0.76c0.04-0.64,0.13-1.26,0.27-1.86c0.22-0.91,0.54-1.79,0.97-2.6
                                                              c0.08-0.17,0.17-0.34,0.27-0.5c0.04-0.08,0.09-0.15,0.13-0.23c0.18-0.29,0.38-0.57,0.58-0.85c0.42-0.55,0.89-1.07,1.39-1.54
            c0.01,0,0.01,0,0.01,0c0.04-0.04,0.08-0.08,0.12-0.11c0.05-0.04,0.09-0.09,0.14-0.12c0.2-0.18,0.4-0.34,0.61-0.49
                                                              c0-0.01,0.01-0.01,0.01-0.01c1.89-1.41,4.23-2.24,6.78-2.24c1.98,0,3.82,0.5,5.43,1.38h0.01c1.38,0.76,2.58,1.79,3.53,3.03
            c0.37,0.48,0.7,0.99,0.98,1.53h0.01c0.05,0.1,0.1,0.2,0.15,0.3c0.3,0.59,0.54,1.21,0.72,1.85h0.01c0.01,0.05,0.03,0.1,0.04,0.15
            c0.12,0.43,0.22,0.87,0.29,1.32c0.01,0.09,0.02,0.19,0.03,0.28C32.19,38.43,32.22,38.92,32.22,39.42z"></path><path
                                                              fill="#ffd54f"
                                                              d="M30.17,39.31c0,0.16,0,0.33-0.02,0.49v0.01c0,0.01,0,0.01,0,0.01c-0.02,0.72-0.12,1.43-0.28,2.07
            c0,0.04-0.01,0.07-0.03,0.11h-4.67l-3.85-0.83l-0.51-0.11l-0.08,0.02l-4.27,0.88L16.27,42H16c-0.64,0-1.27-0.06-1.88-0.18
                                                              c-0.09-0.02-0.18-0.04-0.27-0.06h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.02-0.11-0.04-0.22-0.05-0.33
            c-0.07-0.43-0.1-0.88-0.1-1.33c0-0.17,0-0.34,0.01-0.51c0.03-0.54,0.11-1.07,0.23-1.58c0.08-0.38,0.19-0.75,0.32-1.1
                                                              c0.11-0.31,0.24-0.61,0.38-0.9c0.12-0.25,0.26-0.49,0.4-0.73c0.14-0.23,0.29-0.45,0.45-0.67c0.4-0.55,0.87-1.06,1.39-1.51
            c0.3-0.26,0.63-0.51,0.97-0.73c1.46-0.96,3.21-1.52,5.1-1.52c0.37,0,0.73,0.02,1.08,0.07h0.02c1.07,0.12,2.07,0.42,2.99,0.87
            c0.01,0,0.01,0,0.01,0c1.45,0.71,2.68,1.78,3.58,3.1c0.15,0.22,0.3,0.46,0.43,0.7c0.11,0.19,0.21,0.39,0.3,0.59
                                                              c0.14,0.31,0.27,0.64,0.38,0.97h0.01c0.11,0.37,0.21,0.74,0.28,1.13v0.01C30.11,38.16,30.17,38.73,30.17,39.31z"></path><path
                                                              fill="#ffe082"
                                                              d="M28.11,39.52v0.03c0,0.59-0.07,1.17-0.21,1.74c-0.05,0.24-0.12,0.48-0.21,0.71h-4.48l-2.29-0.63L18.63,42H16
            c-0.64,0-1.27-0.06-1.88-0.18c-0.02-0.03-0.03-0.06-0.04-0.09c-0.14-0.43-0.25-0.86-0.3-1.31c-0.04-0.29-0.06-0.59-0.06-0.9
            c0-0.12,0-0.25,0.02-0.37c0.01-0.47,0.08-0.93,0.2-1.37c0.06-0.3,0.15-0.59,0.27-0.87c0.04-0.14,0.1-0.27,0.17-0.4
                                                              c0.15-0.34,0.33-0.67,0.53-0.99c0.22-0.32,0.46-0.62,0.73-0.9c0.32-0.36,0.68-0.69,1.09-0.96c0.7-0.51,1.5-0.89,2.37-1.1
            c0.58-0.16,1.19-0.24,1.82-0.24c2,0,3.79,0.8,5.09,2.09c0.05,0.05,0.11,0.11,0.16,0.18h0.01c0.14,0.15,0.27,0.3,0.4,0.47
                                                              c0.37,0.47,0.68,0.98,0.92,1.54c0.12,0.26,0.22,0.53,0.3,0.81c0.01,0.04,0.02,0.07,0.03,0.11c0.14,0.49,0.23,1,0.25,1.53
                                                              C28.1,39.2,28.11,39.36,28.11,39.52z"></path><path fill="#ffecb3"
                                                              d="M26.06,39.52c0,0.41-0.05,0.8-0.16,1.17c-0.1,0.4-0.25,0.78-0.44,1.14c-0.03,0.06-0.1,0.17-0.1,0.17h-8.88
            c-0.01-0.01-0.02-0.03-0.02-0.04c-0.12-0.19-0.22-0.38-0.3-0.59c-0.2-0.46-0.32-0.96-0.36-1.48c-0.02-0.12-0.02-0.25-0.02-0.37
            c0-0.06,0-0.13,0.01-0.19c0.01-0.44,0.07-0.86,0.19-1.25c0.1-0.36,0.23-0.69,0.4-1.01c0,0,0.01-0.01,0.01-0.02
            c0.12-0.21,0.25-0.42,0.4-0.62c0.49-0.66,1.14-1.2,1.89-1.55c0.01,0,0.01,0,0.01,0c0.24-0.12,0.49-0.22,0.75-0.29c0,0,0,0,0.01,0
            c0.46-0.14,0.96-0.21,1.47-0.21c0.59,0,1.16,0.09,1.68,0.28c0.19,0.05,0.37,0.13,0.55,0.22c0,0,0,0,0.01,0
                                                              c0.86,0.41,1.59,1.05,2.09,1.85c0.1,0.15,0.19,0.31,0.27,0.48c0.04,0.07,0.08,0.15,0.11,0.22c0.23,0.52,0.37,1.09,0.41,1.69
                                                              c0.01,0.05,0.01,0.1,0.01,0.16C26.06,39.36,26.06,39.44,26.06,39.52z"></path><g><path
                                                                fill="none" stroke="#fff" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"
                                                                d="M30,11H18c-3.9,0-7,3.1-7,7v12c0,3.9,3.1,7,7,7h12c3.9,0,7-3.1,7-7V18C37,14.1,33.9,11,30,11z"></path><circle
                                                                cx="31" cy="16" r="1" fill="#fff"></circle></g><g><circle cx="24"
                                                                cy="24" r="6" fill="none" stroke="#fff" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></circle></g></svg>
                                                        </a> <br>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <!--[if (mso)|(IE)]></td><![endif]-->
                                                <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                                <table style="width: 48px !important;height: 48px !important;display:
                                                  inline-block;border-collapse: collapse;table-layout: fixed;border-spacing:
                                                  0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right:
                                                  5px" width="32" height="32" cellspacing="0" cellpadding="0" border="0"
                                                  align="left">
                                                  <tbody>
                                                    <tr style="vertical-align: top">
                                                      <td style="word-break: break-word;border-collapse: collapse
                                                        !important;vertical-align: top" valign="middle" align="left"> <a
                                                          href="https://club306.fr/" title="site web du club 306" target="_blank">
                                                          <!--?xml version="1.0" encoding="iso-8859-1"?-->
                                                          <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                                                          <svg height="48px" width="48px" version="1.1" id="Layer_1"
                                                            xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                                            viewBox="0 0 392.533 392.533" xml:space="preserve">
                                                            <path style="fill:#FFC10D;"
                                                              d="M359.822,147.329H32.711c-6.012,0-10.925,4.848-10.925,10.925v75.96
                                                              c0,6.012,4.848,10.925,10.925,10.925h327.111c6.012,0,10.925-4.848,10.925-10.925v-75.96
                                                              C370.747,152.242,365.834,147.329,359.822,147.329z"></path>
                                                            <g>
                                                              <path style="fill:#FFFFFF;"
                                                                d="M104.404,125.543c2.521-13.446,5.689-26.117,9.438-37.818c-15.903-2.004-31.806-4.59-47.774-7.628
                                                                c-11.895,13.382-21.786,28.574-29.285,45.446H104.404z"></path>
                                                              <path style="fill:#FFFFFF;"
                                                                d="M185.341,92.768c-16.485-0.259-32.84-1.164-49.196-2.651c-3.685,10.796-6.982,22.691-9.503,35.362
                                                                h58.828V92.703h-0.129V92.768z"></path>
                                                              <path style="fill:#FFFFFF;"
                                                                d="M85.463,61.608c12.024,2.069,24.113,3.814,36.267,5.172c6.206-14.287,13.317-26.57,21.269-36.655
                                                                C121.859,36.913,102.4,47.644,85.463,61.608z"></path>
                                                              <path style="fill:#FFFFFF;"
                                                                d="M185.341,23.79c-15.127,5.301-29.349,21.463-40.663,45.253c13.511,1.099,27.022,1.681,40.663,1.939
                                                                V23.79z"></path>
                                                              <path style="fill:#FFFFFF;"
                                                                d="M278.691,87.79c3.814,11.636,6.853,24.242,9.438,37.818h67.62
                                                                c-7.499-16.873-17.39-32.065-29.285-45.446C310.562,83.265,294.659,85.851,278.691,87.79z"></path>
                                                              <path style="fill:#FFFFFF;"
                                                                d="M307.071,61.608c-16.937-13.899-36.396-24.63-57.471-31.354
                                                                c7.952,10.02,15.063,22.303,21.269,36.655C282.958,65.358,295.046,63.677,307.071,61.608z"></path>
                                                              <path style="fill:#FFFFFF;"
                                                                d="M256.388,90.182c-16.356,1.487-32.84,2.392-49.196,2.651v32.776h58.828
                                                                C263.434,112.873,260.202,100.978,256.388,90.182z"></path>
                                                              <path style="fill:#FFFFFF;"
                                                                d="M207.192,70.982c13.511-0.259,27.152-0.84,40.663-1.939c-11.313-23.725-25.471-39.952-40.663-45.253
                                                                V70.982z"></path>
                                                              <path style="fill:#FFFFFF;"
                                                                d="M288.129,266.99c-2.521,13.447-5.689,26.117-9.438,37.818c15.903,2.004,31.806,4.59,47.774,7.628
            c11.895-13.382,21.786-28.574,29.285-45.446L288.129,266.99L288.129,266.99z"></path>
                                                              <path style="fill:#FFFFFF;"
                                                                d="M207.192,368.743c15.127-5.301,29.349-21.463,40.663-45.253
                                                                c-13.511-1.099-27.022-1.681-40.663-1.939V368.743z"></path>
                                                              <path style="fill:#FFFFFF;"
                                                                d="M207.192,299.766c16.485,0.259,32.84,1.164,49.196,2.65c3.685-10.796,6.982-22.691,9.503-35.362
                                                                h-58.828v32.776h0.129V299.766z"></path>
                                                              <path style="fill:#FFFFFF;"
                                                                d="M307.071,330.925c-12.024-2.069-24.113-3.814-36.267-5.172
                                                                c-6.206,14.287-13.317,26.57-21.269,36.655C270.675,355.62,290.133,344.889,307.071,330.925z"></path>
                                                              <path style="fill:#FFFFFF;"
                                                                d="M185.341,321.552c-13.511,0.259-27.152,0.84-40.663,1.939
                                                                c11.313,23.725,25.471,39.952,40.663,45.253V321.552z"></path>
                                                              <path style="fill:#FFFFFF;"
                                                                d="M36.848,266.99c7.499,16.873,17.39,32.065,29.285,45.447c15.838-3.103,31.741-5.689,47.774-7.628
                                                                c-3.814-11.636-6.853-24.242-9.438-37.689h-67.62V266.99z"></path>
                                                              <path style="fill:#FFFFFF;"
                                                                d="M136.145,302.352c16.356-1.487,32.84-2.392,49.196-2.65v-32.776h-58.828
                                                                C129.099,279.661,132.331,291.556,136.145,302.352z"></path>
                                                              <path style="fill:#FFFFFF;"
                                                                d="M121.729,325.754c-12.024,1.422-24.178,3.103-36.267,5.172
                                                                c16.937,13.899,36.396,24.63,57.471,31.354C134.982,352.388,127.806,340.04,121.729,325.754z"></path>
                                                            </g>
                                                            <g>
                                                              <path style="fill:#194F82;"
                                                                d="M383.03,135.305C355.62,53.204,279.855,0,196.267,0C112.42,0,37.236,53.139,9.826,134.917
            C3.814,140.865,0,149.139,0,158.255v75.96c0,8.792,3.556,16.873,9.244,22.82c29.608,82.812,103.046,135.499,187.022,135.499
            c83.846,0,159.741-53.85,186.44-134.917c6.012-5.947,9.826-14.222,9.826-23.337v-75.96
                                                                C392.533,149.269,388.913,141.188,383.03,135.305z
                                                                M355.685,125.543h-67.62c-2.521-13.446-5.689-26.117-9.438-37.818
                                                                c15.903-2.004,31.806-4.59,47.774-7.628C338.295,93.479,348.25,108.735,355.685,125.543z
                                                                M307.071,61.608
            c-12.024,2.069-24.113,3.814-36.267,5.172c-6.077-14.287-13.317-26.57-21.269-36.655C270.675,36.913,290.133,47.644,307.071,61.608
                                                                z
                                                                M207.192,23.79c15.127,5.301,29.349,21.463,40.663,45.253c-13.511,1.099-27.152,1.681-40.663,1.939V23.79z
                                                                M207.063,92.768h0.065
                                                                c16.485-0.259,32.84-1.164,49.196-2.651c3.685,10.796,6.982,22.691,9.503,35.362h-58.828V92.768H207.063z
                                                                M185.341,23.79v47.192
                                                                c-13.511-0.259-27.152-0.84-40.663-1.939C155.992,45.253,170.214,29.156,185.341,23.79z
                                                                M185.277,92.768v32.776h-58.699
                                                                c2.521-12.671,5.818-24.566,9.503-35.362C152.436,91.669,168.921,92.574,185.277,92.768z
                                                                M142.933,30.125
            c-7.952,10.02-15.063,22.303-21.269,36.655c-12.024-1.422-24.178-3.103-36.267-5.172C102.4,47.644,121.859,36.913,142.933,30.125z
            M66.133,80.097c15.838,3.103,31.741,5.689,47.774,7.628c-3.814,11.636-6.853,24.242-9.438,37.818h-67.62
                                                                C44.283,108.735,54.238,93.479,66.133,80.097z
                                                                M36.848,266.99h67.62c2.521,13.447,5.689,26.117,9.438,37.689
                                                                c-15.903,2.004-31.806,4.59-47.774,7.628C54.238,299.055,44.283,283.798,36.848,266.99z
                                                                M85.463,330.925
            c12.024-2.069,24.113-3.814,36.267-5.172c6.206,14.287,13.317,26.57,21.269,36.655C121.859,355.62,102.4,344.889,85.463,330.925z
            M185.341,368.743c-15.127-5.301-29.349-21.463-40.663-45.253c13.511-1.099,27.152-1.681,40.663-1.939V368.743z
                                                                M185.471,299.766
                                                                h-0.065c-16.485,0.259-32.84,1.164-49.196,2.65c-3.685-10.796-6.982-22.691-9.503-35.362h58.828v32.711H185.471z
                                                                M207.192,368.743
                                                                v-47.192c13.511,0.259,27.152,0.84,40.663,1.939C236.541,347.281,222.319,363.378,207.192,368.743z
                                                                M207.257,299.766V266.99h58.699
                                                                c-2.521,12.671-5.818,24.566-9.503,35.362C240.097,300.865,223.612,299.96,207.257,299.766z
                                                                M249.6,362.408
            c7.952-10.02,15.063-22.303,21.269-36.655c12.024,1.422,24.178,3.103,36.267,5.172C290.133,344.889,270.675,355.62,249.6,362.408z
            M326.4,312.436c-15.838-3.103-31.741-5.689-47.774-7.628c3.814-11.636,6.853-24.242,9.438-37.818h67.62
                                                                C348.25,283.798,338.295,299.055,326.4,312.436z
                                                                M359.822,245.204H32.711c-6.012,0-10.925-4.848-10.925-10.925v-75.96
                                                                c0-6.012,4.848-10.925,10.925-10.925h327.111c6.012,0,10.925,4.848,10.925,10.925v75.96h0.065
                                                                C370.747,240.291,365.899,245.204,359.822,245.204z"></path>
                                                              <polygon style="fill:#194F82;" points="120.76,202.085 109.899,168.21
                                                                94.836,168.21 83.911,202.085 72.986,168.21 56.889,168.21
                                                                75.895,224.259 92.057,224.259 102.4,193.745 112.679,224.259
                                                                128.905,224.259 147.911,168.21 131.685,168.21 "></polygon>
                                                              <polygon style="fill:#194F82;" points="214.562,202.15 203.701,168.275
                                                                188.638,168.275 177.713,202.15 166.853,168.275 150.691,168.275
                                                                169.697,224.259 185.859,224.259 196.267,193.81 206.481,224.323
                                                                222.707,224.323 241.713,168.275 225.487,168.275 "></polygon>
                                                              <polygon style="fill:#194F82;" points="308.493,202.085 297.568,168.21
                                                                282.505,168.21 271.58,202.085 260.719,168.21 244.558,168.21
                                                                263.564,224.259 279.725,224.259 290.069,193.745 300.347,224.259
                                                                316.574,224.259 335.58,168.21 319.354,168.21 "></polygon> </g>
                                                            <g>
                                                              <path style="fill:#56ACE0;"
                                                                d="M270.675,326.141c0.129-0.065,0.323-0.259,0.453-0.323c-0.065,0-0.259,0-0.323,0
                                                                C270.739,325.947,270.739,326.012,270.675,326.141z"></path>
                                                              <path style="fill:#56ACE0;"
                                                                d="M121.406,325.754c0.129,0.065,0.323,0.259,0.453,0.323c-0.065-0.129-0.065-0.259-0.129-0.388
                                                                C121.6,325.754,121.471,325.754,121.406,325.754z"></path>
                                                              <path style="fill:#56ACE0;"
                                                                d="M271.127,66.78c-0.129-0.065-0.323-0.259-0.453-0.323c0.065,0.129,0.065,0.259,0.129,0.388
                                                                C270.933,66.78,271.063,66.78,271.127,66.78z"></path>
                                                              <path style="fill:#56ACE0;"
                                                                d="M121.859,66.392c-0.129,0.065-0.323,0.259-0.453,0.323c0.065,0,0.259,0,0.323,0
                                                                C121.794,66.586,121.794,66.521,121.859,66.392z"></path>
                                                              <path style="fill:#56ACE0;"
                                                                d="M70.723,266.99c7.24,14.933,16.743,28.38,28.057,39.887c5.042-0.776,10.02-1.552,15.127-2.133
                                                                c-3.814-11.636-6.853-24.242-9.438-37.689H70.723V266.99z"></path>
                                                              <path style="fill:#56ACE0;"
                                                                d="M70.723,266.99L70.723,266.99L70.723,266.99z"></path>
                                                              <path style="fill:#56ACE0;"
                                                                d="M185.277,266.99h-58.699c2.521,12.671,5.818,24.566,9.503,35.362
                                                                c16.356-1.487,32.84-2.392,49.196-2.65V266.99z"></path>
                                                              <path style="fill:#56ACE0;"
                                                                d="M288.129,267.055v-0.065c-2.521,13.447-5.689,26.117-9.438,37.818
                                                                c5.042,0.646,10.02,1.422,15.127,2.133c11.313-11.507,20.816-24.954,28.057-39.887H288.129z"></path>
                                                              <path style="fill:#56ACE0;"
                                                                d="M144.743,69.107c13.511,1.099,27.152,1.681,40.663,1.939V44.154
                                                                c-10.279,0.84-20.234,2.844-29.802,5.947C151.725,55.725,148.04,61.996,144.743,69.107z"></path>
                                                              <path style="fill:#56ACE0;"
                                                                d="M207.192,348.444c10.279-0.84,20.234-2.844,29.802-5.947c3.814-5.624,7.499-11.895,10.796-19.006
                                                                c-13.511-1.099-27.152-1.681-40.663-1.939v26.893H207.192z"></path>
                                                              <path style="fill:#56ACE0;"
                                                                d="M207.192,299.766c16.485,0.259,32.84,1.164,49.196,2.65c3.814-10.796,6.982-22.691,9.568-35.362
                                                                h-58.828v32.711H207.192z"></path>
                                                              <path style="fill:#56ACE0;"
                                                                d="M207.257,92.768v32.776h58.699c-2.521-12.671-5.818-24.566-9.503-35.362
                                                                C240.097,91.669,223.612,92.574,207.257,92.768z"></path>
                                                              <path style="fill:#56ACE0;"
                                                                d="M236.994,50.036c-9.568-3.103-19.523-5.107-29.802-5.947v26.893
                                                                c13.511-0.259,27.152-0.84,40.663-1.939C244.493,62.061,240.808,55.725,236.994,50.036z"></path>
                                                              <path style="fill:#56ACE0;"
                                                                d="M155.539,342.497c9.568,3.103,19.523,5.107,29.802,5.947v-26.893
                                                                c-13.576,0.259-27.152,0.84-40.663,1.939C148.04,330.473,151.79,336.808,155.539,342.497z"></path>
                                                              <path style="fill:#56ACE0;"
                                                                d="M321.81,125.608v-0.065c-7.24-14.933-16.743-28.38-28.057-39.887
                                                                c-5.042,0.776-10.02,1.552-15.127,2.133c3.814,11.636,6.853,24.242,9.438,37.818H321.81z"></path>
                                                              <path style="fill:#56ACE0;"
                                                                d="M104.404,125.543c2.521-13.446,5.689-26.117,9.438-37.818c-5.042-0.646-10.02-1.422-15.127-2.133
            c-11.313,11.507-20.816,24.954-28.057,39.887h33.745C104.404,125.479,104.404,125.543,104.404,125.543z"></path>
                                                              <path style="fill:#56ACE0;"
                                                                d="M126.578,125.543h58.828V92.768c-16.485-0.259-32.84-1.164-49.196-2.651
                                                                C132.331,100.978,129.099,112.873,126.578,125.543z"></path> </g> </svg>
                                                        </a> </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <!--[if (mso)|(IE)]></td><![endif]-->
                                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table id="u_content_text_3" style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                      width="100%" cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td class="v-container-padding-padding"
                                            style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px
                                            30px;font-family:arial,helvetica,sans-serif;" align="left">
                                            <div class="v-font-size" style="color: #ffffff; line-height: 140%; text-align: center;
                                              word-wrap: break-word;">
                                              <p style="font-size: 14px; line-height: 140%;">Club 306</p>
                                              <p style="font-size: 14px; line-height: 140%;">12 allée Ledru Rollin</p>
                                              <p style="font-size: 14px; line-height: 140%;">93320 Les Pavillons sous Bois</p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (!mso)&(!IE)]><!--></div>
                                  <!--<![endif]--> </div>
                              </div>
                              <!--[if (mso)|(IE)]></td><![endif]-->
                              <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                          </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table><![endif]--> </td>
                    </tr>
                  </tbody>
                </table>
                <!--[if mso]></div><![endif]-->
                <!--[if IE]></div><![endif]-->
              </body>
            </html>
`
}

const removeCar = (
  firstName: string,
  lastName: string,
  color: string,
  immatriculation: string,
  finition: string,
  model: string,
  mine: string,
  reason: string,
) => {
  return `<!DOCTYPE html>
  <html>
    <head>
      <!--[if gte mso 9]>
                          <xml>
                            <o:OfficeDocumentSettings>
                              <o:AllowPNG/>
                              <o:PixelsPerInch>96</o:PixelsPerInch>
                            </o:OfficeDocumentSettings>
                          </xml>
                          <![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
      <title></title>
      <style type="text/css">
                                @media only screen and (min-width: 620px) {
                            .u-row {
                              width: 600px !important;
                            }
                            .u-row .u-col {
                              vertical-align: top;
                            }
                          
                            .u-row .u-col-100 {
                              width: 600px !important;
                            }
                          
                          }
                          
                          @media (max-width: 620px) {
                            .u-row-container {
                              max-width: 100% !important;
                              padding-left: 0px !important;
                              padding-right: 0px !important;
                            }
                            .u-row .u-col {
                              min-width: 320px !important;
                              max-width: 100% !important;
                              display: block !important;
                            }
                            .u-row {
                              width: 100% !important;
                            }
                            .u-col {
                              width: 100% !important;
                            }
                            .u-col > div {
                              margin: 0 auto;
                            }
                          }
                          body {
                            margin: 0;
                            padding: 0;
                          }
                          
                          table,
                          tr,
                          td {
                            vertical-align: top;
                            border-collapse: collapse;
                          }
                          
                          p {
                            margin: 0;
                          }
                          
                          .ie-container table,
                          .mso-container table {
                            table-layout: fixed;
                          }
                          
                          * {
                            line-height: inherit;
                          }
                          
                          a[x-apple-data-detectors='true'] {
                            color: inherit !important;
                            text-decoration: none !important;
                          }
                          
                          table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_2 .v-src-width { width: auto !important; } #u_content_image_2 .v-src-max-width { max-width: 35% !important; } #u_content_menu_1 .v-padding { padding: 5px 15px !important; } #u_content_text_5 .v-container-padding-padding { padding: 52px 10px 56px !important; } #u_content_heading_3 .v-container-padding-padding { padding: 20px 15px 0px 10px !important; } #u_content_heading_5 .v-font-size { font-size: 22px !important; } #u_content_image_5 .v-src-width { width: auto !important; } #u_content_image_5 .v-src-max-width { max-width: 90% !important; } #u_content_text_4 .v-container-padding-padding { padding: 30px 15px 10px !important; } #u_content_image_1 .v-container-padding-padding { padding: 20px 10px !important; } #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 65% !important; } #u_content_heading_7 .v-font-size { font-size: 22px !important; } #u_content_heading_9 .v-font-size { font-size: 17px !important; } #u_content_button_1 .v-size-width { width: 53% !important; } #u_content_text_3 .v-container-padding-padding { padding: 10px 20px 30px !important; } }
                              </style>
      <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Lobster+Two:400,700&amp;display=swap" rel="stylesheet"
        type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&amp;display=swap" rel="stylesheet"
        type="text/css">
      <!--<![endif]-->
    </head>
    <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color:
      #e7e7e7;color: #000000">
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace:
        0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color:
        #e7e7e7;width:100%" cellspacing="0" cellpadding="0">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap:
                  break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                  <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color:
                    transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #516874;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display:
                      table-cell;vertical-align: top;">
                      <div style="background-color: #516874;height: 100%;width: 100% !important;border-radius:
                        0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid
                          transparent;border-left: 0px solid transparent;border-right: 0px solid
                          transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px;
                          -moz-border-radius: 0px;"><!--<![endif]-->
                          <table id="u_content_image_2" style="font-family:arial,helvetica,sans-serif;"
                            role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px
                                  10px;font-family:arial,helvetica,sans-serif;" align="left">
                                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tbody>
                                      <tr>
                                        <td style="padding-right: 0px;padding-left: 0px;" align="center"> <img
                                            src="https://www.club306.fr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoClub306.3a02f592.png&amp;w=256&amp;q=75"
                                            alt="Club 306 Logo" title="Club 306 Logo" style="outline:
                                            none;text-decoration: none;-ms-interpolation-mode: bicubic;clear:
                                            both;display: inline-block !important;border: none;height: auto;float:
                                            none;width: 25%;max-width: 145px;" class="v-src-width v-src-max-width"
                                            width="145" border="0" align="middle"> </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!--></div>
                        <!--<![endif]--> </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                </div>
              </div>
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap:
                  break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                  <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-image:
                    url('images/image-6.png');background-repeat: no-repeat;background-position: center
                    top;background-color: transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-image: url('images/image-6.png');background-repeat: no-repeat;background-position: center top;background-color: transparent;"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display:
                      table-cell;vertical-align: top;">
                      <div style="height: 100%;width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid
                          transparent;border-left: 0px solid transparent;border-right: 0px solid
                          transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                          <!--[if (!mso)&(!IE)]><!--></div>
                        <!--<![endif]--> </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                </div>
              </div>
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap:
                  break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                  <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color:
                    transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #516874;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display:
                      table-cell;vertical-align: top;">
                      <div style="background-color: #516874;height: 100%;width: 100% !important;border-radius:
                        0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid
                          transparent;border-left: 0px solid transparent;border-right: 0px solid
                          transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px;
                          -moz-border-radius: 0px;"><!--<![endif]-->
                          <table id="u_content_heading_7" style="font-family:arial,helvetica,sans-serif;"
                            role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px
                                  0px;font-family:arial,helvetica,sans-serif;" align="left">
                                  <h1 class="v-font-size" style="margin: 0px; color: #ffffff; line-height: 140%;
                                    text-align: center; word-wrap: break-word; font-family: arial
                                    black,AvenirNext-Heavy,avant garde,arial; font-size: 26px; "><strong>${firstName}
                                      ${lastName}</strong></h1>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table id="u_content_heading_9" style="font-family:arial,helvetica,sans-serif;"
                            role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px
                                  0px;font-family:arial,helvetica,sans-serif;" align="left">
                                  <h1 class="v-font-size" style="margin: 0px; color: #ffffff; line-height: 140%;
                                    text-align: center; word-wrap: break-word; font-family: 'Montserrat',sans-serif;
                                    font-size: 20px; ">a supprimé cette 306</h1>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <p><br>
                                  </p>
                                </td>
                                <td valign="top"><br>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%"
                            cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px
                                  20px;font-family:arial,helvetica,sans-serif;" align="center"><b><font color="#ffffff">Immatriculation</font></b></td>
                                <td valign="top" align="center"><font color="#ffffff">${immatriculation}</font></td>
                              </tr>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px
                                  20px;font-family:arial,helvetica,sans-serif;" align="center"><b><font color="#ffffff">Mine</font></b></td>
                                <td valign="top" align="center"><font color="#ffffff">${mine}</font></td>
                              </tr>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px
                                  20px;font-family:arial,helvetica,sans-serif;" align="center"><b><font color="#ffffff">Couleur</font></b></td>
                                <td valign="top" align="center"><font color="#ffffff">${color}</font></td>
                              </tr>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px
                                  20px;font-family:arial,helvetica,sans-serif;" align="center"><b><font color="#ffffff">Finition</font></b></td>
                                <td valign="top" align="center"><font color="#ffffff">${finition}</font></td>
                              </tr>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px
                                  20px;font-family:arial,helvetica,sans-serif;" align="center"><b><font color="#ffffff">Modèle</font></b></td>
                                <td valign="top" align="center"><font color="#ffffff">${model}</font></td>
                              </tr>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px
                                  20px;font-family:arial,helvetica,sans-serif;" align="center"><b><font color="#ffffff">Raison</font></b></td>
                                <td valign="top" align="center"><font color="#ffffff">${reason}</font></td>
                              </tr>
                            </tbody>
                          </table>
                          <table id="u_content_button_1" style="font-family:arial,helvetica,sans-serif;"
                            role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px
                                  30px;font-family:arial,helvetica,sans-serif;" align="left">
                                  <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
                                  <div align="center">
                                    <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.unlayer.com" style="height:38px; v-text-anchor:middle; width:173px;" arcsize="13%"  stroke="f" fillcolor="#00c1ed"><w:anchorlock/><center style="color:#FFFFFF;font-family:arial,helvetica,sans-serif;"><![endif]-->
                                    <!--[if mso]></center></v:roundrect><![endif]--> </div>
                                  <br>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%"
                            cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                                  align="left">
                                  <table style="border-collapse: collapse;table-layout: fixed;border-spacing:
                                    0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px
                                    solid #555555;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%" width="100%"
                                    height="0px" cellspacing="0" cellpadding="0" border="0" align="center">
                                    <tbody>
                                      <tr style="vertical-align: top">
                                        <td style="word-break: break-word;border-collapse: collapse
                                          !important;vertical-align: top;font-size: 0px;line-height:
                                          0px;mso-line-height-rule: exactly;-ms-text-size-adjust:
                                          100%;-webkit-text-size-adjust: 100%"> <span></span> <br>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!--></div>
                        <!--<![endif]--> </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                </div>
              </div>
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap:
                  break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                  <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color:
                    transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #516874;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display:
                      table-cell;vertical-align: top;">
                      <div style="background-color: #516874;height: 100%;width: 100% !important;border-radius:
                        0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid
                          transparent;border-left: 0px solid transparent;border-right: 0px solid
                          transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px;
                          -moz-border-radius: 0px;"><!--<![endif]-->
                          <table style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%"
                            cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px
                                  10px;font-family:arial,helvetica,sans-serif;" align="left">
                                  <div align="center">
                                    <div style="display: table; max-width:167px;">
                                      <!--[if (mso)|(IE)]><table width="167" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:147px;"><tr><![endif]-->
                                      <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                      <table style="width: 48px !important;height: 48px !important;display:
                                        inline-block;border-collapse: collapse;table-layout: fixed;border-spacing:
                                        0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right:
                                        5px" width="48" height="48" cellspacing="0" cellpadding="0" border="0"
                                        align="left">
                                        <tbody>
                                          <tr style="vertical-align: top">
                                            <td style="word-break: break-word;border-collapse: collapse
                                              !important;vertical-align: top" valign="middle" align="left"> <a
                                                href="https://www.facebook.com/club306france" title="Facebook du club 306"
                                                target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px"
                                                  height="48px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1
                                                    0 24 5Z"></path><path fill="#fff"
  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path></svg>
                                              </a> <br>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if (mso)|(IE)]></td><![endif]-->
                                      <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                      <table style="width: 48px !important;height: 48px !important;display:
                                        inline-block;border-collapse: collapse;table-layout: fixed;border-spacing:
                                        0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right:
                                        5px" width="48" height="48" cellspacing="0" cellpadding="0" border="0"
                                        align="left">
                                        <tbody>
                                          <tr style="vertical-align: top">
                                            <td style="word-break: break-word;border-collapse: collapse
                                              !important;vertical-align: top" valign="middle" align="left"> <a
                                                href="https://www.instagram.com/club306officielfrance/" title="Instagram
                                                du club 306" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px"
                                                  height="48px"><path fill="#304ffe"
                                                    d="M41.67,13.48c-0.4,0.26-0.97,0.5-1.21,0.77c-0.09,0.09-0.14,0.19-0.12,0.29v1.03l-0.3,1.01l-0.3,1l-0.33,1.1
  l-0.68,2.25l-0.66,2.22l-0.5,1.67c0,0.26-0.01,0.52-0.03,0.77c-0.07,0.96-0.27,1.88-0.59,2.74c-0.19,0.53-0.42,1.04-0.7,1.52
  c-0.1,0.19-0.22,0.38-0.34,0.56c-0.4,0.63-0.88,1.21-1.41,1.72c-0.41,0.41-0.86,0.79-1.35,1.11c0,0,0,0-0.01,0
  c-0.08,0.07-0.17,0.13-0.27,0.18c-0.31,0.21-0.64,0.39-0.98,0.55c-0.23,0.12-0.46,0.22-0.7,0.31c-0.05,0.03-0.11,0.05-0.16,0.07
  c-0.57,0.27-1.23,0.45-1.89,0.54c-0.04,0.01-0.07,0.01-0.11,0.02c-0.4,0.07-0.79,0.13-1.19,0.16c-0.18,0.02-0.37,0.03-0.55,0.03
  l-0.71-0.04l-3.42-0.18c0-0.01-0.01,0-0.01,0l-1.72-0.09c-0.13,0-0.27,0-0.4-0.01c-0.54-0.02-1.06-0.08-1.58-0.19
                                                    c-0.01,0-0.01,0-0.01,0c-0.95-0.18-1.86-0.5-2.71-0.93c-0.47-0.24-0.93-0.51-1.36-0.82c-0.18-0.13-0.35-0.27-0.52-0.42
  c-0.48-0.4-0.91-0.83-1.31-1.27c-0.06-0.06-0.11-0.12-0.16-0.18c-0.06-0.06-0.12-0.13-0.17-0.19c-0.38-0.48-0.7-0.97-0.96-1.49
  c-0.24-0.46-0.43-0.95-0.58-1.49c-0.06-0.19-0.11-0.37-0.15-0.57c-0.01-0.01-0.02-0.03-0.02-0.05c-0.1-0.41-0.19-0.84-0.24-1.27
  c-0.06-0.33-0.09-0.66-0.09-1c-0.02-0.13-0.02-0.27-0.02-0.4l1.91-2.95l1.87-2.88l0.85-1.31l0.77-1.18l0.26-0.41v-1.03
  c0.02-0.23,0.03-0.47,0.02-0.69c-0.01-0.7-0.15-1.38-0.38-2.03c-0.22-0.69-0.53-1.34-0.85-1.94c-0.38-0.69-0.78-1.31-1.11-1.87
  C14,7.4,13.66,6.73,13.75,6.26C14.47,6.09,15.23,6,16,6h16c4.18,0,7.78,2.6,9.27,6.26C41.43,12.65,41.57,13.06,41.67,13.48z"></path><path
                                                    fill="#4928f4"
                                                    d="M42,16v0.27l-1.38,0.8l-0.88,0.51l-0.97,0.56l-1.94,1.13l-1.9,1.1l-1.94,1.12l-0.77,0.45
  c0,0.48-0.12,0.92-0.34,1.32c-0.31,0.58-0.83,1.06-1.49,1.47c-0.67,0.41-1.49,0.74-2.41,0.98c0,0,0-0.01-0.01,0
                                                    c-3.56,0.92-8.42,0.5-10.78-1.26c-0.66-0.49-1.12-1.09-1.32-1.78c-0.06-0.23-0.09-0.48-0.09-0.73v-7.19
  c0.01-0.15-0.09-0.3-0.27-0.45c-0.54-0.43-1.81-0.84-3.23-1.25c-1.11-0.31-2.3-0.62-3.3-0.92c-0.79-0.24-1.46-0.48-1.86-0.71
  c0.18-0.35,0.39-0.7,0.61-1.03c1.4-2.05,3.54-3.56,6.02-4.13C14.47,6.09,15.23,6,16,6h10.8c5.37,0.94,10.32,3.13,14.47,6.26
  c0.16,0.39,0.3,0.8,0.4,1.22c0.18,0.66,0.29,1.34,0.32,2.05C42,15.68,42,15.84,42,16z"></path><path fill="#6200ea"
                                                    d="M42,16v4.41l-0.22,0.68l-0.75,2.33l-0.78,2.4l-0.41,1.28l-0.38,1.19l-0.37,1.13l-0.36,1.12l-0.19,0.59
  l-0.25,0.78c0,0.76-0.02,1.43-0.07,2c-0.01,0.06-0.02,0.12-0.02,0.18c-0.06,0.53-0.14,0.98-0.27,1.36
  c-0.01,0.06-0.03,0.12-0.05,0.17c-0.26,0.72-0.65,1.18-1.23,1.48c-0.14,0.08-0.3,0.14-0.47,0.2c-0.53,0.18-1.2,0.27-2.02,0.32
  c-0.6,0.04-1.29,0.05-2.07,0.05H31.4l-1.19-0.05L30,37.61l-2.17-0.09l-2.2-0.09l-7.25-0.3l-1.88-0.08h-0.26
  c-0.78-0.01-1.45-0.06-2.03-0.14c-0.84-0.13-1.49-0.35-1.98-0.68c-0.7-0.45-1.11-1.11-1.35-2.03c-0.06-0.22-0.11-0.45-0.14-0.7
  c-0.1-0.58-0.15-1.25-0.18-2c0-0.15,0-0.3-0.01-0.46c-0.01-0.01,0-0.01,0-0.01v-0.58c-0.01-0.29-0.01-0.59-0.01-0.9l0.05-1.61
  l0.03-1.15l0.04-1.34v-0.19l0.07-2.46l0.07-2.46l0.07-2.31l0.06-2.27l0.02-0.6c0-0.31-1.05-0.49-2.22-0.64
                                                    c-0.93-0.12-1.95-0.23-2.56-0.37c0.05-0.23,0.1-0.46,0.16-0.68c0.18-0.72,0.45-1.4,0.79-2.05c0.18-0.35,0.39-0.7,0.61-1.03
  c2.16-0.95,4.41-1.69,6.76-2.17c2.06-0.43,4.21-0.66,6.43-0.66c7.36,0,14.16,2.49,19.54,6.69c0.52,0.4,1.03,0.83,1.53,1.28
                                                    C42,15.68,42,15.84,42,16z"></path><path fill="#673ab7"
                                                    d="M42,18.37v4.54l-0.55,1.06l-1.05,2.05l-0.56,1.08l-0.51,0.99l-0.22,0.43c0,0.31,0,0.61-0.02,0.9
  c0,0.43-0.02,0.84-0.05,1.22c-0.04,0.45-0.1,0.86-0.16,1.24c-0.15,0.79-0.36,1.47-0.66,2.03c-0.04,0.07-0.08,0.14-0.12,0.2
  c-0.11,0.18-0.24,0.35-0.38,0.51c-0.18,0.22-0.38,0.41-0.61,0.57c-0.34,0.26-0.74,0.47-1.2,0.63c-0.57,0.21-1.23,0.35-2.01,0.43
  c-0.51,0.05-1.07,0.08-1.68,0.08l-0.42,0.02l-2.08,0.12h-0.01L27.5,36.6l-2.25,0.13l-3.1,0.18l-3.77,0.22l-0.55,0.03
                                                    c-0.51,0-0.99-0.03-1.45-0.09c-0.05-0.01-0.09-0.02-0.14-0.02c-0.68-0.11-1.3-0.29-1.86-0.54c-0.68-0.3-1.27-0.7-1.77-1.18
  c-0.44-0.43-0.82-0.92-1.13-1.47c-0.07-0.13-0.14-0.25-0.2-0.39c-0.3-0.59-0.54-1.25-0.72-1.97c-0.03-0.12-0.06-0.25-0.08-0.38
  c-0.06-0.23-0.11-0.47-0.14-0.72c-0.11-0.64-0.17-1.32-0.2-2.03v-0.01c-0.01-0.29-0.02-0.57-0.02-0.87l-0.49-1.17l-0.07-0.18
  L9.5,25.99L8.75,24.2l-0.12-0.29l-0.72-1.73l-0.8-1.93c0,0,0,0-0.01,0L6.29,18.3L6,17.59V16c0-0.63,0.06-1.25,0.17-1.85
                                                    c0.05-0.23,0.1-0.46,0.16-0.68c0.85-0.49,1.74-0.94,2.65-1.34c2.08-0.93,4.31-1.62,6.62-2.04c1.72-0.31,3.51-0.48,5.32-0.48
  c7.31,0,13.94,2.65,19.12,6.97c0.2,0.16,0.39,0.32,0.58,0.49C41.09,17.48,41.55,17.91,42,18.37z"></path><path
                                                    fill="#8e24aa"
                                                    d="M42,21.35v5.14l-0.57,1.19l-1.08,2.25l-0.01,0.03c0,0.43-0.02,0.82-0.05,1.17c-0.1,1.15-0.38,1.88-0.84,2.33
  c-0.33,0.34-0.74,0.53-1.25,0.63c-0.03,0.01-0.07,0.01-0.1,0.02c-0.16,0.03-0.33,0.05-0.51,0.05c-0.62,0.06-1.35,0.02-2.19-0.04
  c-0.09,0-0.19-0.01-0.29-0.02c-0.61-0.04-1.26-0.08-1.98-0.11c-0.39-0.01-0.8-0.02-1.22-0.02h-0.02l-1.01,0.08h-0.01l-2.27,0.16
  l-2.59,0.2l-0.38,0.03l-3.03,0.22l-1.57,0.12l-1.55,0.11c-0.27,0-0.53,0-0.79-0.01c0,0-0.01-0.01-0.01,0
  c-1.13-0.02-2.14-0.09-3.04-0.26c-0.83-0.14-1.56-0.36-2.18-0.69c-0.64-0.31-1.17-0.75-1.6-1.31c-0.41-0.55-0.71-1.24-0.9-2.07
  c0-0.01,0-0.01,0-0.01c-0.14-0.67-0.22-1.45-0.22-2.33l-0.15-0.27L9.7,26.35l-0.13-0.22L9.5,25.99l-0.93-1.65l-0.46-0.83
  l-0.58-1.03l-1-1.79L6,19.75v-3.68c0.88-0.58,1.79-1.09,2.73-1.55c1.14-0.58,2.32-1.07,3.55-1.47c1.34-0.44,2.74-0.79,4.17-1.02
  c1.45-0.24,2.94-0.36,4.47-0.36c6.8,0,13.04,2.43,17.85,6.47c0.22,0.17,0.43,0.36,0.64,0.54c0.84,0.75,1.64,1.56,2.37,2.41
                                                    C41.86,21.18,41.94,21.26,42,21.35z"></path><path fill="#c2185b"
                                                    d="M42,24.71v7.23c-0.24-0.14-0.57-0.31-0.98-0.49c-0.22-0.11-0.47-0.22-0.73-0.32
  c-0.38-0.17-0.79-0.33-1.25-0.49c-0.1-0.04-0.2-0.07-0.31-0.1c-0.18-0.07-0.37-0.13-0.56-0.19c-0.59-0.18-1.24-0.35-1.92-0.5
  c-0.26-0.05-0.53-0.1-0.8-0.14c-0.87-0.15-1.8-0.24-2.77-0.25c-0.08-0.01-0.17-0.01-0.25-0.01l-2.57,0.02l-3.5,0.02h-0.01
                                                    l-7.49,0.06c-2.38,0-3.84,0.57-4.72,0.8c0,0-0.01,0-0.01,0.01c-0.93,0.24-1.22,0.09-1.3-1.54c-0.02-0.45-0.03-1.03-0.03-1.74
  l-0.56-0.43l-0.98-0.74l-0.6-0.46l-0.12-0.09L8.88,24.1l-0.25-0.19l-0.52-0.4l-0.96-0.72L6,21.91v-3.4
                                                    c0.1-0.08,0.19-0.15,0.29-0.21c1.45-1,3-1.85,4.64-2.54c1.46-0.62,3-1.11,4.58-1.46c0.43-0.09,0.87-0.18,1.32-0.24
  c1.33-0.23,2.7-0.34,4.09-0.34c6.01,0,11.53,2.09,15.91,5.55c0.66,0.52,1.3,1.07,1.9,1.66c0.82,0.78,1.59,1.61,2.3,2.49
                                                    c0.14,0.18,0.28,0.36,0.42,0.55C41.64,24.21,41.82,24.46,42,24.71z"></path><path
                                                    fill="#d81b60"
                                                    d="M42,28.72V32c0,0.65-0.06,1.29-0.18,1.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.22,0.05-0.47,0.05-0.75,0.01
  c-0.63-0.11-1.37-0.44-2.17-0.87c-0.04-0.01-0.08-0.03-0.11-0.05c-0.25-0.13-0.51-0.27-0.77-0.43c-0.53-0.29-1.09-0.61-1.65-0.91
  c-0.12-0.06-0.24-0.12-0.35-0.18c-0.64-0.33-1.3-0.63-1.96-0.86c0,0,0,0-0.01,0c-0.14-0.05-0.29-0.1-0.44-0.14
  c-0.57-0.16-1.15-0.26-1.71-0.26l-1.1-0.32l-4.87-1.41c0,0,0,0-0.01,0l-2.99-0.87h-0.01l-1.3-0.38c-3.76,0-6.07,1.6-7.19,0.99
  c-0.44-0.23-0.7-0.81-0.79-1.95c-0.03-0.32-0.04-0.68-0.04-1.1l-1.17-0.57l-0.05-0.02h-0.01l-0.84-0.42L9.7,26.35l-0.07-0.03
  l-0.17-0.09L7.5,25.28L6,24.55v-3.43c0.17-0.15,0.35-0.29,0.53-0.43c0.19-0.15,0.38-0.29,0.57-0.44c0.01,0,0.01,0,0.01,0
                                                    c1.18-0.85,2.43-1.6,3.76-2.22c1.55-0.74,3.2-1.31,4.91-1.68c0.25-0.06,0.51-0.12,0.77-0.16c1.42-0.27,2.88-0.41,4.37-0.41
  c5.27,0,10.11,1.71,14.01,4.59c1.13,0.84,2.18,1.77,3.14,2.78c0.79,0.83,1.52,1.73,2.18,2.67c0.05,0.07,0.1,0.14,0.15,0.2
                                                    c0.37,0.54,0.71,1.09,1.03,1.66C41.64,28.02,41.82,28.37,42,28.72z"></path><path
                                                    fill="#f50057"
                                                    d="M41.82,33.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.19,0.37-0.4,0.72-0.63,1.06c-0.14,0.21-0.29,0.41-0.44,0.6
  c-0.36-0.14-0.89-0.34-1.54-0.56c0,0,0,0,0-0.01c-0.49-0.17-1.05-0.35-1.65-0.52c-0.17-0.05-0.34-0.1-0.52-0.15
  c-0.71-0.19-1.45-0.36-2.17-0.46c-0.6-0.1-1.19-0.16-1.74-0.16l-0.46-0.13h-0.01l-2.42-0.7l-1.49-0.43l-1.66-0.48h-0.01l-0.54-0.15
  l-6.53-1.88l-1.88-0.54l-1.4-0.33l-2.28-0.54l-0.28-0.07c0,0,0,0-0.01,0l-2.29-0.53c0-0.01,0-0.01,0-0.01l-0.41-0.09l-0.21-0.05
  l-1.67-0.39l-0.19-0.05l-1.42-1.17L6,27.9v-4.08c0.37-0.36,0.75-0.7,1.15-1.03c0.12-0.11,0.25-0.21,0.38-0.31
                                                    c0.12-0.1,0.25-0.2,0.38-0.3c0.91-0.69,1.87-1.31,2.89-1.84c1.3-0.7,2.68-1.26,4.13-1.66c0.28-0.09,0.56-0.17,0.85-0.23
  c1.64-0.41,3.36-0.62,5.14-0.62c4.47,0,8.63,1.35,12.07,3.66c1.71,1.15,3.25,2.53,4.55,4.1c0.66,0.79,1.26,1.62,1.79,2.5
  c0.05,0.07,0.09,0.13,0.13,0.2c0.32,0.53,0.62,1.08,0.89,1.64c0.25,0.5,0.47,1,0.67,1.52C41.34,32.25,41.6,33.07,41.82,33.91z"></path><path
                                                    fill="#ff1744"
                                                    d="M40.28,37.59c-0.14,0.21-0.29,0.41-0.44,0.6c-0.44,0.55-0.92,1.05-1.46,1.49c-0.47,0.39-0.97,0.74-1.5,1.04
  c-0.2-0.05-0.4-0.11-0.61-0.19c-0.66-0.23-1.35-0.61-1.99-1.01c-0.96-0.61-1.79-1.27-2.16-1.57c-0.14-0.12-0.21-0.18-0.21-0.18
  l-1.7-0.15L30,37.6l-2.2-0.19l-2.28-0.2l-3.37-0.3l-5.34-0.47l-0.02-0.01l-1.88-0.91l-1.9-0.92l-1.53-0.74l-0.33-0.16l-0.41-0.2
  l-1.42-0.69L7.43,31.9l-0.59-0.29L6,31.35v-4.47c0.47-0.56,0.97-1.09,1.5-1.6c0.34-0.32,0.7-0.64,1.07-0.94
                                                    c0.06-0.05,0.12-0.1,0.18-0.14c0.04-0.05,0.09-0.08,0.13-0.1c0.59-0.48,1.21-0.91,1.85-1.3c0.74-0.47,1.52-0.89,2.33-1.24
  c0.87-0.39,1.78-0.72,2.72-0.97c1.63-0.46,3.36-0.7,5.14-0.7c4.08,0,7.85,1.24,10.96,3.37c1.99,1.36,3.71,3.08,5.07,5.07
                                                    c0.45,0.64,0.85,1.32,1.22,2.02c0.13,0.26,0.26,0.52,0.37,0.78c0.12,0.25,0.23,0.5,0.34,0.75c0.21,0.52,0.4,1.04,0.57,1.58
                                                    c0.32,1,0.56,2.02,0.71,3.08C40.21,36.89,40.25,37.24,40.28,37.59z"></path><path
                                                    fill="#ff5722"
                                                    d="M38.39,39.42c0,0.08,0,0.17-0.01,0.26c-0.47,0.39-0.97,0.74-1.5,1.04c-0.22,0.12-0.44,0.24-0.67,0.34
  c-0.23,0.11-0.46,0.21-0.7,0.3c-0.34-0.18-0.8-0.4-1.29-0.61c-0.69-0.31-1.44-0.59-2.02-0.68c-0.14-0.03-0.27-0.04-0.39-0.04
  l-1.64-0.21h-0.02l-2.04-0.27l-2.06-0.27l-0.96-0.12l-7.56-0.98c-0.49,0-1.01-0.03-1.55-0.1c-0.66-0.06-1.35-0.16-2.04-0.3
                                                    c-0.68-0.12-1.37-0.28-2.03-0.45c-0.69-0.16-1.37-0.35-2-0.53c-0.73-0.22-1.41-0.43-1.98-0.62c-0.47-0.15-0.87-0.29-1.18-0.4
  c-0.18-0.43-0.33-0.88-0.44-1.34C6.1,33.66,6,32.84,6,32v-1.67c0.32-0.53,0.67-1.05,1.06-1.54c0.71-0.94,1.52-1.8,2.4-2.56
                                                    c0.03-0.04,0.07-0.07,0.1-0.09l0.01-0.01c0.31-0.28,0.63-0.53,0.97-0.77c0.04-0.04,0.08-0.07,0.12-0.1
  c0.16-0.12,0.33-0.24,0.51-0.35c1.43-0.97,3.01-1.73,4.7-2.24c1.6-0.48,3.29-0.73,5.05-0.73c3.49,0,6.75,1.03,9.47,2.79
                                                    c2.01,1.29,3.74,2.99,5.06,4.98c0.16,0.23,0.31,0.46,0.46,0.7c0.69,1.17,1.26,2.43,1.68,3.75c0.05,0.15,0.09,0.3,0.13,0.46
  c0.08,0.27,0.15,0.55,0.21,0.83c0.02,0.07,0.04,0.14,0.06,0.22c0.14,0.63,0.24,1.29,0.31,1.95c0,0.01,0,0.01,0,0.01
                                                    C38.36,38.22,38.39,38.82,38.39,39.42z"></path><path fill="#ff6f00"
                                                    d="M36.33,39.42c0,0.35-0.02,0.73-0.06,1.11c-0.02,0.18-0.04,0.36-0.06,0.53c-0.23,0.11-0.46,0.21-0.7,0.3
  c-0.45,0.17-0.91,0.31-1.38,0.41c-0.32,0.07-0.65,0.13-0.98,0.16h-0.01c-0.31-0.19-0.67-0.42-1.04-0.68
  c-0.67-0.47-1.37-1-1.93-1.43c-0.01-0.01-0.01-0.01-0.02-0.02c-0.59-0.45-1.01-0.79-1.01-0.79l-1.06,0.04l-2.04,0.07l-0.95,0.04
  l-3.82,0.14l-3.23,0.12c-0.21,0.01-0.46,0.01-0.77,0h-0.01c-0.42-0.01-0.92-0.04-1.47-0.09c-0.64-0.05-1.34-0.11-2.05-0.18
  c-0.69-0.08-1.39-0.16-2.06-0.24c-0.74-0.08-1.44-0.17-2.04-0.25c-0.47-0.06-0.88-0.11-1.21-0.15c-0.28-0.32-0.53-0.65-0.77-1.01
  c-0.36-0.54-0.67-1.11-0.91-1.72c-0.18-0.43-0.33-0.88-0.44-1.34c0.29-0.89,0.67-1.73,1.12-2.54c0.36-0.66,0.78-1.29,1.24-1.89
  c0.45-0.59,0.94-1.14,1.47-1.64v-0.01c0.15-0.15,0.3-0.29,0.45-0.42c0.28-0.26,0.57-0.5,0.87-0.73h0.01
                                                    c0.01-0.02,0.02-0.02,0.03-0.03c0.24-0.19,0.49-0.36,0.74-0.53c1.48-1.01,3.15-1.76,4.95-2.2c1.19-0.29,2.44-0.45,3.73-0.45
  c2.54,0,4.94,0.61,7.05,1.71h0.01c1.81,0.93,3.41,2.21,4.7,3.75c0.71,0.82,1.32,1.72,1.82,2.67c0.35,0.64,0.65,1.31,0.9,1.99
  c0.02,0.06,0.04,0.11,0.06,0.16c0.17,0.5,0.32,1.02,0.45,1.54c0.09,0.37,0.16,0.75,0.22,1.13c0.02,0.12,0.04,0.23,0.05,0.35
                                                    C36.28,37.99,36.33,38.7,36.33,39.42z"></path><path fill="#ff9800"
                                                    d="M34.28,39.42v0.1c0,0.34-0.03,0.77-0.06,1.23c-0.03,0.34-0.06,0.69-0.09,1.02c-0.32,0.07-0.65,0.13-0.98,0.16
  h-0.01C32.76,41.98,32.39,42,32,42h-1.75l-0.38-0.11l-1.97-0.6l-2-0.6l-4.63-1.39l-2-0.6c0,0-0.83,0.33-2,0.72h-0.01
  c-0.45,0.15-0.94,0.31-1.46,0.47c-0.65,0.19-1.34,0.38-2.02,0.53c-0.7,0.16-1.39,0.28-2.01,0.33c-0.19,0.02-0.38,0.03-0.55,0.03
  c-0.56-0.31-1.1-0.68-1.59-1.09c-0.43-0.36-0.83-0.75-1.2-1.18c-0.28-0.32-0.53-0.65-0.77-1.01c0.07-0.45,0.15-0.89,0.27-1.32
  c0.3-1.19,0.77-2.33,1.39-3.37c0.34-0.59,0.72-1.16,1.16-1.69c0.01-0.03,0.04-0.06,0.07-0.08c-0.01-0.01,0-0.01,0-0.01
                                                    c0.13-0.17,0.27-0.33,0.41-0.48c0-0.01,0-0.01,0-0.01c0.41-0.44,0.83-0.86,1.29-1.25c0.16-0.13,0.31-0.26,0.48-0.39
  c0.03-0.03,0.06-0.05,0.1-0.08c2.25-1.72,5.06-2.76,8.09-2.76c3.44,0,6.57,1.29,8.94,3.41c1.14,1.03,2.11,2.26,2.84,3.63
                                                    c0.06,0.1,0.12,0.21,0.17,0.32c0.09,0.18,0.18,0.37,0.26,0.57c0.33,0.72,0.59,1.48,0.77,2.26c0.02,0.08,0.04,0.16,0.06,0.24
                                                    c0.08,0.37,0.15,0.75,0.2,1.13C34.24,38.21,34.28,38.81,34.28,39.42z"></path><path
                                                    fill="#ffc107"
                                                    d="M32.22,39.42c0,0.2-0.01,0.42-0.02,0.65c-0.02,0.37-0.05,0.77-0.1,1.18c-0.02,0.25-0.06,0.5-0.1,0.75h-5.48
  l-1.06-0.17l-4.14-0.66l-0.59-0.09l-1.35-0.22c-0.59,0-1.87,0.26-3.22,0.51c-0.71,0.13-1.43,0.27-2.08,0.36
  c-0.08,0.01-0.16,0.02-0.23,0.03h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.2-0.09-0.4-0.19-0.6-0.3c-0.56-0.31-1.1-0.68-1.59-1.09
  c-0.01-0.12-0.02-0.22-0.02-0.27c0-0.26,0.01-0.51,0.03-0.76c0.04-0.64,0.13-1.26,0.27-1.86c0.22-0.91,0.54-1.79,0.97-2.6
                                                    c0.08-0.17,0.17-0.34,0.27-0.5c0.04-0.08,0.09-0.15,0.13-0.23c0.18-0.29,0.38-0.57,0.58-0.85c0.42-0.55,0.89-1.07,1.39-1.54
  c0.01,0,0.01,0,0.01,0c0.04-0.04,0.08-0.08,0.12-0.11c0.05-0.04,0.09-0.09,0.14-0.12c0.2-0.18,0.4-0.34,0.61-0.49
                                                    c0-0.01,0.01-0.01,0.01-0.01c1.89-1.41,4.23-2.24,6.78-2.24c1.98,0,3.82,0.5,5.43,1.38h0.01c1.38,0.76,2.58,1.79,3.53,3.03
  c0.37,0.48,0.7,0.99,0.98,1.53h0.01c0.05,0.1,0.1,0.2,0.15,0.3c0.3,0.59,0.54,1.21,0.72,1.85h0.01c0.01,0.05,0.03,0.1,0.04,0.15
  c0.12,0.43,0.22,0.87,0.29,1.32c0.01,0.09,0.02,0.19,0.03,0.28C32.19,38.43,32.22,38.92,32.22,39.42z"></path><path
                                                    fill="#ffd54f"
                                                    d="M30.17,39.31c0,0.16,0,0.33-0.02,0.49v0.01c0,0.01,0,0.01,0,0.01c-0.02,0.72-0.12,1.43-0.28,2.07
  c0,0.04-0.01,0.07-0.03,0.11h-4.67l-3.85-0.83l-0.51-0.11l-0.08,0.02l-4.27,0.88L16.27,42H16c-0.64,0-1.27-0.06-1.88-0.18
                                                    c-0.09-0.02-0.18-0.04-0.27-0.06h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.02-0.11-0.04-0.22-0.05-0.33
  c-0.07-0.43-0.1-0.88-0.1-1.33c0-0.17,0-0.34,0.01-0.51c0.03-0.54,0.11-1.07,0.23-1.58c0.08-0.38,0.19-0.75,0.32-1.1
                                                    c0.11-0.31,0.24-0.61,0.38-0.9c0.12-0.25,0.26-0.49,0.4-0.73c0.14-0.23,0.29-0.45,0.45-0.67c0.4-0.55,0.87-1.06,1.39-1.51
  c0.3-0.26,0.63-0.51,0.97-0.73c1.46-0.96,3.21-1.52,5.1-1.52c0.37,0,0.73,0.02,1.08,0.07h0.02c1.07,0.12,2.07,0.42,2.99,0.87
  c0.01,0,0.01,0,0.01,0c1.45,0.71,2.68,1.78,3.58,3.1c0.15,0.22,0.3,0.46,0.43,0.7c0.11,0.19,0.21,0.39,0.3,0.59
                                                    c0.14,0.31,0.27,0.64,0.38,0.97h0.01c0.11,0.37,0.21,0.74,0.28,1.13v0.01C30.11,38.16,30.17,38.73,30.17,39.31z"></path><path
                                                    fill="#ffe082"
                                                    d="M28.11,39.52v0.03c0,0.59-0.07,1.17-0.21,1.74c-0.05,0.24-0.12,0.48-0.21,0.71h-4.48l-2.29-0.63L18.63,42H16
  c-0.64,0-1.27-0.06-1.88-0.18c-0.02-0.03-0.03-0.06-0.04-0.09c-0.14-0.43-0.25-0.86-0.3-1.31c-0.04-0.29-0.06-0.59-0.06-0.9
  c0-0.12,0-0.25,0.02-0.37c0.01-0.47,0.08-0.93,0.2-1.37c0.06-0.3,0.15-0.59,0.27-0.87c0.04-0.14,0.1-0.27,0.17-0.4
                                                    c0.15-0.34,0.33-0.67,0.53-0.99c0.22-0.32,0.46-0.62,0.73-0.9c0.32-0.36,0.68-0.69,1.09-0.96c0.7-0.51,1.5-0.89,2.37-1.1
  c0.58-0.16,1.19-0.24,1.82-0.24c2,0,3.79,0.8,5.09,2.09c0.05,0.05,0.11,0.11,0.16,0.18h0.01c0.14,0.15,0.27,0.3,0.4,0.47
                                                    c0.37,0.47,0.68,0.98,0.92,1.54c0.12,0.26,0.22,0.53,0.3,0.81c0.01,0.04,0.02,0.07,0.03,0.11c0.14,0.49,0.23,1,0.25,1.53
                                                    C28.1,39.2,28.11,39.36,28.11,39.52z"></path><path fill="#ffecb3"
                                                    d="M26.06,39.52c0,0.41-0.05,0.8-0.16,1.17c-0.1,0.4-0.25,0.78-0.44,1.14c-0.03,0.06-0.1,0.17-0.1,0.17h-8.88
  c-0.01-0.01-0.02-0.03-0.02-0.04c-0.12-0.19-0.22-0.38-0.3-0.59c-0.2-0.46-0.32-0.96-0.36-1.48c-0.02-0.12-0.02-0.25-0.02-0.37
  c0-0.06,0-0.13,0.01-0.19c0.01-0.44,0.07-0.86,0.19-1.25c0.1-0.36,0.23-0.69,0.4-1.01c0,0,0.01-0.01,0.01-0.02
  c0.12-0.21,0.25-0.42,0.4-0.62c0.49-0.66,1.14-1.2,1.89-1.55c0.01,0,0.01,0,0.01,0c0.24-0.12,0.49-0.22,0.75-0.29c0,0,0,0,0.01,0
  c0.46-0.14,0.96-0.21,1.47-0.21c0.59,0,1.16,0.09,1.68,0.28c0.19,0.05,0.37,0.13,0.55,0.22c0,0,0,0,0.01,0
                                                    c0.86,0.41,1.59,1.05,2.09,1.85c0.1,0.15,0.19,0.31,0.27,0.48c0.04,0.07,0.08,0.15,0.11,0.22c0.23,0.52,0.37,1.09,0.41,1.69
                                                    c0.01,0.05,0.01,0.1,0.01,0.16C26.06,39.36,26.06,39.44,26.06,39.52z"></path><g><path
                                                      fill="none" stroke="#fff" stroke-linecap="round"
                                                      stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"
                                                      d="M30,11H18c-3.9,0-7,3.1-7,7v12c0,3.9,3.1,7,7,7h12c3.9,0,7-3.1,7-7V18C37,14.1,33.9,11,30,11z"></path><circle
                                                      cx="31" cy="16" r="1" fill="#fff"></circle></g><g><circle cx="24"
                                                      cy="24" r="6" fill="none" stroke="#fff" stroke-linecap="round"
                                                      stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></circle></g></svg>
                                              </a> <br>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if (mso)|(IE)]></td><![endif]-->
                                      <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                      <table style="width: 48px !important;height: 48px !important;display:
                                        inline-block;border-collapse: collapse;table-layout: fixed;border-spacing:
                                        0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right:
                                        5px" width="32" height="32" cellspacing="0" cellpadding="0" border="0"
                                        align="left">
                                        <tbody>
                                          <tr style="vertical-align: top">
                                            <td style="word-break: break-word;border-collapse: collapse
                                              !important;vertical-align: top" valign="middle" align="left"> <a
                                                href="https://club306.fr/" title="site web du club 306" target="_blank">
                                                <!--?xml version="1.0" encoding="iso-8859-1"?-->
                                                <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                                                <svg height="48px" width="48px" version="1.1" id="Layer_1"
                                                  xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                                  viewBox="0 0 392.533 392.533" xml:space="preserve">
                                                  <path style="fill:#FFC10D;"
                                                    d="M359.822,147.329H32.711c-6.012,0-10.925,4.848-10.925,10.925v75.96
                                                    c0,6.012,4.848,10.925,10.925,10.925h327.111c6.012,0,10.925-4.848,10.925-10.925v-75.96
                                                    C370.747,152.242,365.834,147.329,359.822,147.329z"></path>
                                                  <g>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M104.404,125.543c2.521-13.446,5.689-26.117,9.438-37.818c-15.903-2.004-31.806-4.59-47.774-7.628
                                                      c-11.895,13.382-21.786,28.574-29.285,45.446H104.404z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M185.341,92.768c-16.485-0.259-32.84-1.164-49.196-2.651c-3.685,10.796-6.982,22.691-9.503,35.362
                                                      h58.828V92.703h-0.129V92.768z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M85.463,61.608c12.024,2.069,24.113,3.814,36.267,5.172c6.206-14.287,13.317-26.57,21.269-36.655
                                                      C121.859,36.913,102.4,47.644,85.463,61.608z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M185.341,23.79c-15.127,5.301-29.349,21.463-40.663,45.253c13.511,1.099,27.022,1.681,40.663,1.939
                                                      V23.79z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M278.691,87.79c3.814,11.636,6.853,24.242,9.438,37.818h67.62
                                                      c-7.499-16.873-17.39-32.065-29.285-45.446C310.562,83.265,294.659,85.851,278.691,87.79z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M307.071,61.608c-16.937-13.899-36.396-24.63-57.471-31.354
                                                      c7.952,10.02,15.063,22.303,21.269,36.655C282.958,65.358,295.046,63.677,307.071,61.608z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M256.388,90.182c-16.356,1.487-32.84,2.392-49.196,2.651v32.776h58.828
                                                      C263.434,112.873,260.202,100.978,256.388,90.182z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M207.192,70.982c13.511-0.259,27.152-0.84,40.663-1.939c-11.313-23.725-25.471-39.952-40.663-45.253
                                                      V70.982z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M288.129,266.99c-2.521,13.447-5.689,26.117-9.438,37.818c15.903,2.004,31.806,4.59,47.774,7.628
  c11.895-13.382,21.786-28.574,29.285-45.446L288.129,266.99L288.129,266.99z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M207.192,368.743c15.127-5.301,29.349-21.463,40.663-45.253
                                                      c-13.511-1.099-27.022-1.681-40.663-1.939V368.743z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M207.192,299.766c16.485,0.259,32.84,1.164,49.196,2.65c3.685-10.796,6.982-22.691,9.503-35.362
                                                      h-58.828v32.776h0.129V299.766z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M307.071,330.925c-12.024-2.069-24.113-3.814-36.267-5.172
                                                      c-6.206,14.287-13.317,26.57-21.269,36.655C270.675,355.62,290.133,344.889,307.071,330.925z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M185.341,321.552c-13.511,0.259-27.152,0.84-40.663,1.939
                                                      c11.313,23.725,25.471,39.952,40.663,45.253V321.552z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M36.848,266.99c7.499,16.873,17.39,32.065,29.285,45.447c15.838-3.103,31.741-5.689,47.774-7.628
                                                      c-3.814-11.636-6.853-24.242-9.438-37.689h-67.62V266.99z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M136.145,302.352c16.356-1.487,32.84-2.392,49.196-2.65v-32.776h-58.828
                                                      C129.099,279.661,132.331,291.556,136.145,302.352z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M121.729,325.754c-12.024,1.422-24.178,3.103-36.267,5.172
                                                      c16.937,13.899,36.396,24.63,57.471,31.354C134.982,352.388,127.806,340.04,121.729,325.754z"></path>
                                                  </g>
                                                  <g>
                                                    <path style="fill:#194F82;"
                                                      d="M383.03,135.305C355.62,53.204,279.855,0,196.267,0C112.42,0,37.236,53.139,9.826,134.917
  C3.814,140.865,0,149.139,0,158.255v75.96c0,8.792,3.556,16.873,9.244,22.82c29.608,82.812,103.046,135.499,187.022,135.499
  c83.846,0,159.741-53.85,186.44-134.917c6.012-5.947,9.826-14.222,9.826-23.337v-75.96
                                                      C392.533,149.269,388.913,141.188,383.03,135.305z
                                                      M355.685,125.543h-67.62c-2.521-13.446-5.689-26.117-9.438-37.818
                                                      c15.903-2.004,31.806-4.59,47.774-7.628C338.295,93.479,348.25,108.735,355.685,125.543z
                                                      M307.071,61.608
  c-12.024,2.069-24.113,3.814-36.267,5.172c-6.077-14.287-13.317-26.57-21.269-36.655C270.675,36.913,290.133,47.644,307.071,61.608
                                                      z
                                                      M207.192,23.79c15.127,5.301,29.349,21.463,40.663,45.253c-13.511,1.099-27.152,1.681-40.663,1.939V23.79z
                                                      M207.063,92.768h0.065
                                                      c16.485-0.259,32.84-1.164,49.196-2.651c3.685,10.796,6.982,22.691,9.503,35.362h-58.828V92.768H207.063z
                                                      M185.341,23.79v47.192
                                                      c-13.511-0.259-27.152-0.84-40.663-1.939C155.992,45.253,170.214,29.156,185.341,23.79z
                                                      M185.277,92.768v32.776h-58.699
                                                      c2.521-12.671,5.818-24.566,9.503-35.362C152.436,91.669,168.921,92.574,185.277,92.768z
                                                      M142.933,30.125
  c-7.952,10.02-15.063,22.303-21.269,36.655c-12.024-1.422-24.178-3.103-36.267-5.172C102.4,47.644,121.859,36.913,142.933,30.125z
  M66.133,80.097c15.838,3.103,31.741,5.689,47.774,7.628c-3.814,11.636-6.853,24.242-9.438,37.818h-67.62
                                                      C44.283,108.735,54.238,93.479,66.133,80.097z
                                                      M36.848,266.99h67.62c2.521,13.447,5.689,26.117,9.438,37.689
                                                      c-15.903,2.004-31.806,4.59-47.774,7.628C54.238,299.055,44.283,283.798,36.848,266.99z
                                                      M85.463,330.925
  c12.024-2.069,24.113-3.814,36.267-5.172c6.206,14.287,13.317,26.57,21.269,36.655C121.859,355.62,102.4,344.889,85.463,330.925z
  M185.341,368.743c-15.127-5.301-29.349-21.463-40.663-45.253c13.511-1.099,27.152-1.681,40.663-1.939V368.743z
                                                      M185.471,299.766
                                                      h-0.065c-16.485,0.259-32.84,1.164-49.196,2.65c-3.685-10.796-6.982-22.691-9.503-35.362h58.828v32.711H185.471z
                                                      M207.192,368.743
                                                      v-47.192c13.511,0.259,27.152,0.84,40.663,1.939C236.541,347.281,222.319,363.378,207.192,368.743z
                                                      M207.257,299.766V266.99h58.699
                                                      c-2.521,12.671-5.818,24.566-9.503,35.362C240.097,300.865,223.612,299.96,207.257,299.766z
                                                      M249.6,362.408
  c7.952-10.02,15.063-22.303,21.269-36.655c12.024,1.422,24.178,3.103,36.267,5.172C290.133,344.889,270.675,355.62,249.6,362.408z
  M326.4,312.436c-15.838-3.103-31.741-5.689-47.774-7.628c3.814-11.636,6.853-24.242,9.438-37.818h67.62
                                                      C348.25,283.798,338.295,299.055,326.4,312.436z
                                                      M359.822,245.204H32.711c-6.012,0-10.925-4.848-10.925-10.925v-75.96
                                                      c0-6.012,4.848-10.925,10.925-10.925h327.111c6.012,0,10.925,4.848,10.925,10.925v75.96h0.065
                                                      C370.747,240.291,365.899,245.204,359.822,245.204z"></path>
                                                    <polygon style="fill:#194F82;" points="120.76,202.085 109.899,168.21
                                                      94.836,168.21 83.911,202.085 72.986,168.21 56.889,168.21
                                                      75.895,224.259 92.057,224.259 102.4,193.745 112.679,224.259
                                                      128.905,224.259 147.911,168.21 131.685,168.21 "></polygon>
                                                    <polygon style="fill:#194F82;" points="214.562,202.15 203.701,168.275
                                                      188.638,168.275 177.713,202.15 166.853,168.275 150.691,168.275
                                                      169.697,224.259 185.859,224.259 196.267,193.81 206.481,224.323
                                                      222.707,224.323 241.713,168.275 225.487,168.275 "></polygon>
                                                    <polygon style="fill:#194F82;" points="308.493,202.085 297.568,168.21
                                                      282.505,168.21 271.58,202.085 260.719,168.21 244.558,168.21
                                                      263.564,224.259 279.725,224.259 290.069,193.745 300.347,224.259
                                                      316.574,224.259 335.58,168.21 319.354,168.21 "></polygon> </g>
                                                  <g>
                                                    <path style="fill:#56ACE0;"
                                                      d="M270.675,326.141c0.129-0.065,0.323-0.259,0.453-0.323c-0.065,0-0.259,0-0.323,0
                                                      C270.739,325.947,270.739,326.012,270.675,326.141z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M121.406,325.754c0.129,0.065,0.323,0.259,0.453,0.323c-0.065-0.129-0.065-0.259-0.129-0.388
                                                      C121.6,325.754,121.471,325.754,121.406,325.754z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M271.127,66.78c-0.129-0.065-0.323-0.259-0.453-0.323c0.065,0.129,0.065,0.259,0.129,0.388
                                                      C270.933,66.78,271.063,66.78,271.127,66.78z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M121.859,66.392c-0.129,0.065-0.323,0.259-0.453,0.323c0.065,0,0.259,0,0.323,0
                                                      C121.794,66.586,121.794,66.521,121.859,66.392z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M70.723,266.99c7.24,14.933,16.743,28.38,28.057,39.887c5.042-0.776,10.02-1.552,15.127-2.133
                                                      c-3.814-11.636-6.853-24.242-9.438-37.689H70.723V266.99z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M70.723,266.99L70.723,266.99L70.723,266.99z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M185.277,266.99h-58.699c2.521,12.671,5.818,24.566,9.503,35.362
                                                      c16.356-1.487,32.84-2.392,49.196-2.65V266.99z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M288.129,267.055v-0.065c-2.521,13.447-5.689,26.117-9.438,37.818
                                                      c5.042,0.646,10.02,1.422,15.127,2.133c11.313-11.507,20.816-24.954,28.057-39.887H288.129z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M144.743,69.107c13.511,1.099,27.152,1.681,40.663,1.939V44.154
                                                      c-10.279,0.84-20.234,2.844-29.802,5.947C151.725,55.725,148.04,61.996,144.743,69.107z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M207.192,348.444c10.279-0.84,20.234-2.844,29.802-5.947c3.814-5.624,7.499-11.895,10.796-19.006
                                                      c-13.511-1.099-27.152-1.681-40.663-1.939v26.893H207.192z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M207.192,299.766c16.485,0.259,32.84,1.164,49.196,2.65c3.814-10.796,6.982-22.691,9.568-35.362
                                                      h-58.828v32.711H207.192z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M207.257,92.768v32.776h58.699c-2.521-12.671-5.818-24.566-9.503-35.362
                                                      C240.097,91.669,223.612,92.574,207.257,92.768z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M236.994,50.036c-9.568-3.103-19.523-5.107-29.802-5.947v26.893
                                                      c13.511-0.259,27.152-0.84,40.663-1.939C244.493,62.061,240.808,55.725,236.994,50.036z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M155.539,342.497c9.568,3.103,19.523,5.107,29.802,5.947v-26.893
                                                      c-13.576,0.259-27.152,0.84-40.663,1.939C148.04,330.473,151.79,336.808,155.539,342.497z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M321.81,125.608v-0.065c-7.24-14.933-16.743-28.38-28.057-39.887
                                                      c-5.042,0.776-10.02,1.552-15.127,2.133c3.814,11.636,6.853,24.242,9.438,37.818H321.81z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M104.404,125.543c2.521-13.446,5.689-26.117,9.438-37.818c-5.042-0.646-10.02-1.422-15.127-2.133
  c-11.313,11.507-20.816,24.954-28.057,39.887h33.745C104.404,125.479,104.404,125.543,104.404,125.543z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M126.578,125.543h58.828V92.768c-16.485-0.259-32.84-1.164-49.196-2.651
                                                      C132.331,100.978,129.099,112.873,126.578,125.543z"></path> </g> </svg>
                                              </a> </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if (mso)|(IE)]></td><![endif]-->
                                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table id="u_content_text_3" style="font-family:arial,helvetica,sans-serif;" role="presentation"
                            width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px
                                  30px;font-family:arial,helvetica,sans-serif;" align="left">
                                  <div class="v-font-size" style="color: #ffffff; line-height: 140%; text-align: center;
                                    word-wrap: break-word;">
                                    <p style="font-size: 14px; line-height: 140%;">Club 306</p>
                                    <p style="font-size: 14px; line-height: 140%;">12 allée Ledru Rollin</p>
                                    <p style="font-size: 14px; line-height: 140%;">93320 Les Pavillons sous Bois</p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!--></div>
                        <!--<![endif]--> </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                </div>
              </div>
              <!--[if (mso)|(IE)]></td></tr></table><![endif]--> </td>
          </tr>
        </tbody>
      </table>
      <!--[if mso]></div><![endif]-->
      <!--[if IE]></div><![endif]-->
    </body>
  </html>
`
}

const sendOTP = (otp: number) => {
  return `<!DOCTYPE html>
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
        }</style>
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
                                            #00466a;text-decoration:none;font-weight:600">Code Temporaire</a> </div>
                                        <p style="font-size:1.1em">Hello,</p>
                                        <p>Voici le code pour compléter la procédure de changement du mot de passe. Ce
                                          code est valide pendant 5 minutes</p>
                                        <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0
                                          10px;color: #fff;border-radius: 4px;">${otp}</h2>
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
xlink:href="data:img/png;base64,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"></image></svg>
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
`
}

const updateCarInfo = (
  firstName: string,
  lastName: string,
  type: string,
  oldValue: string,
  newValue: string,
  immatriculation: string,
) => {
  return `<!DOCTYPE html>
  <html>
    <head>
      <!--[if gte mso 9]>
                          <xml>
                            <o:OfficeDocumentSettings>
                              <o:AllowPNG/>
                              <o:PixelsPerInch>96</o:PixelsPerInch>
                            </o:OfficeDocumentSettings>
                          </xml>
                          <![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
      <title></title>
      <style type="text/css">
                                @media only screen and (min-width: 620px) {
                            .u-row {
                              width: 600px !important;
                            }
                            .u-row .u-col {
                              vertical-align: top;
                            }
                          
                            .u-row .u-col-100 {
                              width: 600px !important;
                            }
                          
                          }
                          
                          @media (max-width: 620px) {
                            .u-row-container {
                              max-width: 100% !important;
                              padding-left: 0px !important;
                              padding-right: 0px !important;
                            }
                            .u-row .u-col {
                              min-width: 320px !important;
                              max-width: 100% !important;
                              display: block !important;
                            }
                            .u-row {
                              width: 100% !important;
                            }
                            .u-col {
                              width: 100% !important;
                            }
                            .u-col > div {
                              margin: 0 auto;
                            }
                          }
                          body {
                            margin: 0;
                            padding: 0;
                          }
                          
                          table,
                          tr,
                          td {
                            vertical-align: top;
                            border-collapse: collapse;
                          }
                          
                          p {
                            margin: 0;
                          }
                          
                          .ie-container table,
                          .mso-container table {
                            table-layout: fixed;
                          }
                          
                          * {
                            line-height: inherit;
                          }
                          
                          a[x-apple-data-detectors='true'] {
                            color: inherit !important;
                            text-decoration: none !important;
                          }
                          
                          table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_2 .v-src-width { width: auto !important; } #u_content_image_2 .v-src-max-width { max-width: 35% !important; } #u_content_menu_1 .v-padding { padding: 5px 15px !important; } #u_content_text_5 .v-container-padding-padding { padding: 52px 10px 56px !important; } #u_content_heading_3 .v-container-padding-padding { padding: 20px 15px 0px 10px !important; } #u_content_heading_5 .v-font-size { font-size: 22px !important; } #u_content_image_5 .v-src-width { width: auto !important; } #u_content_image_5 .v-src-max-width { max-width: 90% !important; } #u_content_text_4 .v-container-padding-padding { padding: 30px 15px 10px !important; } #u_content_image_1 .v-container-padding-padding { padding: 20px 10px !important; } #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 65% !important; } #u_content_heading_7 .v-font-size { font-size: 22px !important; } #u_content_heading_9 .v-font-size { font-size: 17px !important; } #u_content_button_1 .v-size-width { width: 53% !important; } #u_content_text_3 .v-container-padding-padding { padding: 10px 20px 30px !important; } }
                              </style>
      <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Lobster+Two:400,700&amp;display=swap" rel="stylesheet"
        type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&amp;display=swap" rel="stylesheet"
        type="text/css">
      <!--<![endif]-->
    </head>
    <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color:
      #e7e7e7;color: #000000">
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace:
        0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color:
        #e7e7e7;width:100%" cellspacing="0" cellpadding="0">
        <tbody>
          <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap:
                  break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                  <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color:
                    transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #516874;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display:
                      table-cell;vertical-align: top;">
                      <div style="background-color: #516874;height: 100%;width: 100% !important;border-radius:
                        0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid
                          transparent;border-left: 0px solid transparent;border-right: 0px solid
                          transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px;
                          -moz-border-radius: 0px;"><!--<![endif]-->
                          <table id="u_content_image_2" style="font-family:arial,helvetica,sans-serif;"
                            role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px
                                  10px;font-family:arial,helvetica,sans-serif;" align="left">
                                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tbody>
                                      <tr>
                                        <td style="padding-right: 0px;padding-left: 0px;" align="center"> <img
                                            src="https://www.club306.fr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoClub306.3a02f592.png&amp;w=256&amp;q=75"
                                            alt="Club 306 Logo" title="Club 306 Logo" style="outline:
                                            none;text-decoration: none;-ms-interpolation-mode: bicubic;clear:
                                            both;display: inline-block !important;border: none;height: auto;float:
                                            none;width: 25%;max-width: 145px;" class="v-src-width v-src-max-width"
                                            width="145" border="0" align="middle"> </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!--></div>
                        <!--<![endif]--> </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                </div>
              </div>
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap:
                  break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                  <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-image:
                    url('images/image-6.png');background-repeat: no-repeat;background-position: center
                    top;background-color: transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-image: url('images/image-6.png');background-repeat: no-repeat;background-position: center top;background-color: transparent;"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display:
                      table-cell;vertical-align: top;">
                      <div style="height: 100%;width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid
                          transparent;border-left: 0px solid transparent;border-right: 0px solid
                          transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                          <!--[if (!mso)&(!IE)]><!--></div>
                        <!--<![endif]--> </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                </div>
              </div>
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap:
                  break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                  <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color:
                    transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #516874;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display:
                      table-cell;vertical-align: top;">
                      <div style="background-color: #516874;height: 100%;width: 100% !important;border-radius:
                        0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid
                          transparent;border-left: 0px solid transparent;border-right: 0px solid
                          transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px;
                          -moz-border-radius: 0px;"><!--<![endif]-->
                          <table id="u_content_heading_7" style="font-family:arial,helvetica,sans-serif;"
                            role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px
                                  0px;font-family:arial,helvetica,sans-serif;" align="left">
                                  <h1 class="v-font-size" style="margin: 0px; color: #ffffff; line-height: 140%;
                                    text-align: center; word-wrap: break-word; font-family: arial
                                    black,AvenirNext-Heavy,avant garde,arial; font-size: 26px; "><strong>${firstName}
                                      ${lastName}</strong></h1>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table id="u_content_heading_9" style="font-family:arial,helvetica,sans-serif;"
                            role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px
                                  0px;font-family:arial,helvetica,sans-serif;" align="left">
                                  <h1 class="v-font-size" style="margin: 0px; color: #ffffff; line-height: 140%;
                                    text-align: center; word-wrap: break-word; font-family: 'Montserrat',sans-serif;
                                    font-size: 20px; ">a apporté des modifications sur ${type}</h1>
                                  <h1 class="v-font-size" style="margin: 0px; color: #ffffff; line-height: 140%;
                                    text-align: center; word-wrap: break-word; font-family: 'Montserrat',sans-serif;
                                    font-size: 20px; ">Il a changé ces valeurs pour son véhicule immatriculé ${immatriculation}</h1>
                                  <p><br>
                                  </p>
                                </td>
                                <td valign="top"><br>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%"
                            cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px
                                  20px;font-family:arial,helvetica,sans-serif;" align="center"><b><font color="#ffffff">ancienne
                                      valeur</font></b></td>
                                <td valign="top" align="center"><b><font color="#ffffff">nouvelle valeur</font></b></td>
                              </tr>
                              <tr>
                                <td valign="top" align="center"><font color="#ffffff">${oldValue}</font></td>
                                <td valign="top" align="center"><font color="#ffffff">${newValue}</font></td>
                              </tr>
                            </tbody>
                          </table>
                          <table id="u_content_button_1" style="font-family:arial,helvetica,sans-serif;"
                            role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px
                                  30px;font-family:arial,helvetica,sans-serif;" align="left">
                                  <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
                                  <div align="center">
                                    <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.unlayer.com" style="height:38px; v-text-anchor:middle; width:173px;" arcsize="13%"  stroke="f" fillcolor="#00c1ed"><w:anchorlock/><center style="color:#FFFFFF;font-family:arial,helvetica,sans-serif;"><![endif]-->
                                    <!--[if mso]></center></v:roundrect><![endif]--> </div>
                                  <br>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%"
                            cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                                  align="left">
                                  <table style="border-collapse: collapse;table-layout: fixed;border-spacing:
                                    0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px
                                    solid #555555;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%" width="100%"
                                    height="0px" cellspacing="0" cellpadding="0" border="0" align="center">
                                    <tbody>
                                      <tr style="vertical-align: top">
                                        <td style="word-break: break-word;border-collapse: collapse
                                          !important;vertical-align: top;font-size: 0px;line-height:
                                          0px;mso-line-height-rule: exactly;-ms-text-size-adjust:
                                          100%;-webkit-text-size-adjust: 100%"> <span></span> <br>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!--></div>
                        <!--<![endif]--> </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                </div>
              </div>
              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap:
                  break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                  <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color:
                    transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #516874;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display:
                      table-cell;vertical-align: top;">
                      <div style="background-color: #516874;height: 100%;width: 100% !important;border-radius:
                        0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid
                          transparent;border-left: 0px solid transparent;border-right: 0px solid
                          transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px;
                          -moz-border-radius: 0px;"><!--<![endif]-->
                          <table style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%"
                            cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px
                                  10px;font-family:arial,helvetica,sans-serif;" align="left">
                                  <div align="center">
                                    <div style="display: table; max-width:167px;">
                                      <!--[if (mso)|(IE)]><table width="167" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:147px;"><tr><![endif]-->
                                      <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                      <table style="width: 48px !important;height: 48px !important;display:
                                        inline-block;border-collapse: collapse;table-layout: fixed;border-spacing:
                                        0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right:
                                        5px" width="48" height="48" cellspacing="0" cellpadding="0" border="0"
                                        align="left">
                                        <tbody>
                                          <tr style="vertical-align: top">
                                            <td style="word-break: break-word;border-collapse: collapse
                                              !important;vertical-align: top" valign="middle" align="left"> <a
                                                href="https://www.facebook.com/club306france" title="Facebook du club 306"
                                                target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px"
                                                  height="48px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1
                                                    0 24 5Z"></path><path fill="#fff"
  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path></svg>
                                              </a> <br>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if (mso)|(IE)]></td><![endif]-->
                                      <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                      <table style="width: 48px !important;height: 48px !important;display:
                                        inline-block;border-collapse: collapse;table-layout: fixed;border-spacing:
                                        0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right:
                                        5px" width="48" height="48" cellspacing="0" cellpadding="0" border="0"
                                        align="left">
                                        <tbody>
                                          <tr style="vertical-align: top">
                                            <td style="word-break: break-word;border-collapse: collapse
                                              !important;vertical-align: top" valign="middle" align="left"> <a
                                                href="https://www.instagram.com/club306officielfrance/" title="Instagram
                                                du club 306" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px"
                                                  height="48px"><path fill="#304ffe"
                                                    d="M41.67,13.48c-0.4,0.26-0.97,0.5-1.21,0.77c-0.09,0.09-0.14,0.19-0.12,0.29v1.03l-0.3,1.01l-0.3,1l-0.33,1.1
  l-0.68,2.25l-0.66,2.22l-0.5,1.67c0,0.26-0.01,0.52-0.03,0.77c-0.07,0.96-0.27,1.88-0.59,2.74c-0.19,0.53-0.42,1.04-0.7,1.52
  c-0.1,0.19-0.22,0.38-0.34,0.56c-0.4,0.63-0.88,1.21-1.41,1.72c-0.41,0.41-0.86,0.79-1.35,1.11c0,0,0,0-0.01,0
  c-0.08,0.07-0.17,0.13-0.27,0.18c-0.31,0.21-0.64,0.39-0.98,0.55c-0.23,0.12-0.46,0.22-0.7,0.31c-0.05,0.03-0.11,0.05-0.16,0.07
  c-0.57,0.27-1.23,0.45-1.89,0.54c-0.04,0.01-0.07,0.01-0.11,0.02c-0.4,0.07-0.79,0.13-1.19,0.16c-0.18,0.02-0.37,0.03-0.55,0.03
  l-0.71-0.04l-3.42-0.18c0-0.01-0.01,0-0.01,0l-1.72-0.09c-0.13,0-0.27,0-0.4-0.01c-0.54-0.02-1.06-0.08-1.58-0.19
                                                    c-0.01,0-0.01,0-0.01,0c-0.95-0.18-1.86-0.5-2.71-0.93c-0.47-0.24-0.93-0.51-1.36-0.82c-0.18-0.13-0.35-0.27-0.52-0.42
  c-0.48-0.4-0.91-0.83-1.31-1.27c-0.06-0.06-0.11-0.12-0.16-0.18c-0.06-0.06-0.12-0.13-0.17-0.19c-0.38-0.48-0.7-0.97-0.96-1.49
  c-0.24-0.46-0.43-0.95-0.58-1.49c-0.06-0.19-0.11-0.37-0.15-0.57c-0.01-0.01-0.02-0.03-0.02-0.05c-0.1-0.41-0.19-0.84-0.24-1.27
  c-0.06-0.33-0.09-0.66-0.09-1c-0.02-0.13-0.02-0.27-0.02-0.4l1.91-2.95l1.87-2.88l0.85-1.31l0.77-1.18l0.26-0.41v-1.03
  c0.02-0.23,0.03-0.47,0.02-0.69c-0.01-0.7-0.15-1.38-0.38-2.03c-0.22-0.69-0.53-1.34-0.85-1.94c-0.38-0.69-0.78-1.31-1.11-1.87
  C14,7.4,13.66,6.73,13.75,6.26C14.47,6.09,15.23,6,16,6h16c4.18,0,7.78,2.6,9.27,6.26C41.43,12.65,41.57,13.06,41.67,13.48z"></path><path
                                                    fill="#4928f4"
                                                    d="M42,16v0.27l-1.38,0.8l-0.88,0.51l-0.97,0.56l-1.94,1.13l-1.9,1.1l-1.94,1.12l-0.77,0.45
  c0,0.48-0.12,0.92-0.34,1.32c-0.31,0.58-0.83,1.06-1.49,1.47c-0.67,0.41-1.49,0.74-2.41,0.98c0,0,0-0.01-0.01,0
                                                    c-3.56,0.92-8.42,0.5-10.78-1.26c-0.66-0.49-1.12-1.09-1.32-1.78c-0.06-0.23-0.09-0.48-0.09-0.73v-7.19
  c0.01-0.15-0.09-0.3-0.27-0.45c-0.54-0.43-1.81-0.84-3.23-1.25c-1.11-0.31-2.3-0.62-3.3-0.92c-0.79-0.24-1.46-0.48-1.86-0.71
  c0.18-0.35,0.39-0.7,0.61-1.03c1.4-2.05,3.54-3.56,6.02-4.13C14.47,6.09,15.23,6,16,6h10.8c5.37,0.94,10.32,3.13,14.47,6.26
  c0.16,0.39,0.3,0.8,0.4,1.22c0.18,0.66,0.29,1.34,0.32,2.05C42,15.68,42,15.84,42,16z"></path><path fill="#6200ea"
                                                    d="M42,16v4.41l-0.22,0.68l-0.75,2.33l-0.78,2.4l-0.41,1.28l-0.38,1.19l-0.37,1.13l-0.36,1.12l-0.19,0.59
  l-0.25,0.78c0,0.76-0.02,1.43-0.07,2c-0.01,0.06-0.02,0.12-0.02,0.18c-0.06,0.53-0.14,0.98-0.27,1.36
  c-0.01,0.06-0.03,0.12-0.05,0.17c-0.26,0.72-0.65,1.18-1.23,1.48c-0.14,0.08-0.3,0.14-0.47,0.2c-0.53,0.18-1.2,0.27-2.02,0.32
  c-0.6,0.04-1.29,0.05-2.07,0.05H31.4l-1.19-0.05L30,37.61l-2.17-0.09l-2.2-0.09l-7.25-0.3l-1.88-0.08h-0.26
  c-0.78-0.01-1.45-0.06-2.03-0.14c-0.84-0.13-1.49-0.35-1.98-0.68c-0.7-0.45-1.11-1.11-1.35-2.03c-0.06-0.22-0.11-0.45-0.14-0.7
  c-0.1-0.58-0.15-1.25-0.18-2c0-0.15,0-0.3-0.01-0.46c-0.01-0.01,0-0.01,0-0.01v-0.58c-0.01-0.29-0.01-0.59-0.01-0.9l0.05-1.61
  l0.03-1.15l0.04-1.34v-0.19l0.07-2.46l0.07-2.46l0.07-2.31l0.06-2.27l0.02-0.6c0-0.31-1.05-0.49-2.22-0.64
                                                    c-0.93-0.12-1.95-0.23-2.56-0.37c0.05-0.23,0.1-0.46,0.16-0.68c0.18-0.72,0.45-1.4,0.79-2.05c0.18-0.35,0.39-0.7,0.61-1.03
  c2.16-0.95,4.41-1.69,6.76-2.17c2.06-0.43,4.21-0.66,6.43-0.66c7.36,0,14.16,2.49,19.54,6.69c0.52,0.4,1.03,0.83,1.53,1.28
                                                    C42,15.68,42,15.84,42,16z"></path><path fill="#673ab7"
                                                    d="M42,18.37v4.54l-0.55,1.06l-1.05,2.05l-0.56,1.08l-0.51,0.99l-0.22,0.43c0,0.31,0,0.61-0.02,0.9
  c0,0.43-0.02,0.84-0.05,1.22c-0.04,0.45-0.1,0.86-0.16,1.24c-0.15,0.79-0.36,1.47-0.66,2.03c-0.04,0.07-0.08,0.14-0.12,0.2
  c-0.11,0.18-0.24,0.35-0.38,0.51c-0.18,0.22-0.38,0.41-0.61,0.57c-0.34,0.26-0.74,0.47-1.2,0.63c-0.57,0.21-1.23,0.35-2.01,0.43
  c-0.51,0.05-1.07,0.08-1.68,0.08l-0.42,0.02l-2.08,0.12h-0.01L27.5,36.6l-2.25,0.13l-3.1,0.18l-3.77,0.22l-0.55,0.03
                                                    c-0.51,0-0.99-0.03-1.45-0.09c-0.05-0.01-0.09-0.02-0.14-0.02c-0.68-0.11-1.3-0.29-1.86-0.54c-0.68-0.3-1.27-0.7-1.77-1.18
  c-0.44-0.43-0.82-0.92-1.13-1.47c-0.07-0.13-0.14-0.25-0.2-0.39c-0.3-0.59-0.54-1.25-0.72-1.97c-0.03-0.12-0.06-0.25-0.08-0.38
  c-0.06-0.23-0.11-0.47-0.14-0.72c-0.11-0.64-0.17-1.32-0.2-2.03v-0.01c-0.01-0.29-0.02-0.57-0.02-0.87l-0.49-1.17l-0.07-0.18
  L9.5,25.99L8.75,24.2l-0.12-0.29l-0.72-1.73l-0.8-1.93c0,0,0,0-0.01,0L6.29,18.3L6,17.59V16c0-0.63,0.06-1.25,0.17-1.85
                                                    c0.05-0.23,0.1-0.46,0.16-0.68c0.85-0.49,1.74-0.94,2.65-1.34c2.08-0.93,4.31-1.62,6.62-2.04c1.72-0.31,3.51-0.48,5.32-0.48
  c7.31,0,13.94,2.65,19.12,6.97c0.2,0.16,0.39,0.32,0.58,0.49C41.09,17.48,41.55,17.91,42,18.37z"></path><path
                                                    fill="#8e24aa"
                                                    d="M42,21.35v5.14l-0.57,1.19l-1.08,2.25l-0.01,0.03c0,0.43-0.02,0.82-0.05,1.17c-0.1,1.15-0.38,1.88-0.84,2.33
  c-0.33,0.34-0.74,0.53-1.25,0.63c-0.03,0.01-0.07,0.01-0.1,0.02c-0.16,0.03-0.33,0.05-0.51,0.05c-0.62,0.06-1.35,0.02-2.19-0.04
  c-0.09,0-0.19-0.01-0.29-0.02c-0.61-0.04-1.26-0.08-1.98-0.11c-0.39-0.01-0.8-0.02-1.22-0.02h-0.02l-1.01,0.08h-0.01l-2.27,0.16
  l-2.59,0.2l-0.38,0.03l-3.03,0.22l-1.57,0.12l-1.55,0.11c-0.27,0-0.53,0-0.79-0.01c0,0-0.01-0.01-0.01,0
  c-1.13-0.02-2.14-0.09-3.04-0.26c-0.83-0.14-1.56-0.36-2.18-0.69c-0.64-0.31-1.17-0.75-1.6-1.31c-0.41-0.55-0.71-1.24-0.9-2.07
  c0-0.01,0-0.01,0-0.01c-0.14-0.67-0.22-1.45-0.22-2.33l-0.15-0.27L9.7,26.35l-0.13-0.22L9.5,25.99l-0.93-1.65l-0.46-0.83
  l-0.58-1.03l-1-1.79L6,19.75v-3.68c0.88-0.58,1.79-1.09,2.73-1.55c1.14-0.58,2.32-1.07,3.55-1.47c1.34-0.44,2.74-0.79,4.17-1.02
  c1.45-0.24,2.94-0.36,4.47-0.36c6.8,0,13.04,2.43,17.85,6.47c0.22,0.17,0.43,0.36,0.64,0.54c0.84,0.75,1.64,1.56,2.37,2.41
                                                    C41.86,21.18,41.94,21.26,42,21.35z"></path><path fill="#c2185b"
                                                    d="M42,24.71v7.23c-0.24-0.14-0.57-0.31-0.98-0.49c-0.22-0.11-0.47-0.22-0.73-0.32
  c-0.38-0.17-0.79-0.33-1.25-0.49c-0.1-0.04-0.2-0.07-0.31-0.1c-0.18-0.07-0.37-0.13-0.56-0.19c-0.59-0.18-1.24-0.35-1.92-0.5
  c-0.26-0.05-0.53-0.1-0.8-0.14c-0.87-0.15-1.8-0.24-2.77-0.25c-0.08-0.01-0.17-0.01-0.25-0.01l-2.57,0.02l-3.5,0.02h-0.01
                                                    l-7.49,0.06c-2.38,0-3.84,0.57-4.72,0.8c0,0-0.01,0-0.01,0.01c-0.93,0.24-1.22,0.09-1.3-1.54c-0.02-0.45-0.03-1.03-0.03-1.74
  l-0.56-0.43l-0.98-0.74l-0.6-0.46l-0.12-0.09L8.88,24.1l-0.25-0.19l-0.52-0.4l-0.96-0.72L6,21.91v-3.4
                                                    c0.1-0.08,0.19-0.15,0.29-0.21c1.45-1,3-1.85,4.64-2.54c1.46-0.62,3-1.11,4.58-1.46c0.43-0.09,0.87-0.18,1.32-0.24
  c1.33-0.23,2.7-0.34,4.09-0.34c6.01,0,11.53,2.09,15.91,5.55c0.66,0.52,1.3,1.07,1.9,1.66c0.82,0.78,1.59,1.61,2.3,2.49
                                                    c0.14,0.18,0.28,0.36,0.42,0.55C41.64,24.21,41.82,24.46,42,24.71z"></path><path
                                                    fill="#d81b60"
                                                    d="M42,28.72V32c0,0.65-0.06,1.29-0.18,1.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.22,0.05-0.47,0.05-0.75,0.01
  c-0.63-0.11-1.37-0.44-2.17-0.87c-0.04-0.01-0.08-0.03-0.11-0.05c-0.25-0.13-0.51-0.27-0.77-0.43c-0.53-0.29-1.09-0.61-1.65-0.91
  c-0.12-0.06-0.24-0.12-0.35-0.18c-0.64-0.33-1.3-0.63-1.96-0.86c0,0,0,0-0.01,0c-0.14-0.05-0.29-0.1-0.44-0.14
  c-0.57-0.16-1.15-0.26-1.71-0.26l-1.1-0.32l-4.87-1.41c0,0,0,0-0.01,0l-2.99-0.87h-0.01l-1.3-0.38c-3.76,0-6.07,1.6-7.19,0.99
  c-0.44-0.23-0.7-0.81-0.79-1.95c-0.03-0.32-0.04-0.68-0.04-1.1l-1.17-0.57l-0.05-0.02h-0.01l-0.84-0.42L9.7,26.35l-0.07-0.03
  l-0.17-0.09L7.5,25.28L6,24.55v-3.43c0.17-0.15,0.35-0.29,0.53-0.43c0.19-0.15,0.38-0.29,0.57-0.44c0.01,0,0.01,0,0.01,0
                                                    c1.18-0.85,2.43-1.6,3.76-2.22c1.55-0.74,3.2-1.31,4.91-1.68c0.25-0.06,0.51-0.12,0.77-0.16c1.42-0.27,2.88-0.41,4.37-0.41
  c5.27,0,10.11,1.71,14.01,4.59c1.13,0.84,2.18,1.77,3.14,2.78c0.79,0.83,1.52,1.73,2.18,2.67c0.05,0.07,0.1,0.14,0.15,0.2
                                                    c0.37,0.54,0.71,1.09,1.03,1.66C41.64,28.02,41.82,28.37,42,28.72z"></path><path
                                                    fill="#f50057"
                                                    d="M41.82,33.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.19,0.37-0.4,0.72-0.63,1.06c-0.14,0.21-0.29,0.41-0.44,0.6
  c-0.36-0.14-0.89-0.34-1.54-0.56c0,0,0,0,0-0.01c-0.49-0.17-1.05-0.35-1.65-0.52c-0.17-0.05-0.34-0.1-0.52-0.15
  c-0.71-0.19-1.45-0.36-2.17-0.46c-0.6-0.1-1.19-0.16-1.74-0.16l-0.46-0.13h-0.01l-2.42-0.7l-1.49-0.43l-1.66-0.48h-0.01l-0.54-0.15
  l-6.53-1.88l-1.88-0.54l-1.4-0.33l-2.28-0.54l-0.28-0.07c0,0,0,0-0.01,0l-2.29-0.53c0-0.01,0-0.01,0-0.01l-0.41-0.09l-0.21-0.05
  l-1.67-0.39l-0.19-0.05l-1.42-1.17L6,27.9v-4.08c0.37-0.36,0.75-0.7,1.15-1.03c0.12-0.11,0.25-0.21,0.38-0.31
                                                    c0.12-0.1,0.25-0.2,0.38-0.3c0.91-0.69,1.87-1.31,2.89-1.84c1.3-0.7,2.68-1.26,4.13-1.66c0.28-0.09,0.56-0.17,0.85-0.23
  c1.64-0.41,3.36-0.62,5.14-0.62c4.47,0,8.63,1.35,12.07,3.66c1.71,1.15,3.25,2.53,4.55,4.1c0.66,0.79,1.26,1.62,1.79,2.5
  c0.05,0.07,0.09,0.13,0.13,0.2c0.32,0.53,0.62,1.08,0.89,1.64c0.25,0.5,0.47,1,0.67,1.52C41.34,32.25,41.6,33.07,41.82,33.91z"></path><path
                                                    fill="#ff1744"
                                                    d="M40.28,37.59c-0.14,0.21-0.29,0.41-0.44,0.6c-0.44,0.55-0.92,1.05-1.46,1.49c-0.47,0.39-0.97,0.74-1.5,1.04
  c-0.2-0.05-0.4-0.11-0.61-0.19c-0.66-0.23-1.35-0.61-1.99-1.01c-0.96-0.61-1.79-1.27-2.16-1.57c-0.14-0.12-0.21-0.18-0.21-0.18
  l-1.7-0.15L30,37.6l-2.2-0.19l-2.28-0.2l-3.37-0.3l-5.34-0.47l-0.02-0.01l-1.88-0.91l-1.9-0.92l-1.53-0.74l-0.33-0.16l-0.41-0.2
  l-1.42-0.69L7.43,31.9l-0.59-0.29L6,31.35v-4.47c0.47-0.56,0.97-1.09,1.5-1.6c0.34-0.32,0.7-0.64,1.07-0.94
                                                    c0.06-0.05,0.12-0.1,0.18-0.14c0.04-0.05,0.09-0.08,0.13-0.1c0.59-0.48,1.21-0.91,1.85-1.3c0.74-0.47,1.52-0.89,2.33-1.24
  c0.87-0.39,1.78-0.72,2.72-0.97c1.63-0.46,3.36-0.7,5.14-0.7c4.08,0,7.85,1.24,10.96,3.37c1.99,1.36,3.71,3.08,5.07,5.07
                                                    c0.45,0.64,0.85,1.32,1.22,2.02c0.13,0.26,0.26,0.52,0.37,0.78c0.12,0.25,0.23,0.5,0.34,0.75c0.21,0.52,0.4,1.04,0.57,1.58
                                                    c0.32,1,0.56,2.02,0.71,3.08C40.21,36.89,40.25,37.24,40.28,37.59z"></path><path
                                                    fill="#ff5722"
                                                    d="M38.39,39.42c0,0.08,0,0.17-0.01,0.26c-0.47,0.39-0.97,0.74-1.5,1.04c-0.22,0.12-0.44,0.24-0.67,0.34
  c-0.23,0.11-0.46,0.21-0.7,0.3c-0.34-0.18-0.8-0.4-1.29-0.61c-0.69-0.31-1.44-0.59-2.02-0.68c-0.14-0.03-0.27-0.04-0.39-0.04
  l-1.64-0.21h-0.02l-2.04-0.27l-2.06-0.27l-0.96-0.12l-7.56-0.98c-0.49,0-1.01-0.03-1.55-0.1c-0.66-0.06-1.35-0.16-2.04-0.3
                                                    c-0.68-0.12-1.37-0.28-2.03-0.45c-0.69-0.16-1.37-0.35-2-0.53c-0.73-0.22-1.41-0.43-1.98-0.62c-0.47-0.15-0.87-0.29-1.18-0.4
  c-0.18-0.43-0.33-0.88-0.44-1.34C6.1,33.66,6,32.84,6,32v-1.67c0.32-0.53,0.67-1.05,1.06-1.54c0.71-0.94,1.52-1.8,2.4-2.56
                                                    c0.03-0.04,0.07-0.07,0.1-0.09l0.01-0.01c0.31-0.28,0.63-0.53,0.97-0.77c0.04-0.04,0.08-0.07,0.12-0.1
  c0.16-0.12,0.33-0.24,0.51-0.35c1.43-0.97,3.01-1.73,4.7-2.24c1.6-0.48,3.29-0.73,5.05-0.73c3.49,0,6.75,1.03,9.47,2.79
                                                    c2.01,1.29,3.74,2.99,5.06,4.98c0.16,0.23,0.31,0.46,0.46,0.7c0.69,1.17,1.26,2.43,1.68,3.75c0.05,0.15,0.09,0.3,0.13,0.46
  c0.08,0.27,0.15,0.55,0.21,0.83c0.02,0.07,0.04,0.14,0.06,0.22c0.14,0.63,0.24,1.29,0.31,1.95c0,0.01,0,0.01,0,0.01
                                                    C38.36,38.22,38.39,38.82,38.39,39.42z"></path><path fill="#ff6f00"
                                                    d="M36.33,39.42c0,0.35-0.02,0.73-0.06,1.11c-0.02,0.18-0.04,0.36-0.06,0.53c-0.23,0.11-0.46,0.21-0.7,0.3
  c-0.45,0.17-0.91,0.31-1.38,0.41c-0.32,0.07-0.65,0.13-0.98,0.16h-0.01c-0.31-0.19-0.67-0.42-1.04-0.68
  c-0.67-0.47-1.37-1-1.93-1.43c-0.01-0.01-0.01-0.01-0.02-0.02c-0.59-0.45-1.01-0.79-1.01-0.79l-1.06,0.04l-2.04,0.07l-0.95,0.04
  l-3.82,0.14l-3.23,0.12c-0.21,0.01-0.46,0.01-0.77,0h-0.01c-0.42-0.01-0.92-0.04-1.47-0.09c-0.64-0.05-1.34-0.11-2.05-0.18
  c-0.69-0.08-1.39-0.16-2.06-0.24c-0.74-0.08-1.44-0.17-2.04-0.25c-0.47-0.06-0.88-0.11-1.21-0.15c-0.28-0.32-0.53-0.65-0.77-1.01
  c-0.36-0.54-0.67-1.11-0.91-1.72c-0.18-0.43-0.33-0.88-0.44-1.34c0.29-0.89,0.67-1.73,1.12-2.54c0.36-0.66,0.78-1.29,1.24-1.89
  c0.45-0.59,0.94-1.14,1.47-1.64v-0.01c0.15-0.15,0.3-0.29,0.45-0.42c0.28-0.26,0.57-0.5,0.87-0.73h0.01
                                                    c0.01-0.02,0.02-0.02,0.03-0.03c0.24-0.19,0.49-0.36,0.74-0.53c1.48-1.01,3.15-1.76,4.95-2.2c1.19-0.29,2.44-0.45,3.73-0.45
  c2.54,0,4.94,0.61,7.05,1.71h0.01c1.81,0.93,3.41,2.21,4.7,3.75c0.71,0.82,1.32,1.72,1.82,2.67c0.35,0.64,0.65,1.31,0.9,1.99
  c0.02,0.06,0.04,0.11,0.06,0.16c0.17,0.5,0.32,1.02,0.45,1.54c0.09,0.37,0.16,0.75,0.22,1.13c0.02,0.12,0.04,0.23,0.05,0.35
                                                    C36.28,37.99,36.33,38.7,36.33,39.42z"></path><path fill="#ff9800"
                                                    d="M34.28,39.42v0.1c0,0.34-0.03,0.77-0.06,1.23c-0.03,0.34-0.06,0.69-0.09,1.02c-0.32,0.07-0.65,0.13-0.98,0.16
  h-0.01C32.76,41.98,32.39,42,32,42h-1.75l-0.38-0.11l-1.97-0.6l-2-0.6l-4.63-1.39l-2-0.6c0,0-0.83,0.33-2,0.72h-0.01
  c-0.45,0.15-0.94,0.31-1.46,0.47c-0.65,0.19-1.34,0.38-2.02,0.53c-0.7,0.16-1.39,0.28-2.01,0.33c-0.19,0.02-0.38,0.03-0.55,0.03
  c-0.56-0.31-1.1-0.68-1.59-1.09c-0.43-0.36-0.83-0.75-1.2-1.18c-0.28-0.32-0.53-0.65-0.77-1.01c0.07-0.45,0.15-0.89,0.27-1.32
  c0.3-1.19,0.77-2.33,1.39-3.37c0.34-0.59,0.72-1.16,1.16-1.69c0.01-0.03,0.04-0.06,0.07-0.08c-0.01-0.01,0-0.01,0-0.01
                                                    c0.13-0.17,0.27-0.33,0.41-0.48c0-0.01,0-0.01,0-0.01c0.41-0.44,0.83-0.86,1.29-1.25c0.16-0.13,0.31-0.26,0.48-0.39
  c0.03-0.03,0.06-0.05,0.1-0.08c2.25-1.72,5.06-2.76,8.09-2.76c3.44,0,6.57,1.29,8.94,3.41c1.14,1.03,2.11,2.26,2.84,3.63
                                                    c0.06,0.1,0.12,0.21,0.17,0.32c0.09,0.18,0.18,0.37,0.26,0.57c0.33,0.72,0.59,1.48,0.77,2.26c0.02,0.08,0.04,0.16,0.06,0.24
                                                    c0.08,0.37,0.15,0.75,0.2,1.13C34.24,38.21,34.28,38.81,34.28,39.42z"></path><path
                                                    fill="#ffc107"
                                                    d="M32.22,39.42c0,0.2-0.01,0.42-0.02,0.65c-0.02,0.37-0.05,0.77-0.1,1.18c-0.02,0.25-0.06,0.5-0.1,0.75h-5.48
  l-1.06-0.17l-4.14-0.66l-0.59-0.09l-1.35-0.22c-0.59,0-1.87,0.26-3.22,0.51c-0.71,0.13-1.43,0.27-2.08,0.36
  c-0.08,0.01-0.16,0.02-0.23,0.03h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.2-0.09-0.4-0.19-0.6-0.3c-0.56-0.31-1.1-0.68-1.59-1.09
  c-0.01-0.12-0.02-0.22-0.02-0.27c0-0.26,0.01-0.51,0.03-0.76c0.04-0.64,0.13-1.26,0.27-1.86c0.22-0.91,0.54-1.79,0.97-2.6
                                                    c0.08-0.17,0.17-0.34,0.27-0.5c0.04-0.08,0.09-0.15,0.13-0.23c0.18-0.29,0.38-0.57,0.58-0.85c0.42-0.55,0.89-1.07,1.39-1.54
  c0.01,0,0.01,0,0.01,0c0.04-0.04,0.08-0.08,0.12-0.11c0.05-0.04,0.09-0.09,0.14-0.12c0.2-0.18,0.4-0.34,0.61-0.49
                                                    c0-0.01,0.01-0.01,0.01-0.01c1.89-1.41,4.23-2.24,6.78-2.24c1.98,0,3.82,0.5,5.43,1.38h0.01c1.38,0.76,2.58,1.79,3.53,3.03
  c0.37,0.48,0.7,0.99,0.98,1.53h0.01c0.05,0.1,0.1,0.2,0.15,0.3c0.3,0.59,0.54,1.21,0.72,1.85h0.01c0.01,0.05,0.03,0.1,0.04,0.15
  c0.12,0.43,0.22,0.87,0.29,1.32c0.01,0.09,0.02,0.19,0.03,0.28C32.19,38.43,32.22,38.92,32.22,39.42z"></path><path
                                                    fill="#ffd54f"
                                                    d="M30.17,39.31c0,0.16,0,0.33-0.02,0.49v0.01c0,0.01,0,0.01,0,0.01c-0.02,0.72-0.12,1.43-0.28,2.07
  c0,0.04-0.01,0.07-0.03,0.11h-4.67l-3.85-0.83l-0.51-0.11l-0.08,0.02l-4.27,0.88L16.27,42H16c-0.64,0-1.27-0.06-1.88-0.18
                                                    c-0.09-0.02-0.18-0.04-0.27-0.06h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.02-0.11-0.04-0.22-0.05-0.33
  c-0.07-0.43-0.1-0.88-0.1-1.33c0-0.17,0-0.34,0.01-0.51c0.03-0.54,0.11-1.07,0.23-1.58c0.08-0.38,0.19-0.75,0.32-1.1
                                                    c0.11-0.31,0.24-0.61,0.38-0.9c0.12-0.25,0.26-0.49,0.4-0.73c0.14-0.23,0.29-0.45,0.45-0.67c0.4-0.55,0.87-1.06,1.39-1.51
  c0.3-0.26,0.63-0.51,0.97-0.73c1.46-0.96,3.21-1.52,5.1-1.52c0.37,0,0.73,0.02,1.08,0.07h0.02c1.07,0.12,2.07,0.42,2.99,0.87
  c0.01,0,0.01,0,0.01,0c1.45,0.71,2.68,1.78,3.58,3.1c0.15,0.22,0.3,0.46,0.43,0.7c0.11,0.19,0.21,0.39,0.3,0.59
                                                    c0.14,0.31,0.27,0.64,0.38,0.97h0.01c0.11,0.37,0.21,0.74,0.28,1.13v0.01C30.11,38.16,30.17,38.73,30.17,39.31z"></path><path
                                                    fill="#ffe082"
                                                    d="M28.11,39.52v0.03c0,0.59-0.07,1.17-0.21,1.74c-0.05,0.24-0.12,0.48-0.21,0.71h-4.48l-2.29-0.63L18.63,42H16
  c-0.64,0-1.27-0.06-1.88-0.18c-0.02-0.03-0.03-0.06-0.04-0.09c-0.14-0.43-0.25-0.86-0.3-1.31c-0.04-0.29-0.06-0.59-0.06-0.9
  c0-0.12,0-0.25,0.02-0.37c0.01-0.47,0.08-0.93,0.2-1.37c0.06-0.3,0.15-0.59,0.27-0.87c0.04-0.14,0.1-0.27,0.17-0.4
                                                    c0.15-0.34,0.33-0.67,0.53-0.99c0.22-0.32,0.46-0.62,0.73-0.9c0.32-0.36,0.68-0.69,1.09-0.96c0.7-0.51,1.5-0.89,2.37-1.1
  c0.58-0.16,1.19-0.24,1.82-0.24c2,0,3.79,0.8,5.09,2.09c0.05,0.05,0.11,0.11,0.16,0.18h0.01c0.14,0.15,0.27,0.3,0.4,0.47
                                                    c0.37,0.47,0.68,0.98,0.92,1.54c0.12,0.26,0.22,0.53,0.3,0.81c0.01,0.04,0.02,0.07,0.03,0.11c0.14,0.49,0.23,1,0.25,1.53
                                                    C28.1,39.2,28.11,39.36,28.11,39.52z"></path><path fill="#ffecb3"
                                                    d="M26.06,39.52c0,0.41-0.05,0.8-0.16,1.17c-0.1,0.4-0.25,0.78-0.44,1.14c-0.03,0.06-0.1,0.17-0.1,0.17h-8.88
  c-0.01-0.01-0.02-0.03-0.02-0.04c-0.12-0.19-0.22-0.38-0.3-0.59c-0.2-0.46-0.32-0.96-0.36-1.48c-0.02-0.12-0.02-0.25-0.02-0.37
  c0-0.06,0-0.13,0.01-0.19c0.01-0.44,0.07-0.86,0.19-1.25c0.1-0.36,0.23-0.69,0.4-1.01c0,0,0.01-0.01,0.01-0.02
  c0.12-0.21,0.25-0.42,0.4-0.62c0.49-0.66,1.14-1.2,1.89-1.55c0.01,0,0.01,0,0.01,0c0.24-0.12,0.49-0.22,0.75-0.29c0,0,0,0,0.01,0
  c0.46-0.14,0.96-0.21,1.47-0.21c0.59,0,1.16,0.09,1.68,0.28c0.19,0.05,0.37,0.13,0.55,0.22c0,0,0,0,0.01,0
                                                    c0.86,0.41,1.59,1.05,2.09,1.85c0.1,0.15,0.19,0.31,0.27,0.48c0.04,0.07,0.08,0.15,0.11,0.22c0.23,0.52,0.37,1.09,0.41,1.69
                                                    c0.01,0.05,0.01,0.1,0.01,0.16C26.06,39.36,26.06,39.44,26.06,39.52z"></path><g><path
                                                      fill="none" stroke="#fff" stroke-linecap="round"
                                                      stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"
                                                      d="M30,11H18c-3.9,0-7,3.1-7,7v12c0,3.9,3.1,7,7,7h12c3.9,0,7-3.1,7-7V18C37,14.1,33.9,11,30,11z"></path><circle
                                                      cx="31" cy="16" r="1" fill="#fff"></circle></g><g><circle cx="24"
                                                      cy="24" r="6" fill="none" stroke="#fff" stroke-linecap="round"
                                                      stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></circle></g></svg>
                                              </a> <br>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if (mso)|(IE)]></td><![endif]-->
                                      <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                      <table style="width: 48px !important;height: 48px !important;display:
                                        inline-block;border-collapse: collapse;table-layout: fixed;border-spacing:
                                        0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right:
                                        5px" width="32" height="32" cellspacing="0" cellpadding="0" border="0"
                                        align="left">
                                        <tbody>
                                          <tr style="vertical-align: top">
                                            <td style="word-break: break-word;border-collapse: collapse
                                              !important;vertical-align: top" valign="middle" align="left"> <a
                                                href="https://club306.fr/" title="site web du club 306" target="_blank">
                                                <!--?xml version="1.0" encoding="iso-8859-1"?-->
                                                <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                                                <svg height="48px" width="48px" version="1.1" id="Layer_1"
                                                  xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                                  viewBox="0 0 392.533 392.533" xml:space="preserve">
                                                  <path style="fill:#FFC10D;"
                                                    d="M359.822,147.329H32.711c-6.012,0-10.925,4.848-10.925,10.925v75.96
                                                    c0,6.012,4.848,10.925,10.925,10.925h327.111c6.012,0,10.925-4.848,10.925-10.925v-75.96
                                                    C370.747,152.242,365.834,147.329,359.822,147.329z"></path>
                                                  <g>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M104.404,125.543c2.521-13.446,5.689-26.117,9.438-37.818c-15.903-2.004-31.806-4.59-47.774-7.628
                                                      c-11.895,13.382-21.786,28.574-29.285,45.446H104.404z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M185.341,92.768c-16.485-0.259-32.84-1.164-49.196-2.651c-3.685,10.796-6.982,22.691-9.503,35.362
                                                      h58.828V92.703h-0.129V92.768z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M85.463,61.608c12.024,2.069,24.113,3.814,36.267,5.172c6.206-14.287,13.317-26.57,21.269-36.655
                                                      C121.859,36.913,102.4,47.644,85.463,61.608z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M185.341,23.79c-15.127,5.301-29.349,21.463-40.663,45.253c13.511,1.099,27.022,1.681,40.663,1.939
                                                      V23.79z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M278.691,87.79c3.814,11.636,6.853,24.242,9.438,37.818h67.62
                                                      c-7.499-16.873-17.39-32.065-29.285-45.446C310.562,83.265,294.659,85.851,278.691,87.79z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M307.071,61.608c-16.937-13.899-36.396-24.63-57.471-31.354
                                                      c7.952,10.02,15.063,22.303,21.269,36.655C282.958,65.358,295.046,63.677,307.071,61.608z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M256.388,90.182c-16.356,1.487-32.84,2.392-49.196,2.651v32.776h58.828
                                                      C263.434,112.873,260.202,100.978,256.388,90.182z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M207.192,70.982c13.511-0.259,27.152-0.84,40.663-1.939c-11.313-23.725-25.471-39.952-40.663-45.253
                                                      V70.982z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M288.129,266.99c-2.521,13.447-5.689,26.117-9.438,37.818c15.903,2.004,31.806,4.59,47.774,7.628
  c11.895-13.382,21.786-28.574,29.285-45.446L288.129,266.99L288.129,266.99z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M207.192,368.743c15.127-5.301,29.349-21.463,40.663-45.253
                                                      c-13.511-1.099-27.022-1.681-40.663-1.939V368.743z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M207.192,299.766c16.485,0.259,32.84,1.164,49.196,2.65c3.685-10.796,6.982-22.691,9.503-35.362
                                                      h-58.828v32.776h0.129V299.766z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M307.071,330.925c-12.024-2.069-24.113-3.814-36.267-5.172
                                                      c-6.206,14.287-13.317,26.57-21.269,36.655C270.675,355.62,290.133,344.889,307.071,330.925z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M185.341,321.552c-13.511,0.259-27.152,0.84-40.663,1.939
                                                      c11.313,23.725,25.471,39.952,40.663,45.253V321.552z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M36.848,266.99c7.499,16.873,17.39,32.065,29.285,45.447c15.838-3.103,31.741-5.689,47.774-7.628
                                                      c-3.814-11.636-6.853-24.242-9.438-37.689h-67.62V266.99z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M136.145,302.352c16.356-1.487,32.84-2.392,49.196-2.65v-32.776h-58.828
                                                      C129.099,279.661,132.331,291.556,136.145,302.352z"></path>
                                                    <path style="fill:#FFFFFF;"
                                                      d="M121.729,325.754c-12.024,1.422-24.178,3.103-36.267,5.172
                                                      c16.937,13.899,36.396,24.63,57.471,31.354C134.982,352.388,127.806,340.04,121.729,325.754z"></path>
                                                  </g>
                                                  <g>
                                                    <path style="fill:#194F82;"
                                                      d="M383.03,135.305C355.62,53.204,279.855,0,196.267,0C112.42,0,37.236,53.139,9.826,134.917
  C3.814,140.865,0,149.139,0,158.255v75.96c0,8.792,3.556,16.873,9.244,22.82c29.608,82.812,103.046,135.499,187.022,135.499
  c83.846,0,159.741-53.85,186.44-134.917c6.012-5.947,9.826-14.222,9.826-23.337v-75.96
                                                      C392.533,149.269,388.913,141.188,383.03,135.305z
                                                      M355.685,125.543h-67.62c-2.521-13.446-5.689-26.117-9.438-37.818
                                                      c15.903-2.004,31.806-4.59,47.774-7.628C338.295,93.479,348.25,108.735,355.685,125.543z
                                                      M307.071,61.608
  c-12.024,2.069-24.113,3.814-36.267,5.172c-6.077-14.287-13.317-26.57-21.269-36.655C270.675,36.913,290.133,47.644,307.071,61.608
                                                      z
                                                      M207.192,23.79c15.127,5.301,29.349,21.463,40.663,45.253c-13.511,1.099-27.152,1.681-40.663,1.939V23.79z
                                                      M207.063,92.768h0.065
                                                      c16.485-0.259,32.84-1.164,49.196-2.651c3.685,10.796,6.982,22.691,9.503,35.362h-58.828V92.768H207.063z
                                                      M185.341,23.79v47.192
                                                      c-13.511-0.259-27.152-0.84-40.663-1.939C155.992,45.253,170.214,29.156,185.341,23.79z
                                                      M185.277,92.768v32.776h-58.699
                                                      c2.521-12.671,5.818-24.566,9.503-35.362C152.436,91.669,168.921,92.574,185.277,92.768z
                                                      M142.933,30.125
  c-7.952,10.02-15.063,22.303-21.269,36.655c-12.024-1.422-24.178-3.103-36.267-5.172C102.4,47.644,121.859,36.913,142.933,30.125z
  M66.133,80.097c15.838,3.103,31.741,5.689,47.774,7.628c-3.814,11.636-6.853,24.242-9.438,37.818h-67.62
                                                      C44.283,108.735,54.238,93.479,66.133,80.097z
                                                      M36.848,266.99h67.62c2.521,13.447,5.689,26.117,9.438,37.689
                                                      c-15.903,2.004-31.806,4.59-47.774,7.628C54.238,299.055,44.283,283.798,36.848,266.99z
                                                      M85.463,330.925
  c12.024-2.069,24.113-3.814,36.267-5.172c6.206,14.287,13.317,26.57,21.269,36.655C121.859,355.62,102.4,344.889,85.463,330.925z
  M185.341,368.743c-15.127-5.301-29.349-21.463-40.663-45.253c13.511-1.099,27.152-1.681,40.663-1.939V368.743z
                                                      M185.471,299.766
                                                      h-0.065c-16.485,0.259-32.84,1.164-49.196,2.65c-3.685-10.796-6.982-22.691-9.503-35.362h58.828v32.711H185.471z
                                                      M207.192,368.743
                                                      v-47.192c13.511,0.259,27.152,0.84,40.663,1.939C236.541,347.281,222.319,363.378,207.192,368.743z
                                                      M207.257,299.766V266.99h58.699
                                                      c-2.521,12.671-5.818,24.566-9.503,35.362C240.097,300.865,223.612,299.96,207.257,299.766z
                                                      M249.6,362.408
  c7.952-10.02,15.063-22.303,21.269-36.655c12.024,1.422,24.178,3.103,36.267,5.172C290.133,344.889,270.675,355.62,249.6,362.408z
  M326.4,312.436c-15.838-3.103-31.741-5.689-47.774-7.628c3.814-11.636,6.853-24.242,9.438-37.818h67.62
                                                      C348.25,283.798,338.295,299.055,326.4,312.436z
                                                      M359.822,245.204H32.711c-6.012,0-10.925-4.848-10.925-10.925v-75.96
                                                      c0-6.012,4.848-10.925,10.925-10.925h327.111c6.012,0,10.925,4.848,10.925,10.925v75.96h0.065
                                                      C370.747,240.291,365.899,245.204,359.822,245.204z"></path>
                                                    <polygon style="fill:#194F82;" points="120.76,202.085 109.899,168.21
                                                      94.836,168.21 83.911,202.085 72.986,168.21 56.889,168.21
                                                      75.895,224.259 92.057,224.259 102.4,193.745 112.679,224.259
                                                      128.905,224.259 147.911,168.21 131.685,168.21 "></polygon>
                                                    <polygon style="fill:#194F82;" points="214.562,202.15 203.701,168.275
                                                      188.638,168.275 177.713,202.15 166.853,168.275 150.691,168.275
                                                      169.697,224.259 185.859,224.259 196.267,193.81 206.481,224.323
                                                      222.707,224.323 241.713,168.275 225.487,168.275 "></polygon>
                                                    <polygon style="fill:#194F82;" points="308.493,202.085 297.568,168.21
                                                      282.505,168.21 271.58,202.085 260.719,168.21 244.558,168.21
                                                      263.564,224.259 279.725,224.259 290.069,193.745 300.347,224.259
                                                      316.574,224.259 335.58,168.21 319.354,168.21 "></polygon> </g>
                                                  <g>
                                                    <path style="fill:#56ACE0;"
                                                      d="M270.675,326.141c0.129-0.065,0.323-0.259,0.453-0.323c-0.065,0-0.259,0-0.323,0
                                                      C270.739,325.947,270.739,326.012,270.675,326.141z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M121.406,325.754c0.129,0.065,0.323,0.259,0.453,0.323c-0.065-0.129-0.065-0.259-0.129-0.388
                                                      C121.6,325.754,121.471,325.754,121.406,325.754z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M271.127,66.78c-0.129-0.065-0.323-0.259-0.453-0.323c0.065,0.129,0.065,0.259,0.129,0.388
                                                      C270.933,66.78,271.063,66.78,271.127,66.78z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M121.859,66.392c-0.129,0.065-0.323,0.259-0.453,0.323c0.065,0,0.259,0,0.323,0
                                                      C121.794,66.586,121.794,66.521,121.859,66.392z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M70.723,266.99c7.24,14.933,16.743,28.38,28.057,39.887c5.042-0.776,10.02-1.552,15.127-2.133
                                                      c-3.814-11.636-6.853-24.242-9.438-37.689H70.723V266.99z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M70.723,266.99L70.723,266.99L70.723,266.99z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M185.277,266.99h-58.699c2.521,12.671,5.818,24.566,9.503,35.362
                                                      c16.356-1.487,32.84-2.392,49.196-2.65V266.99z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M288.129,267.055v-0.065c-2.521,13.447-5.689,26.117-9.438,37.818
                                                      c5.042,0.646,10.02,1.422,15.127,2.133c11.313-11.507,20.816-24.954,28.057-39.887H288.129z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M144.743,69.107c13.511,1.099,27.152,1.681,40.663,1.939V44.154
                                                      c-10.279,0.84-20.234,2.844-29.802,5.947C151.725,55.725,148.04,61.996,144.743,69.107z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M207.192,348.444c10.279-0.84,20.234-2.844,29.802-5.947c3.814-5.624,7.499-11.895,10.796-19.006
                                                      c-13.511-1.099-27.152-1.681-40.663-1.939v26.893H207.192z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M207.192,299.766c16.485,0.259,32.84,1.164,49.196,2.65c3.814-10.796,6.982-22.691,9.568-35.362
                                                      h-58.828v32.711H207.192z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M207.257,92.768v32.776h58.699c-2.521-12.671-5.818-24.566-9.503-35.362
                                                      C240.097,91.669,223.612,92.574,207.257,92.768z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M236.994,50.036c-9.568-3.103-19.523-5.107-29.802-5.947v26.893
                                                      c13.511-0.259,27.152-0.84,40.663-1.939C244.493,62.061,240.808,55.725,236.994,50.036z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M155.539,342.497c9.568,3.103,19.523,5.107,29.802,5.947v-26.893
                                                      c-13.576,0.259-27.152,0.84-40.663,1.939C148.04,330.473,151.79,336.808,155.539,342.497z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M321.81,125.608v-0.065c-7.24-14.933-16.743-28.38-28.057-39.887
                                                      c-5.042,0.776-10.02,1.552-15.127,2.133c3.814,11.636,6.853,24.242,9.438,37.818H321.81z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M104.404,125.543c2.521-13.446,5.689-26.117,9.438-37.818c-5.042-0.646-10.02-1.422-15.127-2.133
  c-11.313,11.507-20.816,24.954-28.057,39.887h33.745C104.404,125.479,104.404,125.543,104.404,125.543z"></path>
                                                    <path style="fill:#56ACE0;"
                                                      d="M126.578,125.543h58.828V92.768c-16.485-0.259-32.84-1.164-49.196-2.651
                                                      C132.331,100.978,129.099,112.873,126.578,125.543z"></path> </g> </svg>
                                              </a> </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <!--[if (mso)|(IE)]></td><![endif]-->
                                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table id="u_content_text_3" style="font-family:arial,helvetica,sans-serif;" role="presentation"
                            width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="v-container-padding-padding"
                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px
                                  30px;font-family:arial,helvetica,sans-serif;" align="left">
                                  <div class="v-font-size" style="color: #ffffff; line-height: 140%; text-align: center;
                                    word-wrap: break-word;">
                                    <p style="font-size: 14px; line-height: 140%;">Club 306</p>
                                    <p style="font-size: 14px; line-height: 140%;">12 allée Ledru Rollin</p>
                                    <p style="font-size: 14px; line-height: 140%;">93320 Les Pavillons sous Bois</p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--[if (!mso)&(!IE)]><!--></div>
                        <!--<![endif]--> </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                </div>
              </div>
              <!--[if (mso)|(IE)]></td></tr></table><![endif]--> </td>
          </tr>
        </tbody>
      </table>
      <!--[if mso]></div><![endif]-->
      <!--[if IE]></div><![endif]-->
    </body>
  </html>`
}

const welcomeNewMember = (firstName: string) => {
  return `<!DOCTYPE html>
  <html>
    <head>
      <title></title>
      <meta content="text/html; charset=" http-equiv="Content-Type">
      <meta content="width=device-width, initial-scale=1.0" name="viewport">
      <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
      <style>* {
              box-sizing: border-box;
          }body {
              margin: 0;
              padding: 0;
          }a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
          }#MessageViewBody a {
              color: inherit;
              text-decoration: none;
          }p {
              line-height: inherit
          }.desktop_hide,
          .desktop_hide table {
              mso-hide: all;
              display: none;
              max-height: 0px;
              overflow: hidden;
          }.image_block img+div {
              display: none;
          }</style>
    </head>
    <body style="; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
      <table class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; ;" width="100%"
        cellspacing="0" cellpadding="0" border="0">
        <tbody>
          <tr>
            <td>
              <table class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; ;
                background-size: auto;" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace:
                        0pt; background-size: auto; ; color: #000000; width: 650px;" width="650" cellspacing="0"
                        cellpadding="0" border="0" align="center">
                        <tbody>
                          <tr>
                            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight:
                              400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;
                              border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                              <table class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                  <tr>
                                    <td class="pad"
                                      style="padding-bottom:30px;padding-top:10px;width:100%;padding-right:0px;padding-left:0px;">
                                      <div class="alignment" style="line-height:10px" align="center"><a
                                          href="http://www.club306.fr" style="outline:none" tabindex="-1"
                                          target="_blank" moz-do-not-send="true"><img alt="Logo club 306"
                                            src="https://www.club306.fr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoClub306.3a02f592.png&amp;w=256&amp;q=75"
                                            style="display: block; height: auto; border: 0; width: 567px; max-width:
                                            100%;" title="Logo CLub 306" moz-do-not-send="true" width="167"></a></div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                  <tr>
                                    <td class="pad" style="padding-bottom:5px;text-align:center;width:100%;">
                                      <h1 style="margin: 0; color: #000; direction: ltr; font-family: Helvetica Neue,
                                        Helvetica, Arial, sans-serif; font-size: 56px; font-weight: 700; letter-spacing:
                                        normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;">Merci
                                        et bienvenue au Club 306!</h1>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="paragraph_block block-3" role="presentation" style="mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt; word-break: break-word;" width="100%" cellspacing="0"
                                cellpadding="0" border="0">
                                <tbody>
                                  <tr>
                                    <td class="pad" style="padding-bottom:20px;">
                                      <div style="color:#575757;direction:ltr;font-family:Helvetica Neue, Helvetica,
                                        Arial,
  sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:left;mso-line-height-alt:24px;">
                                        <p style="margin: 0;"><br role="presentation">
                                          <span style="left: 120px; top: 367.379px; font-size: 18.3333px; font-family:
                                            sans-serif; transform: scaleX(1.16955);" role="presentation" dir="ltr">Bonjour ${firstName}</span></p>
                                        <p style="margin: 0;"><br role="presentation">
                                          <span style="left: 120px; top: 411.623px; font-size: 18.3333px; font-family:
                                            sans-serif; transform: scaleX(1.09161);" role="presentation" dir="ltr">Merci
                                            pour ton adhésion. Tu fais maintenant partie du club 306, et nous sommes ravis
                                            de </span><span style="left: 120px; top: 435.866px; font-size: 18.3333px;
                                            font-family: sans-serif; transform: scaleX(1.0641);" role="presentation"
                                            dir="ltr">t'accueillir parmi nous !</span></p>
                                        <p style="margin: 0;"><br role="presentation">
                                          <span style="left: 120px; top: 480.11px; font-size: 18.3333px; font-family:
                                            sans-serif; transform: scaleX(1.07268);" role="presentation" dir="ltr">Retrouve
                                            <a href="https://www.club306.fr/login" target="_blank">ton espace membre</a>
                                            sur le site du club 306.</span></p>
                                        <p style="margin: 0;"><br role="presentation">
                                          <span style="left: 120px; font-size: 18.3333px; font-family: sans-serif;
                                            transform: scaleX(1.09249);" role="presentation" dir="ltr">En te connectant à
                                            ton espace membre, retrouve :</span></p>
                                        <p style="margin-left: 5%; text-align:left "> <span style="left: 150px; top:
                                            592.841px; font-size: 18.3333px; font-family: sans-serif;" role="presentation"
                                            dir="ltr">●</span><span style="left: 161.073px; top: 592.841px; font-size:
                                            18.3333px; font-family: sans-serif;" role="presentation" dir="ltr"> </span><span
                                            style="left: 180px; top: 592.841px; font-size: 18.3333px; font-family:
                                            sans-serif; transform: scaleX(1.06161);" role="presentation" dir="ltr"><a
                                              href="https://www.club306.fr/partners" target="_blank">nos partenaires</a> </span><br
                                            role="presentation">
                                          <span style="left: 150px; top: 592.841px; font-size: 18.3333px; font-family:
                                            sans-serif;" role="presentation" dir="ltr">●</span><span style="left:
                                            161.073px; top: 592.841px; font-size: 18.3333px; font-family: sans-serif;"
                                            role="presentation" dir="ltr"> </span><span style="left: 180px; top:
                                            592.841px; font-size: 18.3333px; font-family: sans-serif; transform:
                                            scaleX(1.06161);" role="presentation" dir="ltr"><a
                                              href="https://www.club306.fr/event" target="_blank">les évènements à venir</a>
                                          </span><br role="presentation">
                                          <span style="left: 150px; top: 617.085px; font-size: 18.3333px; font-family:
                                            sans-serif;" role="presentation" dir="ltr">●</span><span style="left:
                                            161.073px; top: 617.085px; font-size: 18.3333px; font-family: sans-serif;"
                                            role="presentation" dir="ltr"> </span><span style="left: 180px; top:
                                            617.085px; font-size: 18.3333px; font-family: sans-serif; transform:
                                            scaleX(1.09587);" role="presentation" dir="ltr">des contenus réservés tels que
                                            tutoriels mécaniques, électriques ...</span></p>
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
              <table class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;
                background-size: auto;" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace:
                        0pt; background-size: auto; ; border-radius: 0; color: #000000; width: 650px;" width="650"
                        cellspacing="0" cellpadding="0" border="0" align="center">
                        <tbody>
                          <tr>
                            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight:
                              400; text-align: left; padding-bottom: 5px; padding-left: 20px; padding-right: 20px;
                              padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom:
                              0px; border-left: 0px;" width="50%">
                              <table class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                  <tr>
                                    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                      <div class="alignment" style="line-height:10px" align="center"><img title="Facebook"
                                          style="display: block; height: auto; border: 0; width: 285px; max-width: 100%;"
  src="https://raw.githubusercontent.com/koala819/Unlimitd_front/develop/newsletter_Facebook.png" alt="Facebook club 306"
                                          width="285"></div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight:
                              400; text-align: left; padding-bottom: 5px; padding-left: 20px; padding-right: 20px;
                              padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom:
                              0px; border-left: 0px;" width="50%">
                              <table class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                  <tr>
                                    <td class="pad" style="text-align:center;width:100%;">
                                      <h1 style="margin: 0; color: #000; direction: ltr; font-family: Helvetica Neue,
                                        Helvetica, Arial, sans-serif; font-size: 38px; font-weight: 700; letter-spacing:
                                        normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0;"><span
                                          class="tinyMce-placeholder">Rejoins-nous sur Facebook</span></h1>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="paragraph_block block-3" role="presentation" style="mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt; word-break: break-word;" width="100%" cellspacing="0"
                                cellpadding="0" border="0">
                                <tbody>
                                  <tr>
                                    <td class="pad" style="padding-bottom:20px;">
                                      <div style="color: #575757;direction:ltr;font-family:Helvetica Neue, Helvetica,
                                        Arial,
  sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:left;mso-line-height-alt:24px;">
                                        <p style="margin: 0;">pour découvrir nos dernières actualités, offres exclusives
                                          et participer à une communauté passionnante !</p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="button_block block-4" role="presentation" style="mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                  <tr>
                                    <td class="pad" style="text-align:left;">
                                      <div class="alignment" align="left"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.facebook.com/club306france/" style="height:52px;width:117px;v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#ffffff"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#000000; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a
                                          href="https://www.facebook.com/club306france/"
  style="text-decoration:none;display:inline-block;color:#000000;background-color:#c0c0c0;border-radius:0px;width:auto;border-top:0px
                                          solid transparent;font-weight:400;border-right:0px solid
                                          transparent;border-bottom:0px solid transparent;border-left:0px solid
                                          transparent;padding-top:10px;padding-bottom:10px;font-family:Helvetica Neue,
                                          Helvetica, Arial,
                                          sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                          target="_blank" moz-do-not-send="true"><span
                                            style="padding-left:25px;padding-right:25px;font-size:16px;display:inline-block;letter-spacing:normal;"><span
                                              dir="ltr" style="word-break: break-word; line-height: 32px;">Nous Suivre</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
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
                background-size: auto;" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace:
                        0pt; background-size: auto; ; border-radius: 0; color: #000000; width: 650px;" width="650"
                        cellspacing="0" cellpadding="0" border="0" align="center">
                        <tbody>
                          <tr class="reverse">
                            <td class="column column-1 first" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;
                              font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 20px; padding-right:
                              20px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px;
                              border-bottom: 0px; border-left: 0px;" width="50%">
                              <div class="border">
                                <table class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                  <tbody>
                                    <tr>
                                      <td class="pad" style="text-align:center;width:100%;">
                                        <h1 style="margin: 0; color: #000; direction: ltr; font-family: Helvetica Neue,
                                          Helvetica, Arial, sans-serif; font-size: 38px; font-weight: 700; letter-spacing:
                                          normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0;"><span
                                            class="tinyMce-placeholder">Rejoins-nous</span></h1>
                                        <h1 style="margin: 0; color: #000; direction: ltr; font-family: Helvetica Neue,
                                          Helvetica, Arial, sans-serif; font-size: 38px; font-weight: 700; letter-spacing:
                                          normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0;"><span
                                            class="tinyMce-placeholder">sur Instagram</span></h1>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table class="paragraph_block block-3" role="presentation" style="mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt; word-break: break-word;" width="100%" cellspacing="0"
                                  cellpadding="0" border="0">
                                  <tbody>
                                    <tr>
                                      <td class="pad" style="padding-bottom:20px;">
                                        <div style="color: #575757;direction:ltr;font-family:Helvetica Neue, Helvetica,
                                          Arial,
  sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:left;mso-line-height-alt:24px;">
                                          <p style="margin: 0;">pour plonger dans notre univers visuel captivant,
                                            découvrir nos coulisses et être inspiré par notre contenu exclusif !</p>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table class="button_block block-4" role="presentation" style="mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                  <tbody>
                                    <tr>
                                      <td class="pad" style="text-align:left;">
                                        <div class="alignment" align="left"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.instagram.com/club306officielfrance/" style="height:52px;width:117px;v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#ffffff"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#000000; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a
                                            href="https://www.instagram.com/club306officielfrance/"
                                            style="text-decoration:none;display:inline-block;color:#000000;background-color:
                                            #c0c0c0;border-radius:0px;width:auto;border-top:0px solid
                                            transparent;font-weight:400;border-right:0px solid
                                            transparent;border-bottom:0px solid transparent;border-left:0px solid
                                            transparent;padding-top:10px;padding-bottom:10px;font-family:Helvetica Neue,
                                            Helvetica, Arial,
  sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span
                                              style="padding-left:25px;padding-right:25px;font-size:16px;display:inline-block;letter-spacing:normal;"><span
                                                dir="ltr" style="word-break: break-word; line-height: 32px;">Nous Suivre</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </td>
                            <td class="column column-2 last" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;
                              font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 20px; padding-right:
                              20px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px;
                              border-bottom: 0px; border-left: 0px;" width="50%">
                              <div class="border">
                                <table class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                  <tbody>
                                    <tr>
                                      <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                        <div class="alignment" style="line-height:10px" align="center"><img alt="Instagram
                                            Club 306"
                                            src="https://raw.githubusercontent.com/koala819/Unlimitd_front/develop/newsletter_Instagram.png"
                                            style="display: block; height: auto; border: 0; width: 285px; max-width:
                                            100%;" title="Instagram" width="285"></div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace:
                        0pt; ; border-radius: 0; color: #000000; width: 650px;" width="650" cellspacing="0"
                        cellpadding="0" border="0" align="center">
                        <tbody>
                          <tr>
                            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight:
                              400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;
                              border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                              <div class="spacer_block block-1" style="height:35px;line-height:35px;font-size:1px;">&nbsp;</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                <tbody>
                  <tr>
                    <td>
                      <table class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt; word-break: break-word;" width="100%" cellspacing="0" cellpadding="0"
                        border="0">
                        <tbody>
                          <tr>
                            <td class="pad" style="padding-bottom:5px;">
                              <div style="color: #575757;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial,
  sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:24px;">
                                <p style="margin: 0;">Reste <a moz-do-not-send="true" href="mailto:contact@club306.fr">en
                                    contact</a> avec le club 306<br>
                                </p>
                                <p style="margin: 0;"><br>
                                </p>
                                <p style="margin: 0;">Au plaisir de se croiser !<br>
                                </p>
                                <p style="margin: 0;"><br>
                                </p>
                                <p style="margin: 0;"><br>
                                </p>
                                <h3 style="margin: 0;">L'équipe du Club 306</h3>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" width="100%"
                        cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                          <tr>
                            <td class="v-container-padding-padding"
                              style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px
                              10px;font-family:arial,helvetica,sans-serif;" align="left">
                              <div align="center">
                                <div style="display: table; max-width:167px;">
                                  <!--[if (mso)|(IE)]><table width="167" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:147px;"><tr><![endif]-->
                                  <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                  <table style="width: 48px !important;height: 48px !important;display:
                                    inline-block;border-collapse: collapse;table-layout: fixed;border-spacing:
                                    0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 5px"
                                    width="48" height="48" cellspacing="0" cellpadding="0" border="0" align="left">
                                    <tbody>
                                      <tr style="vertical-align: top">
                                        <td style="word-break: break-word;border-collapse: collapse
                                          !important;vertical-align: top" valign="middle" align="left"> <a
                                            href="https://www.facebook.com/club306france" title="Facebook du club 306"
                                            target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px"
                                              height="48px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24
                                                5Z"></path><path fill="#fff"
  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path></svg>
                                          </a> <br>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                  <table style="width: 48px !important;height: 48px !important;display:
                                    inline-block;border-collapse: collapse;table-layout: fixed;border-spacing:
                                    0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 5px"
                                    width="48" height="48" cellspacing="0" cellpadding="0" border="0" align="left">
                                    <tbody>
                                      <tr style="vertical-align: top">
                                        <td style="word-break: break-word;border-collapse: collapse
                                          !important;vertical-align: top" valign="middle" align="left"> <a
                                            href="https://www.instagram.com/club306officielfrance/" title="Instagram du
                                            club 306" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px"
                                              height="48px"><path fill="#304ffe"
  d="M41.67,13.48c-0.4,0.26-0.97,0.5-1.21,0.77c-0.09,0.09-0.14,0.19-0.12,0.29v1.03l-0.3,1.01l-0.3,1l-0.33,1.1l-0.68,2.25l-0.66,2.22l-0.5,1.67c0,0.26-0.01,0.52-0.03,0.77c-0.07,0.96-0.27,1.88-0.59,2.74c-0.19,0.53-0.42,1.04-0.7,1.52c-0.1,0.19-0.22,0.38-0.34,0.56c-0.4,0.63-0.88,1.21-1.41,1.72c-0.41,0.41-0.86,0.79-1.35,1.11c0,0,0,0-0.01,0c-0.08,0.07-0.17,0.13-0.27,0.18c-0.31,0.21-0.64,0.39-0.98,0.55c-0.23,0.12-0.46,0.22-0.7,0.31c-0.05,0.03-0.11,0.05-0.16,0.07c-0.57,0.27-1.23,0.45-1.89,0.54c-0.04,0.01-0.07,0.01-0.11,0.02c-0.4,0.07-0.79,0.13-1.19,0.16c-0.18,0.02-0.37,0.03-0.55,0.03l-0.71-0.04l-3.42-0.18c0-0.01-0.01,0-0.01,0l-1.72-0.09c-0.13,0-0.27,0-0.4-0.01c-0.54-0.02-1.06-0.08-1.58-0.19c-0.01,0-0.01,0-0.01,0c-0.95-0.18-1.86-0.5-2.71-0.93c-0.47-0.24-0.93-0.51-1.36-0.82c-0.18-0.13-0.35-0.27-0.52-0.42c-0.48-0.4-0.91-0.83-1.31-1.27c-0.06-0.06-0.11-0.12-0.16-0.18c-0.06-0.06-0.12-0.13-0.17-0.19c-0.38-0.48-0.7-0.97-0.96-1.49c-0.24-0.46-0.43-0.95-0.58-1.49c-0.06-0.19-0.11-0.37-0.15-0.57c-0.01-0.01-0.02-0.03-0.02-0.05c-0.1-0.41-0.19-0.84-0.24-1.27c-0.06-0.33-0.09-0.66-0.09-1c-0.02-0.13-0.02-0.27-0.02-0.4l1.91-2.95l1.87-2.88l0.85-1.31l0.77-1.18l0.26-0.41v-1.03c0.02-0.23,0.03-0.47,0.02-0.69c-0.01-0.7-0.15-1.38-0.38-2.03c-0.22-0.69-0.53-1.34-0.85-1.94c-0.38-0.69-0.78-1.31-1.11-1.87C14,7.4,13.66,6.73,13.75,6.26C14.47,6.09,15.23,6,16,6h16c4.18,0,7.78,2.6,9.27,6.26C41.43,12.65,41.57,13.06,41.67,13.48z"></path><path
                                                fill="#4928f4"
  d="M42,16v0.27l-1.38,0.8l-0.88,0.51l-0.97,0.56l-1.94,1.13l-1.9,1.1l-1.94,1.12l-0.77,0.45c0,0.48-0.12,0.92-0.34,1.32c-0.31,0.58-0.83,1.06-1.49,1.47c-0.67,0.41-1.49,0.74-2.41,0.98c0,0,0-0.01-0.01,0c-3.56,0.92-8.42,0.5-10.78-1.26c-0.66-0.49-1.12-1.09-1.32-1.78c-0.06-0.23-0.09-0.48-0.09-0.73v-7.19c0.01-0.15-0.09-0.3-0.27-0.45c-0.54-0.43-1.81-0.84-3.23-1.25c-1.11-0.31-2.3-0.62-3.3-0.92c-0.79-0.24-1.46-0.48-1.86-0.71c0.18-0.35,0.39-0.7,0.61-1.03c1.4-2.05,3.54-3.56,6.02-4.13C14.47,6.09,15.23,6,16,6h10.8c5.37,0.94,10.32,3.13,14.47,6.26c0.16,0.39,0.3,0.8,0.4,1.22c0.18,0.66,0.29,1.34,0.32,2.05C42,15.68,42,15.84,42,16z"></path><path
                                                fill="#6200ea"
  d="M42,16v4.41l-0.22,0.68l-0.75,2.33l-0.78,2.4l-0.41,1.28l-0.38,1.19l-0.37,1.13l-0.36,1.12l-0.19,0.59l-0.25,0.78c0,0.76-0.02,1.43-0.07,2c-0.01,0.06-0.02,0.12-0.02,0.18c-0.06,0.53-0.14,0.98-0.27,1.36c-0.01,0.06-0.03,0.12-0.05,0.17c-0.26,0.72-0.65,1.18-1.23,1.48c-0.14,0.08-0.3,0.14-0.47,0.2c-0.53,0.18-1.2,0.27-2.02,0.32c-0.6,0.04-1.29,0.05-2.07,0.05H31.4l-1.19-0.05L30,37.61l-2.17-0.09l-2.2-0.09l-7.25-0.3l-1.88-0.08h-0.26c-0.78-0.01-1.45-0.06-2.03-0.14c-0.84-0.13-1.49-0.35-1.98-0.68c-0.7-0.45-1.11-1.11-1.35-2.03c-0.06-0.22-0.11-0.45-0.14-0.7c-0.1-0.58-0.15-1.25-0.18-2c0-0.15,0-0.3-0.01-0.46c-0.01-0.01,0-0.01,0-0.01v-0.58c-0.01-0.29-0.01-0.59-0.01-0.9l0.05-1.61l0.03-1.15l0.04-1.34v-0.19l0.07-2.46l0.07-2.46l0.07-2.31l0.06-2.27l0.02-0.6c0-0.31-1.05-0.49-2.22-0.64c-0.93-0.12-1.95-0.23-2.56-0.37c0.05-0.23,0.1-0.46,0.16-0.68c0.18-0.72,0.45-1.4,0.79-2.05c0.18-0.35,0.39-0.7,0.61-1.03c2.16-0.95,4.41-1.69,6.76-2.17c2.06-0.43,4.21-0.66,6.43-0.66c7.36,0,14.16,2.49,19.54,6.69c0.52,0.4,1.03,0.83,1.53,1.28
                                                C42,15.68,42,15.84,42,16z"></path><path fill="#673ab7"
  d="M42,18.37v4.54l-0.55,1.06l-1.05,2.05l-0.56,1.08l-0.51,0.99l-0.22,0.43c0,0.31,0,0.61-0.02,0.9c0,0.43-0.02,0.84-0.05,1.22c-0.04,0.45-0.1,0.86-0.16,1.24c-0.15,0.79-0.36,1.47-0.66,2.03c-0.04,0.07-0.08,0.14-0.12,0.2c-0.11,0.18-0.24,0.35-0.38,0.51c-0.18,0.22-0.38,0.41-0.61,0.57c-0.34,0.26-0.74,0.47-1.2,0.63c-0.57,0.21-1.23,0.35-2.01,0.43c-0.51,0.05-1.07,0.08-1.68,0.08l-0.42,0.02l-2.08,0.12h-0.01L27.5,36.6l-2.25,0.13l-3.1,0.18l-3.77,0.22l-0.55,0.03c-0.51,0-0.99-0.03-1.45-0.09c-0.05-0.01-0.09-0.02-0.14-0.02c-0.68-0.11-1.3-0.29-1.86-0.54c-0.68-0.3-1.27-0.7-1.77-1.18c-0.44-0.43-0.82-0.92-1.13-1.47c-0.07-0.13-0.14-0.25-0.2-0.39c-0.3-0.59-0.54-1.25-0.72-1.97c-0.03-0.12-0.06-0.25-0.08-0.38c-0.06-0.23-0.11-0.47-0.14-0.72c-0.11-0.64-0.17-1.32-0.2-2.03v-0.01c-0.01-0.29-0.02-0.57-0.02-0.87l-0.49-1.17l-0.07-0.18L9.5,25.99L8.75,24.2l-0.12-0.29l-0.72-1.73l-0.8-1.93c0,0,0,0-0.01,0L6.29,18.3L6,17.59V16c0-0.63,0.06-1.25,0.17-1.85c0.05-0.23,0.1-0.46,0.16-0.68c0.85-0.49,1.74-0.94,2.65-1.34c2.08-0.93,4.31-1.62,6.62-2.04c1.72-0.31,3.51-0.48,5.32-0.48c7.31,0,13.94,2.65,19.12,6.97c0.2,0.16,0.39,0.32,0.58,0.49C41.09,17.48,41.55,17.91,42,18.37z"></path><path
                                                fill="#8e24aa"
  d="M42,21.35v5.14l-0.57,1.19l-1.08,2.25l-0.01,0.03c0,0.43-0.02,0.82-0.05,1.17c-0.1,1.15-0.38,1.88-0.84,2.33c-0.33,0.34-0.74,0.53-1.25,0.63c-0.03,0.01-0.07,0.01-0.1,0.02c-0.16,0.03-0.33,0.05-0.51,0.05c-0.62,0.06-1.35,0.02-2.19-0.04c-0.09,0-0.19-0.01-0.29-0.02c-0.61-0.04-1.26-0.08-1.98-0.11c-0.39-0.01-0.8-0.02-1.22-0.02h-0.02l-1.01,0.08h-0.01l-2.27,0.16l-2.59,0.2l-0.38,0.03l-3.03,0.22l-1.57,0.12l-1.55,0.11c-0.27,0-0.53,0-0.79-0.01c0,0-0.01-0.01-0.01,0c-1.13-0.02-2.14-0.09-3.04-0.26c-0.83-0.14-1.56-0.36-2.18-0.69c-0.64-0.31-1.17-0.75-1.6-1.31c-0.41-0.55-0.71-1.24-0.9-2.07c0-0.01,0-0.01,0-0.01c-0.14-0.67-0.22-1.45-0.22-2.33l-0.15-0.27L9.7,26.35l-0.13-0.22L9.5,25.99l-0.93-1.65l-0.46-0.83l-0.58-1.03l-1-1.79L6,19.75v-3.68c0.88-0.58,1.79-1.09,2.73-1.55c1.14-0.58,2.32-1.07,3.55-1.47c1.34-0.44,2.74-0.79,4.17-1.02c1.45-0.24,2.94-0.36,4.47-0.36c6.8,0,13.04,2.43,17.85,6.47c0.22,0.17,0.43,0.36,0.64,0.54c0.84,0.75,1.64,1.56,2.37,2.41C41.86,21.18,41.94,21.26,42,21.35z"></path><path
                                                fill="#c2185b"
  d="M42,24.71v7.23c-0.24-0.14-0.57-0.31-0.98-0.49c-0.22-0.11-0.47-0.22-0.73-0.32c-0.38-0.17-0.79-0.33-1.25-0.49c-0.1-0.04-0.2-0.07-0.31-0.1c-0.18-0.07-0.37-0.13-0.56-0.19c-0.59-0.18-1.24-0.35-1.92-0.5c-0.26-0.05-0.53-0.1-0.8-0.14c-0.87-0.15-1.8-0.24-2.77-0.25c-0.08-0.01-0.17-0.01-0.25-0.01l-2.57,0.02l-3.5,0.02h-0.01l-7.49,0.06c-2.38,0-3.84,0.57-4.72,0.8c0,0-0.01,0-0.01,0.01c-0.93,0.24-1.22,0.09-1.3-1.54c-0.02-0.45-0.03-1.03-0.03-1.74l-0.56-0.43l-0.98-0.74l-0.6-0.46l-0.12-0.09L8.88,24.1l-0.25-0.19l-0.52-0.4l-0.96-0.72L6,21.91v-3.4c0.1-0.08,0.19-0.15,0.29-0.21c1.45-1,3-1.85,4.64-2.54c1.46-0.62,3-1.11,4.58-1.46c0.43-0.09,0.87-0.18,1.32-0.24c1.33-0.23,2.7-0.34,4.09-0.34c6.01,0,11.53,2.09,15.91,5.55c0.66,0.52,1.3,1.07,1.9,1.66c0.82,0.78,1.59,1.61,2.3,2.49c0.14,0.18,0.28,0.36,0.42,0.55C41.64,24.21,41.82,24.46,42,24.71z"></path><path
                                                fill="#d81b60"
  d="M42,28.72V32c0,0.65-0.06,1.29-0.18,1.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.22,0.05-0.47,0.05-0.75,0.01c-0.63-0.11-1.37-0.44-2.17-0.87c-0.04-0.01-0.08-0.03-0.11-0.05c-0.25-0.13-0.51-0.27-0.77-0.43c-0.53-0.29-1.09-0.61-1.65-0.91c-0.12-0.06-0.24-0.12-0.35-0.18c-0.64-0.33-1.3-0.63-1.96-0.86c0,0,0,0-0.01,0c-0.14-0.05-0.29-0.1-0.44-0.14c-0.57-0.16-1.15-0.26-1.71-0.26l-1.1-0.32l-4.87-1.41c0,0,0,0-0.01,0l-2.99-0.87h-0.01l-1.3-0.38c-3.76,0-6.07,1.6-7.19,0.99c-0.44-0.23-0.7-0.81-0.79-1.95c-0.03-0.32-0.04-0.68-0.04-1.1l-1.17-0.57l-0.05-0.02h-0.01l-0.84-0.42L9.7,26.35l-0.07-0.03l-0.17-0.09L7.5,25.28L6,24.55v-3.43c0.17-0.15,0.35-0.29,0.53-0.43c0.19-0.15,0.38-0.29,0.57-0.44c0.01,0,0.01,0,0.01,0c1.18-0.85,2.43-1.6,3.76-2.22c1.55-0.74,3.2-1.31,4.91-1.68c0.25-0.06,0.51-0.12,0.77-0.16c1.42-0.27,2.88-0.41,4.37-0.41c5.27,0,10.11,1.71,14.01,4.59c1.13,0.84,2.18,1.77,3.14,2.78c0.79,0.83,1.52,1.73,2.18,2.67c0.05,0.07,0.1,0.14,0.15,0.2c0.37,0.54,0.71,1.09,1.03,1.66C41.64,28.02,41.82,28.37,42,28.72z"></path><path
                                                fill="#f50057"
  d="M41.82,33.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.19,0.37-0.4,0.72-0.63,1.06c-0.14,0.21-0.29,0.41-0.44,0.6c-0.36-0.14-0.89-0.34-1.54-0.56c0,0,0,0,0-0.01c-0.49-0.17-1.05-0.35-1.65-0.52c-0.17-0.05-0.34-0.1-0.52-0.15c-0.71-0.19-1.45-0.36-2.17-0.46c-0.6-0.1-1.19-0.16-1.74-0.16l-0.46-0.13h-0.01l-2.42-0.7l-1.49-0.43l-1.66-0.48h-0.01l-0.54-0.15l-6.53-1.88l-1.88-0.54l-1.4-0.33l-2.28-0.54l-0.28-0.07c0,0,0,0-0.01,0l-2.29-0.53c0-0.01,0-0.01,0-0.01l-0.41-0.09l-0.21-0.05l-1.67-0.39l-0.19-0.05l-1.42-1.17L6,27.9v-4.08c0.37-0.36,0.75-0.7,1.15-1.03c0.12-0.11,0.25-0.21,0.38-0.31c0.12-0.1,0.25-0.2,0.38-0.3c0.91-0.69,1.87-1.31,2.89-1.84c1.3-0.7,2.68-1.26,4.13-1.66c0.28-0.09,0.56-0.17,0.85-0.23c1.64-0.41,3.36-0.62,5.14-0.62c4.47,0,8.63,1.35,12.07,3.66c1.71,1.15,3.25,2.53,4.55,4.1c0.66,0.79,1.26,1.62,1.79,2.5c0.05,0.07,0.09,0.13,0.13,0.2c0.32,0.53,0.62,1.08,0.89,1.64c0.25,0.5,0.47,1,0.67,1.52C41.34,32.25,41.6,33.07,41.82,33.91z"></path><path
                                                fill="#ff1744"
  d="M40.28,37.59c-0.14,0.21-0.29,0.41-0.44,0.6c-0.44,0.55-0.92,1.05-1.46,1.49c-0.47,0.39-0.97,0.74-1.5,1.04c-0.2-0.05-0.4-0.11-0.61-0.19c-0.66-0.23-1.35-0.61-1.99-1.01c-0.96-0.61-1.79-1.27-2.16-1.57c-0.14-0.12-0.21-0.18-0.21-0.18l-1.7-0.15L30,37.6l-2.2-0.19l-2.28-0.2l-3.37-0.3l-5.34-0.47l-0.02-0.01l-1.88-0.91l-1.9-0.92l-1.53-0.74l-0.33-0.16l-0.41-0.2l-1.42-0.69L7.43,31.9l-0.59-0.29L6,31.35v-4.47c0.47-0.56,0.97-1.09,1.5-1.6c0.34-0.32,0.7-0.64,1.07-0.94c0.06-0.05,0.12-0.1,0.18-0.14c0.04-0.05,0.09-0.08,0.13-0.1c0.59-0.48,1.21-0.91,1.85-1.3c0.74-0.47,1.52-0.89,2.33-1.24c0.87-0.39,1.78-0.72,2.72-0.97c1.63-0.46,3.36-0.7,5.14-0.7c4.08,0,7.85,1.24,10.96,3.37c1.99,1.36,3.71,3.08,5.07,5.07c0.45,0.64,0.85,1.32,1.22,2.02c0.13,0.26,0.26,0.52,0.37,0.78c0.12,0.25,0.23,0.5,0.34,0.75c0.21,0.52,0.4,1.04,0.57,1.58c0.32,1,0.56,2.02,0.71,3.08C40.21,36.89,40.25,37.24,40.28,37.59z"></path><path
                                                fill="#ff5722"
  d="M38.39,39.42c0,0.08,0,0.17-0.01,0.26c-0.47,0.39-0.97,0.74-1.5,1.04c-0.22,0.12-0.44,0.24-0.67,0.34c-0.23,0.11-0.46,0.21-0.7,0.3c-0.34-0.18-0.8-0.4-1.29-0.61c-0.69-0.31-1.44-0.59-2.02-0.68c-0.14-0.03-0.27-0.04-0.39-0.04l-1.64-0.21h-0.02l-2.04-0.27l-2.06-0.27l-0.96-0.12l-7.56-0.98c-0.49,0-1.01-0.03-1.55-0.1c-0.66-0.06-1.35-0.16-2.04-0.3c-0.68-0.12-1.37-0.28-2.03-0.45c-0.69-0.16-1.37-0.35-2-0.53c-0.73-0.22-1.41-0.43-1.98-0.62c-0.47-0.15-0.87-0.29-1.18-0.4c-0.18-0.43-0.33-0.88-0.44-1.34C6.1,33.66,6,32.84,6,32v-1.67c0.32-0.53,0.67-1.05,1.06-1.54c0.71-0.94,1.52-1.8,2.4-2.56c0.03-0.04,0.07-0.07,0.1-0.09l0.01-0.01c0.31-0.28,0.63-0.53,0.97-0.77c0.04-0.04,0.08-0.07,0.12-0.1c0.16-0.12,0.33-0.24,0.51-0.35c1.43-0.97,3.01-1.73,4.7-2.24c1.6-0.48,3.29-0.73,5.05-0.73c3.49,0,6.75,1.03,9.47,2.79c2.01,1.29,3.74,2.99,5.06,4.98c0.16,0.23,0.31,0.46,0.46,0.7c0.69,1.17,1.26,2.43,1.68,3.75c0.05,0.15,0.09,0.3,0.13,0.46c0.08,0.27,0.15,0.55,0.21,0.83c0.02,0.07,0.04,0.14,0.06,0.22c0.14,0.63,0.24,1.29,0.31,1.95c0,0.01,0,0.01,0,0.01C38.36,38.22,38.39,38.82,38.39,39.42z"></path><path
                                                fill="#ff6f00"
  d="M36.33,39.42c0,0.35-0.02,0.73-0.06,1.11c-0.02,0.18-0.04,0.36-0.06,0.53c-0.23,0.11-0.46,0.21-0.7,0.3c-0.45,0.17-0.91,0.31-1.38,0.41c-0.32,0.07-0.65,0.13-0.98,0.16h-0.01c-0.31-0.19-0.67-0.42-1.04-0.68c-0.67-0.47-1.37-1-1.93-1.43c-0.01-0.01-0.01-0.01-0.02-0.02c-0.59-0.45-1.01-0.79-1.01-0.79l-1.06,0.04l-2.04,0.07l-0.95,0.04l-3.82,0.14l-3.23,0.12c-0.21,0.01-0.46,0.01-0.77,0h-0.01c-0.42-0.01-0.92-0.04-1.47-0.09c-0.64-0.05-1.34-0.11-2.05-0.18c-0.69-0.08-1.39-0.16-2.06-0.24c-0.74-0.08-1.44-0.17-2.04-0.25c-0.47-0.06-0.88-0.11-1.21-0.15c-0.28-0.32-0.53-0.65-0.77-1.01c-0.36-0.54-0.67-1.11-0.91-1.72c-0.18-0.43-0.33-0.88-0.44-1.34c0.29-0.89,0.67-1.73,1.12-2.54c0.36-0.66,0.78-1.29,1.24-1.89c0.45-0.59,0.94-1.14,1.47-1.64v-0.01c0.15-0.15,0.3-0.29,0.45-0.42c0.28-0.26,0.57-0.5,0.87-0.73h0.01c0.01-0.02,0.02-0.02,0.03-0.03c0.24-0.19,0.49-0.36,0.74-0.53c1.48-1.01,3.15-1.76,4.95-2.2c1.19-0.29,2.44-0.45,3.73-0.45c2.54,0,4.94,0.61,7.05,1.71h0.01c1.81,0.93,3.41,2.21,4.7,3.75c0.71,0.82,1.32,1.72,1.82,2.67c0.35,0.64,0.65,1.31,0.9,1.99c0.02,0.06,0.04,0.11,0.06,0.16c0.17,0.5,0.32,1.02,0.45,1.54c0.09,0.37,0.16,0.75,0.22,1.13c0.02,0.12,0.04,0.23,0.05,0.35C36.28,37.99,36.33,38.7,36.33,39.42z"></path><path
                                                fill="#ff9800"
  d="M34.28,39.42v0.1c0,0.34-0.03,0.77-0.06,1.23c-0.03,0.34-0.06,0.69-0.09,1.02c-0.32,0.07-0.65,0.13-0.98,0.16h-0.01C32.76,41.98,32.39,42,32,42h-1.75l-0.38-0.11l-1.97-0.6l-2-0.6l-4.63-1.39l-2-0.6c0,0-0.83,0.33-2,0.72h-0.01c-0.45,0.15-0.94,0.31-1.46,0.47c-0.65,0.19-1.34,0.38-2.02,0.53c-0.7,0.16-1.39,0.28-2.01,0.33c-0.19,0.02-0.38,0.03-0.55,0.03c-0.56-0.31-1.1-0.68-1.59-1.09c-0.43-0.36-0.83-0.75-1.2-1.18c-0.28-0.32-0.53-0.65-0.77-1.01c0.07-0.45,0.15-0.89,0.27-1.32c0.3-1.19,0.77-2.33,1.39-3.37c0.34-0.59,0.72-1.16,1.16-1.69c0.01-0.03,0.04-0.06,0.07-0.08c-0.01-0.01,0-0.01,0-0.01c0.13-0.17,0.27-0.33,0.41-0.48c0-0.01,0-0.01,0-0.01c0.41-0.44,0.83-0.86,1.29-1.25c0.16-0.13,0.31-0.26,0.48-0.39c0.03-0.03,0.06-0.05,0.1-0.08c2.25-1.72,5.06-2.76,8.09-2.76c3.44,0,6.57,1.29,8.94,3.41c1.14,1.03,2.11,2.26,2.84,3.63c0.06,0.1,0.12,0.21,0.17,0.32c0.09,0.18,0.18,0.37,0.26,0.57c0.33,0.72,0.59,1.48,0.77,2.26c0.02,0.08,0.04,0.16,0.06,0.24c0.08,0.37,0.15,0.75,0.2,1.13C34.24,38.21,34.28,38.81,34.28,39.42z"></path><path
                                                fill="#ffc107"
  d="M32.22,39.42c0,0.2-0.01,0.42-0.02,0.65c-0.02,0.37-0.05,0.77-0.1,1.18c-0.02,0.25-0.06,0.5-0.1,0.75h-5.48l-1.06-0.17l-4.14-0.66l-0.59-0.09l-1.35-0.22c-0.59,0-1.87,0.26-3.22,0.51c-0.71,0.13-1.43,0.27-2.08,0.36c-0.08,0.01-0.16,0.02-0.23,0.03h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.2-0.09-0.4-0.19-0.6-0.3c-0.56-0.31-1.1-0.68-1.59-1.09c-0.01-0.12-0.02-0.22-0.02-0.27c0-0.26,0.01-0.51,0.03-0.76c0.04-0.64,0.13-1.26,0.27-1.86c0.22-0.91,0.54-1.79,0.97-2.6c0.08-0.17,0.17-0.34,0.27-0.5c0.04-0.08,0.09-0.15,0.13-0.23c0.18-0.29,0.38-0.57,0.58-0.85c0.42-0.55,0.89-1.07,1.39-1.54c0.01,0,0.01,0,0.01,0c0.04-0.04,0.08-0.08,0.12-0.11c0.05-0.04,0.09-0.09,0.14-0.12c0.2-0.18,0.4-0.34,0.61-0.49c0-0.01,0.01-0.01,0.01-0.01c1.89-1.41,4.23-2.24,6.78-2.24c1.98,0,3.82,0.5,5.43,1.38h0.01c1.38,0.76,2.58,1.79,3.53,3.03c0.37,0.48,0.7,0.99,0.98,1.53h0.01c0.05,0.1,0.1,0.2,0.15,0.3c0.3,0.59,0.54,1.21,0.72,1.85h0.01c0.01,0.05,0.03,0.1,0.04,0.15c0.12,0.43,0.22,0.87,0.29,1.32c0.01,0.09,0.02,0.19,0.03,0.28C32.19,38.43,32.22,38.92,32.22,39.42z"></path><path
                                                fill="#ffd54f"
  d="M30.17,39.31c0,0.16,0,0.33-0.02,0.49v0.01c0,0.01,0,0.01,0,0.01c-0.02,0.72-0.12,1.43-0.28,2.07c0,0.04-0.01,0.07-0.03,0.11h-4.67l-3.85-0.83l-0.51-0.11l-0.08,0.02l-4.27,0.88L16.27,42H16c-0.64,0-1.27-0.06-1.88-0.18c-0.09-0.02-0.18-0.04-0.27-0.06h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.02-0.11-0.04-0.22-0.05-0.33c-0.07-0.43-0.1-0.88-0.1-1.33c0-0.17,0-0.34,0.01-0.51c0.03-0.54,0.11-1.07,0.23-1.58c0.08-0.38,0.19-0.75,0.32-1.1c0.11-0.31,0.24-0.61,0.38-0.9c0.12-0.25,0.26-0.49,0.4-0.73c0.14-0.23,0.29-0.45,0.45-0.67c0.4-0.55,0.87-1.06,1.39-1.51c0.3-0.26,0.63-0.51,0.97-0.73c1.46-0.96,3.21-1.52,5.1-1.52c0.37,0,0.73,0.02,1.08,0.07h0.02c1.07,0.12,2.07,0.42,2.99,0.87c0.01,0,0.01,0,0.01,0c1.45,0.71,2.68,1.78,3.58,3.1c0.15,0.22,0.3,0.46,0.43,0.7c0.11,0.19,0.21,0.39,0.3,0.59c0.14,0.31,0.27,0.64,0.38,0.97h0.01c0.11,0.37,0.21,0.74,0.28,1.13v0.01C30.11,38.16,30.17,38.73,30.17,39.31z"></path><path
                                                fill="#ffe082"
  d="M28.11,39.52v0.03c0,0.59-0.07,1.17-0.21,1.74c-0.05,0.24-0.12,0.48-0.21,0.71h-4.48l-2.29-0.63L18.63,42H16c-0.64,0-1.27-0.06-1.88-0.18c-0.02-0.03-0.03-0.06-0.04-0.09c-0.14-0.43-0.25-0.86-0.3-1.31c-0.04-0.29-0.06-0.59-0.06-0.9c0-0.12,0-0.25,0.02-0.37c0.01-0.47,0.08-0.93,0.2-1.37c0.06-0.3,0.15-0.59,0.27-0.87c0.04-0.14,0.1-0.27,0.17-0.4c0.15-0.34,0.33-0.67,0.53-0.99c0.22-0.32,0.46-0.62,0.73-0.9c0.32-0.36,0.68-0.69,1.09-0.96c0.7-0.51,1.5-0.89,2.37-1.1c0.58-0.16,1.19-0.24,1.82-0.24c2,0,3.79,0.8,5.09,2.09c0.05,0.05,0.11,0.11,0.16,0.18h0.01c0.14,0.15,0.27,0.3,0.4,0.47c0.37,0.47,0.68,0.98,0.92,1.54c0.12,0.26,0.22,0.53,0.3,0.81c0.01,0.04,0.02,0.07,0.03,0.11c0.14,0.49,0.23,1,0.25,1.53C28.1,39.2,28.11,39.36,28.11,39.52z"></path><path
                                                fill="#ffecb3"
  d="M26.06,39.52c0,0.41-0.05,0.8-0.16,1.17c-0.1,0.4-0.25,0.78-0.44,1.14c-0.03,0.06-0.1,0.17-0.1,0.17h-8.88c-0.01-0.01-0.02-0.03-0.02-0.04c-0.12-0.19-0.22-0.38-0.3-0.59c-0.2-0.46-0.32-0.96-0.36-1.48c-0.02-0.12-0.02-0.25-0.02-0.37c0-0.06,0-0.13,0.01-0.19c0.01-0.44,0.07-0.86,0.19-1.25c0.1-0.36,0.23-0.69,0.4-1.01c0,0,0.01-0.01,0.01-0.02c0.12-0.21,0.25-0.42,0.4-0.62c0.49-0.66,1.14-1.2,1.89-1.55c0.01,0,0.01,0,0.01,0c0.24-0.12,0.49-0.22,0.75-0.29c0,0,0,0,0.01,0c0.46-0.14,0.96-0.21,1.47-0.21c0.59,0,1.16,0.09,1.68,0.28c0.19,0.05,0.37,0.13,0.55,0.22c0,0,0,0,0.01,0c0.86,0.41,1.59,1.05,2.09,1.85c0.1,0.15,0.19,0.31,0.27,0.48c0.04,0.07,0.08,0.15,0.11,0.22c0.23,0.52,0.37,1.09,0.41,1.69c0.01,0.05,0.01,0.1,0.01,0.16C26.06,39.36,26.06,39.44,26.06,39.52z"></path><g><path
                                                  fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-miterlimit="10" stroke-width="2"
                                                  d="M30,11H18c-3.9,0-7,3.1-7,7v12c0,3.9,3.1,7,7,7h12c3.9,0,7-3.1,7-7V18C37,14.1,33.9,11,30,11z"></path><circle
                                                  cx="31" cy="16" r="1" fill="#fff"></circle></g><g><circle cx="24"
                                                  cy="24" r="6" fill="none" stroke="#fff" stroke-linecap="round"
                                                  stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></circle></g></svg>
                                          </a> <br>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]><td width="48" style="width:48px; padding-right: 5px;" valign="top"><![endif]-->
                                  <table style="width: 48px !important;height: 48px !important;display:
                                    inline-block;border-collapse: collapse;table-layout: fixed;border-spacing:
                                    0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 5px"
                                    width="32" height="32" cellspacing="0" cellpadding="0" border="0" align="left">
                                    <tbody>
                                      <tr style="vertical-align: top">
                                        <td style="word-break: break-word;border-collapse: collapse
                                          !important;vertical-align: top" valign="middle" align="left"> <a
                                            href="https://club306.fr/" title="site web du club 306" target="_blank">
                                            <!--?xml version="1.0" encoding="iso-8859-1"?-->
                                            <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                                            <svg height="48px" width="48px" version="1.1" id="Layer_1"
                                              xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                              viewBox="0 0 392.533 392.533" xml:space="preserve">
                                              <path style="fill:#FFC10D;"
                                                d="M359.822,147.329H32.711c-6.012,0-10.925,4.848-10.925,10.925v75.96
  c0,6.012,4.848,10.925,10.925,10.925h327.111c6.012,0,10.925-4.848,10.925-10.925v-75.96
                                                C370.747,152.242,365.834,147.329,359.822,147.329z"></path>
                                              <g>
                                                <path style="fill:#FFFFFF;"
                                                  d="M104.404,125.543c2.521-13.446,5.689-26.117,9.438-37.818c-15.903-2.004-31.806-4.59-47.774-7.628
                                                  c-11.895,13.382-21.786,28.574-29.285,45.446H104.404z"></path>
                                                <path style="fill:#FFFFFF;"
                                                  d="M185.341,92.768c-16.485-0.259-32.84-1.164-49.196-2.651c-3.685,10.796-6.982,22.691-9.503,35.362
                                                  h58.828V92.703h-0.129V92.768z"></path>
                                                <path style="fill:#FFFFFF;"
                                                  d="M85.463,61.608c12.024,2.069,24.113,3.814,36.267,5.172c6.206-14.287,13.317-26.57,21.269-36.655
                                                  C121.859,36.913,102.4,47.644,85.463,61.608z"></path>
                                                <path style="fill:#FFFFFF;"
                                                  d="M185.341,23.79c-15.127,5.301-29.349,21.463-40.663,45.253c13.511,1.099,27.022,1.681,40.663,1.939
                                                  V23.79z"></path>
                                                <path style="fill:#FFFFFF;"
                                                  d="M278.691,87.79c3.814,11.636,6.853,24.242,9.438,37.818h67.62
  c-7.499-16.873-17.39-32.065-29.285-45.446C310.562,83.265,294.659,85.851,278.691,87.79z"></path>
                                                <path style="fill:#FFFFFF;"
                                                  d="M307.071,61.608c-16.937-13.899-36.396-24.63-57.471-31.354
  c7.952,10.02,15.063,22.303,21.269,36.655C282.958,65.358,295.046,63.677,307.071,61.608z"></path>
                                                <path style="fill:#FFFFFF;"
                                                  d="M256.388,90.182c-16.356,1.487-32.84,2.392-49.196,2.651v32.776h58.828
                                                  C263.434,112.873,260.202,100.978,256.388,90.182z"></path>
                                                <path style="fill:#FFFFFF;"
                                                  d="M207.192,70.982c13.511-0.259,27.152-0.84,40.663-1.939c-11.313-23.725-25.471-39.952-40.663-45.253
                                                  V70.982z"></path>
                                                <path style="fill:#FFFFFF;"
  d="M288.129,266.99c-2.521,13.447-5.689,26.117-9.438,37.818c15.903,2.004,31.806,4.59,47.774,7.628c11.895-13.382,21.786-28.574,29.285-45.446L288.129,266.99L288.129,266.99z"></path>
                                                <path style="fill:#FFFFFF;"
                                                  d="M207.192,368.743c15.127-5.301,29.349-21.463,40.663-45.253
                                                  c-13.511-1.099-27.022-1.681-40.663-1.939V368.743z"></path>
                                                <path style="fill:#FFFFFF;"
                                                  d="M207.192,299.766c16.485,0.259,32.84,1.164,49.196,2.65c3.685-10.796,6.982-22.691,9.503-35.362
                                                  h-58.828v32.776h0.129V299.766z"></path>
                                                <path style="fill:#FFFFFF;"
                                                  d="M307.071,330.925c-12.024-2.069-24.113-3.814-36.267-5.172
  c-6.206,14.287-13.317,26.57-21.269,36.655C270.675,355.62,290.133,344.889,307.071,330.925z"></path>
                                                <path style="fill:#FFFFFF;"
                                                  d="M185.341,321.552c-13.511,0.259-27.152,0.84-40.663,1.939
                                                  c11.313,23.725,25.471,39.952,40.663,45.253V321.552z"></path>
                                                <path style="fill:#FFFFFF;"
                                                  d="M36.848,266.99c7.499,16.873,17.39,32.065,29.285,45.447c15.838-3.103,31.741-5.689,47.774-7.628
                                                  c-3.814-11.636-6.853-24.242-9.438-37.689h-67.62V266.99z"></path>
                                                <path style="fill:#FFFFFF;"
                                                  d="M136.145,302.352c16.356-1.487,32.84-2.392,49.196-2.65v-32.776h-58.828
                                                  C129.099,279.661,132.331,291.556,136.145,302.352z"></path>
                                                <path style="fill:#FFFFFF;"
                                                  d="M121.729,325.754c-12.024,1.422-24.178,3.103-36.267,5.172
  c16.937,13.899,36.396,24.63,57.471,31.354C134.982,352.388,127.806,340.04,121.729,325.754z"></path> </g>
                                              <g>
                                                <path style="fill:#194F82;"
  d="M383.03,135.305C355.62,53.204,279.855,0,196.267,0C112.42,0,37.236,53.139,9.826,134.917C3.814,140.865,0,149.139,0,158.255v75.96c0,8.792,3.556,16.873,9.244,22.82c29.608,82.812,103.046,135.499,187.022,135.499c83.846,0,159.741-53.85,186.44-134.917c6.012-5.947,9.826-14.222,9.826-23.337v-75.96C392.533,149.269,388.913,141.188,383.03,135.305z
                                                  M355.685,125.543h-67.62c-2.521-13.446-5.689-26.117-9.438-37.818
  c15.903-2.004,31.806-4.59,47.774-7.628C338.295,93.479,348.25,108.735,355.685,125.543z M307.071,61.608
  c-12.024,2.069-24.113,3.814-36.267,5.172c-6.077-14.287-13.317-26.57-21.269-36.655C270.675,36.913,290.133,47.644,307.071,61.608
                                                  z
  M207.192,23.79c15.127,5.301,29.349,21.463,40.663,45.253c-13.511,1.099-27.152,1.681-40.663,1.939V23.79z
                                                  M207.063,92.768h0.065
  c16.485-0.259,32.84-1.164,49.196-2.651c3.685,10.796,6.982,22.691,9.503,35.362h-58.828V92.768H207.063z
                                                  M185.341,23.79v47.192
  c-13.511-0.259-27.152-0.84-40.663-1.939C155.992,45.253,170.214,29.156,185.341,23.79z M185.277,92.768v32.776h-58.699
  c2.521-12.671,5.818-24.566,9.503-35.362C152.436,91.669,168.921,92.574,185.277,92.768z M142.933,30.125
  c-7.952,10.02-15.063,22.303-21.269,36.655c-12.024-1.422-24.178-3.103-36.267-5.172C102.4,47.644,121.859,36.913,142.933,30.125z
  M66.133,80.097c15.838,3.103,31.741,5.689,47.774,7.628c-3.814,11.636-6.853,24.242-9.438,37.818h-67.62
                                                  C44.283,108.735,54.238,93.479,66.133,80.097z
                                                  M36.848,266.99h67.62c2.521,13.447,5.689,26.117,9.438,37.689
  c-15.903,2.004-31.806,4.59-47.774,7.628C54.238,299.055,44.283,283.798,36.848,266.99z M85.463,330.925
  c12.024-2.069,24.113-3.814,36.267-5.172c6.206,14.287,13.317,26.57,21.269,36.655C121.859,355.62,102.4,344.889,85.463,330.925z
  M185.341,368.743c-15.127-5.301-29.349-21.463-40.663-45.253c13.511-1.099,27.152-1.681,40.663-1.939V368.743z
                                                  M185.471,299.766
  h-0.065c-16.485,0.259-32.84,1.164-49.196,2.65c-3.685-10.796-6.982-22.691-9.503-35.362h58.828v32.711H185.471z
                                                  M207.192,368.743
  v-47.192c13.511,0.259,27.152,0.84,40.663,1.939C236.541,347.281,222.319,363.378,207.192,368.743z
                                                  M207.257,299.766V266.99h58.699
  c-2.521,12.671-5.818,24.566-9.503,35.362C240.097,300.865,223.612,299.96,207.257,299.766z M249.6,362.408
  c7.952-10.02,15.063-22.303,21.269-36.655c12.024,1.422,24.178,3.103,36.267,5.172C290.133,344.889,270.675,355.62,249.6,362.408z
  M326.4,312.436c-15.838-3.103-31.741-5.689-47.774-7.628c3.814-11.636,6.853-24.242,9.438-37.818h67.62
                                                  C348.25,283.798,338.295,299.055,326.4,312.436z
                                                  M359.822,245.204H32.711c-6.012,0-10.925-4.848-10.925-10.925v-75.96
  c0-6.012,4.848-10.925,10.925-10.925h327.111c6.012,0,10.925,4.848,10.925,10.925v75.96h0.065
                                                  C370.747,240.291,365.899,245.204,359.822,245.204z"></path>
                                                <polygon style="fill:#194F82;" points="120.76,202.085 109.899,168.21
                                                  94.836,168.21 83.911,202.085 72.986,168.21 56.889,168.21 75.895,224.259
                                                  92.057,224.259 102.4,193.745 112.679,224.259 128.905,224.259
                                                  147.911,168.21 131.685,168.21 "></polygon>
                                                <polygon style="fill:#194F82;" points="214.562,202.15 203.701,168.275
                                                  188.638,168.275 177.713,202.15 166.853,168.275 150.691,168.275
                                                  169.697,224.259 185.859,224.259 196.267,193.81 206.481,224.323
                                                  222.707,224.323 241.713,168.275 225.487,168.275 "></polygon>
                                                <polygon style="fill:#194F82;" points="308.493,202.085 297.568,168.21
                                                  282.505,168.21 271.58,202.085 260.719,168.21 244.558,168.21
                                                  263.564,224.259 279.725,224.259 290.069,193.745 300.347,224.259
                                                  316.574,224.259 335.58,168.21 319.354,168.21 "></polygon> </g>
                                              <g>
                                                <path style="fill:#56ACE0;"
                                                  d="M270.675,326.141c0.129-0.065,0.323-0.259,0.453-0.323c-0.065,0-0.259,0-0.323,0
                                                  C270.739,325.947,270.739,326.012,270.675,326.141z"></path>
                                                <path style="fill:#56ACE0;"
                                                  d="M121.406,325.754c0.129,0.065,0.323,0.259,0.453,0.323c-0.065-0.129-0.065-0.259-0.129-0.388
                                                  C121.6,325.754,121.471,325.754,121.406,325.754z"></path>
                                                <path style="fill:#56ACE0;"
                                                  d="M271.127,66.78c-0.129-0.065-0.323-0.259-0.453-0.323c0.065,0.129,0.065,0.259,0.129,0.388
                                                  C270.933,66.78,271.063,66.78,271.127,66.78z"></path>
                                                <path style="fill:#56ACE0;"
                                                  d="M121.859,66.392c-0.129,0.065-0.323,0.259-0.453,0.323c0.065,0,0.259,0,0.323,0
                                                  C121.794,66.586,121.794,66.521,121.859,66.392z"></path>
                                                <path style="fill:#56ACE0;"
                                                  d="M70.723,266.99c7.24,14.933,16.743,28.38,28.057,39.887c5.042-0.776,10.02-1.552,15.127-2.133
                                                  c-3.814-11.636-6.853-24.242-9.438-37.689H70.723V266.99z"></path>
                                                <path style="fill:#56ACE0;"
                                                  d="M70.723,266.99L70.723,266.99L70.723,266.99z"></path>
                                                <path style="fill:#56ACE0;"
                                                  d="M185.277,266.99h-58.699c2.521,12.671,5.818,24.566,9.503,35.362
                                                  c16.356-1.487,32.84-2.392,49.196-2.65V266.99z"></path>
                                                <path style="fill:#56ACE0;"
                                                  d="M288.129,267.055v-0.065c-2.521,13.447-5.689,26.117-9.438,37.818
  c5.042,0.646,10.02,1.422,15.127,2.133c11.313-11.507,20.816-24.954,28.057-39.887H288.129z"></path>
                                                <path style="fill:#56ACE0;"
                                                  d="M144.743,69.107c13.511,1.099,27.152,1.681,40.663,1.939V44.154
  c-10.279,0.84-20.234,2.844-29.802,5.947C151.725,55.725,148.04,61.996,144.743,69.107z"></path>
                                                <path style="fill:#56ACE0;"
                                                  d="M207.192,348.444c10.279-0.84,20.234-2.844,29.802-5.947c3.814-5.624,7.499-11.895,10.796-19.006
                                                  c-13.511-1.099-27.152-1.681-40.663-1.939v26.893H207.192z"></path>
                                                <path style="fill:#56ACE0;"
                                                  d="M207.192,299.766c16.485,0.259,32.84,1.164,49.196,2.65c3.814-10.796,6.982-22.691,9.568-35.362
                                                  h-58.828v32.711H207.192z"></path>
                                                <path style="fill:#56ACE0;"
                                                  d="M207.257,92.768v32.776h58.699c-2.521-12.671-5.818-24.566-9.503-35.362
                                                  C240.097,91.669,223.612,92.574,207.257,92.768z"></path>
                                                <path style="fill:#56ACE0;"
                                                  d="M236.994,50.036c-9.568-3.103-19.523-5.107-29.802-5.947v26.893
  c13.511-0.259,27.152-0.84,40.663-1.939C244.493,62.061,240.808,55.725,236.994,50.036z"></path>
                                                <path style="fill:#56ACE0;"
                                                  d="M155.539,342.497c9.568,3.103,19.523,5.107,29.802,5.947v-26.893
  c-13.576,0.259-27.152,0.84-40.663,1.939C148.04,330.473,151.79,336.808,155.539,342.497z"></path>
                                                <path style="fill:#56ACE0;"
                                                  d="M321.81,125.608v-0.065c-7.24-14.933-16.743-28.38-28.057-39.887
  c-5.042,0.776-10.02,1.552-15.127,2.133c3.814,11.636,6.853,24.242,9.438,37.818H321.81z"></path>
                                                <path style="fill:#56ACE0;"
  d="M104.404,125.543c2.521-13.446,5.689-26.117,9.438-37.818c-5.042-0.646-10.02-1.422-15.127-2.133c-11.313,11.507-20.816,24.954-28.057,39.887h33.745C104.404,125.479,104.404,125.543,104.404,125.543z"></path>
                                                <path style="fill:#56ACE0;"
                                                  d="M126.578,125.543h58.828V92.768c-16.485-0.259-32.84-1.164-49.196-2.651
                                                  C132.331,100.978,129.099,112.873,126.578,125.543z"></path> </g> </svg>
                                          </a> </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]--> </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt; word-break: break-word;" width="100%" cellspacing="0" cellpadding="0"
                        border="0">
                        <tbody>
                          <tr>
                            <td class="pad" style="padding-bottom:5px;">
                              <div style="color: #575757;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial,
  sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:24px;">
                              </div>
                              <br>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="paragraph_block block-3" role="presentation" style="mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt; word-break: break-word;" width="100%" cellspacing="0" cellpadding="0"
                        border="0">
                        <tbody>
                          <tr>
                            <td class="pad" style="padding-bottom:5px;padding-left:20px;padding-right:20px;">
                              <div style="color: #575757;direction:ltr;font-family:Helvetica Neue, Helvetica, Arial,
  sans-serif;font-size:12px;font-weight:400;letter-spacing:0px;line-height:180%;text-align:center;mso-line-height-alt:21.6px;">
                                <p style="margin: 0; text-decoration: none; color: #737172;">Club 306<br>
                                  12 allée Ledru Rollin<br>
                                  93320 Les Pavillons sous Bois</p>
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
      <!-- End -->
    </body>
  </html>
  `
}

export {
  addNewCar,
  confirMail,
  mailContact,
  memberSignUpEvent,
  newsLetter,
  recordDb,
  removeCar,
  sendOTP,
  updateCarInfo,
  welcomeNewMember,
}
