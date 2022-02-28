import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/all';
import { TextPlugin } from "gsap/TextPlugin"
import Default from '../../components/Default';
// import Preloader from '../../components/Preloader';


const Home = () => {
	// const [loading, setLoading] = useState(true);
	gsap.registerPlugin(ScrollTrigger, Flip, TextPlugin);

	useEffect(() => {
		// setTimeout(() => {
		// 	setLoading(false);
		// }, 5000);

		// -----------------------------------------
		// LAYERED PINNING.

			// VERTICAL LAYERING.
				// gsap.utils.toArray("section").forEach((stn, i) => {
				// 	ScrollTrigger.create({
				// 	  trigger: stn,
				// 	  start: "right right", 
				// 	  pin: true, 
				// 	  pinSpacing: false 
				// 	});
				//   });
				
				//   ScrollTrigger.create({
				// 	snap: 1 / 4     // snap whole page to the closest section!
				//   });

			// HORIZONTAL LAYERING.
				const sections = gsap.utils.toArray('section');
				gsap.to(sections, {
				xPercent: -100 * (sections.length - 1),
				ease: "none",
				scrollTrigger: {
					trigger: ".re",
					pin: true,
					scrub: 1,
					snap: 1 / (sections.length - 1),
					// base vertical scrolling on how wide the container is so it feels more natural.
					end: "+=3500",
					}
				});
		// -----------------------------------------


		// -----------------------------------------
		//   SPLIT TEXT.


		// -----------------------------------------


		// ------------------------------------
		// HOME_OVERLAY BEFORE SHOWING THE HOME CONTENT.

			const tl = gsap.timeline();
			tl.to('.home_overlay', {
				y:'-100%',
				duration: 2,
				delay: 2,
				ease: 'Expo.easeInOut',
			})

			tl.to('.section_one_overlay', {
				y: '-100%',
				duration: 1,
				delay: 1,
				ease: 'Expo.easeInOut',
			})

			tl.fromTo('.navbar_logo, .navlinks, .contact', {
				y: '100%',
				opacity: 0,
			}, {
				y: '0%',
				opacity: 1,
				duration: 1,
				stagger: 0.25,
			})
		// -----------------------------------------


		// -----------------------------------------
		// TEXT ANIMATION.

			let stl = gsap.timeline({
				scrollTrigger: {
					trigger: '.section_one_text',
					scrub: 1,
					start: "top bottom", // position of trigger meets the scroller position
					end: "bottom top"
				}
			});

			stl.to('.section_one_text p', {
				x: 350,
				ease: 'power4.in',
				duration: 3,
			})

			const tu = gsap.timeline();
			// tl.fromTo('.section_one_directs a', {
			// 	duration: 3,
			// 	x: 0,
			// 	opacity: 0,
			// }, {
			// 	x: 200, 
			// 	duration: 4, 
			// 	opacity: 1,
			// 	// stagger:0.25,
			// 	ease: 'bounce',
			// })

			tu.from('.section_one_span', {
				duration: 1,
				opacity: 0,
				y: 'random(-200, 200)',
				// y: () => Math.random() * 400 - 200,
				stagger: 0.25,
				scale: 0.1
			})

			tu.to('.circle', {
				duration: 1,
				rotation: 360,
				// repeat: -1,
			})

			gsap.fromTo("#logo", {
				width: 0, 
				height: 0}, 
				{
					duration: 1.5, 
					width: 100, 
					height: 200});
		// ------------------------------------------


		// -----------------------------------------
		// FLIP --- EXPAND.

			// const square = document.querySelector(".square");
			// 	square.addEventListener("click", () => {
			// 	const state = Flip.getState(square);
			// 	square.classList.toggle("full-screen");
			// 	Flip.from(state);
			// });
		// -----------------------------------------
	});

	return (
		<>
			{/* {loading ? <Preloader /> : ''} */}

			<Default>
				<div className="home" id="home">
					<div className="home_overlay"></div>

					<div className="re">
						<section className="section_one home_section-1">

							<div className="section_one_text">
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repellendus.</p>
							</div>

							<h3 className='section_one_title'>
								<span className='section_one_span'>D</span>
								<span className='section_one_span'>A</span>
								<span className='section_one_span'>I</span>
								<span className='section_one_span'>S</span>
								<span className='section_one_span'>Y</span>
							</h3>

							<div className="section_one_line1"></div>
							<div className="section_one_line2"></div>

							<div className="section_one_img">
								<div className="section_one_overlay"></div>
								<img src="/images/omono.jpg" alt="" />
							</div>

							<div className="circle"></div>

							<div className="section_one_directs">
								<Link to='/projects'>view projects <i class="fa-solid fa-arrow-right-long"></i></Link>
							</div>
						</section>

						<section className="home_section home_section-2"></section>
						<section className="home_section home_section-3"></section>
						<section className="home_section home_section-4"></section>
					</div>
				</div>
			</Default>
		</>
	);
};

export default Home;
