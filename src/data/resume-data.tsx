import {
  GitHubIcon,
  HabrIcon,
  LinkedInIcon,
  TelegramIcon,
  VkontakteIcon,
  WakatimeIcon,
} from "@/components/icons"

export const RESUME_DATA = {
  name: "Гагик Антонян",
  initials: "GA",
  location: "Екатеринбург, Россия, UTC+5",
  locationLink: "https://www.google.com/maps/place/Yekaterinburg",
  summary: "Front-end Разработчик. Всегда открыт для новых возможностей.",
  //
  about:
    "Меня зовут Гагик. Я студент на заочном обучении и ищу работу на позицию Frontend-разработчик в продуктовой компании или на аутсорсинг. Являюсь Frontend-разработчиком на стеке React.js, Next.js и чутка Typescript. C интересом создаю удобные и красивые интерфейсы. Я слушаю подкасты, читаю блоги, прохожу специализированные курсы и постоянно расширяю свои знания. В работе ценю хороший код и замечательных коллег. Имел дело с такими технологиями, как Redux, TailwindCSS, shandcn и так далее. Кстати, я есть на Хабре. Там периодически появляются интересные статьи. Мне также важно получить опыт, а трудности меня не пугают:) Буду рад знакомству!",
  sub_about: // optional
    "Кстати, я есть на Хабре. Там периодически появляются интересные статьи. Мне также важно получить опыт, а трудности меня не пугают:) Буду рад знакомству!",
  avatarUrl: "https://avatars.githubusercontent.com/u/101787513?v=4",
  portfolio: "https://anim-portfolio.vercel.app",
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
      {
        name: "Профиль на Хабре",
        url: "https://habr.com/ru/users/ohmangod_damn/",
        icon: HabrIcon,
      },
    ],
  },
  education: [
    {
      university: "Уральский Федеральный Университет им. Б.Н. Ельцина",
      link: "https://urfu.ru",
      degree:
        "Поступил на факультет Радиофак на бакалавра по специальности «Прикладная информатика». Начало учёбы началось с Java Core, но я настолько остался верен Frontend'у, что даже выполнил курсовую работу на Vue.js. To be continued…👀",
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
  //     company: "",
  //     link: "https://",
  //     // badges: ["Remote"] || badges: []
  //     badges: [],
  //     title: "Front-end Developer",
  //     start: "",
  //     end: "",
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
  ],
  soft_skills: [
    "Стремление к обучению",
    "Постоянное самосовершенствование",
    "Ответственный подход к работе",
    "Легко нахожу общий язык с людьми",
  ],
  projects: [
    {
      title: "FastAPI Country Search",
      techStack: [
        "Pet Project",
        "Next.js",
        "Heno",
        "Cloudflare",
        "Upstash Redis",
        "shadcn-ui",
        "TailwindCSS",
      ],
      description:
        "Высокопроизводительный API для поиска стран. Работает с VPN! [ENG]",
      link: {
        href: "https://fastapi-counrties.vercel.app/",
      },
    },
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
        "Небольшой сайт, благодаря которому можно получить профиль  Github пользователя и другую информацию. [ENG]",
      link: {
        href: "https://github-ninja.vercel.app/",
      },
    },
    {
      title: "Personal Account Employee",
      techStack: ["Test Task", "Next.js", "Chart.js", "TailwindCSS"],
      description:
        "Одностраничный сайт Личного Кабинета сотрудника для компании ООО Aspirity в качестве решения тестового задания.",
      link: {
        href: "https://test-work-personal-account-employee.vercel.app",
      },
    },
    {
      title: "GoGagoo Portfolio",
      techStack: ["Pet Project", "TypeScript", "Next.js", "Framer Motion"],
      description: "Мое личное портфолио с анимацией [ENG]",
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
} as const
