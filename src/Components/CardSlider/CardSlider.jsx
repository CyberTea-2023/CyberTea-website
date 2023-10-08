import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './CardSlider.css';
import Card from './Card/Card';
import Autoplay from 'embla-carousel-autoplay';

import speakersData from './speakersData';

export const CardSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ speed: 2000 })]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(5, true);
    }
  }, [emblaApi]);

  return (
    <div id="speakers">
      <h1 className="heading">Speakers</h1>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {speakersData.map((speaker, index) => (
            <div className="embla__slide" key={index}>
              <Card
                photo={speaker.photo}
                name={speaker.name}
                abt={speaker.abt}
                link={speaker.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
