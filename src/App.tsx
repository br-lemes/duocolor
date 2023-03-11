import { Database, FlyingSaucer, Image, PaintBucket } from 'phosphor-react'
import './App.css'

// cSpell: ignore duocolor

const App = () => (
  <div className="App">
    <div>
      <FlyingSaucer size={64} weight='duotone' />
      <FlyingSaucer className='duocolor-darkcyan' size={64} weight='duotone' />
      <br />
      <Database size={64} weight='duotone' />
      <Database className='duocolor-yellow' size={64} weight='duotone' />
      <br />
      <PaintBucket size={64} weight='duotone' />
      <PaintBucket className='duocolor-tomato' size={64} weight='duotone' />
      <br />
      <Image size={64} weight='duotone' />
      <Image className='duocolor-sunset' size={64} weight='duotone'>
        <linearGradient id="sunset" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hotpink" />
          <stop offset="100%" stopColor="yellow" />
        </linearGradient>
      </Image>
    </div>
  </div>
)

export default App
