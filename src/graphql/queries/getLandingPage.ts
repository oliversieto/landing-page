const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        alternativeText
        url
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        url
        alternativeText
      }
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        icon {
          url
          name
        }
        title
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  fragment sectionModules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  fragment sectionAgenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }

  fragment pricingBox on LandingPage {
    pricingBox {
      totalPrice
      button {
        label
        url
      }
      benefits
      numberInstallments
      priceInstallment
    }
  }

  fragment sectionAboutUs on LandingPage {
    sectionAboutUs {
      title
      authors {
        photo {
          alternativeText
          url
        }
        name
        description
        role
        socialLinks {
          title
          url
        }
      }
    }
  }

  fragment sectionReviews on LandingPage {
    sectionReviews {
      title
      reviews {
        id
        name
        text
        photo {
          url
        }
      }
    }
  }

  fragment sectionFaq on LandingPage {
    sectionFaq {
      title
      questions {
        question
        answer
        isExtraQuestion
      }
    }
  }

  fragment footer on LandingPage {
    footer {
      description
    }
  }

  fragment jsonSchema on LandingPage {
    jsonSchema {
      courseJsonLd {
        courseName
        providerName
        providerUrl
        description
      }
      productJsonLd {
        productName
        description
        brand
        aggregateRating
        mpn
        sku
        reviews
        offers
        images {
          url
        }
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
      ...sectionConcepts
      ...sectionModules
      ...sectionAgenda
      ...pricingBox
      ...sectionAboutUs
      ...sectionReviews
      ...sectionFaq
      ...footer
      ...jsonSchema
    }
  }
`

export default GET_LANDING_PAGE
