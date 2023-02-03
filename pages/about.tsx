
import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'
import { ReactElement } from 'react';

export default function AboutPage() {
	return (
		<>
			<h1> About Page </h1>
			<h2 className='title'>
				Ir a <Link href="/">Home </Link>
			</h2>
			<p className='description'>
			Get starting by editing <code className='code'> pages/about.js </code>
			</p>
		</>
	)
}

AboutPage.getLayout = function getLayout (page: ReactElement) {
	return (
		<MainLayout>
			<DarkLayout>
				{ page }
			</DarkLayout>
		</MainLayout>
	)
}