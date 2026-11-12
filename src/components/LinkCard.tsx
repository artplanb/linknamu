"use client";

import type { LinkItem } from "@/data/profile";

function trackClick(id: string) {
  const url = `/api/clicks/${encodeURIComponent(id)}`;
  // sendBeacon은 새 탭으로 이동하는 중에도 요청이 끊기지 않게 보내 줍니다.
  if (typeof navigator !== "undefined" && navigator.sendBeacon?.(url)) return;
  fetch(url, { method: "POST", keepalive: true }).catch(() => {});
}

export default function LinkCard({ id, title, url, description }: LinkItem) {
  // mailto: 링크는 새 탭으로 열면 빈 탭이 남으므로 현재 창에서 메일 앱을 엽니다.
  const isMail = url.startsWith("mailto:");
  return (
    <a
      href={url}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      onClick={() => trackClick(id)}
      onAuxClick={(e) => {
        if (e.button === 1) trackClick(id); // 마우스 휠 클릭(새 탭 열기)
      }}
      className="glass-card block w-full rounded-[1.25rem] px-6 py-[1.125rem] text-center transition duration-300 ease-out hover:bg-[var(--glass-hover)] hover:shadow-[var(--glass-shadow-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)] motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0"
    >
      <span className="block text-[0.9375rem] font-semibold tracking-tight">{title}</span>
      {description && (
        <span className="mt-0.5 block text-sm text-muted">
          {description}
        </span>
      )}
    </a>
  );
}
