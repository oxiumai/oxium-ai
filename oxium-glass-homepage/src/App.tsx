import type React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import {
  GlobeAltIcon,
  SunIcon,
  HomeModernIcon,
  BuildingStorefrontIcon,
  ArchiveBoxIcon,
  Squares2X2Icon,
  Cog6ToothIcon,
  PaperAirplaneIcon,
  EllipsisHorizontalIcon,
  ViewfinderCircleIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Removed Outlet as it's not directly used in App.tsx
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';


const calendlyUrl = 'https://calendly.com/placeholder';
const oxiumLogoUrl = '/OxiumOfficialV2.5.png';
const reviveIconUrl = '/assets/revive.png';
const upsellIconUrl = '/assets/upsell.png';
const speedIconUrl = '/assets/speed.png';
const aiIconUrl = '/assets/ai.png';
const contactIconUrl = '/assets/contact.png';
const acquisitionIconUrl = '/assets/acquisition.png';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

interface CollapsibleItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggleOpen: () => void;
  isLastItem?: boolean;
}

const CollapsibleItem: React.FC<CollapsibleItemProps> = ({ title, content, isOpen, toggleOpen, isLastItem }) => {
  const renderContent = () => {
    if (content.includes("(Try Demo)")) {
      const [before, after] = content.split("(Try Demo)");
      return (
        <>
          {before}
          (
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-oxium-mint link-underline hover:text-oxium-electric"
          >
            Try Demo
          </a>
          )
          {after}
        </>
      );
    }
    return content;
  };

  return (
    <div className={`border-oxium-slate/30 ${isLastItem ? 'border-b-0' : 'border-b'} py-1`}>
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center text-left py-3 focus:outline-none group"
      >
        <h4 className="font-display text-base sm:text-lg md:text-xl text-oxium-white group-hover:text-oxium-electric transition-colors duration-200 font-semibold">{title}</h4>
        {isOpen ? (
          <ChevronUpIcon className="w-6 h-6 text-oxium-electric" />
        ) : (
          <ChevronDownIcon className="w-6 h-6 text-oxium-secondary group-hover:text-oxium-electric transition-colors duration-200" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="pt-2 pb-4"
        >
          <p className="text-oxium-secondary text-base leading-relaxed">{renderContent()}</p>
        </motion.div>
      )}
    </div>
  );
};

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: 'How It Works', href: '/#how-it-works-section' },
    { name: 'Results', href: '/#results-section' },
    { name: 'FAQ', href: '/#faq-section' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut'}}
      className="sticky top-0 z-50"
    >
      <div className="w-full max-w-7xl mx-auto px-5 py-[10px] flex items-center justify-between md:grid md:grid-cols-[auto_1fr_auto] md:justify-between">
        <Link to="/" className="flex items-center group">
          <img
            src={oxiumLogoUrl}
            alt="Oxium.ai Logo"
            className="h-[170px] w-[170px] md:h-[230px] md:w-[230px] transition-transform group-hover:scale-105"
          />
        </Link>
        <nav className="hidden md:flex justify-center items-center gap-x-[30px]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-oxium-secondary text-base link-underline hover:text-oxium-electric transition-colors whitespace-nowrap"
              onClick={(e) => {
                if (link.href.startsWith('/#')) {
                  e.preventDefault();
                  const targetId = link.href.substring(2);
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                  }
                  setMobileMenuOpen(false);
                }
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-end">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex cta-btn px-6 text-base leading-normal font-display"
          >
            START HERE
          </a>
          <div className="md:hidden ml-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-oxium-white focus:outline-none p-2 rounded-md hover:bg-oxium-slate/50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-oxium-slate/95 backdrop-blur-md shadow-xl py-4 absolute top-full left-0 right-0"
        >
          <nav className="flex flex-col items-center gap-y-5 px-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('/#')) {
                    e.preventDefault();
                    const targetId = link.href.substring(2);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                  setMobileMenuOpen(false);
                }}
                className="font-medium text-oxium-secondary text-lg hover:text-oxium-electric transition-colors w-full text-center py-2 rounded-md hover:bg-oxium-surface/50"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

