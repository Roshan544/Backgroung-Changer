import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#212121")

  return (
    <>
      <div className="w-full h-screen duration-200 gap"
        style={{ backgroundColor: color }}>
        <div className="fixed flex justify-center bottom-11 inset-x-0 py-2 gap-3 ">
          <div className="flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
             <button
             onClick={() => setColor("Red")} 
             className="outline-none px-4 py-1 rounded-full shadow-lg"
             style={{background: "red"}}
             >Red</button>
          </div>
          <div className="flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
             <button
             onClick={() => setColor("Green")} 
             className="outline-none px-4 py-1 rounded-full shadow-lg"
             style={{background: "Green"}}
             >Green</button>
          </div>
          <div className="flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
             <button
             onClick={() => setColor("Blue")} 
             className="outline-none px-4 py-1 rounded-full shadow-lg"
             style={{background: "Blue"}}
             >Blue</button>
          </div>
          <div className="flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
             <button
             onClick={() => setColor("Pink")} 
             className="outline-none px-4 py-1 rounded-full shadow-lg"
             style={{background: "Pink"}}
             >Pink</button>
          </div>
          <div className="flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
             <button
             onClick={() => setColor("Grey")} 
             className="outline-none px-4 py-1 rounded-full shadow-lg"
             style={{background: "Grey"}}
             >Grey</button>
          </div>
          <div className="flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
             <button
             onClick={() => setColor("Yellow")} 
             className="outline-none px-4 py-1 rounded-full shadow-lg"
             style={{background: "Yellow"}}
             >Yellow</button>
          </div>
          <div className="flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
             <button
             onClick={() => setColor("Purple")} 
             className="outline-none px-4 py-1 rounded-full shadow-lg"
             style={{background: "Purple"}}
             >Purple</button>
          </div>
          <div className="flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full text-white">
          <button
          onClick={() => setColor("Black")} 
             className="outline-none px-4 py-1 rounded-full shadow-lg"
             style={{background: "Black"}}
             >Black</button>
          </div>
          <div className="flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
          <button
          onClick={() => setColor("White")} 
             className="outline-none px-4 py-1 rounded-full shadow-lg "
             style={{background: "White"}}
             >White</button>
          </div>
          <div className="flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
             <button
             onClick={() => setColor("Olive")} 
             className="outline-none px-4 py-1 rounded-full shadow-lg"
             style={{background: "olive"}}
             >Olive</button>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
