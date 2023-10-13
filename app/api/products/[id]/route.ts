import prisma from '@/app/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
    params: {
        id: string;
    };
};

// GET SINGLE PRODUCT
export const GET = async (req: NextRequest, { params }: Params) => {
    const { id } = params;

    try {
        const product = await prisma.product.findUnique({
            where: {
                id: id,
            },
        });
        return new NextResponse(JSON.stringify(product), {
            status: 200,
        });
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ message: 'Somenthing went wrong!!' }),
            { status: 500 }
        );
    }
};