const HeroSection: React.FC = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-4xl mx-auto flex flex-col items-center text-center pt-24 pb-24 px-6"
    >
      <h1 className="font-display text-[42px] sm:text-[56px] md:text-[68px] font-bold mb-4 tracking-normal uppercase bg-clip-text text-transparent bg-iridescent-gradient whitespace-nowrap">
        MEET OXIUM
      </h1>
      <p className="font-display text-[20px] sm:text-[24px] md:text-[28px] font-light text-oxium-secondary max-w-2xl leading-snug md:leading-normal">
        AI THAT TURNS <span className="font-semibold bg-clip-text text-transparent bg-iridescent-gradient">LOST</span> CUSTOMERS <br /> INTO SALES (<span className="font-semibold bg-clip-text text-transparent bg-iridescent-gradient inline-block px-1">5-10x ROI</span>)
      </p>
      <a
        href={calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn mt-12 text-lg px-8"
      >
        TRY FREE DEMO
      </a>
    </motion.section>
  );
};

const AiSkyrocketsSalesSection: React.FC = () => {
  const features = [
    {
      title: "Turn Lost Traffic Into New Revenue",
      description: "Sell more without increasing marketing expenses, and lower the cost of acquiring a new customer.",
    },
    {
      title: "Sell More to Your Current Customers",
      description: "Increase the lifetime value of every single customer, by upselling and cross-selling new products and driving additional purchases.",
    },
    {
      title: "Shorten Sales Cycles",
      description: "Achieve faster, better, and more personal follow-up, that creates more happy customers at a higher conversion rate.",
    }
  ];

  const infographicItems = [
    { name: "Revive", iconUrl: reviveIconUrl, originalIconName: "revive.png" },
    { name: "Upsell", iconUrl: upsellIconUrl, originalIconName: "upsell.png" },
    { name: "Speed", iconUrl: speedIconUrl, originalIconName: "speed.png" },
  ];

  const SIZES = {
    DASHED_CIRCLE_DIAMETER: { mobile: 170, desktop: 210 },
    ICON_CONTAINER: { mobile: 80, desktop: 100 },
    ICON_IMAGE: { mobile: 48, desktop: 64 },
  };

  const getOverallDiagramViewBoxSize = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 640
        ? SIZES.DASHED_CIRCLE_DIAMETER.mobile + SIZES.ICON_CONTAINER.mobile
        : SIZES.DASHED_CIRCLE_DIAMETER.desktop + SIZES.ICON_CONTAINER.desktop;
    }
    return SIZES.DASHED_CIRCLE_DIAMETER.desktop + SIZES.ICON_CONTAINER.desktop;
  };

  const getDashedCircleDiameter = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 640 ? SIZES.DASHED_CIRCLE_DIAMETER.mobile : SIZES.DASHED_CIRCLE_DIAMETER.desktop;
    }
    return SIZES.DASHED_CIRCLE_DIAMETER.desktop;
  };

  const getIconPlacementRadius = () => {
    return getDashedCircleDiameter() / 2;
  };

  const getDiagramCenter = () => {
    return getOverallDiagramViewBoxSize() / 2;
  };

  const getCurrentIconContainerSize = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 640 ? SIZES.ICON_CONTAINER.mobile : SIZES.ICON_CONTAINER.desktop;
    }
    return SIZES.ICON_CONTAINER.desktop;
  };

  const getCurrentIconImageSize = () => {
    if (typeof window !== "undefined") {
        return window.innerWidth < 640 ? SIZES.ICON_IMAGE.mobile : SIZES.ICON_IMAGE.desktop;
    }
    return SIZES.ICON_IMAGE.desktop;
  };

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleFeatureToggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <motion.section
      id="ai-skyrockets-sales-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full max-w-6xl mx-auto py-20 px-6 text-center overflow-hidden md:overflow-visible"
    >
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-oxium-white mb-3 uppercase">
        AI CAN <span className="bg-clip-text text-transparent bg-iridescent-gradient">SKYROCKET</span> YOUR SALES
      </h2>
      <p className="text-lg sm:text-xl text-oxium-secondary max-w-3xl mx-auto mb-16 uppercase">
        WITHOUT CHANGING ANYTHING IN YOUR DAY-TO-DAY OPERATIONS
      </p>
      <div className="md:grid md:grid-cols-2 md:gap-16 items-start">
        <motion.div
          className="relative flex flex-col items-center justify-center mb-12 md:mb-0 md:sticky md:top-32"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            className="relative"
            style={{
              width: `${getOverallDiagramViewBoxSize()}px`,
              height: `${getOverallDiagramViewBoxSize()}px`,
            }}
          >
            <div
              className="absolute border-[2px] border-dashed border-oxium-electric/60 rounded-full animate-pulse-slow"
              style={{
                width: `${getDashedCircleDiameter()}px`,
                height: `${getDashedCircleDiameter()}px`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            {infographicItems.map((item, index) => {
              const angle = -Math.PI / 2 + (index * 2 * Math.PI) / infographicItems.length;
              const placementRadius = getIconPlacementRadius();
              const diagramCenter = getDiagramCenter();
              const iconContainerSize = getCurrentIconContainerSize();
              const x = diagramCenter + placementRadius * Math.cos(angle) - iconContainerSize / 2;
              const y = diagramCenter + placementRadius * Math.sin(angle) - iconContainerSize / 2;
              return (
                <motion.div
                  key={item.name}
                  className="absolute glass-card rounded-full flex flex-col items-center justify-center p-1 shadow-xl border-2 border-oxium-slate"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    width: `${iconContainerSize}px`,
                    height: `${iconContainerSize}px`,
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                >
                  <img
                    src={item.iconUrl}
                    alt={item.name}
                    className="object-contain"
                    style={{
                        width: `${getCurrentIconImageSize()}px`,
                        height: `${getCurrentIconImageSize()}px`,
                    }}
                  />
                  <span className="mt-0.5 text-[11px] sm:text-xs font-semibold text-oxium-white">{item.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-y-1 text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {features.map((feature) => (
            <CollapsibleItem
              key={feature.title}
              title={feature.title}
              content={feature.description}
              isOpen={openIndexes.includes(features.indexOf(feature))}
              toggleOpen={() => handleFeatureToggle(features.indexOf(feature))}
              isLastItem={features.indexOf(feature) === features.length - 1}
            />
          ))}
          <motion.div
            className="mt-8 flex justify-center md:justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: features.length * 0.1 + 0.4, duration: 0.5 }}
          >
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn text-lg px-8 py-3"
            >
              BOOK A DEMO
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const HowItWorksSection: React.FC = () => {
  const stepsData = [
    {
      step: 1,
      iconUrl: aiIconUrl,
      newText: "Your AI is customized to match your style and company values."
    },
    {
      step: 2,
      iconUrl: contactIconUrl,
      newText: "AI reactivates lost customer conversations automatically."
    },
    {
      step: 3,
      iconUrl: acquisitionIconUrl,
      newText: "Reclaim missed opportunities and close more deals."
    }
  ];

  return (
    <motion.section
      id="how-it-works-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="w-full max-w-6xl mx-auto py-16 px-6 text-center"
    >
      <h3 className="font-display text-3xl sm:text-4xl font-bold text-oxium-highlight mb-12 sm:mb-16">
        HERE<span className="text-oxium-electric">'S HOW IT WORKS</span>...
      </h3>
      <div className="grid md:grid-cols-3 gap-10 sm:gap-12 md:gap-16">
        {stepsData.map((stepItem, index) => (
          <motion.div
            key={stepItem.step}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00D1FF] flex items-center justify-center mb-5 sm:mb-6 shadow-lg">
              <span className="font-display font-bold text-oxium-space text-xl sm:text-2xl">{stepItem.step}</span>
            </div>
            <p className="text-oxium-white text-sm sm:text-base font-medium mb-6 sm:mb-8 leading-snug min-h-[3em] sm:min-h-[3.5em]">
              {stepItem.newText}
            </p>
            <div className="mt-auto w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
              <img
                src={stepItem.iconUrl}
                alt={`Step ${stepItem.step} Icon`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
      <a
        href={calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn mt-16 sm:mt-20 text-lg px-8"
      >
        BOOK A DEMO
      </a>
    </motion.section>
  );
};

const ResultsSection: React.FC = () => {
  const results = [
    {
      icon: "📈",
      headline: "Increased Sales Conversion",
      description: "Leverage AI to qualify leads effectively, boosting your sales conversion rates significantly."
    },
    {
      icon: "⚙️",
      headline: "Automated Workflows",
      description: "Streamline your operations from quote to close with intelligent automation, freeing up your team."
    },
    {
      icon: "🤝",
      headline: "Higher Client Retention",
      description: "Enhance client engagement with personalized, timely follow-ups, leading to improved satisfaction and loyalty."
    }
  ];

  return (
    <motion.section
      id="results-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full max-w-6xl mx-auto py-20 px-6 text-center"
    >
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-oxium-white mb-16">
        Key Outcomes We <span className="bg-iridescent-gradient bg-clip-text text-transparent">Deliver</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {results.map((result) => (
          <motion.div
            key={result.headline}
            className="glass-card p-8 rounded-xl flex flex-col items-center text-center group hover:shadow-xl hover:border-oxium-mint transition-all duration-300"
            whileHover={{ y: -5, scale: 1.03, boxShadow: "0 10px 20px rgba(0, 209, 255, 0.2), 0 6px 6px rgba(147, 86, 255, 0.15)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-5xl mb-5 p-4 bg-oxium-slate/50 rounded-full inline-block group-hover:text-oxium-mint transition-colors duration-300">
              {result.icon}
            </div>
            <h3 className="font-display text-2xl text-oxium-electric font-semibold mb-3 group-hover:text-oxium-mint transition-colors duration-300">{result.headline}</h3>
            <p className="text-oxium-secondary text-base">{result.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

/* // Commenting out the entire IncreaseSalesSection component definition
const IncreaseSalesSection: React.FC = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full bg-oxium-slate py-20 px-6 text-center my-16 md:hidden" // This class will be ineffective as the section is removed
    >
      <div className="max-w-3xl mx-auto">
        <h3 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-5xl font-bold text-oxium-white leading-tight mb-8 whitespace-nowrap text-center">
          Increase Sales ≠ Spending More on Marketing
        </h3>
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn text-xl px-10"
        >
          TALK TO AN EXPERT
        </a>
      </div>
    </motion.section>
  );
};
*/

const IndustriesSection: React.FC = () => {
  const industriesData = [
    { name: 'ECOM', iconUrl: '/assets/ecom.png' },
    { name: 'SOLAR', iconUrl: '/assets/solar.png' },
    { name: 'ROOFING', iconUrl: '/assets/roofing.png' },
    { name: 'SIDING', iconUrl: '/assets/siding.png' },
    { name: 'WINDOW REMODELING', iconUrl: '/assets/window.png' },
    { name: 'KITCHEN REMODELING', iconUrl: '/assets/kitchen.png' },
    { name: 'FLOORING', iconUrl: '/assets/flooring.png' },
    { name: 'AUTOMOTIVE', iconUrl: '/assets/car.png' },
    { name: 'TRAVEL', iconUrl: '/assets/vacation.png' },
    { name: 'AND MORE', IconComponent: EllipsisHorizontalIcon },
  ];

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="hidden md:block w-full max-w-6xl mx-auto py-16 px-6 text-center"
    >
      <h3 className="font-display text-3xl sm:text-4xl font-bold text-oxium-white mb-12 whitespace-nowrap">
        INDUSTRIES WE'VE SEEN <span className="bg-iridescent-gradient bg-clip-text text-transparent">REMARKABLE SUCCESS</span> IN...
      </h3>
      <div className="grid grid-cols-5 gap-x-6 gap-y-10 items-start justify-center">
        {industriesData.map(({ name, iconUrl, IconComponent }) => (
          <div key={name} className="flex flex-col items-center">
            {iconUrl ? (
              <img src={iconUrl} alt={name} className="h-12 w-12 mb-3" style={{ filter: 'brightness(0) saturate(100%) invert(71%) sepia(100%) saturate(3471%) hue-rotate(163deg) brightness(102%) contrast(103%)' }} />
            ) : (
              IconComponent && <IconComponent className="h-12 w-12 text-[#00C2FF] mb-3" />
            )}
            <p className="font-display text-xs font-medium text-oxium-white uppercase tracking-wider">{name}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 flex justify-center">
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn text-lg px-8"
        >
          BOOK A DEMO
        </a>
      </div>
    </motion.section>
  );
};

const EnsureAICompanySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const checklistItems = [
    {
      title: "Does the AI sound human?",
      text: "Your bot will have the capability to restart conversations, confirm availability, and book appointments - all without sounding like a robot."
    },
    {
      title: "Is this service 100% Done-for-You?",
      text: "Our expert team will manage the creation of the AI from A-Z, ensuring setup and deployment in under 7 days."
    },
    {
      title: "How much does it cost to setup my bot?",
      text: "We have NO upfront costs - which allows you to run a 100% free demo and only pay once you get real results."
    },
    {
      title: "Can the AI handle multiple messages at once?",
      text: "Yes, your AI will have the ability to respond when a lead sends 2 or more messages in a row, and will book appointments even while you’re off the clock."
    },
    {
      title: "How are appointments scheduled?",
      text: "The AI has the ability to schedule appointments dynamically in the conversation - and not with a booking link, which results in higher conversions. (Try Demo)"
    },
    {
      title: "Is there a built-in Stop Sequence?",
      text: "Our AI is fully compliant and will stop responding when the lead isn’t interested anymore."
    },
    {
      title: "What server will the AI operate off of?",
      text: "Your custom solution will be built on robust Azure servers that provide better uptime and end-to-end encryption, not limited no-code automation tools."
    },
    {
      title: "Will the bot integrate with my day-to-day operations?",
      text: "You have the flexibility to integrate the AI to any calendar/CRM. This ensures a more efficient process without changing day-to-day operations."
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      id="faq-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="w-full bg-oxium-space py-16 sm:py-20 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="font-display text-3xl sm:text-4xl font-bold text-oxium-white mb-3">
          DON'T <span className="bg-iridescent-gradient bg-clip-text text-transparent">LOSE</span> YOUR TRAFFIC...
        </h3>
        {/* <p className="text-lg sm:text-xl text-oxium-secondary mb-10 sm:mb-12">
          Ensure your AI company has the following
        </p> */}
      </div>
      <div className="max-w-3xl mx-auto bg-oxium-surface/50 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-iridescent/30 shadow-xl">
        {checklistItems.map((item, index) => (
          <CollapsibleItem
            key={item.title}
            title={item.title}
            content={item.text}
            isOpen={activeIndex === index}
            toggleOpen={() => handleToggle(index)}
            isLastItem={index === checklistItems.length - 1}
          />
        ))}
      </div>
    </motion.section>
  );
};

// const StartForFreeSection: React.FC = () => { // This section is removed
//   return (
//     <motion.section
//       variants={sectionVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       className="w-full max-w-3xl mx-auto py-16 px-6 text-center start-free-section-texts-mobile-hide"
//     >
//       <h3 className="font-display text-4xl sm:text-5xl font-bold text-oxium-white mb-3">
//         Start for FREE today
//       </h3>
//       <h2 className="font-display text-2xl sm:text-3xl font-medium text-oxium-white mb-10">
//         Only Pay When You See Sales
//       </h2>
//       <a
//         href={calendlyUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="cta-btn text-xl px-10"
//       >
//         TRY IT FREE
//       </a>
//     </motion.section>
//   );
// };

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="w-full bg-oxium-slate/70 backdrop-blur-md py-6 px-6 mt-16 border-t border-iridescent/30"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Top part: Logo and Contact Info */}
        <div className="w-full max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-6 md:mb-8">
          {/* Left Column: Logo */}
          <div className="flex justify-center md:justify-start">
            <Link to="/" className="inline-block">
              <img
                src={oxiumLogoUrl}
                alt="Oxium.ai Logo"
                className="h-[150px] w-[150px] md:h-[180px] md:w-[180px]"
              />
            </Link>
          </div>
          {/* Right Column: Contact Info */}
          <div className="flex flex-col items-center md:items-end space-y-2 text-oxium-white">
            <div className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 mr-2.5 text-oxium-electric" />
              <a href="mailto:hello@oxium.ai" className="hover:text-oxium-electric transition-colors">hello@oxium.ai</a>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2.5 text-oxium-electric" />
              <a href="tel:+16173804224" className="hover:text-oxium-electric transition-colors">+1 617 380 4224</a>
            </div>
          </div>
        </div>

        {/* Bottom part: Copyright and Legal Links - Centered */}
        <div className="text-oxium-white text-sm">
          <p className="mb-2">&copy; {new Date().getFullYear()} Oxium.ai Inc. All Rights Reserved.</p>
          <p>
            <Link to="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-oxium-electric">Terms & Conditions</Link>
            <span className="mx-2">|</span>
            <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-oxium-electric">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

// Layout Component
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-oxium-space text-oxium-white font-body overflow-x-hidden flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// HomePage Content Component
const HomePageContent: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AiSkyrocketsSalesSection />
      <HowItWorksSection />
      <ResultsSection />
      {/* <IncreaseSalesSection /> // Removed invocation */}
      <IndustriesSection />
      <EnsureAICompanySection />
      {/* <StartForFreeSection /> */}
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePageContent /></Layout>} />
        <Route path="/terms-and-conditions" element={<Layout><TermsAndConditionsPage /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicyPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
