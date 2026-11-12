import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  image: string;
};

export default function ProfileHeader({ name, bio, image }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt={`${name} 프로필 사진`}
        width={240}
        height={240}
        priority
        className="h-56 w-56 rounded-full object-cover ring-4 ring-white shadow-md sm:h-60 sm:w-60"
      />
      <h1 className="mt-5 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-1 text-base text-neutral-600 dark:text-neutral-400">{bio}</p>
    </header>
  );
}
