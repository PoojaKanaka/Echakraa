export interface IPageHeaderConfig {
  title: string;
  buttonConfig?: {
    title: string;
    onClick: () => void;
  };
}
