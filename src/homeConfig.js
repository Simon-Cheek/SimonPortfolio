// Central place for the homepage's editable copy. Update the strings/arrays
// here rather than in the components themselves.

export const heroConfig = {
  eyebrow: "Software Engineer — Distributed Systems & Infra",
  name: "SIMON CHEEK",
  bio: `I build backend systems that hold up under load — production
      services handling millions of requests at work, and personal
      projects where I dig into how distributed systems actually function.`,
  ctaLabel: "Resume",
  ctaTo: "/resume",
};

export const aboutConfig = {
  bio: `I am a Full Stack Engineer III at onX Maps while pursuing an MSCS (Computing Systems) at Georgia Tech.
        I specialize in building infrastructure that scales through understanding what happens behind the
        scenes. My primary interests are in Distributed Systems, Networks, and Storage, with secondary interests
        in Machine Learning Systems and Cloud Infrastructure.`,
  timeline: [
    {
      primaryText: "Full Stack Engineer III",
      secondaryText: "2026 - onX Maps",
    },
    {
      primaryText: "Software Engineer II",
      secondaryText: "2025 - FamilySearch",
    },
    {
      primaryText: "Web Development Intern",
      secondaryText: "2024 - FamilySearch",
    },
    {
      primaryText: "Web Developer",
      secondaryText: "2023 - BYU School of Music",
    },
  ],
};

export const skillsConfig = [
  {
    title: "LANGUAGES",
    skills: ["Go", "Java", "TypeScript", "Python", "C", "C++"],
  },
  {
    title: "DISTRIBUTED SYSTEMS & DATA",
    skills: [
      "Cassandra",
      "Redis",
      "PostgreSQL",
      "DynamoDB",
      "gRPC",
      "Event-Driven Architecture",
      "Networking",
      "Machine Learning",
    ],
  },
  {
    title: "CLOUD & INFRA",
    skills: [
      "AWS (ECS, VPC, Load Balancer, CloudFormation)",
      "Docker",
      "Kubernetes",
      "GitHub Actions / CI-CD",
      "Splunk / Dynatrace",
    ],
  },
];

export const featuredProjectConfig = {
  title: "SimonMQ: Message Queues from Scratch",
  tagline:
    "Message Queues designed to train storage and distributed systems fundamentals.",
  description: `SimonMQ is a series of Go message brokers I built from scratch,
    progressing from an in-memory queue to a replicated, fault-tolerant
    cluster. Durable-MQ adds a segmented, checksummed write-ahead log: after a
    crash, the broker rebuilds its queues, subscribers, and in-flight delivery
    state by replaying the log, and never acknowledges a delivery the log
    doesn't know about. Dist-MQ extends that from surviving a restart to
    surviving the loss of a machine. State is replicated across nodes with Raft,
    a write is acknowledged only once a majority of nodes have persisted it,
    and delivery runs on the leader and is rebuilt from replicated state on
    failover. It deploys to Kubernetes and includes a durability suite that
    runs while pods are killed at random.`,
  stack: ["Go", "Raft", "Write-Ahead Logging", "Kubernetes", "Concurrency"],
  links: [
    { label: "View on GitHub", href: "https://github.com/Simon-Cheek/simonMQ" },
  ],
};

export const researchConfig = {
  text: `I'm also a member of Georgia Tech's Internet Intelligence Lab. My
    first-author research on internet infrastructure resilience — analysis
    of network shutdown patterns at national scale — was accepted to
    PETS/FOCI 2026, and I'm currently working on a follow-up project on
    global-scale traceroute measurement.`,
  linkLabel: "View Paper",
  linkHref: "https://www.petsymposium.org/foci/2026/foci-2026-0015.pdf",
};
