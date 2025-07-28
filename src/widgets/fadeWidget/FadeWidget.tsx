import Fade from '@/features/fade/ui/Fade';
import FadeBanner from '@/features/fade/ui/FadeBanner';
import FadeTwo from '@/features/fade/ui/FadeTwo';

export default function FadeWidget() {
    return (
        <div>
            <FadeBanner />
            <Fade />
            <FadeTwo />
        </div>
    );
}
