import { useQuery } from "@tanstack/react-query"
import { useDataEngine } from "@dhis2/app-runtime"

type UserInfo = {
    name: string
}

export const useUserInfo = () => {
    const dataEngine = useDataEngine();
    const { data, isLoading, error } = useQuery({
        queryKey: ['userInfo'],
        queryFn: (): Promise<Record<string, unknown>> => {
            return dataEngine.query({
                userInfo: {
                    resource: 'me',
                },
            })
        },
        select: (data: Record<string, unknown>) => {
            return data.userInfo as UserInfo
        },
    })

    return { data, isLoading, error }
}