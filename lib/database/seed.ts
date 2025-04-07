const db = require('../lib/db/database');

const insert = db.prepare('INSERT INTO posts (title, content) VALUES (?, ?)');
insert.run('First Post', 'This is my first post content');
insert.run('Second Post', 'Another post with different content');

console.log('Database seeded successfully!');