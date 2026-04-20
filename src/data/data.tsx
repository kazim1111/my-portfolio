import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import WhatsappIcon from '../components/Icon/WhatsappIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Kazim Abasov Portfolio',
  description: 'This site built only by me :)',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'Citats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Kazim Abasov.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a currently live in Baku,work as <strong className="text-stone-100">Dell Service Engineer</strong>,
        currently working at <strong className="text-stone-100">Muk Computers LLC</strong> helping build a IT
        infrastructure with three years of hands-on-experience in the field.Recognized for diagnosing and
        troubleshoouting issues.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in gym<strong className="text-stone-100"></strong>, watching{' '}
        <strong className="text-stone-100">films</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">places</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ``,
  aboutItems: [
    {label: 'Location', text: 'Baku, Azerbaijan', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Azerbaijani', Icon: FlagIcon},
    {label: 'Interests', text: 'Swimming, Playing games ', Icon: SparklesIcon},
    {label: 'Study', text: 'Azerbaijan State Oil Academy', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Muk Computers, LLC.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Russian',
        level: 10,
      },
      {
        name: 'Azerbaijani',
        level: 10,
      },
      {
        name: 'English',
        level: 7,
      },
    ],
  },
  {
    name: 'Windows Server Administration',
    skills: [
      {
        name: 'Active Directory and group policy',
        level: 9,
      },
      {
        name: 'File Sharing',
        level: 9,
      },
      {
        name: 'Dns and Dhcp servers',
        level: 9,
      },
    ],
  },
  {
    name: 'Full stack development',
    skills: [
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'Html',
        level: 5,
      },
      {
        name: 'CSS',
        level: 4,
      },
    ],
  },
  {
    name: 'Networking ',
    skills: [
      {
        name: 'Routing',
        level: 9,
      },
      {
        name: 'Switching',
        level: 4,
      },
      {
        name: 'Security ',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2016-2020',
    location: 'ADNSU University',
    title: 'Oil and Gas Equipment Engineer',
    content: (
      <p>
        Oil and gas engineering is the design, implementation and operation of technical processes focused on
        exploration and production of oil and gas.
      </p>
    ),
  },
  {
    date: '2020-2022',
    location: 'Master Business Academy, ADNSU',
    title: 'Electron Government',
    content: (
      <p>
        {' '}
        Focusing on the use of digital technologies to improve public administration and government services.Developed
        practical skills in analyzing administrative processes and applying technology solutions.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: '08/2024 - Present',
    location: 'Dasp Service(Muk Computers)',
    title: 'Service Engineer',
    content: (
      <p>
        Diagnosed hardware and software issues for client systems. • Installed and configured computer systems for
        optimal performance. • Provided technical support for customers on site or remotely via phone or email. •
        Installed, configured and commissioned new customer equipment according to specifications.
      </p>
    ),
  },
  {
    date: '02/2024 - 05/2024',
    location: 'ADNSU',
    title: 'Helpdesk Support Engineer',
    content: (
      <p>
        Provided technical support to users, resolving hardware and software issues promptly. • Managed ticketing
        system, tracking user requests and ensuring timely follow-up. • Maintained inventory of IT equipment, ensuring
        availability of necessary resources for support tasks.
      </p>
    ),
  },
  {
    date: '2023 - 2023',
    location: 'Azimut MMC',
    title: 'IT Salesperson',
    content: (
      <p>
        Showcased product features and benefits during client presentations to enhance understanding and engagement. •
        Cultivated strong client relationships to drive satisfaction and increase retention rates. • Analyzed industry
        trends to inform strategies and maintain competitive edge in products and services.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Leonardo DiCaprio',
      text: 'If you can do what you do best and be happy, you are further along in life than most people.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'George Lucas',
      text: 'Be persistent and never give up hope).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'John D. Rockefeller',
      text: 'Don’t be afraid to give up the good to go for the great',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Your feedback is important to me. Feel free to contact me:).',
  items: [
    {
      type: ContactType.Email,
      text: 'abasov.kazim123@gmail.com',
      href: 'mailto:abasov.kazim123@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Baku, Azerbaijan',
      href: 'https://www.google.ca/maps/place/Baku/@40.3944755,49.6901505,11z/data=!3m1!4b1!4m6!3m5!1s0x40307d6bd6211cf9:0x343f6b5e7ae56c6b!8m2!3d40.4092617!4d49.8670924!16zL20vMDFnZjU?entry=ttu&g_ep=EgoyMDI2MDQxNC4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      type: ContactType.Instagram,
      text: '@kazim.abasov',
      href: 'https://www.instagram.com/kazim.abasov/',
    },
    {
      type: ContactType.Github,
      text: 'kazim1111',
      href: 'https://github.com/kazim1111',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/kazim1111'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kazim-abasov-72336b213/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/kazim.abasov/'},
  {label: 'Whatsapp', Icon: WhatsappIcon, href: 'https://web.whatsapp.com/ '},
];
