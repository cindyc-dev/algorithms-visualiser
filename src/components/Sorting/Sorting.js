import { breakpoints, cols, layouts, sortingColoursMap } from '../../constants';
import React, { useState, useEffect } from 'react';
import Card from '../Card';
import { Responsive, WidthProvider } from "react-grid-layout";
import SortingVisual from './SortingVisual';
import InsertionSort from './Algorithms/InsertionSort'
import Quicksort from './Algorithms/Quicksort';
import SelectionSort from './Algorithms/SelectionSort'
import SliderInput from '../Input/SliderInput';
import TextInput from '../Input/TextInput';
import ButtonInput from '../Input/ButtonInput';
import { FaPlay } from 'react-icons/fa'

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Sorting() {
  // States
  const [alg, setAlg] = useState("Insertion Sort")
  const [len, setLen] = useState(10)
  const [bars, setBars] = useState([])
  const [speed, setSpeed] = useState(50)
  const [compare, setCompare] = useState([])
  const [swap, setSwap] = useState([])
  const [sortedIndexes, setSortedIndex] = useState([])
  const [currStep, setCurrStep] = useState(0);

  /* Generates new shuffled array and resets compare, swap and sortedIndexes 
      arrays.
  */
  function generateShuffledArray(length) {
    setCompare([])
    setSwap([])
    setSortedIndex([])

    // Creates array [1 ... len]
    let randomArray = Array(length).fill(1);
    console.log(`  1 array: ${randomArray}`)
    for (let k = 0; k < length; k++) {
      randomArray[k] = k+1;
    }
    console.log(`  ${randomArray}`)

    // Shuffle the array
    randomArray.sort(() => Math.random() - 0.5);

    console.log(`  randomArray: ${randomArray} | len: ${length}`)
    return randomArray
  }

  // SECTION Animating and Steps
  /* When 'Start Sorting' is clicked, calls appropriate sorting function,
    which returns an animation order array, `order`, containing:
      - j and k: 
      - bars: array of bar values
      - index: 
  */
  function handleSubmit(event) {
    const sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    const animateAccOrder = async (steps) => {
      console.log(`ANIMATE ORDER STEPS: ${JSON.stringify(steps)}`);
      for (let i = 0; i < steps.length; i++) {
        const [j, k, bars, index] = steps[i];
        setCurrStep(i);
        setCompare([j, k]);
        setSwap([]);

        // add sorted index to srted index array
        if (index !== null) {
          setSortedIndex((prevState) => [...prevState, index]);
        }

        // draw the bars
        if (bars) {
          setBars(bars);
          // animate swapping
          if (j !== null || k !== null) {
            setSwap([j, k]);
          }
        }
        await sleep(speed)
      }
    }
    event.preventDefault()

    // using .slice() to pass in a copy of `bars`
    let result;
    if (alg === "Insertion Sort") {
      result = InsertionSort(bars.slice());
    } else if (alg === "Selection Sort") {
      result = SelectionSort(bars.slice());
    } else if (alg === "Quicksort") {
      result = Quicksort(bars.slice());
    }
    animateAccOrder(result);
  }

  function prevStep() {

  }

  function nextStep() {

  }

  /* Generate random array every time the length or algorithm is changed
  */
  useEffect(() => {
    console.log(`useEffect`)
    setBars([...generateShuffledArray(len)])
  }, [len, alg])

  return (
    <div>
      <div className='title'>SORTING</div>
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
                  val={bars.join(', ')}
                  onChange={e => {console.log(`YES: ${e.target.value}`); setBars(e.target.value.split(", "))}}
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
            <SortingVisual
              bars={bars}
              compare={compare}
              swap={swap}
              sorted={sortedIndexes}
              coloursMap={sortingColoursMap}
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
