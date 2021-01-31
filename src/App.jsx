const renderElement = (
  <>
    <div className="navbar">
      <a href="/" className="navbar-heading">
        About Me
      </a>
      <ul className="navbar-items-wrapper">
        <li className="navbar-item">Home</li>
      </ul>
    </div>

    <div className="body-wrapper">
      <div className="home-image">
        <img src="images/kalavantin-durg.jpg" />
        <div className="text-on-image">
          <div className="text-on-image-name">Jainam Sheth</div>
          <hr className="text-on-image-seperater" />
          <div className="typewriter">
            <p className="typewriter-text text-on-image-desc">Developer by Passion, Traveller by Heart</p>
          </div>
        </div>
      </div>

      <div className="home-body">
        <article className="article about-me-article">
          <section>
            <h2 className="sec-head">About Me</h2>
            <div className="sec-body">
              <img src="images/about-me-profile.jpg" className="profile-img" />
              <div className="about-me-desc">
                <p>
                  Hi! I’m <strong style={{ color: "black" }}>Jainam Sheth</strong> and people usually call me
                  "Jenni". I am a passionate Software Engineer who enjoys creating
                  things that live on the internet: They can be either websites,
                  applications, plugins, APIs, or anything.
                </p>
                <p>
                  Living on planet Earth since '95, currently I have been busy exploring new places and
                  going to that favourite place again and again.
                  Completed my Engineering from Mumbai University and I began my career as a Software Engineer at Accenture, Mumbai.
                  Lately, I have been busy working on a project called
                  <a href="https://radiant.thoughtspot.com/" title="Documentation of the project" target="_blank" className="radiant"> Radiant </a>
                  which involves developing a design system in React similar to react-bootstrap or material-ui.
                  Apart from that, I strongly believe that a developer should have great exposure to express, story tell, and with
                  technical expertise deliver impactful softwares.
                  My goal here is to build products that create a positive impact on the real world.
                </p>
                <p>
                  When I am not programming, you can find me discovering a new
                  place, watching a sunset, laying on the couch, star gazing, meditating
                  or dreaming.
                </p>
                <a href="https://github.com/jainamcsheth" target="_blank" className="github-btn">
                  <button className="button button-dark">View my GitHub Repo</button>
                </a>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  </>
);

ReactDOM.render(renderElement, document.getElementById("contents"));
