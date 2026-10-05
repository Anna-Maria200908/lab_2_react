import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  const userData = {
    name: "Ханас Анна-Марія Андріївна варіант 24",
    title: "Junior Frontend / React Developer",
    email: "anna-mariia.khanas.kb.2025@lpnu.ua",
    github: "https://github.com/Anna-Maria200908/lab_2_react.git",
    degree: "Бакалавр з кібербезпеки та захисту інформації ",
    university: "Національний університет Львівська політехніка",
    years: "2025-Дотепер рр.",
    experience: [
      {
        role: "HTML/CSS Стажер",
        company: "WebStudio",
        period: "Вересень 2023 — Грудень 2023",
        tasks: [
          "Семантична розмітка та дотримання стандартів доступності (a11y)"
        ]
      }
    ]
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <Header 
        name={userData.name} 
        title={userData.title} 
        email={userData.email} 
        github={userData.github} 
      />
      
      <main>
        <Experience items={userData.experience} />
        <Education 
          degree={userData.degree} 
          university={userData.university} 
          years={userData.years} 
        />
      </main>

      <Footer year="2026" name={userData.name} />
    </div>
  );
}

export default App;