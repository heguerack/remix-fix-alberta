import { Link } from '@remix-run/react'
import { Button } from '../util/Buttons'
export default function HomeBlogOffers() {
  return (
    <section className='home-blog-offer-section'>
      <div className='blog-offer blog-offer-a'>
        <div className='blog-offer-link-wrapper blog-offer-link-wrapper-blog'>
          <Link to='blogs' className='blog-offer-link'>
            <img
              src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797215/home/blogs-offers/blog-icon_rhcjdn.png'
              alt='an icon- its the letter b with tewo curved lines at the up righ hanbd side, it implies sound or communications '
            />
          </Link>
        </div>
        <div className='blog-offer-content'>
          <h3>Calgary House Painting Offers</h3>
          <p>
            At Alberta Colour Painting, we have a variety of offers and
            discounts available to help you save money on your house painting
            project. No matter the season or what time of year it is, we have a
            special deal that can help you stretch your budget further. From
            discounts on our standard painting services to special deals on wall
            painting in particular. Visit the offers page to learn more about
            our current offers and how you can save on your painting project.
          </p>
          <Button url='offers' title='Visit Offers Page' />
        </div>
      </div>
      <div className='blog-offer blog-offer-b'>
        <div className='blog-offer-content'>
          <h3> Exterior and Interior Painting Ideas</h3>
          <p>
            If you're considering completing an interior or exterior painting
            project in your home, our blog is here to help! At Alberta Colour
            Painting, we have a variety of helpful resources to guide you
            through the house painting process, from tips on selecting colors to
            advice on preparing your walls, doors, and other surfaces for
            painting. Our Calgary house painters are experts at what they do and
            are happy to share their knowledge and experience with you. Take a
            look at our blog for inspiration and helpful information to make
            your next painting project a success. Whether you're looking for
            guidance on selecting the perfect hue for your walls or you need
            help figuring out the best products to use, our blog is here to
            provide you with the information you need to make informed
            decisions. So if you're ready to get started on your painting
            project, take a look at our blog and see how we can help you bring
            your vision to life.
          </p>
          <Button url='/blogs' title='Visit Blogs Page' />
        </div>
        <div className='blog-offer-link-wrapper blog-offer-link-wrapper-offer'>
          <Link to='/offers' className='blog-offer-link'>
            <img
              src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797215/home/blogs-offers/special-offer-icon_cgvsho.png'
              alt='an icon - its a keyholder or tag kid of thing, that say special offer'
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
