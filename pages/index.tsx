import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function HomePage() {
	return (
		// !High order component (componente que recibe childrens)
		<MainLayout>
			<h1> Home Page </h1>
			<h2 className='title'>
					Ir a <Link href="/about">About </Link>
			</h2>
			<p className='description'>
				Get starting by editing <code className='code'> pages/index.js </code>
			</p>
		</MainLayout>
	)
}
