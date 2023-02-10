# Digi Back End Test

## Env File
Example
```env
DB_HOST=127.0.0.1
DB_CLIENT=pg
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_DATABASE=digi_be_test
DB_SCHEMA=public
JWT_SECRET=secret
```

## Usage
```bash
yarn
yarn migrate:latest
yarn dev
```