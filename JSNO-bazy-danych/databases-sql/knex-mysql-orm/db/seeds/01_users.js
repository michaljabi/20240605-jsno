import bcrypt from 'bcryptjs';

export function seed(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'user1@email.com', password: bcrypt.hashSync('user1!', 8)},
        {id: 2, email: 'user2@email.com', password: bcrypt.hashSync('user2!', 8)},
      ]);
    });
};
