export type LinkItem = {
  id: string;
  title: string;
  url: string;
  description?: string;
};

export type Profile = {
  name: string;
  bio: string;
  image: string;
  links: LinkItem[];
};

// 보여 주기용 더미 값입니다. 실제 내용은 나중에 채워 넣으세요.
export const profile: Profile = {
  name: "김개발",
  bio: "풀스택 개발자 | 요즘 AI 개발에 미쳐있다",
  image: "/profile.jpg",
  links: [
    { id: "github", title: "🐙 깃허브", url: "https://github.com/artplanb" },
    { id: "blog", title: "🕐 블로그", url: "https://blog.naver.com/newein" },
    { id: "email", title: "✉️ 이메일", url: "mailto:newein@gmail.com" },
  ],
};
