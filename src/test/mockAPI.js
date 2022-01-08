const testData = [
  {
    rank: 1,
    username: 'apache',
    repositoryName: 'incubator-seatunnel',
    url: 'https://github.com/apache/incubator-seatunnel',
    description: 'SeaTunnel is a distributed, high-performance data integration platform for the synchronization and transformation of massive data (offline & real-time).',
    language: 'Java',
    languageColor: '#b07219',
    totalStars: 2655,
    forks: 242,
    starsSince: 659,
    since: 'weekly',
    builtBy: [
      {
        username: 'garyelephant',
        url: 'https://github.com/garyelephant',
        avatar: 'https://avatars.githubusercontent.com/u/2291859?s=40&v=4',
      },
      {
        username: 'RickyHuo',
        url: 'https://github.com/RickyHuo',
        avatar: 'https://avatars.githubusercontent.com/u/18550072?s=40&v=4',
      },
    ],
  },
  {
    rank: 2,
    username: 'adrianhajdin',
    repositoryName: 'project_web3.0',
    url: 'https://github.com/adrianhajdin/project_web3.0',
    description: 'Web 3.0 React Solidity Blockchain Application',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    totalStars: 847,
    forks: 142,
    starsSince: 456,
    since: 'weekly',
    builtBy: [
      {
        username: 'adrianhajdin',
        url: 'https://github.com/adrianhajdin',
        avatar: 'https://avatars.githubusercontent.com/u/24898559?s=40&v=4',
      },
    ],
  },
];

const mockAPI = () => Promise.resolve({
  json: () => Promise.resolve(testData),
});

export default mockAPI;
