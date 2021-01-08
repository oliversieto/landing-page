export type TechIcon = {
  title: string
  icon: {
    url: string
    name: string
  }
}

export type Concept = {
  title: string
}

export type Module = {
  title: string
  subtitle: string
  description: string
}

export type SocialLink = {
  title: string
  url: string
}

export type Image = {
  alternativeText?: string
  url: string
}

export type LogoProps = Image

export type ButtonProps = {
  label: string
  url: string
}

export type Author = {
  photo: Image
  name: string
  description: string
  role: string
  socialLinks: SocialLink[]
}

export type Review = {
  id: string
  name: string
  text: string
  photo: Image
}

export type Question = {
  question: string
  answer: string
  isExtraQuestion: boolean
}

export type Offer = {
  price: string
  priceCurrency: string
  priceValidUntil: string
  url: string
  availability: string
  seller: {
    name: string
  }
}

export type JsonReview = {
  author: {
    type: string
    name: string
  }
  datePublished: string
  reviewBody: string
  name: string
  reviewRating: {
    bestRating: string
    ratingValue: string
    worstRating: string
  }
  publisher: {
    type: string
    name: string
  }
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: Image
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: Image
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Concept[]
}

export type SectionModulesProps = {
  title: string
  modules: Module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  button: ButtonProps
  benefits: string
  numberInstallments: number
  priceInstallment: number
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type FooterProps = {
  description: string
}

export type JsonSchemaProps = {
  courseJsonLd: {
    courseName: string
    providerName: string
    providerUrl: string
    description: string
  }
  productJsonLd: {
    productName: string
    description: string
    brand: string
    aggregateRating: {
      ratingValue: string
      reviewCount: string
    }
    mpn: string
    sku: string
    reviews: JsonReview[]
    offers: Offer[]
    images: Image[]
  }
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
  footer: FooterProps
  jsonSchema: JsonSchemaProps
}
