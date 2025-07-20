export type Price = {
  Name: string;
  rank: string;
  price: string;
  note: number;
};
export interface PricingProps {
  pricingList: Price[];
}
