import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

console.log(`
	Witaj w programie - wariant Prisma ORM!
`)

function program() {
	prisma.user.findMany()
		.then(users => {
			console.log('lista użytkowników:')
			console.table(users);
			return prisma.user.findUnique({
				where: {id: 1},
			  include: {
					orders: true
			  },
			})
		})
		.then(userWithOrders => {
			console.log(`lista zamówień Użytkownika ${userWithOrders.email}:`)
			console.log(userWithOrders);
			// problem z widocznym hasłem:
			// https://www.prisma.io/docs/concepts/components/prisma-client/excluding-fields#excluding-the-password-field
			//
			// console.log('as string (with :( password):', JSON.stringify(userWithOrders));
			console.table(userWithOrders.orders);
		})
		.catch(err => {
			console.log(err);
		})
		.finally(() => prisma.$disconnect())
}

program();
