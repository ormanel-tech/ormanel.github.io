export interface Services {
  title: String;
  description: String;
  image_url: String;
}

export interface Staff {
  image_url: String;
  fullname: String;
  description: String;
  role: String;
  linkedin_url: String;
  facebook_url: String;
  twitter_url: String;
}

export const services = [
  {
    title: 'MOBILE APP DEVELOPMENT',
    description:
      'We develop fast and elegate mobile applications which is from smple to complex for both personal and businesses.',
    image_url: '../assets/images/header.jpg',
  },
  {
    title: 'WEBSITE DEVELOPMENT',
    description:
      'We develop websites like blogs, E-commerce, business sites and many more.',
    image_url: '../assets/images/header.jpg',
  },
];

export const staff = [
  {
    image_url: '../assets/images/unsplash_c_GmwfHBDzk.png',
    fullname: 'Kulewoshie Nathan',
    description:
      'Forward-thinking Software Engineer. Fluent in Javascript and Typescript programming languages,I also have professional experience in other programming languages and Frameworks like Flutter and Nodejs. My greatest assets are organization, and the ability to learn quickly and master new technologies while working in both team and self-directed settings.',
    role: '~ Software Engineer',
    linkedin_url: 'https://www.linkedin.com/in/nathan-kulewoshie-9084b2192/',
    instagram_url: 'https://instagram.com/nathan.ormanel',
    twitter_url: 'https://twitter.com/Nathan00119',
  },
  {
    image_url: '../assets/images/unsplash_mjRwhvqEC0U.png',
    fullname: 'Dzanado Abel',
    description:
    'Forward-thinking Software Engineer. Fluent in Javascript and Typescript programming languages,I also have professional experience in other programming languages and Frameworks like Flutter and Nodejs. My greatest assets are organization, and the ability to learn quickly and master new technologies while working in both team and self-directed settings.',
    role: '~ Software Engineer',
    linkedin_url: 'https://www.linkedin.com/in/abel-dzanado-49a55b18a/',
    instagram_url: 'https://instagram.com/abel.ormanel',
    twitter_url: 'https://twitter.com/_ormanel',
  },
  {
    image_url: '../assets/images/unsplash_mjRwhvqEC0U (1).png',
    fullname: 'Wagba Eurika',
    description:
    'Forward-thinking Software Engineer. Fluent in Javascript and Typescript programming languages,I also have professional experience in other programming languages and Frameworks like Flutter and Nodejs. My greatest assets are organization, and the ability to learn quickly and master new technologies while working in both team and self-directed settings.',
    role: '~ Software Engineer',
    linkedin_url: '#',
    twitter_url: 'https://twitter.com/Eurika_Ormanel',
    instagram_url: 'https://instagram.com/eurika.ormanel',
  },
];

// "outputPath": "dist/apps/ormanel-web",
