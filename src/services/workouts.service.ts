import { workoutsMock } from "../mocks/workout";

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const workoutsService = {
  async getWorkouts() {
    await delay(500)

    return workoutsMock
  },

  async createWorkout() {
    await delay(500)

    const newWorkout = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      exercises: [],
    }

    workoutsMock.push(newWorkout)

    return newWorkout
  },
}
