export const PERSONAL_INFO = {
  name: "Talha Özcan",
  title: "Bilgisayar Mühendisi",
  university: "İnönü Üniversitesi",
  description: "Ölçeklenebilir backend mimarileri kurgulayan, veri odaklı çözümler üreten ve modern web teknolojileriyle uçtan uca dijital deneyimler tasarlayan bir mühendis adayıyım.",
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
    title: "Otel Yönetim Ekosistemi",
    description: "Java Spring Boot ve PostgreSQL mimarisi üzerine kurulu, gerçek zamanlı rezervasyon ve operasyon yönetimi sağlayan kurumsal çözüm.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Microservices"],
    github: "https://github.com/talhaff/otel-yonetim-sistemi",
  },
  {
    id: 2,
    title: "Taptaze SaaS Platformu",
    description: "Restoranlar için bulut tabanlı QR menü ve sipariş takip sistemi. Node.js ve MongoDB Atlas ile yüksek erişilebilirlik.",
    tags: ["Node.js", "MongoDB", "Express", "React"],
    github: "https://github.com/talhaozcan/taptaze",
  },
  {
    id: 3,
    title: "3D Estetik Çalışma Alanı",
    description: "Blender ile modellenmiş, minimalist ve yüksek detaylı 3D ortam tasarımı. Işıklandırma ve materyal optimizasyonu odaklı çalışma.",
    tags: ["Blender", "3D Design", "Lighting"],
    github: "#",
  }
];

export const SKILLS = [
  {
    category: "Frontend Geliştirme",
    items: ["React & Next.js", "Tailwind CSS 4", "Framer Motion", "TypeScript"]
  },
  {
    category: "Backend & Mimari",
    items: ["Node.js / Express", "Java / Spring Boot", "PostgreSQL / MongoDB", "Sistem Tasarımı"]
  },
  {
    category: "Araçlar & Teori",
    items: ["Docker & Linux", "Git & CI/CD", "Veri Madenciliği", "Derleyici Tasarımı"]
  }
];