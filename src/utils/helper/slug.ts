export function generateSlug(title: string, id: number): string {
  if (title) return title.toLowerCase().replace(/ /g, "-") + "-" + id;
  return "";
}
export function getIdFromSlug(slug: string): number {
  if (slug) return +slug.split("-").pop()!;
  return 0;
}
