/**
 * Source material for the /evidence page — Qur'anic verses, ḥadīth,
 * scholarly statements, a historical note, and the FAQ.
 */

export const quranicVerses = [
  {
    text: "And when I fall ill, it is He who cures me.",
    reference: "Sūrat al-Shuʿarāʾ 26:80",
    note: "Healing itself belongs to Allah. The means are only means.",
  },
  {
    text: "And We send down of the Qur'an that which is a healing and a mercy for the believers.",
    reference: "Sūrat al-Isrāʾ 17:82",
    note: null,
  },
];

export interface Narration {
  text: string;
  narrator?: string;
  source: string;
  grade?: string;
}

export const hadithGroups: { title: string; blurb: string; narrations: Narration[] }[] = [
  {
    title: "Ḥijāma among the best of remedies",
    blurb:
      "The reports that establish cupping as a recommended treatment, all of them in the two Ṣaḥīḥs unless noted otherwise.",
    narrations: [
      {
        text: "The best of the remedies you treat yourselves with is cupping and sea costus.",
        narrator: "Anas ibn Mālik ؓ",
        source: "Ṣaḥīḥ al-Bukhārī and Ṣaḥīḥ Muslim",
      },
      {
        text:
          "Abū Ṭaybah cupped the Messenger of Allah ﷺ, and he ordered that Abū Ṭaybah be given two ṣāʿ of food, and spoke to his masters so that they reduced what they took from his earnings. And he ﷺ said: “The best of what you treat yourselves with is cupping.”",
        narrator: "Anas ibn Mālik ؓ",
        source: "Ṣaḥīḥ al-Bukhārī and Ṣaḥīḥ Muslim; also al-Shamāʾil al-Muḥammadiyya",
      },
      {
        text:
          "Healing lies in three: a drink of honey, the incision of the cupper, and cauterization by fire — but I forbid my Ummah from cauterization.",
        narrator: "Ibn ʿAbbās ؓ",
        source: "Ṣaḥīḥ al-Bukhārī",
      },
      {
        text:
          "If there is any benefit in the remedies you treat yourselves with, it is in the incision of the cupper, or a drink of honey, or cauterization by fire — though I do not like to be cauterized.",
        narrator: "Jābir ibn ʿAbdillāh ؓ",
        source: "Ṣaḥīḥ al-Bukhārī and Ṣaḥīḥ Muslim",
      },
      {
        text: "Indeed, there is a cure in cupping.",
        narrator: "Jābir ؓ",
        source: "Ṣaḥīḥ Muslim",
      },
      {
        text:
          "Jābir ؓ visited al-Muqannaʿ during his illness and said to him: “I will not leave until you are cupped, for I heard the Messenger of Allah ﷺ say that there is healing in it.”",
        narrator: "Jābir ؓ",
        source: "Ṣaḥīḥ al-Bukhārī",
      },
      {
        text: "The best treatment you use is cupping.",
        narrator: "Abū Hurayrah ؓ",
        source: "Sunan Abī Dāwūd",
      },
      {
        text:
          "For every disease there is a remedy, and when the remedy meets the disease, the person is cured by the permission of Allah.",
        source: "Ṣaḥīḥ Muslim",
      },
    ],
  },
  {
    title: "The Prophet ﷺ being cupped, and the cupper's fee",
    blurb:
      "That he ﷺ was cupped himself, in a range of states, and paid the man who did it — the basis on which the majority permit charging for ḥijāma.",
    narrations: [
      {
        text:
          "The Prophet ﷺ was cupped and gave the cupper his fee. In another wording: had he known it to be forbidden, he would not have given him anything.",
        narrator: "Ibn ʿAbbās ؓ",
        source: "Ṣaḥīḥ al-Bukhārī and Ṣaḥīḥ Muslim",
      },
      {
        text: "The Prophet ﷺ would be cupped and would never withhold anyone's wages.",
        source: "Ṣaḥīḥ al-Bukhārī",
      },
      {
        text:
          "The Prophet ﷺ was cupped on his head while in the state of iḥrām, on account of a headache that afflicted him.",
        narrator: "Ibn ʿAbbās ؓ",
        source: "Ṣaḥīḥ al-Bukhārī and Ṣaḥīḥ Muslim",
      },
      {
        text: "The Prophet ﷺ was cupped while fasting, and was cupped while in iḥrām.",
        narrator: "Ibn ʿAbbās ؓ",
        source: "Ṣaḥīḥ al-Bukhārī",
      },
      {
        text: "The Prophet ﷺ was cupped on the hip for pain he was suffering there.",
        narrator: "Jābir ؓ",
        source: "Sunan Abī Dāwūd",
      },
      {
        text: "The Prophet ﷺ was cupped on the top of his foot for a pain, while in iḥrām.",
        narrator: "Ibn ʿAbbās ؓ",
        source: "Sunan Abī Dāwūd",
      },
      {
        text:
          "After the poisoned meat presented to him at Khaybar, the Prophet ﷺ was cupped at the base of the neck on account of its effects.",
        source:
          "Sunan Abī Dāwūd and al-Shamāʾil al-Tirmidhī — the poisoning itself is recorded in Ṣaḥīḥ al-Bukhārī",
      },
    ],
  },
  {
    title: "Sites on the body, timing, and benefit",
    blurb: "Where he ﷺ was cupped, when, and what was said of its effect.",
    narrations: [
      {
        text:
          "The Prophet ﷺ was cupped three times: on the two veins at the sides of the neck (al-akhdaʿayn) and at the base of the neck between the shoulders (al-kāhil).",
        narrator: "Anas ؓ",
        source: "Sunan Abī Dāwūd, Jāmiʿ al-Tirmidhī and Sunan Ibn Mājah",
      },
      {
        text:
          "The Prophet ﷺ used to be cupped on his head and between his shoulders, and would say: “Whoever releases this blood, it will not harm him that he treats himself with nothing else.”",
        narrator: "Abū Kabsha al-Anmārī ؓ",
        source: "Sunan Abī Dāwūd and Sunan Ibn Mājah",
      },
      {
        text:
          "No one complained to him ﷺ of a headache except that he told them to be cupped.",
        narrator: "Salmā, a servant of the Prophet ﷺ",
        source: "Sunan Abī Dāwūd",
      },
      {
        text:
          "Whoever is cupped on the 17th, 19th, or 21st, it will be a cure for every disease.",
        narrator: "Abū Hurayrah ؓ",
        source: "Sunan Abī Dāwūd and al-Sunan al-Kubrā of al-Bayhaqī",
        grade: "Chain graded ḥasan",
      },
      {
        text:
          "On the night I was taken on the Night Journey, I did not pass by any assembly of angels except that they said: O Muḥammad, upon you is cupping.",
        source: "Jāmiʿ al-Tirmidhī and Sunan Ibn Mājah",
      },
      {
        text:
          "How excellent is the cupper — he removes the blood, lightens the back, and clears the sight.",
        source: "Jāmiʿ al-Tirmidhī and Sunan Ibn Mājah",
      },
      {
        text:
          "Cupping on an empty stomach is best; in it is a cure and a blessing, and it increases the intellect and strengthens the memory.",
        source: "Sunan Ibn Mājah",
      },
    ],
  },
];

