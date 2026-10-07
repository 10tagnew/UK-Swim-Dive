import type { CSSProperties } from 'react';
import { photos, type Photo } from './photos';

export type Athlete = {
  slug: string;
  name: string;
  country: string;
  countryCode: string;
  headshot?: Photo;
  flagGraphic?: Photo;
  honors: string[];
  quote?: string;
  quoteNative?: string;
  nativeLanguage?: string;
};

export const internationalAthletes: Athlete[] = [
  {
    slug: 'esteban-nunez-del-prado',
    name: 'Esteban Nunez del Prado Pizarro',
    country: 'Bolivia',
    countryCode: 'BO',
    headshot: photos.intlHeadshotEstebanNunezDelPrado,
    flagGraphic: photos.intlFlagEstebanNunezDelPrado,
    honors: [
      '2024 Olympic Games',
      '2024 World Aquatics Championships',
      '2023 World Aquatics Championships',
      '2023 Pan American Games',
      '2022 World Short Course Championships',
    ],
    quote:
      "I chose Kentucky because it's a perfect place to combine my swimming career and personal development. The team and coaching staff made me feel welcome and I am excited to be a part of this amazing team.",
  },
  {
    slug: 'fernanda-de-goeij',
    name: 'Fernanda de Goeij',
    country: 'Brazil',
    countryCode: 'BR',
    headshot: photos.intlHeadshotFernandaDeGoeij,
    flagGraphic: photos.intlFlagFernandaDeGoeij,
    honors: ['2019 Pan American Games', '2018 Summer Youth Olympics', '2018 South American Games', '2017 FINA World Junior Championships'],
    quote:
      'Kentucky is special to me because it is a place with amazing people, teammates, and coaches. It reminds me every day to be grateful and happy to be here.',
    quoteNative:
      'Kentucky é especial para mim porque é um lugar com pessoas incríveis, companheiros de equipe e treinadores. Isso me lembra todos os dias de ser grata e feliz por estar aqui.',
    nativeLanguage: 'Portuguese',
  },
  {
    slug: 'caue-gluck',
    name: 'Caue Gluck',
    country: 'Brazil',
    countryCode: 'BR',
    flagGraphic: photos.intlFlagCaueGluck,
    honors: [],
    quote:
      'I chose Kentucky because it felt like home. For me, feeling that you belong to a place is very important, and I feel this here. Also, all the coaches always care about our well-being and want our best.',
    quoteNative:
      'Eu me senti em casa. Para mim o sentimento de pertencimento a um lugar é muito importante e eu sinto isso aqui. Também, todos os técnicos sempre se preocupam com nosso bem-estar e querem o nosso melhor.',
    nativeLanguage: 'Portuguese',
  },
  {
    slug: 'sharon-guerrero-cho',
    name: 'Sharon Guerrero Cho',
    country: 'Mexico',
    countryCode: 'MX',
    headshot: photos.intlHeadshotSharonGuerreroCho,
    honors: [
      '2025 World Championships',
      '2025 Pan Am Aquatics',
      '2025 Junior Pan American Games',
      '2024 World Junior Championships',
      '2024 CCCAN Monterrey',
      '2023 CCCAN San Salvador',
    ],
  },
  {
    slug: 'max-berg',
    name: 'Max Berg',
    country: 'France',
    countryCode: 'FR',
    headshot: photos.intlHeadshotMaxBerg,
    flagGraphic: photos.intlFlagMaxBerg,
    honors: ['2023 World Championships'],
    quote:
      "The Kentucky swim team is special to me because I am constantly surrounded by good people who work hard with a common goal. We all have ambition, but we know it is crucial to preserve everyone's well-being to move forward step by step. I feel like this team keeps improving, and I'm proud to contribute to it. My goal is to see Kentucky in the top 15 in the country. It gives me the feeling of being part of something bigger than me, a common project where each swimmer leaves their mark.",
  },
  {
    slug: 'falemana-tuufui',
    name: 'Falemana Tuufui',
    country: 'France',
    countryCode: 'FR',
    // TODO: the flag graphic prints "Falemana Lopez", the roster says Falemana Tuufui. Waiting on a
    // corrected graphic; until then flagFraming crops the printed name out and our own text shows the right name.
    flagGraphic: photos.intlFlagFalemanaTuufui,
    honors: [
      '2025 U23 European Championships',
      '2023 LEN European Junior Championships',
      '2022 European Junior Swimming Championships',
      '2022 European Youth Olympic Festival',
    ],
    quote: 'I chose Kentucky because the goals of the team fit perfectly with mine. I know it is a place I can trust and thrive.',
    quoteNative:
      "J'ai choisi Kentucky parce que j'avais et j'ai toujours l'impression que votre projet correspond parfaitement au mien, et je sens aussi que vous êtes une grosse équipe sur qui je peux compter, et bien sûr vous pourrez aussi compter sur moi.",
    nativeLanguage: 'French',
  },
  {
    slug: 'lysander-osman',
    name: 'Lysander Osman',
    country: 'France',
    countryCode: 'FR',
    flagGraphic: photos.intlFlagLysanderOsman,
    honors: ['2025 U23 European Championships'],
    quote: 'I chose Kentucky for the great team and coaches and to benefit from a fantastic education.',
    quoteNative:
      "J'ai choisi l'université de Kentucky car l'équipe et les coaches ont l'air géniaux, mais aussi pour pouvoir profiter d'un bon enseignement pour mon double projet sport-études.",
    nativeLanguage: 'French',
  },
  {
    slug: 'justin-peresse',
    name: 'Justin Peresse',
    country: 'France',
    countryCode: 'FR',
    headshot: photos.intlHeadshotJustinPeresse,
    flagGraphic: photos.intlFlagJustinPeresse,
    honors: [],
    quote:
      'I chose Kentucky because I wanted to be part of a high-level team with big goals. The relationship with the coaches is very important to me, and I felt from the beginning that the coaches here would fit me perfectly. Being part of Big Blue Nation is what makes Kentucky special. You see athletes from other sports every day and learn from them. And the fans are crazy, especially at Rupp Arena.',
  },
  {
    slug: 'jonathan-rom',
    name: 'Jonathan Rom',
    country: 'Israel',
    countryCode: 'IL',
    headshot: photos.intlHeadshotJonathanRom,
    flagGraphic: photos.intlFlagJonathanRom,
    honors: [
      '2022 Maccabi Games',
      '2017 Maccabi Games',
      '2017 European Junior Championships',
      '2017 Mediterranean Championships',
      '2016 Mediterranean Championships',
    ],
    quote:
      'I have been here only a little over two months and I can already feel the dedication, motivation and will from our coaches to change this program for the better. Something a lot of places lack these days.',
  },
  {
    slug: 'adomas-gatulis',
    name: 'Adomas Gatulis',
    country: 'Lithuania',
    countryCode: 'LT',
    headshot: photos.intlHeadshotAdomasGatulis,
    flagGraphic: photos.intlFlagAdomasGatulis,
    honors: ['2023 European Championships', '2023 European Junior Championships'],
    quote:
      'The best thing about studying and swimming at Kentucky is the people surrounding me in the pool. I would describe our team as hungry, because most people here are hungry for success.',
    quoteNative:
      'Geriausias dalykas studijuojant ir plaukiant Kentukyje yra mane supantys žmonės baseine. Kentukis padėjo toliau siekti užsibrėžtų tikslų. Mūsų komandą apibūdinčiau kaip „Alkaną“, nes dauguma žmonių yra alkani sėkmės.',
    nativeLanguage: 'Lithuanian',
  },
  {
    slug: 'dziugas-miskinis',
    name: 'Dziugas Miskinis',
    country: 'Lithuania',
    countryCode: 'LT',
    headshot: photos.intlHeadshotDziugasMiskinis,
    flagGraphic: photos.intlFlagDziugasMiskinis,
    honors: ['2025 LEN European U23 Championships', '2024 European Aquatics Championships', '2023 LEN European Junior Championships'],
    quote:
      'Kentucky has a supportive environment that nurtures growth and accountability, where we challenge each other to improve. In every sense, it feels like family.',
  },
  {
    // TODO: the live site's text says "Javier Nunez" but the photo files and graphic say Javier Lopez. Confirm the correct surname.
    slug: 'javier-lopez',
    name: 'Javier Lopez',
    country: 'Spain',
    countryCode: 'ES',
    headshot: photos.intlHeadshotJavierLopez,
    flagGraphic: photos.intlFlagJavierLopez,
    honors: [
      '2024 European Junior Swimming Championships',
      '2023 World Junior Swimming Championships',
      '2023 European Junior Swimming Championships',
      '2022 European Youth Olympic Festival',
    ],
    quote:
      'I chose Kentucky for several reasons: the good feeling I got from the coaches on the recruiting calls, Kentucky fit what I was looking for, and the opportunity to compete in one of the top conferences in the country while continuing my education at a high level.',
    quoteNative:
      'Elegí Kentucky por varias razones. Por las buenas sensaciones que me dieron los entrenadores en las llamadas del proceso de reclutamiento, porque Kentucky encajaba con lo que estaba buscando y, por último, por la oportunidad de competir en una de las mejores conferencias del país y continuar mis estudios a un alto nivel.',
    nativeLanguage: 'Spanish',
  },
  {
    slug: 'carson-hick',
    name: 'Carson Hick',
    country: 'United States',
    countryCode: 'US',
    headshot: photos.intlHeadshotCarsonHick,
    flagGraphic: photos.intlFlagCarsonHick,
    honors: ['2025 World University Games'],
    quote:
      'My favorite thing about Kentucky is all the opportunities we get as student-athletes. From competing in the best conference to resources like nutrition, academic support and athletic training, we have everything we need to be elite.',
  },
  {
    slug: 'chris-nagy',
    name: 'Chris Nagy',
    country: 'United States',
    countryCode: 'US',
    headshot: photos.intlHeadshotChrisNagy,
    flagGraphic: photos.intlFlagChrisNagy,
    honors: ['2023 World University Games'],
    quote:
      'Kentucky is special to me because of the people. It really does feel like a second family. I can be open and honest with my teammates, and they know they can be the same with me. My coaches do everything they can to support me, and I do everything I can to exceed their expectations.',
  },
  {
    slug: 'levi-sandidge',
    name: 'Levi Sandidge',
    country: 'United States',
    countryCode: 'US',
    headshot: photos.intlHeadshotLeviSandidge,
    flagGraphic: photos.intlFlagLeviSandidge,
    honors: ['2026 FISU America Games', '2023 National Team', '2022 National Junior Team'],
    quote: 'My favorite thing about being a swimmer at Kentucky is the coaching staff. They bring a lot of energy to every practice.',
  },
];

export const languageCodes: Record<string, string> = {
  Portuguese: 'pt-BR',
  French: 'fr',
  Lithuanian: 'lt',
  Spanish: 'es',
};

// Framing overrides for flag graphics whose printed text should stay out of frame.
// cropTop: share of the graphic's height hidden from the top. featurePosition: object-position for the desktop band.
export const flagFraming: Record<string, { cropTop: number; featurePosition: string }> = {
  'falemana-tuufui': { cropTop: 0.15, featurePosition: '50% 75%' },
};

export function cropStyle(slug: string): CSSProperties | undefined {
  const framing = flagFraming[slug];
  if (!framing) return undefined;
  return { '--crop-top': String(framing.cropTop) } as unknown as CSSProperties;
}

export function firstName(name: string) {
  return name.split(' ')[0];
}

export function hasFeature(athlete: Athlete) {
  return Boolean(athlete.flagGraphic && athlete.quote);
}
