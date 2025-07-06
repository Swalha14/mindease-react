import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Articles from './Articles';
import SupportGroups from './SupportGroups';
import Therapists from './Therapists';
import BreathingExercise from './BreathingExercise';

import MentalHealthArticle from './articles/MentalHealthArticle';
import StressArticle from './articles/StressArticle';
import SleepArticle from './articles/SleepArticle';
import DepressionArticle from './articles/DepressionArticle';
import AnxietyArticle from './articles/AnxietyArticle';
import BipolarArticle from './articles/BipolarArticle';
import EatingDisorderArticle from './articles/EatingDisorderArticle';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/support-groups" element={<SupportGroups />} />
        <Route path="/therapists" element={<Therapists />} />
        <Route path="/breathing" element={<BreathingExercise />} />

        {/* ✅ Individual article routes */}
        <Route path="/mental-health-article" element={<MentalHealthArticle />} />
        <Route path="/stress-article" element={<StressArticle />} />
        <Route path="/sleep-article" element={<SleepArticle />} />
        <Route path="/depression-article" element={<DepressionArticle />} />
        <Route path="/anxiety-article" element={<AnxietyArticle />} />
        <Route path="/bipolar-article" element={<BipolarArticle />} />
        <Route path="/eating-disorder-article" element={<EatingDisorderArticle />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
