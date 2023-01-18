// for dev and debugging
export function jsonPretty(data) {
  try {
    return JSON.stringify(JSON.parse(data), null, 2)
  } catch {
    return (JSON.stringify(data, null, 2))
  }
}