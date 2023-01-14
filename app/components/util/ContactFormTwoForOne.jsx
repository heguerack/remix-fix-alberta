import {
  Form,
  useActionData,
  useTransition as useNavigation,
} from '@remix-run/react'

export default function ContactFormTwoForOne() {
  const validationErrors = useActionData()
  const navigation = useNavigation()
  const isSubmitting = navigation.state !== 'idle'

  return (
    <div className='small-contact-form-wrapper'>
      <Form method='Post' className='small-contact-form'>
        {/* FIRST NAME FIRST NAME FIRST NAME FIRST NAME FIRST NAME */}
        <input
          name='firstName'
          type='text'
          placeholder='First Name'
          className='small-contact-form-input form-capitalize'
          required
          maxLength={30}
        />

        {/* LAST NAME LAST NAME LAST NAME LAST NAME LAST NAME */}
        <input
          name='lastName'
          type='text'
          placeholder='Last Name'
          className='small-contact-form-input form-capitalize'
          required
          maxLength={30}
        />

        {/* EMAIL   EMAIL   EMAIL   EMAIL   EMAIL EMAIL   EMAIL  */}
        <input
          name='email'
          type='email'
          placeholder='Email'
          className='small-contact-form-input'
          required
        />

        {/* NUMBER   NUMBER   NUMBER   NUMBER   NUMBER NUMBER   NUMBER  */}
        <input
          name='number'
          type='text'
          placeholder='Phone Number'
          className='small-contact-form-input small-contact-form-input-long-intput'
          maxLength={30}
        />

        {/* ADDRESS   ADDRESS  ADDRESS  ADDRESS  ADDRESS ADDRESS  ADDRESS  */}
        <input
          className='small-contact-form-input small-contact-form-input-long-intput form-capitalize contact-form-address'
          type='text'
          name='address'
          placeholder='Address'
        />
        {/* HIDDEN INPUT TO GRAB COMINGFROM VALUE */}
        <input type='hidden' name='comingFrom' value='2for1' />

        {/* MESSAGE   MESSAGE   MESSAGE   MESSAGE   MESSAGE MESSAGE   MESSAGE  */}
        {validationErrors && (
          <ul>
            {Object.values(validationErrors).map((error) => {
              return <li key={error}>{error}</li>
            })}
          </ul>
        )}
        <textarea
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