export const additionalReports: Narration[] = [
  {
    text:
      "The report attributed to Abū Bakrah ؓ that Tuesday is a day of blood, containing an hour in which bleeding does not stop.",
    source: "Sunan Abī Dāwūd",
  },
  {
    text:
      "Reports discouraging cupping on Wednesday and Saturday, or attributing leprosy to it.",
    source: "Musnad al-Bazzār and others",
  },
  {
    text:
      "The report from Ibn ʿUmar ؓ specifying Thursdays and Mondays and prohibiting Wednesday, Friday, Saturday and Sunday.",
    source: "Sunan Ibn Mājah",
  },
  {
    text: "If there is a medicine that reaches the disease, then cupping reaches it.",
    source: "al-Muwaṭṭaʾ of Imām Mālik",
  },
  {
    text: "Reports discouraging cupping on the 13th, 14th and 15th of the lunar month.",
    source: "Various",
  },
];

export const additionalReportsNote =
  "These are collected here separately because their chains are contested. Several are weak, and the scholars differed over how much weight to give them. They are recorded for completeness, not presented as established.";

export const scholarlyStatements = [
  {
    authority: "Imām al-Bukhārī",
    work: "Ṣaḥīḥ al-Bukhārī, Kitāb al-Ṭibb",
    text:
      "Imām al-Bukhārī devoted successive chapters of the Book of Medicine in his Ṣaḥīḥ to cupping — its use in illness, during fasting, during iḥrām, its timing, and the cupper's fee. That structural attention from a muḥaddith of his rank is itself a statement of the practice's standing.",
  },
  {
    authority: "Ibn al-Qayyim al-Jawziyya",
    work: "Zād al-Maʿād",
    text:
      "The reports agree with what the physicians hold — that cupping is best in the second half of the month, and the third quarter better than the beginning or the end. But when cupping is done out of need, it benefits at any time, even at the start or close of the month. Al-Khallāl reported that Imām Aḥmad would be cupped whenever his blood rose, whatever the time. They disliked cupping on a full stomach, since that could lead to obstruction and serious illness, particularly where the food was heavy or poor. Choosing the specified times is an added precaution for preserving health — but in treating actual illness, it is used whenever the need arises.",
  },
  {
    authority: "Al-Ḥāfiẓ Ibn Ḥajar al-ʿAsqalānī",
    work: "Fatḥ al-Bārī",
    text:
      "Ibn Ḥajar reviewed the weekday reports and found their chains defective throughout, noting that Imām Aḥmad nonetheless preferred to avoid those days as a precaution even though the ḥadīth was not established. He records that the physicians held cupping most effective in the second or third hour of the day, on neither a full nor an empty stomach — and cites al-Muwaffaq al-Baghdādī, that the bodily humours run heavily at the opening of the lunar month and settle towards its close, making the middle of the month the preferred window.",
  },
];

