import React, { useState } from 'react'

const NewsletterBox = () => {
  const [subscribed, setSubscribed] = useState(false)

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <div className='text-center px-4'>
      <p className='text-sm font-semibold text-black mb-2'>
      </p>
      <p className='text-2xl font-medium text-black'>
        Subscribe now & get 20% off
      </p>
      <p className='text-black mt-3'>
      </p>

      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input
          className='w-full sm:flex-1 outline-none py-3'
          type="email"
          placeholder='Enter your email'
          required
        />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>
          SUBSCRIBE
        </button>
      </form>

      {subscribed && (
        <p className='text-green-600 text-sm font-medium'>Successfully Subscribed!</p>
      )}
    </div>
  )
}

export default NewsletterBox
