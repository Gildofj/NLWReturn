import nodemailer from "nodemailer";

import { MailAdapter, SendMailData } from "../mailAdapter";

const  transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0549d0af8b0c3a",
      pass: "a3c2f5863e9d28"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData){
        await transport.sendMail({
            from: "Equipe Teste <oi@teste.com>",
            to: "Gildo Junior <1gildojunior@gmail.com>",
            subject,
            html: body,
        })
    };
}