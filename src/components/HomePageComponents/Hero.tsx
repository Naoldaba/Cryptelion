import React from 'react'
import heroImgae from "../assets/gr2.png"
import Image from 'next/image'
import hero1 from "../../assets/hero1.png"
import hero2 from "../../assets/hero2.png"
import hero3 from "../../assets/hero3.png"
import hero4 from "../../assets/hero4.png"
import hero5 from "../../assets/hero5.png"
import hero6 from "../../assets/hero6.png"
import Marquee from 'react-fast-marquee';


const Hero = () => {

    return (
        <div className=''>

            <div className='heroTopBackgroundHold flex'>
                <div className="herobg1 w-full bg-white h-24">
                </div>
                <div className="herobg2 w-full h-24">

                </div>

            </div>
            <div className="flex HeroParenTHold flex-wrap md:flex-nowrap justify-evenly items-center">
                <div className="heroChildOneHold flex-col flex justify-center items-center">
                    <div className="heroChild1">

                        <div className="heroInnerChild1 flex flex-col gap-4">
                            <div>
                                <p className='text-4xl interFont font-normal'>
                                    Discover, Track, and <br />
                                    Thrive in Crypto<br />
                                    Anywhere.
                                </p>
                            </div>

                            <p className=' font-semibold'>Track your favourite CryptoCoins on<br /> 
                                the go all at one place.<br />
                            </p>

                            <button className='flex justify-center items-center mt-8 w-36 h-10 rounded bg-black text-white font-semibold transition-all ease-in-out duration-500 hover:bg-transparent hover:border hover:text-black border-black' onClick={() => window.scrollTo({
                                behavior: "smooth",
                                top : 1100
                            })}>Learn More</button>
                        </div>

                    </div>

                    <div className="heroStatsHold bg-white text-black flex justify-center items-center lg:gap-20 gap-12 md:gap-8 w-full h-28 mt-16 sm:pl-0 sm:pr-0 pl-3 pr-3">
                        <div className='heroStat1 pt-3 pb-3 font-semibold flex flex-col'>
                            <p className='md:text-2xl text-xl font-normal interFont'>13K+</p>
                            <p className='text-gray-500 font-normal text-xs md:text-sm lg:text-base interFont'>Worldwide</p>
                            <p className='interFont text-gray-500 text-xs md:text-sm lg:text-base font-medium'>Crypto Currencies</p>
                        </div>

                        <div className='heroStat1 pt-3 pb-3 font-semibold flex flex-col'>
                            <p className='md:text-2xl text-xl font-normal interFont'>60+</p>
                            <p className='text-gray-500 font-normal text-xs md:text-sm lg:text-base interFont'>Major Exchanges</p>
                            <p className='interFont text-gray-500 text-xs md:text-sm lg:text-base font-medium'>All Over The World</p>
                        </div>

                        <div className='heroStat1 pt-3 pb-3 font-semibold flex flex-col'>
                            <p className='md:text-2xl text-xl font-normal interFont'>420M+</p>
                            <p className='text-gray-500 font-normal text-xs md:text-sm lg:text-base interFont'>Total Number Of</p>
                            <p className='interFont text-gray-500 text-xs md:text-sm lg:text-base font-medium'>Crpto Currency Users</p>
                        </div>
                    </div>


                </div>

                <div className="heroChildHold2 flex justify-center items-center">

                    <div className="heroCarouselHold flex items-center">
                        <Marquee play={true} speed={80} pauseOnHover={true} gradient={false}>
                            <Image src={hero1} quality={100} priority className='heroCaroImage w-48' alt='Carousel image' />
                            <Image src={hero2} quality={100} priority className='heroCaroImage w-48' alt='Carousel image' />
                            <Image src={hero3} quality={100} priority className='heroCaroImage w-48' alt='Carousel image' />
                            <Image src={hero4} quality={100} priority className='heroCaroImage w-48' alt='Carousel image' />
                            <Image src={hero5} quality={100} priority className='heroCaroImage w-48' alt='Carousel image' />
                            <Image src={hero6} quality={100} priority className='heroCaroImage w-48' alt='Carousel image' />
                        </Marquee>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
      
