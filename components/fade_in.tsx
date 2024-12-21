
// wrapper component to add css fade in animation with arbitrary delay
export const FadeIn: React.FC<{delay: number, className: string, children: React.ReactNode}> = ({delay = 0, className="", children}) => {
  return (
    <div className={`opacity-0 animate-fade-up ${className}`} style={{animationDelay: `${delay}ms`}}>
      {children}
    </div>
  )
}