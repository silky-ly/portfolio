import React from 'react';

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="footer_wrap">
					<div className="footer_chat">
						<h3>Talk To Me</h3>
					</div>

					<div className="footer_email">
						<a
							href="mailto: faithamiekhame@gmail.com"
							className="footer_text"
						>
							<span className="footer_span">
								faithamiekhame@gmail.com
							</span>
						</a>
					</div>

					<div className="footer_socials">
						<div className="footer_social">
							<a
								href="https://www.github.com/faith-amiekhame"
								className="footer_social_icons"
							>
								<i class="fab fa-github"></i>
							</a>
							<a
								href="https://www.instagram.com/sultry_daisy"
								className="footer_social_icons"
							>
								<i class="fab fa-instagram"></i>
							</a>
							<a
								href="https://www.linkedin.com/faith-amiekhame"
								className="footer_social_icons"
							>
								<i class="fab fa-linkedin-in"></i>
							</a>
							<a
								href="https://www.twitter.com/sultry_daisy"
								className="footer_social_icons"
							>
								<i class="fab fa-twitter"></i>
							</a>
						</div>
					</div>
				</div>

				<div className="footer_copyright">
					<p>&copy; 2022 Omono. All Rights Reserved</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
