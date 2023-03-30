// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  // console.log(req.method);
  console.log('fire');
  if(req.method === "POST") {
    // do something
    res.status(201).json({data: 'You got it!'})
  }
  if(req.method === "GET") {
    res.status(200).json({ name: 'John Doe' })
  }
  res.status(404).json({err: 'No available route'})
}
