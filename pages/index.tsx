import Head from "next/head";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";

export default function Home() {
  return (
    <>
    <Head>
      <title>Portfolio</title>
     
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="icon" type="image/svg" sizes="32x32" href="/img/NooByara.png"/>
    </Head>
    <Header />
    <main>
      <Hero />
      <About />
    </main>
      <div className="background-animation">
        <div id="ball-one"></div>
        <div id="ball-two"></div>
        <div id="ball-three"></div>
      </div>
      </>
  )
    
  
}
