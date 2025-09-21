import { useState } from 'react';
import AgeGate from '@/components/AgeGate';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';

const Index = () => {
  const [isAgeConfirmed, setIsAgeConfirmed] = useState(false);

  if (!isAgeConfirmed) {
    return <AgeGate onConfirm={() => setIsAgeConfirmed(true)} />;
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <Gallery />
    </div>
  );
};

export default Index;