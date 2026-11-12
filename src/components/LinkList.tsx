import type { LinkItem } from "@/data/profile";
import LinkCard from "./LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  return (
    <ul className="flex w-full max-w-60 flex-col gap-5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard {...link} />
        </li>
      ))}
    </ul>
  );
}
