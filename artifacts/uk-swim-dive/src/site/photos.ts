import campusLibraryAerial from '@assets/campus-library-aerial.webp';
import careerFairNetworking from '@assets/career-fair-networking.webp';
import coachAdrianaContreras from '@assets/coach-adriana-contreras.png';
import coachBenKeast from '@assets/coach-ben-keast.png';
import coachPoolside from '@assets/coach-poolside.jpg';
import coachResistanceBand from '@assets/coach-resistance-band.jpg';
import coachSwimmerHug from '@assets/coach-swimmer-hug.jpg';
import coachesDeck from '@assets/coaches-deck.jpg';
import coachesFansCheering from '@assets/coaches-fans-cheering.webp';
import coachesSwimmersCheeringRope from '@assets/coaches-swimmers-cheering-rope.webp';
import natatoriumAerial from '@assets/natatorium-aerial.webp';
import natatoriumMeetAerial from '@assets/natatorium-meet-aerial.webp';
import poolRaceBanners from '@assets/pool-race-banners.webp';
import relayTeamCelebrationBlocks from '@assets/relay-team-celebration-blocks.jpg';
import relayTeamWalkout from '@assets/relay-team-walkout.jpg';
import ruppArenaKentuckyBanner from '@assets/rupp-arena-kentucky-banner.webp';
import studentSectionPompoms from '@assets/student-section-pompoms.webp';
import swimmerBackstrokeSplash from '@assets/swimmer-backstroke-splash.jpg';
import swimmerFistRaiseBlocks from '@assets/swimmer-fist-raise-blocks.jpg';
import swimmerFocusOnBlock from '@assets/swimmer-focus-on-block.webp';
import swimmerPointUp from '@assets/swimmer-point-up.webp';
import swimmerScreamCloseup from '@assets/swimmer-scream-closeup.jpg';
import swimmerSplashCloseup from '@assets/swimmer-splash-closeup.webp';
import swimmersDiveStart from '@assets/swimmers-dive-start.webp';
import swimmersEmergeCheer from '@assets/swimmers-emerge-cheer.jpg';
import swimmersHighFive from '@assets/swimmers-high-five.webp';
import teamCelebration from '@assets/team-celebration.jpg';
import teamHuddleCheer from '@assets/team-huddle-cheer.webp';
import teamTrophyDuo from '@assets/team-trophy-duo.jpg';
import teammatesMedalHug from '@assets/teammates-medal-hug.webp';
import teammatesTowelingOff from '@assets/teammates-toweling-off.jpg';
import womensRelayBenchLaughing from '@assets/womens-relay-bench-laughing.webp';
import womensRelayTeamSmile from '@assets/womens-relay-team-smile.jpg';

export type Photo = { src: string; alt: string };

