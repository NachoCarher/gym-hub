import { Button, Card, CardContent, FormControl, FormHelperText, InputAdornment, OutlinedInput, TextField, Typography } from '@mui/material'
import { WorkoutsList } from '../components/WorkoutsList'
import { useId, useState } from 'react'
import { useCreateWorkout } from '../features/workouts/hooks/useCreateWorkout'

function SetInputCard() {
  const outlinedWeightId = useId()
  const outlinedRepsId = useId()

  return (
  <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        Serie
      </Typography>

      <TextField id={`${outlinedRepsId}-input`} label="Repeticiones" variant="outlined" />

      <FormControl variant="outlined">
        <OutlinedInput
          id={`${outlinedWeightId}-input`}
          endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          aria-describedby={`${outlinedWeightId}-helper-text`}
          inputProps={{
            'aria-label': 'Peso',
          }}
          />

        <FormHelperText id={`${outlinedWeightId}-helper-text`}>
          Peso
        </FormHelperText>
      </FormControl>

    </CardContent>
  </Card>
  )
}

function ExerciseInputCard() {
  const outlinedExerciseName = useId()

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Ejercicio
        </Typography>
        
        <TextField id={`${outlinedExerciseName}-input`} label="Nombre del ejercicio" variant="outlined" />

        <SetInputCard />
      </CardContent>
    </Card>
  )
}

function WorkoutInputCard() {
  const outlinedWorkoutDate = useId()
  const { mutate } = useCreateWorkout()

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('✅ handleSubmit ejecutado')
    mutate()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            Workout
          </Typography>
          
          <TextField id={`${outlinedWorkoutDate}-input`} label="Fecha" variant="outlined" />

          <ExerciseInputCard />

          <Button type="submit" variant='contained'>Registrar Workout</Button>
        </CardContent>
      </Card>
    </form>
  )
}

// lista los workouts que tenemos y muestra el input de workout
export function WorkoutPage(){
  const [isDisplayForm, setIsDisplayForm] = useState(false)

  return (
  <>
    <h1>Gym Hub</h1>
    <WorkoutsList />
    <Button variant='contained' onClick={() => setIsDisplayForm(true)}>Añadir Workout</Button>

    {
      isDisplayForm && <WorkoutInputCard />
    }
  </>
)}