import React, { useState } from 'react';

// Culorile globale ale brandului pentru consistență vizuală
const brandColor = '#1a1a1a'; // Negru elegant pentru texte și butoane
const accentColor = '#bcae97'; // Aurul/bej premium pentru accente și prețuri
const backgroundColor = '#fbf9f4'; // Fundalul bej cald fin (crem)

// 1. Componenta reutilizabilă pentru Cardul de Testimonial
function TestimonialCard({ name, location, rating, message }) {
  const stars = '⭐'.repeat(rating);

  return (
    <div style={{
      backgroundColor: '#fff',
      padding: '25px',
      borderRadius: '25px',
      border: '1px solid #e8e2d5',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 4px 15px rgba(0,0,0,0.01)',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div>
        {/* Stelele oferite */}
        <div style={{ fontSize: '14px', marginBottom: '12px' }}>
          {stars} <span style={{ color: '#888', fontSize: '12px' }}>({rating}/5)</span>
        </div>
        
        {/* Mesaj */}
        <p style={{ 
          color: '#444', 
          fontSize: '14px', 
          lineHeight: '1.7', 
          fontStyle: 'italic', 
          margin: '0 0 20px 0' 
        }}>
          "{message}"
        </p>
      </div>

      {/* Autor */}
      <div style={{ borderTop: '1px solid #e8e2d5', paddingTop: '15px' }}>
        <h5 style={{ margin: '0 0 2px 0', fontWeight: '700', color: brandColor, fontSize: '16px' }}>
          {name}
        </h5>
        {location && (
          <span style={{ fontSize: '12px', color: '#888' }}>📍 {location}</span>
        )}
      </div>
    </div>
  );
}

// 2. Componenta pentru Secțiunea Mare de Testimoniale
function TestimonialsSection() {
  const testimonialsData = [
    {
      id: 1,
      name: "Sarah M.",
      location: "Dubai Marina",
      rating: 5,
      message: "Absolutely stunning work! Andreea transformed my vintage leather bag into a modern masterpiece. The attention to detail is breathtaking. Truly one-of-a-kind art!"
    },
    {
      id: 2,
      name: "Michael K.",
      location: "London, UK",
      rating: 5,
      message: "Ordered a custom 3D figurine of my grandparents for their anniversary. Raymond captured their expressions perfectly from just a few photos. Exceptional global shipping service."
    },
    {
      id: 3,
      name: "Amna Al Mansoori",
      location: "Downtown Dubai",
      rating: 5,
      message: "The laser engraving on the crystal perfume bottles for our corporate event was flawless. Fast line on WhatsApp and extremely professional communication."
    }
  ];

  return (
    <section id="testimonials" style={{ 
      marginTop: '60px', 
      backgroundColor: '#fff', 
      padding: '30px 15px', 
      borderRadius: '25px', 
      border: '1px solid #e8e2d5',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h3 style={{ fontSize: '26px', fontWeight: '800', color: brandColor, margin: '0 0 10px 0' }}>
          Client Stories
        </h3>
        <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
          What our global community says about R&A Studio DXB.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr', 
        gap: '20px',
        width: '100%'
      }}>
        {testimonialsData.map((t) => (
          <TestimonialCard 
            key={t.id}
            name={t.name}
            location={t.location}
            rating={t.rating}
            message={t.message}
          />
        ))}
      </div>
    </section>
  );
}

// 3. Componenta principală App
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const steps = [
    {
      icon: "💬",
      title: "1. Share Your Vision",
      description: "Reach out via Instagram or WhatsApp. Send us your ideas, reference photos, or the item you want custom-made."
    },
    {
      icon: "📐",
      title: "2. Digital Concept",
      description: "We review the project together, visually sketch out options, and provide an accurate cost and timeline estimation."
    },
    {
      icon: "🎨",
      title: "3. Crafting & Care",
      description: "Whether it’s custom hand-painting, laser engraving, or 3D modeling, we pour our heart and precise artistry into every detail."
    },
    {
      icon: "✈️",
      title: "4. Global Delivery",
      description: "Your unique masterpiece is carefully packed in premium protection and shipped safely to your doorstep, anywhere in the world."
    }
  ];

  return (
    <div style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden', boxSizing: 'border-box', fontFamily: "'Poppins', sans-serif", color: '#2b2b2b', padding: '15px', margin: '0 auto', backgroundColor: backgroundColor }}>
      
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid #e8e2d5', marginBottom: '40px', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src="/logo.jpeg" alt="R&A Studio DXB" style={{ height: '50px', width: '50px', borderRadius: '12px', objectFit: 'cover' }} />
          <span style={{ fontWeight: '800', fontSize: '15px', letterSpacing: '1px', color: brandColor }}>R&A STUDIO DXB</span>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: brandColor }}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* Meniu mobil */}
      {isMenuOpen && (
        <div style={{ background: '#fff', padding: '20px', borderRadius: '15px', marginBottom: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <a href="#vision" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', color: brandColor, fontWeight: '700' }}>Our Vision</a>
          <a href="#work" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', color: brandColor, fontWeight: '700' }}>How We Work</a>
          <a href="#portfolio" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', color: brandColor, fontWeight: '700' }}>Portfolio & Videos</a>
          <a href="#testimonials" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', color: brandColor, fontWeight: '700' }}>Client Stories</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', color: brandColor, fontWeight: '700' }}>Contact</a>
        </div>
      )}

      {/* HERO SECTION */}
      <section id="vision" style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', marginTop: '20px', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ width: '100%' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px', color: brandColor }}>
            Our Vision, Our Artistry
          </h2>
          <div style={{ fontSize: '15px', color: '#444', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <p style={{ margin: 0, fontWeight: '700' }}>Welcome to R&A Studio DXB.</p>
            <p style={{ margin: 0 }}>
              We are <strong>Raymond & Andreea</strong>—a husband and wife who believe that art has the power to connect people, preserve memories, and turn ordinary moments into something extraordinary.
            </p>
            <p style={{ margin: 0 }}>
              Every creation begins with passion and ends with purpose. Whether we're painting a one-of-a-kind handbag, engraving a meaningful gift, or designing a custom figurine, we pour our creativity, dedication, and love into every detail.
            </p>
            <p style={{ margin: 0, fontStyle: 'italic', color: '#666', fontWeight: '500', marginTop: '10px' }}>
              "Because the most beautiful things are not simply made—they are created with heart, crafted with purpose, and cherished for a lifetime."
            </p>
          </div>
          <a href="#contact" style={{ display: 'inline-block', marginTop: '25px', padding: '14px 28px', backgroundColor: brandColor, color: '#fff', borderRadius: '25px', fontWeight: '700', textDecoration: 'none', fontSize: '14px', textAlign: 'center' }}>
            Start Your Project
          </a>
        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src="/logo.jpeg" 
            alt="R&A Studio" 
            onClick={() => setSelectedImage({ src: '/logo.jpeg', alt: 'R&A Studio' })}
            style={{ width: '100%', maxWidth: '350px', aspectRatio: '1/1', borderRadius: '25px', objectFit: 'cover', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', cursor: 'zoom-in' }} 
          />
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="work" style={{ marginTop: '60px', textAlign: 'left', width: '100%', boxSizing: 'border-box' }}>
        <h3 style={{ fontSize: '28px', fontWeight: '800', color: brandColor, marginBottom: '30px' }}>How We Work</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', width: '100%' }}>
          {steps.map((step, index) => (
            <div key={index} style={{ padding: '25px', backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #e8e2d5', width: '100%', boxSizing: 'border-box' }}>
              <div style={{ fontSize: '32px', marginBottom: '15px' }}>{step.icon}</div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '700', color: brandColor }}>{step.title}</h4>
              <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: '1.6' }}>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO & VIDEOS SECTION */}
      <section id="portfolio" style={{ marginTop: '60px', textAlign: 'left', width: '100%', boxSizing: 'border-box' }}>
        <h3 style={{ fontSize: '28px', fontWeight: '800', color: brandColor, marginBottom: '20px' }}>Portfolio & Creation Process</h3>
        <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>A glimpse behind the scenes into our workshop.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '100%' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '20px', overflow: 'hidden', border: '1px solid #e8e2d5', padding: '15px', width: '100%', boxSizing: 'border-box' }}>
            <video 
              src="/video1.mp4" 
              controls 
              autoPlay 
              muted 
              loop 
              playsInline
              style={{ width: '100%', height: 'auto', borderRadius: '15px', objectFit: 'cover' }}
            />
            <h4 style={{ margin: '15px 0 5px 0', fontSize: '16px', fontWeight: '700', color: brandColor }}>Hand-Painted Bag Mastery</h4>
            <p style={{ margin: 0, color: '#666', fontSize: '13px' }}>Every stroke tells a unique story of luxury and color.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* CONTACT SECTION */}
      <section id="contact" style={{ marginTop: '60px', textAlign: 'left', width: '100%', boxSizing: 'border-box' }}>
        <h3 style={{ fontSize: '28px', fontWeight: '800', color: brandColor, marginBottom: '10px' }}>Get in Touch</h3>
        <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Let's create something extraordinary together.</p>

        <div style={{ marginBottom: '40px' }}>
          <a href="https://www.instagram.com/ra.studiodxb?igsh=MXJwdzN5ejN0b2w1" target="_blank" rel="noreferrer" style={{ display: 'inline-block', color: '#fff', backgroundColor: brandColor, padding: '12px 24px', borderRadius: '20px', fontWeight: '700', textDecoration: 'none', fontSize: '13px' }}>
            @ra.studiodxb
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
          
          <div style={{ padding: '15px', backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #e8e2d5', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', width: '100%', boxSizing: 'border-box' }}>
            <img src="/logo-bags.jpeg" alt="Bags" style={{ height: '90px', width: '90px', borderRadius: '15px', objectFit: 'cover', border: '1px solid #e8e2d5' }} onError={(e) => e.target.style.display = 'none'} />
            <div>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '700', color: brandColor }}>Hand Painted Bags</h4>
              <a href="https://www.instagram.com/onevibe.art" target="_blank" rel="noreferrer" style={{ color: accentColor, fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>@onevibe.art</a>
            </div>
          </div>

          <div style={{ padding: '15px', backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #e8e2d5', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', width: '100%', boxSizing: 'border-box' }}>
            <img src="/logo-laser.jpeg" alt="Laser" style={{ height: '90px', width: '90px', borderRadius: '15px', objectFit: 'cover', border: '1px solid #e8e2d5' }} onError={(e) => e.target.style.display = 'none'} />
            <div>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '700', color: brandColor }}>Engraving Services</h4>
              <a href="https://www.instagram.com/lets.engravedxb?igsh=cDQ4aDlwd3RzMDBj" target="_blank" rel="noreferrer" style={{ color: accentColor, fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>@lets.engravedxb</a>
            </div>
          </div>

          <div style={{ padding: '15px', backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #e8e2d5', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', width: '100%', boxSizing: 'border-box' }}>
            <img src="/logo-figurines.jpeg" alt="Figurines" style={{ height: '90px', width: '90px', borderRadius: '15px', objectFit: 'cover', border: '1px solid #e8e2d5' }} onError={(e) => e.target.style.display = 'none'} />
            <div>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '700', color: brandColor }}>3D printed hand painted figures</h4>
              <a href="https://www.instagram.com/figureitout3d" target="_blank" rel="noreferrer" style={{ color: accentColor, fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>@figureitout3d</a>
            </div>
          </div>

          <div style={{ padding: '15px', backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #e8e2d5', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', width: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: '28px', width: '90px', height: '90px', backgroundColor: '#fcfbfa', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #bcae97' }}>📞</div>
            <div>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '700', color: brandColor }}>WhatsApp Fast Line</h4>
              <a href="tel:+971568774403" style={{ color: '#222', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>+971 56 877 4403</a>
            </div>
          </div>

        </div>
      </section>

      {/* Buton Înapoi sus */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', marginBottom: '40px', width: '100%' }}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ padding: '12px 24px', backgroundColor: '#fff', border: '1px solid #e8e2d5', borderRadius: '20px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', color: '#555' }}>
          ↑ Back to Top
        </button>
      </div>

      {/* MODAL LIGHTBOX */}
      {selectedImage && (
        <div onClick={() => setSelectedImage(null)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(26,26,26,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px', cursor: 'zoom-out' }}>
          <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedImage(null)} style={{ position: 'absolute', top: '-40px', right: '0', background: 'transparent', border: 'none', color: '#fff', fontSize: '30px', cursor: 'pointer' }}>×</button>
            <img src={selectedImage.src} alt={selectedImage.alt} style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: '15px', objectFit: 'contain' }} />
            <p style={{ color: '#fff', textAlign: 'center', marginTop: '10px', fontSize: '14px' }}>{selectedImage.alt}</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #e8e2d5', padding: '40px 10px', color: '#666', fontSize: '13px', backgroundColor: '#fff', borderRadius: '20px 20px 0 0', marginTop: '40px', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left', marginBottom: '30px', width: '100%' }}>
          <div>
            <h5 style={{ color: brandColor, fontWeight: '800', margin: '0 0 10px 0', fontSize: '14px' }}>R&A STUDIO DXB</h5>
            <p style={{ color: '#777', lineHeight: '1.6', margin: 0 }}>Bridging handcraft expertise with futuristic artistry to create timeless personal luxury.</p>
          </div>
          <div>
            <h5 style={{ color: brandColor, fontWeight: '800', margin: '0 0 10px 0', fontSize: '14px' }}>AI & Design Policy</h5>
            <p style={{ color: '#777', lineHeight: '1.6', margin: 0, fontSize: '12px' }}>Concept images featured in our Engraving section are digitally assisted and simulated via artificial intelligence. These serve strictly as representative design examples.</p>
          </div>
          <div>
            <h5 style={{ color: brandColor, fontWeight: '800', margin: '0 0 10px 0', fontSize: '14px' }}>Privacy & Terms</h5>
            <p style={{ color: '#777', lineHeight: '1.6', margin: 0, fontSize: '12px' }}>We respect your privacy. All customer blueprints and private photographs submitted are strictly protected.</p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #f2ede4', paddingTop: '20px', textAlign: 'center', color: '#aaa', fontSize: '12px', width: '100%' }}>
          © {new Date().getFullYear()} R&A Studio DXB. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;