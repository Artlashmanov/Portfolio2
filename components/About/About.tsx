/* eslint-disable @next/next/no-img-element */
import  styles from '../../styles/about.module.scss';
import ArrowSvg from '../ArrowSvg/ArrowSvg';
import MainTitle from '../MainTitle/MainTitle';
import SocialList from './SotialList';

const About = () => {
    return(
        <section className={styles.about} id='about'>
            <div className="container">
                <MainTitle text='Обо мне' />
            </div>
            <div className={`sub-container ${styles.about__sub_container}`}>
                <img className={styles.about__img} src="/img/about.png" alt="avatar" />
                    <div className={styles.about__inner}>
                        <h3 className={styles.about__title}>
                            NooByara corp.
                            <span className={styles.about__title__border}>
                                    <span className={styles.about__title__border__arrow}>
                                        <ArrowSvg />
                                    </span>
                                <span className={styles.about__title__border__line} />
                            </span>
                        </h3>
                        <div className={styles.about__text}>
                        <p>
                            Здесь должен быть текcт о том где я работаю и что делаю.
                        </p>    
                           <p>Если даже ничего не делаю, всё равно надо написать.
                           </p>
                        
                        </div>
                        <SocialList />
                    </div>
            </div>

        </section>

    );
}

export default About;