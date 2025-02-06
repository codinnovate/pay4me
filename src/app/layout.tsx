import './globals.css';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-6xl mx-auto"> 
        {children}
      </body>
    </html>
  );
}
