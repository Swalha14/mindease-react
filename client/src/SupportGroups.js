import React from 'react';
import './styles.css';

function SupportGroups() {
  return (
    <main style={{ maxWidth: '100%', margin: '2rem 0', padding: '0 1rem' }}>
      <h2>Support Groups</h2>
      <p>Welcome to our Support Groups section. Here are some groups you can join to connect with others:</p>
        <div class="support-groups-container">
  <div class="support-card anxiety">
    <h3>Anxiety Support Group</h3>
    <p>Weekly online meetings for sharing coping strategies.</p>
    <p class="contact-info">📞 Contact: +254 769828286</p>
    <p class="contact-info">✉️ anxietygroup@mindease.com</p>
  </div>

  <div class="support-card stress">
    <h3>Stress Management Group</h3>
    <p>Guided discussions and stress relief techniques.</p>
    <p class="contact-info">📞 Contact: +254 769828286</p>
    <p class="contact-info">✉️ stressgroup@mindease.com</p>
  </div>

  <div class="support-card sleep">
    <h3>Sleep Health Circle</h3>
    <p>Tips and peer support for improving sleep habits.</p>
    <p class="contact-info">📞 Contact: +254 712345678</p>
    <p class="contact-info">✉️ sleepcircle@mindease.com</p>
  </div>

  <div class="support-card general">
    <h3>General Mental Wellness Group</h3>
    <p>Open forum for any mental health topics.</p>
    <p class="contact-info">📞 Contact: +254 744336688</p>
    <p class="contact-info">✉️ wellnessgroup@mindease.com</p>
  </div>

  <div class="support-card aa">
    <h3>Alcoholics Anonymous Group</h3>
    <p>Support for those struggling with substance abuse.</p>
    <p class="contact-info">📞 Contact: +254 713389992</p>
    <p class="contact-info">✉️ aagroup@mindease.com</p>
  </div>
</div>

      <p style={{ marginTop: '1rem' }}>
        If you want to find a therapist or more professional help, please visit our{' '}
        <a href="/therapist-contacts">Therapist Contacts</a> page.
      </p>
    </main>
  );
}

export default SupportGroups;
