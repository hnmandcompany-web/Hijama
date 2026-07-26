import Link from "next/link";
import { MessageSquare, Mail, CalendarCheck } from "lucide-react";
import { NetlifyForm } from "@/components/NetlifyForm";
import { AnimatedSection } from "@/components/AnimatedSection";
import { appointmentFields } from "@/lib/form-fields";
import { contact } from "@/lib/site-config";

export const metadata = {
  title: "Request Appointment | Hijama and More",
  description:
    "Request a ḥijāma session. Your request notifies the practitioner directly by text and email, and you'll get a personal reply within 24 hours.",
};

const reassurance = [
  {
    icon: MessageSquare,
    title: "It reaches me straight away",
    text: "Submitting the form notifies me by text and by email the moment it lands. No booking platform, no queue.",
  },
  {
    icon: Mail,
    title: "I reply personally",
    text: `You'll hear back within ${contact.responseTime}, by whichever method you asked for below.`,
  },
  {
    icon: CalendarCheck,
    title: "Nothing is charged yet",
    text: "This is a request, not a booking. We agree the time, the number of cups and the price together before anything is confirmed.",
  },
];

export default function RequestAppointment() {
  return (
    <div className="pt-32 pb-24 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">
            Book a Session
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-charcoal leading-[1.04]">
            Request an<br />Appointment
          </h1>
          <p className="mt-8 text-charcoal/50 leading-relaxed max-w-xl">
            Tell us what you&rsquo;re coming in for and when suits you. We&rsquo;ll come back to
            you within {contact.responseTime} to confirm a time and the price.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] gap-16 lg:gap-20 items-start">
          <AnimatedSection>
            <NetlifyForm
              formName="appointment-request"
              fields={appointmentFields}
              submitLabel="Send Request"
              successMessage={`Request received. I'll be in touch within ${contact.responseTime}.`}
            />
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-sage/15 bg-white p-8">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.22em] text-sage mb-8">
                What Happens Next
              </h2>
              <div className="flex flex-col gap-8">
                {reassurance.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-9 h-9 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-sage" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-charcoal mb-1.5">{title}</h3>
                      <p className="text-xs text-charcoal/45 leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-charcoal/40 leading-relaxed mt-8 pt-8 border-t border-sage/10">
                New clients complete a short health questionnaire and consent form before the first
                session. See{" "}
                <Link href="/forms" className="text-sage hover:underline">
                  waivers &amp; intake forms
                </Link>
                .
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
