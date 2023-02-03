import { NextApiRequest, NextApiResponse } from 'next';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// ! Los types no son expandibles, las interfaces si.
type Data = {
	name: string;
	// * ? para indicar que no es obligatoria esta prop
	ok?: boolean;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	res.status(200).json({ name: 'John Doe' })
}
