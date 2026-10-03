import { Section, Split, SubpageLayout } from '@/site/blocks';
import { photos } from '@/site/photos';

const coreValues = ['Connect.', 'Respect.', 'Protect.', 'Project.'];
const gallery = [photos.swimmersEmergeCheer, photos.teamTrophyDuo, photos.teammatesMedalHug];

export default function CulturePage() {
  return (
    <SubpageLayout
      title="Team Culture"
      eyebrow="Team Culture"
      heading="Competitive and fun."
      accent="On purpose."
      sub="Be your personality. Race your personality."
      hero={photos.teamCelebration}
      heroPosition="55% 30%"
    >
      <Section tone="light" labelledBy="vision-title">
        <div className="uk-sec-grid">
          <h2 id="vision-title" className="uk-sec-title">A world-class <span>vision.</span></h2>
          <p className="uk-sec-lead">
            Our main objective is to help our student-athletes develop at a higher rate than any other program in the country.
          </p>
        </div>
      </Section>

      <Section tone="ink" labelledBy="core-values-title">
        <h2 id="core-values-title" className="uk-kicker">Core Values</h2>
        <ul className="uk-values-big">
          {coreValues.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </Section>

      <Section tone="light" labelledBy="belonging-title">
        <Split photo={photos.teammatesTowelingOff} reverse>
          <h2 id="belonging-title" className="uk-sec-title"><span>Belonging</span></h2>
          <p>
            For you to be your best, you need to feel supported being your authentic self. Our team is genuine in its support of individual differences, and those differences add to the experience you have as a student-athlete. We love to compete, and we are looking for people who want to find out how great they can be.
          </p>
        </Split>
      </Section>

      <Section tone="white" labelledBy="gallery-title">
        <h2 id="gallery-title" className="sr-only">Team photos</h2>
        <div className="uk-photo-grid">
          {gallery.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </Section>
    </SubpageLayout>
  );
}
