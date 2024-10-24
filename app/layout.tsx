import '@/app/ui/global.css';
import { roboto } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased bg-gray-200`}>
        {children}
      </body>
    </html>
  );
}