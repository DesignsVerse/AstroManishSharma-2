export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  category: string;
  content: Array<{
    heading: string;
    description: string;
  }>;
}

export interface BlogData {
  title: string;
  subtitle: string;
  posts: BlogPost[];
}

export const blogDataEn: BlogData = {
  title: 'Maa Baglamukhi Insights',
  subtitle: 'Divine Wisdom and Guidance from Pandit Manish Sharma',
  posts: [
    {
      title: 'The Power of Maa Baglamukhi Puja: Unlocking Divine Protection',
      excerpt: 'Discover the transformative power of Maa Baglamukhi Puja, led by Pandit Manish Sharma, the Best Maa Baglamukhi Pandit, to overcome obstacles and gain divine protection at Maa Baglamukhi Mandir.',
      date: 'January 10, 2025',
      image: '/images/maa-baglamukhi-puja-1.jpg',
      slug: 'power-of-maa-baglamukhi-puja',
      category: 'puja',
      content: [
        {
          heading: 'Introduction to Maa Baglamukhi Puja',
          description: 'Maa Baglamukhi Puja is a powerful Vedic ritual dedicated to Goddess Baglamukhi, known for her ability to grant protection, victory, and spiritual strength. Performed at Maa Baglamukhi Mandir by Pandit Manish Sharma, this sacred puja helps devotees overcome challenges and negative energies.'
        },
        {
          heading: 'Benefits of Maa Baglamukhi Puja',
          description: 'This divine ritual is renowned for neutralizing adversaries, resolving conflicts, and fostering inner peace. Pandit Manish Sharma, the Best Maa Baglamukhi Pandit, tailors each puja to address specific needs, ensuring spiritual alignment and divine blessings.'
        },
        {
          heading: 'How to Prepare for the Puja',
          description: 'To participate in Maa Baglamukhi Puja, devotees should approach with a pure heart, provide their name and specific intentions, and follow Pandit Manish Sharma’s guidance. The puja involves chanting mantras, offering yellow flowers, and performing sacred rituals at Maa Baglamukhi Mandir.'
        },
        {
          heading: 'Why Choose Pandit Manish Sharma',
          description: 'With over 25 years of experience, Pandit Manish Sharma is the Best Maa Baglamukhi Pandit, known for his authentic and powerful pujas. His deep spiritual connection with Maa Baglamukhi ensures transformative results for devotees seeking protection and success.'
        }
      ]
    },
    {
      title: 'Exploring Maa Baglamukhi Mandir: A Sacred Haven',
      excerpt: 'Learn about the spiritual significance of Maa Baglamukhi Mandir, where Pandit Manish Sharma conducts divine Maa Baglamukhi Pujan to empower devotees with strength and clarity.',
      date: 'December 20, 2024',
      image: '/images/maa-baglamukhi-mandir.jpg',
      slug: 'exploring-maa-baglamukhi-mandir',
      category: 'mandir',
      content: [
        {
          heading: 'The Legacy of Maa Baglamukhi Mandir',
          description: 'Maa Baglamukhi Mandir is a revered spiritual center dedicated to Goddess Baglamukhi, the deity of protection and victory. Located in [City, State], this sacred temple attracts thousands of devotees seeking divine intervention through Maa Baglamukhi Puja and Pujan.'
        },
        {
          heading: 'Spiritual Ambiance of the Mandir',
          description: 'The temple’s serene environment, adorned with vibrant yellow decor, creates a powerful atmosphere for spiritual practices. Pandit Manish Sharma, the Maa Baglamukhi Pandit, enhances this ambiance with meticulously performed rituals.'
        },
        {
          heading: 'Role of Pandit Manish Sharma',
          description: 'As the Best Maa Baglamukhi Pandit, Pandit Manish Sharma leads sacred ceremonies at the Mandir, guiding devotees through personalized pujas. His expertise ensures each ritual aligns with Vedic traditions for maximum spiritual impact.'
        },
        {
          heading: 'Visiting the Mandir',
          description: 'Devotees can visit Maa Baglamukhi Mandir to participate in pujas or seek spiritual consultations. Contact Pandit Manish Sharma to schedule a visit or book an online Maa Baglamukhi Pujan for convenience.'
        }
      ]
    },
    {
      title: 'How Maa Baglamukhi Pujan Transforms Lives',
      excerpt: 'Understand the profound impact of Maa Baglamukhi Pujan, guided by Pandit Manish Sharma, in achieving spiritual harmony and overcoming life’s challenges at Maa Baglamukhi Mandir.',
      date: 'November 25, 2024',
      image: '/images/maa-baglamukhi-pujan.jpg',
      slug: 'maa-baglamukhi-pujan-transforms-lives',
      category: 'pujan',
      content: [
        {
          heading: 'What is Maa Baglamukhi Pujan?',
          description: 'Maa Baglamukhi Pujan is an intricate Vedic ritual dedicated to Goddess Baglamukhi, focusing on mantra chanting and offerings to invoke her blessings. Performed by Pandit Manish Sharma, this ritual is known for its transformative power.'
        },
        {
          heading: 'Spiritual Benefits of Pujan',
          description: 'The Pujan helps devotees overcome obstacles, defeat negative energies, and achieve mental clarity. Pandit Manish Sharma, the Best Maa Baglamukhi Pandit, customizes each session to address individual concerns, ensuring spiritual growth.'
        },
        {
          heading: 'Real-Life Transformations',
          description: 'Devotees who have participated in Maa Baglamukhi Pujan at Maa Baglamukhi Mandir report profound changes, including resolved conflicts, enhanced confidence, and spiritual awakening, thanks to Pandit Manish Sharma’s guidance.'
        },
        {
          heading: 'Booking Your Pujan',
          description: 'To experience the transformative power of Maa Baglamukhi Pujan, contact Pandit Manish Sharma to book a session. Both in-person and online options are available, making divine blessings accessible to all.'
        }
      ]
    }
  ]
};