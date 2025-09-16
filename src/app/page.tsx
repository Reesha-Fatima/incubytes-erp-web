'use client';
import { Header, HeroBanner, ModuleListing, ModuleTab, PricingSection } from '@molecules';
import React from 'react';
export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <ModuleTab />
      <ModuleListing />
    </>
  );
}
