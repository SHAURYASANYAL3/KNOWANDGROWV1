import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KNOW & GROW',
    short_name: 'KNOW & GROW',
    description: 'Youth-led initiative for mental health and digital safety.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff9f0',
    theme_color: '#fff9f0',
    icons: [
      {
        src: '/icon',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
