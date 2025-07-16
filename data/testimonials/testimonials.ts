export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export interface TestimonialsData {
  title: string;
  subtitle: string;
  items: Testimonial[];
}

export interface Testimonials {
  en: TestimonialsData;
  hi: TestimonialsData;
}

export const testimonials: Testimonials = {
  en: {
    title: 'What Devotees Say About Maa Baglamukhi Puja',
    subtitle: 'Real Experiences from Maa Baglamukhi Mandir',
    items: [
      {
        name: 'Sunita Verma',
        text: 'The Maa Baglamukhi Puja conducted by Pandit Manish Sharma at Maa Baglamukhi Mandir was a life-changing experience. His expertise as the Best Maa Baglamukhi Pandit helped me overcome personal obstacles and find inner peace.',
        rating: 5,
      },
      {
        name: 'Amit Singh',
        text: 'Participating in the Maa Baglamukhi Pujan with Pandit Manish Sharma brought clarity and strength to my life. The divine atmosphere at Maa Baglamukhi Mandir and his guidance made all the difference.',
        rating: 5,
      },
      {
        name: 'Neha Gupta',
        text: 'Pandit Manish Sharma’s spiritual consultation was transformative. His deep knowledge as the Best Maa Baglamukhi Pandit helped me navigate challenges with confidence, thanks to the blessings of Maa Baglamukhi.',
        rating: 5,
      },
      {
        name: 'Vikram Joshi',
        text: 'The Best Maa Baglamukhi Puja led by Pandit Manish Sharma at Maa Baglamukhi Mandir resolved my professional conflicts. His authentic rituals and personalized approach were truly remarkable.',
        rating: 5,
      },
      {
        name: 'Ritu Mehra',
        text: 'I booked an online Maa Baglamukhi Pujan with Pandit Manish Sharma, and the experience was as powerful as an in-person ceremony. His expertise as Maa Baglamukhi Pandit brought divine blessings into my life.',
        rating: 5,
      },
    ],
  },
  hi: {
    title: 'माँ बगलामुखी पूजा के बारे में भक्त क्या कहते हैं',
    subtitle: 'माँ बगलामुखी मंदिर से वास्तविक अनुभव',
    items: [
      {
        name: 'सुनिता वर्मा',
        text: 'माँ बगलामुखी मंदिर में पंडित मनीष शर्मा द्वारा आयोजित माँ बगलामुखी पूजा एक जीवन बदलने वाला अनुभव था। सर्वश्रेष्ठ माँ बगलामुखी पंडित के रूप में उनकी विशेषज्ञता ने मुझे व्यक्तिगत बाधाओं को दूर करने और आंतरिक शांति पाने में मदद की।',
        rating: 5,
      },
      {
        name: 'अमित सिंह',
        text: 'पंडित मनीष शर्मा के साथ माँ बगलामुखी पूजन में भाग लेने से मेरे जीवन में स्पष्टता और शक्ति आई। माँ बगलामुखी मंदिर का दिव्य वातावरण और उनका मार्गदर्शन अविश्वसनीय था।',
        rating: 5,
      },
      {
        name: 'नेहा गुप्ता',
        text: 'पंडित मनीष शर्मा का आध्यात्मिक परामर्श परिवर्तनकारी था। सर्वश्रेष्ठ माँ बगलामुखी पंडित के रूप में उनकी गहरी जानकारी ने मुझे माँ बगलामुखी के आशीर्वाद से चुनौतियों का आत्मविश्वास से सामना करने में मदद की।',
        rating: 5,
      },
      {
        name: 'विक्रम जोशी',
        text: 'माँ बगलामुखी मंदिर में पंडित मनीष शर्मा द्वारा आयोजित सर्वश्रेष्ठ माँ बगलामुखी पूजा ने मेरे पेशेवर संघर्षों को हल किया। उनके प्रामाणिक अनुष्ठान और व्यक्तिगत दृष्टिकोण वास्तव में उल्लेखनीय थे।',
        rating: 5,
      },
      {
        name: 'ऋतु मेहरा',
        text: 'मैंने पंडित मनीष शर्मा के साथ ऑनलाइन माँ बगलामुखी पूजन बुक किया, और यह अनुभव व्यक्तिगत समारोह जितना ही शक्तिशाली था। माँ बगलामुखी पंडित के रूप में उनकी विशेषज्ञता ने मेरे जीवन में दिव्य आशीर्वाद लाए।',
        rating: 5,
      },
    ],
  },
};