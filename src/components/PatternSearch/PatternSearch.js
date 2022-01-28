import { breakpoints, cols, layouts, sortingColoursMap } from '../../constants';
import Card from '../Card';
import { Responsive, WidthProvider } from "react-grid-layout";
import React, {useState, useEffect} from 'react';
import NaiveSearch from './Algorithms/Naive';
import KMPSearch from './Algorithms/KMP';
import BMHSearch from './Algorithms/BMH';
import SliderInput from '../Input/SliderInput';
import TextInput from '../Input/TextInput';
import ButtonInput from '../Input/ButtonInput';
import PatternSearchVisual from './PatternSearchVisual';
import { FaPlay } from 'react-icons/fa'

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function PatternSearch() {
  // States
  const [alg, setAlg] = useState("Naive Search");
  // const [addArr, setAddArr] = useState([])
  const [text, setText] = useState(["A", "A", "A", "A", "A"]);
  const [pattern, setPattern] = useState(["A", "A"]);
  const [patternCopy, setPatternCopy] = useState(["A", "A"]);
  const [speed, setSpeed] = useState(500);
  const [orange, setOrange] = useState([]);
  const [green, setGreen] = useState([]);
  const [red, setRed] = useState([]);
  const [result, setResult] = useState([]);
  const [explanation, setExplanation] = useState([]);
  const [animPlaying, setAnimPlaying] = useState(false);

  function handleSubmit(event) {
      const sleep = (ms) => {
          return new Promise((resolve) => setTimeout(resolve, ms));
      };
      setGreen([])
      setOrange([])
      setRed([])
      setResult([])
      setExplanation([])
      // setAddArr([])
      setPatternCopy(pattern.slice())

      const animateAccOrder = async (steps) => {
          setAnimPlaying(true);
          for (let i = 0; i < steps.length; i++) {
              console.log(steps[i])
              const [j, k, newPat, green, red, newResult, newExp] = steps[i]
              setOrange([j, k]);

              if (green) {
                  setGreen([...green]);
              }
              if (red) {
                  setRed([j, k]);
              }
              if (newResult !== null) {
                  setResult((prevState) => [...prevState, newResult]);
              }
              if (newPat) {
                  setGreen([]);
                  setRed([]);
                  setPatternCopy(newPat);
              }
              if (newExp) {
                  setExplanation((prevState) => [...prevState, newExp]);
              }
              // if (addArr) {

              // }
              await sleep(speed);
          }
          // if (!result.length) {
          //     setResult([" "]);
          // }
          setAnimPlaying(false);
      };

      event.preventDefault();

      if (!text.length ||  !pattern.length || pattern.length > text.length) {
          return null;
      }

      if (alg === "Naive Search") {
          animateAccOrder(NaiveSearch(text, pattern.slice()));
      } else if (alg === "BMH Search") {
          animateAccOrder(BMHSearch(text, pattern.slice()));
      } else if (alg === "KMP Search") {
          animateAccOrder(KMPSearch(text, pattern.slice()));
      }
  }

  useEffect(() => {
      setGreen([]);
      setOrange([]);
      setRed([]);
      setResult([])
      setExplanation([])
      setPatternCopy(pattern.slice());
  }, [pattern]);
  
  return (
    <div>
      <div className='title'>PATTERN SEARCH</div>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={breakpoints}
        cols={cols}
        draggableHandle='.card-drag-handle'
      >
        <div key='input'>
          <Card
            colour='orange'
            header='input'
            child={
              <div className='inputs'>
                <SliderInput
                  label='length'
                  min={3}
                  max={40}
                  step={1}
                  val={len}
                  setVal={setLen}
                />
                <TextInput
                  label='array'
                  placeholder='3, 2, 1, ...'
                  val={barsTemp}
                  setVal={setBarsTemp}
                />
                <ButtonInput
                  label='GENERATE'
                  handleClick={() => setBars([...generateShuffledArray(len)])}
                  colour='dark-blue'
                />
              </div>
            }
          />
        </div>
        <div key='cases'>
          <Card colour='red' header='cases'/>
        </div>
        <div key='controls'>
          <Card
            colour='pink'
            header='controls'
            child={
              <div className='controls'>
                <SliderInput
                  label='speed'
                  min={10}
                  max={100}
                  step={1}
                  val={speed}
                  setVal={setSpeed}
                />
                <ButtonInput
                  label='PLAY'
                  handleClick={handleSubmit}
                  colour='green'
                  icon={<FaPlay className='icon' />}
                />
                <select onChange={e => setAlg(e.target.value)}>
                  <option value='Insertion Sort'>Insertion Sort</option>
                  <option value='Quicksort'>Quicksort</option>
                  <option value='Selection Sort'>Selection Sort</option>
                </select>
              </div>
            }
          />
        </div>
        <div key='visualisation' data-name='visualisation' id='visualisation'>
          <Card
            colour='purple'
            header='visualisation' 
            child={ 
            <PatternSearchVisual
            />
          }/>
        </div>
        <div key='explanation'>
          <Card colour='mint' header='explanation'/>
        </div>
      </ResponsiveGridLayout>
    </div>
  );
}
