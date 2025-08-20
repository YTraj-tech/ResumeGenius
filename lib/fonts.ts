// lib/fonts.ts
import { Moo_Lah_Lah, Bungee } from 'next/font/google';

export const mooLahLah = Moo_Lah_Lah({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-moo-lah-lah',
  display: 'swap',
});

export const bungee = Bungee({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bungee',
  display: 'swap',
});