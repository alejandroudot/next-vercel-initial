
// ? import { Inter } from '@next/font/google'
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

// ? Creo que asi se traen las fonts ---> const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
	return (
		<MainLayout>
			<h1> Contact Page </h1>
			<h2 className='title'>
					Ir a <Link href="/">Home </Link>
			</h2>
			<p className='description'>
				Get starting by editing <code className='code'> pages/contact.js </code>
			</p>
		</MainLayout>
	)
}
