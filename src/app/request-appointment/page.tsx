import { NetlifyForm } from "@/components/NetlifyForm";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata = {
  title: "Request Appointment | Hijama and More",
  description: "Book your Hijama therapy session. Complete the form and we will respond within 24 hours.",
};

const fields = [
  { name: "name", label: "Full Name", type: "text" as const, required: true },
  { name: "phone", label: "Phone Number", type: "tel" as const, required: true },
  { name: "email", label: "Email Address", type: "email" as const, required: true },
  {
    name: "service",
    label: "Service Type",
    type: "select" as const,
    required: true,
    options: ["Hijama Therapy", "Consultation", "Other"],
  },
  {
    name: "notes",
    label: "Preferred Time & Notes",
    type: "textarea" as const,
    required: false,
  },
];

export default function RequestAppointment() {
  return (
    <div className="py-32 px-8 lg:px-16">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage mb-5">Book a Session</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-charcoal leading-[1.04]">
            Request an Appointment
          </h1>
          <p className="mt-6 text-charcoal/45 leading-relaxed">
            Complete the form below and we will be in touch within 24 hours to confirm your appointment.
          </p>
        </AnimatedSection>

        <NetlifyForm
          formName="appointment-request"
          fields={fields}
          submitLabel="Request Appointment"
          successMessage="Thank you. I respond within 24 hours."
        />
      </div>
    </div>
  );
}
