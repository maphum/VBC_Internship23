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
exports.createNFT = exports.getSellNFT = exports.getRentNFT = exports.getRentNFTUser = exports.getSellNFTUser = exports.getOwnerNFTUser = void 0;
const http_status_codes_1 = require("http-status-codes");
const NFT_model_1 = __importDefault(require("../models/NFT.model"));
const catchAsync_1 = require("../utils/catchAsync");
//-------------------------User-------------------------
// [GET] /api/route/getOwnerNFTUser
//get all NFT owner for user
exports.getOwnerNFTUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const nft = yield NFT_model_1.default.find({ minter: req.params.address.toUpperCase(), status: "owner" });
    res.json(nft.map(product => product));
}));
// [GET] /api/route/getSellNFTUser
//get all NFT owner for user
exports.getSellNFTUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const nft = yield NFT_model_1.default.find({ minter: req.params.address.toUpperCase(), status: "onsale" });
    res.json(nft.map(product => product));
}));
// [GET] /api/route/getRentNFTUser
//get all NFT owner for user
exports.getRentNFTUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const nft = yield NFT_model_1.default.find({ minter: req.params.address.toUpperCase(), status: "rent" });
    res.json(nft.map(product => product));
}));
//-------------------------Market-------------------------
// [GET] /api/route/getNFT
//get all NFT rent for market
exports.getRentNFT = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const nft = yield NFT_model_1.default.find({ status: "rent" });
    console.log(nft);
    res.json(nft.map(product => product));
}));
//get all NFT sell for market
exports.getSellNFT = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const nft = yield NFT_model_1.default.find({ status: "onsale" });
    console.log(nft);
    res.json(nft.map(product => product));
}));
// [POST] /api/route/createNFT
const createNFT = (req, res, next) => {
    const name = req.body.name;
    const time_mint = req.body.expirationDateTime;
    const minter = req.body.minter.toUpperCase();
    const location = NFT_model_1.default.create({ name, time_mint, minter });
    res.status(http_status_codes_1.StatusCodes.CREATED).json({
        status: 'success',
        data: {
            location,
        },
    });
};
exports.createNFT = createNFT;
// [POST] /api/route/sellNFT
//post to SellNFT
// export const sellNFT= (req:Request,res:Response,next:NextFunction)=>{
//     const name=req.body.name;
//     const time_mint=req.body.expirationDateTime;
//     const minter=req.body.minter;
//     const sellNFT=SellNFT.create({name,time_mint,minter});
//     res.status(StatusCodes.CREATED).json({
//         status: 'success',
//         data: {
//             sellNFT,
//         },
//     })
// }