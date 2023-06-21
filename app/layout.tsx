import "./globals.css";
import { GlobalNav } from "@/ui/global-nav";

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
        <main className="lg:pl-72">
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
