import { galleryPageData } from '../../../public/data/galleryPageData'
import styledGallery from '~/styles/gallery.css'
import { Link } from '@remix-run/react'

export default function GalleryPage() {
  return (
    <main className='gallery-body'>
      <section className='gallery-section'>
        {galleryPageData.map((card) => (
          <Link to={card.url} className='gallery-card' gobackUrl='/gallery'>
            <div className='card-img-wrapper'>
              <img src={card.img} className='gallery-card-img' />
            </div>
            <h6>{card.title}</h6>
          </Link>
        ))}
      </section>
    </main>
  )
}

export function links() {
  return [{ rel: 'stylesheet', href: styledGallery }]
}
export function meta() {
  return {
    title:
      'Alberta Colour Painting Image Gallery: Before and After Transformations',
    description:
      "Take a look at the amazing transformations we've achieved for our clients with Alberta Colour Painting! Our image gallery showcases a variety of before and after photos of interior and exterior painting projects. From cozy cottages to modern apartments, we've got a wide range of styles and finishes to inspire you. Whether you're looking for ideas for your own home or just want to see the quality of our work, our image gallery is the perfect place to start. Take a look and get inspired today!",
  }
}
