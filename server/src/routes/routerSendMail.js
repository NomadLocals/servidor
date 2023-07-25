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

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

router.post("/register", (req, res) => {
  try {
    const { email, userName } = req.body;
    const contentHtml = `
    <p>¡${userName}, qué bien tenerte dentro de la comunidad!</p>
    <p>Nomad Locals es una plataforma donde la pasión une a las personas y las convierte en amistades auténticas, sin importar dónde te encuentres en el mundo. El objetivo es construir juntos un espacio para conectar con personas que comparten tus mismos intereses y actividades favoritas, creando vínculos significativos y duraderos.</p>
    <p>Imagina unirte a una caminata con fotógrafos entusiastas para capturar impresionantes paisajes, asistir a una clase de cocina con chefs locales para descubrir nuevos sabores, o unirte a grupos de aventureros para explorar lugares increíbles.</p>
    <p>En Nomad Locals, todos asumimos el compromiso de construir un entorno seguro y amigable para conectar. Creemos en la importancia de la comunidad y en el poder de la pasión para unir a las personas. Así que, ¡no esperes más y únete a un encuentro o crea el tuyo!</p>
    <h3>¡Bienvenida/o!</h3>
    <p>Equipo de Nomad Locals</p>
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

router.post("/newEventCreated", (req, res) => {
  try {
    const { email, userName, activityData } = req.body;
    const { name, eventDate, description } = activityData;
    const contentHtml = `
    <p>¡Hola ${userName}!</p>
    <p>Has creado un evento exitosamente en Nomad Locals.</p>
    <p>¡Estamos felices que estés por conectar con personas afines y compartir tus pasiones!</p>
    <p>Tu encuentro, ${name}, está programado para ${eventDate}. En este encuentro estás proponiendo "${description}". Seguro  que será una experiencia increíble  tanto para ti como para las personas asistentes.</p>
    <p>Recuerda que como persona que propone el encuentro, tienes la responsabilidad de gestionar el evento . No olvides conectar por el chat con los otros participantes. Y si necesitas asistencia adicional,o tienes una pregunta, estamos aquí.</p>
    <h3>¡Disfruta de esta increíble oportunidad para conectar!</h3>
    <p>Equipo de Nomad Locals</p>
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
router.post("/delete", (req, res) => {
  try {
    const { email } = req.body;
    const contentHtml = `
    <p> Querido ${email},</p>
    <p>Lamentamos informarte que tu cuenta en nuestro sitio web ha sido suspendida debido a incumplimiento de nuestras normas y políticas. Como resultado, se te ha denegado el acceso a tu cuenta y a las funcionalidades del sitio.</p>
    <p>Si consideras que ha habido un error o que la suspensión es injusta, por favor, ponte en contacto con nuestro equipo de soporte para revisar tu caso y proporcionar más detalles. Puedes enviar un correo electrónico a nomad.locals01@gmail.com.</p>
    <p>Entendemos que esto pueda ser inconveniente para ti y te pedimos disculpas por cualquier molestia causada. Nuestro objetivo es mantener una comunidad segura y respetuosa para todos nuestros usuarios, y tomamos las medidas necesarias para garantizar que se cumplan nuestras políticas.</p>
    <br/>
    <p>Gracias por tu comprensión.</p>
    
    <p>Equipo de Nomad Locals</p>
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
router.post("/retrieve", (req, res) => {
  try {
    const { email } = req.body;
    const contentHtml = `
    <p> Estimado/a ${email},</p>
    <p>Nos complace informarte que hemos revisado tu caso y hemos decidido reactivar tu cuenta en nuestro sitio web. Tu cuenta ha sido desbaneada y ahora tendrás acceso completo a todas las funcionalidades de nuestro sitio.</p>
    <p>Entendemos que los errores pueden ocurrir, y después de una revisión cuidadosa, hemos decidido darte una segunda oportunidad para ser parte de nuestra comunidad en línea.</p>
    <p>Si tienes alguna pregunta o inquietud, no dudes en ponerte en contacto con nuestro equipo de soporte en nomad.locals01@gmail.com o utilizando el formulario de contacto en nuestro sitio web.</p>
    <p>¡Te damos la bienvenida de nuevo y esperamos que disfrutes de tu experiencia en nuestro sitio!.</p>
    <br/>
    <p>Gracias por ser parte de nuestra comunidad</p>
    
    <p>Equipo de Nomad Locals</p>
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

module.exports = router;
