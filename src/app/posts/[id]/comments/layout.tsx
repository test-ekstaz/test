import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comments',
  description: 'Comments for json placeholder',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="container">{children}</div>;
}
