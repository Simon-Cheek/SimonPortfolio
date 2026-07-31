// FamilySearch roles only - this is the featured, technical-experience
// timeline shown on the Software page. The BYU School of Music role still
// appears in the compact About-page timeline (see homeConfig.js).
export const sweExp = [
  {
    title: "Software Engineer II",
    company: "FamilySearch",
    details: [
      "Architected an async orchestration layer integrating Pigment (3rd-party EPM) with internal services (millions of records)",
      "Maintain 40+ Spring Boot microservices; enforce 80%+ test coverage and best practices across hundreds of PR reviews",
      "Optimized an image workflow engine handling millions of concurrent requests (Redis, SQS, mutexes)",
      "Tuned Cassandra clusters sustaining 7M+ requests/hour under production load",
      "Implemented an event-driven transfer system bridging isolated environments for org-wide integration testing",
    ],
  },
  {
    title: "Web Development Intern",
    company: "FamilySearch",
    details: [
      "Developed an internal React TypeScript framework used by 10+ engineering teams",
      "Implemented WCAG accessibility standards with semantic HTML, ARIA roles, and keyboard navigation",
      "Optimized a Node/Express bot-redirection system handling 10M+ requests/month",
      "Enhanced AWS-powered dashboards tracking GitHub repository statuses (API Gateway, Lambda)",
      "Architected a user-bandwidth inference algorithm to customize user experience",
    ],
  },
];

// Trimmed to the projects that add signal beyond the SimonMQ featured
// project: a real CI/CD -> Docker -> AWS deploy pipeline, distributed
// systems work from the Maelstrom challenges, and a GT systems course project.
export const sweCardConfig = [
  {
    title: "Stock Simulator",
    desc: `Next JS Typescript Full Stack App that allows users to trade stocks and see how they would fare in a simulated setting with $100,000 starting cash. Deployed using a Github Actions Pipeline
    automatically deploying docker images to AWS ECR / ECS and managed using AWS Load Balancer.`,
    sideText: ["Next.JS", "Github Actions", "Docker", "AWS"],
    inviteLink: "https://github.com/Simon-Cheek/StockSimulator",
    searchTerms: ["Next", "Typescript", "CICD", "CI/CD", "Javascript"],
  },
  {
    title: "Maelstrom Distributed Systems Challenges",
    desc: `A series of distributed systems implementations built against Fly.io's Maelstrom test harness, progressing from broadcast and unique ID generation through a Kafka-style commit log using compare-and-swap offset allocation on a linearizable store, to a multi-node key-value store that propagates writes via gossip.`,
    sideText: ["Go", "Distributed Systems", "Consensus"],
    inviteLink: "https://github.com/Simon-Cheek/scheek-maelstrom",
    searchTerms: ["Distributed Systems", "Go", "Gossip", "Kafka", "Consensus", "Maelstrom"],
  },
  {
    title: "Distributed File System",
    desc: `A distributed file system built for Georgia Tech's graduate Operating Systems coursework, focused on RPC-based communication and concurrency control across nodes. Source is part of a GT course and not publicly shared.`,
    sideText: ["C++", "gRPC", "Concurrency"],
    searchTerms: ["Distributed Systems", "C++", "gRPC", "Networks", "Georgia Tech"],
  },
];
