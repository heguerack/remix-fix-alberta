import nodemailer from 'nodemailer'

export default async function sendEmail(leadData) {
  const firstName = leadData.firstName
  const lastName = leadData.lastName
  const email = leadData.email
  const message = leadData.message
  const comingFrom = leadData.comingFrom
  const myBusinessEmail = process.env.EMAIL
  const myBusinessEmailPassword = process.env.EMAIL_PASSWORD
  const myName = process.env.EMAIL_PASSWORD
  console.log(myBusinessEmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: myBusinessEmail,
      pass: myBusinessEmailPassword,
    },
  })

  try {
    //lead
    await transporter.sendMail({
      from: {
        name: myName,
        email: myBusinessEmail,
      },
      to: email,
      subject: 'Thank You From Alberta Colour Painting',
      text: message,
      html: `<div><h3>Hello ${firstName}, we have you in the system, you wrote:</h3><p>${message}</p></div>`,
    })
    //me
    await transporter.sendMail({
      from: {
        name: `${firstName} ${lastName}`,
        email: myBusinessEmail,
      },
      to: myBusinessEmail,
      replyTo: email,
      subject: `you got a new lead! ${firstName} ${lastName} => ${comingFrom}`,
      text: message,
      html: `<div><h3>${firstName} ${lastName} wrote:<h3/> <p>${message}</p></div>`,
    })
  } catch (error) {
    throw new Error('Failed to send emails to Alberta Colour Painting Serveres')
  }
}
