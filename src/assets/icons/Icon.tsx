import type { FC } from "react";

interface IconProps {
  width?: number;
  customClassName?: string;
}

const Icon: FC<IconProps> = ({
  width,
  customClassName = "",
  children,
}: any) => (
  <div className={`icon ${customClassName}`} style={{ width }}>
    {children}
  </div>
);

export const createIcon = (icon: JSX.Element) => {
  const IconWithProps = (props: IconProps) => <Icon {...props}>{icon}</Icon>;

  return IconWithProps;
};
