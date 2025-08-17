import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ajaj Ali",
  initials: "Ajaj",
  url: "https://github.com/ajaj123-debug",
  location: "Ambala, India",
  locationLink: "https://www.google.com/maps/place/Ambala",
  description:
    "Tech Enthusiast passionate about Software Engineering. I love building things and helping people. Very active on X.",
  summary:
    "I’m a passionate [final year undergrad](#education) with a deep love for coding and technology. My journey has led me to develop a strong foundation in [Web development, DevOps](#education). I thrive on building innovative [products](#projects) and sharing my insights through blogging. Always eager to expand my skills and tackle new challenges, I’m actively seeking lucrative opportunities to leverage my tech expertise and drive impactful projects. Whether it’s through creating seamless web experiences or exploring the future of decentralized applications, I’m excited to contribute to the tech landscape and grow alongside it.",
  avatarUrl: "/ajaj.jpg",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "Git",
    "MongoDB",
    "Postgres",
    "Docker",
    "Redis",
    "AWS",
    "CI/CD",
    "Prometheus",
    "OpenAPI",
    "Linux",
    "GitHub Actions",
    "WebSocket",
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: " ",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "ajaj42699@gmail.com",
    tel: "+91 7079553517",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ajaj123-debug",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ds-ajaj-ali",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/technerd_ajaj",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:ajaj42699@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelance Web Developer",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/memoji.jpeg",
      start: "2024",
      end: "Present",
      description:
        "Designed and developed full-stack web applications with expertise in Java, Spring Boot, Django, and React. Built 'Note2Test', an AI-powered learning platform enabling students to upload study material and auto-generate practice tests. Integrated JWT authentication, Google OAuth, and cloud storage for secure and scalable solutions. Experienced in REST APIs, database design, and deployment using Docker and Kubernetes. Passionate about backend engineering and creating impactful developer tools.",
    },
    {
      company: "Open Source",
      badges: [],
      href: "https://github.com/ajaj123-debug",
      location: "Remote",
      title: "Contributor",
      logoUrl: "/github-mark.png",
      start: "2023",
      end: "Present",
      description:
        "Contributed to various open-source projects, enhancing functionality and fixing bugs. Actively participated in code reviews and discussions to improve project quality. Developed features for community-driven projects, focusing on user experience and performance optimization. Engaged with the open-source community to share knowledge and collaborate on innovative solutions.",
    },
  ],
  education: [
    {
      school: "100xDevs",
      href: "https://app.100xdevs.com",
      degree: "Full Stack Web Development, DevOps & Web3 Bootcamp",
      logoUrl: "/100xDevs.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "Maharishi Markandeshwar University, India",
      href: "https://www.mmumullana.org",
      degree: "Bachelor's Degree of Engineering",
      logoUrl: "/mmec.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "NutriScan",
      href: "https://nutriscan-food-labels-insights.onrender.com/",
      dates: "September 2024",
      active: true,
      description:
        "Developed a stunning landing page, built with Next.js, React.js, Tailwind CSS, and Framer Motion, offers a highly responsive and visually engaging experience. Designed with a strong focus on aesthetics and fluid animations, it provides a seamless user interface across all devices, ensuring a captivating first impression for visitors.",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://nutriscan-food-labels-insights.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ajaj123-debug/Nutriscan-food-labels-insights",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/nutriScan.png",
      video: "",
    },
    {
      title: "Note2Test",
      href: "https://note2tests.vercel.app",
      dates: "July 2025",
      active: true,
      description:
        "Note2Test is an AI-driven platform that helps aspirants turn their study material into interactive learning experiences. The platform allows users to upload study documents (PDFs, notes, etc.) and automatically generates quizzes, practice tests, and evaluation reports to enhance exam preparation.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://note2test.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ajaj123-debug",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/note2test.png",
      video: "",
    },
    {
      title: "TodoListAI",
      href: "https://todolistai.vercel.app",
      dates: "September 2024",
      active: true,
      description:
        "This Todoist clone replicates all the core features of the popular task management app, offering a seamless and intuitive experience for organizing tasks, setting priorities, and tracking progress. Designed with a user-friendly interface, it enables efficient task management for individuals and teams alike.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "OpenAI API",
        "Convex",
      ],
      links: [
        {
          type: "Website",
          href: "https://todolistai.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ajaj123-debug",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Todolist.png",
      video: "",
    },
    {
      title: "Portfolio",
      href: "",
      dates: "September 2024",
      active: true,
      description:
        "Developed an amazing Portfolio to showcase my work to potential recruiters. I used latest web desiging techniques like [TailwindCSS](https://tailwindcss.com/) and [Shadcn UI](https://ui.shadcn.com/) to make it look good and [Next.js](https://nextjs.org/) to make it fast.",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/port.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack-X-Niet 2023",
      dates: "May 2023 - Present",
      location: "Noida, India",
      description:
        "Developed a web application that helps in ships re-routing using cuttinf edge traffic and optimizing the time taken to reach the destination.",
      image: "Smart-India-Hackathon-2023.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ajaj123-debug",
        },
      ],
    },
  ],
} as const;