export const historicalNote = [
  "Ḥijāma is among the oldest recorded medical practices anywhere. Descriptions of cupping appear in Egyptian medical writing dating to roughly 1550 BC, and independently in Chinese practice going back several thousand years, where it remains in wide use today. It travelled through Babylonian, Greek, Roman and Islamic medicine, and was standard across Europe, Russia, Central and South Asia through the medieval period, reaching its widest European use in the eighteenth and nineteenth centuries. It was practised in the United States well into the modern era before falling out of fashion.",
  "The earliest cups were made of horn or metal, with the air withdrawn by mouth once the cup was placed against the skin. Glass cups came later, the air removed by briefly burning a small piece of cotton or wool inside the cup before applying it. The instruments have changed; the principle has not.",
];

/* ── FAQ ───────────────────────────────────────────────────────────────── */

export const faqSections: {
  heading: string;
  items: { q: string; a: string[] }[];
}[] = [
  {
    heading: "About the treatment",
    items: [
      {
        q: "Is ḥijāma painful?",
        a: [
          "Most people find it far milder than they expect. You'll feel the suction as a firm pulling sensation, and the incisions themselves are superficial scratches — most clients describe them as less sharp than a blood draw. Many people find the session relaxing enough that they doze off partway through.",
        ],
      },
      {
        q: "Will it leave marks?",
        a: [
          "Yes, temporarily. Circular discolouration where the cups sat is normal and usually fades within a few days to two weeks. Small scabs form over the incision sites and heal on their own. Don't pick at them; a natural oil such as olive or black seed oil applied gently helps.",
        ],
      },
      {
        q: "How often should I come?",
        a: [
          "For general wellbeing, most people come every three to four months. If you're coming for a specific complaint, we'll discuss a schedule at your first visit. More is not better — the body needs time between sessions.",
        ],
      },
      {
        q: "Is it safe? What about hygiene?",
        a: [
          "Every session uses single-use, sterile blades and cups, opened in front of you and disposed of immediately afterwards in a sharps container. Surfaces are disinfected between clients. Nothing that touches your skin has touched anyone else's.",
        ],
      },
      {
        q: "Is ḥijāma a replacement for medical treatment?",
        a: [
          "No, and we will never tell you otherwise. Ḥijāma is a complementary therapy. Continue taking any medication your doctor has prescribed, keep your appointments, and speak to your physician about anything that concerns you. If you're managing an ongoing condition, tell us — and tell your doctor you're having ḥijāma done.",
        ],
      },
      {
        q: "Are there people who shouldn't have ḥijāma?",
        a: [
          "Yes. There are circumstances where we'll ask you to get clearance from your physician first, or decline the session — including certain bleeding and clotting conditions, blood-thinning medication, pregnancy, and some skin conditions at the intended site. You'll complete a short health questionnaire before your first appointment so we can go through this properly. We would rather turn a session away than proceed when we shouldn't.",
        ],
      },
    ],
  },
  {
    heading: "Practical",
    items: [
      {
        q: "How should I prepare?",
        a: [
          "Avoid eating for roughly two to three hours beforehand, but stay hydrated. Shower before coming, and wear loose, comfortable clothing — most cupping is done on the back.",
        ],
      },
      {
        q: "What should I do afterwards?",
        a: [
          "Rest, drink plenty of water, and eat lightly. Avoid strenuous exercise and heavy or rich food for the rest of the day. Keep the sites clean and dry, and don't swim or use a sauna for a couple of days.",
        ],
      },
      {
        q: "Can women be seen?",
        a: [
          "Yes. Female clients are seen by a female practitioner, in a private room, with modesty maintained throughout.",
        ],
      },
    ],
  },
  {
    heading: "Islamic questions",
    items: [
      {
        q: "Does ḥijāma break the fast?",
        a: [
          "No. According to the Ḥanafī school and the majority of jurists, cupping breaks neither the fast of the one receiving it nor of the one performing it. It is, however, disliked (makrūh) for someone to have it done while fasting if he fears it will weaken him and jeopardise the fast. Where there's no such concern, there's no dislike.",
          "The Ḥanbalī school takes a different position, holding that it does break the fast of both parties. If you follow that school, the straightforward course is to schedule outside fasting hours.",
        ],
      },
      {
        q: "Is it permissible to charge a fee for ḥijāma?",
        a: [
          "Yes. The majority of jurists hold that charging for ḥijāma is permissible and the cupper's earnings are lawful. The evidence is that the Prophet ﷺ was cupped and gave the cupper his fee — and, as Ibn ʿAbbās ؓ noted, had it been unlawful he would not have given him anything.",
          "There are narrations in which the cupper's earnings are called khabīth, but the scholars explain that this describes something base or unpleasant rather than forbidden — much as garlic and onions were called khabīth while remaining entirely lawful. The Prophet ﷺ also instructed that such earnings be used to feed one's dependents, which would be impossible if they were unlawful.",
        ],
      },
      {
        q: "Does ḥijāma have to be done on particular days?",
        a: [
          "It can be done on any day. Several narrations mention the 17th, 19th and 21st of the lunar month as preferred, and the strongest of these is sound. Other reports discouraging particular weekdays are weak, and the scholars differed over how much weight to give them.",
          "Ibn al-Qayyim summarised the matter well: choosing the recommended days is a precaution for general wellbeing, but where there is an actual need for treatment, it is done whenever needed. So — if you'd like to book on a Sunnah day, we'll accommodate it. If those dates don't suit you, there is no objection to any other day.",
        ],
      },
      {
        q: "Does ḥijāma break wuḍūʾ, and do I need to make ghusl afterwards?",
        a: [
          "Ḥijāma invalidates wuḍūʾ, since flowing blood exits the body. Ghusl is not required, though washing is naturally recommended for cleanliness and comfort.",
        ],
      },
      {
        q: "Do I need to be Muslim to have ḥijāma?",
        a: [
          "Not at all. Ḥijāma has been practised across many cultures for millennia, and everyone is welcome here.",
        ],
      },
    ],
  },
];
