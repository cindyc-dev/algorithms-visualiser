import { breakpoints, cols, layouts, sortingColoursMap } from '../../constants';
import React, { useState, useEffect } from 'react';
import Card from '../Card';
import { Responsive, WidthProvider } from "react-grid-layout";
import SortingVisual from './SortingVisual';
import InsertionSort from './Algorithms/InsertionSort'

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
  const [animPlaying, setAnimPlaying] = useState(false)

  /* Generates new shuffled array and resets compare, swap and sortedIndexes 
      arrays.
  */
  function generateShuffledArray(len) {
    setCompare([])
    setSwap([])
    setSortedIndex([])

    // Creates array [1 ... len]
    const randomArray = Array.from(Array(len + 1).keys()).slice(1)

    // Shuffle the array
    for (let i = len-1; i > 0; i--) {
      // generate a random index
      const j = Math.floor(Math.random() * (i+1))

      // swap
      var temp = randomArray[i];
      randomArray[i] = randomArray[j];
      randomArray[j] = temp;
    }

    return randomArray
  }

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
      setAnimPlaying(true)
      for (let i = 0; i < steps.length; i++) {
        const [j, k, bars, index] = steps[i]
        setCompare([j, k])
        setSwap([])

        // add sorted index to srted index array
        if (index !== null) {
          setSortedIndex((prevState) => [...prevState, index])
        }

        // draw the bars
        if (bars) {
          setBars(bars)
          // animate swapping
          if (j !== null || k !== null) {
              setSwap([j, k])
          }
        }
        await sleep(speed)
      }
      setAnimPlaying(false)
    }

    event.preventDefault()
    // using .slice() to pass in a copy of `bars`
    if (alg === "Insertion Sort") {
      animateAccOrder(InsertionSort(bars.slice()))
    } else if (alg === "Selection Sort") {
      // animateAccOrder(SelectionSort(bars.slice()))
    } else if (alg === "Quicksort") {
      // animateAccOrder(Quicksort(bars.slice()))
    }
  }

  function prevStep() {

  }

  function nextStep() {

  }

  /* Generate random array every time the length or algorithm is changed
  */
  useEffect(() => {
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
          <Card colour='orange' header='input'/>
        </div>
        <div key='cases'>
          <Card colour='red' header='cases'/>
        </div>
        <div key='controls'>
          <Card
            colour='pink'
            header='controls'
            child={
              <div className='controls-container'>
                <button onClick={prevStep}>prev</button>
                {}
                <button onClick={nextStep}>next</button>
                <button onClick={generateShuffledArray}>generate</button>
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
