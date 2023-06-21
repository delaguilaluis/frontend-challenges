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
        <div>{children}</div>
      </body>
    </html>
  );
}
