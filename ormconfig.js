const entities =
    process.env.APP_ENV === 'prd'
        ? [
              'dist/modules/users/infra/typeorm/entities/*.js',
              'dist/modules/appointments/infra/typeorm/entities/*.js',
          ]
        : ['./src/modules/**/entities/*.ts'];

const migrations =
    process.env.APP_ENV === 'prd'
        ? ['dist/shared/infra/typeorm/migrations/*.js']
        : ['./src/shared/infra/typeorm/migrations/*.ts'];

module.exports = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
    entities,
    migrations,
    cli: {
        migrationsDir: './src/shared/infra/typeorm/migrations/',
    },
};
