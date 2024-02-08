import { useState, useEffect } from 'react';

const width = 8;
const candyColors = [
  'blue',
  'green',
  'orange',
  'purple',
  'red',
  'yellow'
]

function App() {
  const [ currentColorArrangement, setCurrentColorArrangement ] = useState([])

  const createBoard = () => {
    const randomColorArangement = []
    for (let i = 0; i < width * width; i++) {
      const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
      randomColorArangement.push(randomColor)
    }
    setCurrentColorArrangement(randomColorArangement)
  }

  useEffect(() => {
    createBoard()
  }, [])
  
  console.log(currentColorArrangement)

  return (
    <div className='app'>
      <div className='game'>
        {currentColorArrangement.map((candyColor, index) => (
          <img 
            key={index}
            style={{ backgroundColor: candyColor }}
            alt={candyColor}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
