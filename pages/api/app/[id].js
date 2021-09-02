import DB from '@database'


const oneProduct = async (req, res) => {
  try {
    
    const db = new DB()
    const id = req.query.id
    const entry = await db.getById(id)
   
    
    res.status(200).json(entry)
  } catch (e) {
    console.error(e)
    res.statusCode = 500
    res.end(
      JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
    )
  }
}

export default oneProduct
