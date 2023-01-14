import styledBlogs from '../../styles/blogs.css'
import { Button } from '../../components/util/Buttons'
export default function BlogsPage() {
  return (
    <main>
      <h1>Alberta Colour Painting Blogs</h1>
      {/* BLOG 1 BLOG 1 BLOG 1 BLOG 1 BLOG 1 BLOG 1 BLOG 1 BLOG 1 */}
      <div className='blog blog1'>
        <div className='blog-showcase'>
          <div className='blogshowcase-img-wrapper'>
            <img
              src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797233/blogs/rbg-colours_kymw9s.jpg'
              alt='Three lights hitting a brick wall. The lights overlap on the wall, showing a mesh of colours just like a rainbow'
              className='blogshowcase-img'
            />
          </div>
          <div className='blogshowcase-img-content'>
            <h2>7 Tips For Choosing The Right Interior Paint Colour!</h2>
            <p className=''>
              Picking the colour for the interior of your home can be extremely
              overwhelming. Flicking through magazines and looking at Pinterest
              for hours can make you feel inspired, but just as anxious about
              choosing the wrong colour. Feature walls, colour that matches your
              dream wallpaper, bright whites or dark colours, the list goes on.
              One of the many upsides to working with a professional, is they
              will help you through the overwhelming process of colour palettes.
              Below are some helpful tips that will help you make the right
              decision when choosing your interior colour.
            </p>
            <Button
              title='Read Full Blog'
              url='7-Tips-For-Choosing-The-Right-Interior-Paint-Colour!'
            />
          </div>
        </div>
      </div>
      {/* BLOG 2 BLOG 2 BLOG 2 BLOG 2 BLOG 2 BLOG 2 BLOG 2 BLOG 2 */}
      <div className='blog blog2'>
        <div className='blog-showcase'>
          <div className='blogshowcase-img-wrapper'>
            <img
              src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797233/blogs/dos-and-donts-of-painting_m6kabv.jpg'
              alt='A paint tray that has been used. It has a paint brush and a roller in it'
              className='blogshowcase-img'
            />
          </div>
          <div className='blogshowcase-img-content'>
            <h2>The Do&#8217;s And Don&#8217;s Of Painting</h2>
            <p className=''>
              For anyone who has painted their home before, they would
              absolutely agree with the fact that it isn&#8217;t as easy as it
              looks. We all think that we can grab a paint brush, slap on some
              paint and get working, however a good quality paint job requires a
              lot more work than that. For yournext paint job, it is important
              to ask yourself one of the most important key factors; ‘time &
              stress verses money & happiness. Hiring helpwith a professional
              painting company can not only eliminate stress completely, but
              they provide advice, inspiration and a high quality job that you
              may not receive when you attempt the DIY project. The below tips
              will help you with your next painting project and ensure you
              receive a result you have been dreaming of.
            </p>
            <Button
              title='Read Full Blog'
              url='/blogs/the-dos-and-donts-of-painting'
            />
          </div>
        </div>
      </div>
      {/* BLOG 3 BLOG 3 BLOG 3 BLOG 3 BLOG 3 BLOG 3 BLOG 3 BLOG 3 */}
      <div className='blog blog3'>
        <div className='blog-showcase'>
          <div className='blogshowcase-img-wrapper'>
            <img
              src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797233/blogs/bedroom-painted-with-the-best-materials_bghatv.jpg'
              alt='A standard bedroom showcasing a desk, a chair and a single bed. thee curtains, bed sheets, and a floor mat are green colour.'
              className='blogshowcase-img'
            />
          </div>
          <div className='blogshowcase-img-content'>
            <h2>
              The Best Products And Materials To Use In The House Painting
              Industry
            </h2>
            <p className=''>
              When you research the supplies and materials that you need for
              interior or exterior painting, the list is endless. Primers,
              paints, rollers, stir sticks, trays, small and large brushes,
              tape, drop sheets, putty and more. With each item that you need
              when painting, comes hundreds of different brands and varieties,
              it is hard to know what to choose. It is important to use the best
              products and materials to ensure you receive a high quality
              result. Below are the best products and materials to use in the
              painting industry, to make your decisions that much easier.
            </p>
            <Button
              title='Read Full Blog'
              url='the-best-products-and-materials-to-use-in-the-house-painting-industry'
            />
          </div>
        </div>
      </div>
      {/* BLOG 4 BLOG 4 BLOG 4 BLOG 4 BLOG 4 BLOG 4 BLOG 4 BLOG 4 */}
      <div className='blog blog4'>
        <div className='blog-showcase'>
          <div className='blogshowcase-img-wrapper'>
            <img
              src='https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672797233/blogs/painting-a-porch_mjxbl0.jpg'
              alt='An old proch and steps, the white coloir paint is npeeling. it really needs painting'
              className='blogshowcase-img'
            />
          </div>
          <div className='blogshowcase-img-content'>
            <h2>How To Paint Your Front Porch In Four Simple Steps</h2>
            <p className=''>
              There is nothing wrong with keeping your front porch bare. But
              then, why lounge around on a porch that lacks character when you
              can just infuse a little life into it with some painting? As we
              step into summer, revitalizing your front porch can give the
              exterior of your home a complete makeover. If you are interested
              in giving your front porch a makeover, follow this easy guide.
            </p>
            <Button
              title='Read Full Blog'
              url='how-to-paint-your-front-porch-in-four-simple-steps'
            />
          </div>
        </div>
      </div>
    </main>
  )
}
export function links() {
  return [{ rel: 'stylesheet', href: styledBlogs }]
}
export function meta() {
  return {
    title: 'Calgary House Painting Blogs: Tips, Tricks, and Inspiration',
    description:
      'Looking for painting ideas for your home in Calgary? Our house painting blogs are here to help! Learn about colour selection, the best products and materials to use, and the right way to paint to achieve the best results. From inspiration to practical tips and tricks, our blogs have something for every homeowner. Check them out today and get started on your next painting project with confidence!',
  }
}
