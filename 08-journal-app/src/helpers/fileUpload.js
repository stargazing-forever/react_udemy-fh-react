export const fileUpload = async( file ) => {

  const api = 'https://api.cloudinary.com/v1_1/dc1k4vnoy/upload';
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'react-journal-curso');

  try {
    const resp = await fetch(api, {
      method: 'POST',
      body: formData,
    });

    if(resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }
    
  } catch (err) {
    throw err;
  }

}