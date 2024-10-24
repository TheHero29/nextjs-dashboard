import { Inter } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

// fonts.ts (or inside a layout/component)
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'], // Or any other subsets you want
  weight: ['400', '700'], // Choose font weights you want (e.g., regular and bold)
  style: ['normal', 'italic'], // Optional: include normal and italic styles
});

import { Lusitana } from 'next/font/google';

export const lusitana = Lusitana({
  subsets: ['latin'], // Or any other subsets you want
  weight: ['400', '700'], // Choose font weights you want (e.g., regular and bold)
});
