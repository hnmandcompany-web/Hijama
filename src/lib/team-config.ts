/**
 * The team. One entry for now.
 *
 * ─── TO UPDATE ────────────────────────────────────────────────────────────
 * Add a headshot to /public and set `photo` to its path (e.g. "/musab.jpg")
 * to replace the placeholder panel.
 * ──────────────────────────────────────────────────────────────────────────
 */

export interface Member {
  slug: string;
  name: string;
  role: string;
  photo: string | null;
  bio: string[];
  credentials: { heading: string; items: string[] }[];
}

export const team: Member[] = [
  {
    slug: "musab-shaikh",
    name: "Mufti Musab M. Shaikh",
    role: "ʿĀlim · Muftī · Certified Cupping Practitioner",
    photo: null,
    bio: [
      "Ḥijāma sits at the meeting point of two things that are rarely found in the same person: a religious practice with fourteen centuries of scholarship behind it, and a procedure involving skin, blood and sterile technique. Most practitioners are trained in one of those and improvising the other.",
      "I've spent my adult life on both.",
      "I completed the ʿalim course — the traditional seminary curriculum in Qur'an, ḥadīth, Arabic and Ḥanafī jurisprudence — at Darul Quran Was Sunnah in Ramaḍān 2016, and the ifta course under Muftī Muḥammad Ṭalḥa Qāsimī in 2023. That training is why the evidence page on this site separates what is authentically established from what is merely often repeated. On the clinical side, I hold a BS in Biology from the University of Pittsburgh and an MS in Physician Assistant Studies from Carlow University, and I'm a nationally certified Physician Assistant. I've been certified in cupping since 2023 from Hijama Nation.",
      "What that means for you, practically, is straightforward. I understand what a blade does to tissue and how tissue heals. I know what a wound infection looks like at the stage where it still matters. I know which medications and conditions make cupping inadvisable, and I will tell you honestly when ḥijāma is not the right thing for what you've come in with. I've been certified in cupping since 2023, but the training that makes me careful is the training that came before it.",
      "Outside of this work, I serve as an imam and khaṭīb, leading prayers and delivering Friday sermons to congregations across the region. I served as a chaplain for many years, and I'm a founding member of Suffah Academy. Much of my time goes into writing and research in the Islamic sciences — and, when the schedule allows, into travel.",
      "Ḥijāma is a sunnah that I'd like to perform properly — correct evidence, honest claims, clean instruments. Whatever benefit comes of it is from Allah.",
    ],
    credentials: [
      {
        heading: "Islamic Scholarship",
        items: [
          "ʿĀlim course — Darul Quran Was Sunnah, Ramaḍān 1437 / 2016",
          "Ifta (Muftī) course — under Muftī Muḥammad Ṭalḥa Qāsimī, 2023",
          "Imām and khaṭīb, 2017 – present",
          "Founding member, Suffah Academy, 2023 – present",
          "Certified marriage officiant, Commonwealth of Pennsylvania",
        ],
      },
      {
        heading: "Cupping",
        items: ["Certified Cupping Practitioner, 2023"],
      },
      {
        heading: "Medical Training",
        items: [
          "Master of Science, Physician Assistant Studies — Carlow University",
          "Bachelor of Science, Biology — University of Pittsburgh",
          "Certified Physician Assistant (PA-C), NCCPA",
          "ACLS and BLS certified, American Heart Association",
          "500+ hours emergency medicine and trauma surgery",
          "Pain Management and Opioid Safety certification",
        ],
      },
      {
        heading: "Community Service",
        items: [
          "Chaplain, Allegheny County Jail, 2019 – 2024",
          "Member, New York State Chaplain Task Force",
          "Comprehensive Crisis Management Training",
        ],
      },
    ],
  },
];
