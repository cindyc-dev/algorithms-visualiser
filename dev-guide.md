# Developer Guide

## How visualisation/animation works
### step
```
{
  id: (int)
  explanation: (string)
  visuals: (visuals object)
}
```
* visuals object
  ```
  {
    type: (string: 'sorting', 'pattern-search')
    bars: ('sorting' -- array of bar objects)
    colours: (object)
  }
  ```
* bars object
  ```
  {
    index: (int)

  }
  ```
* pattern-search
  ```
  {

  }
  ```

* example sorting step
  ```
  steps = [
    {
      id: 1,
      explanation: ',
      visuals: {
        type: 'sorting',
        bars: [
          {
            index: 1,
            height: 1,
            state: 'sorted',
          },
          {
            index: 2,
            height: 4,
            state: 'comparing',
          },
          {
            index: 3,
            height: 3,
            state: 'comparing'
          },
          {
            index: 4,
            height: 2,
            state: 'default'
          }
        ]
      }
    },
    {
      id: 2,
      explanation: ',
      visuals: {
        type: 'sorting',
        bars: [
          {
            index: 1,
            height: 1,
            state: 'sorted',
          },
          {
            index: 2,
            height: 3,
            state: 'swapping',
          },
          {
            index: 3,
            height: 4,
            state: 'swapping'
          },
          {
            index: 4,
            height: 2,
            state: 'default'
          }
        ]
      }
    },
  ]

  colour-key = {
    'default': '#',
    'comparing': '#',
    'swapping': '#',
    'sorted': '#'
  }
  ```
