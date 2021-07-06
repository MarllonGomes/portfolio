import Link from "next/link";
import PageConfig from '../config/config';

export default function Hero() {
  const sectionData = PageConfig.heroSection;
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hidden">{PageConfig.logo.firstLine} {PageConfig.logo.secondLine} - {sectionData.title}</h1>
        <h2 className="hero__title">{sectionData.title}</h2>
        <p className="hero__subtitle">{sectionData.description}</p>
        <div className="hero__buttons-wrapper">
        {sectionData.buttons.map(item => {
          return item.target !== 'blank' 
            ? <Link key={String(item.url)} href={String(item.url)}><a className="hero__btn">{item.text}</a></Link>
            : <a key={String(item.url)} rel="noreferrer" className="hero__btn" target="_blank" href={String(item.url)}>{item.text}</a>
        })}
        </div>
      </div>
    </section>
  );
}