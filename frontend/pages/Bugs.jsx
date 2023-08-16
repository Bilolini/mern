import { Carousel } from 'flowbite-react'
import React from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

function Bugs() {
    const arrOfBugs = [
        "http://localhost:5000/images/error_1.png",
        "http://localhost:5000/images/error_2.png",
        "http://localhost:5000/images/error_3.png",
    ]
    return (
        <div className='w-full h-96 mt-5'>
            <Carousel
             leftControl={<FaChevronCircleLeft />}
             rightControl={<FaChevronCircleRight />}
            >
                {arrOfBugs.map((elem, index) => {
                    return (
                        <img key={index} src={elem} alt='' className='p-8' />
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Bugs;