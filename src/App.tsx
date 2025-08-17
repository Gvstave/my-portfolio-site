import './App.css'
import './index.css'
// import { About } from './sections/about.tsx';
import { Home } from './sections/home.tsx';
import { Skillset } from './sections/skillset.tsx';
import { Experience } from './sections/experience.tsx';

function App() {
  return (
    <div className='font-sen'>
      {/* Hello world */}
      <Home />
      {/* <About /> */}
      <Experience />
      <Skillset />
    </div>
  )
}

export default App;