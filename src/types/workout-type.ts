export type Workout = {
  id: string,
  date: string,
  notes?: string,
  exercises: WorkoutExercise[]
}

export type WorkoutExercise = {
  id: string,
  exerciseId: string,
  name: string,
  muscleGroup: string,
  sets: Set[]
}

export type Set = {
  id: string,
  weight: number,
  reps: number,
  completed: boolean
}

