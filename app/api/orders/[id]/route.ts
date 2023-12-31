import prisma from '@/app/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
    params: {
        id: string;
    };
};

export const PUT = async (req: NextRequest, { params }: Params) => {
    const { id } = params;

    try {
        const body = await req.json();
        await prisma.order.update({
            where: {
                id: id,
            },
            data: { status: body },
        });
        return new NextResponse(
            JSON.stringify({ message: 'ORDERD HAS BEEN UPDATED!' }),
            { status: 200 }
        );
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ message: 'Somenthing went wrong!!' }),
            { status: 500 }
        );
    }
};
