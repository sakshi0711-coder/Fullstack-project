// API Functions - Students should implement these

export const getPhotos = async () => {
    const response = await fetch ('http://localhost:3002/api/photos')
  const data = await response.json()
  return data;
};

export const addPhoto = async (photo) => {
  // TODO: Send POST request to add photo
  // TODO: Return the created photo
   const response = await fetch('http://localhost:3002/api/photos',{
    headers:{
      "Content-type":"application/json"
    },
    method:"POST",
    body:JSON.stringify(photo)
  })
  const data = await response.json()
   console.log('Adding photo:', photo);
  alert("Photo Saved")
  return data
 
};

// export const deletePhoto = async (id) => {
//   // TODO: Send DELETE request to remove photo
//   // TODO: Return success status
// };