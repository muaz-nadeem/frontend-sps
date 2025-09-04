// src/pages/Pricing.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Plans from '../components/Plans';
import PricingInformation from '../components/pricing_info';
import Description_box from '../components/productpage_components/Description_box';
import PriceForm from '../components/pricing_form';
import pricingPlans from '../components/pricing_plans';

const Pricing = () => {
  // Get the 'planName' (e.g., 'basic', 'standard') from the URL
  const { planName } = useParams();
  // Find the correct plan data based on the planName (slug)
  const currentPlan = pricingPlans.find(plan => plan.slug === planName);
  // Handle the case where the plan is not found
  if (!currentPlan) {
    return <div>Plan not found.</div>;
  }

  return (
    <div className='mt-12'>
      <Plans className="" />
      <PricingInformation
        heading={currentPlan.heading}
        title={currentPlan.title}
        desc={currentPlan.description}
      />
      <div className='flex flex-col items-center justify-center mt-24'>
        <h3 className='text-xl text-blue font-bold'>How you benefit</h3>
        <div className="flex flex-row flex-wrap justify-center gap-5 mt-5 max-w-4xl">
          {currentPlan.benifit.map((benefit, index) => (
            <>
              <Description_box key={index} classes={'w-96 h-auto'}>
                {benefit}
              </Description_box>
              {index === 1 && (
                <div className="w-full"></div>
              )}
            </>
          ))}
        </div>
      </div>
      <PriceForm title={currentPlan.formHeading} />
    </div>
  );
};

export default Pricing;