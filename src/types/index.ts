export type AppProps = {
  light: boolean;
  setLight: (light: boolean) => void;
};
export type TopUpType = {
  price: string;
  label: string;
  value: number;
};
export type CustomSliderT = {
  value: number;
  defaultValue: number;
  handleChange: (value: number) => void;
  marks: TopUpType[];
};