const deleteImage = async (imageID: string)=>{

    const request = await fetch(`api/images/${imageID}`, {method: 'DELETE'})
    const data = request.json()

    return data
}

export default deleteImage