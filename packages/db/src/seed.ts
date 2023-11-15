import { prisma } from ".";

async function main() {
  try {
    await prisma.technology.createMany({
      data: [
        {
          name: "React",
        },
        {
          name: "Next.js",
        },
        {
          name: "TypeScript",
        },
        {
          name: "JavaScript",
        },
        {
          name: "HTML",
        },
        {
          name: "CSS",
        },
        {
          name: "Node.js",
        },
        {
          name: "GraphQL",
        },
        {
          name: "Apollo",
        },
        {
          name: "PostgreSQL",
        },
        {
          name: "Prisma",
        },
        {
          name: "Docker",
        },
        {
          name: "Kubernetes",
        },
        {
          name: "AWS",
        },
        {
          name: "Terraform",
        },
        {
          name: "Git",
        },
        {
          name: "GitHub",
        },
        {
          name: "GitLab",
        },
        {
          name: "Bitbucket",
        },
        {
          name: "Jira",
        },
        {
          name: "Confluence",
        },
        {
          name: "Slack",
        },
        {
          name: "VS Code",
        },
        {
          name: "Figma",
        },
        {
          name: "Sketch",
        },
        {
          name: "Adobe XD",
        },
        {
          name: "Photoshop",
        },
        {
          name: "Illustrator",
        },
        {
          name: "InDesign",
        },
        {
          name: "Premiere Pro",
        },
        {
          name: "After Effects",
        },
        {
          name: "Lightroom",
        },
        {
          name: "XD",
        },
        {
          name: "Zeplin",
        },
        {
          name: "Abstract",
        },
        {
          name: "InVision",
        },
        {
          name: "Framer",
        },
        {
          name: "Webflow",
        },
        {
          name: "Squarespace",
        },
        {
          name: "WordPress",
        },
        {
          name: "Shopify",
        },
        {
          name: "Wix",
        },
        {
          name: "Webflow",
        },
        {
          name: "Gatsby",
        },
        {
          name: "Nuxt",
        },
      ],
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

void main();
