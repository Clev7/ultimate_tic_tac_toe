import { ChessClock } from "@/components/ChessClock";

export default function App() {
  return (
    <ChessClock
      p1Time="5m"
      p2Time="5m"
      delay={0}
      increment={5} />
  )
}
