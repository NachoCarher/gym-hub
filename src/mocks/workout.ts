import type { Workout } from "../types/workout-type";

export const workoutsMock: Workout[] = [
  {
    id: "1",
    date: "2026-05-21",
    exercises: [
      {
        exerciseId: "ex1",
        id: "bench-press",
        name: "Bench Press",
        muscleGroup: "chest",
        sets: [
          {
            id: "set1",
            weight: 80,
            reps: 8,
            completed: true
          }
        ]
      }
    ]
  }
]