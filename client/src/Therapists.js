import React from 'react';
import './therapist.css';

function Therapists() {
  return (
    <main className="container">
      <h2>Our Therapists</h2>
      <p>Meet the professionals ready to support your mental wellness journey</p>

      <div className="therapist-card">
        <img src="/images/jeremy-alford-O13B7suRG4A-unsplash.jpg" alt="Dr. Sarah Muthoni" />
        <div className="therapist-info">
          <h3>Dr. Sarah Muthoni</h3>
          <p className="location">📍 Nairobi, Kenya</p>
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <p><strong>Specialization:</strong> Cognitive Behavioral Therapy (CBT)</p>
          <p className="contact-info">
            <strong>Email:</strong> <a href="mailto:sarah.muthoni@example.com">sarah.muthoni@example.com</a><br />
            <strong>Phone:</strong> +254 712345678
          </p>
          <p>Sarah has over 10 years of experience helping individuals manage anxiety and stress through CBT techniques.</p>
        </div>
      </div>

      <div className="therapist-card">
        <img src="/images/usman-yousaf-pTrhfmj2jDA-unsplash.jpg" alt="Mr. James Otieno" />
        <div className="therapist-info">
          <h3>Mr. James Otieno</h3>
          <p className="location">📍 Kisumu, Kenya</p>
          <div className="rating">⭐⭐⭐⭐</div>
          <p><strong>Specialization:</strong> Family and Adolescent Therapy</p>
          <p className="contact-info">
            <strong>Email:</strong> <a href="mailto:james.otieno@example.com">james.otieno@example.com</a><br />
            <strong>Phone:</strong> +254 798765432
          </p>
          <p>James works closely with families and teenagers, focusing on healthy communication and emotional development.</p>
        </div>
      </div>

      <div className="therapist-card">
        <img src="/images/tmvmnt-media-rm7rZYdl3rY-unsplash.jpg" alt="Dr. Amina Noor" />
        <div className="therapist-info">
          <h3>Dr. Amina Noor</h3>
          <p className="location">📍 Mombasa, Kenya</p>
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <p><strong>Specialization:</strong> Trauma & Grief Counseling</p>
          <p className="contact-info">
            <strong>Email:</strong> <a href="mailto:amina.noor@example.com">amina.noor@example.com</a><br />
            <strong>Phone:</strong> +254 701234567
          </p>
          <p>Amina has specialized in trauma recovery, helping clients navigate loss, PTSD, and emotional healing.</p>
        </div>
      </div>

      <div className="therapist-card">
        <img src="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg" alt="Ms. Lydia Wambui" />
        <div className="therapist-info">
          <h3>Ms. Lydia Wambui</h3>
          <p className="location">📍 Nakuru, Kenya</p>
          <div className="rating">⭐⭐⭐⭐</div>
          <p><strong>Specialization:</strong> Stress & Anger Management</p>
          <p className="contact-info">
            <strong>Email:</strong> <a href="mailto:lydia.wambui@example.com">lydia.wambui@example.com</a><br />
            <strong>Phone:</strong> +254 745678901
          </p>
          <p>Helps clients develop emotional regulation skills and reduce conflict.</p>
        </div>
      </div>

      <div className="therapist-card">
        <img src="/images/taylor-grote-UiVe5QvOhao-unsplash.jpg" alt="Dr. Kevin Mwangi" />
        <div className="therapist-info">
          <h3>Dr. Kevin Mwangi</h3>
          <p className="location">📍 Eldoret, Kenya</p>
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <p><strong>Specialization:</strong> Psychiatric Assessment & Medication</p>
          <p className="contact-info">
            <strong>Email:</strong> <a href="mailto:kevin.mwangi@example.com">kevin.mwangi@example.com</a><br />
            <strong>Phone:</strong> +254 743210987
          </p>
          <p>Licensed psychiatrist providing diagnosis, therapy, and medication plans.</p>
        </div>
      </div>

      <div className="therapist-card">
        <img src="/images/eben-kassaye-Z7TAIOQgjWA-unsplash.jpg" alt="Mrs. Carol Wekesa" />
        <div className="therapist-info">
          <h3>Mrs. Carol Wekesa</h3>
          <p className="location">📍 Thika, Kenya</p>
          <div className="rating">⭐⭐⭐⭐</div>
          <p><strong>Specialization:</strong> Couple & Marriage Therapy</p>
          <p className="contact-info">
            <strong>Email:</strong> <a href="mailto:carol.wekesa@example.com">carol.wekesa@example.com</a><br />
            <strong>Phone:</strong> +254 790123456
          </p>
          <p>Helps couples build healthy relationships and resolve emotional conflicts.</p>
        </div>
      </div>

      <div className="therapist-card">
        <img src="/images/ninthgrid-MP7xlgAhqsY-unsplash.jpg" alt="Mr. Brian Kiptoo" />
        <div className="therapist-info">
          <h3>Mr. Brian Kiptoo</h3>
          <p className="location">📍 Kericho, Kenya</p>
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <p><strong>Specialization:</strong> Substance Abuse Counseling</p>
          <p className="contact-info">
            <strong>Email:</strong> <a href="mailto:brian.kiptoo@example.com">brian.kiptoo@example.com</a><br />
            <strong>Phone:</strong> +254 799876543
          </p>
          <p>Experienced in recovery support, addiction education, and relapse prevention.</p>
        </div>
      </div>
    </main>
  );
}

export default Therapists;
