import { cn } from '@/lib/utils'

interface PhoneProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  dark?: boolean
}

const Phone = ({ className, imgSrc, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? '/phone-template-dark-edges.png'
            : '/phone-template-white-edges.png'
        }
        className="pointer-events-none z-50 select-none"
        alt="phone image"
      />

      <div className="absolute inset-0 -z-10">
        <img src={imgSrc} alt="overlaying phone image" />
      </div>
    </div>
  )
}

export default Phone
