import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

/**
 * Defines the meta information for the home page.
 * @param {object} args - The arguments for the meta function.
 * @returns An array of meta objects.
 */
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

/**
 * The home page component.
 * @returns The home page component.
 */
export default function Home() {
  return <Welcome />;
}
