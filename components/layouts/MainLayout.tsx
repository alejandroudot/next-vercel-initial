import Head from "next/head"
import Image from "next/image"
import { FC } from "react"
import { Props } from "../../global/types"
import { Navbar } from "../Navbar"

import styles from './MainLayaout.module.css'

export const MainLayout: FC<Props> = ({ children }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home - Alejandro</title>
				<meta name="description" content="Home Page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar/>
			<main className={styles.main}>
				{ children }
				<div>
							By{' '}
					<Image
						src="/vercel.svg"
						alt="Vercel Logo"
						className={styles.vercelLogo}
						width={100}
						height={24}
						priority
					/>
				</div>
			</main>
		</div>
	)
}
