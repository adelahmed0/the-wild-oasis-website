# The Wild Oasis Website

## Project Overview

This project is a modern web application for booking cabins in a hotel. It provides users with a seamless experience to
view available cabins, book their stay, and manage their bookings. The application supports Google login for easy access
and allows users to edit or delete their bookings as needed.

## Features

- **Cabin Listings**: View available cabins with detailed information.
- **Booking Management**: Book a cabin by selecting a start date and end date.
- **Edit & Delete Bookings**: Users can modify or cancel their existing bookings.
- **Google Authentication**: Users can log in using their Google account for a quick and secure experience.
- **Responsive Design**: Ensures a smooth experience on both desktop and mobile devices.

## Libraries Used

### Core Libraries:

- **Next.js**: A powerful framework for building high-performance web applications with full support for server-side
  rendering (SSR) and static site generation (SSG).
- **React**: A popular library for building interactive user interfaces using reusable components.
- **React-DOM**: Used for rendering React components to the DOM.

### Additional Libraries:

- **@heroicons/react**: A library that provides beautiful and customizable SVG icons for use in user interfaces.
- **@supabase/supabase-js**: A JavaScript library for interacting with the Supabase database, managing users, and
  handling sessions.
- **date-fns**: A library for easy and accurate date manipulation and formatting in JavaScript.
- **NextAuth.js**: A library for handling authentication in Next.js applications, supporting multiple authentication
  providers, including Google.
- **React-Day-Picker**: A flexible and customizable date picker component for React, used for selecting and managing
  dates within the application.
- **Tailwind CSS**: A utility-first CSS framework that provides a set of pre-defined classes for building responsive and
  modern user interfaces quickly.

### Development Tools:

- **ESLint**: A static code analysis tool for identifying and fixing problematic patterns in JavaScript code.
- **Prettier**: A code formatter that ensures consistent code style across the project.
- **PostCSS**: A tool for transforming CSS with JavaScript plugins, used to enhance and optimize the stylesheets.
- **ESLint Configurations**:
    - **eslint-config-next**: Provides ESLint configurations specifically tailored for Next.js projects.
    - **eslint-config-prettier**: Disables ESLint rules that might conflict with Prettier.
    - **eslint-plugin-prettier**: Runs Prettier as an ESLint rule.
    - **eslint-plugin-react**: Provides linting rules for React applications.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/adelahmed0/the-wild-oasis-website
    ```

2. Navigate to the project directory:
    ```bash
    cd the-wild-oasis-website
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```
   or
    ```bash
    yarn install
    ```

4. Set up environment variables for Google Authentication and Supabase:
    ```bash
    cp .env.example .env
    ```
   Update the `.env` file with your Google API keys and Supabase credentials.

5. Run the development server:
    ```bash
    npm run dev
    ```
   or
    ```bash
    yarn dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Special Notes

- **Date Handling**: The application uses date-fns for managing and formatting booking dates, ensuring smooth date
  selection and validation.
- **Google Authentication**: Powered by NextAuth.js, the application provides a secure and easy way to log in using
  Google accounts.
- **Tailwind CSS**: Utilized for responsive and utility-first styling, ensuring the UI is both sleek and functional
  across devices.


