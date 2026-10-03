import { GalleryStrip, QuoteBlock, SubpageLayout, TrajectoryTargets } from '@/site/blocks';
import { WOMENS_RECRUIT_FORM_URL } from '@/site/config';
import { photos } from '@/site/photos';
import { Classroom, ProgramPhilosophy } from '@/site/program';

export default function WomensPage() {
  return (
    <SubpageLayout
      title="Women's Swimming & Diving"
      eyebrow="Women's Program"
      heading="Next up:"
      accent="the top of the SEC."
      sub="A team that competes like family and trains like it has something to prove."
      hero={photos.womensRelayTeamSmile}
      heroPosition="60% 35%"
      recruitFormUrl={WOMENS_RECRUIT_FORM_URL}
      recruitFormLabel="Women's Recruit Form"
    >
      <QuoteBlock
        photo={photos.womensRelayBenchLaughing}
        quote="My favorite thing about being a swimmer at Kentucky is the family I have made. Kentucky has given me the greatest support system and pushes me to be a better student, athlete and person. Every person has a place on this team and is given so many opportunities."
        cite="Grace Frericks '26"
      />
      <ProgramPhilosophy trainingPhoto={photos.swimmerFistRaiseBlocks} trainingRatio="4 / 5" />
      <Classroom
        figures={[
          { value: '3.77', label: "Fall '25 GPA" },
          { value: '3.68', label: "Spring '26 GPA" },
          { value: '18', label: '4.0 GPAs last semester' },
        ]}
      />
      {/* TODO: confirm with Coach Jordan that Top 5 is the SEC goal and Top 15 the NCAA goal. The live site does not label them. */}
      <TrajectoryTargets
        targets={[
          { value: 'Top 5', label: 'SEC' },
          { value: 'Top 15', label: 'NCAA' },
        ]}
      />
      <GalleryStrip photo={photos.swimmerBackstrokeSplash} />
    </SubpageLayout>
  );
}
