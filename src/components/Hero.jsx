import './Hero.css';

const HeroSection = () => {
    return(

        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                    YOUR FEET DESERVE THE BEST AND WE'REHERE TO HELP YOU WITH OUR SHOES. 
                </p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className='secondary-btn'>Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img id='img1' src="/images/Amazon-Logo.png" alt="amazon-logo" />
                        <img id='img2' src="/images/Flipkart-logo.png" alt="Flipkart-logo" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/hero_img.png" alt="hero-logo" />
            </div>
        </main>
    );
};

export default HeroSection;