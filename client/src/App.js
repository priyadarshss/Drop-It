import { useState, useEffect, useRef } from 'react'
import { uploadFile } from './services/api'
import './App.css'

function App() {
  const [file, setFile] = useState('')
  const [result, setResult] = useState('')

  const fileInputRef = useRef()

  const onUploadClick = () => {
    fileInputRef.current.click()
  }

  useEffect(() => {
    const getImage = async() => {
      if(file){
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
      }
    }
  }, [file])
  console.log(file)

  return (
    <div className='container'>
      <div className='wrapper'>
        <h1>Simple File Sharing!</h1>
        <p>Upload and share the download link.</p>

        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type='file'
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
    </div>
  )
}

export default App
