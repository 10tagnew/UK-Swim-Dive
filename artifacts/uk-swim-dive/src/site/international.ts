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
    slug: 'dziugas-miskinis',
    name: 'Dziugas Miskinis',
    country: 'Lithuania',
    countryCode: 'LT',
    headshot: photos.intlHeadshotDziugasMiskinis,
    flagGraphic: photos.intlFlagDziugasMiskinis,
    honors: ['2026 European Championships', '2025 LEN European U23 Championships', '2024 European Aquatics Championships', '2023 LEN European Junior Championships'],
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
    honors: ['2025 US National Team', '2025 World University Games'],
    quote:
      'My favorite thing about Kentucky is all the opportunities we get as student-athletes. From competing in the best conference to resources like nutrition, academic support and athletic training, we have everything we need to be elite.',
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
  {
    slug: 'siim-keskula',
    name: 'Siim Keskula',
    country: 'Estonia',
    countryCode: 'EE',
    flagGraphic: photos.intlFlagSiimKeskula,
    honors: ['2026 European Championships', '2025 European Short Course Championships', '2025 FISU World University Games', '2025 European Junior Championships', '2024 European Junior Championships'],
    quote:
      'I chose Kentucky for the amazing team chemistry and the vision the coaches have for the future.',
  },
  {
    slug: 'yasmin-silva',
    name: 'Yasmin Silva',
    country: 'Peru',
    countryCode: 'PE',
    flagGraphic: photos.intlFlagYasminSilva,
    honors: ['2026 South American Games, Bronze 200 fly', '2025 Pan American Junior Games, Bronze 200 fly', '2025 World Aquatics Championships', '2025 World Aquatics Junior Championships', '2024 World Aquatics Short Course Championships', '2023 Pan American Games'],
    quote:
      'The coaches really care about the internationals’ goals outside of the university’s program.',
    quoteNative:
      'La versatilidad y compresión que tienen con sus nadadores y como también les importa las metas de los internacionales fuera de los programas de la universidad.',
    nativeLanguage: 'Spanish',
  },
  {
    slug: 'filippo-bertoni',
    name: 'Filippo Bertoni',
    country: 'Italy',
    countryCode: 'IT',
    flagGraphic: photos.intlFlagFilippoBertoni,
    honors: ['2025 European U23 Championships, Bronze 1500 free', '2024 European Junior Championships, Gold 4x200 free', '2023 World Junior Championships, Bronze 400 free', '2023 European Junior Championships, Gold 4x200 free', '2022 World Junior Championships, Gold 4x200 free, Bronze 200 free', '2022 European Junior Championships, Gold 4x200 free', '2022 European Youth Olympic Festival, Gold 200 free, 1500 free and 4x100 free, Silver 400 free', '2021 Comen Cup, Gold 1500 free and 4x200 free, Silver 400 free, Bronze 200 free'],
    quote:
      'I chose Kentucky because it is the best place for me and for my future. One thing special about Kentucky is the people. The teammates and the coaches are special, and it is like I have known them for years. They made me feel welcome from the beginning, like a family.',
  },
  {
    slug: 'karrington-hansen',
    name: 'Karrington Hansen',
    country: 'United States',
    countryCode: 'US',
    flagGraphic: photos.intlFlagKarringtonHansen,
    honors: ['2026 World Aquatics Junior Open Water World Championships, Bronze 4x1500 relay'],
    quote:
      "I chose Kentucky because from the moment I stepped on campus, it felt like home. The atmosphere surrounding the school and team was incredibly welcoming, and I knew it was a place where I could thrive. The coaching staff is invested in the success of the team and in developing each athlete not only as a competitor but also as a person. One thing I especially love and appreciate about Kentucky is the incredible amount of resources and support provided to student-athletes, allowing us to succeed both in and out of the pool. I truly couldn't imagine a better place to call home!",
  },
  {
    slug: 'stephan-steverink',
    name: 'Stephan Steverink',
    country: 'Brazil',
    countryCode: 'BR',
    flagGraphic: photos.intlFlagStephanSteverink,
    honors: ['2026 Pan Pacific Championships', '2026 South American Games, 4 gold', '2025 Pan American Junior Games, 5 gold', '2025 World Championships, Singapore', '2023 World Championships, Fukuoka', '2022 World Championships, Budapest', '2022 World Junior Championships, 1 gold, 1 silver'],
    quote:
      'I chose Kentucky because of the synergy between the coaches and the athletes, and the encouragement of giving feedback no matter what. It is also a really strong team, and everybody is there to get better and win. My favorite thing is the color blue (my favorite color) and how everything is so organized.',
    quoteNative:
      'Eu escolhi Kentucky por conta da sinergia que os técnicos têm com os atletas, e o encorajamento de dar o feedback não importa o que. Também o time é muito forte, todos estão lá para melhorar e ganhar. A minha coisa favorita em Kentucky é a cor azul, já que a minha cor favorita é azul, e também como tudo é muito bem organizado.',
    nativeLanguage: 'Portuguese',
  },
  {
    slug: 'valeria-tarin',
    name: 'Valeria Tarin',
    country: 'Mexico',
    countryCode: 'MX',
    flagGraphic: photos.intlFlagValeriaTarin,
    honors: ['2026 Junior Pan Pacific Championships', 'CCCAN Championships'],
    quote:
      'I love how Kentucky feels like a family and has the energy for competing like winners.',
    quoteNative:
      'Me gusta mucho la energía que tienen, te motivan a nadar más rápido y te enorgulleces de poder representar a este equipo y querer ganar por ellos también.',
    nativeLanguage: 'Spanish',
  },
  {
    slug: 'felix-dressel-de-bruyn',
    name: 'Felix Dressel-De Bruyn',
    country: 'Australia',
    countryCode: 'AU',
    flagGraphic: photos.intlFlagFelixDresselDeBruyn,
    honors: [],
    quote:
      'I chose Kentucky because of their team-oriented spirit towards racing and training. They are a committed team to help me achieve my goals to one day represent Australia.',
  },
  {
    // TODO: the athlete's form spells her name Rugile, the flag graphic prints Rugilee. Confirm which spelling is correct.
    slug: 'rugile-abracinskaite',
    name: 'Rugile Abracinskaite',
    country: 'Lithuania',
    countryCode: 'LT',
    flagGraphic: photos.intlFlagRugileAbracinskaite,
    honors: ['2025 European Junior Championships', '2024 European Junior Championships'],
    quote:
      'I loved the coaches and the atmosphere they presented with the team. I loved the resources Kentucky has to offer, and I felt safe.',
    quoteNative:
      'Turėjau gerą ryšį su treneriais, atmosfera buvo sveika ir pozityvi, komanda draugiška, resursai, kurie buvo pristatyti, tenkino, jaučiausi saugi.',
    nativeLanguage: 'Lithuanian',
  },
  {
    slug: 'nikolass-deicmans',
    name: 'Nikolass Deicmans',
    country: 'Latvia',
    countryCode: 'LV',
    flagGraphic: photos.intlFlagNikolassDeicmans,
    honors: ['2026 European Championships', '2025 World Championships', '2025 European U23 Championships', '2025 European Junior Championships', '2025 European Youth Olympic Festival'],
    quote:
      "My favorite thing in Kentucky is the atmosphere. It is different from what I'm used to back home.",
  },
  {
    slug: 'gabrielle-idle-beavers',
    name: 'Gabrielle Idle-Beavers',
    country: 'Great Britain',
    countryCode: 'GB',
    flagGraphic: photos.intlFlagGabrielleIdleBeavers,
    honors: ['2026 Commonwealth Games', '2026 European Junior Championships, Bronze 50 breast'],
    quote:
      "I love the team environment and the atmosphere that's created by both the coaches and athletes.",
  },
  {
    slug: 'margherita-balli',
    name: 'Margherita Balli',
    country: 'Italy',
    countryCode: 'IT',
    flagGraphic: photos.intlFlagMargheritaBalli,
    honors: [],
    quote:
      'I chose Kentucky because of its strong values and team culture. What makes our team unique is our incredible bond and how we always lift each other up. The coaches and team value you as a person, inspire us to dream big in the pool, and help us reach our full potential both in and out of the water.',
  },
  {
    slug: 'laura-revilla',
    name: 'Laura Revilla',
    country: 'Spain',
    countryCode: 'ES',
    flagGraphic: photos.intlFlagLauraRevilla,
    honors: ['2025 European Junior Championships', '2024 European Junior Championships', '2023 European Youth Olympic Festival'],
    quote:
      "I chose Kentucky because it's a place where I can enjoy swimming while pursuing the degree I love. Also, when I spoke with the coaches, they gave me great vibes and I felt I could bring positive value to the team. I love the team we have because we all share the same goal, and you can see that in every meet by the way we cheer for and support each other. My favorite part of being here at Kentucky is meeting new people and getting to enjoy the journey with the friends you make along the way.",
    quoteNative:
      'He elegido Kentucky porque es un sitio en el que puedo disfrutar nadando y a la vez estudiar la carrera que me gusta. Además, cuando hablé con los coaches me transmitieron muy buenas sensaciones y sentí que podía aportar aspectos positivos al equipo. Me encanta el equipo que tenemos, porque todos tenemos un mismo objetivo y eso se puede ver en cada competición por cómo nos animamos y apoyamos entre todos. Mi parte favorita de estar aquí en Kentucky es poder conocer a gente nueva y poder disfrutar el camino con los amigos que haces.',
    nativeLanguage: 'Spanish',
  },
  {
    // Graphic only: no roster form was received for this athlete yet.
    slug: 'gabriel-perdigao',
    name: 'Gabriel Perdigao',
    country: 'Brazil',
    countryCode: 'BR',
    flagGraphic: photos.intlFlagGabrielPerdigao,
    honors: [],
  },
  {
    slug: 'gianna-kenrick',
    name: 'Gianna Kenrick',
    country: 'United States',
    countryCode: 'US',
    flagGraphic: photos.intlFlagGiannaKenrick,
    honors: [],
  },
  {
    slug: 'zalika-methula',
    name: 'Zalika Methula',
    country: 'South Africa',
    countryCode: 'ZA',
    flagGraphic: photos.intlFlagZalikaMethula,
    honors: [],
  },
  {
    slug: 'zea-wetzlaugk',
    name: 'Zea Wetzlaugk',
    country: 'Hungary',
    countryCode: 'HU',
    flagGraphic: photos.intlFlagZeaWetzlaugk,
    honors: [],
  },
];

