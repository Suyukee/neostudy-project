import { DividerProps } from '@/components/divider/divider-type';
import '@/components/divider/divider.scss';

export default function Divider({
	color = 'primary',
	orientation = 'horizontal',
	classes,
}: DividerProps) {
	return <div className={`divider ${color} ${orientation} ${classes}`}></div>;
}
