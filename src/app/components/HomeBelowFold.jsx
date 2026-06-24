'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const PreSignUpForm = dynamic(() => import('./signup'), {
  ssr: false,
  loading: () => <div className="text-gray-500 py-8 text-center">Loading form...</div>,
});
const Carousel = dynamic(() => import('./carousel'), {
  ssr: false,
  loading: () => <div className="text-gray-500 py-8 text-center">Loading gallery...</div>,
});
const Map = dynamic(() => import('./map'), {
  ssr: false,
  loading: () => <div className="text-gray-500 py-8 text-center">Loading map...</div>,
});
const ContactForm = dynamic(() => import('./contact'), {
  ssr: false,
  loading: () => <div className="text-gray-500 py-8 text-center">Loading contact...</div>,
});

export default function HomeBelowFold() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600" />
        </div>
      }
    >
      <PreSignUpForm />
      <Carousel />
      <Map />
      <ContactForm />
    </Suspense>
  );
}
