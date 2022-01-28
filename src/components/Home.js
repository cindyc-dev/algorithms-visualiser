import Card from "./Card";

export default function Home() {
  return (
    <div>
      <div className='title'>ALGORITHMS VISUALISER</div>
      <div className='card-list'>
        <a href="/algorithms-visualiser/#/sorting">
          <Card colour='orange' header='SORTING' />
        </a>
        <a href="/algorithms-visualiser/#/pattern-search">
          <Card colour='pink' header='PATTERN/STRING SEARCH' />
        </a>
      </div>
      
    </div>
  );
}
