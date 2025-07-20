export type MenuLink = {
  id: number;
  title: string;
  link: string;
};

export type MenuLinks = MenuLink[];

export type MenuLinksProps = {
  colorLinksHover?: string;
  colorLinks?: string;
  borderNav?: string;
  closeMenu?: () => void;
};
