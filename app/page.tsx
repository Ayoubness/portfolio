import React from "react";
import Image from "next/image";
import SubmitBtn from "@/components/submit-btn";
import Gallery from "@/components/gallery";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4" role="main">
      <section id="home" className="w-[95%] sm:max-w-[50rem] text-center pt-6 pb-16">
        <div className="mb-5">
          <Image
            src="/ayoub.jpeg"
            alt="Ayoub EZ ZARIY"
            width={320}
            height={320}
            priority
            className="rounded-full object-cover mx-auto border-4 border-gray-300"
          />
        </div>
        <h1 className="text-3xl font-bold mb-5">Ayoub EZ ZARIY</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8 text-justify text-base">
          I am a bilingual IT consultant with over 5 years of experience in IT
          support, functional analysis, and software development across diverse
          industries, including media, e-commerce, and enterprise IT systems.
          My expertise lies in diagnosing and resolving complex technical
          issues, optimizing system performance, and delivering scalable
          solutions tailored to business needs.
          <br />
          <br />
          With a strong background in application troubleshooting, SQL, cloud
          technologies, and business process optimization, I have successfully
          led cross-functional teams and managed multinational client accounts.
          I thrive in Agile environments, collaborating with developers,
          stakeholders, and IT teams to drive efficiency and innovation. Fluent
          in French, English, and Arabic, I bring a global perspective and a
          problem-solving mindset to every project, ensuring impactful results
          and seamless user experiences.
        </p>
        <div className="flex gap-4 justify-center text-gray-700 dark:text-gray-300">
          <a href="mailto:Hi@zariy.com">Hi@zariy.com</a>
          <span>•</span>
          <a href="tel:+14374231196">+1 (437) 423-1196</a>
          <span>•</span>
          <span>Toronto, ON</span>
        </div>
      </section>

      <section id="experience" className="w-[95%] sm:w-[80%] scroll-mt-28 mx-auto py-32">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Professional Experience
        </h2>
        
        <div className="flex flex-col gap-12">
          {/* First Experience */}
          <div className="flex flex-col sm:flex-row border border-white border-opacity-40 bg-white bg-opacity-80 backdrop-blur-[0.5rem] rounded-2xl shadow-lg dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 p-8 transition-all duration-300 hover:scale-[1.01]">
            <div className="w-full sm:w-[30%] flex justify-center items-center mb-8 sm:mb-0">
              <Image
                src="/Noorahme.png"
                alt="Norahme Logo"
                width={300}
                height={200}
                loading="lazy"
                className="max-w-[50%] sm:max-w-[70%] object-contain rounded-lg"
              />
            </div>
            <div className="w-full sm:w-[70%] sm:pl-8 text-base">
              <h3 className="text-2xl font-semibold mb-2">
                Web Consultant - Norahme: Full-Scale Sourcing Platform Development
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Led the transformation of an existing MVP into a scalable, feature-rich sourcing platform, improving automation, system reliability, and third-party integrations.
              </p>
              <div>
                <h4 className="text-xl font-semibold mb-2">Key Contributions:</h4>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-4">
                  <li>
                    <strong>Client Collaboration & Support:</strong> Provided end-to-end support by addressing technical issues, gathering client feedback, and ensuring a smooth user experience. Conducted functional analysis, developed case studies, and actively participated in brainstorming sessions to refine business requirements.
                  </li>
                  <li>
                    <strong>Stakeholder Coordination:</strong> Worked in an Agile environment, managing stakeholder expectations through structured weekly progress reports, sprint planning, and backlog prioritization. Proactively identified risks and proposed enhancements to improve platform performance.
                  </li>
                  <li>
                    <strong>Technical Alignment & API Integration:</strong> Collaborated closely with the development team to align technical implementation with functional specifications. Designed and integrated REST APIs to enable seamless third-party data exchange, optimizing system efficiency. Gathered technical feedback and contributed to refining the platform’s architecture for scalability and automation.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second Experience */}
          <div className="flex flex-col sm:flex-row border border-white border-opacity-40 bg-white bg-opacity-80 backdrop-blur-[0.5rem] rounded-2xl shadow-lg dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 p-8 transition-all duration-300 hover:scale-[1.01]">
            <div className="w-full sm:w-[30%] flex justify-center items-center mb-8 sm:mb-0">
              <Image
                src="/mediabuy.jpg"
                alt="Totem Africa Logo"
                width={300}
                height={200}
                loading="lazy"
                className="max-w-[50%] sm:max-w-[70%] object-contain rounded-lg"
              />
            </div>
            <div className="w-full sm:w-[70%] sm:pl-8 text-base">
              <h3 className="text-2xl font-semibold mb-2">
                Business & Web Development Consultant - Totem Africa: Cross-African Media Booking Platform
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Led the requirements gathering and technical development of a comprehensive digital media booking platform serving multiple African markets, enabling centralized management of diverse media channels and automated workflows.
              </p>
              <div>
                <h4 className="text-xl font-semibold mb-2">Key Contributions:</h4>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-4">
                  <li>
                    <strong>Requirements Analysis & Architecture Design:</strong> Collaborated with 14 stakeholders across African countries to gather and prioritize business requirements. Designed functional architecture for booking and invoice generation modules, creating a unified system capable of handling over 500 media channels across multiple media types (TV, Radio, Print, Outdoor).
                  </li>
                  <li>
                    <strong>Workflow Optimization & Integration:</strong> Developed a sophisticated module to integrate different media types into a single reservation system, significantly reducing manual processing time. Engineered automated workflows for media scheduling and invoice generation, streamlining operations across regional markets.
                  </li>
                  <li>
                    <strong>Testing & Quality Assurance:</strong> Defined comprehensive test scenarios and led functional testing sessions with stakeholders. Conducted user acceptance testing (UAT) to validate system performance and reliability while accommodating regional variations in media buying processes.
                  </li>
                  <li>
                    <strong>Cross-functional Collaboration:</strong> Facilitated communication between business stakeholders and technical teams to ensure alignment between business needs and technical implementation. Managed expectations through structured documentation and regular progress updates.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third Experience */}
          <div className="flex flex-col sm:flex-row border border-white border-opacity-40 bg-white bg-opacity-80 backdrop-blur-[0.5rem] rounded-2xl shadow-lg dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 p-8 transition-all duration-300 hover:scale-[1.01]">
            <div className="w-full sm:w-[30%] flex justify-center items-center mb-8 sm:mb-0">
              <Image
                src="/totem.jpg"
                alt="Media Campaigns"
                width={300}
                height={200}
                loading="lazy"
                className="max-w-[50%] sm:max-w-[70%] object-contain rounded-lg"
              />
            </div>
            <div className="w-full sm:w-[70%] sm:pl-8 text-base">
              <h3 className="text-2xl font-semibold mb-2">
                Account Manager, International Media Campaigns
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Led strategic account management for international clients across diverse markets, ensuring effective campaign execution while building strong client relationships through clear communication and technical problem-solving.
              </p>
              <div>
                <h4 className="text-xl font-semibold mb-2">Key Contributions:</h4>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-4">
                  <li>
                    <strong>Client Technical Liaison:</strong> Translated complex technical requirements and campaign specifications into clear action plans for implementation teams. Served as the technical interface between clients and internal teams, ensuring accurate interpretation of needs and specifications.
                  </li>
                  <li>
                    <strong>System Integration & Process Management:</strong> Coordinated technical aspects of campaign implementation across multiple platforms and systems. Troubleshot integration issues between different media platforms and identified process improvements to enhance operational efficiency.
                  </li>
                  <li>
                    <strong>Data Analysis & Reporting:</strong> Applied analytical skills to evaluate campaign performance metrics and technical delivery KPIs. Developed structured reporting frameworks to track system performance and identify optimization opportunities across different media channels.
                  </li>
                  <li>
                    <strong>Cross-functional Technical Coordination:</strong> Facilitated collaboration between technical teams across multiple agencies and vendors, ensuring seamless integration of systems and consistent implementation standards. Managed escalations and technical issues through established protocols to minimize campaign disruptions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="volunteer" className="w-[95%] sm:w-[80%] scroll-mt-28 mx-auto py-32">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Volunteer Experience
        </h2>
        
        <div className="border border-white border-opacity-40 bg-white bg-opacity-80 backdrop-blur-[0.5rem] rounded-2xl shadow-lg dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 p-8">
          <h3 className="text-2xl font-semibold mb-2">
            Co-Founder of SPACEFEST and SPACEBOT
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-base">
            Organize and execute an international science and astronomy festival (SPACEFEST) and a robotics hackathon (SPACEBOT) to advance science and astronomy education, foster international collaboration, and engage students and the public in scientific exploration.
          </p>

          <div>
            <h4 className="text-xl font-semibold mb-4">Scope of Work:</h4>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-4 text-base">
              <li>
                <strong>Event Planning:</strong> Co-founded SPACEFEST, a 10-day international science and astronomy festival, and SPACEBOT, a robotics hackathon. Over a year of preparation involved planning diverse activities including robotics competitions, scientific conferences, and a space caravan.
              </li>
              <li>
                <strong>Partnerships:</strong> Collaborated with the Spacenauts Association and the United States Embassy to coordinate event logistics and secure participation from international researchers, scientists, and various robotics and science clubs.
              </li>
              <li>
                <strong>Educational Outreach:</strong> Implemented the "Space Van" initiative, bringing science and astronomy education to students in over 12 schools across Agadir region. Organized interactive exhibits and educational sessions to engage students and enhance their understanding of space and science.
              </li>
              <li>
                <strong>Public Engagement:</strong> Attracted over 5,000 public visitors to the SPACEFEST stands during Space Public Day, providing an immersive experience in science and astronomy and promoting public interest in these fields.
              </li>
              <li>
                <strong>Hackathon Coordination:</strong> Managed the logistics for the SPACEBOT robotics hackathon, including the provision and setup of necessary hardware. Coordinated with the parents of minor participants to ensure the safe and effective use of hardware, addressing any technical or logistical needs.
              </li>
            </ul>
          </div>
          <Gallery />
        </div>
      </section>

      <section id="contact" className="w-[95%] sm:max-w-[40rem] pb-32 pt-32 scroll-mt-28">
        <h2 className="text-3xl font-bold mb-8 text-center">Let's Connect!</h2>
        <ContactForm />
      </section>
    </main>
  );
}
