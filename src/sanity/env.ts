export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-03'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skhsYs3rulA0keu1QxkMHZPRkXvLp8WKV7QaGSLxX24PJzZ6vNLIUfdPbbmuUOEkaY0NobTydscG33B7c8PW2frEQXSAm3dBeCw3yhyKIOrlImkbquQ9WMzwxRFR2tpFVT199Dm8TG4QY2SNfzJ5WLKtppyLz8IalTLLnJA8K6VXq7N73PES",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
