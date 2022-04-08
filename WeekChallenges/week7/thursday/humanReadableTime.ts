export function humanReadable(seconds:number):string {
  const minutes = Math.floor(seconds / 60)

  const onlySeconds = seconds % 60
  const onlyMinutes = minutes % 60
  const onlyHours = Math.floor(minutes / 60)
  
  return [onlyHours, onlyMinutes, onlySeconds].map(formatTime).join(':')
}

const formatTime = (time: number) :string => time >= 10 ? time.toString() : `0${time}`
