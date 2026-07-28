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
      padding: '30px',
      borderRadius: '25px',
      border: '1px solid #e8e2d5',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 4px 15px rgba(0,0,0,0.01)',
      transition: 'transform 0.2s ease',
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

// 2. Componenta pentru Secțiunea Mare de Testimoniale (unde iterăm array-ul de obiecte)
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
      marginTop: '120px', 
      backgroundColor: '#fff', 
      padding: '60px 30px', 
      borderRadius: '35px', 
      border: '1px solid #e8e2d5' 
    }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h3 style={{ fontSize: '32px', fontWeight: '800', color: brandColor, margin: '0 0 10px 0' }}>
          Client Stories
        </h3>
        <p style={{ color: '#666', fontSize: '15px', margin: 0 }}>
          What our global community says about R&A Studio DXB.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px' 
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

// 3. Componenta pentru Secțiunea „How It Works”
function HowItWorksSection() {
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
      description: "Your unique masterpiece is carefully packed in premium protection and shipped locally in Dubai or securely worldwide."
    }
  ];

  return (
    <section id="how-it-works" style={{ 
      marginTop: '100px', 
      backgroundColor: '#fff', 
      padding: '50px 30px', 
      borderRadius: '35px', 
      border: '1px solid #e8e2d5',
      boxShadow: '0 10px 30px rgba(0,0,0,0.01)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '45px' }}>
        <h3 style={{ fontSize: '32px', fontWeight: '800', color: brandColor, margin: '0 0 10px 0' }}>
          How We Create Together
        </h3>
        <p style={{ color: '#666', fontSize: '15px', margin: 0 }}>
          Your journey from a simple idea to a handcrafted luxury masterpiece.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', 
        gap: '25px' 
      }}>
        {steps.map((step, idx) => (
          <div key={idx} style={{
            backgroundColor: backgroundColor,
            padding: '25px',
            borderRadius: '20px',
            border: '1px solid #e8e2d5',
            textAlign: 'left'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '15px' }}>{step.icon}</div>
            <h4 style={{ fontSize: '17px', fontWeight: '800', color: brandColor, margin: '0 0 10px 0' }}>
              {step.title}
            </h4>
            <p style={{ fontSize: '13.5px', color: '#555', lineHeight: '1.6', margin: 0 }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// 4. Componenta Principală a Aplicației
function App() {
  // State pentru meniul de tip hamburger pe mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State-uri pentru funcția de Show More / Show Less în galerii
  const [showAllBags, setShowAllBags] = useState(false);
  const [showAllLaser, setShowAllLaser] = useState(false);
  const [showAllFigurines, setShowAllFigurines] = useState(false);

  // State pentru imaginea selectată în Lightbox (Zoom la click)
  const [selectedImage, setSelectedImage] = useState(null);

  // Numărul actualizat de imagini pentru galerii (17 pentru genți, 17 pentru laser, 17 pentru figurine)
  const geantaImages = Array.from({ length: 18 }, (_, i) => i + 1); 
  const laserImages = Array.from({ length: 17 }, (_, i) => i + 1);    
  const figurineImages = Array.from({ length: 18 }, (_, i) => i + 1); 

  // Funcție ajutătoare pentru a decide câte imagini afișăm
  const getVisibleImages = (imagesArray, showAll) => {
    return showAll ? imagesArray : imagesArray.slice(0, 4);
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#2b2b2b', padding: '20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: backgroundColor }}>
      
      {/* Header Premium cu Hamburger Menu integrat */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e8e2d5', paddingBottom: '20px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img 
            src="/logo-ra-studio.jpeg" 
            alt="R&A Studio DXB Logo" 
            style={{ height: '70px', width: 'auto', objectFit: 'contain' }}
            onError={(e) => {
              e.target.style.display = 'none';
              document.getElementById('text-logo').style.display = 'block';
            }}
          />
          <h1 id="text-logo" style={{ margin: 0, fontSize: '22px', letterSpacing: '2px', fontWeight: '900', display: 'none', color: brandColor }}>
            R&A STUDIO DXB
          </h1>
        </div>

        {/* Buton Hamburger */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none', 
            flexDirection: 'column', 
            justifyContent: 'space-around', 
            width: '30px', 
            height: '25px', 
            background: 'transparent', 
            border: 'none', 
            cursor: 'pointer', 
            padding: 0,
            zIndex: 100
          }}
          className="hamburger-btn"
        >
          <div style={{ width: '30px', height: '3px', backgroundColor: brandColor, borderRadius: '10px', transition: 'all 0.3s linear', transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)' }} />
          <div style={{ width: '30px', height: '3px', backgroundColor: brandColor, borderRadius: '10px', transition: 'all 0.3s linear', opacity: isMenuOpen ? '0' : '1' }} />
          <div style={{ width: '30px', height: '3px', backgroundColor: brandColor, borderRadius: '10px', transition: 'all 0.3s linear', transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'rotate(0)' }} />
        </button>

        <style>{`
          .hamburger-btn { display: none !important; }
          .nav-menu { display: flex !important; align-items: center; }
          @media (max-width: 768px) {
            .hamburger-btn { display: flex !important; }
            .nav-menu {
              display: ${isMenuOpen ? 'flex' : 'none'} !important;
              flex-direction: column;
              position: absolute;
              top: 80px;
              left: -20px;
              right: -20px;
              background-color: ${backgroundColor};
              padding: 20px;
              border-bottom: 1px solid #e8e2d5;
              box-shadow: 0 10px 15px rgba(0,0,0,0.05);
              z-index: 99;
              gap: 15px;
            }
            .nav-menu a {
              margin: 10px 0 !important;
              font-size: 16px !important;
            }
          }
        `}</style>

        <nav className="nav-menu">
          <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} style={{ margin: '0 12px', textDecoration: 'none', color: '#555', fontWeight: '600', fontSize: '14px' }}>Process</a>
          <a href="#bags" onClick={() => setIsMenuOpen(false)} style={{ margin: '0 12px', textDecoration: 'none', color: '#555', fontWeight: '600', fontSize: '14px' }}>Bags</a>
          <a href="#laser" onClick={() => setIsMenuOpen(false)} style={{ margin: '0 12px', textDecoration: 'none', color: '#555', fontWeight: '600', fontSize: '14px' }}>Engraving</a>
          <a href="#figurines" onClick={() => setIsMenuOpen(false)} style={{ margin: '0 12px', textDecoration: 'none', color: '#555', fontWeight: '600', fontSize: '14px' }}>3D Figures</a>
          <a href="#testimonials" onClick={() => setIsMenuOpen(false)} style={{ margin: '0 12px', textDecoration: 'none', color: '#555', fontWeight: '600', fontSize: '14px' }}>Reviews</a>
          <a href="#location" onClick={() => setIsMenuOpen(false)} style={{ margin: '0 12px', textDecoration: 'none', color: '#555', fontWeight: '600', fontSize: '14px' }}>Location</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} style={{ margin: '0 0 0 15px', textDecoration: 'none', color: '#fff', backgroundColor: brandColor, padding: '10px 22px', borderRadius: '25px', fontWeight: '600', fontSize: '13px', boxShadow: '0 4px 10px rgba(0,0,0,0.15)' }}>Let's Create</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section style={{ display: 'flex', gap: '50px', alignItems: 'center', marginTop: '50px', flexWrap: 'wrap-reverse', minHeight: '500px' }}>
        <div style={{ flex: '1 1 500px', paddingRight: '10px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', lineHeight: '1.2', marginBottom: '25px', color: brandColor }}>
            Our Vision, Our Artistry
          </h2>
          <div style={{ fontSize: '16px', color: '#444', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <p style={{ margin: 0, fontWeight: '700' }}>Welcome to R&A Studio DXB.</p>
            <p style={{ margin: 0 }}>
              We are <strong>Raymond & Andreea</strong>—a husband and wife who believe that art has the power to connect people, preserve memories, and turn ordinary moments into something extraordinary.
            </p>
            <p style={{ margin: 0 }}>
              Every creation begins with passion and ends with purpose. Whether we’re painting a one-of-a-kind handbag, engraving a meaningful gift, or designing a custom figurine, we pour our creativity, dedication, and love into every detail.
            </p>
            <p style={{ margin: 0 }}>
              Art is our greatest inspiration, our happy place, and the positive energy that has brought us together. Through R&A Studio DXB, we hope to share that same feeling with every person who owns one of our creations.
            </p>
            <p style={{ margin: 0, fontStyle: 'italic', color: '#666', fontWeight: '500', marginTop: '10px' }}>
              "Because the most beautiful things are not simply made—they are created with heart, crafted with purpose, and cherished for a lifetime."
            </p>
          </div>
          <a href="#contact" style={{ display: 'inline-block', marginTop: '35px', padding: '16px 36px', backgroundColor: brandColor, color: '#fff', textDecoration: 'none', borderRadius: '30px', fontWeight: '700', fontSize: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}>Start Your Project</a>
        </div>
        
        <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
          <div style={{ width: '100%', maxWidth: '420px', aspectRatio: '1/1', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.06)', border: '8px solid #fff', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/logo-ra-studio.jpeg" alt="R&A Studio Master Logo" style={{ width: '95%', height: '95%', objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      {/* SECȚIUNEA NOUĂ: HOW IT WORKS (Adăugată perfect sub Hero) */}
      <HowItWorksSection />

      {/* Behind the Scenes VIDEOS */}
      <section id="process" style={{ marginTop: '120px', backgroundColor: '#fff', padding: '50px 30px', borderRadius: '35px', boxShadow: '0 10px 30px rgba(0,0,0,0.01)', border: '1px solid #e8e2d5' }}>
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: brandColor, margin: '0 0 10px 0' }}>The Art in Motion</h3>
          <div style={{ color: '#555', fontSize: '15px', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ margin: '0 0 5px 0', fontWeight: '700', color: brandColor }}>Watch our passion come to life.</p>
            <p style={{ margin: 0 }}>From the first brushstroke to the final engraving, every creation is handcrafted with precision, creativity, and heart.</p>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px', marginBottom: '40px' }}>
          <div style={{ padding: '10px' }}>
            <h4 style={{ fontSize: '17px', fontWeight: '800', margin: '0 0 4px 0', color: brandColor }}>🎨 Hand-Painted Bags</h4>
            <p style={{ fontSize: '13px', color: '#666', margin: '0 0 15px 0', fontWeight: '500' }}>Every brushstroke tells a story.</p>
            <div style={{ width: '100%', borderRadius: '20px', overflow: 'hidden', backgroundColor: '#000', aspectRatio: '16/9', boxShadow: '0 8px 25px rgba(0,0,0,0.05)' }}>
              <video src="/video-geanta.mp4" controls style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          <div style={{ padding: '10px' }}>
            <h4 style={{ fontSize: '17px', fontWeight: '800', margin: '0 0 4px 0', color: brandColor }}>✨ Precision Laser Engraving</h4>
            <p style={{ fontSize: '13px', color: '#666', margin: '0 0 15px 0', fontWeight: '500' }}>Personalized with exceptional detail.</p>
            <div style={{ width: '100%', borderRadius: '20px', overflow: 'hidden', backgroundColor: '#000', aspectRatio: '16/9', boxShadow: '0 8px 25px rgba(0,0,0,0.05)' }}>
              <video src="/video-laser.mp4" controls style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '540px', padding: '10px', textAlign: 'center' }}>
            <h4 style={{ fontSize: '17px', fontWeight: '800', margin: '0 0 4px 0', color: brandColor }}>🖨️ Custom 3D Figurines</h4>
            <p style={{ fontSize: '13px', color: '#666', margin: '0 0 15px 0', fontWeight: '500' }}>From memories to masterpieces</p>
            <div style={{ width: '100%', borderRadius: '20px', overflow: 'hidden', backgroundColor: '#000', aspectRatio: '16/9', boxShadow: '0 8px 25px rgba(0,0,0,0.05)' }}>
              <video src="/video-figurine.mp4" controls style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIA 1: Hand Painted Bags */}
      <section id="bags" style={{ marginTop: '120px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '30px', borderLeft: `6px solid ${brandColor}`, paddingLeft: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <img src="/logo-bags.jpeg" alt="Bags Logo" style={{ height: '160px', width: '160px', borderRadius: '25px', border: '1px solid #e8e2d5', objectFit: 'cover', boxShadow: '0 8px 25px rgba(0,0,0,0.05)' }} onError={(e) => e.target.style.display = 'none'} />
          <div style={{ flex: '1 1 400px' }}>
            <h3 style={{ fontSize: '32px', fontWeight: '800', margin: 0, color: brandColor }}>Hand Painted Bags</h3>
            <p style={{ color: accentColor, fontWeight: '700', fontSize: '20px', margin: '5px 0 12px 0' }}>Starting from 500 AED</p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#555', margin: '0 0 20px 0', maxWidth: '800px' }}>
              Each bag is a one-of-a-kind piece of wearable art, lovingly hand-painted with passion, creativity, and attention to every detail. No two designs are ever the same—because your style deserves to be as unique as your story.
            </p>
            <a href="https://www.instagram.com/onevibe.art" target="_blank" rel="noreferrer" style={{ display: 'inline-block', padding: '12px 28px', backgroundColor: brandColor, color: '#fff', textDecoration: 'none', borderRadius: '25px', fontWeight: '700', fontSize: '13px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>📸 Order on Instagram</a>
          </div>
        </div>

        {/* Galerie Genți cu Zoom integrat și Show More */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px' }}>
          {getVisibleImages(geantaImages, showAllBags).map((num) => (
            <div 
              key={num} 
              onClick={() => setSelectedImage({ src: `/geanta${num}.jpeg`, alt: `Hand-Painted Bag ${num}` })}
              style={{ backgroundColor: '#fff', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e8e2d5', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', cursor: 'zoom-in' }}
            >
              <img src={`/geanta${num}.jpeg`} alt={`Hand-Painted Bag ${num}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = `<span style="color: #ccc; font-weight: 600;">Custom Bag #${num}</span>`; }} />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button onClick={() => setShowAllBags(!showAllBags)} style={{ padding: '10px 30px', backgroundColor: 'transparent', border: `2px solid ${brandColor}`, borderRadius: '25px', fontWeight: '700', cursor: 'pointer', color: brandColor, fontSize: '14px' }}>
            {showAllBags ? 'Show Less' : `Show All Gallery (+${geantaImages.length - 4} photos)`}
          </button>
        </div>
      </section>

      {/* CATEGORIA 2: Engraving Services */}
      <section id="laser" style={{ marginTop: '120px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '30px', borderLeft: `6px solid ${brandColor}`, paddingLeft: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <img src="/logo-laser.jpeg" alt="Laser Logo" style={{ height: '160px', width: '160px', borderRadius: '25px', border: '1px solid #e8e2d5', objectFit: 'cover', boxShadow: '0 8px 25px rgba(0,0,0,0.05)' }} onError={(e) => e.target.style.display = 'none'} />
          <div style={{ flex: '1 1 400px' }}>
            <h3 style={{ fontSize: '32px', fontWeight: '800', margin: 0, color: brandColor }}>Engraving Services</h3>
            <p style={{ color: accentColor, fontWeight: '700', fontSize: '20px', margin: '5px 0 12px 0' }}>Starting from 150 AED</p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#555', margin: '0 0 10px 0', maxWidth: '800px' }}>
              Transform everyday objects into timeless keepsakes with precision laser engraving. From gifts and jewelry to glass, leather, wood, and metal, we personalize every piece to celebrate memories, milestones, and the people who matter most.
            </p>
            <p style={{ fontSize: '12px', fontStyle: 'italic', color: '#888', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span>🤖</span> <em>Please note: Gallery concept designs in this section are artistically visualized using digital AI technology to showcase engraving possibilities.</em>
            </p>
            <a href="https://www.instagram.com/lets.engravedxb?igsh=cDQ4aDlwd3RzMDBj" target="_blank" rel="noreferrer" style={{ display: 'inline-block', padding: '12px 28px', backgroundColor: brandColor, color: '#fff', textDecoration: 'none', borderRadius: '25px', fontWeight: '700', fontSize: '13px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>📸 Order on Instagram</a>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '35px' }}>
          {['🍷 Glasses & Bottles', '⌚ Watches', '💳 Wallets', '📱 Gadgets', '🖋️ Writing Tools'].map((item, idx) => (
            <span key={idx} style={{ padding: '8px 18px', border: '1px solid #e8e2d5', borderRadius: '20px', fontSize: '13px', background: '#fff', fontWeight: '500', color: '#555' }}>{item}</span>
          ))}
        </div>

        {/* Galerie Laser cu Zoom și Show More (Actualizat la 17 imagini!) */}
        <div style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px', display: 'grid' }}>
          {getVisibleImages(laserImages, showAllLaser).map((num) => (
            <div 
              key={num} 
              onClick={() => setSelectedImage({ src: `/laser${num}.jpeg`, alt: `Laser Custom Work ${num}` })}
              style={{ backgroundColor: '#fff', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e8e2d5', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', cursor: 'zoom-in' }}
            >
              <img src={`/laser${num}.jpeg`} alt={`Laser Custom Work ${num}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = `<span style="color: #ccc; font-weight: 600;">Concept Design #${num}</span>`; }} />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button onClick={() => setShowAllLaser(!showAllLaser)} style={{ padding: '10px 30px', backgroundColor: 'transparent', border: `2px solid ${brandColor}`, borderRadius: '25px', fontWeight: '700', cursor: 'pointer', color: brandColor, fontSize: '14px' }}>
            {showAllLaser ? 'Show Less' : `Show All Gallery (+${laserImages.length - 4} concepts)`}
          </button>
        </div>
      </section>

      {/* CATEGORIA 3: 3D Printed Hand Painted Figures */}
      <section id="figurines" style={{ marginTop: '120px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '30px', borderLeft: `6px solid ${brandColor}`, paddingLeft: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <img src="/logo-figurines.jpeg" alt="Figurines Logo" style={{ height: '160px', width: '160px', borderRadius: '25px', border: '1px solid #e8e2d5', objectFit: 'cover', boxShadow: '0 8px 25px rgba(0,0,0,0.05)' }} onError={(e) => e.target.style.display = 'none'} />
          <div style={{ flex: '1 1 400px' }}>
            <h3 style={{ fontSize: '32px', fontWeight: '800', margin: 0, color: brandColor }}>3D Printed Hand Painted Figures</h3>
            <p style={{ color: accentColor, fontWeight: '700', fontSize: '20px', margin: '5px 0 12px 0' }}>Starting from 400 AED</p>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#555', margin: '0 0 20px 0', maxWidth: '800px' }}>
              Bring your favorite moments and loved ones to life with custom 3D figurines, individually designed and hand-painted with incredible detail. Every creation is made to capture personality, emotion, and memories that last forever.
            </p>
            <a href="https://www.instagram.com/figureitout3d" target="_blank" rel="noreferrer" style={{ display: 'inline-block', padding: '12px 28px', backgroundColor: brandColor, color: '#fff', textDecoration: 'none', borderRadius: '25px', fontWeight: '700', fontSize: '13px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>📸 Order on Instagram</a>
          </div>
        </div>

        {/* Galerie Figurine cu Zoom și Show More */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px' }}>
          {getVisibleImages(figurineImages, showAllFigurines).map((num) => (
            <div 
              key={num} 
              onClick={() => setSelectedImage({ src: `/figurine${num}.jpeg`, alt: `Custom Figurine ${num}` })}
              style={{ backgroundColor: '#fff', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e8e2d5', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', cursor: 'zoom-in' }}
            >
              <img src={`/figurine${num}.jpeg`} alt={`Custom Figurine ${num}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = `<span style="color: #ccc; font-weight: 600;">Figurine #${num}</span>`; }} />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button onClick={() => setShowAllFigurines(!showAllFigurines)} style={{ padding: '10px 30px', backgroundColor: 'transparent', border: `2px solid ${brandColor}`, borderRadius: '25px', fontWeight: '700', cursor: 'pointer', color: brandColor, fontSize: '14px' }}>
            {showAllFigurines ? 'Show Less' : `Show All Gallery (+${figurineImages.length - 4} photos)`}
          </button>
        </div>
      </section>

      {/* SECȚIUNEA DE TESTIMONIALE */}
      <TestimonialsSection />

      {/* SECTIUNE LOCATIE */}
      <section id="location" style={{ marginTop: '120px', backgroundColor: '#fff', padding: '60px 40px', borderRadius: '45px', border: '1px solid #e8e2d5', boxShadow: '0 15px 35px rgba(0,0,0,0.02)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: accentColor, fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px', marginBottom: '10px' }}>
              <span>✈️ International Hub</span>
            </div>
            <h3 style={{ fontSize: '36px', fontWeight: '800', color: brandColor, margin: '0 0 15px 0' }}>Based in Dubai</h3>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6', margin: '0 0 30px 0' }}>
              Operating from the heart of global creativity and luxury. We handcraft and ship our unique masterpieces locally across Dubai and international destinations.
            </p>
            <a href="http://googleusercontent.com/maps.google.com/2" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 28px', backgroundColor: brandColor, color: '#fff', textDecoration: 'none', borderRadius: '25px', fontWeight: '700', fontSize: '14px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
              📍 Open Dubai Pin Map
            </a>
          </div>
          <div style={{ flex: '1 1 400px', height: '300px', backgroundColor: backgroundColor, borderRadius: '30px', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #bcae97' }}>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '50px', marginBottom: '10px' }}>✈️</div>
              <div style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '4px', color: brandColor }}>DXB</div>
              <div style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '5px' }}>United Arab Emirates</div>
              <div style={{ margin: '15px auto 0', width: '80px', height: '2px', backgroundColor: accentColor }}></div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#555', marginTop: '15px' }}>R&A Studio Global Headquarters</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & INSTAGRAMS */}
      <section id="contact" style={{ marginTop: '140px', textAlign: 'center', paddingBottom: '80px' }}>
        <h3 style={{ fontSize: '38px', fontWeight: '800', marginBottom: '10px', color: brandColor }}>Let's Connect</h3>
        <p style={{ color: '#666', marginBottom: '65px', fontSize: '16px' }}>Follow our master hub or reach our specific branches below.</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
          <div style={{ width: '100%', maxWidth: '550px', padding: '35px', border: `1px solid #e8e2d5`, borderRadius: '30px', backgroundColor: '#fff', display: 'flex', alignItems: 'center', gap: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <img src="/logo-ra-studio.jpeg" alt="R&A Studio" style={{ height: '140px', width: '140px', borderRadius: '22px', objectFit: 'cover', border: '1px solid #e8e2d5' }} />
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '22px', fontWeight: '800', color: brandColor }}>R&A Studio</h4>
              <p style={{ margin: '0 0 15px 0', fontSize: '14px', color: '#666' }}>All-in-One Creative Hub</p>
              <a href="https://www.instagram.com/ra.studiodxb?igsh=MXJwdzN5ejN0b2w1" target="_blank" rel="noreferrer" style={{ display: 'inline-block', color: '#fff', backgroundColor: brandColor, padding: '10px 24px', borderRadius: '20px', fontWeight: '700', textDecoration: 'none', fontSize: '13px' }}>@ra.studiodxb</a>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ padding: '20px', borderBottom: '1px solid #e8e2d5', display: 'flex', alignItems: 'center', gap: '25px' }}>
            <img src="/logo-bags.jpeg" alt="Bags" style={{ height: '140px', width: '140px', borderRadius: '22px', objectFit: 'cover', border: '1px solid #e8e2d5', boxShadow: '0 6px 20px rgba(0,0,0,0.04)' }} onError={(e) => e.target.style.display = 'none'} />
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: '700', color: brandColor }}>Hand Painted Bags</h4>
              <a href="https://www.instagram.com/onevibe.art" target="_blank" rel="noreferrer" style={{ color: accentColor, fontWeight: '700', textDecoration: 'none', fontSize: '15px' }}>@onevibe.art</a>
            </div>
          </div>

          <div style={{ padding: '20px', borderBottom: '1px solid #e8e2d5', display: 'flex', alignItems: 'center', gap: '25px' }}>
            <img src="/logo-laser.jpeg" alt="Laser" style={{ height: '140px', width: '140px', borderRadius: '22px', objectFit: 'cover', border: '1px solid #e8e2d5', boxShadow: '0 6px 20px rgba(0,0,0,0.04)' }} onError={(e) => e.target.style.display = 'none'} />
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: '700', color: brandColor }}>Engraving Services</h4>
              <a href="https://www.instagram.com/lets.engravedxb?igsh=cDQ4aDlwd3RzMDBj" target="_blank" rel="noreferrer" style={{ color: accentColor, fontWeight: '700', textDecoration: 'none', fontSize: '15px' }}>@lets.engravedxb</a>
            </div>
          </div>

          <div style={{ padding: '20px', borderBottom: '1px solid #e8e2d5', display: 'flex', alignItems: 'center', gap: '25px' }}>
            <img src="/logo-figurines.jpeg" alt="Figurines" style={{ height: '140px', width: '140px', borderRadius: '22px', objectFit: 'cover', border: '1px solid #e8e2d5', boxShadow: '0 6px 20px rgba(0,0,0,0.04)' }} onError={(e) => e.target.style.display = 'none'} />
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: '700', color: brandColor }}>3D printed hand painted figures</h4>
              <a href="https://www.instagram.com/figureitout3d" target="_blank" rel="noreferrer" style={{ color: accentColor, fontWeight: '700', textDecoration: 'none', fontSize: '15px' }}>@figureitout3d</a>
            </div>
          </div>

          <div style={{ padding: '20px', borderBottom: '1px solid #e8e2d5', display: 'flex', alignItems: 'center', gap: '25px' }}>
            <div style={{ fontSize: '42px', width: '140px', height: '140px', backgroundColor: '#fff', borderRadius: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #bcae97' }}>📞</div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: '700', color: brandColor }}>WhatsApp Fast Line</h4>
              <a href="tel:+971568774403" style={{ color: '#222', fontWeight: '700', textDecoration: 'none', fontSize: '15px' }}>+971 56 877 4403</a>
            </div>
          </div>
        </div>
      </section>

      {/* Buton discret "Înapoi sus" */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '40px' }}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ padding: '12px 24px', backgroundColor: '#fff', border: '1px solid #e8e2d5', borderRadius: '20px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', color: '#555', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
          ↑ Back to Top
        </button>
      </div>

      {/* MODAL LIGHTBOX (ZOOM LA CLICK) */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(26,26,26,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px', cursor: 'zoom-out' }}
        >
          <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }} onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              style={{ position: 'absolute', top: '-40px', right: '0', background: 'transparent', border: 'none', color: '#fff', fontSize: '30px', cursor: 'pointer', fontWeight: '300' }}
            >
              ×
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: '15px', border: '3px solid #fff', boxShadow: '0 10px 40px rgba(0,0,0,0.5)', objectFit: 'contain' }} 
            />
            <p style={{ color: '#fff', textAlign: 'center', marginTop: '10px', fontSize: '14px' }}>{selectedImage.alt}</p>
          </div>
        </div>
      )}

      {/* Footer complex */}
      <footer style={{ borderTop: '1px solid #e8e2d5', padding: '40px 0', color: '#666', fontSize: '13px', backgroundColor: '#fff', borderRadius: '30px 30px 0 0', margin: '0 -20px -20px -20px', paddingLeft: '20px', paddingRight: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto', textAlign: 'left', marginBottom: '30px' }}>
          <div>
            <h5 style={{ color: brandColor, fontWeight: '800', margin: '0 0 15px 0', fontSize: '14px', letterSpacing: '1px' }}>R&A STUDIO DXB</h5>
            <p style={{ color: '#777', lineHeight: '1.6', margin: 0 }}>
              Bridging handcraft expertise with futuristic artistry to create timeless personal luxury.
            </p>
          </div>
          <div>
            <h5 style={{ color: brandColor, fontWeight: '800', margin: '0 0 15px 0', fontSize: '14px', letterSpacing: '1px' }}>AI & Design Policy</h5>
            <p style={{ color: '#777', lineHeight: '1.6', margin: 0, fontSize: '12px' }}>
              Concept images featured in our Engraving section are digitally assisted and simulated via artificial intelligence. These serve strictly as representative design examples. Final physical engravings are executed manually/by laser on raw materials.
            </p>
          </div>
          <div>
            <h5 style={{ color: brandColor, fontWeight: '800', margin: '0 0 15px 0', fontSize: '14px', letterSpacing: '1px' }}>Privacy & Terms</h5>
            <p style={{ color: '#777', lineHeight: '1.6', margin: 0, fontSize: '12px' }}>
              We respect your privacy. All customer blueprints, private photographs for 3D modeling, and branding information submitted are strictly protected and never shared with third parties.
            </p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #f2ede4', paddingTop: '20px', textAlign: 'center', color: '#aaa' }}>
          © {new Date().getFullYear()} R&A Studio DXB. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;