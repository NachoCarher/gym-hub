import './App.css'
import { Button } from '@mui/material'
import { WorkoutsList } from './components/WorkoutsList'


function App() {
  return (
    <>
      <h1>Gym Hub</h1>
      <Button variant='contained'>Welcome! 🎉</Button>
      <WorkoutsList />
    </>
  )
}

export default App
