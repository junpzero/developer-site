type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = '' }: ContainerProps) {
  return <div className={`mx-auto max-w-4xl ${className}`}>{children}</div>;
}
