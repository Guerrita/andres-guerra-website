"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Database, Layout, GitBranch, Languages } from "lucide-react";
import { useI18n } from "@/app/lib/i18n-context";
import {
  PythonIcon,
  AwsIcon,
  ReactIcon,
  TypeScriptIcon,
  DynamoDBIcon,
  PostgreSQLIcon,
  NodeJsIcon,
  NextJsIcon,
  GitHubIcon,
  ArangoDBIcon,
  LambdaIcon,
  S3Icon,
  StepFunctionsIcon,
  ApiGatewayIcon,
  AmplifyIcon,
  ServerlessIcon,
} from "@/app/lib/tech-icons";

interface TechItem {
  name: string;
  color: string;
  icon?: React.ComponentType<{ size?: number }>;
}

interface TechCardBase {
  icon: React.ElementType;
  titleKey: string;
  items: TechItem[];
  className?: string;
  highlight?: boolean;
}

interface TechCard {
  icon: React.ElementType;
  titleKey: string;
  title: string;
  items: TechItem[];
  className?: string;
  highlight?: boolean;
}

const techCardBase = [
  {
    icon: Code2,
    titleKey: "categoryBackend" as const,
    items: [
      { name: "Python", color: "#3776AB", icon: PythonIcon },
      { name: "Node.js", color: "#339933", icon: NodeJsIcon },
      { name: "AWS Lambda", color: "#FF9900", icon: LambdaIcon },
      { name: "Step Functions", color: "#FF4F8B", icon: StepFunctionsIcon },
      { name: "API Gateway", color: "#FF9900", icon: ApiGatewayIcon },
      { name: "Serverless", color: "#FD5750", icon: ServerlessIcon },
    ],
    className: "md:col-span-2",
    highlight: true,
  },
  {
    icon: Cloud,
    titleKey: "categoryCloud" as const,
    items: [
      { name: "AWS", color: "#FF9900", icon: AwsIcon },
      { name: "S3", color: "#569A31", icon: S3Icon },
      { name: "EC2", color: "#FF9900", icon: AwsIcon },
      { name: "Amplify", color: "#FF9900", icon: AmplifyIcon },
    ],
  },
  {
    icon: Database,
    titleKey: "categoryDatabases" as const,
    items: [
      { name: "DynamoDB", color: "#4053D6", icon: DynamoDBIcon },
      { name: "ArangoDB", color: "#68A261", icon: ArangoDBIcon },
      { name: "RDS", color: "#FF9900", icon: AwsIcon },
      { name: "PostgreSQL", color: "#336791", icon: PostgreSQLIcon },
    ],
  },
  {
    icon: Layout,
    titleKey: "categoryFrontend" as const,
    items: [
      { name: "React", color: "#61DAFB", icon: ReactIcon },
      { name: "React Native", color: "#61DAFB", icon: ReactIcon },
      { name: "Next.js", color: "#a3a3a3", icon: NextJsIcon },
      { name: "TypeScript", color: "#3178C6", icon: TypeScriptIcon },
    ],
    className: "md:col-span-2",
    highlight: true,
  },
  {
    icon: GitBranch,
    titleKey: "categoryDevOps" as const,
    items: [
      { name: "GitHub Actions", color: "#2088FF", icon: GitHubIcon },
      { name: "Serverless Deploy", color: "#FD5750", icon: ServerlessIcon },
      { name: "AWS Amplify", color: "#FF9900", icon: AmplifyIcon },
      { name: "CI/CD", color: "#14b8a6" },
    ],
  },
  {
    icon: Languages,
    titleKey: "categoryLanguages" as const,
    items: [
      { name: "englishLevel", color: "#3178C6" },
      { name: "spanishLevel", color: "#FF9900" },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const TechStackSection = () => {
  const { t } = useI18n();

  // Build techCards with translated titles
  const techCards = techCardBase.map((card) => {
    return {
      ...card,
      title: t.techStack[card.titleKey as keyof typeof t.techStack],
      items: card.items.map((item) => ({
        ...item,
        name:
          item.name === "englishLevel"
            ? t.techStack.englishLevel
            : item.name === "spanishLevel"
              ? t.techStack.spanishLevel
              : item.name,
      })),
    };
  });

  return (
    <section id="stack" className="section-container">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          {t.techStack.title} <span className="gradient-text">{t.techStack.titleHighlight}</span>
        </h2>
        <p className="section-subtitle mx-auto">
          {t.techStack.subtitle}
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto auto-rows-auto"
      >
        {techCards.map((card: typeof techCards[0]) => (
          <motion.div
            key={card.titleKey}
            variants={item}
            className={`bento-card p-6 group ${card.className || ""} ${
              card.highlight
                ? "bg-gradient-to-br from-card/80 to-primary/5 border-primary/30"
                : ""
            }`}
          >
            <div
              className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4 ${
                card.highlight
                  ? "bg-primary/20 text-primary"
                  : "bg-accent/10 text-accent"
              } group-hover:scale-110 transition-transform duration-200`}
            >
              <card.icon size={20} />
            </div>

            <h3 className="text-lg font-heading font-bold text-foreground mb-4">
              {card.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {card.items.map((tech: (typeof card.items)[0]) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-code bg-secondary/50 border border-border/50 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {tech.icon ? (
                    <tech.icon size={14} />
                  ) : (
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: tech.color }}
                    />
                  )}
                  {tech.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStackSection;
