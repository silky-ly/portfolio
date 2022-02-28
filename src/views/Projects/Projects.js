import React, { useEffect } from 'react';
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import Default from '../../components/Default';

const Projects = () => {
    // gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		let proxy = { skew: 0 },
			skewSetter = gsap.quickSetter('.project_image', 'skewY', 'deg'),
			clamp = gsap.utils.clamp(-20, 20);

		ScrollTrigger.create({
			onUpdate: (self) => {
				let skew = clamp(self.getVelocity() / -300);
				if (Math.abs(skew) > Math.abs(proxy.skew)) {
					proxy.skew = skew;
					gsap.to(proxy, {
						skew: 0,
						duration: 0.8,
						ease: 'power3',
						overwrite: true,
						onUpdate: () => skewSetter(proxy.skew),
					});
				}
			},
		});

		gsap.set('.project_image', {
			transformOrigin: 'right center',
			force3D: true,
		});
	});
	return (
		<Default>
			<div className="projects">
				<div className="project_title_wrap">
					<h4 className="project_title">
						Interesting Projects <span></span>
					</h4>
				</div>

				<div className="project_works">
					<div className="project_row">
						<div className="project_card">
							<div className="project_cardbody">
								<a href="#e" className="project_link">
									<img
										src="/images/minimal.jpg"
										alt=""
										className="project_image"
									/>
								</a>
							</div>
						</div>
						<div className="project_card">
							<div className="project_cardbody">
								<a href="#e" className="project_link">
									<img
										src="/images/minimal.jpg"
										alt=""
										className="project_image"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Default>
	);
};

export default Projects;
