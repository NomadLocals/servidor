const { Router } = require("express");
const router = Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID =
  "902072189542-hj43ncfu2jlr33bjorrek8048a1iremu.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04Nea6LAg7WIFCgYIARAAGAQSNwF-L9IrLbpeBDVC8sNPpfW7cyZeG8RTj72DJDAZ47eKIpBRKVm6pT9gKCSBJWdEQQu5_6k-zQ4";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

//1---------------------Mail registro ------------------------------------
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

router.post("/register", (req, res) => {
  try {
    const { email, userName } = req.body;
    const contentHtml = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>Trigger Newsletter 2</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if !mso]><!-- -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i"
    />
    <!--<![endif]-->
    <style type="text/css">
      .rollover:hover .rollover-first {
        max-height: 0px !important;
        display: none !important;
      }
      .rollover:hover .rollover-second {
        max-height: none !important;
        display: inline-block !important;
      }
      .rollover div {
        font-size: 0px;
      }
      u ~ div img + div > div {
        display: none;
      }
      #outlook a {
        padding: 0;
      }
      span.MsoHyperlink,
      span.MsoHyperlinkFollowed {
        color: inherit;
        mso-style-priority: 99;
      }
      a.es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      .es-header-body a:hover {
        color: #1376c8 !important;
      }
      .es-content-body a:hover {
        color: #0b5394 !important;
      }
      .es-footer-body a:hover {
        color: #333333 !important;
      }
      .es-infoblock a:hover {
        color: #cccccc !important;
      }
      .es-button-border:hover {
        border-color: #3d5ca3 #3d5ca3 #3d5ca3 #3d5ca3 !important;
        background: #ffffff !important;
      }
      .es-button-border:hover a.es-button,
      .es-button-border:hover button.es-button {
        background: #ffffff !important;
      }
      .es-button-border:hover a.es-button {
        background: #ffffff !important;
        border-color: #ffffff !important;
      }
      @media only screen and (max-width: 600px) {
        *[class="gmail-fix"] {
          display: none !important;
        }
        p,
        a {
          line-height: 150% !important;
        }
        h1,
        h1 a {
          line-height: 120% !important;
        }
        h2,
        h2 a {
          line-height: 120% !important;
        }
        h3,
        h3 a {
          line-height: 120% !important;
        }
        h4,
        h4 a {
          line-height: 120% !important;
        }
        h5,
        h5 a {
          line-height: 120% !important;
        }
        h6,
        h6 a {
          line-height: 120% !important;
        }
        .es-header-body p {
        }
        .es-content-body p {
        }
        .es-footer-body p {
        }
        .es-infoblock p {
        }
        h1 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h2 {
          font-size: 16px !important;
          text-align: left;
          line-height: 120% !important;
        }
        h3 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h4 {
          font-size: 24px !important;
          text-align: left;
        }
        h5 {
          font-size: 20px !important;
          text-align: left;
        }
        h6 {
          font-size: 16px !important;
          text-align: left;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 20px !important;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 16px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-header-body h4 a,
        .es-content-body h4 a,
        .es-footer-body h4 a {
          font-size: 24px !important;
        }
        .es-header-body h5 a,
        .es-content-body h5 a,
        .es-footer-body h5 a {
          font-size: 20px !important;
        }
        .es-header-body h6 a,
        .es-content-body h6 a,
        .es-footer-body h6 a {
          font-size: 16px !important;
        }
        .es-menu td a {
          font-size: 14px !important;
        }
        .es-header-body p,
        .es-header-body a {
          font-size: 10px !important;
        }
        .es-content-body p,
        .es-content-body a {
          font-size: 14px !important;
        }
        .es-footer-body p,
        .es-footer-body a {
          font-size: 12px !important;
        }
        .es-infoblock p,
        .es-infoblock a {
          font-size: 12px !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3,
        .es-m-txt-c h4,
        .es-m-txt-c h5,
        .es-m-txt-c h6 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3,
        .es-m-txt-r h4,
        .es-m-txt-r h5,
        .es-m-txt-r h6 {
          text-align: right !important;
        }
        .es-m-txt-j,
        .es-m-txt-j h1,
        .es-m-txt-j h2,
        .es-m-txt-j h3,
        .es-m-txt-j h4,
        .es-m-txt-j h5,
        .es-m-txt-j h6 {
          text-align: justify !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3,
        .es-m-txt-l h4,
        .es-m-txt-l h5,
        .es-m-txt-l h6 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img,
        .es-m-txt-r .rollover:hover .rollover-second,
        .es-m-txt-c .rollover:hover .rollover-second,
        .es-m-txt-l .rollover:hover .rollover-second {
          display: inline !important;
        }
        .es-m-txt-r .rollover div,
        .es-m-txt-c .rollover div,
        .es-m-txt-l .rollover div {
          line-height: 0 !important;
          font-size: 0 !important;
        }
        .es-spacer {
          display: inline-table;
        }
        a.es-button,
        button.es-button {
          font-size: 14px !important;
        }
        .es-m-fw,
        .es-m-fw.es-fw,
        .es-m-fw .es-button {
          display: block !important;
        }
        .es-m-il,
        .es-m-il .es-button,
        .es-social,
        .es-social td,
        .es-menu {
          display: inline-block !important;
        }
        .es-adaptive table,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        .es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        .es-social td {
          padding-bottom: 10px;
        }
        .h-auto {
          height: auto !important;
        }
        p,
        ul li,
        ol li,
        a {
          font-size: 16px !important;
        }
        h2 a {
          text-align: left;
        }
        a.es-button {
          border-left-width: 0px !important;
          border-right-width: 0px !important;
        }
        a.es-button,
        button.es-button {
          display: inline-block !important;
        }
        .es-button-border {
          display: inline-block !important;
        }
      }
    </style>
  </head>
  <body style="width: 100%; height: 100%; padding: 0; margin: 0">
    <div class="es-wrapper-color" style="background-color: #fafafa">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#fafafa"></v:fill>
        </v:background>
      <![endif]-->
      <table
        class="es-wrapper"
        width="100%"
        cellspacing="0"
        cellpadding="0"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #fafafa;
        "
      >
        <tr>
          <td valign="top" style="padding: 0; margin: 0">
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td
                  class="es-adaptive"
                  align="center"
                  style="padding: 0; margin: 0"
                >
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                      border-width: 0;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                  >
                    <tr>
                      <td
                        align="left"
                        bgcolor="#000000"
                        style="
                          padding: 15px;
                          margin: 0;
                          background-color: #000000;
                        "
                      >
                        <table
                          cellspacing="0"
                          cellpadding="0"
                          align="right"
                          class="es-right"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 570px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <img
                                      class="adapt-img"
                                      src="https://xommmf.stripocdn.email/content/guids/CABINET_ed6964083c593ced759f47d5d2edce9b0c63559040e2242a5f44ccb031da9133/images/image_k4S.png"
                                      alt=""
                                      width="165"
                                      style="
                                        display: block;
                                        font-size: 14px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                      "
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-content"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td
                  style="padding: 0; margin: 0; background-color: #fafafa"
                  bgcolor="#fafafa"
                  align="center"
                >
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                  >
                    <tr>
                      <td
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 40px;
                          padding-right: 20px;
                          padding-left: 20px;
                          background-color: #f1efe7;
                          background-position: left top;
                        "
                        bgcolor="#F1EFE7"
                        align="left"
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  background-position: left top;
                                "
                                role="presentation"
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                        text-align: center;
                                      "
                                    >
                                      <strong
                                        ><i style="font-size: 18px !important"
                                          >¡${userName},
                                        </i></strong
                                      >
                                    </p>
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                        text-align: center;
                                      "
                                    >
                                      <strong
                                        ><i style="font-size: 18px !important"
                                          >qué bien tenerte dentro de la
                                          comunidad!</i
                                        ></strong
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Nomad Locals es una plataforma donde la
                                        pasión une a las personas y las
                                        convierte en amistades auténticas, sin
                                        importar dónde te encuentres en el
                                        mundo. El objetivo es construir juntos
                                        un espacio para conectar con personas
                                        que comparten tus mismos intereses y
                                        actividades favoritas, creando vínculos
                                        significativos y duraderos.</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Imagina unirte a una caminata con
                                        fotógrafos entusiastas para capturar
                                        impresionantes paisajes, asistir a una
                                        clase de cocina con chefs locales para
                                        descubrir nuevos sabores, o unirte a
                                        grupos de aventureros para explorar
                                        lugares increíbles.</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >En Nomad Locals, todos asumimos el
                                        compromiso de construir un entorno
                                        seguro y amigable para conectar. Creemos
                                        en la importancia de la comunidad y en
                                        el poder de la pasión para unir a las
                                        personas. Así que, ¡no esperes más y
                                        únete a un encuentro o crea el tuyo!</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                      padding-top: 20px;
                                    "
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 20px;
                                        font-style: normal;
                                        font-weight: normal;
                                        line-height: 24px;
                                        color: #000000;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >¡Bienvenida/o!</i
                                      >
                                    </h1>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      margin: 0;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                      padding-top: 20px;
                                      padding-bottom: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Equipo de Nomad Locals</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-footer"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td
                  style="padding: 0; margin: 0; background-color: #fafafa"
                  bgcolor="#fafafa"
                  align="center"
                >
                  <table
                    class="es-footer-body"
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        style="
                          margin: 0;
                          padding-right: 20px;
                          padding-left: 20px;
                          padding-top: 10px;
                          padding-bottom: 16px;
                          background-color: #000000;
                          background-position: left top;
                        "
                        bgcolor="#000000"
                        align="left"
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    class="es-m-txt-c"
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 5px;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      class="es-table-not-adapt es-social"
                                      cellspacing="0"
                                      cellpadding="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/facebook-square-white.png"
                                            alt="Fb"
                                            title="Facebook"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/twitter-square-white.png"
                                            alt="Tw"
                                            title="Twitter"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/instagram-square-white.png"
                                            alt="Ig"
                                            title="Instagram"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/youtube-square-white.png"
                                            alt="Yt"
                                            title="Youtube"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="padding: 0; margin: 0"
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/linkedin-square-white.png"
                                            alt="In"
                                            title="Linkedin"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #f1efe7;
                                        font-size: 14px;
                                      "
                                    >
                                      Contact us: nomad.locals01@gmail.com
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 15px;
                                      margin: 0;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      border="0"
                                      width="100%"
                                      height="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="es-spacer"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            border-bottom: 2px solid #cccccc;
                                            background: none;
                                            height: 1px;
                                            width: 100%;
                                            margin: 0px;
                                          "
                                        ></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <img
                                      class="adapt-img"
                                      src="https://res.cloudinary.com/dwit2djhy/image/upload/v1690153675/Nomadlocals/Logos/4_dpd03p.png"
                                      alt=""
                                      width="335"
                                      style="
                                        display: block;
                                        font-size: 14px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                      "
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
    `;

    async function sendMail() {
      try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: "nomad.locals01@gmail.com",
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken,
          },
        });
        const mailOptions = {
          from: "Nomad Locals <nomad.locals01@gmail.com>",
          to: email,
          subject: "¡Te damos la bienvenida a Nomad Locals!",
          html: contentHtml,
        };
        const result = transporter.sendMail(mailOptions);
        return result;
      } catch (error) {
        res.status(400).send(error.message);
      }
    }
    sendMail()
      .then((result) => res.status(200).send("enviado"))
      .catch((error) => console.log(error.message));
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//2------------------------Crear Evento--------------------
router.post("/newEventCreated", (req, res) => {
  try {
    const { email, userName, activityData } = req.body;
    const { name, eventDate, description } = activityData;
    const contentHtml = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>Trigger Newsletter 2</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if !mso]><!-- -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i"
    />
    <!--<![endif]-->
    <style type="text/css">
      .rollover:hover .rollover-first {
        max-height: 0px !important;
        display: none !important;
      }
      .rollover:hover .rollover-second {
        max-height: none !important;
        display: inline-block !important;
      }
      .rollover div {
        font-size: 0px;
      }
      u ~ div img + div > div {
        display: none;
      }
      #outlook a {
        padding: 0;
      }
      span.MsoHyperlink,
      span.MsoHyperlinkFollowed {
        color: inherit;
        mso-style-priority: 99;
      }
      a.es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      .es-header-body a:hover {
        color: #1376c8 !important;
      }
      .es-content-body a:hover {
        color: #0b5394 !important;
      }
      .es-footer-body a:hover {
        color: #333333 !important;
      }
      .es-infoblock a:hover {
        color: #cccccc !important;
      }
      .es-button-border:hover {
        border-color: #3d5ca3 #3d5ca3 #3d5ca3 #3d5ca3 !important;
        background: #ffffff !important;
      }
      .es-button-border:hover a.es-button,
      .es-button-border:hover button.es-button {
        background: #ffffff !important;
      }
      .es-button-border:hover a.es-button {
        background: #ffffff !important;
        border-color: #ffffff !important;
      }
      @media only screen and (max-width: 600px) {
        *[class="gmail-fix"] {
          display: none !important;
        }
        p,
        a {
          line-height: 150% !important;
        }
        h1,
        h1 a {
          line-height: 120% !important;
        }
        h2,
        h2 a {
          line-height: 120% !important;
        }
        h3,
        h3 a {
          line-height: 120% !important;
        }
        h4,
        h4 a {
          line-height: 120% !important;
        }
        h5,
        h5 a {
          line-height: 120% !important;
        }
        h6,
        h6 a {
          line-height: 120% !important;
        }
        .es-header-body p {
        }
        .es-content-body p {
        }
        .es-footer-body p {
        }
        .es-infoblock p {
        }
        h1 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h2 {
          font-size: 16px !important;
          text-align: left;
          line-height: 120% !important;
        }
        h3 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h4 {
          font-size: 24px !important;
          text-align: left;
        }
        h5 {
          font-size: 20px !important;
          text-align: left;
        }
        h6 {
          font-size: 16px !important;
          text-align: left;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 20px !important;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 16px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-header-body h4 a,
        .es-content-body h4 a,
        .es-footer-body h4 a {
          font-size: 24px !important;
        }
        .es-header-body h5 a,
        .es-content-body h5 a,
        .es-footer-body h5 a {
          font-size: 20px !important;
        }
        .es-header-body h6 a,
        .es-content-body h6 a,
        .es-footer-body h6 a {
          font-size: 16px !important;
        }
        .es-menu td a {
          font-size: 14px !important;
        }
        .es-header-body p,
        .es-header-body a {
          font-size: 10px !important;
        }
        .es-content-body p,
        .es-content-body a {
          font-size: 14px !important;
        }
        .es-footer-body p,
        .es-footer-body a {
          font-size: 12px !important;
        }
        .es-infoblock p,
        .es-infoblock a {
          font-size: 12px !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3,
        .es-m-txt-c h4,
        .es-m-txt-c h5,
        .es-m-txt-c h6 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3,
        .es-m-txt-r h4,
        .es-m-txt-r h5,
        .es-m-txt-r h6 {
          text-align: right !important;
        }
        .es-m-txt-j,
        .es-m-txt-j h1,
        .es-m-txt-j h2,
        .es-m-txt-j h3,
        .es-m-txt-j h4,
        .es-m-txt-j h5,
        .es-m-txt-j h6 {
          text-align: justify !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3,
        .es-m-txt-l h4,
        .es-m-txt-l h5,
        .es-m-txt-l h6 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img,
        .es-m-txt-r .rollover:hover .rollover-second,
        .es-m-txt-c .rollover:hover .rollover-second,
        .es-m-txt-l .rollover:hover .rollover-second {
          display: inline !important;
        }
        .es-m-txt-r .rollover div,
        .es-m-txt-c .rollover div,
        .es-m-txt-l .rollover div {
          line-height: 0 !important;
          font-size: 0 !important;
        }
        .es-spacer {
          display: inline-table;
        }
        a.es-button,
        button.es-button {
          font-size: 14px !important;
        }
        .es-m-fw,
        .es-m-fw.es-fw,
        .es-m-fw .es-button {
          display: block !important;
        }
        .es-m-il,
        .es-m-il .es-button,
        .es-social,
        .es-social td,
        .es-menu {
          display: inline-block !important;
        }
        .es-adaptive table,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        .es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        .es-social td {
          padding-bottom: 10px;
        }
        .h-auto {
          height: auto !important;
        }
        p,
        ul li,
        ol li,
        a {
          font-size: 16px !important;
        }
        h2 a {
          text-align: left;
        }
        a.es-button {
          border-left-width: 0px !important;
          border-right-width: 0px !important;
        }
        a.es-button,
        button.es-button {
          display: inline-block !important;
        }
        .es-button-border {
          display: inline-block !important;
        }
      }
    </style>
  </head>
  <body style="width: 100%; height: 100%; padding: 0; margin: 0">
    <div class="es-wrapper-color" style="background-color: #fafafa">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#fafafa"></v:fill>
        </v:background>
      <![endif]-->
      <table
        class="es-wrapper"
        width="100%"
        cellspacing="0"
        cellpadding="0"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #fafafa;
        "
      >
        <tr>
          <td valign="top" style="padding: 0; margin: 0">
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td
                  class="es-adaptive"
                  align="center"
                  style="padding: 0; margin: 0"
                >
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                      border-width: 0;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                  >
                    <tr>
                      <td
                        align="left"
                        bgcolor="#000000"
                        style="
                          padding: 15px;
                          margin: 0;
                          background-color: #000000;
                        "
                      >
                        <table
                          cellspacing="0"
                          cellpadding="0"
                          align="right"
                          class="es-right"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 570px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <img
                                      class="adapt-img"
                                      src="https://xommmf.stripocdn.email/content/guids/CABINET_ed6964083c593ced759f47d5d2edce9b0c63559040e2242a5f44ccb031da9133/images/image_k4S.png"
                                      alt=""
                                      width="165"
                                      style="
                                        display: block;
                                        font-size: 14px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                      "
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-content"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td
                  style="padding: 0; margin: 0; background-color: #fafafa"
                  bgcolor="#fafafa"
                  align="center"
                >
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                  >
                    <tr>
                      <td
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 40px;
                          padding-right: 20px;
                          padding-left: 20px;
                          background-color: #f1efe7;
                          background-position: left top;
                        "
                        bgcolor="#F1EFE7"
                        align="left"
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  background-position: left top;
                                "
                                role="presentation"
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                        text-align: center;
                                      "
                                    >
                                      <strong
                                        ><i style="font-size: 18px !important"
                                          >¡Hola ${userName}!
                                        </i></strong
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Has creado un evento exitosamente en Nomad Locals.</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >¡Estamos felices que estés por conectar con personas afines y compartir tus pasiones!</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Tu encuentro "${name}" está programado para "${eventDate}". En este encuentro estás proponiendo "${description}". Seguro  que será una experiencia increíble  tanto para ti como para las personas asistentes.</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Recuerda que como persona que propone el encuentro, tienes la responsabilidad de gestionar el evento . No olvides conectar por el chat con los otros participantes. Y si necesitas asistencia adicional,o tienes una pregunta, estamos aquí.</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                      padding-top: 20px;
                                    "
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 20px;
                                        font-style: normal;
                                        font-weight: normal;
                                        line-height: 24px;
                                        color: #000000;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >¡Disfruta de esta increíble oportunidad para conectar!</i
                                      >
                                    </h1>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      margin: 0;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                      padding-top: 20px;
                                      padding-bottom: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Equipo de Nomad Locals</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-footer"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td
                  style="padding: 0; margin: 0; background-color: #fafafa"
                  bgcolor="#fafafa"
                  align="center"
                >
                  <table
                    class="es-footer-body"
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        style="
                          margin: 0;
                          padding-right: 20px;
                          padding-left: 20px;
                          padding-top: 10px;
                          padding-bottom: 16px;
                          background-color: #000000;
                          background-position: left top;
                        "
                        bgcolor="#000000"
                        align="left"
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    class="es-m-txt-c"
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 5px;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      class="es-table-not-adapt es-social"
                                      cellspacing="0"
                                      cellpadding="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/facebook-square-white.png"
                                            alt="Fb"
                                            title="Facebook"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/twitter-square-white.png"
                                            alt="Tw"
                                            title="Twitter"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/instagram-square-white.png"
                                            alt="Ig"
                                            title="Instagram"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/youtube-square-white.png"
                                            alt="Yt"
                                            title="Youtube"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="padding: 0; margin: 0"
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/linkedin-square-white.png"
                                            alt="In"
                                            title="Linkedin"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #f1efe7;
                                        font-size: 14px;
                                      "
                                    >
                                      Contact us: nomad.locals01@gmail.com
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 15px;
                                      margin: 0;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      border="0"
                                      width="100%"
                                      height="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="es-spacer"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            border-bottom: 2px solid #cccccc;
                                            background: none;
                                            height: 1px;
                                            width: 100%;
                                            margin: 0px;
                                          "
                                        ></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <img
                                      class="adapt-img"
                                      src="https://res.cloudinary.com/dwit2djhy/image/upload/v1690153675/Nomadlocals/Logos/4_dpd03p.png"
                                      alt=""
                                      width="335"
                                      style="
                                        display: block;
                                        font-size: 14px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                      "
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
    `;

    async function sendMail() {
      try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: "nomad.locals01@gmail.com",
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken,
          },
        });
        const mailOptions = {
          from: "Nomad Locals <nomad.locals01@gmail.com>",
          to: email,
          subject: "¡Has creado un encuentro exitosamente en Nomad Locals!",
          html: contentHtml,
        };
        const result = transporter.sendMail(mailOptions);
        return result;
      } catch (error) {
        res.status(400).send(error.message);
      }
    }
    sendMail()
      .then((result) => res.status(200).send("enviado"))
      .catch((error) => console.log(error.message));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//3---------------------Mail Baneo ------------------------------------
