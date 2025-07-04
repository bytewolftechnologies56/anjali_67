import React from 'react';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>

      {/* About Title */}
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* About Section */}
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img
          className='w-full md:max-w-[450px] rounded-xl'
          src="https://static.vecteezy.com/system/resources/thumbnails/001/235/998/small_2x/solar-panel-cell-on-dramatic-sunset-sky-background.jpg"
          alt="Force Sales Solar Panel"
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p><b>Force Sales</b> is a trusted name in solar energy solutions, delivering reliable and efficient solar panel systems to homes and businesses across the country. Our commitment is to power a brighter, cleaner future—one rooftop at a time.</p>
          <p>With a passion for sustainability and innovation, <b>Force Sales</b> provides cutting-edge solar technology that reduces electricity bills and carbon footprints, while increasing energy independence for our customers.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to make solar energy simple, affordable, and accessible. At <b>Force Sales</b>, we strive to create a greener tomorrow by helping customers transition smoothly to renewable power with confidence and peace of mind.</p>
        </div>
      </div>

      {/* Why Choose Us Title */}
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      {/* Why Choose Us Section */}
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>High-Efficiency Panels:</b>
          <p className='text-gray-600'>Our solar panels are built with premium materials ensuring maximum output and long-term durability, even in challenging climates.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Hassle-Free Installation:</b>
          <p className='text-gray-600'>From consultation to commissioning, we provide expert service and full support every step of the way.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Commitment to Sustainability:</b>
          <p className='text-gray-600'>We believe in energy that empowers. Force Sales helps reduce your carbon footprint while saving you money for years to come.</p>
        </div>
      </div>

      {/* Newsletter */}
      <NewsletterBox />

    </div>
  );
};

export default About;
