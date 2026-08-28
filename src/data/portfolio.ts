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
        { label: "Education", href: "#education" },
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
    skills: {
      eyebrow: "Skills & Technologies",
      title: "Tools and concepts I am building with",
      description:
        "TODO: Replace these groups with the technologies you actually use, then remove anything that does not reflect your current ability.",
      groups: [
        {
          title: "Frontend",
          items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
        },
        {
          title: "Styling",
          items: ["Tailwind CSS", "Responsive Design", "UI Composition"],
        },
        {
          title: "Tools",
          items: ["Git", "GitHub", "VS Code", "npm"],
        },
        {
          title: "Learning Focus",
          items: ["AI Fundamentals", "Web Performance", "Clean Code"],
        },
      ],
    },
    education: {
      eyebrow: "Education",
      title: "Academic background",
      description:
        "TODO: Add your real school, major, timeline, and academic focus here.",
      items: [
        {
          school: "TODO: Add university or school name",
          degree: "TODO: Add degree or program",
          period: "TODO: Add start year - end year",
          details: [
            "TODO: Add relevant coursework, academic focus, or club involvement",
            "TODO: Add one learning outcome you want recruiters to notice",
          ],
        },
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
        { label: "Học vấn", href: "#education" },
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
    skills: {
      eyebrow: "Kỹ năng & Công nghệ",
      title: "Những công cụ và khái niệm mình đang sử dụng",
      description:
        "TODO: Thay các nhóm này bằng công nghệ bạn thật sự dùng, rồi xoá những mục chưa phản ánh đúng năng lực hiện tại.",
      groups: [
        {
          title: "Frontend",
          items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
        },
        {
          title: "Giao diện",
          items: ["Tailwind CSS", "Responsive Design", "UI Composition"],
        },
        {
          title: "Công cụ",
          items: ["Git", "GitHub", "VS Code", "npm"],
        },
        {
          title: "Đang học sâu hơn",
          items: ["AI Fundamentals", "Web Performance", "Clean Code"],
        },
      ],
    },
    education: {
      eyebrow: "Học vấn",
      title: "Nền tảng học tập",
      description:
        "TODO: Thêm trường, ngành học, thời gian học và định hướng học thuật thật của bạn tại đây.",
      items: [
        {
          school: "TODO: Thêm tên trường đại học hoặc trường học",
          degree: "TODO: Thêm ngành học hoặc chương trình học",
          period: "TODO: Thêm năm bắt đầu - năm kết thúc",
          details: [
            "TODO: Thêm môn học liên quan, định hướng học thuật hoặc hoạt động CLB",
            "TODO: Thêm một kết quả học tập bạn muốn nhà tuyển dụng chú ý",
          ],
        },
      ],
    },
  },
} as const;
