import { menu } from './data/menu'

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(menu)
    }
}
