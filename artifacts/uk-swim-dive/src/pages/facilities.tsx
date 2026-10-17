import { ArrowUpRight } from 'lucide-react';
import { FeatureList, Section, Split, SubpageLayout } from '@/site/blocks';
import { VIRTUAL_TOUR_URL } from '@/site/config';
import { photos } from '@/site/photos';

export default function FacilitiesPage() {
  return (
    <SubpageLayout
      title="Facilities"
      eyebrow="Facilities"
      heading="Where it all"
      accent="comes together."
      sub="Everything you need is less than a five-minute walk apart."
      hero={photos.natatoriumAerial}
    >
      <Section tone="light" labelledBy="lancaster-title">
        <Split photo={photos.natatoriumMeetAerial}>
          <h2 id="lancaster-title" className="uk-sec-title">Lancaster <span>Aquatic Center</span></h2>
          <p>Opened March 29, 1989, Lancaster Aquatic Center is home to Kentucky Swimming &amp; Diving.</p>
          <FeatureList
            items={[
              '8 lanes',
              'Olympic-size 50-meter pool',
              'Team room with leather couches and TV',
              'Training room with treatment tables',
              'Under a 5-minute walk to the dorms, weight room, training room and nutrition lab',
            ]}
          />
        </Split>
      </Section>

      <Section tone="ink" labelledBy="nutter-title">
        <Split photo={photos.coachResistanceBand} reverse>
          <h2 id="nutter-title" className="uk-sec-title">Nutter <span>Training Facility</span></h2>
          <FeatureList
            items={[
              '9,000 sq ft weight room',
              '20 Olympic lifting platforms',
              'Connected to the nutrition lab and athletic training room',
            ]}
          />
        </Split>
      </Section>

      <Section tone="light" labelledBy="nutrition-title">
        <Split photo={photos.facilityNutritionLab} ratio="16 / 9">
          <h2 id="nutrition-title" className="uk-sec-title">Nutrition <span>Lab</span></h2>
          <p>The fueling station inside the Nutter Training Facility, with sports nutrition support built into your training day.</p>
          <FeatureList
            items={[
              'Free for all athletes',
              '5 complete kitchens with ovens and stovetops',
              'Stocked with fresh food to cook from scratch',
              'A staff of nutritionists who teach you to cook and fuel your body',
            ]}
          />
        </Split>
      </Section>

      <Section tone="ink" labelledBy="woodland-title">
        <Split photo={photos.facilityWoodlandGlenIv} reverse>
          <h2 id="woodland-title" className="uk-sec-title">Woodland <span>Glen IV</span></h2>
          <p>Where student-athletes live. A modern, suite-style residence hall a short walk from campus and the pool.</p>
          <FeatureList
            items={[
              'Built in 2015',
              'Fully furnished 2-bedroom suites with full bath',
              'Shared kitchen and living area',
              'Full extra-long Tempur-Pedic mattress',
            ]}
          />
        </Split>
      </Section>

      <Section tone="white" className="uk-sec--closing" labelledBy="tour-title">
        <h2 id="tour-title" className="uk-sec-title">Visit campus, <span>virtually.</span></h2>
        {VIRTUAL_TOUR_URL && (
          <a className="uk-primary-button" href={VIRTUAL_TOUR_URL} data-testid="link-virtual-tour">
            Take a Virtual Tour <ArrowUpRight size={16} />
          </a>
        )}
      </Section>
    </SubpageLayout>
  );
}
