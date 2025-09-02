// src/data/pricingPlans.js
const pricingPlans = [
  {
    id: 1,
    heading:'What’s Included in the Basic Service?',
    slug: 'basic',
    title:[
      'Monthly NEPRA Compliance Assessment',
      'Recommendations to Improve Compliance',
      'Artifact Creation for NEPRA Audits'
    ],
    description: [
      `Our expert NEPRA compliance consultant will meet with your team once a month to assess your organization's current compliance status.`,
      `You’ll receive detailed recommendations tailored to your specific needs, including optional services to improve your cybersecurity posture.`,
      `We’ll help you create essential artifacts and documentation that can be presented to NEPRA auditors, ensuring transparency and readiness during evaluations.`
    ],
    benifit:[
      'Get a clear understanding of your compliance status.',
      'Develop confidence in presenting compliance evidence to NEPRA auditors.',
      'Begin improving your security policies and controls with actionable insights.'
    ],
    formHeading:'Take the first step toward NEPRA compliance today.'
  },
  {
    id: 2,
    heading:'What’s Included in the Standard Service?',
    slug: 'standard',
    title:[
      'Weekly Compliance Sessions',
      'Detailed Compliance Roadmaps',
      'Artifact and Documentation Support',
      'Enhanced Advisory Services'
    ],
    description: [
      `Our NEPRA compliance consultant will meet with your team four times a month to review progress, address challenges, and guide you toward compliance.`,
      `Get a comprehensive plan to enhance your cybersecurity posture, complete with timelines and actionable tasks.`,
      `We'll work with you to maintain detailed, audit-ready documentation to demonstrate compliance.`,
      ` Security Policy Management\n
      Risk and Vulnerability Assessments\n
      Awareness and Training `
    ],
    benifit:[
      'Stay on top of compliance with regular, dedicated support',
      'Minimize risk with improved IT and OT security controls.',
      'Build a strong cybersecurity framework for audits and beyond..'
    ],
    formHeading:'Take control of your NEPRA compliance journey with regular, proactive support.'
  },
  {
   id: 3,
    heading:'What’s Included in the Premium Service?',
    slug: 'premium',
    title:[
      'Bespoke Compliance Support',
      'Dedicated Security Experts'
    ],
    description: [
      `Work with our team to design a customized compliance strategy tailored to your specific needs, challenges, and timelines.`,
      `Collaborate with a team of cybersecurity experts who will work closely with your organization to address critical compliance areas, including:`
    ],
    AdvisoryServices:[
      'Security Policy Management for IT and OT assetst',
      'Vulnerability Assessments and Risk Mitigations',
      'Monitoring, Incident Response, and Reporting'
    ],
    benifit:[
      'Get a clear understanding of your compliance status.',
      'Develop confidence in presenting compliance evidence to NEPRA auditors.',
      'Begin improving your security policies and controls with actionable insights.'
    ],
    formHeading:'Take the first step toward NEPRA compliance today. Our Basic Service is free—no strings attached.'
  }
];

export default pricingPlans;