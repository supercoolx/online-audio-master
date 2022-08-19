import { useMemo } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "components/Home"
import Login from "components/Auth/Login"
import Signup from "components/Auth/Signup"

import { clusterApiUrl } from "@solana/web3.js"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import {
	GlowWalletAdapter,
	LedgerWalletAdapter,
	PhantomWalletAdapter,
	SlopeWalletAdapter,
	SolflareWalletAdapter,
	SolletExtensionWalletAdapter,
	SolletWalletAdapter,
	TorusWalletAdapter
} from "@solana/wallet-adapter-wallets"
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import "@solana/wallet-adapter-react-ui/styles.css"

function App() {
	const network = WalletAdapterNetwork.Mainnet
	const endpoint = useMemo(() => clusterApiUrl(network), [network])
	const wallets = useMemo(() => [
		new PhantomWalletAdapter(),
		new GlowWalletAdapter(),
		new SlopeWalletAdapter(),
		new SolflareWalletAdapter({ solNetwork: network }),
		new TorusWalletAdapter(),
		new LedgerWalletAdapter(),
		new SolletExtensionWalletAdapter(),
		new SolletWalletAdapter(),
	], [network])

	return (
		<ConnectionProvider endpoint={endpoint}>
			<WalletProvider wallets={wallets}>
				<WalletModalProvider>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<Signup />} />
						</Routes>
					</BrowserRouter>
				</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	)
}

export default App
