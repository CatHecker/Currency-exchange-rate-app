import axios from 'axios'

const url = import.meta.env.VITE_API_URL

export const get_rates = async () => {
  try {
    const response = await axios.get(url)
    return response.data.rates
  } catch {
    console.error("Can't get rates")
  }
}
