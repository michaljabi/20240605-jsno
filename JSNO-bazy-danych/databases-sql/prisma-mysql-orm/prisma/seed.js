import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

try {
	// Remove Users, make new one
	await prisma.user.deleteMany({});
	await prisma.user.createMany({
		data: [
			{id: 1, email: 'user1@email.com', password: bcrypt.hashSync('user1!', 8)},
			{id: 2, email: 'user2@email.com', password: bcrypt.hashSync('user2!', 8)},
		]
	})
	// Remove Orders, make new one
	await prisma.order.deleteMany({});
	await prisma.order.createMany({
		data: [
			{
				name: 'Zamówienie 2021/01',
				date: new Date(),
				userId: 1
			},
			{
				name: 'Zamówienie 2022/01',
				date: new Date(),
				userId: 1
			},
			{
				name: 'Zamówienie 2022/03',
				date: new Date(),
				userId: 1
			}
		]
	})
	await prisma.$disconnect();
} catch( e )  {
	console.error(e)
	await prisma.$disconnect()
	process.exit(1)
}

