import { redirect } from "next/navigation";

/** The practitioner page lives at /team. Kept so older links don't break. */
export default function About() {
  redirect("/team");
}
