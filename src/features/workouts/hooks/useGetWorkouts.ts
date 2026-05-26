import { useQuery } from "@tanstack/react-query";
import { workoutsService } from "../../../services/workouts.service";

export function useGetWorkouts(){
  return useQuery({
    queryKey: ["workouts"],
    queryFn: workoutsService.getWorkouts,
  })
}