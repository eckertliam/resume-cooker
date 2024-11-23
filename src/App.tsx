import Design from './components/Design/Design'
import Resume from './components/Resume/Resume'
import './App.css'

function App(): JSX.Element {
  return (
    <div className='app-container'>
      <div className='design'>
        <Design />
      </div>
      <div className='resume'>
        <Resume />
      </div>
    </div>
  )
}

export default App;
