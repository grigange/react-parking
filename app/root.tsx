import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

/**
 * Defines the links for the application, including preconnecting to Google Fonts
 * and importing the Inter font.
 * @returns An array of link objects to be included in the document's <head>.
 */
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

/**
 * The root layout component for the entire application.
 * It sets up the basic HTML structure, including the <head> and <body>,
 * and renders child routes.
 * @param {object} props - The props for the component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns The main HTML structure of the application.
 */
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/**
 * The main application component. It serves as a placeholder for rendering the
 * matched child route using the Outlet component from React Router.
 * @returns A React element that renders the matched child route.
 */
export default function App() {
  return <Outlet />;
}

/**
 * A component that catches and displays errors that occur during rendering,
 * in server-side data loading, or in server-side actions.
 * It provides a user-friendly message and, in development, a stack trace.
 * @param {object} props - The props for the component.
 * @param {Error} props.error - The error that was thrown.
 * @returns A React element that displays the error information.
 */
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
