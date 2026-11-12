import { incrementClick } from "@/lib/clicks";
import { profile } from "@/data/profile";

// POST /api/clicks/:id — 링크 클릭 1회 기록
export async function POST(_req: Request, ctx: RouteContext<"/api/clicks/[id]">) {
  const { id } = await ctx.params;

  if (!profile.links.some((link) => link.id === id)) {
    return Response.json({ error: "존재하지 않는 링크입니다." }, { status: 404 });
  }

  try {
    const count = await incrementClick(id);
    return Response.json({ id, count });
  } catch (err) {
    console.error("[clicks] 기록 실패:", err);
    return Response.json({ error: "클릭 수를 기록하지 못했습니다." }, { status: 503 });
  }
}
