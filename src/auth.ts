import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Credentials({
    credentials: {
      email: {},
      password: {}
    }, authorize: async () => {
      return {
        email: 'teixeira.wargas@gmail.com',
        name: 'Wargas Teixeira',
        id: '1'
      }
    }
  })],
})