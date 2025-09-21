import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AgeGate from '@/components/AgeGate';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';

const Index = () => {
  const [isAgeConfirmed, setIsAgeConfirmed] = useState(() => {
    return localStorage.getItem('ageConfirmed') === 'true';
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isAgeConfirmed) {
      localStorage.setItem('ageConfirmed', 'true');
    }
  }, [isAgeConfirmed]);

  if (!isAgeConfirmed) {
    return <AgeGate onConfirm={() => setIsAgeConfirmed(true)} />;
  }

  return (
    <Layout>
      <Hero />
      <Gallery />
    </Layout>
  );
};

export default Index;