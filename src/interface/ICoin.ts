export interface ICoin {
  name: string
  symbol: string
  quotes: {
    USD: {
      price: number
    }
  }
}