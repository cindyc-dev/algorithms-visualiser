import { breakpoints, cols, layouts } from '../../constants';
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

  /* ------------------------------ Naive Search ------------------------------ */
  const NaiveInformation = 
  <p className="bp3-text-muted">
      Naive Search (also known as Sequantial Search) uses brute-force to 
      find the pattern in the text.
  </p>

const NaiveBest = 
  <div className="bp3-text-muted">
      <p >The best case occurs when the <b>first character</b> in the 
      pattern is <b>not in the text</b>.</p>
      <p>Example:</p>
      <ul>
          <li>Text: <code>AAAAAAA</code></li>
          <li>Pattern: <code>BAA</code></li>
      </ul>
      <p>Time Complexity: <code>O(n)</code>, where n is the length of the text.</p>
      <ButtonInput
          disabled={animPlaying}
          onClick={()=> {setText(Array(7).fill("A")); setPattern(["B", "A", "A"])}}
      >Input Best Case</ButtonInput>
  </div>

const NaiveWorst = 
  <div className="bp3-text-muted">
      <p >The worst case occurs when the <b>last character</b> in the 
      pattern is <b>not in the text</b>.</p>
      <p>Example:</p>
      <ul>
          <li>Text: <code>AAAAAAA</code></li>
          <li>Pattern: <code>AAB</code></li>
      </ul>
      <p>Time Complexity: <code>O(m*n)</code>, where m is the length of pattern and n is the length of the text.</p>
      <ButtonInput
          disabled={animPlaying}
          onClick={()=> {setText(Array(7).fill("A")); setPattern(["A", "A", "B"])}}
      >Input Worst Case</ButtonInput>
  </div>

const NaiveAverage = 
  <div className="bp3-text-muted">
      <p >For an average case....</p>
      <p>Time Complexity: <code>O(n)</code></p>
  </div>

/* -------------------------------- BMH Seach ------------------------------- */
const KMPInformation = 
  <p className="bp3-text-muted">
      KMP Search Information...
  </p>
const KMPBest = 
  <div className="bp3-text-muted">
      <p >The best case occurs when the pattern is able to shift as right as possible (shift <code>m-1</code> steps to the right).</p>
      <p>Example:</p>
      <ul>
          <li>Text: <code>ABCABCABC</code></li>
          <li>Pattern: <code>ABCD</code></li>
      </ul>
      <p>Time Complexity: <code>O(m+n)</code></p>
      <p>Searching Stage Time Complexity: <code>O(n + n/m)</code></p>
      <p>Note that:</p>
      <ul>
          <li>the best and worst case for KMP are linear</li>
          <li></li>
      </ul>
      <ButtonInput
          disabled={animPlaying}
          onClick={()=> {setText(["A", "B", "C", "A", "B", "C", "A", "B", "C", "A"]); setPattern(["A", "B", "C", "D"])}}
      >Input Best Case</ButtonInput>
  </div>

const KMPWorst = 
  <div className="bp3-text-muted">
      <p >The worst case occurs when the pattern is only able to shift 1 step to the right each time.</p>
      <p>Example:</p>
      <ul>
          <li>Text: <code>AABAABAABAAB</code></li>
          <li>Pattern: <code>AAA</code></li>
      </ul>
      <p>Time Complexity: <code>O(m+n)</code></p>
      <p>Searching Stage Time Complexity: <code>O(n + (m-1)*(n/m))</code></p>
      <p>Note that:</p>
      <ul>
          <li>the best and worst case for KMP are linear</li>
          <li>generally, <code>O(m+n)</code> &lt; <code>O(2m)</code> because <code>m &le; n</code></li>
      </ul>
      <ButtonInput
          disabled={animPlaying}
          onClick={()=> {setText(["A", "A", "B", "A", "A", "B", "A", "A", "B",]); setPattern(["A", "A", "A"])}}
      >Input Worst Case</ButtonInput>
  </div>

const KMPAverage = 
  <div className="bp3-text-muted">
      <p >For an average case....</p>
      <p>Time Complexity: <code>O(n)</code></p>
  </div>

/* ------------------------------- KMP Search ------------------------------- */
const BMHInformation = 
  <p className="bp3-text-muted">
      BMH Search Information...
  </p>
const BMHBest = 
  <div className="bp3-text-muted">
      <p >The best case occurs when the <b>first character</b> in the 
      pattern is <b>not in the text</b>.</p>
      <p>Example:</p>
      <ul>
          <li>Text: <code>AAAAAAA</code></li>
          <li>Pattern: <code>BAA</code></li>
      </ul>
      <p>Time Complexity: <code>O(n)</code>, where n is the length of the text.</p>
      <ButtonInput
          disabled={animPlaying}
          onClick={()=> {setText(Array(7).fill("A")); setPattern(["B", "A", "A"])}}
      >Input Best Case</ButtonInput>
  </div>

const BMHWorst = 
  <div className="bp3-text-muted">
      <p >The worst case occurs when the <b>last character</b> in the 
      pattern is <b>not in the text</b>.</p>
      <p>Example:</p>
      <ul>
          <li>Text: <code>AAAAAAA</code></li>
          <li>Pattern: <code>AAB</code></li>
      </ul>
      <p>Time Complexity: <code>O(m*n)</code>, where m is the length of pattern and n is the length of the text.</p>
      <ButtonInput
          disabled={animPlaying}
          onClick={()=> {setText(Array(7).fill("A")); setPattern(["A", "A", "B"])}}
      >Input Worst Case</ButtonInput>
  </div>

const BMHAverage = 
  <div className="bp3-text-muted">
      <p >For an average case....</p>
      <p>Time Complexity: <code>O(n)</code></p>
  </div>

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
          animateAccOrder(NaiveSearch(text.slice(), pattern.slice()));
      } else if (alg === "BMH Search") {
          animateAccOrder(BMHSearch(text.slice(), pattern.slice()));
      } else if (alg === "KMP Search") {
          animateAccOrder(KMPSearch(text.slice(), pattern.slice()));
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
                <TextInput
                  label='pattern'
                  placeholder='ABC...'
                  val={pattern.join('')}
                  onChange={e => setPattern(e.target.value.split(""))}
                />
                <TextInput
                  label='text'
                  placeholder='AAABCABCAA...'
                  val={text.join('')}
                  onChange={e => setText(e.target.value.split(""))}
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
                  <option value='Naive Search'>Naive Search</option>
                  <option value='BMH Search'>BMH Search</option>
                  <option value='KMP Search'>KMP Search</option>
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
              text={text}
              pattern={patternCopy}
              orange={orange}
              green={green}
              red={red}
            />
          }/>
        </div>
        <div key='explanation'>
          <Card 
            colour='mint'
            header='result'
            child={
              <ul>
                {!result.length ? (
                    <p>Pattern Not Found</p>
                ) : (
                    result.map((r, i) => (
                        <p key={i}>Pattern was found in {r}</p>
                    ))
                )}
              </ul>
            }
          />
        </div>
      </ResponsiveGridLayout>
    </div>
  );
}
