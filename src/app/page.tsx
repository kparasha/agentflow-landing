// src/app/page.tsx
"use client";

import { useState } from 'react';
import Head from 'next/head';
import styles from './page.module.css';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted email:', email);
    setEmail('');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>AI Agent Marketplace - Find & Deploy AI Solutions Fast</title>
        <meta name="description" content="Streamline your AI agent procurement process with our end-to-end platform. From vendor discovery to compliance checks and seamless onboarding." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.logo}>AgentFlow</div>
        <div className={styles.navLinks}>
          <a href="#solutions">Solutions</a>
          <a href="#process">Process</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact" className={styles.ctaButton}>Get Started</a>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>AI Agents, Simplified</h1>
            <p className={styles.heroSubtitle}>
              The end-to-end platform that helps startups find, evaluate, and deploy 
              the perfect AI agents in days, not months.
            </p>
            <div className={styles.ctaContainer}>
              <form onSubmit={handleSubmit} className={styles.emailForm}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                />
                <button type="submit" className={styles.primaryButton}>Get Early Access</button>
              </form>
              <p className={styles.ctaNote}>Join our waitlist for early access</p>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img 
              src="/hero-image.png" 
              alt="AI Agent Dashboard" 
              className={styles.heroImg}
            />
          </div>
        </section>

        <section id="pain-points" className={styles.painPoints}>
          <h2>Stop Wasting Time on AI Agent Procurement</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🔍</div>
              <h3>Endless Vendor Search</h3>
              <p>No more sifting through hundreds of AI vendors. Our curated marketplace matches you with the perfect AI agents for your specific needs.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>⚖️</div>
              <h3>Compliance Headaches</h3>
              <p>Automated compliance checks ensure every AI agent meets your security and regulatory requirements before you even see them.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>⏱️</div>
              <h3>Lengthy Trials</h3>
              <p>Test multiple AI agents in parallel with our standardized trial environment and get real performance metrics.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>📝</div>
              <h3>Contract Complexity</h3>
              <p>Streamlined contract management with standardized terms and e-signature capabilities to close deals faster.</p>
            </div>
          </div>
        </section>

        <section id="process" className={styles.process}>
          <h2>From Search to Success in 4 Simple Steps</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Define Your Needs</h3>
              <p>Tell us about your business requirements and compliance needs.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Match with Vendors</h3>
              <p>Get matched with pre-vetted AI agents that fit your criteria.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Test & Compare</h3>
              <p>Run trials with multiple agents in a standardized environment.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>Deploy with Confidence</h3>
              <p>Onboard your chosen agent with our support team by your side.</p>
            </div>
          </div>
        </section>

        <section id="testimonials" className={styles.testimonials}>
          <h2>Trusted by Forward-Thinking Startups</h2>
          <div className={styles.testimonialCards}>
            <div className={styles.testimonial}>
              <p>&ldquo;AgentFlow cut our AI procurement time by 70% and helped us find the perfect compliance-ready solution.&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.avatar}></div>
                <div>
                  <h4>Sarah Chen</h4>
                  <p>CTO, FinTech Startup</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Transform Your AI Procurement?</h2>
            <p>Join our waitlist for early access and be among the first to experience the future of AI agent procurement.</p>
            <form onSubmit={handleSubmit} className={styles.ctaForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
              />
              <button type="submit" className={styles.primaryButton}>Get Early Access</button>
            </form>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>AgentFlow</div>
          <div className={styles.footerLinks}>
            <a href="#about">About Us</a>
            <a href="#solutions">Solutions</a>
            <a href="#resources">Resources</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} AgentFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}