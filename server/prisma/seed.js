const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.denunciations.upsert({
      where: { name: 'juancho' },
      update: {},
      create: {
        name: 'juancho',
				email: 'email@email.com',
				telefono: '445456788',
                domicilio: 'calle543',
                location: 'municipio 1, estado1',
                description: 'dser',
                culprit: 'Empresa x',
                detalles: 'dgfdfg' 
      },
    });

    const woopa1 = await prisma.denunciations.upsert({
      where: { name: 'maria' },
      update: {},
      create: {
        name: 'maria',
                email: 'email2@email.com',
                telefono: '445656788',
                domicilio: 'calle443',
                location: 'municipio 4, estado 4',
                description: 'dsder',
                culprit: 'Empresa 2x',
                detalles: 'dgfdcfg' 
      },
    });

    console.log('Create denunciations');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();