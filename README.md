# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Project Purpose

This repository contains a simple React application built with React Router. It serves as a basic template for a full-stack React application, demonstrating server-side rendering, routing, and data loading.

## Project Structure

Here is an overview of the most important files and directories in this project:

-   `app/`: This directory contains the main application code.
    -   `root.tsx`: The root component of the application. It defines the main layout, including the HTML structure, and includes an error boundary to catch and handle errors.
    -   `routes/`: This directory contains the application's routes. Each file in this directory corresponds to a specific route.
        -   `home.tsx`: The component for the home page, located at the root path (`/`).
    -   `welcome/`: This directory contains components that are used on the welcome page.
        -   `welcome.tsx`: The main component for the welcome page, which displays a logo and a list of resources.
        -   `test.tsx`: A simple test component used within the `Welcome` component.
    -   `routes.ts`: This file exports the route configuration for the application. It uses file-based routing to automatically generate routes from the files in the `app/routes` directory.
-   `public/`: This directory contains static assets that are served directly to the browser, such as `favicon.ico`.
-   `vite.config.ts`: The configuration file for Vite, the build tool used in this project. It includes plugins for React Router, Tailwind CSS, and TypeScript paths.
-   `package.json`: This file lists the project's dependencies, scripts for development and building, and other project metadata.
-   `README.md`: This file, providing an overview of the project, setup instructions, and other relevant information.

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
