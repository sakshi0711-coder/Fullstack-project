import { useEffect, useState } from 'react'
import { addPhoto as addPhotoAPI, getPhotos } from './utils/api'

function PhotoGallery() {
  const [photos, setPhotos] = useState([])
  const [newPhoto, setNewPhoto] = useState({ url: '', caption: '' })

  const addPhoto = async () => {
  if (newPhoto.url && newPhoto.caption) {
    const savedPhoto = await addPhotoAPI(newPhoto)  
    setPhotos(prev => [...prev, savedPhoto])        
    setNewPhoto({ url: '', caption: '' })
  }
}


    useEffect(()=>{
      const  fetchPhotos=async()=>{
        // get photos code
        const data = await getPhotos()
        setPhotos(Array.isArray(data) ? data : [])

        console.log(data)
      }
      fetchPhotos();
    },[])

  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',width:'95vw' }}>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column' }}>
      <h1 style={{textAlign:'center'}}>Photo Gallery</h1>
      
      <div style={{display:'flex',flexDirection:'column',width:'70vw',height:'85vh',border:'2px solid black',alignItems:'center',justifyContent:'center'}}>
        <h2>Add Photo</h2>
        <input
          type="url"
          placeholder="Photo URL"
          value={newPhoto.url}
          onChange={(e) => setNewPhoto({ ...newPhoto, url: e.target.value })}
        />
        <input
          type="text"
          placeholder="Caption"
          value={newPhoto.caption}
          onChange={(e) => setNewPhoto({ ...newPhoto, caption: e.target.value })}
        />
        <button onClick={addPhoto}>Add Photo</button>
      </div>
      </div>

      <div>
        <h2 style={{textAlign:'center'}}>Gallery</h2>
          <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
        {
          Array.isArray(photos) && photos?.map(ele=>{
            return(
            <div key={ele._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', textAlign: 'center' }}>
                <img src={ele?.url} alt="" style={{ width: '100%', maxWidth: '300px' }} />
                <h3>{ele?.caption}</h3>
                {/* <small><strong>Added:</strong> {ele?.caption}</small> */}
            </div>
            )
          })
        } 
        </div>
      </div>
    </div>
  )
}

export default PhotoGallery