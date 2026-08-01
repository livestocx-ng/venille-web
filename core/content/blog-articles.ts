export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  paragraphs: string[];
  externalLink?: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'because-international-summer-impact-competition-prize',
    title: 'Because International Summer Impact Competition Prize',
    excerpt: 'Venille recognized for creating sustainable impact through innovative menstrual health solutions.',
    category: 'Award',
    readTime: '4 min read',
    publishedAt: '2023-08-15',
    paragraphs: [
      'Venille has been recognized by Because International through the Summer Impact Competition for our work delivering sustainable menstrual health solutions to underserved communities.',
      'The award celebrates innovations that create measurable social and environmental impact. Venille\'s eco-friendly sanitary pads address both period poverty and plastic pollution — two interconnected crises affecting women and the planet.',
      'This recognition fuels our commitment to scaling affordable, chemical-free menstrual products while expanding community outreach across Nigeria.',
    ],
    externalLink: 'https://becauseinternational.org/blogs/stories/venille-because-accelerator',
  },
  {
    slug: 'destinationzero-challenge-winner',
    title: '#DestinationZero Challenge Winner',
    excerpt: 'Venille wins recognition for driving climate-positive menstrual health innovation.',
    category: 'Award',
    readTime: '4 min read',
    publishedAt: '2023-09-01',
    paragraphs: [
      'Venille was named a winner of the #DestinationZero Challenge, a competition focused on climate-positive innovations that move communities toward zero waste and zero emissions.',
      'Conventional sanitary pads contain up to 90% plastic and take centuries to decompose. Venille\'s environmentally friendly pads offer a practical alternative that reduces landfill and ocean pollution.',
      'Winning this challenge validates our approach: menstrual health products can be both high-quality and planet-positive.',
    ],
    externalLink: 'https://www.britishcouncil.org/climate-connection/be-inspired/destination-zero/Esther',
  },
  {
    slug: '2022-kukah-prize-young-innovators-award',
    title: '2022 Kukah Prize Young Innovators Award',
    excerpt: 'Honoured for youth-led innovation in sustainable menstrual hygiene.',
    category: 'Award',
    readTime: '5 min read',
    publishedAt: '2022-12-10',
    paragraphs: [
      'Venille received the 2022 Kukah Prize Young Innovators Award, honouring young Nigerians creating solutions to pressing social challenges.',
      'The award recognized our founders\' dedication to tackling period poverty through affordable, eco-friendly sanitary pads and community education programmes.',
      'We remain committed to the values the Kukah Prize represents: integrity, innovation, and service to community.',
    ],
    externalLink: 'https://nannews.ng/2022/09/01/2022-kukah-young-innovators-award-teen-ceo-wins-n2m-grand-prize/',
  },
  {
    slug: 'anzisha-fellowship-2023',
    title: 'Anzisha Fellowship 2023',
    excerpt: 'Venille joins Africa\'s premier fellowship for young entrepreneurs creating lasting change.',
    category: 'Fellowship',
    readTime: '4 min read',
    publishedAt: '2023-06-20',
    paragraphs: [
      'Venille was selected for the Anzisha Fellowship 2023, Africa\'s premier programme for very young entrepreneurs building scalable ventures.',
      'The fellowship provides mentorship, network access, and resources to help Venille expand its reach — engaging wholesale and retail outlets, building our online presence, and collaborating with logistics partners.',
      'Anzisha\'s support strengthens our mission to make sustainable menstrual health accessible to every girl and woman who needs it.',
    ],
    externalLink: 'https://anzisha.org/fellows/esther-olalude/',
  },
  // {
  //   slug: 'youth4climate-award',
  //   title: 'Venille Honored with the Youth4Climate Award: A Testament to Sustainable Innovation',
  //   excerpt: 'Venille is proud to announce its recognition in the 2024 Youth4Climate Call for Solutions for Sustainable Consumption and Production.',
  //   category: 'Award',
  //   readTime: '4 min read',
  //   publishedAt: '2023-11-05',
  //   paragraphs: [
  //     'Venille is proud to announce its recognition in the 2024 Youth4Climate Call for Solutions for Sustainable Consumption and Production. This prestigious award highlights our mission to tackle period poverty and plastic pollution with eco-friendly sanitary pads made from upcycled agricultural waste. This milestone demonstrates the potential of youth-led innovation in addressing global challenges.',
  //     'Despite being invited to the One Planet Network Forum in Brazil and the Youth4Climate Flagship Event in Turin, unforeseen circumstances prevented my attendance at both events. However, the honor itself underscores the importance and relevance of Venille\'s work. Through this recognition, we are inspired to continue creating sustainable solutions that empower underserved communities and protect our environment.',
  //     'This award not only reflects the progress Venille has made but also serves as motivation to scale our operations and deepen our impact. Our eco-friendly sanitary pads have already improved the lives of women and girls, allowing them to manage their periods with dignity while reducing plastic waste. By addressing critical issues such as access to menstrual hygiene and environmental sustainability, Venille stands at the forefront of innovation for social good.',
  //     'Being part of the global Youth4Climate network is an opportunity to amplify Venille\'s mission. Although unable to participate in person, the connection to other young changemakers and thought leaders inspires us to push forward with greater determination. This journey is a reminder that impactful solutions are built through resilience, creativity, and the collective power of community.',
  //     'As we celebrate this milestone, we express heartfelt gratitude to the Youth4Climate team, our supporters, and the communities we serve. This recognition reaffirms our belief in the potential of young entrepreneurs to drive meaningful change. Venille will continue to innovate and advocate for sustainable practices, ensuring a future where everyone can thrive in harmony with the planet.',
  //     'Thank you for walking with us on this journey. Together, we can make a difference! Stay tuned as Venille embarks on new initiatives to empower, innovate, and inspire.',
  //   ],
  // },
  {
    slug: 'empowering-women-in-jebu-miango',
    title: 'Empowering Women in Jebu Miango: Venille\'s Outreach for World Health Day',
    excerpt: 'Community outreach bringing menstrual health education and eco-friendly pads to women in Jebu Miango.',
    category: 'Community',
    readTime: '6 min read',
    publishedAt: '2024-04-07',
    paragraphs: [
      'On World Health Day, the Venille team visited Jebu Miango to deliver menstrual health education, hygiene workshops, and distributions of our eco-friendly pads.',
      'Many women in rural communities lack access to affordable, safe menstrual products. Our outreach provided practical knowledge about hygiene, health, and sustainable product choices.',
      'Community programmes like this are central to Venille\'s mission: we don\'t just sell pads — we build dignity, awareness, and long-term health outcomes for women and girls.',
    ],
  },
  {
    slug: 'undp-selection',
    title: 'UNDP Selection',
    excerpt: 'Venille selected by the United Nations Development Programme for sustainable development impact.',
    category: 'Partnership',
    readTime: '4 min read',
    publishedAt: '2023-05-12',
    paragraphs: [
      'Venille was selected by the United Nations Development Programme (UNDP) in recognition of our contribution to sustainable development goals around health, gender equality, and responsible consumption.',
      'UNDP\'s support connects Venille to a global network of development practitioners and resources, helping us scale impact across underserved populations.',
      'We are proud to partner with UNDP in advancing menstrual hygiene as a human right and environmental imperative.',
    ],
  },
  {
    slug: '776-fellowship',
    title: 'Venille Awarded $100,000 Fellowship by 776 Foundation to Build a Future Where Periods Don’t Pollute',
    excerpt: 'We are proud to announce that Venille Ltd has been selected for the 776 Foundation Fellowship, backed by Alexis Ohanian, co-founder of Reddit, and awarded a $100,000 grant.',
    category: 'Fellowship',
    readTime: '4 min read',
    publishedAt: '2023-03-18',
    paragraphs: [
      'We are proud to announce that Venille Ltd has been selected for the 776 Foundation Fellowship, backed by Alexis Ohanian, the co-founder of Reddit, and awarded a $100,000 grant to fuel our mission. Over the next two years, our founder, Esther Oluwabunmi Olalude, will be working full-time to scale our impact which is transforming how menstrual health, climate action, and dignity intersect across communities in Nigeria and beyond. https://www.776.org/fellows',
      'The 776 Foundation Fellowship recognizes the power of bold, youth-led solutions, especially those emerging from the Global South. With their support, we are accelerating our efforts to disrupt the cycle of period poverty and plastic pollution through community-rooted innovation, relentless creativity, and unapologetic purpose.',
      'This moment is not just a milestone. It is momentum. It is the wind behind our wings as we build a sustainable, equitable, and proudly African solution to a global challenge.',
      'Thank you to the 776 Foundation for believing in our vision. The future we are building is not just greener, it is fairer, stronger, and led by girls who rise.',
    ],
  },
  {
    slug: 'nysc-pageantry-sponsorship',
    title: 'NYSC Pageantry Sponsorship',
    excerpt: 'Venille sponsors NYSC pageantry to promote menstrual health awareness among young women.',
    category: 'Community',
    readTime: '4 min read',
    publishedAt: '2024-01-22',
    paragraphs: [
      'Venille proudly sponsored the NYSC Pageantry, using the platform to raise awareness about menstrual health, hygiene, and environmental sustainability among Nigeria\'s youth corps members.',
      'The sponsorship included pad distributions, health talks, and conversations about breaking stigma around menstruation — empowering young women to lead change in their communities.',
      'Engaging youth through cultural platforms helps Venille reach audiences that traditional health campaigns often miss.',
    ],
  },
  {
    slug: 'venille-national-conversation-menstrual-health',
    title: 'Venille Joins National Conversation on Menstrual Health and Women\'s Empowerment',
    excerpt: 'Contributing to Nigeria\'s national dialogue on period poverty, hygiene access, and women\'s empowerment.',
    category: 'Impact',
    readTime: '5 min read',
    publishedAt: '2024-05-28',
    paragraphs: [
      'Venille joined Nigeria\'s national conversation on menstrual health and women\'s empowerment, contributing practical insights from years of community work and product innovation.',
      'The discussion highlighted staggering statistics: billions worldwide lack basic sanitation, and nearly half of people in developing countries like Nigeria lack adequate handwashing facilities — making period hygiene even harder for women and girls.',
      'Venille advocates for policy action, private-sector partnership, and grassroots education to ensure every woman can manage her period with dignity, comfort, and environmental responsibility.',
    ],
  },
];

export const getBlogArticle = (slug: string) =>
  blogArticles.find((article) => article.slug === slug);
