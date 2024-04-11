# Samudralaya

Samudralaya is a web application that aims to create awareness about marine life conservation. It provides information about marine life. It also provides a platform for users to report marine life sightings and incidents. Users can also report illegal activities like fishing in marine protected areas or poaching. The application also provides news and articles related to marine life.

## The People Behind (Bohim Team)

- **Faizal Abdillah** (Project Manager)
- **Bintang Fajar Mauludin** (UI/UX Designer)
- **Deara Mayanda** (UI/UX Designer)
- **Muhammad Asyraf Faiz Kamil** (Fullstack Developer)
- **Sadam Alfian Pradana** (Fullstack Developer)

## Features

- User Authentication
- User Profile
- Marine Life News and Articles
- Encyclopedia of Marine Life
- Report Incidents
- Report Illegal Activities


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

1. Install the dependencies

```bash
composer install
npm install
```

1. Create a .env file

```bash
cp .env.example .env
```

1. Generate the application key

```bash
php artisan key:generate
```

1. Update the .env file with the database credentials

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1 // your database host
DB_PORT=3306 // your database port
DB_DATABASE=samudralaya 
DB_USERNAME=root // your database username
DB_PASSWORD= // your database password
```

1. Migrate the database and seed the database

```bash
php artisan migrate:fresh --seed
```

1. Link the storage folder

```bash
php artisan storage:link
```

## Running the Application

```bash
php artisan serve
npm run dev
```
