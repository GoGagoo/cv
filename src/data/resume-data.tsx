import {
  GitHubIcon,
  LinkedInIcon,
  TelegramIcon,
  VkontakteIcon,
} from "@/components/icons";

export const RESUME_DATA = {
  name: "Гагик Антонян",
  initials: "GA",
  location: "Екатеринбург, Россия, UTC+4",
  locationLink: "https://www.google.com/maps/place/Yekaterinburg",
  // поменять местами about и summary
  summary: "Front-end Разработчик. Всегда открыт для новых возможностей.",
  //
  about:
    "Меня зовут Гагик. Я Frontend-разработчик с энтузиазмом к созданию красивых и функциональных веб-приложений. Мое увлечение веб-разработкой началось в колледже, где изучал HTML, CSS и JavaScript, а также React.js и его экосистему. Сейчас совершенствуюсь в направлении Front-end разработки. Если вы заинтересованы в моих навыках, свяжитесь со мной.",
  avatarUrl: "https://avatars.githubusercontent.com/u/101787513?v=4",
  // portfolio
  personalWebsiteUrl: "https://gogagoo-portfolio.vercel.app/",
  contact: {
    email: "gagika57@gmail.com",
    tel: "+7 995 566 5553",
    social: [
      {
        name: "Профиль в GitHub",
        url: "https://github.com/GoGagoo",
        icon: GitHubIcon,
      },
      {
        name: "Профиль в LinkedIn",
        url: "https://www.linkedin.com/in/gagikantonyan/",
        icon: LinkedInIcon,
      },
      {
        name: "Профиль в Telegram",
        url: "https://t.me/doubleG_json",
        icon: TelegramIcon,
      },
      {
        name: "Профиль в Вконтакте",
        url: "https://vk.com/ohmangod_damn",
        icon: VkontakteIcon,
      },
    ],
  },
  education: [
    // вместо school другое
    {
      school: "Уральский Федеральный Университет им. Б.Н. Ельцина",
      degree: "Бакалавр по специальности «Прикладная информатика»",
      start: "2023",
      end: "2027",
    },
    {
      school: "Уральский Государственный Колледж им. И.И. Ползунова",
      degree:
        "Средне-специальное образование по специальности «Программирование в компьютерных системах»",
      start: "2019",
      end: "2023",
    },
  ],
  // work: [
  //   {
  //     company: "Parabol",
  //     link: "https://parabol.co",
  //     // badges: ["Remote"] || badges: []
  //     badges: [],
  //     title: "Front-end Developer",
  //     start: "202",
  //     end: "202",
  //     description:
  //       "Внедрял новые функции, руководил отрядом, работал над улучшением способа отправки кода разработчиками, начал миграцию с Emotion на Tailwind CSS и многое другое. Технологии: React, TypeScript, GraphQL",
  //   },
  // ],
  hard_skills: [
    // "Vue",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "HTML",
    "CSS",
  ],
  soft_skills: [
    "Стремление к обучению",
    "Постоянное самосовершенствование",
    "Ответственный подход к работе",
    "Легко нахожу общий язык с людьми",
  ],
  projects: [
    {
      title: "GoGagoo Porfolio",
      techStack: [
        "Pet Project",
        "Next.js",
        "Framer Motion",
        "React Type Animation",
      ],
      description: "Мое личное портфолио с анимацией",
      link: {
        href: "https://gogagoo-portfolio.vercel.app/",
      },
    },
    {
      title: "Pizza Mizza",
      techStack: [
        "Pet Project",
        "TypeScript",
        "React.js",
        "Axios",
        "Redux Toolkit",
      ],
      description: "Несложный сайт доставки пиццы с авторизацией и корзиной",
      link: {
        href: "https://pizza-mizza-app.vercel.app/",
      },
    },
    {
      title: "React Search Input",
      techStack: ["Test Task", "React.js", "swapi.dev API", "TailwindCSS"],
      description:
        `Сайт-поисковик, разработанный для компании АО "ЛОТОС" в качестве тестового задания`,
      link: {
        href: "https://gogagoo-react-input.vercel.app/",
      },
    },
  ],
} as const;
