module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 54320),
      database: env('DATABASE_NAME', 'react'),
      user: env('DATABASE_USERNAME', 'github'),
      password: env('DATABASE_PASSWORD', 'github'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
