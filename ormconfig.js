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
    entities: ['dist/src/modules/**/infra/typeorm/entities/*.js'],
    migrations: ['dist/shared/infra/typeorm/migrations/*.js'],
    cli: {
        migrationsDir: 'src/shared/infra/typeorm/migrations/',
    },
};
