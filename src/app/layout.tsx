
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-6xl mx-auto p-2"> 
        {children}
      </body>
    </html>
  );
}
