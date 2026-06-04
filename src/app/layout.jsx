import './globals.css';

export const metadata = {
  title: 'GRC Vulnerable Dashboard',
  description: 'Deliberately vulnerable GRC dashboard for DevSecOps practice'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
