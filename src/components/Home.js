import Card from "./Card";

export default function Home() {
  return (
    <div>
      <div className='title'>ALGORITHMS VISUALISER</div>
      <div className='card-list'>
        <a href="/#/sorting"><Card colour='orange' header='SORTING' draggable={false} /></a>
        <a href="/#/pattern-search"><Card colour='pink' header='PATTERN/STRING SEARCH' draggable={false} /></a>
      </div>
      
    </div>
  );
}
