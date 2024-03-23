import './App.css'
import Header from './components/Header'
import ArticleBlog from './components/Article'

const nama = "Bagas"

function App() {

  return (
    <>
    <Header judul="Doscom University"/>
    <ArticleBlog />
    <p className='font-bold'>Holaaa DOSCOM UNIVERSITY</p>
    <h1>{ 5 + 5 }</h1>
    <h1>10</h1>
    <h1>Nama Saya { nama }</h1>
    </>
  )
}

export default App
