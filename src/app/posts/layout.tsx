import Header from '@/components/header/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts',
  description: 'posts for json placeholder',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
