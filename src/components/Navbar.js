import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Divide as Hamburger } from 'hamburger-react';

const Navbar = () => {
	// const [isOpen, setOpen] = useState(false);
    // const[isActive, setIsActive] = useState(false)

    // const showMenu = () => {
    //     setIsActive(!isActive)
    // }

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const showAnim = gsap.from('.navbar', { 
			yPercent: -100,
			paused: true,
			duration: 0.2
		}).progress(1);
		
		ScrollTrigger.create({
			start: "top top",
			end: 99999,
			onUpdate: (self) => {
			self.direction === -1 ? showAnim.play() : showAnim.reverse()
			}
		});
        
	}, []);

	return (
		<>
			<navbar className="navbar">
				<div className="navbar_logo">
					<Link to='/'>
						<h4>Daisy</h4>   
					</Link>
				</div>

				<div className="navbar_menu">
					{/* <Hamburger
						toggled={isOpen}
						toggle={setOpen}
						size={25}
						direction="left"
						duration={0.2}
						distance="sm"
						color="#000"
						easing="ease-in"

                        onToggle={showMenu}
					/> */}
				</div>

				<div className="navbar_links sidebar">
					<div className="navlinks">
						<Link to="/about">
							About
						</Link>

						<Link to="/projects">
							Project
						</Link>
					</div>
				</div>

				<div className="contact">
					<Link to='/contact'>
						contact
					</Link>
				</div>
			</navbar>
		</>
	);
};

export default Navbar;
