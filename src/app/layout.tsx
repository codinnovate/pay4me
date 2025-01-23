
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Provider store={store}>
        {children}
      </Provider>
      </body>
    </html>
  );
}
