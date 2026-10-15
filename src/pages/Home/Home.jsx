import "./Home.css"

const Home = () => {
    return (
        <section class="hero-section">
            <div class="container">

                <div class="hero-content">
                    <div class="offer-badge">
                        🔥 Don't miss limited-time savings: <span class="highlight">Savings 20%</span>
                    </div>

                    <h1 class="hero-title">
                        Everything for<br />
                            Your Site to<br />
                                Succeed
                            </h1>

                            <p class="attribution">
                                Image from <a href="#">Freepik</a>
                            </p>

                            <div class="hero-action">
                                <a href="#" class="btn-primary">Get Started</a>
                                <div class="pricing-info">
                                    <span class="price-label">Starting at only</span>
                                    <span class="price-value">$4.75/mo*</span>
                                </div>
                            </div>
                        </div>

                        <div class="hero-image">
                            <img src="./website.png" alt="Website Hosting and Development Illustration" />
                        </div>

                </div>
        </section>
    )
}

export default Home