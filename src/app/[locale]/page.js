'use client';

import React, { Suspense, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import NavBar from '../components/navBar';
import Intro from '../components/Intro';
import { measurePageLoad } from '@/lib/performance';

// Lazy-loaded components for better initial page performance
const About = React.lazy(() => import('../components/About').catch(() => ({ default: () => <div>About loading...</div> })));
const FeaturesSection = React.lazy(() => import('../components/Features').catch(() => ({ default: () => <div>Features loading...</div> })));
// const AccountPlans = React.lazy(() => import('../components/Pricing').catch(() => ({ default: () => <div>Pricing loading...</div> })));
const PreSignUpForm = React.lazy(() => import('../components/signup').catch(() => ({ default: () => <div>Signup loading...</div> })));
const Carousel = React.lazy(() => import('../components/carousel').catch(() => ({ default: () => <div>Slides loading...</div> })));
const Map = React.lazy(() => import('../components/map').catch(() => ({ default: () => <div>Map loading...</div> })));
const ContactForm = React.lazy(() => import('../components/contact').catch(() => ({ default: () => <div>Contact loading...</div> })));
const PricingTable = React.lazy(() => import('../components/Pricingss').catch(() => ({ default: () => <div>Billing loading...</div> })));

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

      {/* Lazy loaded sections with performance */}
      <Suspense fallback={<div className="flex justify-center items-center py-16"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div></div>}>
        <About />
      </Suspense>

      <Suspense fallback={<div className="flex justify-center items-center py-16"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
        <FeaturesSection />
      </Suspense>

      <Suspense fallback={<div className="flex justify-center items-center py-8"><div className="text-gray-500">Loading pricing...</div></div>}>
        <PricingTable />
      </Suspense>

      <Suspense fallback={<div className="flex justify-center items-center py-8"><div className="text-gray-500">Loading form...</div></div>}>
        <PreSignUpForm />
      </Suspense>

      <Suspense fallback={<div className="flex justify-center items-center py-8"><div className="text-gray-500">Loading gallery...</div></div>}>
        <Carousel />
      </Suspense>

      <Suspense fallback={<div className="flex justify-center items-center py-8"><div className="text-gray-500">Loading map...</div></div>}>
        <Map />
      </Suspense>

      <Suspense fallback={<div className="flex justify-center items-center py-8"><div className="text-gray-500">Loading contact...</div></div>}>
        <ContactForm />
      </Suspense>

    </div>
  );
}
