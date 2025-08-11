import { useState, useEffect } from 'react'
import './App.css'
import Card from '../comon/comporonts/Card/card'
import Swal from 'sweetalert2';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [filterValue, setFilterValue] = useState('');

  function cick() {


    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/` + inputValue)
      .then((response) => {
        if (!response.ok) {


          Swal.fire({
            icon: "error",
            title: "Error & Try again.",
            text: "Not found in  the Word ",
            footer: '<a href="#card">try</a>'
          });

     

          return;
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setFilterValue(data);

        }
      })
      .catch((error) => {

        Swal.fire({
          icon: "error",
          title: "Error & Try Agin ",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });


     
      });
  }

  return (

    <div>
      <Card search={cick} setData={setInputValue} />

     {filterValue && filterValue.title !== '' ? (


        <div className='x'>


          <div>
            <h2 className='word'>{filterValue[0].word}</h2>
          </div>

          <div className='txt1'>
            <h1><h1 className='Pronunciation'>Pronunciation</h1>
              {filterValue[0].phonetics[0]?.text}</h1>
          </div>



          <div>
            {filterValue[0].phonetics[0]?.audio && (

              <button className='btn' onClick={() => new Audio(filterValue[0].phonetics[0].audio).play()}>
                play
              </button>
            )}
          </div>

          <div className='txt2'>
          <h3 className='Definitions'>Definitions</h3>

       
          {filterValue[0].meanings.map((meaning, index) => (

            <div key={index}>

              <h4>{meaning.partOfSpeech}</h4>

              <ul>
                {meaning.definitions.map((val, index) => (
                  <li key={index}>{val.definition}</li>

                ))}
              </ul>

            </div>

          ))}
          </div>
       
        </div>
      ) : (
        <br />
      )} 
     </div>
  )
}

export default App