import tenableLogo from "../../../assets/tenable logo 3.webp";
import tenableWhiteLogo from "../../../assets/Tenable logo white.webp";
import tenableFirstSectionImage from "../../../assets/tenable first section image.png";
import fortinetLogo from "../../../assets/Fortinet logo.webp";
import fortinetWhiteLogo from "../../../assets/Fortinet logo white.webp";

const productData = [
  {
    id: 1,
    slug: 'tenable',
    name: 'Tenable',
    logo: tenableLogo,
    whiteLogo: tenableWhiteLogo,
    banner: {
      title: "Why Tenable for IT & OT Secuirty?",
      description: "Tenable's solutions are designed to provide unparalleled visibility and control over your IT and OT environments, enabling organizations in the power sector to:",
      features: [
        {
          title: "Identify Vulnerabilities Proactively",
          description: "Discover, assess, and remediate vulnerabilities across all environments"
        },
        {
          title: "Streamline Compliance",
          description: "Simplify NEPRA compliance with tools that map directly to regulatory frameworks"
        },
        {
          title: "Mitigate Cyber Risks",
          description: "Prioritize remediation efforts based on risk to your critical assets"
        },
        {
          title: "Gain Unified Visibility",
          description: "Monitor all assets-from IT endpoints to OT systems-in a single pane of glass"
        },
        {
          title: "Ensure Operational Continuity",
          description: "Protect IT and OT systems against threats without disrupting operations"
        }
      ]
    },
    products: [
      {
        name: "Tenable.ot",
        descriptions: [
          "Real time monitoring and anomaly detection for OT environments with comprehensive asset inventory",
          "Protects critical Infrastructure through detailed risk assessments"
        ]
      },
      {
        name: "Tenable.io",
        descriptions: [
          "Cloud-based vulnerability management platform for modern IT assets",
          "Provides comprehensive visibility into cyber exposure"
        ]
      },
      {
        name: "Tenable.sc",
        descriptions: [
          "On-premises vulnerability management solution",
          "Delivers complete visibility into IT security risks"
        ]
      },
      {
        name: "Tenable.ad",
        descriptions: [
          "Secures Active Directory against attacks and misconfigurations",
          "Continuously monitors for security gaps and vulnerabilities"
        ]
      }
    ],
    stats: [
      {
        value: "60%",
        description: "Reduction in vulnerability remediation time"
      },
      {
        value: "94%",
        description: "Of the Fortune 500 rely on Tenable"
      },
      {
        value: "40,000+",
        description: "Organizations worldwide trust Tenable"
      }
    ],
    contactInfo: {
      title: "Ready to secure your IT & OT infrastructure?",
      description: "Contact SPS today to learn how Tenable solutions can help you meet NEPRA compliance requirements and protect your critical infrastructure."
    }
  },
  // Additional products can be added here following the same structure
  {
    id: 2,
    slug: 'kaspersky',
    name: 'Kaspersky',
    logo: fortinetLogo,
    whiteLogo: fortinetWhiteLogo,
    banner: {
      title: "Why Fortinet for Network Security?",
      description: "Fortinet's comprehensive security solutions provide robust protection for your network infrastructure, enabling organizations to:",
      features: [
        {
          title: "Secure Network Infrastructure",
          description: "Protect your entire network with advanced firewall and intrusion prevention systems"
        },
        {
          title: "Simplify Compliance Management",
          description: "Meet regulatory requirements with built-in compliance reporting and monitoring"
        },
        {
          title: "Enhance Threat Intelligence",
          description: "Stay ahead of emerging threats with real-time global threat intelligence"
        },
        {
          title: "Unify Security Management",
          description: "Manage all security solutions through a single pane of glass interface"
        },
        {
          title: "Optimize Performance",
          description: "Maintain network performance while implementing comprehensive security measures"
        }
      ]
    },
    products: [
      {
        name: "FortiGate",
        descriptions: [
          "Next-generation firewall with advanced threat protection",
          "Secures critical infrastructure with minimal performance impact"
        ]
      },
      {
        name: "FortiManager",
        descriptions: [
          "Centralized management platform for Fortinet security devices",
          "Simplifies administration of complex security environments"
        ]
      },
      {
        name: "FortiAnalyzer",
        descriptions: [
          "Security analytics and reporting solution",
          "Provides comprehensive visibility into network security events"
        ]
      },
      {
        name: "FortiSIEM",
        descriptions: [
          "Security information and event management solution",
          "Correlates security events for faster threat detection and response"
        ]
      }
    ],
    stats: [
      {
        value: "70%",
        description: "Reduction in security management time"
      },
      {
        value: "500+",
        description: "Million threats blocked daily worldwide"
      },
      {
        value: "25,000+",
        description: "Organizations protected by Fortinet solutions"
      }
    ],
    contactInfo: {
      title: "Ready to strengthen your network security?",
      description: "Contact SPS today to learn how Fortinet solutions can help you protect your critical infrastructure and meet compliance requirements."
    }
  }
];

export default productData;