import "./style.css";

import vk from './../../img/icons/vk.svg';

import gitHub from './../../img/icons/gitHub.svg';
import tg from './../../img/icons/IconTG.png';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="#!">
								<img src={vk} alt="Link" />
							</a>
						</li>
						
						<li className="social__item">
							<a href="#!">
								<img src={tg} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="#!">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
						
					</ul>
					<div className="copyright">
						<p>© 2024 Ациклотрон</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;