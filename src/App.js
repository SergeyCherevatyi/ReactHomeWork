import logo from './logo.svg';
import './App.css';

const MenuItem = ({adress="#", name="menu_item"}) =>
    <li>
      <a href={adress}>{name}</a>
    </li>

const Menu = () =>
    <ul>
      <MenuItem adress="#about" name="About us"/>
      <MenuItem adress="#reservation" name="Reservation"/>
      <MenuItem adress="#gallery" name="Gallery"/>
      <MenuItem name="Blog"/>
      <MenuItem name="Elements"/>
      <MenuItem adress="#shop" name="Shop"/>
    </ul>

const Header = () =>
  <header className="page-header">
    <div  className="container">
      <div className="logo">
        <a href="#">
          <img src="images/logo.png" alt="#"/>
        </a>
      </div>
      <div className="nav-holder">
        <nav className="nav-menu">
          <Menu/>
        </nav>
      </div>
    </div>
  </header>  

const FormInput = ({name="name", type="text", descr="No description" }) => 
  <input name={name} required type={type} placeholder={descr}/>

const Form = () => 
  <div className="form-holder">
    <h2>Trial Class</h2>
    <form action="#" className="trial-form">
      <FormInput name="name" type="text" descr="Enter your name"/>
      <FormInput name="phone" type="tel" descr="Enter your phone"/>
      <FormInput/>
      <select name="select_form" required>
        <option value="" disabled selected>Chose your class</option>	<option>Class 1</option>
        <option>Class 2</option>
        <option>Class 3</option>
      </select>
      <button>Try it</button>
    </form>
  </div>

const TrialBlock = () => 
  <section className="trial-block">
    <div className="container">
      <a className="anchor" id="reservation"></a>
      <div className="wrapper-trial">
        <Form/>
        <div className="card-trial">
          <h1>Just Balance <br/> your Mind & Body</h1>
          <div className="sub_text">Create the healthy living <br/> for yourself</div>
        </div>
      </div>	
    </div>	
  </section> 

const ProgramCard = ({image="#",heading="Heading", children, author="without author"}) => 
  <>
    <div className="program-card">
    <img src={image} alt="training" className="image-card"/>
    <div className="text-holder">
      <h3>{heading}</h3>
      <div className="card-descr">
        {children}
      </div>
      <div className="card-sign">{author}</div>
    </div>
    </div>
  </>

const YogaProgram = () => 
  <>
    <section className="section-program">
      <div  className="container">
        <h2>Yoga FEATURE PROGRAM</h2>
        <div className="sub-program">Our Classes</div>
        <div className="holder-cards">
          <ProgramCard image="images/cards/img-01.jpg" heading="Yoga For Health" author="Ashtanga - Hatha" >
            Minim veniam, quis nostrud exercitation  sed do eiusmod tempor incididunt.
          </ProgramCard>
          <ProgramCard image="images/cards/img-02.jpg" heading="Yoga For Lose Weight" author="Ashtanga" >
            Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipisicing elit, sed do eiusmod tempor incididunt. Minim veniam, sed do eiusmod tempor.
          </ProgramCard>
          <ProgramCard image="images/cards/img-03.jpg" heading="Yoga For Children" author="Hatha" >
            Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipisicing elit, sed do eiusmod tempor incididunt.
          </ProgramCard>
          <ProgramCard image="images/cards/img-04.jpg" heading="Yoga For Elderly" author="Ashtanga - Hatha" >
            Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipisicing elit.
          </ProgramCard>
        </div>
      </div>	
    </section>
  </>

const GalleryItem = ({link="#"}) => 
<>
    <div className="img_hover">
      <a href="#" className="gallery_link">
        <img src={link} alt="image" className="img_gallery"/>
      </a>
      <div className="loupe">
        <img src="images/loupe.png" alt="loupe"/>
      </div>
    </div>
</>

