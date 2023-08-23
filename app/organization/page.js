import HeroSection from '../components/hero-section/layout-2';
import IntroSection from '../components/organization';
import CoachEdge from '../components/organization/coach-edge';
import Download from '../components/organization/download';
import { fetchGraphQL } from '../utils';
import { OrganizationQuery } from '../queries';

export const metadata = {
  title: 'Edge Andrew - Edge Andrew - Orgzanization',
  description: 'Edge Andrew orgzanization page',
};

export default async function Organization() {
  const data = await fetchGraphQL(OrganizationQuery);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <HeroSection {...data.data.OrganizationHeroSection.items[0]} />
      <IntroSection {...data.data.organizationSection1.items[0]} />
      <CoachEdge />
      <Download />
    </main>
  );
}
