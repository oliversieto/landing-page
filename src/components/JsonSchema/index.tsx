import React from 'react'
import { CourseJsonLd, ProductJsonLd } from 'next-seo'
import { JsonSchemaProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const JsonSchema = ({ courseJsonLd, productJsonLd }: JsonSchemaProps) => {
  const images = productJsonLd.images.map((image) => getImageUrl(image.url))
  return (
    <>
      <CourseJsonLd
        courseName={courseJsonLd.courseName}
        providerName={courseJsonLd.providerName}
        providerUrl={courseJsonLd.providerUrl}
        description={courseJsonLd.description}
      />
      <ProductJsonLd
        productName={productJsonLd.productName}
        images={images}
        description={productJsonLd.description}
        brand={productJsonLd.brand}
        reviews={productJsonLd.reviews}
        aggregateRating={productJsonLd.aggregateRating}
        offers={productJsonLd.offers}
        mpn={productJsonLd.mpn}
        sku={productJsonLd.sku}
      />
    </>
  )
}

export default JsonSchema
