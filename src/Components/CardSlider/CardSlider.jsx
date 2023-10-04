import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './CardSlider.css'
import Card from './Card/Card'
import Autoplay from 'embla-carousel-autoplay'
import p1 from '../../assets/Speakers/KrishnaSastryPendyala.jpeg'
import p2 from '../../assets/Speakers/SomanathTripathy.png'
import p3 from '../../assets/Speakers/AvkashKathiriya.jpeg'
import p4 from '../../assets/Speakers/NeeteshSaxena.jpeg'
import p5 from '../../assets/Speakers/PadmalochanBera.jpeg'
import p6 from '../../assets/Speakers/BataKrishnaTripathy.jpeg'
import p7 from '../../assets/Speakers/UjvalBucha.jpeg'
import p8 from '../../assets/Speakers/ChinmayMishra.jpg'
import p9 from '../../assets/Speakers/IrshadhAbdulRasheed.jpeg'
import p10 from '../../assets/Speakers/MaliniRao.jpeg'
import p11 from '../../assets/Speakers/RajeshKumarDilli.jpeg'
import p12 from '../../assets/Speakers/AdityaJapa.jpg'
import p13 from '../../assets/Speakers/SaumyaBhadauria.jpeg'
import p14 from '../../assets/Speakers/DR.DEEPAK.jpeg'
import p15 from '../../assets/Speakers/Ravi.jpg'

export const CardSlider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ speed: 2000 })]);


  return (
    <div className="card-slider">
      <h1 className="heading">Speakers</h1>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide"><Card photo={p1} name={"Mr. Krishna Sastry Pendyala"} abt={"Ernst & Young Global Limited"} link={"https://www.linkedin.com/in/krishna-sastry-pendyala-4573128/"} /></div>
          <div className="embla__slide"><Card photo={p2} name={"Prof. Somanath Tripathy"} abt={"IIT Patna"} link={"https://www.iitp.ac.in/~som/"} /></div>
          <div className="embla__slide"><Card photo={p3} name={"Mr. Avakash Kathiriya"} abt={"Cyware India"} link={"https://www.linkedin.com/in/avkash-kathiriya/"} /></div>
          <div className="embla__slide"><Card photo={p4} name={"Dr. Neetesh Saxena"} abt={"Cardiff University"} link={"https://www.linkedin.com/in/neeteshsaxena/?originalSubdomain=uk"} /></div>
          <div className="embla__slide"><Card photo={p5} name={"Dr. Padmalochan Bera"} abt={"IIT Bhubaneswar"} link={"https://www.linkedin.com/in/dr-padmalochan-bera-aa15a515/"} /></div>
          <div className="embla__slide"><Card photo={p6} name={"Dr. Batakrishna Tripathy"} abt={"National Informatics Centre"} link={"https://www.linkedin.com/in/dr-bata-krishna-tripathy-a90a6849/?originalSubdomain=in"} /></div>
          <div className="embla__slide"><Card photo={p7} name={"Mr. Ujjval Bucha"} abt={"Cyware India"} link={"https://www.linkedin.com/in/ujvalbucha/"} /></div>
          <div className="embla__slide"><Card photo={p8} name={"Mr. Chinmaya Mishra"} abt={"Microsoft India"} link={"https://www.linkedin.com/in/chinmaya-mishra-21223023/"} /></div>
          <div className="embla__slide"><Card photo={p9} name={"Mr. Irshadh Abdul Rashid"} abt={"Ernst & Young Global Limited"} link={"https://www.linkedin.com/in/irshadh/?originalSubdomain=in"} /></div>
          <div className="embla__slide"><Card photo={p10} name={"Ms. Malini Rao"} abt={"Deeplearncyber.AI"} link={"https://www.linkedin.com/in/malini-rao-cissp-cciso-gcio-cism-ccsk-aws-2x-dpo-65919b4"} /></div>
          <div className="embla__slide"><Card photo={p11} name={"Mr. Rajesh"} abt={"Ernst & Young Global Limited"} link={"https://www.linkedin.com/in/rajesh-kumar-dilli-359336240/"} /></div>
          <div className="embla__slide"><Card photo={p12} name={"Dr. Aditya Japa"} abt={"Queen's University, UK"} link={"https://www.qub.ac.uk/schools/eeecs/Connect/Staff/BusinessCard/?name=j.japa"} /></div>
          <div className="embla__slide"><Card photo={p13} name={"Dr. Saumya Bhadauria"} abt={"ABV-IIITM Gwalior"} link={"https://www.linkedin.com/in/saumya-bhadauria-4a44843b/?originalSubdomain=in"} /></div>
          <div className="embla__slide"><Card photo={p14} name={"Dr. Deepak Kumar"} abt={"Ministry of Home Affairs-GoI"} link={"https://www.linkedin.com/in/d3pak/?originalSubdomain=in"} /></div>
          <div className="embla__slide"><Card photo={p15} name={"Mr. Ravi Subbiah"} abt={"TCS India"} link={"https://www.linkedin.com/in/ravi-subbiah-8443309/"} /></div>

        </div>
      </div>
    </div>
  )
}
