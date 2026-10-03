import { Figures, Section, Split, StepStrip } from './blocks';
import type { Photo } from './photos';

export function ProgramPhilosophy({ trainingPhoto, trainingRatio }: { trainingPhoto: Photo; trainingRatio?: string }) {
  return (
    <>
      <Section tone="light" labelledBy="philosophy-title">
        <div className="uk-sec-grid">
          <h2 id="philosophy-title" className="uk-sec-title">Our <span>Philosophy</span></h2>
          <p className="uk-sec-lead">
            We build partnerships with our student-athletes based on trust and communication. Without them, you will not feel safe enough to challenge yourself and truly risk failure, and risking failure is how you become world-class. Our staff are active learners and engaged teachers who run a high-feedback environment. Our team is fun, committed and supportive. They bleed blue and put teammates ahead of themselves to make this program the best it has ever been.
          </p>
        </div>
      </Section>

      <Section tone="ink" labelledBy="training-title">
        <Split photo={trainingPhoto} ratio={trainingRatio}>
          <h2 id="training-title" className="uk-sec-title">Training <span>Philosophy</span></h2>
          <p>
            Live heart rates. Glucose testing. Lactate testing. Strength, postural and mobility analysis. We assess your individual physiology and use it to program your next breakthrough. We are not a cookie-cutter program. Your data decides your training.
          </p>
        </Split>
        <StepStrip label="Training cycle" items={['Assess', 'Program', 'Measure', 'Reassess']} />
      </Section>

      <Section tone="navy" labelledBy="technical-title">
        <div className="uk-sec-grid">
          <h2 id="technical-title" className="uk-sec-title">Technical <span>Philosophy</span></h2>
          <p className="uk-sec-lead">
            Our technical model is based on nature&apos;s principles. We work with the water, not against it, creating effective impulses and space to build speed and minimize drag, while respecting the mental, emotional and anatomical reality of every athlete.
          </p>
        </div>
      </Section>
    </>
  );
}

export function Classroom({ figures }: { figures: Array<{ value: string; label: string }> }) {
  return (
    <Section tone="white" labelledBy="classroom-title">
      <h2 id="classroom-title" className="uk-sec-title">In the <span>Classroom</span></h2>
      <Figures items={figures} />
      <p className="uk-sec-closer">
        Our recent alumni are doctors, lawyers, entrepreneurs, financial advisors, physical therapists and teachers. At UK, anything is possible.
      </p>
    </Section>
  );
}
