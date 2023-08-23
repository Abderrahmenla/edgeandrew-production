import dynamic from 'next/dynamic';

import { fetchGraphQL } from './utils';
import { HomeQuery } from './queries';

import BlogList from './components/blog/blog-list';
import Partners from './components/partners';
import HeroSection from './components/hero-section/layout-1';
import Benefits from './components/benefits';
import Features from './components/features';

const PricingSection = dynamic(() => import('./components/pricing'), {
  ssr: false,
});

export const metadata = {
  title: 'Edge Andrew - Home',
  description: 'Edge Andrew home page',
};

async function fetchBlogData() {
  const data = await fetchGraphQL(HomeQuery);
  const heroSectionData = data.data.heroSectionCollection.items[0];
  const partnersSectionData =
        data.data.partnersHomePageSectionCollection.items[0];
  const benefitsSectionData =
        data.data.benefitsHomeSectionCollection.items[0];
  const featuresSectionData = data.data.keyFeaturesSectionCollection.items[0];
  const pricingSectionData = data.data.pricingSectionCollection.items[0];
  const blogSectionData = data.data.recentBlogsSectionCollection.items[0];

  return {
    heroSectionData,
    partnersSectionData,
    benefitsSectionData,
    featuresSectionData,
    pricingSectionData,
    blogSectionData,
  };
}

export default async function Home() {
  const {
    heroSectionData,
    partnersSectionData,
    benefitsSectionData,
    featuresSectionData,
    pricingSectionData,
    blogSectionData,
  } = await fetchBlogData();

  return (
    <main className="flex flex-col items-center justify-between w-full">
      <HeroSection
        imgSrc={heroSectionData.heroImage.image.url}
        imgAlt={heroSectionData.heroImage.imageAlt}
        title={heroSectionData.title}
        ctaText={heroSectionData.ctaButton.text}
        ctaUrl={heroSectionData.ctaButton.url}
        subTitle={heroSectionData.subTitle}
      />
      <Partners
        sectionTitle={partnersSectionData.title}
        partnersLogo={partnersSectionData.partnerLogoCollection.items}
      />
      <Benefits
        sectionTitle={benefitsSectionData.title}
        description={benefitsSectionData.description}
        benefits={benefitsSectionData.benefitsCollection.items}
      />
      <Features
        sectionTitle={featuresSectionData.title}
        description={featuresSectionData.description}
        features={featuresSectionData.featuresCollection.items}
      />
      <PricingSection
        sectionTitle={pricingSectionData.title}
        sectionButton={pricingSectionData.sectionButton}
        personalUse={pricingSectionData.personalUse}
        teamUse={pricingSectionData.teamUse}
      />
      <BlogList
        sectionTitle={blogSectionData.sectionTitle}
        blogPosts={blogSectionData.blogPostsCollection.items}
      />
    </main>
  );
}
