import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';
import IdeaLibrary from './pages/IdeaLibrary';
import ProjectVault from './pages/ProjectVault';
import CollegePrepPortal from './pages/CollegePrepPortal';
import TimelineGenerator from './components/collegePrep/TimelineGenerator';
import DocumentTemplates from './components/collegePrep/DocumentTemplates';
import EssayPrompts from './components/collegePrep/EssayPrompts';
import ScholarshipFinder from './components/collegePrep/ScholarshipFinder';
import StudentGuides from './components/collegePrep/StudentGuides';
import StudentVoices from './components/collegePrep/StudentVoices';
import ResourceLibrary from './components/collegePrep/ResourceLibrary';
import WorryBoard from './components/collegePrep/WorryBoard';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/idea-library" element={<IdeaLibrary />} />
          <Route path="/project-vault" element={<ProjectVault />} />
          <Route path="/college-prep" element={<CollegePrepPortal />} />
          <Route path="/college-prep/timeline" element={<TimelineGenerator />} />
          <Route path="/college-prep/documents" element={<DocumentTemplates />} />
          <Route path="/college-prep/essays" element={<EssayPrompts />} />
          <Route path="/college-prep/scholarships" element={<ScholarshipFinder />} />
          <Route path="/college-prep/guides" element={<StudentGuides />} />
          <Route path="/college-prep/voices" element={<StudentVoices />} />
          <Route path="/college-prep/resources" element={<ResourceLibrary />} />
          <Route path="/college-prep/worry-board" element={<WorryBoard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 