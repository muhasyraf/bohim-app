# Bohim App

## Tech Stack
- Laravel
- Inertia.js
- React
- Tailwind CSS
- MySQL

## Installation and Setup
1. Clone the repository
```bash
git clone
```

2. Install the dependencies
```bash
composer install
npm install
```

3. Create a .env file
```bash
cp .env.example .env
```

4. Generate the application key
```bash
php artisan key:generate
```

5. Update the .env file with the database credentials
```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=bohim-app
DB_USERNAME=root
DB_PASSWORD=
```

6. Migrate the database
```bash
php artisan migrate
```

7. Link the storage folder
```bash
php artisan storage:link
```

## Running the Application
```bash
php artisan serve
npm run dev
```
