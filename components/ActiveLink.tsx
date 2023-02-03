import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties, FC } from "react";

// ? Objeto del tipo CSS
const style: CSSProperties = {
	color: '#0070f3',
	textDecoration: 'underline'
}

interface Props {
	text: string;
	href: string;
}

export const ActiveLink: FC<Props> = ({text, href}) => {
	// ! Herramienta que nos permite saber la ruta en la que estamos y mas
	const { asPath /** era router, destructuramos el asPath */ } = useRouter()

	return (
		// ? Link ahora renderea un a (next 13), no es necesario crear uno adentro ya
		// * la propiedad style solo recibe CSSPropertys o undefined, no puede recibir null etc
		<Link href={href} style={ asPath === href ? style : undefined }> 
			{ text }
		</Link>
	)
}
