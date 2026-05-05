import React from 'react';
import { cn } from '../../utils/cn';
import { Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  className?: string;
  aspectRatio?: 'auto' | 'square' | 'video' | 'portrait';
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  className,
  aspectRatio = 'auto',
}) => {
  const [error, setError] = React.useState(!src);

  const aspectClasses = {
    auto: '',
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
  };

  if (error || !src) {
    return (
      <div
        className={cn(
          "w-full h-full min-h-[200px] flex flex-col items-center justify-center image-placeholder-gradient rounded border border-v-sand/40 p-4 text-center",
          aspectClasses[aspectRatio],
          className
        )}
      >
        <ImageIcon className="w-10 h-10 text-v-text-muted/40 mb-3" strokeWidth={1.5} />
        <span className="text-sm font-medium text-v-text-muted/60">{alt}</span>
        <span className="text-xs text-v-text-muted/40 mt-1 max-w-[80%] line-clamp-2">/public/images/</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={cn(
        "object-cover object-center w-full h-full",
        aspectClasses[aspectRatio],
        className
      )}
      loading="lazy"
    />
  );
};
