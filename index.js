const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
    Transaction,
    Account
}
= require('@solana/web3.js')

const newPair = new Keypair()

const publicKey = new PublicKey(newPair_keypair.publicKey).toString()
const secretKey = newPair_keypair.secretKey

const getWalletBalance = async () => {
    try {
        const connection = new Connection(clusterApiUrl("devnet"),"confirmed")
        const myWallet = await Keypair.fromSecretKey(secretKey)
        const walletBalance = await connection.getBalance(
            new PublicKey(myWallet.publicKey)
        )
        console.log(`Public Key: ${publicKey}`)
        console.log(`Wallet balance: ${walletBalance}`)
    } catch (err) {
        console.error(err)
    }
}

const airDropSol = async () => {
    try {
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
        const walletKeyPair = await Keypair.fromSecretKey(secretKey);
        const fromAirDropSignature = await connection.requestAirdrop(
            new PublicKey(walletKeyPair.publicKey),
            2 * LAMPORTS_PER_SOL
        );
        await connection.confirmTransaction(fromAirDropSignature);
    } catch(err){
        console.error(err)
    }
}

const driverFunction = async () => {
    await getWalletBalance()
    await airDropSol()
    await getWalletBalance()
}

