import {
  Form,
  useActionData,
  useTransition as useNavigation,
} from '@remix-run/react'

export default function ContactFormSmall({ comingFrom }) {
  // you can call useActionData ain anyb components, not just  in a page router
  const validationErrors = useActionData()
  const navigation = useNavigation()
  // so use transiton gives info on the states, and other things
  // navigation.state === 'loading'
  // the following means remix is eather submititng the data or we finish submiting data and remix is updating the pages
  const isSubmitting = navigation.state !== 'idle'

  return (
    <div className='small-contact-form-wrapper'>
      <p className='small-contact-form-p'>Questions?</p>

      <Form method='Post' className='small-contact-form'>
        {/* FIRST NAME FIRST NAME FIRST NAME FIRST NAME FIRST NAME */}
        <input
          id='first-name'
          name='firstName'
          type='text'
          placeholder='First Name'
          className='small-contact-form-input form-capitalize'
          required
          maxLength={30}
        />

        {/* LAST NAME LAST NAME LAST NAME LAST NAME LAST NAME */}
        <input
          id='last-name'
          name='lastName'
          type='text'
          placeholder='Last Name'
          className='small-contact-form-input form-capitalize'
          required
          maxLength={30}
        />

        {/* EMAIL   EMAIL   EMAIL   EMAIL   EMAIL EMAIL   EMAIL  */}
        <input
          id='email'
          name='email'
          type='email'
          placeholder='Email'
          className='small-contact-form-input'
          required
        />

        {/* NUMBER   NUMBER   NUMBER   NUMBER   NUMBER NUMBER   NUMBER  */}
        <input
          id='number'
          name='number'
          type='text'
          placeholder='Phone Number'
          className='small-contact-form-input small-contact-form-input-long-intput'
          maxLength={30}
        />

        {/* ADDRESS   ADDRESS  ADDRESS  ADDRESS  ADDRESS ADDRESS  ADDRESS  */}
        <input
          className='small-contact-form-input small-contact-form-input-long-intput form-capitalize'
          id='address'
          type='text'
          name='address'
          placeholder='Address - Optional'
        />
        {/* HIDDEN INPUT TO GRAB COMINGFROM VALUE */}
        <input type='hidden' name='comingFrom' value={comingFrom} />

        {/* MESSAGE   MESSAGE   MESSAGE   MESSAGE   MESSAGE MESSAGE   MESSAGE  */}
        {validationErrors && (
          <ul>
            {Object.values(validationErrors).map((error) => {
              return <li key={error}>{error}</li>
            })}
          </ul>
        )}
        <textarea
          id='message'
          name='message'
          className='small-contact-form-textarea '
          placeholder='Tell us abpout your project'
          required
          maxLength={500}></textarea>
        <button className='small-contact-form-submit' disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </Form>
    </div>
  )
}
