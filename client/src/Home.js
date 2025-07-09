
import React, { useEffect, useState } from 'react';
import './styles.css';

function Home() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  return (
    <div>
      <section className="intro">
        <h2>
          {userEmail
            ? `Welcome back, ${userEmail.split('@')[0]}!`
            : 'Your Safe Space for Mental Well-being'}
        </h2>
        <p>
          Explore resources to support your mental health—learn about stress, anxiety, sleep, and more.
          Join a supportive community and take steps toward a calmer you.
        </p>
      </section>

      <main>
        <section className="features">
          <h2 className="features-heading">Explore our Tools to help with your Well-being</h2>
          <div className="card-container">
            <div className="card">
              <h3>📰 Articles</h3>
              <p>Read about mental health topics like anxiety, depression, stress, sleep issues, and more.</p>
              <a href="/articles">Explore Articles</a>
            </div>
            <div className="card">
              <h3>🤝 Support Groups</h3>
              <p>Connect with others in our peer support groups and share your experiences.</p>
              <a href="/support-groups">Join a Group</a>
            </div>
            <div className="card">
              <h3>🧑‍⚕️ Therapist Contacts</h3>
              <p>Access licensed professionals for one-on-one guidance and therapy.</p>
              <a href="/therapists">Find a Therapist</a>
            </div>
            <div className="card">
              <h3>🧘‍♀️ Breathing Exercises</h3>
              <p>Practice calming breathing techniques to reduce stress and anxiety.</p>
              <a href="/breathing">Start Breathing</a>
            </div>
            <div className="card">
              <h3>🧠 Mood Quiz</h3>
              <p>Check in with your emotions using our quick mental health quiz.</p>
              <a href="/mood-quiz">Take the Quiz</a>
            </div>
          </div>
        </section>

        <section className="quotes-section">
          <h2 className="section-heading">🌟 Motivational Quotes</h2>
          <div className="quote-cards">
            <div className="quote-card">
              <p>"You don't have to control your thoughts. You just have to stop letting them control you." – Dan Millman</p>
            </div>
            <div className="quote-card">
              <p>"Your mental health is a priority. Your happiness is essential. Your self-care is a necessity."</p>
            </div>
            <div className="quote-card">
              <p>"It's okay to not be okay. Just don't give up."</p>
            </div>
            <div className="quote-card">
              <p>"Healing takes time, and asking for help is a courageous step." – Mariska Hargitay</p>
            </div>
            <div className="quote-card">
              <p>"Sometimes the people around you won't understand your journey. They don't need to, it's not for them."</p>
            </div>
            <div className="quote-card">
              <p>"Mental health… is not a destination, but a process. It's about how you drive, not where you're going." – Noam Shpancer</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
