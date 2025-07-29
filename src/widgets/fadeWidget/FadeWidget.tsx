import Fade from '@/features/fade/ui/Fade';
import FadeBanner from '@/features/fade/ui/FadeBanner';
import FadeBannerTwo from '@/features/fade/ui/FadeBannerTwo';
import FadeTwo from '@/features/fade/ui/FadeTwo';

export default function FadeWidget() {
    return (
        <div>
            {/* <FadeBanner /> */}
            <FadeBannerTwo />
            <Fade />
            <FadeTwo />
        </div>
    );
}