router.post("/delete", (req, res) => {
  try {
    const { email } = req.body;
    const contentHtml = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>Trigger Newsletter 2</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if !mso]><!-- -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i"
    />
    <!--<![endif]-->
    <style type="text/css">
      .rollover:hover .rollover-first {
        max-height: 0px !important;
        display: none !important;
      }
      .rollover:hover .rollover-second {
        max-height: none !important;
        display: inline-block !important;
      }
      .rollover div {
        font-size: 0px;
      }
      u ~ div img + div > div {
        display: none;
      }
      #outlook a {
        padding: 0;
      }
      span.MsoHyperlink,
      span.MsoHyperlinkFollowed {
        color: inherit;
        mso-style-priority: 99;
      }
      a.es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      .es-header-body a:hover {
        color: #1376c8 !important;
      }
      .es-content-body a:hover {
        color: #0b5394 !important;
      }
      .es-footer-body a:hover {
        color: #333333 !important;
      }
      .es-infoblock a:hover {
        color: #cccccc !important;
      }
      .es-button-border:hover {
        border-color: #3d5ca3 #3d5ca3 #3d5ca3 #3d5ca3 !important;
        background: #ffffff !important;
      }
      .es-button-border:hover a.es-button,
      .es-button-border:hover button.es-button {
        background: #ffffff !important;
      }
      .es-button-border:hover a.es-button {
        background: #ffffff !important;
        border-color: #ffffff !important;
      }
      @media only screen and (max-width: 600px) {
        *[class="gmail-fix"] {
          display: none !important;
        }
        p,
        a {
          line-height: 150% !important;
        }
        h1,
        h1 a {
          line-height: 120% !important;
        }
        h2,
        h2 a {
          line-height: 120% !important;
        }
        h3,
        h3 a {
          line-height: 120% !important;
        }
        h4,
        h4 a {
          line-height: 120% !important;
        }
        h5,
        h5 a {
          line-height: 120% !important;
        }
        h6,
        h6 a {
          line-height: 120% !important;
        }
        .es-header-body p {
        }
        .es-content-body p {
        }
        .es-footer-body p {
        }
        .es-infoblock p {
        }
        h1 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h2 {
          font-size: 16px !important;
          text-align: left;
          line-height: 120% !important;
        }
        h3 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h4 {
          font-size: 24px !important;
          text-align: left;
        }
        h5 {
          font-size: 20px !important;
          text-align: left;
        }
        h6 {
          font-size: 16px !important;
          text-align: left;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 20px !important;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 16px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-header-body h4 a,
        .es-content-body h4 a,
        .es-footer-body h4 a {
          font-size: 24px !important;
        }
        .es-header-body h5 a,
        .es-content-body h5 a,
        .es-footer-body h5 a {
          font-size: 20px !important;
        }
        .es-header-body h6 a,
        .es-content-body h6 a,
        .es-footer-body h6 a {
          font-size: 16px !important;
        }
        .es-menu td a {
          font-size: 14px !important;
        }
        .es-header-body p,
        .es-header-body a {
          font-size: 10px !important;
        }
        .es-content-body p,
        .es-content-body a {
          font-size: 14px !important;
        }
        .es-footer-body p,
        .es-footer-body a {
          font-size: 12px !important;
        }
        .es-infoblock p,
        .es-infoblock a {
          font-size: 12px !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3,
        .es-m-txt-c h4,
        .es-m-txt-c h5,
        .es-m-txt-c h6 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3,
        .es-m-txt-r h4,
        .es-m-txt-r h5,
        .es-m-txt-r h6 {
          text-align: right !important;
        }
        .es-m-txt-j,
        .es-m-txt-j h1,
        .es-m-txt-j h2,
        .es-m-txt-j h3,
        .es-m-txt-j h4,
        .es-m-txt-j h5,
        .es-m-txt-j h6 {
          text-align: justify !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3,
        .es-m-txt-l h4,
        .es-m-txt-l h5,
        .es-m-txt-l h6 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img,
        .es-m-txt-r .rollover:hover .rollover-second,
        .es-m-txt-c .rollover:hover .rollover-second,
        .es-m-txt-l .rollover:hover .rollover-second {
          display: inline !important;
        }
        .es-m-txt-r .rollover div,
        .es-m-txt-c .rollover div,
        .es-m-txt-l .rollover div {
          line-height: 0 !important;
          font-size: 0 !important;
        }
        .es-spacer {
          display: inline-table;
        }
        a.es-button,
        button.es-button {
          font-size: 14px !important;
        }
        .es-m-fw,
        .es-m-fw.es-fw,
        .es-m-fw .es-button {
          display: block !important;
        }
        .es-m-il,
        .es-m-il .es-button,
        .es-social,
        .es-social td,
        .es-menu {
          display: inline-block !important;
        }
        .es-adaptive table,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        .es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        .es-social td {
          padding-bottom: 10px;
        }
        .h-auto {
          height: auto !important;
        }
        p,
        ul li,
        ol li,
        a {
          font-size: 16px !important;
        }
        h2 a {
          text-align: left;
        }
        a.es-button {
          border-left-width: 0px !important;
          border-right-width: 0px !important;
        }
        a.es-button,
        button.es-button {
          display: inline-block !important;
        }
        .es-button-border {
          display: inline-block !important;
        }
      }
    </style>
  </head>
  <body style="width: 100%; height: 100%; padding: 0; margin: 0">
    <div class="es-wrapper-color" style="background-color: #fafafa">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#fafafa"></v:fill>
        </v:background>
      <![endif]-->
      <table
        class="es-wrapper"
        width="100%"
        cellspacing="0"
        cellpadding="0"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #fafafa;
        "
      >
        <tr>
          <td valign="top" style="padding: 0; margin: 0">
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td
                  class="es-adaptive"
                  align="center"
                  style="padding: 0; margin: 0"
                >
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                      border-width: 0;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                  >
                    <tr>
                      <td
                        align="left"
                        bgcolor="#000000"
                        style="
                          padding: 15px;
                          margin: 0;
                          background-color: #000000;
                        "
                      >
                        <table
                          cellspacing="0"
                          cellpadding="0"
                          align="right"
                          class="es-right"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 570px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <img
                                      class="adapt-img"
                                      src="https://xommmf.stripocdn.email/content/guids/CABINET_ed6964083c593ced759f47d5d2edce9b0c63559040e2242a5f44ccb031da9133/images/image_k4S.png"
                                      alt=""
                                      width="165"
                                      style="
                                        display: block;
                                        font-size: 14px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                      "
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-content"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td
                  style="padding: 0; margin: 0; background-color: #fafafa"
                  bgcolor="#fafafa"
                  align="center"
                >
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                  >
                    <tr>
                      <td
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 40px;
                          padding-right: 20px;
                          padding-left: 20px;
                          background-color: #f1efe7;
                          background-position: left top;
                        "
                        bgcolor="#F1EFE7"
                        align="left"
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  background-position: left top;
                                "
                                role="presentation"
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                        text-align: center;
                                      "
                                    >
                                      <strong
                                        ><i style="font-size: 18px !important"
                                          >Querido ${email}...
                                        </i></strong
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Lamentamos informarte que tu cuenta en nuestro sitio web ha sido suspendida debido a incumplimiento de nuestras normas y políticas. Como resultado, se te ha denegado el acceso a tu cuenta y a las funcionalidades del sitio.</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Si consideras que ha habido un error o que la suspensión es injusta, por favor, ponte en contacto con nuestro equipo de soporte para revisar tu caso y proporcionar más detalles. Puedes enviar un correo electrónico a nomad.locals01@gmail.com.</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Entendemos que esto pueda ser inconveniente para ti y te pedimos disculpas por cualquier molestia causada. Nuestro objetivo es mantener una comunidad segura y respetuosa para todos nuestros usuarios, y tomamos las medidas necesarias para garantizar que se cumplan nuestras políticas.</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                            
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                      padding-top: 20px;
                                    "
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 20px;
                                        font-style: normal;
                                        font-weight: normal;
                                        line-height: 24px;
                                        color: #000000;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Gracias por tu comprensión.</i
                                      >
                                    </h1>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      margin: 0;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                      padding-top: 20px;
                                      padding-bottom: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Equipo de Nomad Locals</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-footer"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td
                  style="padding: 0; margin: 0; background-color: #fafafa"
                  bgcolor="#fafafa"
                  align="center"
                >
                  <table
                    class="es-footer-body"
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        style="
                          margin: 0;
                          padding-right: 20px;
                          padding-left: 20px;
                          padding-top: 10px;
                          padding-bottom: 16px;
                          background-color: #000000;
                          background-position: left top;
                        "
                        bgcolor="#000000"
                        align="left"
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    class="es-m-txt-c"
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 5px;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      class="es-table-not-adapt es-social"
                                      cellspacing="0"
                                      cellpadding="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/facebook-square-white.png"
                                            alt="Fb"
                                            title="Facebook"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/twitter-square-white.png"
                                            alt="Tw"
                                            title="Twitter"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/instagram-square-white.png"
                                            alt="Ig"
                                            title="Instagram"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/youtube-square-white.png"
                                            alt="Yt"
                                            title="Youtube"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="padding: 0; margin: 0"
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/linkedin-square-white.png"
                                            alt="In"
                                            title="Linkedin"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #f1efe7;
                                        font-size: 14px;
                                      "
                                    >
                                      Contact us: nomad.locals01@gmail.com
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 15px;
                                      margin: 0;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      border="0"
                                      width="100%"
                                      height="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="es-spacer"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            border-bottom: 2px solid #cccccc;
                                            background: none;
                                            height: 1px;
                                            width: 100%;
                                            margin: 0px;
                                          "
                                        ></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <img
                                      class="adapt-img"
                                      src="https://res.cloudinary.com/dwit2djhy/image/upload/v1690153675/Nomadlocals/Logos/4_dpd03p.png"
                                      alt=""
                                      width="335"
                                      style="
                                        display: block;
                                        font-size: 14px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                      "
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
    `;

    async function sendMail() {
      try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: "nomad.locals01@gmail.com",
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken,
          },
        });
        const mailOptions = {
          from: "Nomad Locals <nomad.locals01@gmail.com>",
          to: email,
          subject: "Nomad Locals: Cuenta suspendida - Acceso restringido",
          html: contentHtml,
        };
        const result = transporter.sendMail(mailOptions);
        return result;
      } catch (error) {
        res.status(400).send(error.message);
      }
    }
    sendMail()
      .then((result) => res.status(200).send("enviado"))
      .catch((error) => console.log(error.message));
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//4---------------------Mail recuperar usuario ------------------------------------
router.post("/retrieve", (req, res) => {
  try {
    const { email } = req.body;
    const contentHtml = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>Trigger Newsletter 2</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if !mso]><!-- -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i"
    />
    <!--<![endif]-->
    <style type="text/css">
      .rollover:hover .rollover-first {
        max-height: 0px !important;
        display: none !important;
      }
      .rollover:hover .rollover-second {
        max-height: none !important;
        display: inline-block !important;
      }
      .rollover div {
        font-size: 0px;
      }
      u ~ div img + div > div {
        display: none;
      }
      #outlook a {
        padding: 0;
      }
      span.MsoHyperlink,
      span.MsoHyperlinkFollowed {
        color: inherit;
        mso-style-priority: 99;
      }
      a.es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      .es-header-body a:hover {
        color: #1376c8 !important;
      }
      .es-content-body a:hover {
        color: #0b5394 !important;
      }
      .es-footer-body a:hover {
        color: #333333 !important;
      }
      .es-infoblock a:hover {
        color: #cccccc !important;
      }
      .es-button-border:hover {
        border-color: #3d5ca3 #3d5ca3 #3d5ca3 #3d5ca3 !important;
        background: #ffffff !important;
      }
      .es-button-border:hover a.es-button,
      .es-button-border:hover button.es-button {
        background: #ffffff !important;
      }
      .es-button-border:hover a.es-button {
        background: #ffffff !important;
        border-color: #ffffff !important;
      }
      @media only screen and (max-width: 600px) {
        *[class="gmail-fix"] {
          display: none !important;
        }
        p,
        a {
          line-height: 150% !important;
        }
        h1,
        h1 a {
          line-height: 120% !important;
        }
        h2,
        h2 a {
          line-height: 120% !important;
        }
        h3,
        h3 a {
          line-height: 120% !important;
        }
        h4,
        h4 a {
          line-height: 120% !important;
        }
        h5,
        h5 a {
          line-height: 120% !important;
        }
        h6,
        h6 a {
          line-height: 120% !important;
        }
        .es-header-body p {
        }
        .es-content-body p {
        }
        .es-footer-body p {
        }
        .es-infoblock p {
        }
        h1 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h2 {
          font-size: 16px !important;
          text-align: left;
          line-height: 120% !important;
        }
        h3 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h4 {
          font-size: 24px !important;
          text-align: left;
        }
        h5 {
          font-size: 20px !important;
          text-align: left;
        }
        h6 {
          font-size: 16px !important;
          text-align: left;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 20px !important;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 16px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-header-body h4 a,
        .es-content-body h4 a,
        .es-footer-body h4 a {
          font-size: 24px !important;
        }
        .es-header-body h5 a,
        .es-content-body h5 a,
        .es-footer-body h5 a {
          font-size: 20px !important;
        }
        .es-header-body h6 a,
        .es-content-body h6 a,
        .es-footer-body h6 a {
          font-size: 16px !important;
        }
        .es-menu td a {
          font-size: 14px !important;
        }
        .es-header-body p,
        .es-header-body a {
          font-size: 10px !important;
        }
        .es-content-body p,
        .es-content-body a {
          font-size: 14px !important;
        }
        .es-footer-body p,
        .es-footer-body a {
          font-size: 12px !important;
        }
        .es-infoblock p,
        .es-infoblock a {
          font-size: 12px !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3,
        .es-m-txt-c h4,
        .es-m-txt-c h5,
        .es-m-txt-c h6 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3,
        .es-m-txt-r h4,
        .es-m-txt-r h5,
        .es-m-txt-r h6 {
          text-align: right !important;
        }
        .es-m-txt-j,
        .es-m-txt-j h1,
        .es-m-txt-j h2,
        .es-m-txt-j h3,
        .es-m-txt-j h4,
        .es-m-txt-j h5,
        .es-m-txt-j h6 {
          text-align: justify !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3,
        .es-m-txt-l h4,
        .es-m-txt-l h5,
        .es-m-txt-l h6 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img,
        .es-m-txt-r .rollover:hover .rollover-second,
        .es-m-txt-c .rollover:hover .rollover-second,
        .es-m-txt-l .rollover:hover .rollover-second {
          display: inline !important;
        }
        .es-m-txt-r .rollover div,
        .es-m-txt-c .rollover div,
        .es-m-txt-l .rollover div {
          line-height: 0 !important;
          font-size: 0 !important;
        }
        .es-spacer {
          display: inline-table;
        }
        a.es-button,
        button.es-button {
          font-size: 14px !important;
        }
        .es-m-fw,
        .es-m-fw.es-fw,
        .es-m-fw .es-button {
          display: block !important;
        }
        .es-m-il,
        .es-m-il .es-button,
        .es-social,
        .es-social td,
        .es-menu {
          display: inline-block !important;
        }
        .es-adaptive table,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        .es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        .es-social td {
          padding-bottom: 10px;
        }
        .h-auto {
          height: auto !important;
        }
        p,
        ul li,
        ol li,
        a {
          font-size: 16px !important;
        }
        h2 a {
          text-align: left;
        }
        a.es-button {
          border-left-width: 0px !important;
          border-right-width: 0px !important;
        }
        a.es-button,
        button.es-button {
          display: inline-block !important;
        }
        .es-button-border {
          display: inline-block !important;
        }
      }
    </style>
  </head>
  <body style="width: 100%; height: 100%; padding: 0; margin: 0">
    <div class="es-wrapper-color" style="background-color: #fafafa">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#fafafa"></v:fill>
        </v:background>
      <![endif]-->
      <table
        class="es-wrapper"
        width="100%"
        cellspacing="0"
        cellpadding="0"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #fafafa;
        "
      >
        <tr>
          <td valign="top" style="padding: 0; margin: 0">
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td
                  class="es-adaptive"
                  align="center"
                  style="padding: 0; margin: 0"
                >
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                      border-width: 0;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                  >
                    <tr>
                      <td
                        align="left"
                        bgcolor="#000000"
                        style="
                          padding: 15px;
                          margin: 0;
                          background-color: #000000;
                        "
                      >
                        <table
                          cellspacing="0"
                          cellpadding="0"
                          align="right"
                          class="es-right"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 570px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <img
                                      class="adapt-img"
                                      src="https://xommmf.stripocdn.email/content/guids/CABINET_ed6964083c593ced759f47d5d2edce9b0c63559040e2242a5f44ccb031da9133/images/image_k4S.png"
                                      alt=""
                                      width="165"
                                      style="
                                        display: block;
                                        font-size: 14px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                      "
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-content"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td
                  style="padding: 0; margin: 0; background-color: #fafafa"
                  bgcolor="#fafafa"
                  align="center"
                >
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                  >
                    <tr>
                      <td
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 40px;
                          padding-right: 20px;
                          padding-left: 20px;
                          background-color: #f1efe7;
                          background-position: left top;
                        "
                        bgcolor="#F1EFE7"
                        align="left"
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  background-position: left top;
                                "
                                role="presentation"
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                        text-align: center;
                                      "
                                    >
                                      <strong
                                        ><i style="font-size: 18px !important"
                                          >Estimado/a ${email}...
                                        </i></strong
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Nos complace informarte que hemos revisado tu caso y hemos decidido reactivar tu cuenta en nuestro sitio web. Tu cuenta ha sido desbaneada y ahora tendrás acceso completo a todas las funcionalidades de nuestro sitio.</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Entendemos que los errores pueden ocurrir, y después de una revisión cuidadosa, hemos decidido darte una segunda oportunidad para ser parte de nuestra comunidad en línea.</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Si tienes alguna pregunta o inquietud, no dudes en ponerte en contacto con nuestro equipo de soporte en nomad.locals01@gmail.com o utilizando el formulario de contacto en nuestro sitio web.</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                            <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >¡Te damos la bienvenida de nuevo y esperamos que disfrutes de tu experiencia en nuestro sitio!</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                      padding-top: 20px;
                                    "
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 20px;
                                        font-style: normal;
                                        font-weight: normal;
                                        line-height: 24px;
                                        color: #000000;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Gracias por ser parte de nuestra comunidad.</i
                                      >
                                    </h1>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      margin: 0;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                      padding-top: 20px;
                                      padding-bottom: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Equipo de Nomad Locals</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-footer"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td
                  style="padding: 0; margin: 0; background-color: #fafafa"
                  bgcolor="#fafafa"
                  align="center"
                >
                  <table
                    class="es-footer-body"
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        style="
                          margin: 0;
                          padding-right: 20px;
                          padding-left: 20px;
                          padding-top: 10px;
                          padding-bottom: 16px;
                          background-color: #000000;
                          background-position: left top;
                        "
                        bgcolor="#000000"
                        align="left"
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    class="es-m-txt-c"
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 5px;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      class="es-table-not-adapt es-social"
                                      cellspacing="0"
                                      cellpadding="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/facebook-square-white.png"
                                            alt="Fb"
                                            title="Facebook"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/twitter-square-white.png"
                                            alt="Tw"
                                            title="Twitter"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/instagram-square-white.png"
                                            alt="Ig"
                                            title="Instagram"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/youtube-square-white.png"
                                            alt="Yt"
                                            title="Youtube"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="padding: 0; margin: 0"
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/linkedin-square-white.png"
                                            alt="In"
                                            title="Linkedin"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #f1efe7;
                                        font-size: 14px;
                                      "
                                    >
                                      Contact us: nomad.locals01@gmail.com
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 15px;
                                      margin: 0;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      border="0"
                                      width="100%"
                                      height="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="es-spacer"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            border-bottom: 2px solid #cccccc;
                                            background: none;
                                            height: 1px;
                                            width: 100%;
                                            margin: 0px;
                                          "
                                        ></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <img
                                      class="adapt-img"
                                      src="https://res.cloudinary.com/dwit2djhy/image/upload/v1690153675/Nomadlocals/Logos/4_dpd03p.png"
                                      alt=""
                                      width="335"
                                      style="
                                        display: block;
                                        font-size: 14px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                      "
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
    `;

    async function sendMail() {
      try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: "nomad.locals01@gmail.com",
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken,
          },
        });
        const mailOptions = {
          from: "Nomad Locals <nomad.locals01@gmail.com>",
          to: email,
          subject:
            "Nomad Locals:  Reactivación de cuenta - Bienvenido de nuevo",
          html: contentHtml,
        };
        const result = transporter.sendMail(mailOptions);
        return result;
      } catch (error) {
        res.status(400).send(error.message);
      }
    }
    sendMail()
      .then((result) => res.status(200).send("enviado"))
      .catch((error) => console.log(error.message));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//5---------------------Eliminacion de eventos ---------------------
