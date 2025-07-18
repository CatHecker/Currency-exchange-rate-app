import axios from 'axios'

const url = import.meta.env.VITE_API_NAMES_URL

export const get_names = async () => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch {
    console.error("Can't get names")
  }
}
