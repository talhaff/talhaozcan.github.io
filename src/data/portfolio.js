export const PERSONAL_INFO = {
  name: "Talha Özcan",
  title: "Bilgisayar Mühendisi",
  university: "İnönü Üniversitesi",
  gpa: "3.25",
  description: "Yüksek performanslı backend mimarileri kurgulayan, modern mobil ve web ekosistemleri inşa eden bir mühendis adayıyım.",
  github: "https://github.com/talhaff",
  linkedin: "https://www.linkedin.com/in/talha-özcan",
  email: "talhaozcanf@gmail.com"
};

export const NAV_LINKS = [
  { label: "Projeler", href: "#projects" },
  { label: "Yetenekler", href: "#skills" },
  { label: "Hakkımda", href: "#about" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Arya Sanat Akademi",
    description: "Arya Sanat Akademi için geliştirilmiş, kurumsal kimliği yansıtan modern ve yüksek performanslı web platformu.",
    tags: ["React", "Next.js", "SEO", "Tailwind"],
    github: "https://aryasanatakademim.com",
  },
  {
    id: 2,
    title: "Taptaze Mobil Uygulaması",
    description: "Getir ve Yemeksepeti tarzında, manav ürünlerine odaklanan uçtan uca mobil sipariş ve teslimat yönetim sistemi.",
    tags: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/talhaff/taptaze-app",
  },
  {
    id: 3,
    title: "Fabrika Maliyet Hesaplama",
    description: "Senkroon Yazılım bünyesinde geliştirdiğim, fabrikalar için özelleştirilmiş web tabanlı maliyet ve verimlilik hesaplama aracı.",
    tags: ["React", ".NET", "PostgreSQL", "ERP/CRM"],
    github: "#",
  },
  {
    id: 4,
    title: "Personal Premium Portfolio",
    description: "Şu an incelediğiniz, senior seviye tasarım prensipleri ve modern animasyonlarla kurgulanmış web portfolyosu.",
    tags: ["React", "Framer Motion", "Tailwind 4", "Vite"],
    github: "#",
  },
  {
    id: 5,
    title: "Otel Yönetim Ekosistemi",
    description: "Java Spring Boot ve PostgreSQL mimarisi üzerine kurulu, kurumsal rezervasyon ve operasyon yönetim sistemi.",
    tags: ["Java", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/talhaff/otel-yonetim-sistemi",
  }
];


export const SKILLS = [
  {
    category: "Frontend & Web",
    items: ["React & Next.js", "Tailwind CSS 4", "Framer Motion", "TypeScript"]
  },
  {
    category: "Backend & Mobil",
    items: ["Node.js / Express", "Java / Spring Boot", "PostgreSQL / MongoDB", "React Native"]
  },
  {
    category: "Araçlar & Mimari",
    items: ["Docker & Linux", "Git & CI/CD", "Sistem Tasarımı", "Cloud Integration"]
  }
];

