"use client";

import type { LinkItem } from "@/data/profile";

function trackClick(id: string) {
  const url = `/api/clicks/${encodeURIComponent(id)}`;
  // sendBeacon은 새 탭으로 이동하는 중에도 요청이 끊기지 않게 보내 줍니다.
  if (typeof navigator !== "undefined" && navigator.sendBeacon?.(url)) return;
  fetch(url, { method: "POST", keepalive: true }).catch(() => {});
}

export default function LinkCard({ id, title, url, description }: LinkItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackClick(id)}
      onAuxClick={(e) => {
        if (e.button === 1) trackClick(id); // 마우스 휠 클릭(새 탭 열기)
      }}
      className="group block w-full rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 active:translate-y-0 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-emerald-500"
    >
      <span className="block font-semibold">{title}</span>
      {description && (
        <span className="mt-0.5 block text-sm text-neutral-500 dark:text-neutral-400">
          {description}
        </span>
      )}
    </a>
  );
}
