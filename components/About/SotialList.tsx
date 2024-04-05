/* eslint-disable @next/next/no-img-element */

import exp from 'constants';
import  styles from '../../styles/socialList.module.scss';


const SocialList = () => {
    return (
        <ul className={styles.social__list}>
            <li className={styles.social__list__item}>
                <a href="#" className={styles.social__list__item__link}>
                    <span className={styles.social__list__item__link__text}>GitHub</span>
                    <span className={styles.social__list__item__icon}>
                        <img className={styles.social__list__item__img} src="/img/github1.png" alt="GitHub" />
                    </span>
                </a>
            </li>
            <li className={styles.social__list__item}>
                <a href="#" className={styles.social__list__item__link}>
                    <span className={styles.social__list__item__link__text}>Telegram</span>
                    <span className={styles.social__list__item__icon}>
                        <img className={styles.social__list__item__img} src="/img/telegram_2111646.png" alt="Telegram" />
                    </span>
                </a>
            </li>
            <li className={styles.social__list__item}>
                <a href="#" className={styles.social__list__item__link}>
                    <span className={styles.social__list__item__link__text}>GitHub</span>
                    <span className={styles.social__list__item__icon}>
                        <img className={styles.social__list__item__img} src="/img/GitHub.png" alt="GitHub" />
                    </span>
                </a>
            </li>

        </ul>
    );
}

export default SocialList;