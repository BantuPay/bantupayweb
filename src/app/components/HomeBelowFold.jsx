'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const Screenshots = dynamic(() => import('./carousel'), {
  ssr: false,
  loading: () => <div className="text-[#8b7355] py-16 text-center">Loading gallery…</div>,
});
const Coverage = dynamic(() => import('./map'), {
  ssr: false,
  loading: () => <div className="text-[#8b7355] py-16 text-center">Loading map…</div>,
});
const PreSignUpForm = dynamic(() => import('./signup'), {
  ssr: false,
  loading: () => <div className="text-[#8b7355] py-16 text-center">Loading form…</div>,
});
const ContactForm = dynamic(() => import('./contact'), {
  ssr: false,
  loading: () => <div className="text-[#8b7355] py-16 text-center">Loading contact…</div>,
});
const Footer = dynamic(() => import('./Footer'), { ssr: false });

export default function HomeBelowFold() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8B3D27]" />
        </div>
      }
    >
      <Screenshots />
      <Coverage />
      <PreSignUpForm />
      <ContactForm />
      <Footer />
    </Suspense>
  );
}
