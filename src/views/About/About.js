import React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Default from '../../components/Default';

const About = () => {
	gsap.registerPlugin(ScrollTrigger);

	const ref = useRef(null);

	useEffect(() => {
		const element = ref.current;

        document.body.style.overflow = 'auto';
        document.scrollingElement.scrollTo(0, 0);

		gsap.utils.toArray('section').forEach((section, index) => {
			const w = element.querySelector('.text_wrapper');
			const [x, xEnd] =
				index % 2
					? ['100%', (w.scrollWidth - section.offsetWidth) * -1]
					: [w.scrollWidth * -1, 0];
			gsap.fromTo(
				w,
				{ x },
				{
					x: xEnd,
					scrollTrigger: {
						trigger: section,
						scrub: 0.5,
					},
				}
			);
		});
	}, []);

	return (
		<Default>
			<div className="about">
                <img src="/images/omono.jpg" alt="" className='about_img'/>
                <section className="about_wrap" ref={ref}>
                    <p className="text_wrapper">SOFTWAREDEVELOPERARCHITECT</p>
				</section>
			</div>
		</Default>
	);
};

export default About;
