import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import pic from "../../public/crabfry2.jpeg"
import pic1 from "../../public/crabBurger.jpg"
import pic2 from "../../public/crabPlatter.jpg"
import pic3 from "../../public/fried-soft.jpg"
import Image from 'next/image';

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
  <Image src={pic} onDragStart={handleDragStart} role="presentation" />,
  <Image src={pic1} onDragStart={handleDragStart} role="presentation" />,
  <Image src={pic2} onDragStart={handleDragStart} role="presentation" />,
  <Image src={pic3} onDragStart={handleDragStart} role="presentation" />,
  <Image src={pic} onDragStart={handleDragStart} role="presentation" className='opacity-0' />
];

const CarouNew = () => {
  return (
    <div className='w-2/3 mt-10'>
        <AliceCarousel responsive={responsive} mouseTracking items={items} />
    </div>
  )
}

export default CarouNew