export const languageCodes: Record<string, string> = {
  Portuguese: 'pt-BR',
  French: 'fr',
  Lithuanian: 'lt',
  Spanish: 'es',
};

// Framing overrides for flag graphics whose printed text should stay out of frame.
// cropTop: share of the graphic's height hidden from the top. None needed for the current roster.
export const flagFraming: Record<string, { cropTop: number }> = {};

// Side of the "In Their Words" quote card, opposite the name printed on each flag graphic.
export const featureCardSide: Record<string, 'left' | 'right'> = {
  'lysander-osman': 'left',
  'justin-peresse': 'left',
  'dziugas-miskinis': 'right',
  'javier-lopez': 'left',
  'carson-hick': 'right',
  'levi-sandidge': 'left',
  'siim-keskula': 'left',
  'filippo-bertoni': 'left',
  'karrington-hansen': 'left',
  'stephan-steverink': 'left',
  'felix-dressel-de-bruyn': 'left',
  'rugile-abracinskaite': 'left',
  'nikolass-deicmans': 'left',
  'gabrielle-idle-beavers': 'left',
  'margherita-balli': 'left',
  'laura-revilla': 'left',
  'valeria-tarin': 'left',
  'yasmin-silva': 'left',
};

// Hero feature on /international: senior-level international athletes and the honor shown on each card.
// Every honor here is copied from that athlete's honors list above.
export const heroMedalists: Array<{ slug: string; honor: string }> = [
  { slug: 'stephan-steverink', honor: '2025 World Championships, Singapore' },
  { slug: 'yasmin-silva', honor: '2025 World Aquatics Championships' },
  { slug: 'nikolass-deicmans', honor: '2025 World Championships' },
  { slug: 'siim-keskula', honor: '2026 European Championships' },
  { slug: 'dziugas-miskinis', honor: '2026 European Championships' },
];

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
