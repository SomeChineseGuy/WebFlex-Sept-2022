export default function handler(req, res) {
  const { method, query } = req;
  if(method === 'POST') {
    console.log('this is a post request');
    res.status(200).json({ name: 'POST!' })
  } else {
    res.status(200).json({ name: 'John Doe' })
  }
  
}
