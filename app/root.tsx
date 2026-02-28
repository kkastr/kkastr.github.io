import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { LinksFunction } from "react-router";
import "/styles/globals.css";

const siteUrl = "https://kastritis.dev";

export const links: LinksFunction = () => {
  return [
    { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    { rel: "canonical", href: siteUrl },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f1e22" />
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
export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
