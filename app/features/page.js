import dynamic from 'next/dynamic';

import HeroSection from '../components/hero-section/layout-2';
import AmFocus from '../components/features/am-focus';
import PmFocus from '../components/features/pm-focus';
import Empowerment from '../components/features/empowerment';

import { fetchGraphQL } from '../utils';
import { FeaturesQuery } from '../queries';

const DownloadFeaturesSection = dynamic(
  () => import('../components/features/download-feature'),
  {
    ssr: false,
  }
);

export const metadata = {
  title: 'Edge Andrew - Features',
  description: 'Edge Andrew features page',
};

export default async function Features() {
  const data = await fetchGraphQL(FeaturesQuery);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <HeroSection {...data.data.FeaturesHeroSection.items[0]} />
      <AmFocus {...data.data.featureSection1.items[0]} />
      <PmFocus {...data.data.featuresSection2.items[0]} />
      <Empowerment {...data.data.featuresSection3.items[0]} />
      <DownloadFeaturesSection />
    </main>
  );
}
