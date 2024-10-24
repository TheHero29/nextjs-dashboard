"use client"
import SideNav from '@/app/ui/dashboard/sidenav';
import { Client } from '@vercel/postgres';
import { useEffect } from 'react';
export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log('Layout mounted');

    return () => {
      console.log('Layout unmounted');
    };
  }, []);
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}