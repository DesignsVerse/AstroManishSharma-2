// Define TypeScript interfaces
interface ContentSection {
  header: {
    home: string;
    services: string;
    blog: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    ctaSecondary: string;
  };
  services: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    points: string[];
  };
  footer: {
    about: string;
    quickLinks: string;
    contact: string;
    email: string;
    phone: string;
    address: string;
    rights: string;
  };
}

interface Content {
  en: ContentSection;
  hi: ContentSection;
}

export const content: Content = {
  en: {
    header: {
      home: 'Home',
      services: 'Puja Services',
      blog: 'Blog',
      about: 'About Pandit Manish Sharma',
      contact: 'Contact',
    },
    hero: {
      title: 'Maa Baglamukhi Puja with Pandit Manish Sharma',
      subtitle: 'Best Maa Baglamukhi Pandit',
      description: 'Experience the divine blessings of Maa Baglamukhi Puja at Maa Baglamukhi Mandir with Pandit Manish Sharma, the best Maa Baglamukhi Pandit, offering authentic Maa Baglamukhi Pujan for spiritual growth and protection.',
      cta: 'Book Your Puja',
      ctaSecondary: 'Learn More',
    },
    services: {
      title: 'Maa Baglamukhi Puja Services',
      subtitle: 'Authentic Spiritual Guidance by Pandit Manish Sharma',
    },
    about: {
      title: 'About Pandit Manish Sharma',
      subtitle: 'Best Maa Baglamukhi Pandit at Maa Baglamukhi Mandir',
      description: 'With over 25 years of experience, Pandit Manish Sharma, the best Maa Baglamukhi Pandit, has guided thousands of devotees through authentic Maa Baglamukhi Puja and Pujan at Maa Baglamukhi Mandir, offering spiritual solutions for life’s challenges.',
      points: [
        '25+ Years of Spiritual Expertise',
        'Authentic Maa Baglamukhi Puja',
        'Thousands of Blessed Devotees',
        'Personalized Spiritual Guidance',
      ],
    },
    footer: {
      about: 'Providing authentic Maa Baglamukhi Puja and spiritual guidance for over 25 years at Maa Baglamukhi Mandir.',
      quickLinks: 'Quick Links',
      contact: 'Contact Info',
      email: 'info@bestmaabaglamukhipandit.com',
      phone: '+91 9876543210', // Update with actual phone number
      address: 'Maa Baglamukhi Mandir, Your City, Your State, India', // Update with actual address
      rights: 'All rights reserved.',
    },
  },
  hi: {
    header: {
      home: 'होम',
      services: 'पूजा सेवाएँ',
      blog: 'ब्लॉग',
      about: 'पंडित मनीष शर्मा के बारे में',
      contact: 'संपर्क',
    },
    hero: {
      title: 'पंडित मनीष शर्मा के साथ माँ बगलामुखी पूजा',
      subtitle: 'सर्वश्रेष्ठ माँ बगलामुखी पंडित',
      description: 'माँ बगलामुखी मंदिर में पंडित मनीष शर्मा, सर्वश्रेष्ठ माँ बगलामुखी पंडित, के साथ माँ बगलामुखी पूजा के दिव्य आशीर्वाद का अनुभव करें, जो आध्यात्मिक विकास और सुरक्षा के लिए प्रामाणिक माँ बगलामुखी पूजन प्रदान करते हैं।',
      cta: 'अपनी पूजा बुक करें',
      ctaSecondary: 'और जानें',
    },
    services: {
      title: 'माँ बगलामुखी पूजा सेवाएँ',
      subtitle: 'पंडित मनीष शर्मा द्वारा प्रामाणिक आध्यात्मिक मार्गदर्शन',
    },
    about: {
      title: 'पंडित मनीष शर्मा के बारे में',
      subtitle: 'माँ बगलामुखी मंदिर में सर्वश्रेष्ठ माँ बगलामुखी पंडित',
      description: '25 से अधिक वर्षों के अनुभव के साथ, पंडित मनीष शर्मा, सर्वश्रेष्ठ माँ बगलामुखी पंडित, ने माँ बगलामुखी मंदिर में प्रामाणिक माँ बगलामुखी पूजा और पूजन के माध्यम से हजारों भक्तों का मार्गदर्शन किया है, जो जीवन की चुनौतियों के लिए आध्यात्मिक समाधान प्रदान करते हैं।',
      points: [
        '25+ वर्षों का आध्यात्मिक अनुभव',
        'प्रामाणिक माँ बगलामुखी पूजा',
        'हजारों आशीर्वाद प्राप्त भक्त',
        'वैयक्तिक आध्यात्मिक मार्गदर्शन',
      ],
    },
    footer: {
      about: 'माँ बगलामुखी मंदिर में 25 वर्षों से अधिक समय से प्रामाणिक माँ बगलामुखी पूजा और आध्यात्मिक मार्गदर्शन प्रदान कर रहे हैं।',
      quickLinks: 'त्वरित लिंक',
      contact: 'संपर्क जानकारी',
      email: 'info@bestmaabaglamukhipandit.com',
      phone: '+91 9876543210', // Update with actual phone number
      address: 'माँ बगलामुखी मंदिर, आपका शहर, आपका राज्य, भारत', // Update with actual address
      rights: 'सभी अधिकार सुरक्षित।',
    },
  },
};