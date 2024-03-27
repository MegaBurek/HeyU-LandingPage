import { useQuery } from "@tanstack/react-query"
import { client } from "./useSupabase"

export const useUniversities = () => {
    const useUniversitiesKey = "universities"

    return useQuery({
        queryKey: [useUniversitiesKey],
        queryFn: async () => {
            const { data: universities } = await client.from("universities").select().eq('enabled', true)

            return {
                universities
            }
        },
        enabled: true
    })
}