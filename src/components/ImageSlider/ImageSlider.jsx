import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImageSlider.css';
import image1 from '../../assets/images/slider/GlyphicX.png';
import image2 from '../../assets/images/slider/EAXEE.png';

const images = [image1, image2];

const variants = {
    enter: {
        opacity: 0,
        scale: 10,
        transition: {
            opacity: { duration: 0.8 },
            scale: { type: 'spring', stiffness: 300, damping: 30 }
        }
    },
    center: {
        zIndex: 1,
        opacity: 1,
        scale: 1,
        transition: {
            opacity: { duration: 0.8 }
        }
    },
    exit: {
        zIndex: 0,
        opacity: 0,
        scale: 0.8,
        transition: {
            opacity: { duration: 0.8 },
            scale: { type: 'spring', stiffness: 300, damping: 30 }
        }
    },
};


const ImageSlider = () => {
    
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            paginate(1);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [page]);

    const imageIndex = page % images.length;

    return (
        <div className="slider">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={images[imageIndex]}
                    alt={`Slide ${imageIndex + 1}`}
                    className="slide"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 1 },
                        scale: { type: 'spring', stiffness: 300, damping: 30 },
                        rotate: { type: 'spring', stiffness: 300, damping: 30 },
                        skew: { type: 'spring', stiffness: 300, damping: 30 }
                    }}
                />
            </AnimatePresence>
        </div>
    );
};

export default ImageSlider;
