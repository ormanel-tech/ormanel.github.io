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
  linkedin_url: String,
  facebook_url: String,
  twitter_url: String
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
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestiae placeat ea odio obcaecati dignissimos voluptatibus dolorum totam deserunt perspiciatis recusandae harum ullam architecto, tempora, ipsam, non a aperiam sit!',
    role: '~ Software Engineer',
    linkedin_url: "https://www.linkedin.com/in/nathan-kulewoshie-9084b2192/",
    facebook_url:"https://web.facebook.com/kulewoshie.nathan/",
    twitter_url:"https://twitter.com/Nathan00119"
  },
  {
    image_url: '../assets/images/unsplash_mjRwhvqEC0U.png',
    fullname: 'Dzanado Abel',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestiae placeat ea odio obcaecati dignissimos voluptatibus dolorum totam deserunt perspiciatis recusandae harum ullam architecto, tempora, ipsam, non a aperiam sit!',
    role: '~ Software Engineer',
    linkedin_url: "https://www.linkedin.com/in/nathan-kulewoshie-9084b2192/",
    facebook_url:"",
    twitter_url:"https://twitter.com/_ormanel"
  },
  {
    image_url: '../assets/images/unsplash_mjRwhvqEC0U (1).png',
    fullname: 'Wagba Eurika',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestiae placeat ea odio obcaecati dignissimos voluptatibus dolorum totam deserunt perspiciatis recusandae harum ullam architecto, tempora, ipsam, non a aperiam sit!',
    role: '~ Software Engineer',
    linkedin_url: "https://www.linkedin.com/in/nathan-kulewoshie-9084b2192/",
    twitter_url:"https://twitter.com/Eurika_Ormanel",
    facebook_url:"",
  },
];


// "outputPath": "dist/apps/ormanel-web",