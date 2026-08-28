export type Language = "en" | "vi";

export const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "vi", label: "VI" },
];

export const portfolioContent = {
  en: {
    nav: {
      brand: "Vo Thanh Trung",
      contactCta: "Contact",
      items: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" },
      ],
    },
    hero: {
      eyebrow: "Personal Portfolio",
      role: "Frontend Developer | AI Enthusiast | Software Engineering Student",
      title: "Hi, I'm Trung. I build thoughtful digital experiences.",
      description:
        "TODO: Replace this with a short introduction about your background, interests, and the kind of work you want this portfolio to highlight.",
      primaryCta: "Explore Portfolio",
      secondaryCta: "Get In Touch",
      socials: [
        { label: "GitHub", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "Email", href: "#contact" },
      ],
      focusCard: {
        label: "Current Focus",
        title: "Learning, building, and refining",
        items: [
          "TODO: Add your main technical focus",
          "TODO: Add one tool or framework you are practicing",
          "TODO: Add one career or research direction",
        ],
      },
    },
    about: {
      eyebrow: "About Me",
      title: "A concise introduction about who you are",
      description:
        "TODO: Write 2-3 sentences about your background, what you are currently learning or building, and the direction you want to grow into.",
      highlights: [
        "TODO: Add your main strength",
        "TODO: Add a technology or field you care about",
        "TODO: Add the working style or value you want to show",
      ],
    },
  },
  vi: {
    nav: {
      brand: "Võ Thành Trung",
      contactCta: "Liên hệ",
      items: [
        { label: "Trang chủ", href: "#home" },
        { label: "Giới thiệu", href: "#about" },
        { label: "Kỹ năng", href: "#skills" },
        { label: "Liên hệ", href: "#contact" },
      ],
    },
    hero: {
      eyebrow: "Portfolio cá nhân",
      role:
        "Frontend Developer | AI Enthusiast | Software Engineering Student",
      title:
        "Xin chào, mình là Trung. Mình xây dựng những trải nghiệm số chỉn chu.",
      description:
        "TODO: Thay đoạn này bằng phần giới thiệu ngắn về nền tảng, định hướng, sở thích chuyên môn và điều bạn muốn portfolio này thể hiện.",
      primaryCta: "Xem portfolio",
      secondaryCta: "Liên hệ",
      socials: [
        { label: "GitHub", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "Email", href: "#contact" },
      ],
      focusCard: {
        label: "Đang tập trung",
        title: "Học, xây dựng và hoàn thiện",
        items: [
          "TODO: Thêm trọng tâm kỹ thuật hiện tại của bạn",
          "TODO: Thêm một tool hoặc framework bạn đang luyện",
          "TODO: Thêm một định hướng nghề nghiệp hoặc nghiên cứu",
        ],
      },
    },
    about: {
      eyebrow: "Giới thiệu",
      title: "Một phần giới thiệu ngắn gọn về bạn",
      description:
        "TODO: Viết 2-3 câu về bạn: bạn đang học/làm gì, quan tâm lĩnh vực nào, và mục tiêu nghề nghiệp hiện tại.",
      highlights: [
        "TODO: Thêm điểm mạnh chính của bạn",
        "TODO: Thêm công nghệ hoặc lĩnh vực bạn quan tâm",
        "TODO: Thêm giá trị/cách làm việc bạn muốn thể hiện",
      ],
    },
  },
} as const;
