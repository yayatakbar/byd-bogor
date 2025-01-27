import { clsx } from 'clsx'

export function Gradient({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0',
          'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff]',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}

// export function VideoBackground({ videoSrc }) {
//   return (
//     <div className="absolute inset-0 bottom-0 overflow-hidden ring-1 ring-inset ring-black/5">
//       <div className="relative h-full w-full">
//         <video
//           className="absolute left-0 top-0 h-full w-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//           controls={false}
//         >
//           <source src={videoSrc} type="video/mp4" />
//         </video>
//         <div className="absolute h-full w-full bg-black/30" />
//       </div>
//     </div>
//   )
// }

export function VideoBackground({ videoSrc }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative h-full w-full">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          controls={false}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </div>
    </div>
  );
}
