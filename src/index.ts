import express from 'express'
import axios from 'axios';

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.get('/', (_, res) => {
  res.send("Welcome to Trending Cryptos API")
})

app.get("/coins", async (_, res) => {
    try {
        return await axios.get(`https://coin360.com/preloaded_store?&path=/&timestamp=1641131145748`).then(response => res.json(response.data.MapData.coins))
    } catch (e) {
        return res.json(e)
    }
})

app.get("/coins/:coinId", async (req, res) => {
    const { coinId } = req.params

    try {
        return await axios.get(`https://coin360.com/api/coins/card?coin=${coinId}&currency=USD`).then(response => res.json(response.data))
    } catch (e) {
        return res.json(e)
    }
})

app.listen(PORT, () => console.log(`Running on port ${PORT}`))