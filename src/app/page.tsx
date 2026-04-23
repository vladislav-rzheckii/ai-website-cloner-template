const serviceCards = [
  {
    title: "Create tenancy contract online",
    description:
      "Generate a Dubai-specific contract with addendum based on your agreed terms.",
    cta: "Create Contract",
    link: "#",
  },
  {
    title: "Register contract with Ejari",
    description:
      "Register your tenancy contract with Ejari and receive your Ejari certificate the same day.",
    cta: "Register Contract",
    link: "#",
  },
];

const featureCards = [
  {
    title: "Track rental payments",
    description: "Record and track rental payments across your properties.",
  },
  {
    title: "Get reminders for key dates",
    description: "Stay on top of payment dates, 90-day notice periods, and renewals.",
  },
  {
    title: "Keep tenancy details organised",
    description: "Store tenancy details and related documents in one place.",
  },
  {
    title: "Monitor rental performance",
    description: "Track income, expenses, and performance of your rental properties.",
  },
];

const testimonials = [
  {
    name: "Avril Mari",
    text: "Using the platform to keep a track of my properties. Works well for free platform and its easy to use. Didn't find any bugs so far. Reminders for cheque deposits and renewals is amazing.",
  },
  {
    name: "Kristina",
    text: "I've been using Habi for nearly 4 months to manage my rental properties, and it's been a smooth experience so far. The platform covers all the essentials.",
  },
  {
    name: "Rose",
    text: "As a homeowner, using this platform to create and register a tenancy contract was so simple. One of the best digital products I've used in a while.",
  },
];

export default function Home() {
  return (
    <main className="habi-page">
      <header className="habi-header">
        <div className="habi-container habi-nav">
          <div className="habi-logo">Habi</div>
          <nav className="habi-nav-links">
            <a href="#">Home</a>
            <a href="#">Tenancy Contract</a>
            <a href="#">Ejari Registration</a>
            <a href="#">Pricing</a>
            <a href="#">Support</a>
          </nav>
          <div className="habi-nav-actions">
            <a href="#" className="habi-login">
              Login
            </a>
            <a href="#" className="habi-btn habi-btn-outline">
              Create Account
            </a>
          </div>
        </div>
      </header>

      <section className="habi-hero">
        <div className="habi-container habi-hero-grid">
          <div>
            <h1>Manage your rental properties online on Habi</h1>
            <p>
              Create tenancy contracts online and all be good, register contracts with Ejari, and keep your rental
              properties organised on Habi.
            </p>
            <a href="#" className="habi-btn habi-btn-primary">
              Get started
            </a>
          </div>
          <div className="habi-hero-card">
            <div>Home</div>
            <div>Tenancy Contract</div>
            <div>Ejari Registration</div>
            <div className="habi-hero-pill">Login</div>
            <div className="habi-hero-pill active">Create Account</div>
          </div>
        </div>
      </section>

      <section className="habi-section">
        <div className="habi-container">
          <div className="habi-section-head">
            <h2>Start or renew your tenancy on Habi</h2>
            <p>Create the tenancy contract and complete Ejari registration on Habi.</p>
          </div>
          <div className="habi-services">
            {serviceCards.map((card) => (
              <article key={card.title} className="habi-service-card">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="habi-service-actions">
                  <a href={card.link} className="habi-btn habi-btn-primary">
                    {card.cta}
                  </a>
                  <a href={card.link} className="habi-link">
                    Learn more
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="habi-section">
        <div className="habi-container">
          <div className="habi-section-head">
            <h2>Once your rental is on Habi</h2>
            <p>
              Keep track of payments, key dates, documents, and rental information across your
              properties.
            </p>
          </div>
          <div className="habi-features">
            {featureCards.map((feature) => (
              <article key={feature.title} className="habi-feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
          <div className="habi-center">
            <a href="#" className="habi-btn habi-btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </section>

      <section className="habi-section habi-reviews">
        <div className="habi-container">
          <h2>What landlords and tenants say about Habi</h2>
          <div className="habi-testimonials">
            {testimonials.map((review) => (
              <article key={review.name} className="habi-review-card">
                <h3>{review.name}</h3>
                <p>{review.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="habi-privacy">
        <div className="habi-container">
          <h3>Your information is private</h3>
          <p>
            We use your information only to provide the services you request on Habi. Access is
            limited to those involved in the tenancy or service. We do not sell your data.
          </p>
          <a href="#">Privacy Policy</a>
        </div>
      </section>

      <footer className="habi-footer">
        <div className="habi-container">
          <div className="habi-footer-top">
            <div>
              <div className="habi-logo">Habi</div>
              <p>The infrastructure for every landlord and tenant in Dubai</p>
            </div>
            <div className="habi-footer-links">
              <div>
                <h4>Services</h4>
                <a href="#">Tenancy Contract</a>
                <a href="#">Ejari Registration</a>
              </div>
              <div>
                <h4>Resources</h4>
                <a href="#">Blog</a>
                <a href="#">Updates</a>
              </div>
              <div>
                <h4>Company</h4>
                <a href="#">About Habi</a>
                <a href="#">Pricing</a>
                <a href="#">Support</a>
              </div>
            </div>
          </div>
          <div className="habi-footer-bottom">
            <p>Terms of Use - Cookies Policy - Privacy Policy</p>
            <p>Copyright © 2026. Habi - Utools Technologies LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <div className="habi-cookies">
        We use cookies to improve your browsing experience. By using our website, you agree to our
        Cookies and Privacy Policy.
      </div>
    </main>
  );
}
