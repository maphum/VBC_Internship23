import { Router } from 'express'
const router = Router()
import * as nftController from '../controllers/NFT.controller'


router.get('/getOwnerNFTUser/:address', nftController.getOwnerNFTUser)
router.get('/getSellNFTUser/:address', nftController.getSellNFTUser)
router.get('/getRentNFTUser/:address', nftController.getRentNFTUser)




router.get('/getRentNFT', nftController.getRentNFT)
router.get('/getSellNFT', nftController.getSellNFT)
router.post('/createNFT',nftController.createNFT)

router.post('/sellNFT', nftController.sellNFT)
router.post('/rentNFT', nftController.rentNFT)
router.post('/rentlogNFT', nftController.rentlogNFT)
router.post('/unlistNFT', nftController.unlistNFT)
router.post('/changeOwner', nftController.changeOwner)
//turnbackNFT
router.post('/turnbackNFT', nftController.turnbackNFT)


export default router
