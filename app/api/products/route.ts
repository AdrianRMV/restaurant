import prisma from '@/app/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

// FETCHING ALL PRODUCTS

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);
    const cat = searchParams.get('cat');

    try {
        const products = await prisma.product.findMany({
            // Regresara con la condicion siguiente
            // Si el URL tiene un request donde se pide una categoria como "pizzas" o "Hamburgesas" la variable "cat" tendra contenido, entonces regresara los productos con la categoria que sea igual a la de la URL, si no, regresara los productos que sean isFeatured

            where: {
                ...(cat ? { catSlug: cat } : { isFeatured: true }),
            },
        });
        return new NextResponse(JSON.stringify(products), { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: 'Something went wrong' }),
            { status: 500 }
        );
    }
};

export const POST = () => {
    return new NextResponse('Hello', { status: 200 });
};
