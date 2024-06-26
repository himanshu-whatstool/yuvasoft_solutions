import './App.css'
import { MyFunc } from './components/myBtn'
import BlogListState from './context/formContext'

function App() {

  return (
    <BlogListState>
      <MyFunc />
    </BlogListState>
  )
}

export default App




