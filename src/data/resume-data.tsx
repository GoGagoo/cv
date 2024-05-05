import {
  GitHubIcon,
  LinkedInIcon,
  TelegramIcon,
  VkontakteIcon,
  WakatimeIcon,
} from "@/components/icons";

export const RESUME_DATA = {
  name: "Гагик Антонян",
  initials: "GA",
  location: "Екатеринбург, Россия, UTC+4",
  locationLink: "https://www.google.com/maps/place/Yekaterinburg",
  summary: "Front-end Разработчик. Всегда открыт для новых возможностей.",
  //
  about:
    "Меня зовут Гагик. Я студент на заочном обучении и ищу работу на позицию Frontend-разработчик в продуктовой компании или на аутсорсинг. В работе ценю хороший код и замечательных коллег. Мне важно получить опыт, а трудности меня не пугают:) Буду рад знакомству!",
  avatarUrl: "https://avatars.githubusercontent.com/u/101787513?v=4",
  portfolio: "https://gogagoo-portfolio.vercel.app/",
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
      {
        name: "Профиль в Wakatime",
        url: "https://wakatime.com/@GoGago",
        icon: WakatimeIcon,
      },
    ],
  },
  education: [
    {
      university: "Уральский Федеральный Университет им. Б.Н. Ельцина",
      link: "https://urfu.ru",
      degree: "Бакалавр по специальности «Прикладная информатика» (заочно)",
      start: "2023",
      end: "2027",
    },
    {
      university: "Уральский Государственный Колледж им. И.И. Ползунова",
      link: "https://ugkp.ru/",
      degree:
        "Средне-специальное образование по специальности «Программирование в компьютерных системах» (очно)",
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
  //     start: "2023",
  //     end: "2023",
  //     description:
  //       "Внедрял новые функции, руководил отрядом, работал над улучшением способа отправки кода разработчиками, начал миграцию с Emotion на Tailwind CSS и многое другое. Технологии: React, TypeScript, GraphQL",
  //   },
  // ],
  hard_skills: [
    // "Vue",
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "Git",
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
      title: "Vue Sneakers",
      techStack: [
        "Course Project",
        "Vue.js",
        "MOKKY.DEV API",
        "TailwindCSS",
        "auto-animate",
      ],
      description: "Сайт интернет-магазин кроссовок для курсовой работы",
      link: {
        href: "https://cp-vue-sneakers-shop.vercel.app/",
      },
    },
    {
      title: "GitHub Ninja",
      techStack: ["Pet Project", "Next.js", "GitHub REST API", "ChakraUI"],
      description:
        "Небольшой сайт, благодаря которому можно получить профиль  Github пользователя и другую информацию.",
      link: {
        href: "https://github-ninja.vercel.app/",
      },
    },
    {
      title: "React Search Input",
      techStack: ["Test Task", "React.js", "swapi.dev API", "TailwindCSS"],
      description: 'Сайт-поисковик, разработанный для компании АО "ЛОТОС" в качестве тестового задания',
      link: {
        href: "https://gogagoo-react-input.vercel.app/",
      },
    },
    {
      title: "GoGagoo Porfolio",
      techStack: ["Pet Project", "TypeScript", "Next.js", "Framer Motion"],
      description: "Мое личное портфолио с анимацией",
      link: {
        href: "https://anim-portfolio.vercel.app/",
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
  ],
} as const;
