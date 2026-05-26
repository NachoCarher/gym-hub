import { useMutation, useQueryClient } from "@tanstack/react-query"
import { workoutsService } from "../../../services/workouts.service"

export function useCreateWorkout() {
  const queryClient = useQueryClient()

  return useMutation({
      mutationFn: workoutsService.createWorkout,
      onSuccess: async () => {
        await queryClient.refetchQueries({ queryKey: ["workouts"] })
      }
    })
}