import { Figures, GalleryStrip, QuoteBlock, Section, SubpageLayout, Trajectory } from '@/site/blocks';
import { MENS_ROSTER_URL, SWIMSWAM_RELAY_URL } from '@/site/config';
import { photos } from '@/site/photos';
import { Classroom, ProgramPhilosophy } from '@/site/program';

export default function MensPage() {
  return (
    <SubpageLayout
      title="Men's Swimming & Diving"
      eyebrow="Men's Program"
      heading="Ranked 10th."
      accent="Not for long."
      sub="From zero NCAA points to 52 in two seasons. The climb is the point."
      hero={photos.swimmerScreamCloseup}
      heroPosition="60% 30%"
      teammatesUrl={MENS_ROSTER_URL}
    >
      <QuoteBlock
        photo={photos.relayTeamWalkout}
        quote="My favorite thing at Kentucky is what seems like the unlimited resources the university gives us to make sure our four years are the best they can possibly be. Whether that is the campus itself, the academic resources, or the athletic resources."
        cite="Ryan Merani '26"
      />
      <ProgramPhilosophy trainingPhoto={photos.swimmerFocusOnBlock} />
      <Classroom
        figures={[
          { value: '3.42', label: "Spring '26 GPA" },
          { value: '3.31', label: "Fall '25 GPA" },
          { value: '18', label: '4.0 GPAs last semester' },
        ]}
      />
      <Trajectory
        photo={photos.relayTeamCelebrationBlocks}
        columns={[
          {
            title: 'SEC',
            rows: [
              { season: '2023-24', result: '10th', projected: false },
              { season: '2024-25', result: '9th', projected: false },
              { season: '2025-26', result: '8th', projected: false },
              { season: '2026-27', result: 'Top 5', projected: true },
              { season: '2027-28', result: 'Top 3', projected: true },
              { season: '2028-29', result: 'Top 3', projected: true },
              { season: '2029-30', result: 'SEC Champions', projected: true },
            ],
          },
          {
            title: 'NCAA',
            rows: [
              { season: '2023-24', result: '0 points', projected: false },
              { season: '2024-25', result: '20th (30 pts)', projected: false },
              { season: '2025-26', result: '18th (52 pts)', projected: false },
              { season: '2026-27', result: 'Top 10', projected: true },
              { season: '2027-28', result: 'Top 10', projected: true },
              { season: '2028-29', result: 'Top 5', projected: true },
              { season: '2029-30', result: 'Top 5', projected: true },
            ],
          },
        ]}
      />
      <Section tone="white" labelledBy="relay-title">
        <h2 id="relay-title" className="uk-sec-title">First NCAA top-eight relay <span>since 2010.</span></h2>
        <p className="uk-sec-lead">
          At the 2026 NCAA Championships, Lysander Osman, Adomas Gatulis, Javier Lopez and Falemana Tuufui swam the 200 medley relay to an 8th place finish in 1:22.00. The program record was 1:24.98 at the start of the season. They took about three seconds off it in one year, and the relay credits sprint coach Cauli Bedran for the jump.
        </p>
        <Figures
          items={[
            { value: '8th', label: '200 medley relay at 2026 NCAAs' },
            { value: '1:22.00', label: 'NCAA final time' },
            { value: '-3 sec', label: 'Faster in one season' },
          ]}
        />
        <p className="uk-sec-closer">
          <a className="uk-primary-button" href={SWIMSWAM_RELAY_URL} target="_blank" rel="noopener noreferrer" data-testid="link-swimswam-relay">
            Read the story on SwimSwam
          </a>
        </p>
      </Section>
      <GalleryStrip photo={photos.swimmersHighFive} />
    </SubpageLayout>
  );
}
