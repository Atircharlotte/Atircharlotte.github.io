import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import '../server';

function App() {
  //array fetched
  const [lang, setLang] = React.useState([]);
  //default language: english
  const [pickedLg, setPickedLg] = React.useState('english');

  //async function to fetch data
  const fetchData = async () => {
    try {
      const res = await fetch('/api/languages');
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setLang(data.languages);
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  };

  //fetch data
  React.useEffect(() => {
    fetchData();
  }, []);

  //array containing only one obj
  const pickedObj = lang.filter((lg) => lg.label === pickedLg);

  const chosenOne = pickedObj.length > 0 ? pickedObj[0] : null;

  //update picked language
  const updateData = (newLang) => {
    setPickedLg(newLang);
  };
  return (
    chosenOne && (
      <>
        <Header updateData={updateData} chosenOne={chosenOne} />
        <Main chosenOne={chosenOne} />
        <Footer />
      </>
    )
  );
}

export default App;
