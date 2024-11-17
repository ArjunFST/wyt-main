// Import the necessary modules and images
//  Map method

import Image from 'next/image';
import GalleryImg from '../../../public/gallery.svg';
import img1 from '../../assets/waty-Gallery-1-bright.svg';
import img3 from '../../assets/waty-Gallery-3-bright.svg';
import img4 from '../../assets/waty-Gallery-4-bright.svg';
import img5 from '../../assets/waty-Gallery-5-bright.svg';
import img6 from '../../assets/waty-Gallery-6-bright.svg';
import img7 from '../../assets/waty-Gallery-4-bright.svg';
import img8 from '../../assets/waty-Gallery-6-bright.svg';
import GlowingButton from '../GlowingButton/GlowingButton';


const Gallery = () => {
  const images = [
    img1, img5, img3, img4, img5, img6, img7,
    img8
  ];

  return (
    <section
      id="gallery"
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${GalleryImg.src})` }}
    >
      <div className="flex justify-center items-center pt-20 pb-14">
        <GlowingButton className="border-2 border-white/10 px-8 py-2 text-xl font-semibold tracking-widest rounded-3xl mb-4">
          GALLERY
        </GlowingButton>
      </div>

      {/* Card Container */}
      <div className="relative rounded-lg shadow-lg">
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-2">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative h-[500px] max-sm:h-[200px] md:h-[300px] w-full"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md w-full h-auto overflow-hidden hover:brightness-200 transition duration-100"
              />
            </div>
          ))}
        </div>

        {/* Centered Gallery Name Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-gallery max-sm:text-5xl bg-opacity-60 px-4 py-1 text-2xl font-bold rounded">
            Gallery
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Gallery;


// Hardcoded values

// import Image from 'next/image'
// import GalleryImg from '../../../public/gallery.svg'
// import img1 from '../../assets/gallery1.svg'
// import img2 from '../../assets/gallery2.svg'
// import img3 from '../../assets/gallery3.svg'
// import img4 from '../../assets/gallery4.svg'
// import img5 from '../../assets/gallery5.svg'
// import img6 from '../../assets/gallery6.svg'
// import img7 from '../../assets/gallery7.svg'
// import img8 from '../../assets/gallery8.svg'
// import img9 from '../../assets/gallery9.svg'
// import img10 from '../../assets/gallery10.svg'
// import img11 from '../../assets/gallery11.svg'
// import img12 from '../../assets/gallery12.svg'
// import img13 from '../../assets/gallery13.svg'



// const Gallery = () => {
//   return (
//     <>
//     <section id='gallery' className="bg-cover bg-center h-[968px] text-white"
//     style={{ backgroundImage: `url(${GalleryImg.src})` }}>
//       <div className='flex justify-center items-center'>
//       <button className='border-2 border-white/10 mt-12 px-8 py-2 text-xl font-primary font-semibold tracking-widest rounded-3xl mb-10'>GALLERY</button>
//       </div>


// <div>
// <div>
//     <h1 className='font-primary font-bold text-center'>Gallery</h1>
//   </div>
// {/* Top Section Images */}

// <div className='flex flex-wrap gap-1 justify-around'>
//   <div className='hover:brightness-200 transition duration-100'>
// <Image src={img1} alt='GalleryImg'/>
//   </div>
//   <div className='hover:brightness-200 transition duration-300'>
//   <Image src={img2} alt='GalleryImg'/>
//   </div>
//   <div className='hover:brightness-200 transition duration-300'>
//   <Image src={img3} alt='GalleryImg'/>
//   </div>
//   <div className='hover:brightness-200 transition duration-300'>
//   <Image src={img8} alt='GalleryImg'/>
//   </div>
//   <div className='hover:brightness-200 transition duration-300'>
//   <Image src={img9} alt='GalleryImg'/>
//   </div>
//   <div className='hover:brightness-200 transition duration-300'>
//   <Image src={img10} alt='GalleryImg'/>
//   </div>
//   <div className='hover:brightness-200 transition duration-300'>
// <Image src={img4} alt='GalleryImg'/>
//   </div>
//   <div className='flex gap-1 justify-around space-y-3'>

// <div className='hover:brightness-200 transition duration-300'>
// <Image src={img5} alt='GalleryImg'/>
// </div>


// <div className='flex gap-3'>
// <div className='hover:brightness-200 transition duration-300'>
// <Image src={img6} alt='GalleryImg'/>
// </div>
// <div>
// <Image src={img7} alt='GalleryImg' className='hover:brightness-200 transition duration-300'/>
// </div>
// </div>

// <div className='flex gap-3'>
// <div className='hover:brightness-200 transition duration-300'>
// <Image src={img11} alt='GalleryImg'/>
// </div>
// <div className='hover:brightness-200 transition duration-300'>
// <Image src={img12} alt='GalleryImg'/>
// </div>
// <div className='hover:brightness-200 transition duration-300'>
// <Image src={img13} alt='GalleryImg'/>
// </div>
// </div>


// </div> 
// </div>


// </div>
//     </section>
   
// </>  
//   )
// }

// export default Gallery


















// Top Section Images

{/* <div className='flex gap-3 justify-center'>
  <div className='hover:brightness-200 transition duration-100'>
<Image src={img1} alt='GalleryImg'/>
  </div>
  <div className='hover:brightness-200 transition duration-300'>
  <Image src={img2} alt='GalleryImg'/>
  </div>
  <div className='hover:brightness-200 transition duration-300'>
  <Image src={img3} alt='GalleryImg'/>
  </div>
  <div className='hover:brightness-200 transition duration-300'>
  <Image src={img8} alt='GalleryImg'/>
  </div>
  <div className='hover:brightness-200 transition duration-300'>
  <Image src={img9} alt='GalleryImg'/>
  </div>
  <div className='hover:brightness-200 transition duration-300'>
  <Image src={img10} alt='GalleryImg'/>
  </div>
</div> */}

{/* bottom Section Images */}

{/* <div className='flex justify-center gap-3 space-y-3'>
<div className='relative top-3 hover:brightness-200 transition duration-300'>
<Image src={img4} alt='GalleryImg'/>
</div>
<div className='relative bottom-194 hover:brightness-200 transition duration-300'>
<Image src={img5} alt='GalleryImg'/>
</div>


<div className='flex flex-col gap-3'>
<div className='relative bottom-403 hover:brightness-200 transition duration-300'>
<Image src={img6} alt='GalleryImg'/>
</div>
<div>
<Image src={img7} alt='GalleryImg' className='relative bottom-403 hover:brightness-200 transition duration-300'/>
</div>
</div>

<div className='flex gap-3'>
<div className='relative  bottom-194 hover:brightness-200 transition duration-300'>
<Image src={img11} alt='GalleryImg'/>
</div>
<div className='relative bottom-108 hover:brightness-200 transition duration-300'>
<Image src={img12} alt='GalleryImg'/>
</div>
<div className='hover:brightness-200 transition duration-300'>
<Image src={img13} alt='GalleryImg'/>
</div>
</div>

<div>
    <h1 className='font-primary font-bold text-center'>Gallery</h1>
  </div>


</div>  */}
