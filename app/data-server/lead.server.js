import { prisma } from './database.server'
export async function addLead(leadData) {
  try {
    return await prisma.lead.create({
      data: {
        firstName: leadData.firstName,
        lastName: leadData.lastName,
        email: leadData.email,
        number: leadData.number,
        address: leadData.address,
        message: leadData.message,
        comingFrom: leadData.comingFrom,
      },
    })
  } catch (error) {
    console.log(error)
    throw new Error('failed to add the data to the CRM-mongo-database')
  }
}
