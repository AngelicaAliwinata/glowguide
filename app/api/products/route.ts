import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  const skinType = searchParams.get('skinType');

  if (!category || !skinType) {
    return NextResponse.json(
      { error: 'Missing category or skinType' },
      { status: 400 }
    );
  }

  try {
    const products = await db.product.findMany({
      where: {
        category, // Filter berdasarkan kategori
        skinTypes: {
          contains: skinType, // Filter berdasarkan jenis kulit
        },
      },
      select: {
        id: true,
        productName: true,
        brand: true,
        category: true,
        photoProduct: true, // Tambahkan ini untuk mengambil URL gambar
      },
    });

    return NextResponse.json({ products });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
