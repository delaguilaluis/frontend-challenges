import "./globals.css";
import { GlobalNav } from "@/ui/global-nav";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const metadata = {
  title: "Frontend Challenges",
  description: "A space to explore challenges done by Luis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalNav />
        <main className="bg-blue-100">{children}</main>
      </body>
    </html>
  );
}
