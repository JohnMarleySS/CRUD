import express from 'express'
import mongooseModel from '../model/model'
import Products from '../model/inteface-model'

const router = express.Router()


// metodo de get, para tdas as datas, pegadno todos os itens do banco de dados
router.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const data: Products[] = await mongooseModel.find()
        res.json(data)
        console.log("Feito Get de todos os items")
    } catch (error: any){
        res.status(500).json({ message: error.message })
    }
})

// post, adiciono no banco de dados, eu tenho um schema de como os dados tem que vir do body
// após isso fazemos um try catch salvando os dados 
router.post('/', async (req: express.Request, res: express.Response) => {
    const data = new mongooseModel<Products>({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    })
    try {
        const dataToSave = data.save()
        console.log("Feito Post do items")
        res.status(200).json(dataToSave)
    } catch (error: any){
        res.status(400).json({ message: error.message })
    }

})


// Rota de get pelo id, precisamos pegar o id recebido por parametros, depois buscamos
// pelo findById do mongoose, retornando um status 200 e a data
router.get('/:id', async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const data = await mongooseModel.findById(id)
        console.log("Feito Get do item especifico")
        res.status(200).json(data)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
        
    }
})

// rota de delete que recebe um id pelo parametro
router.delete('/:id', async (req: express.Request, res: express.Response) => {    
    try {
        const { id } = req.params;
        const data = await mongooseModel.findByIdAndDelete(id)
        console.log('Item deletado')
        res.status(200).send(`Document deleted: ${data}`)

    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }

})

// atualizar com base no id, pegamos o id por parametros, fazer um update da data pelo body,
// fazendo options e retornando o resultado!

// options server para devolter o item atualiado
router.patch('/:id', async (req: express.Request, res: express.Response) => {    
    try {
        const { id } = req.params
        const updateData = req.body
        const options = { new: true }

        const result = await mongooseModel.findByIdAndUpdate(id, updateData, options)

        console.log("Item atualizado")
        
        res.send(result)
    } catch (error: any) {   
        res.status(400).json({ message: error.message })
    }
})


export default router