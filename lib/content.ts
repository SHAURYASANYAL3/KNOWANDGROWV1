export const focusAreas = [
  {
    title: 'Mental Health Awareness',
    description: 'Practical support, safe spaces, and emotional literacy for young people navigating pressure and change.',
    accent: 'from-gold/70 to-mint/40'
  },
  {
    title: 'Digital Safety',
    description: 'Clear guidance on online risks, healthy boundaries, and safe digital habits for modern youth.',
    accent: 'from-mint/50 via-slate-700 to-slate-900'
  },
  {
    title: 'Drug Abuse Prevention',
    description: 'Evidence-based education and supportive conversations that help young people make safer choices.',
    accent: 'from-slate-700 to-gold/60'
  },
  {
    title: 'Sex Education Awareness',
    description: 'Compassionate learning about consent, healthy relationships, and body confidence.',
    accent: 'from-slate-900 via-brand-700 to-gold/30'
  },
  {
    title: 'Youth Vulnerability Prevention',
    description: 'Community-first strategies that spot risk early and nurture stronger social support systems.',
    accent: 'from-brand-700 to-mint/60'
  },
  {
    title: 'Community Education',
    description: 'Workshops, partnerships, and campaigns that build knowledge and trust across neighborhoods.',
    accent: 'from-gold/70 via-mint/50 to-slate-800'
  }
];

export const siteStats = [
  {
    label: 'Young voices supported',
    value: '12k+',
    detail: 'Peer-led workshops and listening sessions across cities.'
  },
  {
    label: 'Community partnerships',
    value: '115+',
    detail: 'Collaborations with schools, NGOs, and trusted mentors.'
  },
  {
    label: 'Impact sessions',
    value: '92+',
    detail: 'Focused training programs delivered with compassion.'
  },
  {
    label: 'Volunteer mentors',
    value: '60+',
    detail: 'Guides, counselors, and youth ambassadors in action.'
  }
];

export const testimonials = [
  {
    name: 'Aanya',
    role: 'Program participant',
    quote: 'KNOW & GROW helped me feel seen and confident in choosing support that felt right for me.',
    accent: 'from-gold/50 to-mint/20'
  },
  {
    name: 'Riya',
    role: 'Youth volunteer',
    quote: 'The training was honest, hopeful, and grounded in real stories I could relate to.',
    accent: 'from-mint/40 to-slate-800'
  },
  {
    name: 'Samir',
    role: 'School partner',
    quote: 'Our students started conversations that were respectful, safe, and easy to continue at home.',
    accent: 'from-slate-900 to-gold/40'
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
    category: 'Insights'
  },
  {
    title: 'A practical guide to digital safety',
    summary: 'Simple habits and respectful boundaries for youths navigating social media, chat apps, and online spaces.',
    category: 'Guidance'
  },
  {
    title: 'Creating safer conversations around substance use',
    summary: 'Tools for adults and peers to talk about drug awareness without stigma or shame.',
    category: 'Education'
  }
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
    description: 'I\'m a member of social services, passionate to educate young minds and secure better futures in the society for all, I believe everyone will grow up to be better citizens if taught young.',
    image: '/pic/member_pics/3.jpg'
  },
  ...Array.from({ length: 12 }).map((_, i) => ({
    name: `Team Member ${i + 4}`,
    role: 'Volunteer',
    description: 'Dedicated to spreading awareness and supporting our community through youth-led initiatives and empathetic education.',
    image: ''
  }))
];
