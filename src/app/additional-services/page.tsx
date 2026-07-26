import { redirect } from "next/navigation";

/** Additional services now live at /services. Kept so older links don't break. */
export default function AdditionalServices() {
  redirect("/services");
}
