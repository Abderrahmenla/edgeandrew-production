const HomeQuery = `
    query HomePage {
      heroSectionCollection(where:{ 
        sectionName_contains: "Home"} ) {
        items{
          title
          subTitle
          ctaButton{
            text
            url
          }
          heroImage{
            imageAlt
            image {
              url(transform:{
                format: WEBP
              })
            }
          }
        }
      }

      partnersHomePageSectionCollection{
        items{
          title
          partnerLogoCollection{
            items{
              imageAlt
              image {
                url(transform:{
                  format: WEBP
                })
                width
                height
              }
            }
          }
        }
      }

      benefitsHomeSectionCollection{
        items{
          title
          description
          benefitsCollection{
            items{
              title
              subtitle
              icon{
                image{
                 url(transform:{
                    format: WEBP
                  })
                width
                height
                }
                imageAlt
              }
            }
          }
        }
      }

      keyFeaturesSectionCollection{
        items{
          title
          description
          featuresCollection{
            items{
              title
              subtitle
              icon{
                image{
                 url(transform:{
                    format: WEBP
                  })
                width
                height
                }
                imageAlt
              }
            }
          }
        }
      }

      pricingSectionCollection{
        items{
          title
          action
          sectionButton {
            text
            url
          }
          personalUse{
            hook
            description
            annualPrice
            ctaButton{
              text
              url
            }
          }
          teamUse{
            monthlyPrice
            hook
            description
            annualPrice
            ctaButton{
              text
              url
            }
          }
        }
      }

      recentBlogsSectionCollection{
        items{
          sectionTitle
          blogPostsCollection{
            items{
              title
              postImage{
                imageAlt
                image{
                  url(transform:{
                    format: WEBP
                  })
                  width
                  height
                }
              }
              description
              author
              publishedDate
            }
          }
        }
      }

    }`;
const OrganizationQuery = `
    query {
      OrganizationHeroSection : heroSectionCollection(where:{ 
          sectionName_contains: "Organization"} ) {
          items{
            title
            ctaButton{
              text
              url
            }
            heroImage{
              imageAlt
              image {
                url(transform:{
                  format: WEBP
                })
              }
            }
          }
        }  
  
        organizationSection1:organizationSection1Collection{
          items{
            title
            description{
              json
            }
            sectionImage{
              image {
                url
                width
                height
              }
              imageAlt
            }
          }
        } 
  
    } 
    `;
const LeadershipQuery = `
    query {
      leadershipHeroSection : heroSectionCollection(where:{ 
        sectionName_contains: "Leadership"} ) {
        items{
          title
          heroImage{
            imageAlt
            image {
              url(transform:{
                format: WEBP
              })
            }
          }
        }
      }  
      LeadersSection: leadersSectionCollection {
        items{
          sectionTitle
          leadersCollection{
            items{
              name
              position
              avatar{
                image{
                  url(transform:{
                  format: WEBP
                  })
                  width
                  height
                }
                imageAlt
              }
              description{
                json
              }
              socialLinksCollection{
                items{
                  url
                  text
                }
              }
            }
          }
        }
      } 
  
      AdvisoryBoardSection :	advisoryBoardSectionCollection{
        items{
          sectionTitle
          advisorsCollection{
            items{
              name
              position
              avatar {
                image{
                  url(transform:{
                    format: WEBP
                  })
                  width
                  height
                }
                imageAlt
              }
                        
            }
          }
        }
      }
  
  }
    `;
const FeaturesQuery = `
    query {
      FeaturesHeroSection : heroSectionCollection(where:{ 
          sectionName_contains: "Features"} ) {
          items{
            title
            ctaButton{
              text
              url
            }
            heroImage{
              imageAlt
              image {
                url(transform:{
                  format: WEBP
                })
              }
            }
          }
        }  
  
        featureSection1:featureSection1Collection {
          items{
            headerSection{
            title
            subtitle
            icon{
              image{
                url(transform:{
                  format: WEBP
                })
                width
                height
              }
              imageAlt
            }
          }
             bodySectionCollection{
            items{
              name
              description
            }
          }
            sectionImage {
              url(transform:{
                format: WEBP
              })
              width
              height
            }
          }
        }
  
        featuresSection2:featureSection2Collection{
          items{
            headerSection {
              title
              subtitle
              icon {
                image{
                  url(transform:{
                    format: WEBP
                  })
                  width
                  height
                }
                imageAlt
              }
            }
            bodySectionCollection{
              items{
                name
                description
              }
            }
            imageSection {
              url(transform:{
                format: WEBP
              })
              width
              height
            }
          }
        }
  
        featuresSection3 : featureSection3Collection{
          items{
            title
            subtitle
            imageSection{
              width
              height
              url(transform:{
                format: WEBP
              })
            }
            bodySectionCollection{
              items{
                name
                description
              }
            }
          }
        }
       
    }
    `;
const BlogsQuery = `
    query {
      latestPostsSectionCollection{
        items{
          title
          description
          blogPostsCollection{
            items{
              title
              description
              publishedDate
              author
              postImage{
                image{
                  url
                  width
                  height
                }
                imageAlt
              }
            }
          }
        }
      }
    }
  `;

const blogPostDetailQuery = `
query {
  blogDetailCollection {
    items{
      blogTitle
      paragraph1{json}
      paragraph2{json}
      paragraph3{json}
      description
      subtitle
      image1Title
      image2Title
      mainBlogImage{
        url(transform:{
                  format: WEBP
                })
         width
        	height
      }
      blogPostImagesCollection{
        items{
          url(transform:{
                  format: WEBP
                })
         width
        	height
        }
      }
      imagesDescription
      relatedPostsCollection{
        items{
          title
          postImage{
            image{
              url(transform:{
                  format: WEBP
                })
            }
            imageAlt
          }
          publishedDate
          description
        }
      }

    }
  }
}
`;

export {
  HomeQuery,
  OrganizationQuery,
  LeadershipQuery,
  FeaturesQuery,
  BlogsQuery,
  blogPostDetailQuery,
};