router.post("/delete-event", (req, res) => {
  try {
    const { email, event } = req.body;

    const contentHtml = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>Trigger Newsletter 2</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if !mso]><!-- -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i"
    />
    <!--<![endif]-->
    <style type="text/css">
      .rollover:hover .rollover-first {
        max-height: 0px !important;
        display: none !important;
      }
      .rollover:hover .rollover-second {
        max-height: none !important;
        display: inline-block !important;
      }
      .rollover div {
        font-size: 0px;
      }
      u ~ div img + div > div {
        display: none;
      }
      #outlook a {
        padding: 0;
      }
      span.MsoHyperlink,
      span.MsoHyperlinkFollowed {
        color: inherit;
        mso-style-priority: 99;
      }
      a.es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      .es-header-body a:hover {
        color: #1376c8 !important;
      }
      .es-content-body a:hover {
        color: #0b5394 !important;
      }
      .es-footer-body a:hover {
        color: #333333 !important;
      }
      .es-infoblock a:hover {
        color: #cccccc !important;
      }
      .es-button-border:hover {
        border-color: #3d5ca3 #3d5ca3 #3d5ca3 #3d5ca3 !important;
        background: #ffffff !important;
      }
      .es-button-border:hover a.es-button,
      .es-button-border:hover button.es-button {
        background: #ffffff !important;
      }
      .es-button-border:hover a.es-button {
        background: #ffffff !important;
        border-color: #ffffff !important;
      }
      @media only screen and (max-width: 600px) {
        *[class="gmail-fix"] {
          display: none !important;
        }
        p,
        a {
          line-height: 150% !important;
        }
        h1,
        h1 a {
          line-height: 120% !important;
        }
        h2,
        h2 a {
          line-height: 120% !important;
        }
        h3,
        h3 a {
          line-height: 120% !important;
        }
        h4,
        h4 a {
          line-height: 120% !important;
        }
        h5,
        h5 a {
          line-height: 120% !important;
        }
        h6,
        h6 a {
          line-height: 120% !important;
        }
        .es-header-body p {
        }
        .es-content-body p {
        }
        .es-footer-body p {
        }
        .es-infoblock p {
        }
        h1 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h2 {
          font-size: 16px !important;
          text-align: left;
          line-height: 120% !important;
        }
        h3 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h4 {
          font-size: 24px !important;
          text-align: left;
        }
        h5 {
          font-size: 20px !important;
          text-align: left;
        }
        h6 {
          font-size: 16px !important;
          text-align: left;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 20px !important;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 16px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-header-body h4 a,
        .es-content-body h4 a,
        .es-footer-body h4 a {
          font-size: 24px !important;
        }
        .es-header-body h5 a,
        .es-content-body h5 a,
        .es-footer-body h5 a {
          font-size: 20px !important;
        }
        .es-header-body h6 a,
        .es-content-body h6 a,
        .es-footer-body h6 a {
          font-size: 16px !important;
        }
        .es-menu td a {
          font-size: 14px !important;
        }
        .es-header-body p,
        .es-header-body a {
          font-size: 10px !important;
        }
        .es-content-body p,
        .es-content-body a {
          font-size: 14px !important;
        }
        .es-footer-body p,
        .es-footer-body a {
          font-size: 12px !important;
        }
        .es-infoblock p,
        .es-infoblock a {
          font-size: 12px !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3,
        .es-m-txt-c h4,
        .es-m-txt-c h5,
        .es-m-txt-c h6 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3,
        .es-m-txt-r h4,
        .es-m-txt-r h5,
        .es-m-txt-r h6 {
          text-align: right !important;
        }
        .es-m-txt-j,
        .es-m-txt-j h1,
        .es-m-txt-j h2,
        .es-m-txt-j h3,
        .es-m-txt-j h4,
        .es-m-txt-j h5,
        .es-m-txt-j h6 {
          text-align: justify !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3,
        .es-m-txt-l h4,
        .es-m-txt-l h5,
        .es-m-txt-l h6 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img,
        .es-m-txt-r .rollover:hover .rollover-second,
        .es-m-txt-c .rollover:hover .rollover-second,
        .es-m-txt-l .rollover:hover .rollover-second {
          display: inline !important;
        }
        .es-m-txt-r .rollover div,
        .es-m-txt-c .rollover div,
        .es-m-txt-l .rollover div {
          line-height: 0 !important;
          font-size: 0 !important;
        }
        .es-spacer {
          display: inline-table;
        }
        a.es-button,
        button.es-button {
          font-size: 14px !important;
        }
        .es-m-fw,
        .es-m-fw.es-fw,
        .es-m-fw .es-button {
          display: block !important;
        }
        .es-m-il,
        .es-m-il .es-button,
        .es-social,
        .es-social td,
        .es-menu {
          display: inline-block !important;
        }
        .es-adaptive table,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        .es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        .es-social td {
          padding-bottom: 10px;
        }
        .h-auto {
          height: auto !important;
        }
        p,
        ul li,
        ol li,
        a {
          font-size: 16px !important;
        }
        h2 a {
          text-align: left;
        }
        a.es-button {
          border-left-width: 0px !important;
          border-right-width: 0px !important;
        }
        a.es-button,
        button.es-button {
          display: inline-block !important;
        }
        .es-button-border {
          display: inline-block !important;
        }
      }
    </style>
  </head>
  <body style="width: 100%; height: 100%; padding: 0; margin: 0">
    <div class="es-wrapper-color" style="background-color: #fafafa">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#fafafa"></v:fill>
        </v:background>
      <![endif]-->
      <table
        class="es-wrapper"
        width="100%"
        cellspacing="0"
        cellpadding="0"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #fafafa;
        "
      >
        <tr>
          <td valign="top" style="padding: 0; margin: 0">
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td
                  class="es-adaptive"
                  align="center"
                  style="padding: 0; margin: 0"
                >
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                      border-width: 0;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                  >
                    <tr>
                      <td
                        align="left"
                        bgcolor="#000000"
                        style="
                          padding: 15px;
                          margin: 0;
                          background-color: #000000;
                        "
                      >
                        <table
                          cellspacing="0"
                          cellpadding="0"
                          align="right"
                          class="es-right"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 570px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <img
                                      class="adapt-img"
                                      src="https://xommmf.stripocdn.email/content/guids/CABINET_ed6964083c593ced759f47d5d2edce9b0c63559040e2242a5f44ccb031da9133/images/image_k4S.png"
                                      alt=""
                                      width="165"
                                      style="
                                        display: block;
                                        font-size: 14px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                      "
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-content"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td
                  style="padding: 0; margin: 0; background-color: #fafafa"
                  bgcolor="#fafafa"
                  align="center"
                >
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                  >
                    <tr>
                      <td
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 40px;
                          padding-right: 20px;
                          padding-left: 20px;
                          background-color: #f1efe7;
                          background-position: left top;
                        "
                        bgcolor="#F1EFE7"
                        align="left"
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  background-position: left top;
                                "
                                role="presentation"
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                        text-align: center;
                                      "
                                    >
                                      <strong
                                        ><i style="font-size: 18px !important"
                                          >Estimado/a participante...
                                        </i></strong
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Lamentamos informarte que el evento "${event}" en el que te habías registrado ha sido cancelado y eliminado de nuestro calendario.</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Entendemos que esto puede ser decepcionante, y nos disculpamos por cualquier inconveniente que esto pueda haber causado. La decisión de cancelar el evento fue tomada después de una cuidadosa consideración para garantizar la mejor experiencia para todos nuestros participantes.</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Te agradecemos tu interés en el evento y tu apoyo a nuestra comunidad. Continuaremos organizando futuros eventos y esperamos verte en uno próximo.</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                            <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Si tienes alguna pregunta o inquietud, no dudes en ponerte en contacto con nuestro equipo de soporte en "nomad.locals01@gmail.com" o utilizando el formulario de contacto en nuestro sitio web.</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                      padding-top: 20px;
                                    "
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 20px;
                                        font-style: normal;
                                        font-weight: normal;
                                        line-height: 24px;
                                        color: #000000;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Gracias por ser parte de nuestra comunidad.</i
                                      >
                                    </h1>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      margin: 0;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                      padding-top: 20px;
                                      padding-bottom: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Equipo de Nomad Locals</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-footer"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td
                  style="padding: 0; margin: 0; background-color: #fafafa"
                  bgcolor="#fafafa"
                  align="center"
                >
                  <table
                    class="es-footer-body"
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        style="
                          margin: 0;
                          padding-right: 20px;
                          padding-left: 20px;
                          padding-top: 10px;
                          padding-bottom: 16px;
                          background-color: #000000;
                          background-position: left top;
                        "
                        bgcolor="#000000"
                        align="left"
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    class="es-m-txt-c"
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 5px;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      class="es-table-not-adapt es-social"
                                      cellspacing="0"
                                      cellpadding="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/facebook-square-white.png"
                                            alt="Fb"
                                            title="Facebook"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/twitter-square-white.png"
                                            alt="Tw"
                                            title="Twitter"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/instagram-square-white.png"
                                            alt="Ig"
                                            title="Instagram"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/youtube-square-white.png"
                                            alt="Yt"
                                            title="Youtube"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="padding: 0; margin: 0"
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/linkedin-square-white.png"
                                            alt="In"
                                            title="Linkedin"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #f1efe7;
                                        font-size: 14px;
                                      "
                                    >
                                      Contact us: nomad.locals01@gmail.com
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 15px;
                                      margin: 0;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      border="0"
                                      width="100%"
                                      height="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="es-spacer"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            border-bottom: 2px solid #cccccc;
                                            background: none;
                                            height: 1px;
                                            width: 100%;
                                            margin: 0px;
                                          "
                                        ></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <img
                                      class="adapt-img"
                                      src="https://res.cloudinary.com/dwit2djhy/image/upload/v1690153675/Nomadlocals/Logos/4_dpd03p.png"
                                      alt=""
                                      width="335"
                                      style="
                                        display: block;
                                        font-size: 14px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                      "
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
    `;

    async function sendMail() {
      try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: "nomad.locals01@gmail.com",
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken,
          },
        });
        const mailOptions = {
          from: "Nomad Locals <nomad.locals01@gmail.com>",
          to: email,
          subject: `Nomad Locals:   Importante: Cancelación de evento - ${event}`,
          html: contentHtml,
        };
        const result = transporter.sendMail(mailOptions);
        return result;
      } catch (error) {
        res.status(400).send(error.message);
      }
    }
    sendMail()
      .then((result) => res.status(200).send("enviado"))
      .catch((error) => console.log(error.message));
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//6---------------------Mail suscribir evento ------------------------------------
router.post("/suscribe-event", (req, res) => {
  try {
    const { eventDate, email, place, name } = req.body;
    const contentHtml = `
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>Trigger Newsletter 2</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if !mso]><!-- -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i"
    />
    <!--<![endif]-->
    <style type="text/css">
      .rollover:hover .rollover-first {
        max-height: 0px !important;
        display: none !important;
      }
      .rollover:hover .rollover-second {
        max-height: none !important;
        display: inline-block !important;
      }
      .rollover div {
        font-size: 0px;
      }
      u ~ div img + div > div {
        display: none;
      }
      #outlook a {
        padding: 0;
      }
      span.MsoHyperlink,
      span.MsoHyperlinkFollowed {
        color: inherit;
        mso-style-priority: 99;
      }
      a.es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      .es-header-body a:hover {
        color: #1376c8 !important;
      }
      .es-content-body a:hover {
        color: #0b5394 !important;
      }
      .es-footer-body a:hover {
        color: #333333 !important;
      }
      .es-infoblock a:hover {
        color: #cccccc !important;
      }
      .es-button-border:hover {
        border-color: #3d5ca3 #3d5ca3 #3d5ca3 #3d5ca3 !important;
        background: #ffffff !important;
      }
      .es-button-border:hover a.es-button,
      .es-button-border:hover button.es-button {
        background: #ffffff !important;
      }
      .es-button-border:hover a.es-button {
        background: #ffffff !important;
        border-color: #ffffff !important;
      }
      @media only screen and (max-width: 600px) {
        *[class="gmail-fix"] {
          display: none !important;
        }
        p,
        a {
          line-height: 150% !important;
        }
        h1,
        h1 a {
          line-height: 120% !important;
        }
        h2,
        h2 a {
          line-height: 120% !important;
        }
        h3,
        h3 a {
          line-height: 120% !important;
        }
        h4,
        h4 a {
          line-height: 120% !important;
        }
        h5,
        h5 a {
          line-height: 120% !important;
        }
        h6,
        h6 a {
          line-height: 120% !important;
        }
        .es-header-body p {
        }
        .es-content-body p {
        }
        .es-footer-body p {
        }
        .es-infoblock p {
        }
        h1 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h2 {
          font-size: 16px !important;
          text-align: left;
          line-height: 120% !important;
        }
        h3 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h4 {
          font-size: 24px !important;
          text-align: left;
        }
        h5 {
          font-size: 20px !important;
          text-align: left;
        }
        h6 {
          font-size: 16px !important;
          text-align: left;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 20px !important;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 16px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-header-body h4 a,
        .es-content-body h4 a,
        .es-footer-body h4 a {
          font-size: 24px !important;
        }
        .es-header-body h5 a,
        .es-content-body h5 a,
        .es-footer-body h5 a {
          font-size: 20px !important;
        }
        .es-header-body h6 a,
        .es-content-body h6 a,
        .es-footer-body h6 a {
          font-size: 16px !important;
        }
        .es-menu td a {
          font-size: 14px !important;
        }
        .es-header-body p,
        .es-header-body a {
          font-size: 10px !important;
        }
        .es-content-body p,
        .es-content-body a {
          font-size: 14px !important;
        }
        .es-footer-body p,
        .es-footer-body a {
          font-size: 12px !important;
        }
        .es-infoblock p,
        .es-infoblock a {
          font-size: 12px !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3,
        .es-m-txt-c h4,
        .es-m-txt-c h5,
        .es-m-txt-c h6 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3,
        .es-m-txt-r h4,
        .es-m-txt-r h5,
        .es-m-txt-r h6 {
          text-align: right !important;
        }
        .es-m-txt-j,
        .es-m-txt-j h1,
        .es-m-txt-j h2,
        .es-m-txt-j h3,
        .es-m-txt-j h4,
        .es-m-txt-j h5,
        .es-m-txt-j h6 {
          text-align: justify !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3,
        .es-m-txt-l h4,
        .es-m-txt-l h5,
        .es-m-txt-l h6 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img,
        .es-m-txt-r .rollover:hover .rollover-second,
        .es-m-txt-c .rollover:hover .rollover-second,
        .es-m-txt-l .rollover:hover .rollover-second {
          display: inline !important;
        }
        .es-m-txt-r .rollover div,
        .es-m-txt-c .rollover div,
        .es-m-txt-l .rollover div {
          line-height: 0 !important;
          font-size: 0 !important;
        }
        .es-spacer {
          display: inline-table;
        }
        a.es-button,
        button.es-button {
          font-size: 14px !important;
        }
        .es-m-fw,
        .es-m-fw.es-fw,
        .es-m-fw .es-button {
          display: block !important;
        }
        .es-m-il,
        .es-m-il .es-button,
        .es-social,
        .es-social td,
        .es-menu {
          display: inline-block !important;
        }
        .es-adaptive table,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        .es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        .es-social td {
          padding-bottom: 10px;
        }
        .h-auto {
          height: auto !important;
        }
        p,
        ul li,
        ol li,
        a {
          font-size: 16px !important;
        }
        h2 a {
          text-align: left;
        }
        a.es-button {
          border-left-width: 0px !important;
          border-right-width: 0px !important;
        }
        a.es-button,
        button.es-button {
          display: inline-block !important;
        }
        .es-button-border {
          display: inline-block !important;
        }
      }
    </style>
  </head>
  <body style="width: 100%; height: 100%; padding: 0; margin: 0">
    <div class="es-wrapper-color" style="background-color: #fafafa">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#fafafa"></v:fill>
        </v:background>
      <![endif]-->
      <table
        class="es-wrapper"
        width="100%"
        cellspacing="0"
        cellpadding="0"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #fafafa;
        "
      >
        <tr>
          <td valign="top" style="padding: 0; margin: 0">
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td
                  class="es-adaptive"
                  align="center"
                  style="padding: 0; margin: 0"
                >
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                      border-width: 0;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                  >
                    <tr>
                      <td
                        align="left"
                        bgcolor="#000000"
                        style="
                          padding: 15px;
                          margin: 0;
                          background-color: #000000;
                        "
                      >
                        <table
                          cellspacing="0"
                          cellpadding="0"
                          align="right"
                          class="es-right"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 570px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <img
                                      class="adapt-img"
                                      src="https://xommmf.stripocdn.email/content/guids/CABINET_ed6964083c593ced759f47d5d2edce9b0c63559040e2242a5f44ccb031da9133/images/image_k4S.png"
                                      alt=""
                                      width="165"
                                      style="
                                        display: block;
                                        font-size: 14px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                      "
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-content"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td
                  style="padding: 0; margin: 0; background-color: #fafafa"
                  bgcolor="#fafafa"
                  align="center"
                >
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                  >
                    <tr>
                      <td
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 40px;
                          padding-right: 20px;
                          padding-left: 20px;
                          background-color: #f1efe7;
                          background-position: left top;
                        "
                        bgcolor="#F1EFE7"
                        align="left"
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  background-position: left top;
                                "
                                role="presentation"
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                        text-align: center;
                                      "
                                    >
                                      <strong
                                        ><i style="font-size: 18px !important"
                                          >Estimado/a ${email}...
                                        </i></strong
                                      >
                                    </p>
                                  </td>
                                </tr>
                                 <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >¡Nos complace informarte que te has suscrito con éxito al evento ${name} en nuestro sitio web!</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                 <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Detalles de la suscripción:</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Evento: ${name}</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Fecha: ${eventDate}</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Lugar: ${place}</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                            <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Esperamos que disfrutes de este emocionante evento y tengas una experiencia inolvidable con nuestra comunidad. Si tienes alguna pregunta o necesitas más información sobre el evento, no dudes en ponerte en contacto con nosotros.</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Te recordamos que si por algún motivo necesitas cancelar tu suscripción, puedes hacerlo accediendo a tu cuenta en nuestro sitio web y administrando tus eventos suscritos.</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                      padding-top: 20px;
                                    "
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 20px;
                                        font-style: normal;
                                        font-weight: normal;
                                        line-height: 24px;
                                        color: #000000;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >¡Gracias por ser parte de nuestra comunidad y esperamos verte pronto en el evento!</i
                                      >
                                    </h1>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      margin: 0;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                      padding-top: 20px;
                                      padding-bottom: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Equipo de Nomad Locals</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-footer"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td
                  style="padding: 0; margin: 0; background-color: #fafafa"
                  bgcolor="#fafafa"
                  align="center"
                >
                  <table
                    class="es-footer-body"
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        style="
                          margin: 0;
                          padding-right: 20px;
                          padding-left: 20px;
                          padding-top: 10px;
                          padding-bottom: 16px;
                          background-color: #000000;
                          background-position: left top;
                        "
                        bgcolor="#000000"
                        align="left"
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    class="es-m-txt-c"
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 5px;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      class="es-table-not-adapt es-social"
                                      cellspacing="0"
                                      cellpadding="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/facebook-square-white.png"
                                            alt="Fb"
                                            title="Facebook"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/twitter-square-white.png"
                                            alt="Tw"
                                            title="Twitter"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/instagram-square-white.png"
                                            alt="Ig"
                                            title="Instagram"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/youtube-square-white.png"
                                            alt="Yt"
                                            title="Youtube"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="padding: 0; margin: 0"
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/linkedin-square-white.png"
                                            alt="In"
                                            title="Linkedin"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #f1efe7;
                                        font-size: 14px;
                                      "
                                    >
                                      Contact us: nomad.locals01@gmail.com
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 15px;
                                      margin: 0;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      border="0"
                                      width="100%"
                                      height="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="es-spacer"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            border-bottom: 2px solid #cccccc;
                                            background: none;
                                            height: 1px;
                                            width: 100%;
                                            margin: 0px;
                                          "
                                        ></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <img
                                      class="adapt-img"
                                      src="https://res.cloudinary.com/dwit2djhy/image/upload/v1690153675/Nomadlocals/Logos/4_dpd03p.png"
                                      alt=""
                                      width="335"
                                      style="
                                        display: block;
                                        font-size: 14px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                      "
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
    `;

    async function sendMail() {
      try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: "nomad.locals01@gmail.com",
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken,
          },
        });
        const mailOptions = {
          from: "Nomad Locals <nomad.locals01@gmail.com>",
          to: email,
          subject: `Nomad Locals: Confirmación de suscripción al evento - ${name}`,
          html: contentHtml,
        };
        const result = transporter.sendMail(mailOptions);
        return result;
      } catch (error) {
        res.status(400).send(error.message);
      }
    }
    sendMail()
      .then((result) => res.status(200).send("enviado"))
      .catch((error) => console.log(error.message));
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//6---------------------Mail Desuscribir evento ------------------------------------
router.post("/unsuscribe-event", (req, res) => {
  try {
    const { eventDate, email, place, name } = req.body;
    const contentHtml = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>Trigger Newsletter 2</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if !mso]><!-- -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i"
    />
    <!--<![endif]-->
    <style type="text/css">
      .rollover:hover .rollover-first {
        max-height: 0px !important;
        display: none !important;
      }
      .rollover:hover .rollover-second {
        max-height: none !important;
        display: inline-block !important;
      }
      .rollover div {
        font-size: 0px;
      }
      u ~ div img + div > div {
        display: none;
      }
      #outlook a {
        padding: 0;
      }
      span.MsoHyperlink,
      span.MsoHyperlinkFollowed {
        color: inherit;
        mso-style-priority: 99;
      }
      a.es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      .es-header-body a:hover {
        color: #1376c8 !important;
      }
      .es-content-body a:hover {
        color: #0b5394 !important;
      }
      .es-footer-body a:hover {
        color: #333333 !important;
      }
      .es-infoblock a:hover {
        color: #cccccc !important;
      }
      .es-button-border:hover {
        border-color: #3d5ca3 #3d5ca3 #3d5ca3 #3d5ca3 !important;
        background: #ffffff !important;
      }
      .es-button-border:hover a.es-button,
      .es-button-border:hover button.es-button {
        background: #ffffff !important;
      }
      .es-button-border:hover a.es-button {
        background: #ffffff !important;
        border-color: #ffffff !important;
      }
      @media only screen and (max-width: 600px) {
        *[class="gmail-fix"] {
          display: none !important;
        }
        p,
        a {
          line-height: 150% !important;
        }
        h1,
        h1 a {
          line-height: 120% !important;
        }
        h2,
        h2 a {
          line-height: 120% !important;
        }
        h3,
        h3 a {
          line-height: 120% !important;
        }
        h4,
        h4 a {
          line-height: 120% !important;
        }
        h5,
        h5 a {
          line-height: 120% !important;
        }
        h6,
        h6 a {
          line-height: 120% !important;
        }
        .es-header-body p {
        }
        .es-content-body p {
        }
        .es-footer-body p {
        }
        .es-infoblock p {
        }
        h1 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h2 {
          font-size: 16px !important;
          text-align: left;
          line-height: 120% !important;
        }
        h3 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h4 {
          font-size: 24px !important;
          text-align: left;
        }
        h5 {
          font-size: 20px !important;
          text-align: left;
        }
        h6 {
          font-size: 16px !important;
          text-align: left;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 20px !important;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 16px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-header-body h4 a,
        .es-content-body h4 a,
        .es-footer-body h4 a {
          font-size: 24px !important;
        }
        .es-header-body h5 a,
        .es-content-body h5 a,
        .es-footer-body h5 a {
          font-size: 20px !important;
        }
        .es-header-body h6 a,
        .es-content-body h6 a,
        .es-footer-body h6 a {
          font-size: 16px !important;
        }
        .es-menu td a {
          font-size: 14px !important;
        }
        .es-header-body p,
        .es-header-body a {
          font-size: 10px !important;
        }
        .es-content-body p,
        .es-content-body a {
          font-size: 14px !important;
        }
        .es-footer-body p,
        .es-footer-body a {
          font-size: 12px !important;
        }
        .es-infoblock p,
        .es-infoblock a {
          font-size: 12px !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3,
        .es-m-txt-c h4,
        .es-m-txt-c h5,
        .es-m-txt-c h6 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3,
        .es-m-txt-r h4,
        .es-m-txt-r h5,
        .es-m-txt-r h6 {
          text-align: right !important;
        }
        .es-m-txt-j,
        .es-m-txt-j h1,
        .es-m-txt-j h2,
        .es-m-txt-j h3,
        .es-m-txt-j h4,
        .es-m-txt-j h5,
        .es-m-txt-j h6 {
          text-align: justify !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3,
        .es-m-txt-l h4,
        .es-m-txt-l h5,
        .es-m-txt-l h6 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img,
        .es-m-txt-r .rollover:hover .rollover-second,
        .es-m-txt-c .rollover:hover .rollover-second,
        .es-m-txt-l .rollover:hover .rollover-second {
          display: inline !important;
        }
        .es-m-txt-r .rollover div,
        .es-m-txt-c .rollover div,
        .es-m-txt-l .rollover div {
          line-height: 0 !important;
          font-size: 0 !important;
        }
        .es-spacer {
          display: inline-table;
        }
        a.es-button,
        button.es-button {
          font-size: 14px !important;
        }
        .es-m-fw,
        .es-m-fw.es-fw,
        .es-m-fw .es-button {
          display: block !important;
        }
        .es-m-il,
        .es-m-il .es-button,
        .es-social,
        .es-social td,
        .es-menu {
          display: inline-block !important;
        }
        .es-adaptive table,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        .es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        .es-social td {
          padding-bottom: 10px;
        }
        .h-auto {
          height: auto !important;
        }
        p,
        ul li,
        ol li,
        a {
          font-size: 16px !important;
        }
        h2 a {
          text-align: left;
        }
        a.es-button {
          border-left-width: 0px !important;
          border-right-width: 0px !important;
        }
        a.es-button,
        button.es-button {
          display: inline-block !important;
        }
        .es-button-border {
          display: inline-block !important;
        }
      }
    </style>
  </head>
  <body style="width: 100%; height: 100%; padding: 0; margin: 0">
    <div class="es-wrapper-color" style="background-color: #fafafa">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#fafafa"></v:fill>
        </v:background>
      <![endif]-->
      <table
        class="es-wrapper"
        width="100%"
        cellspacing="0"
        cellpadding="0"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #fafafa;
        "
      >
        <tr>
          <td valign="top" style="padding: 0; margin: 0">
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td
                  class="es-adaptive"
                  align="center"
                  style="padding: 0; margin: 0"
                >
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                      border-width: 0;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                  >
                    <tr>
                      <td
                        align="left"
                        bgcolor="#000000"
                        style="
                          padding: 15px;
                          margin: 0;
                          background-color: #000000;
                        "
                      >
                        <table
                          cellspacing="0"
                          cellpadding="0"
                          align="right"
                          class="es-right"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 570px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <img
                                      class="adapt-img"
                                      src="https://xommmf.stripocdn.email/content/guids/CABINET_ed6964083c593ced759f47d5d2edce9b0c63559040e2242a5f44ccb031da9133/images/image_k4S.png"
                                      alt=""
                                      width="165"
                                      style="
                                        display: block;
                                        font-size: 14px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                      "
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-content"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td
                  style="padding: 0; margin: 0; background-color: #fafafa"
                  bgcolor="#fafafa"
                  align="center"
                >
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                  >
                    <tr>
                      <td
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 40px;
                          padding-right: 20px;
                          padding-left: 20px;
                          background-color: #f1efe7;
                          background-position: left top;
                        "
                        bgcolor="#F1EFE7"
                        align="left"
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  background-position: left top;
                                "
                                role="presentation"
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                        text-align: center;
                                      "
                                    >
                                      <strong
                                        ><i style="font-size: 18px !important"
                                          >Estimado/a ${email}...
                                        </i></strong
                                      >
                                    </p>
                                  </td>
                                </tr>
                                 <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >¡Nos complace informarte que te has suscrito con éxito al evento ${name} en nuestro sitio web!</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                 <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Detalles de la suscripción:</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Evento: ${name}</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Fecha: ${eventDate}</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Lugar: ${place}</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                            <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Esperamos que disfrutes de este emocionante evento y tengas una experiencia inolvidable con nuestra comunidad. Si tienes alguna pregunta o necesitas más información sobre el evento, no dudes en ponerte en contacto con nosotros.</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 25px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Te recordamos que si por algún motivo necesitas cancelar tu suscripción, puedes hacerlo accediendo a tu cuenta en nuestro sitio web y administrando tus eventos suscritos.</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                      padding-top: 20px;
                                    "
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 20px;
                                        font-style: normal;
                                        font-weight: normal;
                                        line-height: 24px;
                                        color: #000000;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >¡Gracias por ser parte de nuestra comunidad y esperamos verte pronto en el evento!</i
                                      >
                                    </h1>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="justify"
                                    style="
                                      margin: 0;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                      padding-top: 20px;
                                      padding-bottom: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 24px;
                                        letter-spacing: 0;
                                        color: #000000;
                                        font-size: 16px;
                                      "
                                    >
                                      <i
                                        style="
                                          font-family: roboto, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                        "
                                        >Equipo de Nomad Locals</i
                                      >
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-footer"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td
                  style="padding: 0; margin: 0; background-color: #fafafa"
                  bgcolor="#fafafa"
                  align="center"
                >
                  <table
                    class="es-footer-body"
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        style="
                          margin: 0;
                          padding-right: 20px;
                          padding-left: 20px;
                          padding-top: 10px;
                          padding-bottom: 16px;
                          background-color: #000000;
                          background-position: left top;
                        "
                        bgcolor="#000000"
                        align="left"
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    class="es-m-txt-c"
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 5px;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      class="es-table-not-adapt es-social"
                                      cellspacing="0"
                                      cellpadding="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/facebook-square-white.png"
                                            alt="Fb"
                                            title="Facebook"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/twitter-square-white.png"
                                            alt="Tw"
                                            title="Twitter"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/instagram-square-white.png"
                                            alt="Ig"
                                            title="Instagram"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 10px;
                                          "
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/youtube-square-white.png"
                                            alt="Yt"
                                            title="Youtube"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          valign="top"
                                          align="center"
                                          style="padding: 0; margin: 0"
                                        >
                                          <img
                                            src="https://xommmf.stripocdn.email/content/assets/img/social-icons/square-white/linkedin-square-white.png"
                                            alt="In"
                                            title="Linkedin"
                                            width="32"
                                            style="
                                              display: block;
                                              font-size: 14px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: helvetica, 'helvetica neue',
                                          arial, verdana, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #f1efe7;
                                        font-size: 14px;
                                      "
                                    >
                                      Contact us: nomad.locals01@gmail.com
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 15px;
                                      margin: 0;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      border="0"
                                      width="100%"
                                      height="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="es-spacer"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            border-bottom: 2px solid #cccccc;
                                            background: none;
                                            height: 1px;
                                            width: 100%;
                                            margin: 0px;
                                          "
                                        ></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <img
                                      class="adapt-img"
                                      src="https://res.cloudinary.com/dwit2djhy/image/upload/v1690153675/Nomadlocals/Logos/4_dpd03p.png"
                                      alt=""
                                      width="335"
                                      style="
                                        display: block;
                                        font-size: 14px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                      "
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
    `;

    async function sendMail() {
      try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: "nomad.locals01@gmail.com",
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken,
          },
        });
        const mailOptions = {
          from: "Nomad Locals <nomad.locals01@gmail.com>",
          to: email,
          subject: `Nomad Locals: Confirmación de desuscripción al evento - ${name}`,
          html: contentHtml,
        };
        const result = transporter.sendMail(mailOptions);
        return result;
      } catch (error) {
        res.status(400).send(error.message);
      }
    }
    sendMail()
      .then((result) => res.status(200).send("enviado"))
      .catch((error) => console.log(error.message));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;