import { UrlObject } from 'url';
declare type Url = string | UrlObject;

type PageConfig = {
  seo: {
    title: String,
    description: String,
    favicon: String,
  },
  logo: {
    firstLine: String,
    secondLine: String
  },
  menu: Array<{label: String, url: Url}>,
  heroSection: {
    title: String,
    description: String,
    buttons: Array<{text: String, url: String, target: String}>
  },
  presentationSection: {
    description: String,
    technologies: Array<String>
  },
  worksSection: {
    title: String,
    subtitle: String,
    works: Array<{
      title: String, 
      description: String, 
      cover: String, 
      youtubeLink: String, 
      externalLink?: String
    }>
  },
  projectsSection: {
    title: String,
    subtitle: String,
    projects: Array<{
      title: String,
      description: String,
      cover: String,
      youtubeLink: String,
      externalLink: String,
      githubLink: String
    }>
  },
  testimonialsSection: {
    title: String,
    subtitle: String,
    testimonials: Array<{
      name: String,
      role: String,
      obs: String | null,
      job: String,
      message: String
    }>
  },
  contactSection: {
    title: String,
    subtitle: String,
    networks: Array<{network: String, url: String}>
  },
  copySection: {
    text: String
  }
}

const config: PageConfig =  {
  seo: {
    title: "Marllon Gomes - Desenvolvedor FullStack",
    description: "Venha desenvolver sua ideia!",
    favicon: "/favicon.ico"
  },
  logo: {
    firstLine: "MARLLON",
    secondLine: "GOMES"
  },
  menu: [
    {label: "Início", url: "/"},
    {label: "Sobre", url: "#about"},
    {label: "Portfólio", url: "#portfolio"},
    {label: "Projetos", url: "#projects"},
    {label: "Contato", url: "#contact"}
  ],
  heroSection: {
    title: "Desenvolvedor FullStack",
    description: "Sistemas Web, Desktop, API's, Aplicativos e Sites Wordpress",
    buttons: [
      {text: "Orçamento", url: "#contact", target: ""},
      {text: "Whastapp", url: "https://api.whatsapp.com/send?phone=5538984253121", target: "_blank"}
    ]
  },
  presentationSection: {
    description: "Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.",
    technologies: ['teste']
  },
  worksSection: {
    title: "TRABALHOS RECENTES",
    subtitle: "Conheça alguns dos meus últimos trabalhos",
    works: [
      {
        title: "Lojia",
        description: "Projeto de startup utilizando laravel, jquery, css, e typescript",
        youtubeLink: "https://www.youtube.com/watch?v=UXk8vqrSnyo",
        cover: '/works/lojia.png'
      },
      {
        title: "Lojia",
        description: "Projeto de startup utilizando laravel, jquery, css, e typescript",
        youtubeLink: "https://www.youtube.com/watch?v=UXk8vqrSnyo",
        cover: '/works/lojia.png'
      },
      {
        title: "Lojia",
        description: "Projeto de startup utilizando laravel, jquery, css, e typescript",
        youtubeLink: "https://www.youtube.com/watch?v=UXk8vqrSnyo",
        cover: '/works/lojia.png'
      },
      {
        title: "Lojia",
        description: "Projeto de startup utilizando laravel, jquery, css, e typescript",
        youtubeLink: "https://www.youtube.com/watch?v=UXk8vqrSnyo",
        cover: '/works/lojia.png'
      },
      {
        title: "Lojia",
        description: "Projeto de startup utilizando laravel, jquery, css, e typescript",
        youtubeLink: "https://www.youtube.com/watch?v=UXk8vqrSnyo",
        cover: '/works/lojia.png'
      },
      {
        title: "Lojia",
        description: "Projeto de startup utilizando laravel, jquery, css, e typescript",
        youtubeLink: "https://www.youtube.com/watch?v=UXk8vqrSnyo",
        cover: "/works/lojia.png"
      },
    ]
  },
  projectsSection: {
    title: "",
    subtitle: "",
    projects: [
      {
        title: "MG TOOLBOX", 
        description: "Mini caixa de ferramentas para ajudar no dia a dia administrativo, conta com: contador de horas, caracteres, conversão de imagens, entre outros.", 
        cover: "",
        youtubeLink: "mgtoolbox.marllongomes.com",
        externalLink: "mgtoolbox.marllongomes.com",
        githubLink: "mgtoolbox.marllongomes.com",
      },
    ]
  },
  testimonialsSection: {
    title: "DEPOIMENTOS",
    subtitle: "Alguns feedbacks do meu trabalho",
    testimonials: [
      {
        name: "Alexandre Carvalho",
        role: "CEO - AlexandreCarvalho.com",
        obs: "trabalho realizado na plataforma workana",
        job: "Criação de site wordpress",
        message: "Matt was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish."
      },
    ]
  },
  contactSection: {
    title: "CONTATO",
    subtitle: "Entre em contato comigo para tratarmos do seu projeto!",
    networks: [
      {network: "facebook", url: "https://facebook.com/marllongomes"},
      {network: "instagram", url: "https://facebook.com/marllongomes"},
      {network: "youtube", url: "https://facebook.com/marllongomes"},
      {network: "whatsapp", url: "https://facebook.com/marllongomes"},
    ]
  },
  copySection: {
    text: "Marllon Gomes \n Portfólio Freelancer 2021"
  }
}

export default config;