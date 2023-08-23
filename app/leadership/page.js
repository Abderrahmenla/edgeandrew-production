import HeroSection from '../components/hero-section/layout-2';
import Leaders from '../components/leadership/leaders';
import AdvisoryBoard from '../components/leadership/advisory-board';
import ContactSection from '../components/leadership/contact-section';
import { fetchGraphQL } from '../utils';
import { LeadershipQuery } from '../queries';

export const metadata = {
  title: 'Edge Andrew - Leadership',
  description: 'Edge Andrew leadership page',
};

export default async function Leadership() {
  const data = await fetchGraphQL(LeadershipQuery);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <HeroSection {...data.data.leadershipHeroSection.items[0]} />
      <Leaders
        sectionTitle={data.data.LeadersSection.items[0].sectionTitle}
        leaders={
          data.data.LeadersSection.items[0].leadersCollection.items
        }
      />
      <AdvisoryBoard
        sectionTitle={
          data.data.AdvisoryBoardSection.items[0].sectionTitle
        }
        advisors={
          data.data.AdvisoryBoardSection.items[0].advisorsCollection
            .items
        }
      />
      <ContactSection />
    </main>
  );
}
