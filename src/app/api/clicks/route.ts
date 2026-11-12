import { connection } from "next/server";
import { getClickCounts } from "@/lib/clicks";
import { profile } from "@/data/profile";

// GET /api/clicks — 링크별 클릭 수 조회
export async function GET() {
  // 요청마다 최신 값을 읽도록 빌드 시 프리렌더링에서 제외합니다.
  await connection();

  try {
    const counts = await getClickCounts();
    const result = profile.links.map(({ id, title }) => ({
      id,
      title,
      count: counts[id] ?? 0,
    }));
    return Response.json(result, { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("[clicks] 조회 실패:", err);
    return Response.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 503 });
  }
}