export const photos = {
  swimmersDiveStart: { src: swimmersDiveStart, alt: 'Kentucky swimmers in blue UK caps diving off the blocks at the start of a race' },
  poolRaceBanners: { src: poolRaceBanners, alt: 'A competition pool lined with race banners during a meet' },
  coachesSwimmersCheeringRope: { src: coachesSwimmersCheeringRope, alt: 'Kentucky coaches and swimmers cheering together along the lane rope' },
  ruppArenaKentuckyBanner: { src: ruppArenaKentuckyBanner, alt: 'Fans passing a giant Kentucky flag over the crowd at Rupp Arena' },
  teamHuddleCheer: { src: teamHuddleCheer, alt: 'The Kentucky swim and dive team huddled together, cheering with arms in the air' },
  teammatesMedalHug: { src: teammatesMedalHug, alt: 'Two Kentucky teammates hugging with medals around their necks' },
  womensRelayBenchLaughing: { src: womensRelayBenchLaughing, alt: "Kentucky women's relay swimmers laughing together on the team bench" },
  campusLibraryAerial: { src: campusLibraryAerial, alt: 'Aerial view of the University of Kentucky campus and library' },
  coachesFansCheering: { src: coachesFansCheering, alt: 'Kentucky coaches and fans cheering a race from the stands' },
  careerFairNetworking: { src: careerFairNetworking, alt: 'Students networking with employers at a career fair' },
  natatoriumMeetAerial: { src: natatoriumMeetAerial, alt: 'Aerial view of a swim meet in progress at Lancaster Aquatic Center' },
  natatoriumAerial: { src: natatoriumAerial, alt: 'Lancaster Aquatic Center pool under NCAA champion banners and the Kentucky Swimming and Diving sign' },
  studentSectionPompoms: { src: studentSectionPompoms, alt: 'The Kentucky student section waving blue pom-poms' },
  swimmerPointUp: { src: swimmerPointUp, alt: 'A Kentucky swimmer at the wall pointing to the sky after a race' },
  coachSwimmerHug: { src: coachSwimmerHug, alt: 'A teammate in headphones shouting in celebration while hugging a Kentucky swimmer after a race' },
  swimmerSplashCloseup: { src: swimmerSplashCloseup, alt: 'Close-up of a swimmer breaking the surface in a burst of spray' },
  coachResistanceBand: { src: coachResistanceBand, alt: 'A Kentucky coach working with an athlete on resistance band training' },
  coachesDeck: { src: coachesDeck, alt: 'Kentucky coaches in white polos fist-pumping from the pool deck during a race' },
  coachPoolside: { src: coachPoolside, alt: 'A Kentucky coach on the pool deck' },
  swimmerScreamCloseup: { src: swimmerScreamCloseup, alt: 'A swimmer roaring with a clenched fist after a race' },
  relayTeamWalkout: { src: relayTeamWalkout, alt: 'The Kentucky relay team walking out onto the pool deck' },
  relayTeamCelebrationBlocks: { src: relayTeamCelebrationBlocks, alt: 'A Kentucky relay swimmer leaping and shouting on the starting blocks as teammates celebrate' },
  swimmersHighFive: { src: swimmersHighFive, alt: 'Kentucky swimmers trading high fives on deck' },
  swimmerFocusOnBlock: { src: swimmerFocusOnBlock, alt: 'A Kentucky swimmer focused on the starting block before a race' },
  womensRelayTeamSmile: { src: womensRelayTeamSmile, alt: "Kentucky women's relay swimmers smiling and waving to the crowd on deck" },
  swimmerFistRaiseBlocks: { src: swimmerFistRaiseBlocks, alt: 'A Kentucky swimmer raising a fist at the wall beneath the Kentucky starting blocks' },
  swimmerBackstrokeSplash: { src: swimmerBackstrokeSplash, alt: 'A Kentucky swimmer launching a backstroke start in a spray of water' },
  teamCelebration: { src: teamCelebration, alt: 'Kentucky swimmers celebrating together on deck at the SEC Championships' },
  teammatesTowelingOff: { src: teammatesTowelingOff, alt: 'Kentucky teammates toweling off and talking after a swim' },
  swimmersEmergeCheer: { src: swimmersEmergeCheer, alt: 'Kentucky swimmers surfacing and cheering in the pool' },
  teamTrophyDuo: { src: teamTrophyDuo, alt: 'Two Kentucky swimmers holding up a trophy' },
  coachBenKeast: {
    src: coachBenKeast,
    alt: 'Meet Ben Keast. Ben works primarily with our middle distance women. He brings more than 20 years of coaching experience across high-performance, club, international, and developmental swimming, and has coached athletes who competed at the Olympic Games, World Championships, Pan American Games, Commonwealth Games, Pan Pacific Championships, Junior Worlds, and Junior Pan Pacs.',
  },
  coachAdrianaContreras: {
    src: coachAdrianaContreras,
    alt: "Meet Adriana Contreras. Adriana works primarily with the women's sprinters. She brings a proven track record from her previous coaching stops, which includes developing an NCAA All-American this past season.",
  },
} satisfies Record<string, Photo>;
