import * as fs from 'fs';

export default function handler(req, res) {
    // read file which is inside blogdata folder

    fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
        if (err) res.status(500).json({ Error: "No Such a BlogF Found" });
        res.status(200).json(JSON.parse(data));
    });
}
