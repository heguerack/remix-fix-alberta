import SliderServiceSection from '~/components/util/SliderServiceSection'
import {
  ceilingTexturingImages,
  heading,
  paragraph,
} from '../../../public/data/ceilingTexturingData'
// import { DrywallEstimateButton } from '~/components/util/Buttons'
import { PaintingEstimateButton } from '~/components/util/Buttons'

import ServicePageAwards from '../../components/util/ServicePageAwards'
import styledService from '~/styles/service-page.css'
import styledSliderSection from '../../styles/slider-service-section.css'
import styledSlider from '../../styles/slider-widget.css'

export default function CalgaryCeilingTexturingPage() {
  return (
    <main className='service-main'>
      <div className='slider-section-wrap'>
        <SliderServiceSection
          images={ceilingTexturingImages}
          heading={heading}
          paragraph={paragraph}
        />
      </div>
      <p className='service-p'>
        Knockdown texturing is a popular choice for many homeowners in Calgary.
        This technique involves spraying a thin layer of texture onto the
        ceiling and then using a trowel or other tool to smooth out the surface,
        creating a soft, mottled effect. This type of texturing is a versatile
        option that can be used in a variety of settings and can be paired with
        a range of paint colors and styles. If you are interested in knockdown
        texturing for your home or office in Calgary, it is important to choose
        a contractor who is experienced in this technique and who uses
        high-quality materials. At Alberta Colour Painting, we have a team of
        skilled professionals who are trained in all aspects of knockdown
        texturing and are committed to delivering exceptional results. Contact
        us today to learn more about this option and to schedule a consultation.
      </p>
      <p className='service-p'>
        At Alberta Colour Painting, we offer a range of ceiling texturing
        options to our clients in Calgary. One popular option is popcorn
        texturing, which involves spraying a thick layer of texture onto the
        ceiling to create a bumpy, popcorn-like effect. This technique was
        widely used in the 1970s and 1980s, but it has fallen out of favor in
        recent years due to concerns about its environmental impact and the
        difficulty of removing it. If you are interested in this type of
        texturing, it is important to choose a contractor who is experienced in
        this technique and who uses high-quality materials. At Alberta Colour
        Painting, we have a team of skilled professionals who are trained in all
        aspects of popcorn texturing and are committed to delivering exceptional
        results. If you are interested in learning more about popcorn ceiling
        texturing and how it can enhance the look of your home or office in
        Calgary, don't hesitate to reach out to us. We would be happy to provide
        you with more information and to schedule a consultation to discuss your
        project in greater detail.
      </p>
      <p className='service-p'>
        Splatter texturing is a decorative technique that involves spraying a
        mixture of texture and paint onto the ceiling, creating a textured,
        splattered effect. This type of texturing is a less common option
        compared to other techniques such as knockdown or popcorn texturing, but
        it can add a unique and interesting look to a room. Splatter texturing
        is created by spraying a mixture of texture and paint onto the ceiling
        using a specialized tool, such as a hopper gun. The mixture is applied
        in a random, splattered pattern, creating a textured surface that adds
        visual interest and depth to the ceiling. One of the benefits of
        splatter texturing is that it can be customized to suit the specific
        style and needs of a space. The texture and paint can be applied in a
        variety of colors and patterns, allowing for a range of creative
        possibilities. Splatter texturing is also relatively easy to clean and
        maintain, as the textured surface is sealed with a protective coating
        that helps to prevent damage and wear. However, it's important to note
        that splatter texturing is a more labor-intensive process than other
        techniques, as it requires a skilled and experienced contractor to apply
        the texture and paint in a consistent and controlled manner. If you are
        considering splatter texturing for your home or office in Calgary, it is
        important to choose a reputable and experienced contractor like Alberta
        Colour Painting, who is skilled in this technique and who uses
        high-quality materials to ensure the best possible results.
      </p>
      <p className='service-p'>
        Ceiling texturing is a great way to add character and style to your home
        or office in Calgary. Whether you are interested in knockdown, popcorn,
        splatter, or another technique, it is important to choose a reputable
        and experienced contractor to handle the job. At Alberta Colour
        Painting, we have a team of skilled professionals who are trained in all
        aspects of ceiling texturing and are committed to delivering exceptional
        results. Contact us today to learn more about our ceiling texturing
        services and to schedule a consultation.
      </p>
      <ServicePageAwards />
      <div className='book-button-wrapper'>
        {/* <DrywallEstimateButton url='../booking/drywall-ceiling-removal-and-texturing' /> */}
        <PaintingEstimateButton url='../booking/house-painting-and-commercial-painting' />
      </div>
    </main>
  )
}
export function links() {
  return [
    { rel: 'stylesheet', href: styledSliderSection },
    { rel: 'stylesheet', href: styledSlider },
    { rel: 'stylesheet', href: styledService },
  ]
}
