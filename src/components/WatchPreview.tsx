import Image from 'next/image';

type WatchPreviewProps = {
  src: string;
};

export function WatchPreview({ src }: WatchPreviewProps) {
  return (
    <figure className="watch-preview w-full max-w-[340px]">
      <Image
        src={src}
        alt="Plectara Quick Log on an Apple Watch with a dark woven band"
        width={850}
        height={1365}
        sizes="(max-width: 640px) 280px, 340px"
        className="h-auto w-full"
      />
    </figure>
  );
}
