import { Router } from "express";
import fs from 'node:fs/promises'
import { URL } from 'node:url';

export const dataController = new Router();


dataController.get('', async (req, res) => {
    try {
        const data = await fs.readFile(new URL('../../data.json', import.meta.url), 'utf-8');
        const dataOBJ = JSON.parse(data);
        res.json(dataOBJ);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Cannot open file' });
    }
})