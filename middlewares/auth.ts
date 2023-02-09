import jwt from 'jsonwebtoken'

export default async(req, res, next) => {
  try {
    // Check user auth token
    if (!req.headers.authorization) {
      throw new Error('Unauthorized')
    }
    const decoded = await jwt.verify(req.headers.authorization, process.env.JWT_SECRET);

    return next()
  } catch(err) {
    console.log(err)
    return res.status(400).json({Error: 'Unauthorized'})
  }
}