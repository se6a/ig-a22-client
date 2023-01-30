import nodemailer from "nodemailer";
import {error} from "@sveltejs/kit";
import {
    SECRET_MAIL_PORT,
    SECRET_MAIL_HOST,
    SECRET_MAIL_USER,
    SECRET_MAIL_PW
} from "$env/static/private";

const transporter = nodemailer.createTransport({
    port: SECRET_MAIL_PORT,
    host: SECRET_MAIL_HOST,
    auth: {
        user: SECRET_MAIL_USER,
        pass: SECRET_MAIL_PW
    },
    secure: true
});

export async function POST({request}) {
    try {
        const formData = await request.formData();
        const data = {};

        formData.forEach((value, key) => (data[key] = value));

        const {response} = await forward(data);
        await confirm(data);

        if (!response.startsWith("2")) throw error(400, "Server Error");

        return new Response();
    } catch (err) {
        throw error(400, "Server Error");
    }
}

async function confirm({firstname, lastname, email}) {
    return await transporter.sendMail({
        from: "info@ig-a22.ch",
        to: email,
        subject: "IG A22: Bestätigung",
        text: `
Guten Tag ${firstname} ${lastname},

Vielen Dank für Ihre Bereitschaft uns in dieser Sache zu Unterstützen!
Wir werden uns bald bei Ihnen melden.

Mit Freundlichen Grüssen

Interessengemeinschaft A22
`
    });
}

async function forward({
    firstname = "-",
    lastname = "-",
    role = "-",
    street = "-",
    location = "-",
    email = "-",
    phone = "-"
}) {
    const dataString = `
Vorname:    ${firstname}
Nachname:   ${lastname}
Funktion:   ${role}
Strasse:    ${street}
Ort:        ${location}
Telefon:    ${phone}
E-Mail:     ${email}
  `;
    return await transporter.sendMail({
        from: "unterstuetzen@ig-a22.ch",
        to: "info@ig-a22.ch",
        subject: `Anmeldung zur Unterstützung: ${firstname} ${lastname}`,
        text: dataString
    });
}
