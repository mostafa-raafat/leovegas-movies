import axios from "axios";
import qs from "query-string";
import { API_URL, API_KEY } from "../config/constant";

/**
 * Resolve Query For Search Path.
 * @param {String} path 
 * @param {Object} query 
 */
export const resolveSearchPath = (path, query) => {
  return `${API_URL}${path}?${qs.stringify({
    api_key: API_KEY,
    query,
  })}`;
}

/**
 * Get Trailer Based On Movie Id.
 * @param {Number} id 
 */
export const getTrailer = async(id) => {
  const res = await axios.get(resolveSearchPath(`movie/${id}/videos`))
  if (res.data.results && res.data.results.length > 0) {
    return res.data.results[0].key
  }
  return null
}