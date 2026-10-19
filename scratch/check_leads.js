const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const leads = await prisma.lead.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' },
    });
    console.log('--- LEADS COUNT:', leads.length, '---');
    console.log(JSON.stringify(leads, null, 2));

    const siteVisits = await prisma.siteVisit.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
    });
    console.log('--- SITE VISITS COUNT:', siteVisits.length, '---');
    console.log(JSON.stringify(siteVisits, null, 2));
  } catch (err) {
    console.error('Error querying DB:', err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
