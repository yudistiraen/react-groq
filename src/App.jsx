import { useState } from "react"
import './App.css'

import { requestToGroqAi } from './utils/groq'
import { Light as SyntaxHighlight} from "react-syntax-highlighter"
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism"

function App() {

  const [data, setData] = useState("")

  const handleSubmit = async() => {
    const ai = await requestToGroqAi(content.value)
    console.log(ai)
    setData(ai)
  }
  return (
    <main>
      <div>
        <h1 className='text-4xl text-indigo-500'>
          REACT | GROQ AI
        </h1>
      </div>
      <div className='flex flex-col min-h-[80vh] gap-5 mt-5'>
        <form action="">
          <textarea 
            placeholder='What r u asking today?'
            id="content"
            type="text" 
            className='py-2 px-4 text-md rounded-md outline-none'/>
          <div>
            <button 
            onClick={handleSubmit}
              type='button'
              className="bg-indigo-500 text-white px-5 py-2 font-bold rounded-md mt-3">Kirim</button>
          </div>
        </form>
        <div className="max-w-xl mx-auto">
          { data ? 
            <SyntaxHighlight language="switf" style={darcula} wrapLongLines={true}>
              {data}
            </SyntaxHighlight>
          : null}
          
        </div>
        

      </div>
    </main>
  )
}

export default App
