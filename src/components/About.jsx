import React from 'react'
import Image from '../assets/man-with-team.jpg'
import People from '../assets/people.png'
import Speed from '../assets/speed.png'
import { BsFillPlayFill } from 'react-icons/bs'
import { Fade, Slide } from 'react-reveal'

export default function About() {
    return (
        <div id='about' className='flex flex-col justify-center bg-neutral-50 w-full px-6 sm:px-12 lg:px-32 py-20 flex flex-col items-center'>
            <div className="sm:w-4/6 md:w-3/5 xl:w-2/5 text-center mb-20">
                <Fade left>
                    <h2 className='font-bold mb-4 text-gray-700 text-4xl font-martel'>Who We Are</h2>
                    <p className='text-gray-400 text-sm'>Problems trying to resolve the conflict between the two major realms
                        of Classical physics: Newtonian mechanics  </p>
                </Fade>
            </div>
            <div className="grid md:grid-cols-2 gap-20">
                <Slide left className='w-full'>
                    <div className="group cursor-pointer relative shadow-xl overflow-hidden">
                        <img className='transition-all duration-300 group-hover:scale-125 w-full h-full object-cover' src={Image} alt="team" />
                        <div className="group absolute text-white z-10 bg-cyan-800 rounded-full text-3xl p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <BsFillPlayFill />
                        </div>
                        <div className="absolute top-0 bg-gradient-to-t from-neutral-800 to-transparent w-full h-full"></div>
                    </div>
                </Slide>
                <div className="flex flex-col justify-center">
                    <Slide right damping={0.1} direction='right' className='w-full'>
                        <h3 className='font-bold mb-4 text-gray-700 text-4xl font-martel'>Most trusted in our field</h3>
                        <p className='text-gray-400 text-sm mb-10'>Most calendars are designed for teams. Slate
                            is designed for freelancers who want a
                            simple way to plan their schedule.</p>
                        <div className="flex items-start gap-6 mb-8">
                            <img className='object-contain' src={People} alt="people" />
                            <div className=" flex flex-col gap-2">
                                <p className='font-martel font-bold text-gray-700'>the quick fox jumps over the lazy dog</p>
                                <p className='text-gray-500 font-bold text-sm'>Things on a very small scale ...</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6">
                            <img className='object-contain' src={Speed} alt="people" />
                            <div className=" flex flex-col gap-2">
                                <p className='font-martel font-bold text-gray-700'>the quick fox jumps over the lazy dog</p>
                                <p className='text-gray-500 font-bold text-sm'>Things on a very small scale ...</p>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    )
}
