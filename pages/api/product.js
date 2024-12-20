import prisma from '../../lib/prisma'; // Path ke Prisma Client

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { category, skinType } = req.query;

    if (!category || !skinType) {
      return res.status(400).json({ error: 'Missing category or skinType' });
    }

    try {
      const products = await prisma.product.findMany({
        where: {
          category,
          skinTypes: {
            contains: skinType, // Memastikan skinType cocok
          },
        },
      });

      res.status(200).json({ products });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
