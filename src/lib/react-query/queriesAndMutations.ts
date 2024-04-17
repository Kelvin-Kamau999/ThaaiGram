import { INewUser } from '@/types'
import{
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
}from '@tanstack/react-query'
import { SignInAccount, createUseraccount } from '../appwrite/api'


export const useCreateUserAcccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUseraccount(user)
    });
}

export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: {
            email: string; 
            password: string,
        }) => SignInAccount(user),
    });
}