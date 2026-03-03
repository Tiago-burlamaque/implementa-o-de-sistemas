import db from '../config/db.js'

export const getPranchas = async (req, res) => {
    try {
        const [rows] = db.query('SELECT idpranchas, assinatura_shape, numero_id, dimensoes_completas, data_fabricacao FROM prancha WHERE ativo = 1')

        if (rows.length === 0) {
            return res.status(404).json({ Message: "Prancha não encontrada." })
        }

        return res.status(200).json({ Message: "Pranchas encontradas com sucesso.", data: rows })
    } catch (error) {
        return res.status(400).json({ Message: "Erro ao buscar pranchas." })
    }
}

export const postPranchas = async (req, res) => {
    try {
        const assinatura_shape = req.body.assinatura_shape;
        const numero_id = req.body.numero_id;
        const dimensoes_completas = req.body.dimensoes_completas;
        const data_fabricacao = req.body.data_fabricacao;

        const [results] = await db.query('INSERT INTO produto (assinatura_shape, numero_id, dimensoes_completas, data_fabricacao, ativo) VALUES (?, ?, ?, ?, ?)', [assinatura_shape, numero_id, dimensoes_completas, data_fabricacao, 1])

        if (results.affectedRows === 0) { // Prancha não foi afetado
            return res.status(400).json({ message: "Prancha não encontrado." })
        }

        return res.status(201).json({ message: "Prancha criado." })

    } catch {
        return res.status(404).json({ message: "Erro ao criar produto", error: error.message })
    }

}