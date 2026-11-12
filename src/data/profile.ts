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
  name: "김능력",
  bio: "개발자 꿈나무",
  image: "/profile.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
    { id: "blog", title: "Blog", url: "https://velog.io" },
  ],
};
