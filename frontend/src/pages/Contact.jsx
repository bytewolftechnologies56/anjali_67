import React, { useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-10 mb-28'>

        {/* Left Background Image Section */}
        <div
          className='w-full md:w-1/2 h-80 md:h-auto bg-cover bg-center rounded-md'
          style={{ backgroundImage: `url(${assets.contact_img})` }}
        ></div>

        {/* Right Form Section */}
        <div className='flex flex-col justify-center items-start gap-6 w-full md:w-1/2'>
          <p className='font-semibold text-xl text-gray-600'>Get in Touch</p>

          {submitted ? (
            <div className="text-green-600 border border-green-400 bg-green-100 p-4 rounded w-full">
              Thank you! Your message has been successfully submitted.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Your Name'
                required
                className='border px-4 py-2 rounded'
              />
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Your Email'
                required
                className='border px-4 py-2 rounded'
              />
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Your Message'
                required
                rows={5}
                className='border px-4 py-2 rounded'
              />
              <button
                type='submit'
                className='border border-black px-6 py-3 bg-black text-white hover:bg-white hover:text-black transition-all duration-300 rounded'
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact
