'use client';
import { Divider } from '@mantine/core';
import {
  Header,
  HeroBanner,
  ModuleListing,
  ModuleTab,
  PricingSection,
  Testimonials,
  FAQ,
  Footer,
} from '@molecules';
import React from 'react';
export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <ModuleTab />
      <ModuleListing />
      <PricingSection />
      <Testimonials />
      <Divider />
      <FAQ />
      <Footer />
    </>
  );
}
