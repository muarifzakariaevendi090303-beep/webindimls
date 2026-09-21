import './App.css'
import logo from './assets/WhatsApp Image 2026-09-21 at 07.54.26.jpeg'

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo-text">
          <img src={logo} alt="INDI Logo" />
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">Tentang</a>
          <a href="#services">Layanan</a>
          <a href="#how-it-works">Cara Kerja</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Kontak</a>
        </div>

        <a href="#contact" className="nav-button">
          Mulai Bersama INDI
        </a>
      </nav>


      <main>

        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-content">

            <p className="hero-label">
              INDI MUSLIM LIFESTYLE SOLUTIONS
            </p>

            <h1>
              Temukan berbagai kebutuhan Muslim dengan lebih mudah
            </h1>

            <p className="hero-description">
              INDI hadir sebagai platform yang menghubungkan berbagai
              kebutuhan dan gaya hidup Muslim dalam satu ekosistem.
            </p>

            <div className="hero-buttons">
              <a href="#services" className="btn-primary">
                Jelajahi INDI
              </a>

              <a href="#about" className="btn-secondary">
                Tentang INDI
              </a>
            </div>

          </div>
        </section>


        {/* ABOUT */}
        <section id="about" className="about">

          <div className="section-heading">
            <p className="section-label">
              TENTANG INDI
            </p>

            <h2>
              Satu platform untuk berbagai
              <span> kebutuhan gaya hidup Muslim.</span>
            </h2>
          </div>

          <div className="about-grid">

            <div className="about-card">
              <span>01</span>
              <h3>Siapa Kami</h3>
              <p>
                INDI dikembangkan sebagai platform yang menghadirkan
                berbagai kebutuhan Muslim dalam satu ekosistem yang
                mudah diakses.
              </p>
            </div>

            <div className="about-card">
              <span>02</span>
              <h3>Visi Kami</h3>
              <p>
                Membangun ekosistem digital yang bermanfaat dan
                memudahkan masyarakat Muslim dalam memenuhi berbagai
                kebutuhan sehari-hari.
              </p>
            </div>

            <div className="about-card">
              <span>03</span>
              <h3>Nilai INDI</h3>
              <p>
                Mengutamakan kemudahan, kebermanfaatan, kualitas,
                dan hubungan yang saling menguntungkan.
              </p>
            </div>

          </div>

        </section>


        {/* VALUES */}
        <section className="values">

          <div className="section-heading">
            <p className="section-label">
              NILAI INDI
            </p>

            <h2>
              Dibangun untuk memberikan
              <span> manfaat yang nyata.</span>
            </h2>
          </div>

          <div className="value-grid">

            <article>
              <span>01</span>
              <h3>Kemudahan</h3>
              <p>
                Menghadirkan pengalaman yang sederhana dan mudah
                digunakan.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Kebermanfaatan</h3>
              <p>
                Mengembangkan layanan yang memberikan manfaat
                bagi kehidupan Muslim.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Kualitas</h3>
              <p>
                Terus meningkatkan kualitas produk, layanan,
                dan pengalaman pengguna.
              </p>
            </article>

          </div>

        </section>


        {/* SERVICES */}
        <section id="services" className="services">

          <div className="section-heading">
            <p className="section-label">
              EKOSISTEM INDI
            </p>

            <h2>
              Berbagai kebutuhan dalam
              <span> satu platform.</span>
            </h2>

            <p className="section-description">
              INDI dipersiapkan untuk menghadirkan berbagai kategori
              yang dapat terus berkembang sesuai kebutuhan pengguna.
            </p>
          </div>


          <div className="service-list">

            <article className="service-item">
              <div className="service-number">01</div>

              <div>
                <h3>Muslim Lifestyle</h3>
                <p>
                  Berbagai kebutuhan untuk menunjang kehidupan
                  dan gaya hidup Muslim.
                </p>
              </div>
            </article>


            <article className="service-item">
              <div className="service-number">02</div>

              <div>
                <h3>Fashion Muslim</h3>
                <p>
                  Kebutuhan fashion Muslim untuk berbagai aktivitas
                  dan kehidupan sehari-hari.
                </p>
              </div>
            </article>


            <article className="service-item">
              <div className="service-number">03</div>

              <div>
                <h3>Parfum</h3>
                <p>
                  Pilihan parfum yang menjadi bagian dari
                  kebutuhan dan gaya hidup Muslim.
                </p>
              </div>
            </article>


            <article className="service-item">
              <div className="service-number">04</div>

              <div>
                <h3>Education</h3>
                <p>
                  Informasi dan berbagai kebutuhan pendidikan
                  yang bermanfaat.
                </p>
              </div>
            </article>

          </div>

        </section>


        {/* HOW IT WORKS */}
        <section id="how-it-works" className="how-it-works">

          <div className="section-heading">
            <p className="section-label">
              CARA KERJA
            </p>

            <h2>
              Sederhana untuk digunakan,
              <span> mudah untuk dikembangkan.</span>
            </h2>
          </div>

          <div className="steps">

            <div className="step">
              <span>01</span>
              <h3>Pilih Kebutuhan</h3>
              <p>
                Temukan kategori atau layanan yang sesuai dengan
                kebutuhan Anda.
              </p>
            </div>

            <div className="step">
              <span>02</span>
              <h3>Jelajahi</h3>
              <p>
                Lihat berbagai pilihan produk dan layanan yang
                tersedia di dalam ekosistem INDI.
              </p>
            </div>

            <div className="step">
              <span>03</span>
              <h3>Gunakan</h3>
              <p>
                Nikmati pengalaman yang mudah dan terintegrasi
                dalam satu platform.
              </p>
            </div>

          </div>

        </section>


        {/* FAQ */}
        <section id="faq" className="faq">

          <div className="section-heading">
            <p className="section-label">
              FAQ
            </p>

            <h2>
              Pertanyaan yang
              <span> sering ditanyakan.</span>
            </h2>
          </div>

          <div className="faq-list">

            <details>
              <summary>Apa itu INDI?</summary>
              <p>
                INDI adalah platform yang dipersiapkan untuk
                menghubungkan berbagai kebutuhan dan gaya hidup
                Muslim dalam satu ekosistem.
              </p>
            </details>

            <details>
              <summary>Apa saja yang tersedia di INDI?</summary>
              <p>
                INDI akan terus mengembangkan berbagai kategori,
                seperti Muslim Lifestyle, Fashion Muslim, Parfum,
                Education, dan kebutuhan lainnya.
              </p>
            </details>

            <details>
              <summary>Apakah INDI akan terus berkembang?</summary>
              <p>
                Ya. INDI dirancang sebagai platform yang dapat
                berkembang mengikuti kebutuhan pengguna dan mitra.
              </p>
            </details>

          </div>

        </section>


        {/* CONTACT */}
        <section id="contact" className="contact">

          <div className="contact-content">

            <p className="section-label">
              MULAI BERSAMA INDI
            </p>

            <h2>
              Mari membangun ekosistem
              <span> yang bermanfaat bersama.</span>
            </h2>

            <p>
              INDI sedang dikembangkan untuk menjadi platform yang
              memberikan kemudahan dan manfaat bagi kehidupan Muslim.
            </p>

            <a
  href="https://wa.me/6281389585882"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary"
>
  Hubungi INDI via WhatsApp
</a>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer>

        <div className="footer-main">

          <div className="footer-brand">
            <img src={logo} alt="INDI Logo" />

            <p>
              INDI Muslim Lifestyle Solutions
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">Tentang</a>
            <a href="#services">Layanan</a>
            <a href="#how-it-works">Cara Kerja</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Kontak</a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 INDI Muslim Lifestyle Solutions
          </p>

          <p>
            All rights reserved.
          </p>
        </div>

      </footer>

    </div>
  )
}

export default App