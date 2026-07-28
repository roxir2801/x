import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const brandColor = '#1a1a1a';
  const accentColor = '#8c7a6b';
  const backgroundColor = '#fcfbfa';

  return (
    <div style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden', boxSizing: 'border-box', fontFamily: "'Poppins', sans-serif", color: '#2b2b2b', padding: '15px', margin: '0 auto', backgroundColor: backgroundColor }}>
      
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid #e8e2d5', marginBottom: '40px' }}>
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
          <a href="#contact" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', color: brandColor, fontWeight: '700' }}>Contact</a>
        </div>
      )}

      {/* HERO SECTION */}
      <section id="vision" style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', marginTop: '20px', minHeight: 'auto' }}>
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
            <p style={{ margin: 0 }}>
              Art is our greatest inspiration, our happy place, and the positive energy that has brought us together. Through R&A Studio DXB, we hope to share that same feeling with every person who owns one of our creations.
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
      <section id="work" style={{ marginTop: '60px', textAlign: 'left' }}>
        <h3 style={{ fontSize: '28px', fontWeight: '800', color: brandColor, marginBottom: '30px' }}>How We Work</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', width: '100%' }}>
          <div style={{ padding: '25px', backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #e8e2d5' }}>
            <div style={{ fontSize: '32px', marginBottom: '15px' }}>💬</div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '700', color: brandColor }}>1. Share Your Vision</h4>
            <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: '1.6' }}>Reach out via Instagram or WhatsApp. Send us your ideas, reference photos, or the item you want custom-made.</p>
          </div>

          <div style={{ padding: '25px', backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #e8e2d5' }}>
            <div style={{ fontSize: '32px', marginBottom: '15px' }}>📐</div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '700', color: brandColor }}>2. Digital Concept</h4>
            <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: '1.6' }}>We review the project, visually sketch or simulate it, and provide an accurate price and timeline estimate.</p>
          </div>

          <div style={{ padding: '25px', backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #e8e2d5' }}>
            <div style={{ fontSize: '32px', marginBottom: '15px' }}>🎨</div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '700', color: brandColor }}>3. Handcrafting & Creation</h4>
            <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: '1.6' }}>Once approved, we bring your piece to life through meticulous painting, precise engraving, or custom 3D printing.</p>
          </div>

          <div style={{ padding: '25px', backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #e8e2d5' }}>
            <div style={{ fontSize: '32px', marginBottom: '15px' }}>✈️</div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '700', color: brandColor }}>4. Global Delivery</h4>
            <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: '1.6' }}>Your unique masterpiece is carefully packed in premium protection and shipped safely to your doorstep, anywhere in the world.</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" style={{ marginTop: '60px', textAlign: 'left' }}>
        <h3 style={{ fontSize: '28px', fontWeight: '800', color: brandColor, marginBottom: '10px' }}>Get in Touch</h3>
        <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Let's create something extraordinary together.</p>

        <div style={{ marginBottom: '40px' }}>
          <a href="https://www.instagram.com/ra.studiodxb?igsh=MXJwdzN5ejN0b2w1" target="_blank" rel="noreferrer" style={{ display: 'inline-block', color: '#fff', backgroundColor: brandColor, padding: '12px 24px', borderRadius: '20px', fontWeight: '700', textDecoration: 'none', fontSize: '13px' }}>
            @ra.studiodxb
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', width: '100%' }}>
          
          <div style={{ padding: '15px 0', borderBottom: '1px solid #e8e2d5', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px' }}>
            <img src="/logo-bags.jpeg" alt="Bags" style={{ height: '100px', width: '100px', borderRadius: '18px', objectFit: 'cover', border: '1px solid #e8e2d5' }} onError={(e) => e.target.style.display = 'none'} />
            <div>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '700', color: brandColor }}>Hand Painted Bags</h4>
              <a href="https://www.instagram.com/onevibe.art" target="_blank" rel="noreferrer" style={{ color: accentColor, fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>@onevibe.art</a>
            </div>
          </div>

          <div style={{ padding: '15px 0', borderBottom: '1px solid #e8e2d5', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px' }}>
            <img src="/logo-laser.jpeg" alt="Laser" style={{ height: '100px', width: '100px', borderRadius: '18px', objectFit: 'cover', border: '1px solid #e8e2d5' }} onError={(e) => e.target.style.display = 'none'} />
            <div>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '700', color: brandColor }}>Engraving Services</h4>
              <a href="https://www.instagram.com/lets.engravedxb?igsh=cDQ4aDlwd3RzMDBj" target="_blank" rel="noreferrer" style={{ color: accentColor, fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>@lets.engravedxb</a>
            </div>
          </div>

          <div style={{ padding: '15px 0', borderBottom: '1px solid #e8e2d5', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px' }}>
            <img src="/logo-figurines.jpeg" alt="Figurines" style={{ height: '100px', width: '100px', borderRadius: '18px', objectFit: 'cover', border: '1px solid #e8e2d5' }} onError={(e) => e.target.style.display = 'none'} />
            <div>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '700', color: brandColor }}>3D printed hand painted figures</h4>
              <a href="https://www.instagram.com/figureitout3d" target="_blank" rel="noreferrer" style={{ color: accentColor, fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>@figureitout3d</a>
            </div>
          </div>

          <div style={{ padding: '15px 0', borderBottom: '1px solid #e8e2d5', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px' }}>
            <div style={{ fontSize: '32px', width: '100px', height: '100px', backgroundColor: '#fff', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #bcae97' }}>📞</div>
            <div>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '700', color: brandColor }}>WhatsApp Fast Line</h4>
              <a href="tel:+971568774403" style={{ color: '#222', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>+971 56 877 4403</a>
            </div>
          </div>

        </div>
      </section>

      {/* Buton Înapoi sus */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', marginBottom: '40px' }}>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left', marginBottom: '30px' }}>
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
        <div style={{ borderTop: '1px solid #f2ede4', paddingTop: '20px', textAlign: 'center', color: '#aaa', fontSize: '12px' }}>
          © {new Date().getFullYear()} R&A Studio DXB. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;