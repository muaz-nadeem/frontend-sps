import React, { useState } from 'react';
import HomeService from './HomeService';

const HomeServices = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const services = [
    {
      title: 'Security Policy Management for IT and OT assets as a Service',
      desc: 'Security Policy Management as a service (SPMaaS) is designed to help organizations establish robust security frameworks tailored to their IT and OT environments. We assist in crafting comprehensive policies, manuals, and standard operating procedures that align with regulatory standards and industry best practices. Regular reviews and updates ensure your policies evolve to address emerging threats and vulnerabilities. By enhancing governance, risk management, and operational effectiveness, we empower your organization to maintain compliance, protect critical assets, and foster a culture of proactive cybersecurity.'
    },
    {
      title: 'Security Controls Implementation and Improvement as a Service',
      desc: 'SPS\'s Security Controls Implementation and Improvement as a Service ensures robust protection for IT and OT assets in line with NEPRA cybersecurity policies. We establish and enhance access management, network security, encryption, intrusion detection, and traceability controls. Additionally, we provide secure remote and physical access protocols, regular data backups, and proactive identity theft prevention. Through continuous monitoring and employee training, we help safeguard critical infrastructure while ensuring compliance and operational resilience.',
    },
    {
      title: 'Security Risk Vulnerability Assessment as a Service',
      desc: 'SPS\'s Data Management as a Service ensures the accuracy, security, and authenticity of your critical data in compliance with NEPRA regulations. We implement strict access controls, validate data integrity, and safeguard sensitive information, enabling authorized access and ensuring seamless, secure data exchange within the power sector.'
    },
    {
      title: 'Data Management as a Service',
      desc: 'Managing your data effectively is crucial for security, compliance, and operational efficiency. we offer Data Management as a Service to help you secure, manage, and leverage your data in line with regulatory requirements and industry best practices.'
    },
    {
      title: 'Audit and Risk Assessment as a Service',
      desc: 'SPS\'s Audit and Risk Assessment as a Service ensures compliance with NEPRA regulations by conducting specialized audits and risk evaluations. We assess vulnerabilities, review interconnections between power sector stakeholders, and provide insights to manage risks and ensure regulatory alignment.'
    },
    {
      title: 'Monitoring and Incident Response as a Service',
      desc: 'SPS\'s Monitoring and Incident Response as a Service ensures continuous monitoring of IT and OT systems, rapid response to security incidents, and compliance with NEPRA regulations. We implement proactive security controls, incident management plans, and log management to detect and address vulnerabilities promptly, safeguarding your critical infrastructure.'
    },
    {
      title: 'Awareness and Training as a Service',
      desc: 'SPS\'s Awareness and Training as a Service equips your organization with essential cybersecurity knowledge, focusing on risk mitigation, compliance, and secure IT and OT asset management. We offer comprehensive training on roles, responsibilities, legal requirements, user authentication, and dispute resolution, ensuring your team is prepared to handle evolving security threats and stay compliant with regulatory standards.'
    },
    {
      title: 'Regulatory Reporting as a Service',
      desc: 'Regulatory Reporting as a Service ensures your organization meets all compliance requirements by providing a structured approach to reporting cybersecurity incidents and security breaches to the relevant authorities. Our service includes timely submission of detailed breach reports, including impact assessments on business operations, IT and OT assets, and users. We help establish a standardized mechanism for incident reporting, ranking, and using the appropriate tools, in consultation with PowerCert, ensuring all breaches are reported to the Authority within 72 hours and on a quarterly basis thereafter.'
    }
  ];

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <article className="flex flex-col justify-center items-center">
      <div className="w-full max-w-4xl border-2 border-[#d9d9d9] rounded-2xl bg-white">
        
        <ul className="p-6 md:p-12">
          <h1 className='text-blue justify-self-center font-bold text-2xl'>Services</h1>
          {services.map((service, index) => (
            <HomeService
              key={index}
              title={service.title}
              desc={service.desc}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </ul>
      </div>
    </article>
  );
};

export default HomeServices;