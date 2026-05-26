import { useGetWorkouts } from '../features/workouts/hooks/useGetWorkouts'

export function WorkoutsList(){
  const { isLoading, isError, data } = useGetWorkouts()

  if (isLoading) return <p>Cargando...</p>
  if (isError) return <p>Ha habido un error 🙅🏼...</p>

  return <ul>
    {
      data?.map(workout => (
        <li key={workout.id}>
          {workout.date} Ejercicio {workout.id}

          <ul>
            {
              workout.exercises.map(exercise => (
                <li key={exercise.exerciseId}>
                  {exercise.name} 
                  <small>{exercise.muscleGroup}</small>

                  <ul>
                    {
                      exercise.sets.map(set => (
                        <li key={set.id}>
                          {set.reps} reps - {set.weight}kg
                        </li>
                      ))
                    }
                  </ul>
                </li>
              ))
            }
          </ul>

        </li>
      ))
    }
  </ul>

}