// Central place for the homepage's editable copy. Update the strings/arrays
// here rather than in the components themselves.

export const heroConfig = {
  eyebrow: "Software Engineer — Distributed Systems & Infra",
  name: "SIMON CHEEK",
  bio: `I build backend systems that hold up under load — from Cassandra
        clusters serving 7M+ requests/hour in production to a message broker
        I wrote from scratch to understand exactly how write-ahead logs and
        crash recovery work.`,
  ctaLabel: "Resume",
  ctaTo: "/resume",
};

export const aboutConfig = {
  bio: `Software Engineer II at FamilySearch, currently pursuing an MS in
        Computer Science (Computing Systems) at Georgia Tech. I like backend
        systems where correctness under failure actually matters — queues,
        logs, caches, and the internet infrastructure underneath all of it.`,
  timeline: [
    { primaryText: "Software Engineer II", secondaryText: "2025 - FamilySearch" },
    { primaryText: "Web Development Intern", secondaryText: "2024 - FamilySearch" },
    { primaryText: "Web Developer", secondaryText: "2023 - BYU School of Music" },
  ],
};

export const skillsConfig = [
  {
    title: "LANGUAGES",
    skills: ["Go", "Java", "TypeScript", "Python", "C / C++"],
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
    ],
  },
];

export const featuredProjectConfig = {
  title: "SimonMQ — Durable-MQ",
  tagline: "A message broker built to understand durability, not just use it.",
  description: `Durable-MQ is a Go message broker I built from the ground up,
    progressing from an in-memory queue to a fully WAL-backed system with
    crash recovery. Every operation is appended to a segmented, checksummed
    write-ahead log before being applied in memory; on restart, the entire
    broker state — queues, subscribers, in-flight delivery status — is
    reconstructed purely by replaying the log in LSN order. Acks are only
    applied in memory after the WAL append succeeds, so a crash can never
    lose a delivery the log doesn't know about. Currently adding Raft-based
    replication.`,
  stack: ["Go", "Write-Ahead Logging", "HTTP", "Concurrency"],
  links: [
    { label: "View on GitHub", href: "https://github.com/Simon-Cheek/simonMQ" },
  ],
};

export const researchConfig = {
  text: `I'm a member of Georgia Tech's Internet Intelligence Lab. My
    first-author research on internet infrastructure resilience — analysis
    of network shutdown patterns at national scale — was accepted to
    PETS/FOCI 2026, and I'm currently working on a follow-up project on
    global-scale traceroute measurement.`,
  linkLabel: "View Paper",
  // TODO(simon): drop in the actual paper/Zenodo URL once available.
  linkHref: "",
};
