'use client';
import { Header, HeroBanner, ModuleListing, ModuleTab } from '@molecules';
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
