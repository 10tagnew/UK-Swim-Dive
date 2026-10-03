import { GalleryStrip, QuoteBlock, SubpageLayout, Trajectory } from '@/site/blocks';
import { MENS_RECRUIT_FORM_URL } from '@/site/config';
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
      recruitFormUrl={MENS_RECRUIT_FORM_URL}
      recruitFormLabel="Men's Recruit Form"
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
      <GalleryStrip photo={photos.swimmersHighFive} />
    </SubpageLayout>
  );
}
