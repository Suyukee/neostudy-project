import { SyntheticEvent } from 'react';
import { ImageFallbackProps } from '@/components/image-fallback/image-fallback-types';

export default function ImageFallback({ src, fallback, alt }: ImageFallbackProps) {
	const handleFallback = (e: SyntheticEvent<HTMLImageElement, Event>) => {
		e.currentTarget.src = fallback;
		e.currentTarget.onerror = null;
	};

	return <img src={src} onError={(e) => handleFallback(e)} alt={alt} />;
}
