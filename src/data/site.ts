export const site = {
  name: 'Abhinav Sai',
  role: 'Backend Engineer',
  location: 'Hyderabad, India',
  url: 'https://abhinavsai.dev',
  description:
    'Backend engineer building distributed systems in Java, Spring Boot and AWS. Real-time systems, concurrency, caching and failure handling, with measurements to back the claims.',
  email: 'abhinavsai491@gmail.com',
  links: {
    github: 'https://github.com/Abhinav2777',
    linkedin: 'https://linkedin.com/in/abhinav-sai',
    medium: 'https://medium.com/@abhinavsai491',
    chessRepo: 'https://github.com/Abhinav2777/chess-platform',
    article:
      'https://medium.com/@abhinavsai491/from-redis-lettuce-to-valkey-glide-lessons-from-a-production-migration-to-elasticache-serverless-b1415f8c99a1',
  },
  cv: '/Abhinav_Sai_Resume.pdf',
};

/** A file in the chess-platform repository, on main. */
export const repo = (path: string) => `${site.links.chessRepo}/blob/main/${path}`;
