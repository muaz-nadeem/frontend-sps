import React from 'react';
import CardData from './data/cardData';
import Card from './card';
import { CheckSquare } from 'lucide-react';
import AboutWriter from './AboutWriter';
const BlogLayout = () => {
    const challenges = CardData.slice(0, 6);
    const impacts = CardData.slice(6, 10);

    return (
        <article className="p-8 bg-gray-100">
            <section className='flex gap-3 h-auto w-4/5 bg-transparent shadow-md shadow-skyblue p-4 rounded-3xl mx-auto my-4'>
                 <CheckSquare className='size-24'/><p className='bg-transparent '>
                    As Pakistan’s power sector continues its digital transformation, embracing advanced technologies to improve efficiency and service delivery, the importance of robust cybersecurity has become undeniable. The integration of IT and Operational Technology (OT) systems, smart grids, and IoT devices has enhanced operational capabilities but also exposed the sector to unprecedented cybersecurity risks.
                </p>
            </section>
            <div className="container mx-auto">
                {/* Challenges Section */}
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Key Cybersecurity Challenges in Pakistan’s Power Sector
                </h2>
                {/* Changed negative margin from `-m-4` to `-m-6` to match the card padding */}
                <div className="flex flex-wrap -m-6">
                    {challenges.map((item) => (
                        <Card key={item.id} imgsrc={item.imgsrc} title={item.title} desc={item.desc} />
                    ))}
                </div>

                {/* Impacts Section */}
                <h2 className="text-3xl font-bold text-center mt-16 mb-8 text-gray-800">
                    Impact of Cybersecurity Breaches
                </h2>
                {/* Changed negative margin from `-m-4` to `-m-6` to match the card padding */}
                <div className="flex flex-wrap -m-6">
                    {impacts.map((item) => (
                        <Card key={item.id} imgsrc={item.imgsrc} title={item.title} desc={item.desc} layout="two-col" />
                    ))}
                </div>
            </div>
            <AboutWriter/>
        </article>
    );
};


export default BlogLayout;