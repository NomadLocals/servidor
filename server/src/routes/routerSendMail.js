const { Router } = require("express");
const router = Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

router.post("/", (req, res) => {
  const { email, userName } = req.body;
  console.log(email);
  const contentHtml = `
    <p>¡${userName}, qué bien tenerte dentro de la comunidad!</p>
    <p>Nomad Locals es una plataforma donde la pasión une a las personas y las convierte en amistades auténticas, sin importar dónde te encuentres en el mundo. El objetivo es construir juntos un espacio para conectar con personas que comparten tus mismos intereses y actividades favoritas, creando vínculos significativos y duraderos.</p>
    <p>Imagina unirte a una caminata con fotógrafos entusiastas para capturar impresionantes paisajes, asistir a una clase de cocina con chefs locales para descubrir nuevos sabores, o unirte a grupos de aventureros para explorar lugares increíbles.</p>
    <p>En Nomad Locals, todos asumimos el compromiso de construir un entorno seguro y amigable para conectar. Creemos en la importancia de la comunidad y en el poder de la pasión para unir a las personas. Así que, ¡no esperes más y únete a un encuentro o crea el tuyo!</p>
    <h3>¡Bienvenida/o!</h3>
    <p>Equipo de Nomad Locals</p>
  `;

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

  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

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
      console.log(error);
    }
  }
  sendMail()
    .then((result) => res.status(200).send("enviado"))
    .catch((error) => console.log(error.message));
});

module.exports = router;
