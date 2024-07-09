import React, { useEffect, useRef } from 'react';
import '../imagesequence/imageSequenceScroll.css';

const ImageSequenceScroll = () => {
    const containerRef = useRef(null);
    const frames = 86;
    const images = [];

    useEffect(() => {
        const container = containerRef.current;

        // Load images
        for (let i = 1; i <= frames; i++) {
            const img = new Image();
            img.src = `/renders/00${i}.png`;
            img.id = `frame00${i}`; 
            img.classList.add('sequence-image');
            images.push(img);
            container.appendChild(img);
        }

        let currentFrame = 0;

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            let scrollFraction = (scrollTop / maxScroll)*3;
            if (window.innerWidth < 808) { 
                scrollFraction *= 2.5; 
            }
            currentFrame = Math.min(frames - 1, Math.ceil(scrollFraction * frames));

            images.forEach((img, index) => {
                img.style.display = index === currentFrame ? 'block' : 'none';
            });
        };

        // Initial display
        images[0].style.display = 'block';

        // Attach scroll event
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <div id="container" ref={containerRef}></div>;
};

export default ImageSequenceScroll;
