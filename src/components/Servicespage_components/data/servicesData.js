import Serive1_img from '/servicesImages/service1.webp'
import Service2_img from '/servicesImages/service2.webp'
import Service3_img from '/servicesImages/service3.webp'
import Service4_img from '/servicesImages/service4.webp'
import Service5_img from '/servicesImages/service5.webp'
import Service6_img from '/servicesImages/service6.webp'
import Service7_img from '/servicesImages/service7.webp'
import Service8_img from '/servicesImages/service8.webp'

const servicesdata=[
    {
    id:1,
    slug:'service-1',
    banner:'Our Security Policy Management as a Service offers a comprehensive solution aligned with NEPRA Cybersecurity Guidelines. This service ensures that your organization not only meets compliance requirements but also fortifies its IT and OT infrastructure to protect critical systems and data. Here’s how we help',
    img: Serive1_img, 
    heading:'Compliance Area',
    li:[
        'IT and OT Security Policy Compliance for Licensees and Generation Companies : ',
        'The IT and OT assets security policy and manuals of a licensee, registration holder and generation company shall : ',    
    ],
    lidata:[
        'Every licensee, registration holder and a generation company connected to national grid shall develop or adopt, implement and regularly review (at least once in every three years) and update IT and OT assets security policy, manuals and related standard operating procedures.',
       [ 'Define and put in place appropriate management structure with required skills and qualifications for developing, maintaining, reviewing, and updating the information security framework, and particularly hire qualified cybersecurity individuals and appoint Chief Information Security Officer (CISO)',
        'Provide for maintenance of inventory and categorization of IT and OT assets',
        'Provide for enhancement of security of IT and OT assets, particularly critical infrastructure',
        'Provide mechanisms to protect its systems from unauthorized access, to ensure integrity, confidentiality, and authenticity of data and systems',
        'Provide guidelines for acquisition of information technology (IT) and operational technology (OT) assets',
        'Contain provisions for reliability and availability of information systems and data and maintaining operational effectiveness',
       ' Provide for accountability by incorporating standard operating procedures, policies, and controls to enable traceability of all operations and identification of the system user at the relevant time',
        'Provide for formulation, roles, and responsibilities of the Security Advisory Committee (SAC)',
       ' Provide the requirements for regular monitoring of security controls, responding to security incidents, mitigating risks, and vulnerabilities in IT and OT assets',
       ' Provide for patch and change management',
        'Provide for conducting regular audits, security risk assessments, and management thereof',
        'Adequately cover any gaps identified through a gap analysis and enable appropriate controls',
        'Provide requirements and processes for evaluating employees, contractors and other relevant stakeholders for potential risks',
        'Define a business continuity plan to ensure service continuity iii case of any incident',
        'Provide for data disposal procedures and requirements that avoid any unauthorized access or use of such data',
        'Promote a culture of cyber-security awareness within the organization and channels for training and awareness of the employees and contractors',
        'Provide for establishment of channels of communications for sharing of any critical information relating to a threat to the power sector: Provided that it shall be ensured that any information shared in this regard is kept confidential',
        'Provide mechanism for seamlessly implementing the guidelines from PowerCert and/or the Authority',
       ` Reporting of any significant threat or attack in real time to the Authority's designated officer and PowerCERT`,
        'Provide for implementation of any other guidelines or directives issued by the Authority or PowerCERT in the interest of ensuring protection of power sector in general and any part thereof in particular']
    ]
    },
     {
    id:2,
    slug:'service-2',
    banner:'Our Security Controls Implementation and Improvement as a Service is designed to help organizations establish, enhance, and maintain robust security controls to protect IT and OT assets, ensuring compliance with NEPRA cybersecurity policies and international standards.',
    img:Service2_img,
    heading:'Compliance Area',
    li:[
        'Access Rights Management : ',
        'Operating System Security: ',
        'Secure Remote Access : ',
        'Physical Access Control : ',
        'IT & OT Network Security : ',
        'Firewalls : ',
        'Intrusion Detection & Prevention : ',
        'Encryption & Data Security : ',
        'Identity Theft Prevention : ',
        'Traceability & Accountability :',
        'Data Backup & Business Continuity :',
        'Training & Security Awareness : ',   
    ],
    lidata:[
        `Users' access rights shall be appropriate and commensurate with their job functions and shall be periodically reviewed keeping in view the risk ranking of the systems, data and applications as outlined in Security Risk Assessment document. Changes in Access Rights shall be based on personal or systems change and shall only be applied after due authorization while ensuring proper implementation of "least privilege principle`,
        `Necessary Operating Systems' controls shall be implemented to ensure that access is physically and logically secured by ensuring that privileged access is restricted, regularly monitored and periodically audited.`,
        `Remote access to high-risk IT and OT assets shall only be granted after management's approval in writing and shall be subject to regular audits. Remote access shall also be based on strong authentication and encryption to secure communications: Provided that a licensee, registration holder or a generation company shall not allow remote access to any critical infrastructure in the power sector, from a country that is considered hostile towards Pakistan.`,
        `Licensees shall ensure that physical access to different systems, segments and data sites is restricted, regularly monitored and duly logged.`,
        `Network Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS) shall be deployed between different security domains as per their risk classification.`,
        `Firewalls shall be deployed between different security domains, virtual local area networks (VLAN), segments and zones to control network traffic. Firewalls selection and deployment policy shall be devised according to the characteristics of network (i.e., traffic volume, and risk classification of IT and OT assets).`,
        [`Implementation of Intrusion Detection (IDS) and Intrusion Prevention (IPS) systems.`,
        `Risk-based security domain classification for effective monitoring.`
        ],
        `Access, storage and data communication shall be encrypted using reliable encryption methods, industry encryption standards and tools to strengthen the security of communications and sensitive payment data in accordance with the relevant laws.`,
        `Licensee shall develop and implement a proactive Identity Theft Prevention Program which includes procedures for identification of information to be protected, and threats due to thefts and frauds as well as methods for responding appropriately to identified threats.`,
        `Traceability of operations performed on IT and OT assets shall be ensured.`,
        `Regular backup of important data, transactions and software shall be ensured.`,
        `Relevant employees of the licensee shall have appropriate knowledge and background to perform their tasks. Regular trainings shall be arranged to keep employees aware of the security risks, security controls and security control monitoring mechanisms. Employees shall be regularly updated about the changes in internal policies and procedures to ensure operational effectiveness.`
    ]
    },
    {
    id:3,
    slug:'service-3',
    banner:'SPS’s Security Risk and Vulnerability Assessment as a Service provides a structured approach to identifying, evaluating, and prioritizing risks to your IT and OT assets, ensuring compliance with NEPRA cybersecurity regulations.',
    img: Service3_img, 
    heading:'Compliance Area',
    li:[
        'Conducting regular Security Risk and Vulnerability Assessment : ',
        'The risk I vulnerability assessment shall cover the following aspects as a minimum requirement : ',    
    ],
    lidata:[
        'The licensee shall conduct and document a formal Security Risk I Vulnerability Assessment for Information Security Assets (IT and OT) with a view of identifying, estimating and prioritizing risks to which its operations are exposed due to information security vulnerabilities. The control testing shall be based on the controls mentioned in the relevant international standards. The Board of Directors or a Committee of the Board authorized by the Board of Directors shall review the risk / vulnerability assessment document and take steps to mitigate any risks and vulnerabilities identified.',
       [ `A current and detailed description of licensee's business and technological environment and existing security measures in place including identification of location, systems and methods for maintaining information `,
        'An identification of information and the information systems to be protected specifically',
        'Classification and ranking (high, medium, low) of the sensitive systems, applications in order of their importance and based on the assessment of threats and vulnerabilities or risk assessment;',
        'Assessment of potential threats and vulnerabilities to security and integrity of data, information systems and applications ',
        `An evaluation of existing Security Controls' effectiveness against each threat and vulnerability`,
        `The security and contractual responsibilities of Service Providers (SPs), including customers who have access to the licensee's systems and data `,
       ' Compliance, concentration, operational, country and legal risks shall be assessed by the licensees before entering into the contract, while managing information security outsourcing arrangements with the SPs ',
        'The Security Risk / Vulnerability Assessment shall be carried out at least once a year; however, in case of a major security breach, significant changes to the infrastructure and introduction of a new product or service, an immediate review of risk assessment shall be carried out. Further, in case of a major security breach, risk assessment review shall include a detailed analysis of the factors that cause such security breaches.',
       ]
    ]
    },
     {
    id:4,
    slug:'service-4',
    banner:`SPS’s Data Management as a Service ensures secure, accurate, and authorized access to critical data in compliance with NEPRA cybersecurity regulations. We provide robust mechanisms to validate and protect the integrity of your data, ensuring it is free from errors and accessible only to authorized personnel.`,
    img: Service4_img, 
    heading:'Compliance Area',
    li:[
        'Data Integrity and Access Control Responsibilities : ',
        'Critical Data Validation Mechanism : ',    
    ],
    lidata:[
        'It shall be the responsibility of the licensee providing data to another licensee or stakeholder of power sector to ensure that the data is free from any errors, access to data is provided to only ithorized persons and there is a mechanism in place to ensure data is authentic.',
       [ 'The national grid company and the licensees or generation companies connected with it shall put in place mechanism for any critical data validation.',
        'Our service helps you manage and safeguard your data, ensuring its authenticity, security, and compliance with industry regulations for seamless operations and data exchange within the power sector.']
    ]
    },
    {
    id:5,
    slug:'service-5',
    banner:`SPS’s Audit and Risk Assessment as a Service helps ensure compliance with NEPRA regulations by providing specialized audits and risk assessments tailored to your organization's needs. We assist in meeting the Authority’s requirements for special audits or risk evaluations, including those related to interconnections between power sector stakeholders.`,
    img: Service5_img, 
    heading:'Compliance Area',
    li:[
        'Special Audit and Risk Assessment Directive : ',
           
    ],
    lidata:[
       [ 'The Authority may, for reasons to be recorded in writing, order a special audit and/or risk assessment with such objectives as may be deemed appropriate in respect of any licensee, registration holder and generation company including any interconnection between the stakeholders of the power sector.',
        'Our service helps you proactively manage risks and comply with NEPRA’s audit and assessment requirements, ensuring that your operations remain secure and aligned with regulatory standards']
    ]
    },
    {
    id:6,
    slug:'service-6',
    banner:`SPS’s Monitoring and Incident Response as a Service ensures that your IT and OT systems are continuously monitored for security risks and vulnerabilities, while providing rapid, effective responses to incidents. We implement approved mechanisms for monitoring security controls and managing incidents in compliance with NEPRA’s regulations.`,
    img: Service6_img, 
    heading:'Compliance Area',
    li:[
        'Monitoring of Security Controls and Incident Management : ',
        'Incident Management Plan and Organizational CERT : ',
        'Security Controls Monitoring and Response Mechanism :',
        'Our service helps safeguard your operations by providing continuous monitoring, immediate incident response, and effective management of security breaches, ensuring compliance with NEPRA regulations and protection of critical infrastructure.'
           
    ],
    lidata:[
      'A generation company connected to the national grid, a licensee or a registration holder shall ensure that approved mechanisms for monitorization of security controls and any computer incident in line with the relevant best practices are in place.',
      'A generation company connected to the national grid, a licensee or a registration holder shall develop and shall have in place incident management plan to tackle immediately any incident at the organizational level by the organizational CERT to ensure that an organizational incident is properly addressed and does not spread to or impact other licensees or stakeholders of the power sectors.',
      ['A generation company connected to the national grid, a licensee or a registration holder shall develop and implement a formally approved mechanism for the monitoring of Security Controls. An analysis of the effectiveness of existing or proposed Security Controls Monitoring methods shall be part of this monitoring mechanism. Licensee shall ensure that at the minimum the following aspects are covered in the Security Controls Monitoring and Response mechanism',
      'Monitoring of its network activity by collecting and analyzing the host and network data related to security events such as, including but not limited to, privileged access to sensitive operating systems, configuration changes, and access to critical applications etc',
      'Methods for proactive monitoring of IDS/IPS and for responding to security breaches shall be listed in detail in the monitoring mechanism. A rapid response team shall be nominated and made responsible to respond immediately in case of a security breach ',
      'Monitoring and reporting mechanism of Authentication Controls shall be formally documented and approved by the senior management and implemented accordingly',
      `Procedures and time required for restoration of licensee's systems shall be part of Security Controls Monitoring and Response process `,
      `Use of self-assessments, penetration testing, and independent security audits shall commensurate with the systems' complexity and risk exposures `,
      `Identification and listing of licensee's policy violations, unauthorized configuration changes, and other conditions which can potentially increase the risk of security breaches`,
      `Procedures to ensure the monitoring of logs and audit trails on a regular and predefined periodic basis shall be developed. The security logs and audit trails for IT and OT asset controls shall be retained for a period of five years`
      ]
    ]
    },
    {
    id:7,
    slug:'service-7',
    banner:`SPS’s Awareness and Training as a Service is designed to ensure that your organization is equipped to manage and mitigate information security risks effectively. We provide a comprehensive training program focused on cybersecurity threats, best practices, and regulatory compliance, fostering a secure and informed workforce.`,
    img: Service7_img, 
    heading:'Compliance Area',
    li:[
        'Information Security Awareness and Training Program : ',
        'This program shall cover the following aspects at the minimum :',
        `Our Awareness and Training as a Service ensures that your workforce stays informed, compliant, and prepared to mitigate security risks, protecting your IT and OT assets from evolving threats.`
           
    ],
    lidata:[
      'A formal awareness and training program regarding information security threats and safeguards to minimize frauds and identity theft risks shall be developed and implemented by the licensees.',
      ['An explanation of liabilities, roles, and responsibilities of the licensee as well as its customers and users for using IT and OT products and services offered by the licensee',
      'Compliance with the disclosure requirements under the applicable laws',
      'Contact details of the help desk that might be needed in case of any information security issues',
      'Procedure for re-authentication and user profile updating',
      'Complaint handling process including dispute resolution mechanism related to IT and OT assets',
      'Regular issuance of guidelines to customers and users on a regular basis as required for mitigating the latest risks associated with IT and OT assets',
      'Regular review and evaluation of the awareness and training programs by the management.'
      ]
     
    ]
    },
     {
    id:8,
    slug:'service-8',
    banner:`Our Regulatory Reporting & Compliance service ensures that power sector entities—including generation companies, licensees, and registration holders—adhere to NEPRA’s evolving cybersecurity regulations. This service provides a structured framework for incident detection, reporting, and regulatory compliance to minimize security risks and enhance sector-wide resilience.`,
    img: Service8_img, 
    heading:'Compliance Area',
    li:[
        'These regulations are subject to all the relevant laws, rules and regulations issued by the Authority from time-to-time. All the licensees, registration holders and generation companies connected to the grid shall ensure that :',
        'Mandatory Reporting of Security Breaches and Threats : ',
    ],
    lidata:[
     [`All established security breaches shall be reported to the Authority. The incident and analysis reports of security breaches shall be furnished on a quarterly basis as per the Schedule`,
        `Impact of security breach on licensee's business, systems, applications, users, and customers as well as dependent IT and OT assets shall also be submitted`,
        `A common mechanism for transfer of information, ranking of incidents level to be reported, the frequency of reporting, and the use of relevant tools shall be adopted `
     ],
     `Any incident involving a security breach or threat shall be reported to the Authority immediately but not later than seventy-two hours from the first knowledge of the incident`
     
    ]
    },
]

export default servicesdata