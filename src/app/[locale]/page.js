'use client';

import React, { Suspense, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import NavBar from '../components/navBar';
import Intro from '../components/Intro';
import About from '../components/About';
import FeaturesSection from '../components/Features';
import PricingTable from '../components/Pricingss';
import { measurePageLoad } from '@/lib/performance';
import dynamic from 'next/dynamic';

// Lazy-load heavy / non-critical components
const PreSignUpForm = dynamic(() => import('../components/signup'), {
  ssr: false,
  loading: () => <div className="text-gray-500 py-8 text-center">Loading form...</div>
});
const Carousel = dynamic(() => import('../components/carousel'), {
  ssr: false,
  loading: () => <div className="text-gray-500 py-8 text-center">Loading gallery...</div>
});
const Map = dynamic(() => import('../components/map'), {
  ssr: false,
  loading: () => <div className="text-gray-500 py-8 text-center">Loading map...</div>
});
const ContactForm = dynamic(() => import('../components/contact'), {
  ssr: false,
  loading: () => <div className="text-gray-500 py-8 text-center">Loading contact...</div>
});

export default function HomePage() {
  const t = useTranslations('HomePage');

  useEffect(() => {
    // Performance monitoring in development
    if (process.env.NODE_ENV === 'development') {
      measurePageLoad().then((metrics) => {
        console.log('🚀 Performance Metrics:', {
          domContentLoaded: `${Math.round(metrics.domContentLoaded)}ms`,
          loadComplete: `${Math.round(metrics.loadComplete)}ms`,
          totalResources: metrics.totalResources
        });
      });
    }
  }, []);

  return (
    <div>
      <NavBar />
      <Intro />

      {/* Above-the-fold content: load immediately */}
      <About />
      <FeaturesSection />
      <PricingTable />

      {/* Lazy-load below-the-fold / heavy sections */}
      <Suspense fallback={<div className="flex justify-center items-center py-16"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div></div>}>
        <PreSignUpForm />
        <Carousel />
        <Map />
        <ContactForm />
      </Suspense>
    </div>
  );
}
