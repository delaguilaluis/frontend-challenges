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
        <main className="bg-blue-100 h-screen">
          <div className="mx-auto max-w-4xl space-y-8 px-2 lg:py-8 lg:px-8 lg:pl-72 h-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}