import { createRoot } from 'react-dom/client'
import './styles.css'
import { App } from './App'

const photoUrl = (id) => `https://picsum.photos/seed/${id}/1260/750`
const leftIds = [327482, 325185, 358574, 1738986, 227675, 911738, 1103970, 416430, 310452, 572897, 842711, 101808]
const rightIds = [1440406, 1640777, 1533720, 1287145, 756689, 210186, 167699, 207983, 248797, 1461974, 459225, 1323550]

const buildWall = (ids, x, rotationY) =>
  ids.map((id, index) => {
    const y = 0
    const z = -(index * 3 + 6)
    return {
      position: [x, y, z],
      rotation: [0, rotationY, 0],
      url: photoUrl(id)
    }
  })

const images = [
  ...buildWall(leftIds, -2.5, Math.PI / 2.35),
  ...buildWall(rightIds, 2.5, -Math.PI / 2.35)
]

createRoot(document.getElementById('root')).render(<App images={images} />)
