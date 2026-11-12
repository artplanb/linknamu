import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { profile } from "@/data/profile";

// 와이어프레임(wireframe.png) 구성: 원형 프로필 사진 → 이름 → 한 줄 소개 → 링크 카드 목록
export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[26rem] flex-1 flex-col items-center gap-11 px-7 pt-16 pb-20 sm:pt-24">
      <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />
      <LinkList links={profile.links} />
    </main>
  );
}
