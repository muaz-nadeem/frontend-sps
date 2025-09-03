// src/components/FlowbiteInitializer.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initFlowbite } from 'flowbite';

const FlowbiteInitializer = () => {
  const location = useLocation();

  useEffect(() => {
    initFlowbite();
  }, [location.pathname]);

  return null; // This component doesn't need to render anything
};

export default FlowbiteInitializer;