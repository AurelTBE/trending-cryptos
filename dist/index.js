"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
app.get('/', (_, res) => {
    res.send("Welcome to Trending Cryptos API");
});
app.get("/coins", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield axios_1.default.get(`https://coin360.com/preloaded_store?&path=/&timestamp=1641131145748`).then(response => res.json(response.data.MapData.coins));
    }
    catch (e) {
        return res.json(e);
    }
}));
app.get("/coins/:coinId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { coinId } = req.params;
    try {
        return yield axios_1.default.get(`https://coin360.com/api/coins/card?coin=${coinId}&currency=USD`).then(response => res.json(response.data));
    }
    catch (e) {
        return res.json(e);
    }
}));
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
//# sourceMappingURL=index.js.map