const Gallery = () => 
  <>
    <a className="anchor" id="gallery"></a>
    <section className="section-gallery">
      <div className="gallery-wrapper">
        <GalleryItem link="images/img-05.jpg"/>
        <GalleryItem link="images/img-06.jpg"/>
        <GalleryItem link="images/img-07.jpg"/>
        <GalleryItem link="images/img-08.jpg"/>
        <GalleryItem link="images/img-09.jpg"/>
        <GalleryItem link="images/img-10.jpg"/>
        <GalleryItem link="images/img-11.jpg"/>
        <GalleryItem link="images/img-12.jpg"/>
      </div>
    </section>
  </>
  
const AdvantageCard = ({image="#", descr="cardDescr", children}) =>
  <div className="advantage-card">
    <img src={image} alt="adv-img" className="advant-img"/>
    <div className="advantage-name">
      {children}
    </div>
    <div className="advantage-descr">
      {descr}
    </div>
  </div>



const Advantage = () =>

  <section className="section-advantage">
    <div className="container">
      <div className="advantage-wrapper">
        <AdvantageCard image="images/item/item1.png" descr="Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.">
            IMPROVED OVERALL <br/> HEALT
        </AdvantageCard>

        <AdvantageCard image="images/item/item2.png" descr="Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.">
            INCREASED <br/> CONCENTRATION
        </AdvantageCard>

        <AdvantageCard image="images/item/item3.png" descr="Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.">
            BLANCE <br/> YOUR MIND
        </AdvantageCard>
        
        <AdvantageCard image="images/item/item4.png" descr="Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.">
            SLEEP <br/> BETTER
        </AdvantageCard>

        <AdvantageCard image="images/item/item5.png" descr="Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.">
            WEIGHT LOSS
        </AdvantageCard>
        <AdvantageCard image="images/item/item6.png" descr="Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.">
            STRENGTHENS <br/> YOUR BONE
        </AdvantageCard>

        <AdvantageCard image="images/item/item7.png" descr="Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.">
            INCREASED <br/> FLEXIBILIT
        </AdvantageCard>

        <AdvantageCard image="images/item/item8.png" descr="Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.">
            LOWER BLOOD <br/> PRESSURE
        </AdvantageCard>
      </div>
    </div>
  </section>



const Main = () => 
  <main className="main-page">
    <TrialBlock/>
    <YogaProgram/>
    <Gallery/>
    <Advantage/>
  </main>

const SocialNetwork = ({socialIteam}) =>
  <li>
    <a href="#">
      <span className={socialIteam}></span>
    </a>
  </li>



const Footer = () =>
<>
  <footer className="footer-page">
        <div className="container">
          <div className="wrapper-contact">
            <div className="about-card">
              <h3>About</h3>
              <div className="about-descr">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad m inim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
            <div className="contact-card">
              <h3>CONTACT US</h3>
              <div className="adress-wrapper">
                <span className="icon-location"></span>
                <a href="#" className="adress">5419 Joseph Mountains <br/> Apt. 716</a>
              </div>
              <div className="phone">
                <span className="icon-call"></span>
                <div className="phone-wrapper">
                  <a href="tel:+123456789">+1 234 567 89</a>
                  <a href="tel:+123467890">+1 234 678 90</a>
                </div>
              </div>
            </div>
            <div className="mail-card">
              <div className="email-wpapper">
                <span className="icon-envelope"></span>
                <a href="mailto" className="email"  target="_blank">joga.info@example.com</a>
              </div>
              <div className="site-wrapper">
                <span className="icon-planet"></span>
                <a href="http://www.example.com"  target="_blank" className="site">www.example.com</a>
              </div>
            </div>
          </div>
          <div className="social-network">
            <ul className="socials-list">
              <SocialNetwork socialIteam="icon-pinterest"/>
              <SocialNetwork socialIteam="icon-twitter"/>
              <SocialNetwork socialIteam="icon-facebook"/>
              <SocialNetwork socialIteam="icon-google-plus"/>
              <SocialNetwork socialIteam="icon-instagram"/>
            </ul>
          </div>
        </div>
  </footer>
  <div class="sub-footer">
    Copyright  ©  2016-2017 Yoga classes
  </div>
</>

function App() {
  return (
      <div className="App">
       	<div className="page-wrapper">
         <Header/>
         <Main/>
         <Footer/>
        </div>
      </div>
  );
}

export default App;