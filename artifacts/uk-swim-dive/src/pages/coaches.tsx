import { ImageBand, Section, Split, StepStrip, SubpageLayout } from '@/site/blocks';
import { photos } from '@/site/photos';

// TODO: add Head Coach Bret Lundgaard and the rest of the staff when headshots arrive.
const staff = [photos.coachBenKeast, photos.coachAdrianaContreras];

export default function CoachesPage() {
  return (
    <SubpageLayout
      title="Coaching Staff"
      eyebrow="Coaching Staff"
      heading="Coaches who bet on"
      accent="your development."
      sub="Championship standards. A team that feels like family."
      hero={photos.coachesDeck}
      heroPosition="50% 35%"
    >
      <Section tone="light" labelledBy="coach-philosophy-title">
        <Split photo={photos.coachPoolside}>
          <h2 id="coach-philosophy-title" className="uk-sec-title"><span>Philosophy</span></h2>
          <p>
            Swimming at Kentucky means coaches who drive your development and guide you through your most transformative years. We believe in positive mentorship. Our goal is for every student-athlete to graduate in four years ready for their next chapter. We care about the whole person: academic meetings, study hall, and the tools and resources to take care of your mental health. That is the top priority of our staff.
          </p>
        </Split>
      </Section>

      <Section tone="ink" labelledBy="values-title">
        <h2 id="values-title" className="sr-only">Our values</h2>
        <StepStrip label="Our values" items={['Character', 'Integrity', 'Knowledge', 'Stewardship', 'Competitive Greatness']} />
      </Section>

      <Section tone="white" labelledBy="staff-title">
        <h2 id="staff-title" className="uk-sec-title"><span>Staff</span></h2>
        <div className="uk-staff-grid">
          {staff.map((coach) => (
            <figure className="uk-staff-card" key={coach.src}>
              <img src={coach.src} alt={coach.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </Section>

      <ImageBand photo={photos.coachesFansCheering}>
        <p className="uk-band-statement">
          If you have ever dreamed of championship coaches who focus on your development, in an environment where your team feels like family, you are in the right place.
        </p>
      </ImageBand>
    </SubpageLayout>
  );
}
