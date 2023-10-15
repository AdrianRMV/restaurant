import { getAuthSession } from '@/app/utils/auth';
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

// DELETE SINGLE PRODUCT
export const DELETE = async (req: NextRequest, { params }: Params) => {
    const { id } = params;
    const session = await getAuthSession();

    if (session?.user.isAdmin) {
        try {
            const product = await prisma.product.delete({
                where: {
                    id: id,
                },
            });
            return new NextResponse(
                JSON.stringify('Product has been deleted'),
                {
                    status: 200,
                }
            );
        } catch (error) {
            return new NextResponse(
                JSON.stringify({ message: 'Somenthing went wrong!!' }),
                { status: 500 }
            );
        }
    }

    return new NextResponse(
        JSON.stringify({ message: 'You are not allowed!' }),
        { status: 403 }
    );
};
