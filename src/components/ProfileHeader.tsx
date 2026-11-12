import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  image: string;
};

export default function ProfileHeader({ name, bio, image }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      {/* 바깥 그라데이션 테두리 + 따뜻한 그림자로 살짝 떠 있는 느낌 */}
      <div className="rounded-full bg-gradient-to-b from-white to-white/40 p-1 shadow-[0_18px_40px_-16px_rgb(150_80_40/0.45),0_2px_6px_rgb(150_80_40/0.12)] dark:from-white/25 dark:to-white/5 dark:shadow-[0_18px_40px_-16px_rgb(0_0_0/0.7)]">
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={128}
          height={128}
          priority
          className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
        />
      </div>
      <h1 className="mt-6 text-[1.375rem] font-bold tracking-tight">{name}</h1>
      <p className="mt-2 max-w-xs text-[0.9375rem] leading-relaxed text-muted">{bio}</p>
    </header>
  );
}
