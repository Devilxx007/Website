import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';
import Scholar from './components/Scholar';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <section className="flex m-2 justify-evenly">
      <Card 
      img = "https://www.timeshighereducation.com/student/sites/default/files/sydney_0.jpg"
      title = "Study in Australia"
      />
      <Card 
      img = "https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/french_flag.jpg?itok=VHXhicOl"
      title = "Study in France"
      />
      <Card 
      img = "https://studysmart.co.in/wp-content/uploads/2022/10/1.-Canadian-universities-for-international-students-requirements-and-application-best-practices.jpg"
      title = "Study in Canada"
      />
      <Card 
      img = "https://www.studying-in-germany.org/wp-content/uploads/2013/11/most-employable-degrees-in-germany.jpg"
      title = "Study in Germany"
      />
      <Card 
      img = "https://www.educationinireland.com/images_upload/EiI/en/Where-can-I-study-/View-all-Universities-Colleges/UCD_2017.jpg"
      title = "Study in Ireland"
      />
      </section>
      <div className="text-5xl font-bold m-2 p-3"><h1>Best Scholarships</h1></div>
      <section className="flex m-2 justify-evenly">
      <Scholar 
      img='https://d2v9ipibika81v.cloudfront.net/uploads/sites/56/fulbright.jpg'
      title='Fullbright Awards'
      desc='The Fulbright scholarship is an international scholarship funded by the US Government to support international students enrolled in an American university.'
      />
      <Scholar 
      img='https://i79media.com/wp-content/uploads/2023/07/Rhodes-Scholarships-for-West-Africa.jpg'
      title='Rhodes Scholarship'
      desc='The scholarship is open to exceptional students around the world with the passion to study in the UK and in return help change the world they live in. First awarded in 1902, the Rhodes Scholarships is one of the most prestigious international scholarships enabling outstanding young people from around the world to study at the University of Oxford.'
      />
      <Scholar 
      img='https://yespeople.com.au/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-08-at-20.34.46.jpeg'
      title='Destination Australia Scholarship'
      desc='This is an Australian Government supported scholarship, but the scholarship is for applicants enrolling at all levels of educational training beginning from Certificate IV to doctoral level. The scholarship is a fully funded scholarship and it is for applicants who demonstrate excellent academic potential.'
      />
      </section>
      <div className="text-5xl font-bold m-2 p-3"><h1>Testimonials</h1></div>
      <section className="flex justify-evenly m-2 p-3">
      <Testimonials
      name = 'Jessica'
      title = 'Student at UCD'
      img = 'https://picsum.photos/60/60'
      desc = 'Scholarships Abroad was a game-changer in my pursuit of higher education abroad. Their user-friendly platform, extensive scholarship listings, and valuable guidance made my dream a reality. Thank you for being the catalyst to my success!'
      />
      <Testimonials
      name = 'Paul'
      title = 'Student at Trinity'
      img = 'https://picsum.photos/60/60'
      desc = 'Scholarships Abroad made my dreams come true! The wealth of scholarship opportunities, easy navigation, and expert advice on the website were instrumental in securing my scholarship. Thank you for changing my life!'
      />
      </section>
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
