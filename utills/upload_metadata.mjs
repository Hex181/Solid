import { NFTStorage, File } from "nft.storage";
import fs from "fs";

const uploadMetadata = async () => {
    const endpoint = 'https://api.nft.storage' // the default
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDEzRUNiM2JkNTg0ZDY0REExRTQ5QTNGMTUxMWM2MTYxMDc3OWI2QUIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0MDE1ODA5NTA0NSwibmFtZSI6Im5mdEhhY2sifQ.oKwSim4KHdU7Nh30fvxaCCjTLryTV0lItRdM4idE994' // your API key from https://nft.storage/manage

    const storage = new NFTStorage({ endpoint, token })
    const name = "Solid Wallet NFT";
    const description = "This NFT is given to early users of Solid Wallet"
    const metadata = await storage.store({
        name,
        description,
        image: new File([await fs.promises.readFile('SOLID_WALLET.png')], 'solid.png', {
            type: 'image/jpg',
        }),
    })
    console.log('IPFS URL for the metadata:', metadata.url)
}

uploadMetadata();