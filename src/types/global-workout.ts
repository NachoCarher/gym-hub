export type Exercise = {
  id: string,
  name: string,
  muscleGroup: MuscleGroup,
  equipment?: string
}

type MuscleGroup =
  | "chest"
  | "back"
  | "legs"
  | "shoulders"
  | "arms"
  | "core"