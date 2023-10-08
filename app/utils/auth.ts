import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.Google_ID!,
            clientSecret: process.env.Google_SECRET!,
        }),
    ],
};
