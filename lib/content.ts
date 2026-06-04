import { Heart, Shield, AlertTriangle, MessageCircle, Users, BookOpen } from 'lucide-react';
import type { ComponentType } from 'react';

interface FocusArea {
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
}

export const focusAreas: FocusArea[] = [
  {
    title: 'Mental Health Awareness',
    description: 'Practical support, safe spaces, and emotional literacy for young people navigating pressure and change.',
    icon: '🧠',
    color: 'sage',
    href: '/mental-health'
  },
  {
    title: 'Digital Safety',
    description: 'Clear guidance on online risks, healthy boundaries, and safe digital habits for modern youth.',
    icon: '🛡️',
    color: 'navy',
    href: '/digital-safety'
  },
  {
    title: 'Drug Abuse Prevention',
    description: 'Evidence-based education and supportive conversations that help young people make safer choices.',
    icon: '⚠️',
    color: 'accent',
    href: '/drug-awareness'
  },
  {
    title: 'Sex Education Awareness',
    description: 'Compassionate learning about consent, healthy relationships, and body confidence.',
    icon: '💬',
    color: 'peach',
    href: '/focus-areas'
  },
  {
    title: 'Youth Vulnerability Prevention',
    description: 'Community-first strategies that spot risk early and nurture stronger social support systems.',
    icon: '🤝',
    color: 'gold',
    href: '/focus-areas'
  },
  {
    title: 'Community Education',
    description: 'Workshops, partnerships, and campaigns that build knowledge and trust across neighborhoods.',
    icon: '🌱',
    color: 'sage',
    href: '/focus-areas'
  }
];

export const siteStats = [
  {
    label: 'Young voices supported',
    value: '12,000',
    numericValue: 12000,
    suffix: '+',
    detail: 'Peer-led workshops and listening sessions across cities.',
    icon: '💛'
  },
  {
    label: 'Community partnerships',
    value: '115',
    numericValue: 115,
    suffix: '+',
    detail: 'Collaborations with schools, NGOs, and trusted mentors.',
    icon: '🤝'
  },
  {
    label: 'Impact sessions',
    value: '92',
    numericValue: 92,
    suffix: '+',
    detail: 'Focused training programs delivered with compassion.',
    icon: '📚'
  },
  {
    label: 'Volunteer mentors',
    value: '60',
    numericValue: 60,
    suffix: '+',
    detail: 'Guides, counselors, and youth ambassadors in action.',
    icon: '🌟'
  }
];

export const testimonials = [
  {
    name: 'Aanya',
    role: 'Program participant',
    quote: 'KNOW & GROW helped me feel seen and confident in choosing support that felt right for me.',
    initial: 'A',
    color: 'accent'
  },
  {
    name: 'Riya',
    role: 'Youth volunteer',
    quote: 'The training was honest, hopeful, and grounded in real stories I could relate to.',
    initial: 'R',
    color: 'sage'
  },
  {
    name: 'Samir',
    role: 'School partner',
    quote: 'Our students started conversations that were respectful, safe, and easy to continue at home.',
    initial: 'S',
    color: 'gold'
  }
];

export const faqItems = [
  {
    question: 'How can I get involved as a volunteer?',
    answer: 'You can join our local mentorship programs, support community workshops, or help with awareness campaigns that reach young people where they are.'
  },
  {
    question: 'Do you offer support for families and schools?',
    answer: 'Yes. We partner with parents, educators, and community leaders to create resources that are practical, respectful, and easy to share.'
  },
  {
    question: 'Is the content age-appropriate and non-judgmental?',
    answer: 'Absolutely. Every program is designed to be supportive, inclusive, and grounded in wellbeing rather than fear.'
  },
  {
    question: 'Can I access emergency resources right away?',
    answer: 'Our emergency help page has immediate guidance and trusted support channels for urgent situations.'
  }
];

export const blogPosts = [
  {
    title: 'Building awareness with kindness',
    summary: 'How compassionate education helps young people feel safer, more confident, and better connected in their communities.',
    category: 'Insights',
    readTime: '5 min read',
    color: 'accent'
  },
  {
    title: 'A practical guide to digital safety',
    summary: 'Simple habits and respectful boundaries for youths navigating social media, chat apps, and online spaces.',
    category: 'Guidance',
    readTime: '4 min read',
    color: 'sage'
  },
  {
    title: 'Creating safer conversations around substance use',
    summary: 'Tools for adults and peers to talk about drug awareness without stigma or shame.',
    category: 'Education',
    readTime: '6 min read',
    color: 'navy'
  }
];

export const trustSignals = [
  'Youth-led programs since 2024',
  'Partnered with 115+ schools',
  'Privacy-first approach',
  'Evidence-based curriculum'
];

export const members = [
  {
    name: 'Member 1',
    role: 'Social Services Member',
    description: 'I am a member of Social Services, a group working for social awareness and positive change. We spread awareness about sex education and mental health to help build a better informed society. I am passionate about educating and supporting people in our society.',
    image: '/pic/member_pics/1.jpg'
  },
  {
    name: 'Member 2',
    role: 'Social Services Member',
    description: 'I’m part of a youth-driven social service initiative that help children stay informed and help parents build healthier families.',
    image: '/pic/member_pics/2.jpg'
  },
  {
    name: 'Member 3',
    role: 'Social Services Member',
    description: "I'm a member of social services, passionate to educate young minds and secure better futures in the society for all, I believe everyone will grow up to be better citizens if taught young.",
    image: '/pic/member_pics/3.jpg'
  },
  ...Array.from({ length: 12 }).map((_, i) => ({
    name: `Team Member ${i + 4}`,
    role: 'Volunteer',
    description: 'Dedicated to spreading awareness and supporting our community through youth-led initiatives and empathetic education.',
    image: ''
  }))
];
