import "./Navbar.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';


export default function ZyskWebsite() {
  return (
    <div className="zysk-container">
      {/* Header */}
      <header className="zysk-header">
        <div className="logo"><img style={{height:"30px"}} src="../public/statics/images/image0.png" alt="" /></div>
            <nav className="nav-links">
              <a href="#Home">Home</a>
              <a href="#products" className="products">
                Products <span className="down-arrow">▼</span>
              </a>
              <a href="#resources">
                Resources <span className="down-arrow">▼</span>
              </a>
              <a href="#pricing">Pricing</a>
            </nav>
        <div className="profile-icon"><button><img style={{height:"40px",width:"40px",borderRadius:"50%"}} src="../public/statics/images/profile.jpeg"/></button></div>
      </header>
      <div className="features">
        <button className="new-features">New features</button><p className="">Check out the team dashboard </p><ArrowRightAltIcon/>
      </div>
      <div className="text">
        <h1>Beautiful analytics to grow smarter</h1>
        
      </div>
      <div>
        <p className="para">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
      </div>
      <div className="btns">
      <div className="demo">
        <button><PlayCircleOutlineIcon/>Demo</button>
        </div>
        <div className="signup">
          <button>Sign up</button>
        </div>
      </div>
      <div className="image">
        <img  src="../public/statics/images/image1.png" alt="" />
        
      </div>
      <div className="brand-image">
        <img src="../public/statics/images/image2.png" alt="" />
      </div>
      
      <div>
        <h4 className="Features">Features</h4>
      </div>


      {/* Features Section */}
      <section id="features" className="features-section">
        <h2>Analytics that feels like it’s from the future</h2>
        <p className="features-section-p" style={{ marginRight: "40px" }}>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
      </section>
      <div className="features-section">
        <div className="features-grid ">
          <div className="feature-card">
            <img className="img3" style={{marginBottom:"-10px"}} src="../public/statics/images/image3.png" alt="" />
            <h3>Share team inboxes</h3>
            <p>
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
            </p>
          </div>
          <div className="feature-card">
          <img className="img3" style={{marginBottom:"-10px"}} src="../public/statics/images/image4.png" alt="" />
            <h3>Deliver instant answers</h3>
            <p>
            An all-in-one customer service platform that helps you balance everything your customers need to be happy.
            </p>
          </div>
          <div className="feature-card">
          <img className="img3" style={{marginBottom:"-10px"}} src="../public/statics/images/image5.png" alt="" />
            <h3>Manage your team with reports</h3>
            <p>
            Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
            </p>
          </div>
        </div>
        <div className="features-grid  features-grid2">
          <div className="feature-card">
          <img className="img3" style={{marginBottom:"-10px"}} src="../public/statics/images/image6.png" alt="" />
            <h3>Connect with customers</h3>
            <p>
              Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.            </p>
          </div>
          <div className="feature-card">
          <img className="img3" style={{marginBottom:"-10px"}} src="../public/statics/images/image7.png" alt="" />
            <h3>Connect the tools you already use</h3>
            <p>
            Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
            </p>
          </div>
          <div className="feature-card">
          <img className="img3" style={{marginBottom:"-10px"}} src="../public/statics/images/image8.png" alt="" />
            <h3>Our people make the difference</h3>
            <p>
            We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
            </p>
          </div>
        </div>
      </div>
      
      {/* Third page */}
      <div className="third-page">
        <img src="../public/statics/images/image9.png" alt="" />
        
      </div>

      {/* fourth page */}
      <div className="main">
           <h1>Frequently asked questions</h1>
          <p>Everything you need to know about the product and billing.</p>
      </div>
      <div className="fourth-page">
  <div className="faq-container">
  <div className="faq-item">
    <div className="faq-question">
      <span>Is there a free trial available?</span>
      <span className="faq-icon">+</span>
    </div>
    <div className="faq-answer">
      <p>
        Yes, you can try us for free for 30 days. If you want, we’ll provide
        you with a free, personalized 30-minute onboarding call to get you
        up and running as soon as possible.
      </p>
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <span>Can I change my plan later?</span>
      <span className="faq-icon">+</span>
    </div>
    <div className="faq-answer">
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <span>What is your cancellation policy?</span>
      <span className="faq-icon">+</span>
    </div>
    <div className="faq-answer">
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <span>Can other info be added to an invoice?</span>
      <span className="faq-icon">+</span>
    </div>
    <div className="faq-answer">
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <span>How does billing work?</span>
      <span className="faq-icon">+</span>
    </div>
    <div className="faq-answer">
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <span>How do I change my account email?</span>
      <span className="faq-icon">+</span>
    </div>
    <div className="faq-answer">
            </div>
            <div className="fifth-page">
              <img className="img-1" src="../public/statics/images/image14.png" alt="" />
        <h4>Still have questions? </h4>
              <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
              <button>Get in touch</button>
            </div>
            <div className="blog">
              <p className="our-blog">our Blog</p>              <button className="view">View posts</button>
              <h1 className="latest">Lastest blog posts</h1>
              <p style={{color:"black"}}>Tool and strategies modern teams need to help their companies grow.</p>
            </div>
           
          </div>
          <div className="three-img">
          <img src="../public/statics/images/image15.png" alt="" />
          <img src="../public/statics/images/image16.png" alt="" />
          <img src="../public/statics/images/image17.png" alt="" />
          </div>
          <div className="trial">
            <h1>Start your free trial</h1>
            <p>Join over 4,000+ startups already growing with Untitled.</p>
            <div className="two-bnts">
              <button className="learn">Learn More</button>
              <button className="get">Get Started</button>
            </div>
            
          </div>  
          <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li>Overview</li>
            <li>Features</li>
            <li>
              Solutions <span className="new-badge">New</span>
            </li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Use cases</h4>
          <ul>
            <li>Startups</li>
            <li>Enterprise</li>
            <li>Government</li>
            <li>SaaS centre</li>
            <li>Marketplaces</li>
            <li>Ecommerce</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Social</h4>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>Dribbble</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
            <div>
              <img style={ {height:"65px",width:"100%",bottom:0}}  src="../public/statics/images/image18.png" alt="" />
 
      </div>
        
     
    </footer>
        </div> 
        
       
       
       
      </div>
      
      
      </div>
  );
}
