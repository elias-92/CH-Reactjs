import { CartWidget } from '../CartWidget';
import styles from './header.module.css';

export const Header = () => {
	return (
		<nav>
			<div className={styles.container}>
				<img
					className={styles.logo}
					src={`${process.env.PUBLIC_URL}/assets/images/logo-pastaflori.png`}
					alt="logo"
				/>
				<ul className={styles.navUl}>
					<li className={styles.navItem}>
						<a className={styles.navLink} href="/">
							Inicio
						</a>
					</li>
					<li className={styles.navItem}>
						<a className={styles.navLink} href="/">
							Tienda
						</a>
					</li>
					<li className={styles.navItem}>
						<a className={styles.navLink} href="/">
							Novias
						</a>
					</li>
					<li className={styles.navItem}>
						<a className={styles.navLink} href="/">
							Nosotros
						</a>
					</li>
					<li className={styles.navItem}>
						<a className={styles.navLink} href="/">
							Encuentranos
						</a>
					</li>
				</ul>
				<CartWidget />
			</div>
		</nav>
	);
};
