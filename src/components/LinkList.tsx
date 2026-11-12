"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/data/profile";
import LinkCard from "./LinkCard";

type ClickCount = { id: string; count: number };

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 서버에서 받은 값과, 이 화면에서 누른 횟수를 따로 들고 있다가 더해서 보여 줍니다.
  // (조회 응답이 오기 전에 클릭해도 +1이 덮어써지지 않도록)
  const [serverCounts, setServerCounts] = useState<Record<string, number>>({});
  const [localClicks, setLocalClicks] = useState<Record<string, number>>({});

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/clicks", { cache: "no-store", signal: controller.signal })
      .then((res) => (res.ok ? (res.json() as Promise<ClickCount[]>) : Promise.reject(res.status)))
      .then((rows) => setServerCounts(Object.fromEntries(rows.map((r) => [r.id, r.count]))))
      .catch(() => {
        // 실패하면 0회 표시를 그대로 둡니다.
      });
    return () => controller.abort();
  }, []);

  const handleClick = (id: string) =>
    setLocalClicks((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

  return (
    <ul className="flex w-full flex-col gap-3.5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            {...link}
            count={(serverCounts[link.id] ?? 0) + (localClicks[link.id] ?? 0)}
            onClicked={handleClick}
          />
        </li>
      ))}
    </ul>
  );
}
