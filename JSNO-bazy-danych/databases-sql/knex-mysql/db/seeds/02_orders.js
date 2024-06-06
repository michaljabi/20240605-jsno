
export function seed(knex) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {
          name: 'Zamówienie 2021/01',
          date: new Date(),
          user_id: 1
        },
        {
          name: 'Zamówienie 2022/01',
          date: new Date(),
          user_id: 1
        },
        {
          name: 'Zamówienie 2022/03',
          date: new Date(),
          user_id: 1
        }
      ]);
    });
};
