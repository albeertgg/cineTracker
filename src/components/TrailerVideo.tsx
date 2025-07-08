import { twMerge } from 'tailwind-merge';

interface Props {
  videoId?: string;
  className?: string;
}

export default function TrailerVideo(props: Props) {
  const { videoId, className } = props;

  const classes = twMerge(
    'w-full aspect-video outline-none rounded-xl',
    className
  );

  if (!videoId) return null;

  return (
    <iframe
      className={classes}
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
