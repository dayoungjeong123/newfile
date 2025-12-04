import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <header class="site-header">
    <div class="container">
      <h1 class="site-title">나의 첫 웹페이지</h1>
      <nav class="site-nav">
        <a href="#about">소개</a>
        <a href="#projects">프로젝트</a>
        <a href="#contact">연락</a>
      </nav>
    </div>
  </header>

  <main class="site-main">
    <section class="hero">
      <div class="container">
        <h2>안녕하세요! 👋</h2>
        <p>이곳은 제가 만든 간단한 웹페이지입니다. 아래에서 제 소개와 프로젝트를 확인해 보세요.</p>
        <button class="primary-btn">더 알아보기</button>
      </div>
    </section>

    <section id="about" class="section">
      <div class="container">
        <h2>👤 소개</h2>
        <p>
          여기에 자기소개를 적어 보세요.<br />
          예: 저는 웹 개발에 관심이 많은 학생입니다. HTML, CSS, JavaScript를 공부하고 있어요.
        </p>
      </div>
    </section>

    <section id="projects" class="section section-alt">
      <div class="container">
        <h2>💡 프로젝트</h2>
        <div class="cards">
          <article class="card">
            <h3>프로젝트 1</h3>
            <p>첫 번째 프로젝트에 대한 간단한 설명을 적어 보세요.</p>
          </article>
          <article class="card">
            <h3>프로젝트 2</h3>
            <p>두 번째 프로젝트에 대한 간단한 설명을 적어 보세요.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="container">
        <h2>📫 연락</h2>
        <p>이메일: <a href="mailto:example@email.com">example@email.com</a></p>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>© 2025 나의 웹페이지. 모든 권리 보유.</p>
    </div>
  </footer>
`
